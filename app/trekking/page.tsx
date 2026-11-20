import { hubMetadata, renderHub } from "@/lib/guide-route";

export const metadata = hubMetadata("trekking");

export default function Page() {
  return renderHub("trekking");
}
