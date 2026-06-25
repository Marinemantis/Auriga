"use client";

import LegalPageLayout from "@/components/LegalPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="25 June 2026"
      sections={[
        {
          heading: "1. Information we collect",
          body: [
            "When you enquire about a journey, contact us, or fill in a booking form, we collect the information you provide directly — typically your name, email address, phone number, travel dates, and any details about your trip preferences.",
            "We do not collect payment card details on this website. Any deposits or payments are arranged directly with our team via bank transfer or another method you agree to.",
          ],
        },
        {
          heading: "2. How we use your information",
          body: [
            "We use the information you share to respond to enquiries, design and confirm itineraries, communicate about your booking, and — only with your consent — send occasional updates about new journeys.",
            "We never sell your personal information to third parties.",
          ],
        },
        {
          heading: "3. Sharing with third parties",
          body: [
            "To deliver your trip, we may share relevant details (such as your name and travel dates) with trusted local partners — hotels, drivers, and guides — strictly for the purpose of fulfilling your booking.",
            "We may also use third-party services such as WhatsApp Business and email providers to communicate with you, and analytics tools to understand how visitors use this website.",
          ],
        },
        {
          heading: "4. Cookies",
          body: [
            "This site may use minimal cookies or browser storage to remember basic preferences and to detect your approximate location so we can show prices in your local currency. No personally identifying advertising cookies are used.",
          ],
        },
        {
          heading: "5. Data retention",
          body: [
            "We retain enquiry and booking information for as long as needed to deliver your trip and to meet our accounting and legal obligations, after which it is deleted or anonymised.",
          ],
        },
        {
          heading: "6. Your rights",
          body: [
            "You may ask us at any time to access, correct, or delete the personal information we hold about you by emailing venturesauriga@gmail.com.",
          ],
        },
        {
          heading: "7. Changes to this policy",
          body: [
            "We may update this policy from time to time to reflect changes in our practices. The date at the top of this page indicates when it was last revised.",
          ],
        },
      ]}
    />
  );
}
