import Link from "next/link";
import NavMain from "@/components/NavMain";
import Footer from "@/components/Footer";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import JsonLd, { breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import Mdx from "@/components/guide/Mdx";
import { EnquiryCta, FaqList, GuideHero, SectionHeading, StatsBox, TourGrid } from "@/components/guide/GuideBlocks";
import { resolveInternalLink, SECTIONS, type GuideEntry } from "@/lib/content";
import { getDestination } from "@/lib/destinations";
import { getTour, type Tour } from "@/lib/tours";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

const INTER = { fontFamily: "var(--font-inter),sans-serif" };

export function guideBreadcrumbs(entry: GuideEntry): Crumb[] {
  const s = SECTIONS[entry.section];
  const crumbs: Crumb[] = [{ name: "Home", path: "/" }, { name: s.label, path: s.hubPath }];
  if (entry.section === "destinations") {
    const destSlug = entry.slug.split("/")[0];
    const dest = getDestination(destSlug);
    if (dest) crumbs.push({ name: dest.name, path: `/destinations/${destSlug}` });
  }
  crumbs.push({ name: entry.meta.title, path: entry.path });
  return crumbs;
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default function GuidePage({ entry }: { entry: GuideEntry }) {
  const { meta } = entry;
  const crumbs = guideBreadcrumbs(entry);
  const tours = (meta.relatedTours ?? []).map(getTour).filter((t): t is Tour => Boolean(t));
  const related = (meta.relatedPages ?? []).map(href => resolveInternalLink(href, entry.file));
  const faqs = meta.faqs ?? [];
  const parentDest = entry.section === "destinations" ? getDestination(entry.slug.split("/")[0]) : undefined;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.metaDescription,
    image: absoluteUrl(meta.heroImage),
    dateModified: meta.updated,
    mainEntityOfPage: absoluteUrl(entry.path),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <div className="bg-[#080808] text-[#F5F0E8] overflow-x-hidden">
      <JsonLd data={[breadcrumbSchema(crumbs), article, ...(faqs.length ? [faqSchema(faqs)] : [])]} />
      <NavMain darkPage />

      <GuideHero
        image={meta.heroImage}
        imageAlt={meta.heroAlt ?? meta.title}
        eyebrow={meta.eyebrow ?? parentDest?.name ?? SECTIONS[entry.section].label}
        title={meta.title}
        intro={meta.intro}
        breadcrumbs={<Breadcrumbs items={crumbs} />}
      />

      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        {meta.stats && <StatsBox stats={meta.stats} />}
        <Mdx source={entry.body} />
        <p className="mt-12 text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8]/35" style={INTER}>
          Updated {formatDate(meta.updated)}
        </p>
      </article>

      <TourGrid tours={tours} heading="Travel here with Auriga" />

      {related.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 lg:px-10 py-14 border-t border-[#1A1A1A]">
          <SectionHeading>Keep reading</SectionHeading>
          <ul className="grid gap-3 sm:grid-cols-2">
            {related.map(r => (
              <li key={r.href}>
                <Link href={r.href} className="block border border-[#1A1A1A] px-5 py-4 text-[14px] text-[#F5F0E8]/80 hover:border-[#C8903A]/60 hover:text-[#C8903A] transition-colors" style={INTER}>
                  {r.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <FaqList faqs={faqs} />
      <EnquiryCta />
      <Footer />
    </div>
  );
}
