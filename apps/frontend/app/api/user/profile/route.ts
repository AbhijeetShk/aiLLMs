import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/prisma/prismaCl";
import { createSupabaseServerClient } from "@/app/lib/supabaseServer";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  
  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const dbUser = await prisma.user.findUnique({
      where: { authUserId: user.id },
    });

    if (!dbUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(dbUser);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  
  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, diseaseInfo = null } = await req.json();

    const updatedUser = await prisma.user.update({
      where: { authUserId: user.id },
      data: { name, disease:diseaseInfo },
    });

    return NextResponse.json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}