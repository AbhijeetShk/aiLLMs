"use client";
import MedicalChat from "../ui/advanced-chat/MedicalChat";
import { PatientSelector } from "../components/chatbot/PatientSelector";
import { PatientCard } from "../components/chatbot/PatientCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import axios from "axios";

export default function Page() {
  const [selectedPatientFromSelector, setSelectedPatientFromSelector] = useState<any>(null); // Doctor-selected
  const [patientSelfData, setPatientSelfData] = useState<any>(null); // Logged-in user (if patient)
  const [role, setRole] = useState("");
  const [id, setId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function getUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session?.user) {
      setRole(session.user.user_metadata.role);
      setId(session.user.id);

      if (session.user.user_metadata.role !== "DOCTOR") {
        // Fetch patient details for logged-in patient
        try {
          const result = await axios.get(`/api/patients?token=${session.user.id}`);
          setPatientSelfData(result.data);
        } catch (error) {
          console.error("Failed to fetch patient self data:", error);
        }
      }
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (role && id) {
      if (role === "DOCTOR") {
        setLoading(false);
      }
      // Wait for axios-loaded data if patient
      else if (patientSelfData !== null) {
        setLoading(false);
      }
    }
  }, [role, id, patientSelfData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-t-transparent border-blue-500 rounded-full"></div>
      </div>
    );
  }

  // Final selected chat target
  const activePatient =
    role === "DOCTOR" ? selectedPatientFromSelector : patientSelfData;

  const chatId = activePatient?.authUserId || id;

  return (
    <div className="max-h-fit bg-gray-50 flex flex-col">
      {/* Visible only for doctors */}
      <header
        className={`p-4 border-b bg-white shadow-sm flex items-center justify-between ${
          role == "DOCTOR" ? "" : "hidden"
        }`}
      >
        <h1 className="text-2xl font-semibold text-gray-700">🩻</h1>
        <PatientSelector onSelect={setSelectedPatientFromSelector} id={id as string} />
      </header>

      <main className="flex flex-1 p-4 gap-4 max-h-screen">
        {/* Patient Info Panel */}
        <motion.div
          layout
          className="w-1/2 bg-white rounded-2xl shadow-lg overflow-y-auto"
        >
          <PatientCard patient={activePatient} role={role} />
        </motion.div>

        {/* Chat Section */}
        <motion.div
          layout
          className="w-1/2 bg-white rounded-2xl shadow-lg flex flex-col overflow-y-auto"
        >
          {role === "DOCTOR" ? (
            activePatient ? (
              <>
                <p className="text-gray-500 text-sm mx-4 mt-4">
                  Chatting with: <b>{activePatient.name}</b>
                </p>
                <MedicalChat key={chatId} id={chatId} />
              </>
            ) : (
              <div className="p-4 text-gray-500">Select a patient to start the chat</div>
            )
          ) : (
            <MedicalChat key={chatId} id={chatId} />
          )}
        </motion.div>
      </main>
    </div>
  );
}
