"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ReportUploader } from "./ReportUploader";
import { DiagnosisInput } from "./DiagnosisInput";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function PatientCard({ patient }: { patient: any }) {
  const [verified, setVerified] = useState(false);

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>{patient.name}</CardTitle>
        <p className="text-sm text-gray-500">{patient.disease || "No disease recorded"}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ReportUploader />
        <DiagnosisInput />
        <div className="flex items-center gap-2">
          <Switch checked={verified} onCheckedChange={setVerified} />
          <span>Mark AI Analysis as Verified</span>
        </div>
      </CardContent>
    </Card>
  );
}
