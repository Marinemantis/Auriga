import Link from "next/link";
import NavMain from "@/components/NavMain";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import { EnquiryCta, FaqList, GuideHero, SectionHeading, TourGrid } from "@/components/guide/GuideBlocks";
import { getTour, type Tour } from "@/lib/tours";
import { getDestination } from "@/lib/destinations";
import type { TourCollection } from "@/lib/tour-collections";
import { absoluteUrl } from "@/lib/seo";

const INTER = { fontFamily: "var(--font-inter),sans-serif" };

export default function TourCollectionPage({ collection: c }: { collection: TourCollection }) {
  const path = `/tours/${c.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: c.name, path },
  ];
  const tours = c.tourSlugs.map(getTour).filter((t): t is Tour => Boolean(t));
  const destinations = (c.relatedDestinationSlugs ?? []).map(getDestination).filter(Boolean);
  const faqs = c.faqs ?? [];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.name,
    itemListElement: tours.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/tours/${t.slug}`), name: t.name })),
  };

  return (
    <div className="bg-[#080808] text-[#F5F0E8] overflow-x-hidden">
      <JsonLd data={[breadcrumbSchema(crumbs), itemList, ...(faqs.length ? [faqSchema(faqs)] : [])]} />
      <NavMain darkPage />

      <GuideHero
        image={c.heroImage}
        imageAlt={c.name}
        eyebrow={c.eyebrow}
        title={c.name}
        breadcrumbs={<Breadcrumbs items={crumbs} />}
      />

      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-16 lg:py-24 space-y-5">
        {c.intro.map((p, i) => (
          <p key={i} className="text-[16px] leading-[1.85] text-[#F5F0E8]/70" style={INTER}>{p}</p>
        ))}
      </section>

      <TourGrid tours={tours} heading={`${c.name} by Auriga`} />

      {c.sections?.map(s => (
        <section key={s.heading} className="max-w-3xl mx-auto px-6 lg:px-10 py-14 border-t border-[#1A1A1A]">
          <SectionHeading>{s.heading}</SectionHeading>
          <div className="space-y-5">
            {s.body.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.85] text-[#F5F0E8]/65" style={INTER}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      {destinations.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 lg:px-10 py-14 border-t border-[#1A1A1A]">
          <SectionHeading>Destination guides</SectionHeading>
          <ul className="space-y-3">
            {destinations.map(d => d && (
              <li key={d.slug}>
                <Link href={`/destinations/${d.slug}`} className="text-[15px] text-[#C8903A] hover:text-[#F5F0E8] transition-colors" style={INTER}>
                  {d.name} guide →
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
