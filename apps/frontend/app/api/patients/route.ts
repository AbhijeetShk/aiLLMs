import { NextRequest, NextResponse } from "next/server";
import prisma  from "@/db/prisma/prismaCl";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    let patientId = req.nextUrl.searchParams.get("token");
    if (!patientId) {
      return NextResponse.json({ success: false, error: "Missing token" });
    }
    const appUser = await prisma.user.findUnique({
      where: { authUserId: patientId },
      include: {
        reports: {
          include: {
            aiAnalysis: true,
            diagnosis: true,
            doctor: true,
          },
        },
      },
    });

    const doctor = await prisma.doctor.findUnique({
      where: { authUserId: patientId },
      include: {
        specialization: true,
      },
    });

    let result = appUser || doctor;
console.log({result})
    //disease string has all context summed up from all three bots
    //reports can be showed up on left side as toggle
    //reports->diagnosis->Ai analysis could be shown

    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to sync user" });
  }
}
