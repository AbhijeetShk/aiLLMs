"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ReportUploader } from "./ReportUploader";
import { DiagnosisInput } from "./DiagnosisInput";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getSessionUser } from "@/app/lib/getUser";
import GradCamCarousel from "../GradCamCarousel";
 type Top3Labels = {
    label: string;
    overlay_image: string;
    masked_image: string;
  };
export function PatientCard({ patient, role }: { patient: any; role: string }) {
  const [verified, setVerified] = useState(false);
  const [gradCamImage, setGradCamImage] = useState<Top3Labels[]>([]);
  const [id,setId] = useState('')
  useEffect(() => {
    console.log("Patient card called", patient)
  async function fetchUser() {

    if (!patient?.id) return; 
    // console.log({patient})
    const data = await getSessionUser(patient.authUserId);
    setId(patient.authUserId)
    setGradCamImage(data?.data.result.reports[0].GradCamImage)
    console.log(data?.data.result.reports[0].GradCamImage as string);
  }

  fetchUser();
}, [patient,role]);

  return (
    <Card className="m-4 max-h-fit no-scrollbar">
      <CardHeader>
        <CardTitle>{patient?.name}</CardTitle>
        <p className="text-sm text-gray-500">
          {patient?.diseaseInfo || "No disease recorded"}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ReportUploader id={id as string}/>
        <div className={`${role !== "DOCTOR" ? "hidden" : ""}`}>
          <DiagnosisInput />
          <div className="flex items-center gap-2 my-2">
            <Switch checked={verified} onCheckedChange={setVerified} />
            <span>Mark AI Analysis as Verified</span>
          </div>
        </div>
        <div>
   <GradCamCarousel gradCamImage={gradCamImage} />


        </div>
      </CardContent>
    </Card>
  );
}
