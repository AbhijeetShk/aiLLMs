import { agentC } from "@/app/lib/agentC";
import { groq } from "@ai-sdk/groq";

import { streamText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const diseases = [
  "Atelectasis",
  "Cardiomegaly",
  "Effusion",
  "Infiltration",
  "Mass",
  "Nodule",
  "pneumonia",
  "Pneumothorax",
  "Consolidation",
  "Edema",
  "Emphysema",
  "Fibrosis",
  "Pleural Thickening",
  "Hernia",
];
//initially- first report
export async function GET(req: NextRequest, res: NextResponse) {
  let patientId = req.nextUrl.searchParams.get("token");
  let disease = req.nextUrl.searchParams.get("disease");
  if (!patientId || !disease) {
    return NextResponse.json({
      success: false,
      error: "Missing token or disease",
    });
  }

  if (!disease || !diseases.includes(disease))
    return new Response("Invalid or unsupported disease", { status: 400 });

  const medlineUrl = `https://wsearch.nlm.nih.gov/ws/query?db=healthTopics&term=title:${encodeURIComponent(
    disease
  )}`;
  const response = await fetch(medlineUrl);
  const content = await response.text();

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    messages: [
      {
        role: "system",
        content:
          "You are a medical explainer that summarizes MedlinePlus pages clearly and factually.",
      },
      {
        role: "user",
        content: `Here is content about ${disease}:\n\n${content}\n\nSummarize this condition including symptoms, causes, diagnosis, and treatment.`,
      },
    ],
  });
  //agentA will update AI analysis field based on probabilities from model
  //agentB will provide with Ai analysis + medline info sumup to agentC
  //agentC will sum up entire patient context(age, health, bp, etc. if provided + agentA & B) into disease field (based on fresh report)
  //diagnosis relation will have doctor diagnosis based on actual report (updated by doctor dashboard for current report it will be after completion of agents)
  //Agent D will be chat agent for patient based on entire patient db(current summation i.e disease field + prev db + having diagnosis too if uploaded by doctor). Doctor could switch agent d context based on patients assigned while patient have only access to his. Need to include timestamps with each diagnosis, ai analysis and reports too(upload date)

  //Dynamic disease field: On each new report, disease field will be updated: based on fresh report only
  
  let results = await result.text;
  // console.log({ results }, "from agent b");
  return NextResponse.json({ success: true, results });
}
