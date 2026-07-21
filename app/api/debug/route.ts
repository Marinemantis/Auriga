import { NextResponse } from "next/server";

const GHL = "https://services.leadconnectorhq.com";

export async function GET() {
  const key     = process.env.GHL_API_KEY ?? "";
  const locId   = process.env.GHL_LOCATION_ID ?? "";
  const pipId   = "H2yEFiQTYm9yJIUsMcnr";
  const stageId = "b84a99fc-88e7-4d52-93ca-b0a86830bad4";
  const hdrs    = { "Authorization": `Bearer ${key}`, "Version": "2021-07-28", "Content-Type": "application/json" };
  const testEmail = "debug-existing@aurigaventures-test.com";

  // Step 1 — create fresh contact
  const c1Res  = await fetch(`${GHL}/contacts/upsert`, { method: "POST", headers: hdrs, body: JSON.stringify({ locationId: locId, firstName: "Debug", lastName: "Existing", email: testEmail, source: "Website" }) });
  const c1Body = await c1Res.json();

  // Step 2 — upsert the SAME email again (simulates returning user)
  const c2Res  = await fetch(`${GHL}/contacts/upsert`, { method: "POST", headers: hdrs, body: JSON.stringify({ locationId: locId, firstName: "Debug", lastName: "Existing", email: testEmail, source: "Website" }) });
  const c2Body = await c2Res.json();

  // Extract contactId using same logic as lib/ghl.ts
  const contactId = c2Body?.contact?.id ?? c2Body?.id ?? null;

  // Step 3 — create opportunity with the existing-contact ID
  let oStatus = null;
  let oBody: unknown = null;
  if (contactId) {
    const oRes = await fetch(`${GHL}/opportunities/`, { method: "POST", headers: hdrs, body: JSON.stringify({ name: "DEBUG EXISTING — delete me", pipelineId: pipId, pipelineStageId: stageId, locationId: locId, contactId, status: "open", monetaryValue: 0 }) });
    oStatus = oRes.status;
    oBody   = await oRes.json();
  }

  return NextResponse.json({
    step1_new_contact:      { status: c1Res.status, body: c1Body, extractedId: c1Body?.contact?.id ?? c1Body?.id ?? null },
    step2_existing_contact: { status: c2Res.status, body: c2Body, extractedId: contactId },
    step3_opportunity:      { status: oStatus, body: oBody, contactIdUsed: contactId },
  });
}
