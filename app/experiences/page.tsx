import { pageMetadata } from "@/lib/seo";
import GuideLinks from "@/components/guide/GuideLinks";
import { listEntries } from "@/lib/content";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Luxury Experiences in Northern Pakistan",
  description: "Curated retreats, high-altitude camps and cultural immersion across Gilgit-Baltistan and Chitral, designed around the way you want to travel.",
  path: "/experiences",
});

export default function Page() {
  return <PageClient guides={<GuideLinks entries={listEntries("experiences")} heading="Things to do in the north" eyebrow="Activities" />} />;
}
