import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
const db = new PrismaClient().$extends(withAccelerate());
import { processPatientContext } from "../../agentC/route";

export async function POST(req: Request) {
  const { imageUrl, userId, doctorId, reportText, severity } = await req.json();
//userId is patient id which we would allow doctor to select when uploading report and doctorId for user
  const report = await db.report.create({
    data: { imageUrl, userId, doctorId, reportText, severity },
  });
  processPatientContext(userId).catch(console.error);

  return Response.json({ success: true, report });
}
