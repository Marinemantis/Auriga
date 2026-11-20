import "server-only";
import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import type { Faq } from "@/lib/faqs";
import { DESTINATIONS, getDestination } from "@/lib/destinations";
import { TOURS } from "@/lib/tours";
import { TOUR_COLLECTIONS } from "@/lib/tour-collections";
import { STATIC_PAGES } from "@/lib/site-pages";

/**
 * Long-form guide pages live as MDX files in /content.
 *
 *   content/destinations/<destination>/<topic>.mdx  → /destinations/<destination>/<topic>
 *   content/trekking/<slug>.mdx                     → /trekking/<slug>
 *   content/travel/<slug>.mdx                       → /travel/<slug>
 *   content/mountains/<slug>.mdx                    → /pakistan/mountains/<slug>
 *   content/experiences/<slug>.mdx                  → /experiences/<slug>
 *   content/festivals/<slug>.mdx                    → /pakistan/festivals/<slug>
 *
 * See content/README.md for the frontmatter fields.
 */

export type SectionKey = "destinations" | "trekking" | "travel" | "mountains" | "experiences" | "festivals";

export interface SectionConfig {
  /** Breadcrumb label for the hub. */
  label: string;
  /** URL prefix for entries. */
  base: string;
  /** "generated": a hub page listing entries is built at `base`. "existing": the hub is a hand-built page. */
  hub: "generated" | "existing";
  hubPath: string;
  hubTitle: string;
  hubDescription: string;
  hubImage: string;
}

export const SECTIONS: Record<SectionKey, SectionConfig> = {
  destinations: {
    label: "Destinations", base: "/destinations", hub: "existing", hubPath: "/destinations",
    hubTitle: "Destinations", hubDescription: "", hubImage: "/dest-hero-panorama.jpg",
  },
  trekking: {
    label: "Trekking", base: "/trekking", hub: "generated", hubPath: "/trekking",
    hubTitle: "Trekking in Pakistan",
    hubDescription: "Base camp treks, high passes and alpine lakes across the Karakoram, Himalaya and Hindu Kush, with routes, seasons, permits and difficulty for each.",
    hubImage: "/rof-nanga-parbat-camp.jpg",
  },
  travel: {
    label: "Travel Guide", base: "/travel", hub: "generated", hubPath: "/travel",
    hubTitle: "Gilgit-Baltistan Travel Guide",
    hubDescription: "Practical guides for travelling in northern Pakistan: routes and travel times, flights, permits, the best time to visit, what to pack and sample itineraries.",
    hubImage: "/rof-kkh-aerial.jpg",
  },
  mountains: {
    label: "Mountains", base: "/pakistan/mountains", hub: "generated", hubPath: "/pakistan/mountains",
    hubTitle: "Mountains of Pakistan",
    hubDescription: "K2, Nanga Parbat, Rakaposhi, Laila Peak and the other great peaks of northern Pakistan: heights, history, and the best places to see them.",
    hubImage: "/rakaposhi-moon.jpg",
  },
  experiences: {
    label: "Experiences", base: "/experiences", hub: "existing", hubPath: "/experiences",
    hubTitle: "Experiences", hubDescription: "", hubImage: "/slide-deosai-glamping.jpg",
  },
  festivals: {
    label: "Festivals", base: "/pakistan/festivals", hub: "existing", hubPath: "/pakistan/festivals",
    hubTitle: "Festivals", hubDescription: "", hubImage: "/fest-shandur-polo.jpg",
  },
};

export interface GuideFrontmatter {
  /** H1 on the page. */
  title: string;
  /** <title> tag; defaults to `title`. The site name is appended automatically. */
  metaTitle?: string;
  metaDescription: string;
  /** Primary target keyword (one per page). */
  keyword: string;
  secondaryKeywords?: string[];
  eyebrow?: string;
  /** Standfirst shown under the H1. */
  intro?: string;
  heroImage: string;
  heroAlt?: string;
  stats?: { label: string; value: string }[];
  faqs?: Faq[];
  /** Tour slugs from lib/tours.ts. */
  relatedTours?: string[];
  /** Site-relative paths, e.g. /destinations/hunza/passu-cones */
  relatedPages?: string[];
  /** ISO date, YYYY-MM-DD. */
  updated: string;
  draft?: boolean;
}

export interface GuideEntry {
  section: SectionKey;
  /** "passu-cones", or "hunza/passu-cones" for destination guides. */
  slug: string;
  path: string;
  file: string;
  meta: GuideFrontmatter;
  body: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");
const SHOW_DRAFTS = process.env.NODE_ENV !== "production";

function fail(file: string, msg: string): never {
  throw new Error(`[content] ${path.relative(process.cwd(), file)}: ${msg}`);
}

function normaliseMeta(file: string, data: Record<string, unknown>): GuideFrontmatter {
  for (const key of ["title", "metaDescription", "keyword", "heroImage", "updated"] as const) {
    if (data[key] === undefined || data[key] === "") fail(file, `missing required frontmatter field "${key}"`);
  }
  // YAML turns bare dates into Date objects.
  const updated = data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(updated)) fail(file, `"updated" must be YYYY-MM-DD`);
  const heroImage = String(data.heroImage);
  if (heroImage.startsWith("/") && !fs.existsSync(path.join(process.cwd(), "public", heroImage))) {
    fail(file, `heroImage ${heroImage} not found in /public`);
  }
  const tourSlugs = new Set(TOURS.map(t => t.slug));
  for (const t of (data.relatedTours as string[] | undefined) ?? []) {
    if (!tourSlugs.has(t)) fail(file, `relatedTours: unknown tour "${t}"`);
  }
  return { ...(data as unknown as GuideFrontmatter), updated, heroImage };
}

function readEntry(section: SectionKey, slug: string, file: string): GuideEntry {
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { section, slug, path: `${SECTIONS[section].base}/${slug}`, file, meta: normaliseMeta(file, data), body: content };
}

function mdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith(".mdx") && !f.startsWith("_")).map(f => f.replace(/\.mdx$/, ""));
}

const loadSection = cache((section: SectionKey): GuideEntry[] => {
  const root = path.join(CONTENT_DIR, section);
  let entries: GuideEntry[];
  if (section === "destinations") {
    if (!fs.existsSync(root)) return [];
    entries = fs.readdirSync(root, { withFileTypes: true }).filter(d => d.isDirectory()).flatMap(d => {
      if (!getDestination(d.name)) {
        fail(path.join(root, d.name), `no destination "${d.name}" in lib/destinations.ts (have: ${DESTINATIONS.map(x => x.slug).join(", ")})`);
      }
      return mdxFiles(path.join(root, d.name)).map(topic =>
        readEntry(section, `${d.name}/${topic}`, path.join(root, d.name, `${topic}.mdx`)));
    });
  } else {
    entries = mdxFiles(root).map(slug => readEntry(section, slug, path.join(root, `${slug}.mdx`)));
  }
  return entries.filter(e => SHOW_DRAFTS || !e.meta.draft).sort((a, b) => a.meta.title.localeCompare(b.meta.title));
});

export function listEntries(section: SectionKey): GuideEntry[] {
  return loadSection(section);
}

export function listAllEntries(): GuideEntry[] {
  return (Object.keys(SECTIONS) as SectionKey[]).flatMap(listEntries);
}

export function getEntry(section: SectionKey, slug: string): GuideEntry | undefined {
  return listEntries(section).find(e => e.slug === slug);
}

/** Title for an internal path, used to label related links. Throws on unknown paths so broken links fail the build. */
export function resolveInternalLink(href: string, from: string): { href: string; title: string } {
  const entry = listAllEntries().find(e => e.path === href);
  if (entry) return { href, title: entry.meta.title };
  const dest = DESTINATIONS.find(d => `/destinations/${d.slug}` === href);
  if (dest) return { href, title: `${dest.name} guide` };
  const tour = TOURS.find(t => `/tours/${t.slug}` === href);
  if (tour) return { href, title: tour.name };
  const collection = TOUR_COLLECTIONS.find(c => `/tours/${c.slug}` === href);
  if (collection) return { href, title: collection.name };
  const page = STATIC_PAGES.find(p => p.path === href);
  if (page) return { href, title: page.title };
  const hub = Object.values(SECTIONS).find(s => s.hubPath === href);
  if (hub) return { href, title: hub.hubTitle };
  throw new Error(`[content] ${from}: relatedPages link ${href} does not match any page`);
}
