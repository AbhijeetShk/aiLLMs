"use client";
import MotionCard from "../MotionCard";

export default function PatientDashboard() {
  return (
    <div className="p-4 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold">Patient Dashboard</h1>

      <MotionCard>
        <h2 className="text-xl font-semibold mb-2">Welcome 👋</h2>
        <p className="text-gray-600 dark:text-gray-300">
          This dashboard summarizes your medical imaging history, AI
          interpretations, and uploaded reports.
        </p>
      </MotionCard>

      {/* Uploaded Files */}
      <MotionCard>
        <h2 className="text-lg font-semibold mb-3">Your Uploaded Reports</h2>
        <p className="text-gray-500 dark:text-gray-300">
          (This will show parsed documents from your user_id)
        </p>
      </MotionCard>

      {/* Recent AI Summary */}
      <MotionCard>
        <h2 className="text-lg font-semibold mb-3">Latest AI Summary</h2>
        <p className="text-gray-600 dark:text-gray-300">
          When you ask the chatbot or upload a report, the AI summary will appear
          here.
        </p>
      </MotionCard>
    </div>
  );
}
