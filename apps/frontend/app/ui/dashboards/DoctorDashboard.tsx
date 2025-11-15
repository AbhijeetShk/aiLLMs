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
import { fetchGlobalStats, fetchUserReports } from "../../lib/api";

export default function DoctorDashboard() {
  const [stats, setStats] = useState<any>({});
  const [trend, setTrend] = useState<any[]>([]);
  const [scanDist, setScanDist] = useState<any[]>([]);
  const [queryUser, setQueryUser] = useState("");
  const [docs, setDocs] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const s = await fetchGlobalStats();
      setStats(s);

      setTrend(
        s.trend ?? [
          { day: "Mon", scans: 8 },
          { day: "Tue", scans: 12 },
          { day: "Wed", scans: 9 },
          { day: "Thu", scans: 15 },
          { day: "Fri", scans: 11 },
          { day: "Sat", scans: 7 },
          { day: "Sun", scans: 4 },
        ]
      );

      setScanDist(
        s.scanDist ?? [
          { type: "Normal", count: 120 },
          { type: "Pneumonia", count: 23 },
          { type: "TB", count: 8 },
        ]
      );
    })();
  }, []);

  async function handleFetch() {
    const r = await fetchUserReports(queryUser);
    setDocs(r.documents ?? []);
  }

  return (
    <div className="p-4 space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold">Doctor Dashboard</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MotionCard>
          <StatCard
            title="Total Patients"
            value={stats.totalPatients ?? 122}
            hint="Past 30 days"
          />
        </MotionCard>
        <MotionCard>
          <StatCard
            title="Scans Today"
            value={stats.scansToday ?? 14}
            hint="Updated every hour"
          />
        </MotionCard>
        <MotionCard>
          <StatCard
            title="AI Accuracy"
            value={stats.accuracy ?? "92%"}
            hint="Model validation"
          />
        </MotionCard>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MotionCard className="h-80">
          <h2 className="font-medium mb-2">Scans Over Time</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trend}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="scans"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </MotionCard>

        <MotionCard className="h-80">
          <h2 className="font-medium mb-2">Disease Distribution</h2>
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

      {/* Patient Search */}
      <MotionCard>
        <h2 className="font-medium mb-3">Search Patient Reports</h2>
        <div className="flex gap-3">
          <input
            value={queryUser}
            onChange={(e) => setQueryUser(e.target.value)}
            className="flex-1 p-3 border rounded-xl"
            placeholder="Enter patient user_id…"
          />
          <button
            onClick={handleFetch}
            className="px-4 py-2 bg-green-600 text-white rounded-xl"
          >
            Search
          </button>
        </div>

        {/* Report Results */}
        <div className="mt-4 space-y-4">
          {docs.length > 0 ? (
            docs.map((d, i) => (
              <MotionCard key={i} className="p-4">
                <div className="font-semibold text-lg">Report #{i + 1}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-line">
                  {d.pageContent?.slice(0, 300)}…
                </div>
              </MotionCard>
            ))
          ) : (
            <div className="text-gray-500 dark:text-gray-400">
              No reports loaded yet.
            </div>
          )}
        </div>
      </MotionCard>
    </div>
  );
}
