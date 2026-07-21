import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY     = process.env.GHL_API_KEY ?? "";
  const LOCATION_ID = process.env.GHL_LOCATION_ID ?? "";
  const headers = {
    "Authorization": `Bearer ${API_KEY}`,
    "Version": "2021-07-28",
    "Content-Type": "application/json",
  };

  // Step 1 — upsert a test contact
  const contactRes  = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method:  "POST",
    headers,
    body: JSON.stringify({
      locationId: LOCATION_ID,
      firstName:  "Debug",
      lastName:   "Test",
      email:      "debug@aurigaventures-test.com",
      source:     "Website",
    }),
  });
  const contactBody = await contactRes.json();
  const contactId   = contactBody?.contact?.id ?? contactBody?.id ?? null;

  // Step 2 — create a test opportunity
  let oppBody = null;
  if (contactId) {
    const oppRes = await fetch("https://services.leadconnectorhq.com/opportunities/", {
      method:  "POST",
      headers,
      body: JSON.stringify({
        name:            "DEBUG TEST — delete me",
        pipelineId:      "H2yEFiQTYm9yJIUsMcnr",
        pipelineStageId: "b84a99fc-88e7-4d52-93ca-b0a86830bad4",
        locationId:      LOCATION_ID,
        contactId,
        status:          "open",
        monetaryValue:   0,
      }),
    });
    oppBody = await oppRes.json();
  }

  return NextResponse.json({
    contactStatus: contactRes.status,
    contactBody,
    contactId,
    oppBody,
  });
}
