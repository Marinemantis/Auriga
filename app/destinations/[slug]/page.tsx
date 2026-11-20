import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { DESTINATIONS, getDestination } from "@/lib/destinations";
import { pageMetadata } from "@/lib/seo";
import { listEntries } from "@/lib/content";
import GuideLinks from "@/components/guide/GuideLinks";
import DestinationClient from "./DestinationClient";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return DESTINATIONS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};
  return pageMetadata({
    title: dest.seoTitle ?? `${dest.name} Travel Guide & Luxury Tours`,
    description: dest.seoDescription ?? dest.intro[0] ?? dest.tagline,
    path: `/destinations/${slug}`,
    image: dest.heroImage,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: dest.name, path: `/destinations/${slug}` },
        ])}
      />
      <DestinationClient
        slug={slug}
        guides={
          <GuideLinks
            entries={listEntries("destinations").filter(e => e.slug.startsWith(`${slug}/`))}
            heading={`${dest.name} travel guides`}
          />
        }
      />
    </>
  );
}
