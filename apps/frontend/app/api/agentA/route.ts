import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/prisma/prismaCl";
import { groq } from "@ai-sdk/groq";
import { generateText, streamText } from "ai";
import axios from "axios";
import { agentC } from "@/app/lib/agentC";
import { v2 as cloudinary } from "cloudinary";
import { storeReportEmbedding } from "@/app/lib/reportVector";
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  let patientId = formData.get("patientId") as string;
  const file = formData.get("file") as File;

  const body = new FormData();
  body.append("file", file);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

  const uploadRes = await cloudinary.uploader.upload(base64, {
    folder: "radiology",
    resource_type: "auto", // image, pdf...
  });

  const res = await axios.post("http://localhost:8000/predict", body);

  let data = res.data;
  if (!data.top3_labels) {
    return NextResponse.json({
      success: false,
      error: "Missing labels",
    });
  }
  const disease = JSON.stringify(data.top3_labels);
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  try {
    type Top3Labels = [string, number][];
    let diseaseInfoResponses: string[] = [];
    data.top3_labels.forEach(async (element: Top3Labels) => {
      let res = await axios.get(
        `${baseUrl}/api/agentB?token=${patientId}&disease=${element[0]}`
      );
      let data = res.data.results;
      diseaseInfoResponses.push(data);
      //   console.log({ diseaseInfoResponses }, "from agent a");
    });
    const result = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      messages: [
        {
          role: "system",
          content:
            "You are a medical explainer for chest diseases. Refer to official medical websites like NIH and give info. Don't provide random data not available on official sources. Provide references",
        },
        {
          role: "user",
          content: `Here are the possible diseases ${disease} and diseaseInfoResponses ${diseaseInfoResponses}. 
          Based on this, provide a concise analysis of the medical image including likely diagnosis, differentials, and recommended next steps for diagnosis and treatment.`,
        },
      ],
    });

    let userId = (
      await prisma.user.findUnique({
        where: { authUserId: patientId },
      })
    )?.id as string;

    let reportData = await prisma.report.create({
      data: {
        userId,
        imageUrl: uploadRes.secure_url, //need to upload to s3 or cloudinary and use dynamic url
        aiAnalysis: {
          create: {
            findings: JSON.stringify(result),
          },
        },
      },
      include: {
        aiAnalysis: true,
        diagnosis: true,
        doctor: { include: { specialization: true } },
      },
    });
    console.log({ reportData }, "new report created agent a");
    await storeReportEmbedding(reportData);
    agentC(patientId); //async call to update patient context in background

    // let res = axios.get(`https://www.ncbi.nlm.nih.gov/medgen/?term=${element[0]}`);
    return NextResponse.json({ data, success: true });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
