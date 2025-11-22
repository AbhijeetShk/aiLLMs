import { NextResponse } from "next/server";
import { PrismaClient } from "@/db/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
const db = new PrismaClient().$extends(withAccelerate());
import { createClient } from "@supabase/supabase-js";
const prisma = new PrismaClient();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! 
);

export async function POST(req: Request) {
  try {
    const { authUserId, email, name, role } = await req.json();

    if (role === "doctor") {
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
