import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface FormData {
  name: string;
  email: string;
  allergies: string;
  bloodThinners: string;
  bloodThinnersList: string;
  diabetic: string;
  ozempic: string;
  allMedications: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const formData: FormData = await req.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.allMedications) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailHtml = `
      <h2>Preoperative Patient Medication Form</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Patient Name</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(formData.name)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(formData.email)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Allergies</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(formData.allergies)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Blood Thinners</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(formData.bloodThinners)}${formData.bloodThinners === "yes" ? " — " + escapeHtml(formData.bloodThinnersList) : ""}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Diabetic</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(formData.diabetic)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">On Ozempic (semaglutide)</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(formData.ozempic)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">All Medications</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(formData.allMedications)}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Dr Justin Chee <noreply@drjustinchee.com>",
        to: ["nurse@drjustinchee.com"],
        subject: `Preoperative Medication Form — ${formData.name}`,
        html: emailHtml,
        reply_to: formData.email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", data);
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
