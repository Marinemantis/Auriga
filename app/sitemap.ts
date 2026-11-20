import type { MetadataRoute } from "next";
import { DESTINATIONS } from "@/lib/destinations";
import { TOURS } from "@/lib/tours";
import { TOUR_COLLECTIONS } from "@/lib/tour-collections";
import { listAllEntries, listEntries, SECTIONS, type SectionKey } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

const STATIC_PAGES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/tours", priority: 0.9 },
  { path: "/experiences", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.5 },
  { path: "/enquire", priority: 0.6 },
  { path: "/faqs", priority: 0.5 },
  { path: "/sustainability", priority: 0.3 },
  { path: "/pakistan/about", priority: 0.6 },
  { path: "/pakistan/visa", priority: 0.6 },
  { path: "/pakistan/mountain-passes", priority: 0.6 },
  { path: "/pakistan/festivals", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.1 },
  { path: "/terms-conditions", priority: 0.1 },
];

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
