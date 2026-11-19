import "server-only";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePage from "@/components/guide/GuidePage";
import GuideIndexPage from "@/components/guide/GuideIndexPage";
import { getEntry, listEntries, SECTIONS, type SectionKey } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

/**
 * Shared handlers for the content routes, so each app/.../[slug]/page.tsx
 * stays a few lines long.
 */
export function entryStaticParams(section: SectionKey) {
  return listEntries(section).map(e => ({ slug: e.slug }));
}

export function entryMetadata(section: SectionKey, slug: string): Metadata {
  const entry = getEntry(section, slug);
  if (!entry) return {};
  const { meta } = entry;
  return {
    ...pageMetadata({
      title: meta.metaTitle ?? meta.title,
      description: meta.metaDescription,
      path: entry.path,
      image: meta.heroImage,
      type: "article",
    }),
    ...(meta.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

export function renderEntry(section: SectionKey, slug: string) {
  const entry = getEntry(section, slug);
  if (!entry) notFound();
  return <GuidePage entry={entry} />;
}

export function hubMetadata(section: SectionKey): Metadata {
  const s = SECTIONS[section];
  return pageMetadata({ title: s.hubTitle, description: s.hubDescription, path: s.hubPath, image: s.hubImage });
}

/** Generated hubs only go live once the section has at least one guide. */
export function renderHub(section: SectionKey) {
  if (listEntries(section).length === 0) notFound();
  return <GuideIndexPage section={section} />;
}
