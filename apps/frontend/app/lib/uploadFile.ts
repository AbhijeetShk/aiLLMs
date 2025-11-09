export async function handleUpload(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/agentA", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  console.log("Predictions:", data);
}
