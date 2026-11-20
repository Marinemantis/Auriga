import { pageMetadata } from "@/lib/seo";
import JsonLd, { faqSchema } from "@/components/JsonLd";
import { FAQS } from "@/lib/faqs";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Travel FAQs: Booking, Visas & Altitude",
  description: "Answers to common questions about travelling in northern Pakistan with Auriga Ventures: booking, pricing, visas, altitude, seasons and custom itineraries.",
  path: "/faqs",
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <PageClient />
    </>
  );
}
