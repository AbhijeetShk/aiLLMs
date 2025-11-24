import { NextResponse } from "next/server";
import prisma from "@/db/prisma/prismaCl";

export async function POST(req: Request) {
  try {
    console.log("Sync user called");
    const { authUserId, email, name, role } = await req.json();
    const existingUser =
      role === "DOCTOR"
        ? await prisma.doctor.findUnique({ where: { authUserId } })
        : await prisma.user.findUnique({ where: { authUserId } });

    if (existingUser) {
      return NextResponse.json({ success: true, message: "Already synced" });
    }
    if (role === "DOCTOR") {
      const doctor = await prisma.doctor.create({
        data: { authUserId, email, name },
      });
      return NextResponse.json({ success: true, doctor });
    } else {
      const user = await prisma.user.create({
        data: { authUserId, email, name },
      });
      return NextResponse.json({ success: true, user });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to sync user" });
  }
}
