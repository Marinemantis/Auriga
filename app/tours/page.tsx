import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Northern Pakistan Tours: Hunza, Skardu & Gilgit-Baltistan",
  description: "Private, tailor made tours of Hunza, Skardu, Fairy Meadows, Chitral and Astore. Bespoke and small group journeys through northern Pakistan from Islamabad.",
  path: "/tours",
});

export default function Page() {
  return <PageClient />;
}
