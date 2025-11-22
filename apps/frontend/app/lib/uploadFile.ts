export async function handleUpload(file: File, patientId: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("patientId", patientId);

  const res = await fetch("/api/agentA", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  console.log("Predictions:", data);
}
