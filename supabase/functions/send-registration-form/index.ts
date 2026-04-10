import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string) {
  return `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;white-space:nowrap;">${label}</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(value || "—")}</td></tr>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const f = await req.json();

    if (!f.givenName || !f.surname || !f.email || !f.consentName) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const photoConsent = [
      f.consentClinical && "Clinical Use",
      f.consentCommercial && "Commercial/Marketing",
      f.consentAcademic && "Academic/Research",
    ].filter(Boolean).join(", ") || "None";

    const emailHtml = `
      <h2>Patient Registration Form</h2>

      <h3 style="margin-top:20px;">Contact Details</h3>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        ${row("Title", f.title)}
        ${row("Given Name", f.givenName)}
        ${row("Surname", f.surname)}
        ${row("Date of Birth", f.dob)}
        ${row("Address", f.address)}
        ${row("Suburb", f.suburb)}
        ${row("Postcode", f.postcode)}
        ${row("Email", f.email)}
        ${row("Home Phone", f.homePhone)}
        ${row("Work Phone", f.workPhone)}
        ${row("Mobile", f.mobile)}
      </table>

      <h3 style="margin-top:20px;">Next of Kin</h3>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        ${row("Name", f.nokName)}
        ${row("Relationship", f.nokRelationship)}
        ${row("Contact Number", f.nokContact)}
      </table>

      <h3 style="margin-top:20px;">Usual GP</h3>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        ${row("GP Name", f.gpName)}
        ${row("Clinic Name", f.gpClinic)}
      </table>

      <h3 style="margin-top:20px;">Claim Details</h3>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        ${row("Medicare Number", f.medicareNumber)}
        ${row("Ref. No.", f.medicareRef)}
        ${row("Exp. Date", f.medicareExp)}
        ${row("Private Health Insurance", f.privateHealthInsurance)}
        ${row("Fund Name", f.fundName)}
        ${row("Membership Number", f.membershipNumber)}
        ${row("Veterans Affairs Card", f.veteransCard)}
        ${row("Veterans Card Number", f.veteransNumber)}
      </table>

      <h3 style="margin-top:20px;">Current Medications</h3>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        ${row("Pain Killers", f.painKillers + (f.painKillers === "yes" && f.painKillersDetails ? " — " + f.painKillersDetails : ""))}
        ${row("Diabetic", f.diabetic + (f.diabetic === "yes" && f.diabeticType ? " — " + f.diabeticType : ""))}
        ${row("Drug Allergies", f.drugAllergies + (f.drugAllergies === "yes" && f.drugAllergiesDetails ? " — " + f.drugAllergiesDetails : ""))}
        ${row("Blood Thinners", f.bloodThinners + (f.bloodThinners === "yes" && f.bloodThinnersDetails ? " — " + f.bloodThinnersDetails : ""))}
        ${row("Pacemaker/Stent", f.pacemakerStent + (f.pacemakerStent === "yes" && f.cardiologist ? " — Cardiologist: " + f.cardiologist : ""))}
        ${row("Other Medications", f.otherMedications)}
      </table>

      <h3 style="margin-top:20px;">Consent</h3>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        ${row("Photo Consent", photoConsent)}
        ${row("Signed By", f.consentName)}
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
        to: ["reception@drjustinchee.com", "nurse@drjustinchee.com"],
        subject: `Patient Registration — ${f.title} ${f.givenName} ${f.surname}`,
        html: emailHtml,
        reply_to: f.email,
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
