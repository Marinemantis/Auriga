import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Auriga Ventures: Tailor made journeys through Pakistan's north",
  description: "Tailor made luxury tours in Hunza, Skardu, Fairy Meadows and Gilgit-Baltistan. Private journeys through Pakistan's north, designed by a local team.",
  path: "/",
  absoluteTitle: true,
});

export default function Page() {
  return <PageClient />;
}
