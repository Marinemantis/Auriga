import { pageMetadata } from "@/lib/seo";
import GuideLinks from "@/components/guide/GuideLinks";
import { listEntries } from "@/lib/content";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Festivals of Pakistan: Shandur Polo, Kalash & Cherry Blossom",
  description: "Shandur Polo Festival, the Kalash festivals of Chilam Joshi and Choimus, Hunza cherry blossom and more. When they happen and how to experience them.",
  path: "/pakistan/festivals",
});

export default function Page() {
  return <PageClient guides={<GuideLinks entries={listEntries("festivals")} heading="Festival guides" />} />;
}
