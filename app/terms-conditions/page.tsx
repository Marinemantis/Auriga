import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "The booking terms and conditions for journeys with Auriga Ventures, including payments, cancellations and traveller responsibilities.",
  path: "/terms-conditions",
});

export default function Page() {
  return <PageClient />;
}
