"use client";
import { handleUpload } from "@/app/lib/uploadFile";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useRef } from "react";
//
export function ReportUploader({ id }: { id: string }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    // Open the hidden file input when button is clicked
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      await handleUpload(file, id);

      console.log("Upload success");
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">Upload new radiology report</p>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.png,.jpg,.jpeg,.txt"
      />

      <Button onClick={handleUploadClick}>
        <Upload className="mr-2 h-4 w-4" /> Upload Report
      </Button>
    </div>
  );
}
