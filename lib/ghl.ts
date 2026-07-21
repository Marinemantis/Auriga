const GHL_API      = "https://services.leadconnectorhq.com";
const API_KEY      = process.env.GHL_API_KEY!;
const LOCATION_ID  = process.env.GHL_LOCATION_ID!;
const PIPELINE_ID  = process.env.GHL_PIPELINE_ID!;
const STAGE_ID     = process.env.GHL_STAGE_ID!;

const headers = () => ({
  "Authorization": `Bearer ${API_KEY}`,
  "Version": "2021-07-28",
  "Content-Type": "application/json",
});

interface ContactInput {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  source?: string;
}

async function upsertContact(input: ContactInput): Promise<string> {
  const res = await fetch(`${GHL_API}/contacts/upsert`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      locationId: LOCATION_ID,
      firstName:  input.firstName,
      lastName:   input.lastName  || "",
      email:      input.email,
      phone:      input.phone     || "",
      source:     input.source    || "Website",
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    console.error("[GHL] upsertContact failed:", res.status, JSON.stringify(data));
    throw new Error(`GHL contact upsert failed: ${res.status}`);
  }
  const contactId = data.contact?.id || data.id;
  console.log("[GHL] upsertContact success, contactId:", contactId);
  return contactId;
}

async function createOpportunity(contactId: string, name: string, notes: string) {
  const res = await fetch(`${GHL_API}/opportunities/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      name,
      pipelineId:      PIPELINE_ID,
      pipelineStageId: STAGE_ID,
      locationId:      LOCATION_ID,
      contactId,
      status:          "open",
      monetaryValue:   0,
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    console.error("[GHL] createOpportunity failed:", res.status, JSON.stringify(data));
    throw new Error(`GHL opportunity creation failed: ${res.status}`);
  }
  console.log("[GHL] createOpportunity success, id:", data.opportunity?.id || data.id);

  // Add notes as a conversation note if provided
  if (notes) {
    const oppId = data.opportunity?.id || data.id;
    if (oppId) {
      const noteRes = await fetch(`${GHL_API}/opportunities/${oppId}/notes`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ body: notes }),
      });
      if (!noteRes.ok) {
        const noteData = await noteRes.json();
        console.error("[GHL] addNote failed:", noteRes.status, JSON.stringify(noteData));
      }
    }
  }

  return data;
}

export async function pushToGHL(params: {
  name: string;
  email: string;
  phone?: string;
  opportunityTitle: string;
  notes: string;
}) {
  // Log env var presence (not values) to help diagnose missing config
  console.log("[GHL] env check — API_KEY:", !!API_KEY, "LOCATION_ID:", !!LOCATION_ID, "PIPELINE_ID:", !!PIPELINE_ID, "STAGE_ID:", !!STAGE_ID);

  try {
    const parts     = params.name.trim().split(" ");
    const firstName = parts[0];
    const lastName  = parts.slice(1).join(" ");

    const contactId = await upsertContact({
      firstName,
      lastName,
      email:  params.email,
      phone:  params.phone,
      source: "Website",
    });

    if (contactId) {
      await createOpportunity(contactId, params.opportunityTitle, params.notes);
    } else {
      console.error("[GHL] No contactId returned — opportunity not created");
    }
  } catch (err) {
    console.error("[GHL] pushToGHL error:", err);
  }
}
