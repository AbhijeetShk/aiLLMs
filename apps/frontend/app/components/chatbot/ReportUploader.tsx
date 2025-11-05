"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export function ReportUploader() {
  const handleUpload = () => alert("Upload logic goes here!");
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">Upload new radiology report</p>
      </div>
      <Button onClick={handleUpload}>
        <Upload className="mr-2 h-4 w-4" /> Upload Report
      </Button>
    </div>
  );
}
