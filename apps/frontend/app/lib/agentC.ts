import { generateText } from "ai";
import prisma from "@/db/prisma/prismaCl";
import { groq } from "@ai-sdk/groq";
import { updateUserVectors } from "./userVector";
import { createEmbeddings } from "./createEmbeddings";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
export async function agentC(patientId: string) {
  console.log("Agent C running for:", patientId);

  const patient = await prisma.user.findUnique({
    where: { authUserId: patientId },
    include: {
      reports: {
        orderBy: {
          createdAt: "desc",
        },

        select: {
          id: true,
          date: true,
          severity: true,
          reportText: true,
          imageUrl: true,
          aiAnalysis: true,
          diagnosis: true,
          doctor: true,
        },
      },
    },
  });

  if (!patient) throw new Error("Patient not found");

  //  await updateUserVectors(patientId, patient.disease || "", patient); //create user embedding
  //  async function getPatientContext(patientId: string) {

  //   const queryEmbedding = await createEmbeddings(
  //     "summarize patient's entire medical history"
  //   );

  // const { data, error } = await supabase.rpc("match_patient_embeddings", {
  //   patient: patientId,
  //   query_embedding: queryEmbedding,
  //   match_count: 8,
  // });

  // if (error) {
  //   console.error("Error retrieving embeddings:", error);
  //   return "";
  // }

  // return data.map((d: any) => d.content).join("\n\n");
  // }

  // const retrievedContext = await getPatientContext(patientId);

  const prompt = `
You are a medical data summarizer.
Use ONLY the retrieved context below:

RETRIEVED CONTEXT:
${JSON.stringify(patient)}

`;

  const finalSummary = await generateText({
    model: groq("llama-3.3-70b-versatile"),
    system: `Summarize this patient's entire medical background in concise clinical form:
- Current and past diagnoses
- Key lab findings
- Current medications and treatments
- Any relevant patterns or abnormalities`,
    prompt,
  });

  const processedSummary = finalSummary.text;
  console.log({ processedSummary }, "from agent c");
  //disease field holds entire medical context summary
  let result = await prisma.user.update({
    where: { authUserId: patientId },
    data: { disease: processedSummary },
  });
  console.log({ result }, "after updating disease field in agent c");
  return processedSummary;
}
// agentC('23140e89-eeaa-42e2-82f9-d35cc874357a')
