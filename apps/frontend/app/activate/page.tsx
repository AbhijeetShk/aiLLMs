"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PatientSelector } from "../components/chatbot/PatientSelector";
import { PatientCard } from "../components/chatbot/PatientCard";
import { ChatBotPanel } from "../components/chatbot/ChatbotPanel"
import { motion } from "framer-motion";

export default function DoctorDashboard() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="p-4 border-b bg-white shadow-sm flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-700">
          🩻 Doctor Dashboard
        </h1>
        <PatientSelector onSelect={setSelectedPatient} />
      </header>

      <main className="flex flex-1 p-4 gap-4">
        {/* Left Panel - Patient Details */}
        <motion.div
          layout
          className="w-1/2 bg-white rounded-2xl shadow-lg overflow-y-auto"
        >
          {selectedPatient ? (
            <PatientCard patient={selectedPatient} />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Select a patient to view details
            </div>
          )}
        </motion.div>

        {/* Right Panel - Chatbot */}
        <motion.div
          layout
          className="w-1/2 bg-white rounded-2xl shadow-lg flex flex-col"
        >
          <ChatBotPanel />
        </motion.div>
      </main>
    </div>
  );
}
