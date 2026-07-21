const GHL_API     = "https://services.leadconnectorhq.com";
const API_KEY     = process.env.GHL_API_KEY!;
const LOCATION_ID = process.env.GHL_LOCATION_ID!;

const PIPELINE_NAME = "Sales pipeline";
const STAGE_NAME    = "New Enquiry";

// Cached per serverless instance lifetime
let _pipelineId: string | null = null;
let _stageId: string | null = null;

const ghlHeaders = () => ({
  "Authorization": `Bearer ${API_KEY}`,
  "Version": "2021-07-28",
  "Content-Type": "application/json",
});

async function resolvePipelineStage(): Promise<{ pipelineId: string; stageId: string }> {
  if (_pipelineId && _stageId) return { pipelineId: _pipelineId, stageId: _stageId };

  const res = await fetch(`${GHL_API}/opportunities/pipelines?locationId=${LOCATION_ID}`, {
    headers: ghlHeaders(),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`[GHL] pipelines fetch failed: ${res.status} — ${JSON.stringify(data)}`);
  }

  const pipelines: { id: string; name: string; stages: { id: string; name: string }[] }[] =
    data.pipelines || [];

  const pipeline = pipelines.find(p => p.name === PIPELINE_NAME);
  if (!pipeline) {
    throw new Error(
      `[GHL] pipeline "${PIPELINE_NAME}" not found. Available: ${pipelines.map(p => p.name).join(", ")}`
    );
  }

  const stage = (pipeline.stages || []).find(s => s.name === STAGE_NAME);
  if (!stage) {
    throw new Error(
      `[GHL] stage "${STAGE_NAME}" not found. Available: ${(pipeline.stages || []).map(s => s.name).join(", ")}`
    );
  }

  _pipelineId = pipeline.id;
  _stageId    = stage.id;
  console.log(`[GHL] resolved pipeline "${PIPELINE_NAME}" → ${_pipelineId}, stage "${STAGE_NAME}" → ${_stageId}`);
  return { pipelineId: _pipelineId, stageId: _stageId };
}

async function upsertContact(params: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}): Promise<string> {
  const res = await fetch(`${GHL_API}/contacts/upsert`, {
    method: "POST",
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
  if (!res.ok) {
    throw new Error(`[GHL] contact upsert failed: ${res.status} — ${JSON.stringify(data)}`);
  }
  const contactId = data.contact?.id || data.id;
  console.log("[GHL] contact upserted, id:", contactId);
  return contactId;
}

async function createOpportunity(params: {
  contactId: string;
  pipelineId: string;
  stageId: string;
  title: string;
  notes: string;
}): Promise<void> {
  const res = await fetch(`${GHL_API}/opportunities/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      name:            params.title,
      pipelineId:      params.pipelineId,
      pipelineStageId: params.stageId,
      locationId:      LOCATION_ID,
      contactId:       params.contactId,
      status:          "open",
      monetaryValue:   0,
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`[GHL] opportunity creation failed: ${res.status} — ${JSON.stringify(data)}`);
  }
  const oppId = data.opportunity?.id || data.id;
  console.log("[GHL] opportunity created, id:", oppId);

  if (params.notes && oppId) {
    const noteRes = await fetch(`${GHL_API}/opportunities/${oppId}/notes`, {
      method: "POST",
      headers: ghlHeaders(),
      body: JSON.stringify({ body: params.notes }),
    });
    if (!noteRes.ok) {
      const noteData = await noteRes.json();
      console.error("[GHL] note creation failed:", noteRes.status, JSON.stringify(noteData));
    }
  }
}

export async function pushToGHL(params: {
  name: string;
  email: string;
  phone?: string;
  opportunityTitle: string;
  notes: string;
}) {
  console.log("[GHL] env check — API_KEY:", !!API_KEY, "LOCATION_ID:", !!LOCATION_ID);
  try {
    const parts     = params.name.trim().split(" ");
    const firstName = parts[0];
    const lastName  = parts.slice(1).join(" ");

    const { pipelineId, stageId } = await resolvePipelineStage();
    const contactId = await upsertContact({ firstName, lastName, email: params.email, phone: params.phone });
    await createOpportunity({
      contactId,
      pipelineId,
      stageId,
      title: params.opportunityTitle,
      notes: params.notes,
    });
  } catch (err) {
    console.error("[GHL] pushToGHL error:", err);
  }
}
