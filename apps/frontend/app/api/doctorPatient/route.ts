import { NextRequest, NextResponse } from "next/server";
import prisma  from "@/db/prisma/prismaCl";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    let doctorAuthId = req.nextUrl.searchParams.get("token");
    if (!doctorAuthId) {
      return NextResponse.json({ success: false, error: "Missing token" });
    }
   const doctor = await prisma.doctor.findUnique({
  where: { authUserId: doctorAuthId },
  select: { id: true },
});

const users = await prisma.user.findMany({
  where: {
    reports: {
      some: {
        doctorId: doctor?.id,
      },
    },
  },
  distinct: ["id"],
});
    ;
console.log({users})
    //disease string has all context summed up from all three bots
    //reports can be showed up on left side as toggle
    //reports->diagnosis->Ai analysis could be shown

    return NextResponse.json({ success: true, users });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to sync user" });
  }
}
