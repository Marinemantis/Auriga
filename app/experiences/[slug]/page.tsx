import type { Metadata } from "next";
import { entryMetadata, entryStaticParams, renderEntry } from "@/lib/guide-route";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return entryStaticParams("experiences");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return entryMetadata("experiences", (await params).slug);
}

export default async function Page({ params }: Props) {
  return renderEntry("experiences", (await params).slug);
}
