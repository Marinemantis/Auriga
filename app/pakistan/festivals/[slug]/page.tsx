import type { Metadata } from "next";
import { entryMetadata, entryStaticParams, renderEntry } from "@/lib/guide-route";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return entryStaticParams("festivals");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return entryMetadata("festivals", (await params).slug);
}

export default async function Page({ params }: Props) {
  return renderEntry("festivals", (await params).slug);
}
