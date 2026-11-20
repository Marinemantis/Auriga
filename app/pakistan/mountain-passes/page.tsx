import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata = pageMetadata({
  title: "Mountain Passes of Northern Pakistan",
  description: "Khunjerab, Babusar, Shandur, Lowari, Broghil, Deosai and more: the high passes of northern Pakistan, with their heights, seasons and what to expect.",
  path: "/pakistan/mountain-passes",
});

export default function Page() {
  return <PageClient />;
}
