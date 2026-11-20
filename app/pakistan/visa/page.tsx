import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Pakistan Visa for Tourists: e-Visa & Visa on Arrival",
  description: "How to get a Pakistan tourist visa: the e-Visa, visa on arrival, who is eligible, the documents you need and processing times, explained for travellers.",
  path: "/pakistan/visa",
});

export default function Page() {
  return <PageClient />;
}
