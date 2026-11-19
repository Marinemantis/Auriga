import type { Metadata } from "next";

/** Canonical origin. Override with NEXT_PUBLIC_SITE_URL (e.g. for staging). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurigaventure.com").replace(/\/$/, "");
export const SITE_NAME = "Auriga Ventures";
export const DEFAULT_OG_IMAGE = "/hunza-lady-finger.jpg";

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Trim text to a meta-description length, breaking on a word. */
export function metaDescription(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "")}…`;
}

interface PageMetaInput {
  /** Page title; the layout template appends " | Auriga Ventures". */
  title: string;
  description: string;
  /** Site-relative path, used for the canonical URL. */
  path: string;
  image?: string;
  /** Set true to use the title as-is, without the site-name suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
}

export function pageMetadata({ title, description, path, image, absoluteTitle, type = "website" }: PageMetaInput): Metadata {
  const desc = metaDescription(description);
  const images = [{ url: image ?? DEFAULT_OG_IMAGE }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: desc,
    alternates: { canonical: path },
    openGraph: { type, title, description: desc, url: path, siteName: SITE_NAME, images },
    twitter: { card: "summary_large_image", title, description: desc, images: images.map(i => i.url) },
  };
}
