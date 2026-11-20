import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Auriga Ventures is a Gilgit-Baltistan travel company creating tailor made luxury journeys through Pakistan's mountains, valleys and cultures.",
  path: "/about",
});

export default function Page() {
  return <PageClient />;
}
