import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { groq } from "@ai-sdk/groq";
import { generateText, streamText } from "ai";
import axios from "axios";
import { agentC } from "@/app/lib/agentC";
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  let patientId = formData.get("patientId") as string;
  const file = formData.get("file") as File;

  const body = new FormData();
  body.append("file", file);

  const res = await axios.post("http://localhost:8000/predict", {
    method: "POST",
    body,
  });

  let data = res.data;
  if (!data.top3_labels) {
    return NextResponse.json({
      success: false,
      error: "Missing labels",
    });
  }
  const disease = JSON.stringify(data.top3_labels);
  try {
    type Top3Labels = [string, number][];
    let diseaseInfoResponses: string[] = [];
    data.top3_labels.forEach(async (element: Top3Labels) => {
      let res = await axios.get(
        "/api/agentB?token=" + patientId + "&disease=" + element[0]
      );
      let data = res.data;
      diseaseInfoResponses.push(data);
    });
    const result = generateText({
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

    await prisma.report
      .create({
        data: {
          userId,
          imageUrl: "uploaded_to_external_storage_placeholder", //need to upload to s3 or cloudinary and use dynamic url
          aiAnalysis: {
            create: {
              findings: JSON.stringify(result),
            },
          },
        },
      })
      .then(() => {
        console.log("Report created");
        agentC(patientId); //async call to update patient context in background
      });
    // let res = axios.get(`https://www.ncbi.nlm.nih.gov/medgen/?term=${element[0]}`);
    return NextResponse.json({ data, success: true });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
