import type { MetadataRoute } from "next";
import { DESTINATIONS } from "@/lib/destinations";
import { TOURS } from "@/lib/tours";
import { TOUR_COLLECTIONS } from "@/lib/tour-collections";
import { listAllEntries, listEntries, SECTIONS, type SectionKey } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { STATIC_PAGES } from "@/lib/site-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = listAllEntries().filter(e => !e.meta.draft);

  const generatedHubs = (Object.keys(SECTIONS) as SectionKey[])
    .filter(k => SECTIONS[k].hub === "generated" && listEntries(k).some(e => !e.meta.draft))
    .map(k => ({ url: absoluteUrl(SECTIONS[k].hubPath), priority: 0.7 }));

  return [
    ...STATIC_PAGES.map(p => ({ url: absoluteUrl(p.path), priority: p.priority })),
    ...TOUR_COLLECTIONS.map(c => ({ url: absoluteUrl(`/tours/${c.slug}`), priority: 0.9 })),
    ...TOURS.map(t => ({ url: absoluteUrl(`/tours/${t.slug}`), priority: 0.8 })),
    ...DESTINATIONS.map(d => ({ url: absoluteUrl(`/destinations/${d.slug}`), priority: 0.8 })),
    ...generatedHubs,
    ...entries.map(e => ({ url: absoluteUrl(e.path), lastModified: e.meta.updated, priority: 0.7 })),
  ];
}
