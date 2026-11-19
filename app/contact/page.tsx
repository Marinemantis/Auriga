import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Talk to the Auriga Ventures team about a private journey through northern Pakistan. Reach us on WhatsApp, by email or through our enquiry form.",
  path: "/contact",
});

export default function Page() {
  return <PageClient />;
}
