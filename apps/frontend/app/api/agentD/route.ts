import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
const db = new PrismaClient().$extends(withAccelerate());
import { processPatientContext } from "../agentC/route";
import { streamText } from "ai";
import { groq } from "@ai-sdk/groq";
export async function patientChatAgent(userId: string, message: string) {
  const user = await db.user.findUnique({ where: { id: userId } });
  const context = user?.disease ?? "No medical summary available yet.";

   const response = await streamText({
    model: groq("llama-3.3-70b-versatile"),
    messages: [
      {
        role: "system",
        content: `You are a patient-facing AI medical assistant.
        Always be empathetic and factual.
        Patient medical context:
        ${context}`,
      },
      { role: "user", content: message },
    ],
  });

  return response;
}
// Agent A gotta push user req to model, get data, feed it to llm -> get something, something to db

// Agent A and B will be called as a group to prepare fresh current report. Agent C will prepare all context and save it to db. Agent D will be a clean chatbot based on it.