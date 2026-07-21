import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const results: Record<string, unknown> = {};

  // 1. Check env vars
  results.env = {
    RESEND_API_KEY:  !!process.env.RESEND_API_KEY,
    GHL_API_KEY:     !!process.env.GHL_API_KEY,
    GHL_LOCATION_ID: !!process.env.GHL_LOCATION_ID,
  };

  // 2. Test Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from:    "Auriga Ventures <onboarding@resend.dev>",
      to:      "venturesauriga@gmail.com",
      subject: "[TEST] Auriga website integration check",
      html:    "<p>This is a diagnostic test from your website. If you received this, Resend is working.</p>",
    });
    results.resend = error
      ? { success: false, error }
      : { success: true, id: data?.id };
  } catch (err: unknown) {
    results.resend = { success: false, error: String(err) };
  }

  // 3. Test GHL — list pipelines (read-only)
  try {
    const apiKey     = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;
    if (!apiKey || !locationId) {
      results.ghl = { success: false, error: "Missing GHL_API_KEY or GHL_LOCATION_ID" };
    } else {
      const res = await fetch(
        `https://services.leadconnectorhq.com/opportunities/pipelines?locationId=${locationId}`,
        { headers: { Authorization: `Bearer ${apiKey}`, Version: "2021-07-28" } }
      );
      const data = await res.json();
      if (!res.ok) {
        results.ghl = { success: false, status: res.status, error: data };
      } else {
        const pipelines: { id: string; name: string; stages: { id: string; name: string }[] }[] =
          data.pipelines || [];
        results.ghl = {
          success: true,
          pipelines: pipelines.map(p => ({
            name:   p.name,
            id:     p.id,
            stages: (p.stages || []).map(s => ({ name: s.name, id: s.id })),
          })),
        };
      }
    }
  } catch (err: unknown) {
    results.ghl = { success: false, error: String(err) };
  }

  return NextResponse.json(results, { status: 200 });
}
