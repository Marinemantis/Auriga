import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Auriga Ventures collects, uses and protects your personal information when you enquire about or book a journey with us.",
  path: "/privacy-policy",
});

export default function Page() {
  return <PageClient />;
}
