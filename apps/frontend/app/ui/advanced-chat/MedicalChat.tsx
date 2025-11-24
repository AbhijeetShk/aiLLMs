"use client";

import React, { useRef, useEffect, useState } from "react";
import MedicalMessage from "./MedicalMessage";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";

export default function MedicalChat({ id }: { id: string }) {
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const transport = React.useMemo(() => {
    console.log("Creating transport for user:", id);
    return new DefaultChatTransport({
      api: "/api/agentD",
      body: { userId: id },
    });
  }, [id]);

  const { messages: aiMessages, sendMessage: sendAiMessage, status } = useChat({
    transport,
  });

  // 👇 show loader whenever we're waiting or streaming
  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [aiMessages]);

  function sendMessage(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const messageToSend = input;
    console.log("Sending message:", messageToSend);
    setInput("");

    // v5: sendMessage({ text })
    sendAiMessage({ text: messageToSend });
  }

  return (
    <div className="flex flex-col h-full mx-2">
      {/* CHAT WINDOW */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className={`
          flex-1 overflow-y-auto p-6 space-y-4
          bg-white/30 dark:bg-slate-800/30 
          border border-white/20 dark:border-black/20
          backdrop-blur-xl rounded-2xl shadow-xl
          ${aiMessages.length === 0 ? "hidden" : ""}
        `}
      >
        {aiMessages.map((m, i) => (
          <MedicalMessage key={i} text={m} />
        ))}

        {/* 👇 loader now shows during submitted/streaming */}
        {isLoading && <Loader />}
      </motion.div>

      {/* INPUT BAR */}
      <form onSubmit={sendMessage} className="flex items-center gap-3 mt-4">
        <label className="px-4 py-2 bg-gray-200 dark:bg-slate-700 rounded-xl cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600">
          🧠
        </label>

        <input
          className="flex-1 p-3 rounded-xl border bg-white dark:bg-slate-900 dark:text-white"
          placeholder="Ask something medical…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  );
}
