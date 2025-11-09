import { generateText } from "ai";
import prisma from "@/app/lib/prisma";
import { groq } from "@ai-sdk/groq";
// Agent C - Process patient data and generate medical summary
export async function agentC(patientId: string) {
  const patient = await prisma.user.findUnique({
    where: { authUserId: patientId },
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

  //disease field holds entire medical context summary
  await prisma.user.update({
    where: { authUserId: patientId },
    data: { disease: processedSummary },
  });

  return processedSummary;
}
