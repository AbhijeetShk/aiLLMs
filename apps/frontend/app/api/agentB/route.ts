import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
const prisma = new PrismaClient().$extends(withAccelerate());

import { groq } from "@ai-sdk/groq";

import { streamText } from "ai";

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
export async function GET(req: Request) {
  const url = new URL(req.url);
  const disease = url.searchParams.get("disease");

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

  return result.toTextStreamResponse();
}
