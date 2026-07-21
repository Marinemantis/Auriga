const GHL_API     = "https://services.leadconnectorhq.com";
const API_KEY     = process.env.GHL_API_KEY!;
const LOCATION_ID = process.env.GHL_LOCATION_ID!;

// IDs verified via /api/debug — Sales Pipeline > New Enquiry
const PIPELINE_ID = "H2yEFiQTYm9yJIUsMcnr";
const STAGE_ID    = "b84a99fc-88e7-4d52-93ca-b0a86830bad4";

const ghlHeaders = () => ({
  "Authorization": `Bearer ${API_KEY}`,
  "Version": "2021-07-28",
  "Content-Type": "application/json",
});

async function upsertContact(params: {
  firstName: string;
  lastName:  string;
  email:     string;
  phone?:    string;
}): Promise<string> {
  const res = await fetch(`${GHL_API}/contacts/upsert`, {
    method:  "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      locationId: LOCATION_ID,
      firstName:  params.firstName,
      lastName:   params.lastName,
      email:      params.email,
      phone:      params.phone || "",
      source:     "Website",
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`[GHL] contact upsert ${res.status}: ${JSON.stringify(data)}`);
  const contactId = data.contact?.id || data.id;
  console.log("[GHL] contact upserted:", contactId);
  return contactId;
}

async function createOpportunity(contactId: string, title: string, notes: string): Promise<void> {
  const res = await fetch(`${GHL_API}/opportunities/`, {
    method:  "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      name:            title,
      pipelineId:      PIPELINE_ID,
      pipelineStageId: STAGE_ID,
      locationId:      LOCATION_ID,
      contactId,
      status:          "open",
      monetaryValue:   0,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`[GHL] opportunity creation ${res.status}: ${JSON.stringify(data)}`);
  const oppId = data.opportunity?.id || data.id;
  console.log("[GHL] opportunity created:", oppId);

  if (notes && oppId) {
    const noteRes = await fetch(`${GHL_API}/opportunities/${oppId}/notes`, {
      method:  "POST",
      headers: ghlHeaders(),
      body: JSON.stringify({ body: notes }),
    });
    if (!noteRes.ok) console.error("[GHL] note failed:", noteRes.status);
  }
}

export async function pushToGHL(params: {
  name:             string;
  email:            string;
  phone?:           string;
  opportunityTitle: string;
  notes:            string;
}) {
  try {
    const parts     = params.name.trim().split(" ");
    const firstName = parts[0];
    const lastName  = parts.slice(1).join(" ");
    const contactId = await upsertContact({ firstName, lastName, email: params.email, phone: params.phone });
    await createOpportunity(contactId, params.opportunityTitle, params.notes);
  } catch (err) {
    console.error("[GHL] error:", err);
  }
}
