import { hubMetadata, renderHub } from "@/lib/guide-route";

export const metadata = hubMetadata("travel");

export default function Page() {
  return renderHub("travel");
}
