import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Luxury Experiences in Northern Pakistan",
  description: "Curated retreats, high-altitude camps and cultural immersion across Gilgit-Baltistan and Chitral, designed around the way you want to travel.",
  path: "/experiences",
});

export default function Page() {
  return <PageClient />;
}
