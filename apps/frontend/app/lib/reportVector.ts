import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function sanitizeLLM(text: any) {
  return text.replace(/`/g, "\\`").replace(/\${/g, "\\${");
}

export async function storeReportEmbedding(report: any) {
  console.log("Running storeReportEmbedding...");

  if (!report.aiAnalysis?.findings) {
    throw new Error("Report missing AI analysis findings");
  }

  report.aiAnalysis.findings = sanitizeLLM(report.aiAnalysis.findings);
  
  try {
    const text = `Report Date: ${report.date}
Severity: ${report.severity}
Doctor: ${report.doctor?.name ?? "N/A"}
Report Text: ${report.reportText ?? ""}
AI Findings: ${report.aiAnalysis?.findings ?? ""}
Diagnosis Notes: ${
      report.diagnosis
        ?.map((d: { notes: string | null }) => d.notes)
        .join(", ") ?? ""
    }`;

   
    const embeddings = new HuggingFaceInferenceEmbeddings({
      apiKey: process.env.HUGGINGFACE_API_KEY!,
      model: "sentence-transformers/all-MiniLM-L6-v2",

      endpointUrl: "https://router.huggingface.co",
    });

    console.log("Generating embedding for text length:", text.length);
    

    let vector;
    let retries = 3;
    
    while (retries > 0) {
      try {
        vector = await embeddings.embedQuery(text);
        break;
      } catch (err: any) {
        console.log(`Attempt failed, retries left: ${retries - 1}`);
        
        if (err.message?.includes("loading") && retries > 1) {
          console.log("Model loading, waiting 10 seconds...");
          await new Promise(resolve => setTimeout(resolve, 10000));
          retries--;
        } else {
          throw err;
        }
      }
    }
    
    if (!vector) {
      throw new Error("Failed to generate embedding after retries");
    }

    console.log("Generated vector of length:", vector.length);

    const { error } = await supabase.from("report_embeddings").insert({
      report_id: report.id,
      content: text,
      embedding: vector,
    });

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    console.log("Stored embedding successfully");
    return vector;
  } catch (err) {
    console.error("Error in storeReportEmbedding:", err);
    throw err;
  }
}