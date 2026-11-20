import type { Faq } from "@/lib/faqs";
import { TOURS } from "@/lib/tours";

/**
 * Keyword landing pages that live beside the itineraries at /tours/[slug],
 * e.g. /tours/hunza ("hunza tour packages"). Each one lists matching tours.
 * See SEO-KEYWORD-PLAN.md, section 2.
 */
export interface TourCollection {
  slug: string;
  /** H1, e.g. "Hunza Tours". */
  name: string;
  /** Small label above the H1. */
  eyebrow: string;
  heroImage: string;
  /** Primary keyword this page targets. */
  keyword: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  /** Itineraries from lib/tours.ts to list, in display order. */
  tourSlugs: string[];
  sections?: { heading: string; body: string[] }[];
  faqs?: Faq[];
  /** Links to /destinations/[slug] hubs. */
  relatedDestinationSlugs?: string[];
}

export const TOUR_COLLECTIONS: TourCollection[] = [
  // Phase 1 adds: hunza, skardu, fairy-meadows, from-islamabad, ...
];

export function getTourCollection(slug: string): TourCollection | undefined {
  return TOUR_COLLECTIONS.find(c => c.slug === slug);
}

// Collections and itineraries share the /tours/[slug] namespace.
const tourSlugs = new Set(TOURS.map(t => t.slug));
for (const c of TOUR_COLLECTIONS) {
  if (tourSlugs.has(c.slug)) {
    throw new Error(`Tour collection slug "${c.slug}" collides with a tour in lib/tours.ts`);
  }
  for (const s of c.tourSlugs) {
    if (!tourSlugs.has(s)) throw new Error(`Tour collection "${c.slug}" lists unknown tour "${s}"`);
  }
}
