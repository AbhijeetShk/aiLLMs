import { generateText } from "ai";
import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
const db = new PrismaClient().$extends(withAccelerate());
import { groq } from "@ai-sdk/groq";

export async function processPatientContext(patientId: string) {
  const patient = await db.user.findUnique({
    where: { id: patientId },
    include: {
      reports: {
        include: {
          aiAnalysis: true,
          diagnosis: true,
          doctor: { include: { specialization: true } },
        },
      },
    },
  });

  if (!patient) throw new Error("Patient not found");

  const prompt = `
You are a medical data summarizer.
Patient details:
${JSON.stringify(patient, null, 2)}

Summarize this patient's entire medical background in concise clinical form:
- Current and past diagnoses
- Key lab findings
- Current medications and treatments
- Any relevant patterns or abnormalities
`;

  const summary = await generateText({
    model: groq("llama-3.3-70b-versatile"),
    system: `Summarize this patient's entire medical background in concise clinical form:
- Current and past diagnoses
- Key lab findings
- Current medications and treatments
- Any relevant patterns or abnormalities`,
    prompt,
  });

  const processedSummary = summary.text;

  // store in patient.notes
  await db.user.update({
    where: { id: patientId },
    data: { disease: processedSummary },
  });

  return processedSummary;
}
