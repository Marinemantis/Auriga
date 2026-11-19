import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Plan Your Journey",
  description: "Tell us how you would like to travel and we will design a tailor made itinerary through Hunza, Skardu and the rest of northern Pakistan.",
  path: "/enquire",
});

export default function Page() {
  return <PageClient />;
}
