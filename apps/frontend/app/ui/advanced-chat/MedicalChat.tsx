"use client";

import React, { useEffect, useRef, useState } from "react";
import MedicalMessage from "./MedicalMessage";
import Loader from "./Loader";

export default function MedicalChat() {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage() {
    if (!input.trim()) return;

    const q = input.trim();
    setMessages((m) => [...m, { sender: "user", text: q }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, user_id: "demo-user" }),
      });

      const data = await res.json();

      setMessages((m) => [...m, { sender: "bot", text: data.answer || "" }]);
    } catch (e: any) {
      setMessages((m) => [
        ...m,
        { sender: "bot", text: "Error: " + e.message },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat Container */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-lg rounded-xl shadow-inner"
      >
        {messages.map((m, i) => (
          <MedicalMessage key={i} sender={m.sender} text={m.text} />
        ))}

        {loading && <Loader />}
      </div>

      {/* Input Bar */}
      <div className="mt-4 flex gap-2">
        <input
          className="flex-1 p-3 rounded-xl border bg-white dark:bg-slate-900 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask anything about your scan..."
        />

        <button
          onClick={sendMessage}
          className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
