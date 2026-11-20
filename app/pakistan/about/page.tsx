import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "About Pakistan: Regions, Seasons & Culture",
  description: "A traveller's introduction to Pakistan: Gilgit-Baltistan, Khyber Pakhtunkhwa, Punjab, Sindh, Balochistan and Kashmir, plus the best season to visit each.",
  path: "/pakistan/about",
});

export default function Page() {
  return <PageClient />;
}
