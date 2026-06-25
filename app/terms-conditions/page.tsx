"use client";

import LegalPageLayout from "@/components/LegalPageLayout";

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="25 June 2026"
      sections={[
        {
          heading: "1. Booking & deposits",
          body: [
            "A booking is confirmed once we receive your signed itinerary agreement and the agreed deposit. Final payment is due before departure, on the schedule confirmed in your booking documents.",
          ],
        },
        {
          heading: "2. Pricing",
          body: [
            "Prices shown on this website are starting prices per person and exclude international flights. Final pricing depends on group size, travel dates, property selection, and seasonal availability, and will be confirmed in writing before booking.",
            "Prices displayed in currencies other than USD are estimates converted at live exchange rates for your convenience — your invoice will state the exact amount due.",
          ],
        },
        {
          heading: "3. Cancellations & changes",
          body: [
            "Cancellation terms vary by trip and by how close to departure you cancel, as many of our properties and ground arrangements carry their own non-refundable deposits. Specific cancellation terms will be shared with your itinerary agreement before you book.",
            "We will always try to reschedule rather than cancel where weather, road conditions, or local circumstances require a change of plan.",
          ],
        },
        {
          heading: "4. Travel documents & health",
          body: [
            "You are responsible for ensuring you hold a valid passport, any required visas or permits for travel within Gilgit-Baltistan and Khyber Pakhtunkhwa, and appropriate travel insurance covering high-altitude activity.",
            "Some itineraries involve travel above 3,000 metres. We strongly recommend consulting a doctor before travel if you have any pre-existing health conditions.",
          ],
        },
        {
          heading: "5. Changes to itineraries",
          body: [
            "Northern Pakistan's mountain roads and weather can change quickly. We reserve the right to amend an itinerary — including routes, accommodation, or activities — where necessary for your safety, and will always seek an equivalent or better alternative.",
          ],
        },
        {
          heading: "6. Liability",
          body: [
            "Auriga Ventures (Pvt) Limited acts as an agent for third-party accommodation, transport, and activity providers and is not liable for circumstances beyond our reasonable control, including natural events, political instability, or government travel restrictions.",
          ],
        },
        {
          heading: "7. Governing law",
          body: [
            "These terms are governed by the laws of Pakistan. Any dispute will be subject to the jurisdiction of the courts of Gilgit-Baltistan.",
          ],
        },
      ]}
    />
  );
}
