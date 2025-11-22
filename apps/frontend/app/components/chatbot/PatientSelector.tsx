"use client";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function PatientSelector({ onSelect }: { onSelect: (p: any) => void }) {
  const patients = [
    { id: 1, name: "Jane", disease: "Pneumonia" },
    { id: 2, name: "Diya Patel", disease: "Cardiomegaly" },
  ];

  return (
    <Select onValueChange={(id) => onSelect(patients.find((p) => p.id === Number(id)))}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Patient" />
      </SelectTrigger>
      <SelectContent>
        {patients.map((p) => (
          <SelectItem key={p.id} value={String(p.id)}>
            {p.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
