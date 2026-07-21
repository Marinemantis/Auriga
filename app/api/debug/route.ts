import { NextResponse } from "next/server";

const GHL_API     = "https://services.leadconnectorhq.com";
const API_KEY     = () => process.env.GHL_API_KEY!;
const LOCATION_ID = () => process.env.GHL_LOCATION_ID!;
const ghlHeaders  = () => ({
  "Authorization": `Bearer ${API_KEY()}`,
  "Version": "2021-07-28",
  "Content-Type": "application/json",
});

export async function GET() {
  const results: Record<string, unknown> = {};

  // 1. Env vars
  results.env = {
    RESEND_API_KEY:  !!process.env.RESEND_API_KEY,
    GHL_API_KEY:     !!process.env.GHL_API_KEY,
    GHL_LOCATION_ID: !!process.env.GHL_LOCATION_ID,
  };

  // 2. GHL — list pipelines
  try {
    const res  = await fetch(`${GHL_API}/opportunities/pipelines?locationId=${LOCATION_ID()}`, { headers: ghlHeaders() });
    const data = await res.json();
    if (!res.ok) {
      results.ghl_pipelines = { success: false, status: res.status, body: data };
    } else {
      const pipelines = (data.pipelines || []) as { id: string; name: string; stages: { id: string; name: string }[] }[];
      results.ghl_pipelines = { success: true, pipelines: pipelines.map(p => ({ name: p.name, stages: (p.stages || []).map(s => s.name) })) };
    }
  } catch (err) {
    results.ghl_pipelines = { success: false, error: String(err) };
  }

  // 3. GHL — test contact upsert
  try {
    const res = await fetch(`${GHL_API}/contacts/upsert`, {
      method:  "POST",
      headers: ghlHeaders(),
      body: JSON.stringify({
        locationId: LOCATION_ID(),
        firstName:  "Debug",
        lastName:   "Test",
        email:      "debug-test@aurigaventures-test.com",
        source:     "Website",
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      results.ghl_contact = { success: false, status: res.status, body: data };
    } else {
      const contactId = data.contact?.id || data.id;
      results.ghl_contact = { success: true, contactId };

      // 4. GHL — test opportunity creation
      if (contactId) {
        // Find pipeline id
        const pipRes  = await fetch(`${GHL_API}/opportunities/pipelines?locationId=${LOCATION_ID()}`, { headers: ghlHeaders() });
        const pipData = await pipRes.json();
        const pipeline = (pipData.pipelines || []).find((p: { name: string }) => p.name === "Sales pipeline");
        const stage    = pipeline?.stages?.find((s: { name: string }) => s.name === "New Enquiry");

        if (!pipeline || !stage) {
          results.ghl_opportunity = { success: false, error: `Pipeline or stage not found. Pipelines: ${(pipData.pipelines||[]).map((p: {name:string})=>p.name).join(", ")}` };
        } else {
          const oppRes = await fetch(`${GHL_API}/opportunities/`, {
            method:  "POST",
            headers: ghlHeaders(),
            body: JSON.stringify({
              name:            "Debug Test Opportunity",
              pipelineId:      pipeline.id,
              pipelineStageId: stage.id,
              locationId:      LOCATION_ID(),
              contactId,
              status:          "open",
              monetaryValue:   0,
            }),
          });
          const oppData = await oppRes.json();
          if (!oppRes.ok) {
            results.ghl_opportunity = { success: false, status: oppRes.status, body: oppData };
          } else {
            results.ghl_opportunity = { success: true, opportunityId: oppData.opportunity?.id || oppData.id };
          }
        }
      }
    }
  } catch (err) {
    results.ghl_contact = { success: false, error: String(err) };
  }

  return NextResponse.json(results, { status: 200 });
}
