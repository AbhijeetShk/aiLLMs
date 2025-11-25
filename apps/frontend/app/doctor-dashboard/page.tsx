"use client"
import { useEffect, useState } from "react";
import DoctorDashboard from "../ui/dashboards/DoctorDashboard";
import supabase from "../lib/supabaseClient";
import axios from "axios";

export default function Page() {
  const [role, setRole] = useState("");
  const [id, setId] = useState<string | null>(null);
  async function getUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session?.user) {
      const name =
        session.user.user_metadata?.name ||
        session.user.email?.split("@")[0] ||
        session.user.email;
      setRole(session.user.user_metadata.role);
      setId(session.user.id);

    }
  }
  useEffect(() => {
    getUser();
    console.log({role})
  }, []);
  return <DoctorDashboard authUserId={id as string} role={role as string}/>;
}
