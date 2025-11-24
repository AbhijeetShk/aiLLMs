"use client";
import supabase from "@/app/lib/supabaseClient";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
    } else if (data.user) {
      try {
        await fetch("/api/auth/sync-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            authUserId: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.name || "",
            role: data.user.user_metadata?.role || "USER",
          }),
        });
      } catch (err) {
        console.error("Failed to sync user:", err);
      }
      window.location.href = "/";
    }
  }

  async function handleSignup() {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage(error.message);
    } else if (data.user) {
      try {
        await fetch("/api/auth/sync-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            authUserId: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.name || "",
            role: role || "USER",
          }),
        });
      } catch (err) {
        console.error("Failed to sync user:", err);
      }
      setMessage("Check your email to verify and sign in!");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-5">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 backdrop-blur-lg ring-1 ring-gray-200 dark:ring-gray-700">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Welcome Back
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled={loading}
          />

          <input
            type="text"
            placeholder="Role (e.g., USER, DOCTOR)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled={loading}
          />

          {message && (
            <p className="text-center text-sm text-red-500 bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
              {message}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <button
            onClick={handleSignup}
            className="w-full py-3 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Signup"}
          </button>
        </div>
      </div>
    </div>
  );
}
