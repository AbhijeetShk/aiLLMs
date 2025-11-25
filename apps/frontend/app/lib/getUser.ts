import supabase from "./supabaseClient";
import axios from "axios";
export async function getSessionUser(id:string) {


  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;
  let dbUser = await axios.get("/api/patients", {
    params: { token: id },
  });
  return dbUser;
}
