import Image from "next/image";
import Link from "next/link";
import NavMain from "@/components/NavMain";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { EnquiryCta, GuideHero } from "@/components/guide/GuideBlocks";
import { listEntries, SECTIONS, type SectionKey } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

const INTER = { fontFamily: "var(--font-inter),sans-serif" };
const SERIF = { fontFamily: "var(--font-cormorant),Georgia,serif" };

/** Hub page for a content section, listing every guide in it. */
export default function GuideIndexPage({ section }: { section: SectionKey }) {
  const s = SECTIONS[section];
  const entries = listEntries(section);
  const crumbs = [{ name: "Home", path: "/" }, { name: s.label, path: s.hubPath }];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: s.hubTitle,
    itemListElement: entries.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(e.path), name: e.meta.title })),
  };

  return (
    <div className="bg-[#080808] text-[#F5F0E8] overflow-x-hidden">
      <JsonLd data={[breadcrumbSchema(crumbs), itemList]} />
      <NavMain darkPage />
      <GuideHero
        image={s.hubImage}
        imageAlt={s.hubTitle}
        eyebrow={s.label}
        title={s.hubTitle}
        intro={s.hubDescription}
        breadcrumbs={<Breadcrumbs items={crumbs} />}
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(e => (
            <li key={e.path}>
              <Link href={e.path} className="group block bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C8903A]/50 transition-colors h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={e.meta.heroImage} alt={e.meta.heroAlt ?? e.meta.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h2 className="text-[24px] font-light text-[#F5F0E8] leading-snug mb-3" style={SERIF}>{e.meta.title}</h2>
                  <p className="text-[13px] text-[#F5F0E8]/55 leading-relaxed" style={INTER}>{e.meta.metaDescription}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <EnquiryCta />
      <Footer />
    </div>
  );
}
