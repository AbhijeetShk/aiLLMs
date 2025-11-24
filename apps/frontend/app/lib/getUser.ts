import { createClient } from "./supabaseServer";
import axios from "axios";
export async function getSessionUser() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;
  let dbUser = await axios.get("/api/patients", {
    params: { token: user.id },
  });
  return dbUser;
}
