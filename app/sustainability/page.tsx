"use client";

import LegalPageLayout from "@/components/LegalPageLayout";

export default function SustainabilityPage() {
  return (
    <LegalPageLayout
      eyebrow="Our Commitment"
      title="Sustainability"
      updated="25 June 2026"
      sections={[
        {
          heading: "Travelling responsibly in fragile mountains",
          body: [
            "Gilgit-Baltistan, Chitral, and the Karakoram are some of the most ecologically fragile landscapes on Earth. Every itinerary we design is built around minimising our footprint on the glaciers, forests, and alpine pastures we are privileged to visit.",
          ],
        },
        {
          heading: "Supporting local communities",
          body: [
            "We work exclusively with local guides, drivers, and ground teams from the valleys we travel through, ensuring tourism revenue stays within the communities that host our guests.",
            "Where possible, we choose family-run properties and home-cooked dining experiences over large international chains, putting your spending directly into local hands.",
          ],
        },
        {
          heading: "Leave no trace",
          body: [
            "Our camps and glamping setups are designed to be fully removed after each stay, with all waste packed out — including at remote sites like Khukush Lake and Deosai National Park.",
            "We brief every traveller on responsible behaviour around wildlife, water sources, and culturally sensitive sites before departure.",
          ],
        },
        {
          heading: "Preserving culture",
          body: [
            "From the Kalash valleys of Chitral to the forts of Hunza and Skardu, we treat cultural encounters as exchanges, not performances — working with communities on their terms and ensuring fair compensation for any cultural experience included in your trip.",
          ],
        },
        {
          heading: "A work in progress",
          body: [
            "We are a young company and our sustainability practices will keep evolving. If you have feedback on how we can travel more responsibly through these mountains, we would genuinely like to hear it at hello@aurigaventure.com.",
          ],
        },
      ]}
    />
  );
}
