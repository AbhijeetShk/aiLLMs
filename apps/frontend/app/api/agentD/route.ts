import prisma from "@/db/prisma/prismaCl";
let db = prisma;
import { streamText } from "ai";
import { groq } from "@ai-sdk/groq";
import { NextRequest, NextResponse } from "next/server";
import { ca } from "zod/v4/locales";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { messages, userId } = await req.json();

    const message =
      messages.filter((m: any) => m.role === "user").at(-1)?.parts?.[0]?.text ||
      "";
    console.log(JSON.stringify(messages));
    console.log({ message });
    const user = await db.user.findUnique({
      where: { authUserId: userId },
      include: {
        reports: {
          orderBy: {
            createdAt: "desc",
          },
          take: 3,
select: {
        id: true,
        date: true,
        severity: true,
        reportText: true,
        imageUrl: true,
        aiAnalysis: true,
        diagnosis: true,
        doctor:true
      },
        },
      },
    });

    console.log({ user }, "from agentD");
    const context = user?.disease ?? "No medical summary available yet.";
    const response = await streamText({
      model: groq("llama-3.3-70b-versatile"),
      messages: [
        {
          role: "system",
          content: `You are a patient-facing AI medical assistant.
            Always be empathetic and factual.
            Patient medical context:
            ${context} ${JSON.stringify(user)}`,
        },
        { role: "user", content: message },
      ],
    });
    console.log({ response });
    return response.toUIMessageStreamResponse();
  } catch (error) {
    console.log({ error });
    return NextResponse.json({
      success: false,
      error: "Error processing request",
    });
  }
}
// Agent A gotta push user req to model, get data, feed it to llm -> get something, something to db

// Agent A and B will be called as a group to prepare fresh current report. Agent C will prepare all context and save it to db. Agent D will be a clean chatbot based on it.
