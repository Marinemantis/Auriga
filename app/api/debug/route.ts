import { NextResponse } from "next/server";

const GHL = "https://services.leadconnectorhq.com";

export async function GET() {
  const key      = process.env.GHL_API_KEY ?? "";
  const locId    = process.env.GHL_LOCATION_ID ?? "";
  const pipId    = "H2yEFiQTYm9yJIUsMcnr";
  const stageId  = "b84a99fc-88e7-4d52-93ca-b0a86830bad4";
  const hdrs     = { "Authorization": `Bearer ${key}`, "Version": "2021-07-28", "Content-Type": "application/json" };

  // 1 — upsert contact
  const cRes  = await fetch(`${GHL}/contacts/upsert`, { method: "POST", headers: hdrs, body: JSON.stringify({ locationId: locId, firstName: "Debug", lastName: "Test", email: "debug@aurigaventures-test.com", source: "Website" }) });
  const cBody = await cRes.json();
  const cId   = cBody?.contact?.id ?? cBody?.id ?? null;

  // 2 — create opportunity with hardcoded IDs
  let oStatus = null;
  let oBody   = null;
  if (cId) {
    const oRes = await fetch(`${GHL}/opportunities/`, { method: "POST", headers: hdrs, body: JSON.stringify({ name: "DEBUG TEST — delete me", pipelineId: pipId, pipelineStageId: stageId, locationId: locId, contactId: cId, status: "open", monetaryValue: 0 }) });
    oStatus = oRes.status;
    oBody   = await oRes.json();
  }

  return NextResponse.json({ contactStatus: cRes.status, contactId: cId, contactError: cRes.ok ? null : cBody, opportunityStatus: oStatus, opportunityId: oBody?.opportunity?.id ?? oBody?.id ?? null, opportunityError: oStatus && oStatus >= 400 ? oBody : null });
}
