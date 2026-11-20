import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Sustainability",
  description: "How Auriga Ventures travels responsibly in Gilgit-Baltistan and Chitral: local guides and ground teams, family-run stays, leave-no-trace camps and respect for culture.",
  path: "/sustainability",
});

export default function Page() {
  return <PageClient />;
}
