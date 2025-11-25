"use client";

import { useEffect, useState } from "react";
import supabase from "@/app/lib/supabaseClient";
import Link  from "next/link";

export default function Topbar() {
  const [userName, setUserName] = useState("Guest");
const [loggedIn, setLoggedIn] = useState(false)
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);
  useEffect(() => {
    async function getUser() {
      const { data: { session } } = await supabase.auth.getSession();
      console.log({session})
      if (session?.user) {
        const name = session.user.user_metadata?.name || 
                     session.user.email?.split('@')[0] || 
                     session.user.email;
        setUserName(name);
        setLoggedIn(true)
      }
    }

    getUser();


    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const name = session.user.user_metadata?.name || 
                     session.user.email?.split('@')[0] || 
                     session.user.email;
        setUserName(name);
      } else {
        setUserName("Guest");
      }
    });

    return () => subscription.unsubscribe();
  }, []);
const handleSignOut = async () => {
  setLoggedIn(false)
  await supabase.auth.signOut();
  // Optional: redirect after logout
  window.location.href = "/login"; 
};
  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-3">
      <div className="text-gray-600">Welcome back 👋</div>
      <div className="flex gap-4 items-center">
        <button className="text-gray-600 hover:text-blue-600">🔔</button>
        <div className="px-3 py-1 rounded-lg bg-blue-600 text-white text-sm">
          <Link href="/profile">{userName}</Link>
        </div>
        <div className="px-3 py-1 rounded-lg bg-red-600 text-white text-sm cursor-pointer">
          <p onClick={handleSignOut}>{isClient ? (loggedIn ? "Sign Out" : "Sign In") : ""}</p>
        </div>
      </div>
    </header>
  );
}