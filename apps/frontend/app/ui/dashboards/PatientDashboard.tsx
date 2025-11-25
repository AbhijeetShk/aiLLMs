"use client";

import React, { useEffect, useState } from "react";
import MotionCard from "../MotionCard";
import ReportCarousel from "@/app/components/ReportCarousel";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PatientDashboard({ authUserId }: { authUserId: string }) {
  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState<any>({});
  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // const res = await fetch(`/api/patients?token=${authUserId}`);
        const res = await fetch(`/api/patients?token=23140e89-eeaa-42e2-82f9-d35cc874357a`);
        const data = await res.json();
        if (data.success) {
          console.log({data})
          setPatient(data.result);
          setReports(data.result.reports ?? []);
        }
      } catch (err) {
        console.error("Failed to load patient dashboard:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [authUserId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-10 w-10 border-b-2 border-gray-900 dark:border-slate-100 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold">Patient Dashboard</h1>

      {/* Welcome */}
      <MotionCard>
        <h2 className="text-xl font-semibold mb-2">
          Welcome {patient?.name ?? "User"} 👋
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          This dashboard summarizes your medical imaging history, AI
          interpretations, and uploaded reports.
        </p>
      </MotionCard>

      {/* Uploaded Reports */}
      <MotionCard>
        <h2 className="text-lg font-semibold mb-3">Your Uploaded Reports</h2>
        <ReportCarousel reports={reports} />
      </MotionCard>

      {/* Latest AI Summary */}
      <MotionCard>
  <h2 className="text-lg font-semibold mb-3">Latest AI Summary</h2>
  {reports.length > 0 ? (
    <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {patient.disease ?? "No AI summary available yet."}
      </ReactMarkdown>
    </div>
  ) : (
    <p className="text-gray-500 dark:text-gray-400">No reports found.</p>
  )}
</MotionCard>


    </div>
  );
}
