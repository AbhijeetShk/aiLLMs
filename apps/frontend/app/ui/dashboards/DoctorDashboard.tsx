"use client";

import React, { useEffect, useState } from "react";
import MotionCard from "../MotionCard";
import StatCard from "./StatCard";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ReportCarousel from "@/app/components/ReportCarousel";

export default function DoctorDashboard({
  authUserId,
  role,
}: {
  authUserId: string;
  role: string;
}) {
  const [doctor, setDoctor] = useState<any>({});
  const [stats, setStats] = useState<any>({});
  const [trend, setTrend] = useState<any[]>([]);
  const [scanDist, setScanDist] = useState<any[]>([]);
  const [doctorId, setDoctorId] = useState("");
  const [reports, setReports] = useState<any[]>([]);
  const [searchName, setSearchName] = useState("");
const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (role == "DOCTOR") {
      (async () => {
        try {
          const res = await fetch(`/api/doctor?token=${authUserId}`);
          const data = await res.json();
          console.log({ data });
          if (data.success) {
            setDoctor(data.doctor);
            setStats(data.stats);
            setReports(data.reports);

            setTrend(
              data.stats?.trend ?? [
                { month: "Jan", reports: 4 },
                { month: "Feb", reports: 6 },
                { month: "Mar", reports: 8 },
                { month: "Apr", reports: 7 },
              ]
            );

            setScanDist(
              data.stats?.scanDist ?? [
                { type: "Mild", count: 10 },
                { type: "Moderate", count: 5 },
                { type: "Severe", count: 2 },
              ]
            );
          }
        } catch (err) {
          console.error("Failed to load dashboard:", err);
        }finally {
        setLoading(false);
      }
      })();
    }
  }, [authUserId, role]);
if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin h-10 w-10 border-4 border-t-transparent border-blue-500 rounded-full"></div>
    </div>
  );
}
  function filteredReports(nameIn: string) {
    return nameIn
      ? reports.filter((r) =>
          r.user?.name.toLowerCase().includes(nameIn.toLowerCase())
        )
      : reports;
    
  }

  return (
    <div className="p-4 space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold flex items-center gap-3">
        Doctor Dashboard
        {doctor?.verified ? (
          <span className="px-2 py-1 text-sm bg-green-500 text-white rounded-lg">
            Verified
          </span>
        ) : (
          <span className="px-2 py-1 text-sm bg-yellow-500 text-white rounded-lg">
            Pending Verification
          </span>
        )}
      </h1>

      {/* Doctor Info */}
      <MotionCard className="p-4">
        <div className="text-lg font-medium">
          {doctor?.name ?? "Dr. John Doe"}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {doctor?.email}
        </div>
        <div className="mt-2">
          <span className="font-medium">Specialization:</span>{" "}
          {doctor?.specialization?.type ?? "General Practitioner"}
        </div>
        {doctor?.trackRecord && (
          <div className="mt-1 text-sm">
            <span className="font-medium">Track Record:</span>{" "}
            {doctor.trackRecord}
          </div>
        )}
      </MotionCard>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MotionCard>
          <StatCard
            title="Total Reports"
            value={stats.totalReports ?? 35}
            hint="Assigned to you"
          />
        </MotionCard>
        <MotionCard>
          <StatCard
            title="Patients Diagnosed"
            value={stats.totalPatients ?? 18}
            hint="Past 30 days"
          />
        </MotionCard>
        <MotionCard>
          <StatCard
            title="AUC"
            value={stats.accuracy ?? "0.75"}
            hint="Model stats"
          />
        </MotionCard>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MotionCard className="h-80">
          <h2 className="font-medium mb-2">Reports Over Time</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trend}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="reports"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </MotionCard>

        <MotionCard className="h-80">
          <h2 className="font-medium mb-2">Severity Distribution</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={scanDist}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </MotionCard>
      </div>

      <MotionCard>
        <h2 className="font-medium mb-3">Filter Reports</h2>
        <div className="flex gap-3">
          <input
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="flex-1 p-3 border rounded-xl"
            placeholder="Enter patient name…"
          />
        </div>

        <div className="mt-4">
          <ReportCarousel reports={filteredReports(searchName)} />
        </div>
      </MotionCard>
    </div>
  );
}
