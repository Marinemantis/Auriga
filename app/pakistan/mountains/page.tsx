import { hubMetadata, renderHub } from "@/lib/guide-route";

export const metadata = hubMetadata("mountains");

export default function Page() {
  return renderHub("mountains");
}
