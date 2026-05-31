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
  return data.contact?.id || data.id;
}

async function createOpportunity(contactId: string, title: string, notes: string) {
  await fetch(`${GHL_API}/opportunities/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      title,
      pipelineId:      PIPELINE_ID,
      pipelineStageId: STAGE_ID,
      locationId:      LOCATION_ID,
      contactId,
      status:          "open",
      monetaryValue:   0,
      customFields:    [],
      ...(notes ? { notes } : {}),
    }),
  });
}

export async function pushToGHL(params: {
  name: string;
  email: string;
  phone?: string;
  opportunityTitle: string;
  notes: string;
}) {
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
    }
  } catch (err) {
    console.error("GHL push error:", err);
  }
}
