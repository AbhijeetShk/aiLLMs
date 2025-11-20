"use client";

import React, { useRef, useEffect, useState } from "react";
import MedicalMessage from "./MedicalMessage";
import Loader from "./Loader";
import { motion } from "framer-motion";

export default function MedicalChat() {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage() {
    if (!input.trim() && !file) return;

    // User message
    if (input.trim()) {
      const q = input.trim();
      setMessages((m) => [...m, { sender: "user", text: q }]);
      setInput("");

      // streaming AI reply
      await streamResponse(q);
    }

    // PDF upload message
    if (file) {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("meta", JSON.stringify({ page: "chat" }));

      const res = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      setMessages((m) => [
        ...m,
        { sender: "bot", text: `📄 Uploaded: ${file.name}. Processing...` },
      ]);

      setFile(null);
    }
  }

  async function streamResponse(query: string) {
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: query }),
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let chunkText = "";
    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;

      if (value) {
        chunkText += decoder.decode(value);
        setMessages((prev) => {
          const last = prev[prev.length - 1];

          if (!last || last.sender !== "bot") {
            return [...prev, { sender: "bot", text: chunkText }];
          }

          return [
            ...prev.slice(0, -1),
            { sender: "bot", text: chunkText },
          ];
        });
      }
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col h-full">

      {/* CHAT WINDOW */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="
          flex-1 overflow-y-auto p-6 space-y-4
          bg-white/30 dark:bg-slate-800/30 
          border border-white/20 dark:border-black/20
          backdrop-blur-xl rounded-2xl shadow-xl
        "
      >
        {messages.map((m, i) => (
          <MedicalMessage key={i} sender={m.sender} text={m.text} />
        ))}

        {loading && <Loader />}
      </motion.div>

      {/* INPUT BAR */}
      <div className="flex items-center gap-3 mt-4">
        {/* FILE UPLOAD BUTTON */}
        <label className="
          px-4 py-2 bg-gray-200 dark:bg-slate-700 
          rounded-xl cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600
        ">
          📎 Upload PDF
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>

        {/* TEXT INPUT */}
        <input
          className="
            flex-1 p-3 rounded-xl border 
            bg-white dark:bg-slate-900 dark:text-white
          "
          placeholder="Ask something medical…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />

        {/* SEND BUTTON */}
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
