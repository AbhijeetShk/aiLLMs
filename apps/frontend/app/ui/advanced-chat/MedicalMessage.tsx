"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

export default function MedicalMessage({
  sender,
  text,
}: {
  sender: "user" | "bot";
  text: string;
}) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } transition-all`}
    >
      <div
        className={`max-w-[75%] p-4 rounded-2xl shadow-md whitespace-pre-line ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white/80 dark:bg-slate-700/60 text-gray-900 dark:text-gray-100 backdrop-blur"
        }`}
      >
        <ReactMarkdown
          components={{
            p: (props) => <p className="mb-2 leading-relaxed" {...props} />,
            strong: (props) => <strong className="font-semibold" {...props} />,
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
}
