"use client";
import MedicalChat from "../ui/advanced-chat/MedicalChat";
import { PatientSelector } from "../components/chatbot/PatientSelector";
import { PatientCard } from "../components/chatbot/PatientCard";
import { ChatBotPanel } from "../components/chatbot/ChatbotPanel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import axios from "axios";

export default function Page() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [role, setRole] = useState("USER");
  const [id, setId] = useState<string | null>(null);
  async function getUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session?.user) {
      const name =
        session.user.user_metadata?.name ||
        session.user.email?.split("@")[0] ||
        session.user.email;
      setRole(session.user.user_metadata.role);
      setId(session.user.id);
      let result = await axios.get(`/api/patients?token=${session.user.id}`);
      console.log({ result });
      setSelectedPatient(result.data);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  //if logged in user is doctor, show doctor dashboard + add diagnosis tab and allow patient selector else remove header,'add diagnosis' field  and just show option to add new report and chatbot in right
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header
        className={`p-4 border-b bg-white shadow-sm flex items-center justify-between ${
          role == "DOCTOR" ? "" : ""
        }`}
      >
        <h1 className="text-2xl font-semibold text-gray-700">🩻</h1>
        <PatientSelector onSelect={setSelectedPatient} id={id as string} />
      </header>
      <main className="flex flex-1 p-4 gap-4">
        {/* Left Panel - Patient Details */}
        <motion.div
          layout
          className="w-1/2 bg-white rounded-2xl shadow-lg overflow-y-auto"
        >
          {selectedPatient ? (
            <PatientCard patient={selectedPatient} role={role} />
          ) : (
            <PatientCard patient={selectedPatient} role={role} />
          )}
        </motion.div>

        {/* Right Panel - Chatbot */}
        <motion.div
          layout
          className="w-1/2 bg-white rounded-2xl shadow-lg flex flex-col"
        >
       {selectedPatient ? (
  <>
    <p className="text-gray-500 text-sm">
      Chatting with: <b>{selectedPatient.name}</b>
    </p>
    <MedicalChat key={selectedPatient.authUserId}  id={selectedPatient.authUserId || id} />
  </>
) : id ? (
  // If user is patient, auto-load their own chat
  <MedicalChat key={id}  id={id} />
) : (
  <div>Loading chat...</div>
)}
        </motion.div>
      </main>
    </div>
  );
}
