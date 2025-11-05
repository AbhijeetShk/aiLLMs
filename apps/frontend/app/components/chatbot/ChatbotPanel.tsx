"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ChatBotPanel() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    // TODO: integrate with your LLM backend later
  };

  return (
    <div className="flex flex-col flex-1 p-4">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Input
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value as string)}
          placeholder="Ask AI assistant..."
        />
        <Button onClick={sendMessage}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
