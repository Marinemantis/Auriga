import type { Metadata } from "next";
import { entryMetadata, renderEntry } from "@/lib/guide-route";
import { listEntries } from "@/lib/content";

type Props = { params: Promise<{ slug: string; topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return listEntries("destinations").map(e => {
    const [slug, topic] = e.slug.split("/");
    return { slug, topic };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, topic } = await params;
  return entryMetadata("destinations", `${slug}/${topic}`);
}

export default async function Page({ params }: Props) {
  const { slug, topic } = await params;
  return renderEntry("destinations", `${slug}/${topic}`);
}
