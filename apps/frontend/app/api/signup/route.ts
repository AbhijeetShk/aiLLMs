import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/prisma/prismaCl";
import supabase from "@/app/lib/supabaseClient";
export async function POST(req: NextRequest) {
  const payload = await req.json();

  const { name, email, password, role } = payload;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role,
      },
    },
  });
  if (error || !data.user) {
    return NextResponse.json(
      { error: error?.message || "Signup failed" },
      { status: 400 }
    );
  }
  const authUserId = data.user.id;
  try {
    if (role === "DOCTOR") {
      let doctor = await prisma.doctor.create({
        data: { authUserId, name, email },
      });
      return NextResponse.json({ username: doctor.name, success: true }); //greet popup with name
    }
    if (role === "USER") {
      let user = await prisma.user.create({
        data: { authUserId, name, email },
      });
      return NextResponse.json({ username: user.name, success: true });
    }
  } catch (err) {
    //rollback supabase user creation
    await supabase.auth.admin.deleteUser(authUserId);
    return NextResponse.json(
      { error: "Signup failed during database operation" },
      { status: 500 }
    );
  }
}
