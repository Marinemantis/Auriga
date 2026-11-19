import Image from "next/image";
import Link from "next/link";
import NavMain from "@/components/NavMain";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { EnquiryCta, GuideHero } from "@/components/guide/GuideBlocks";
import { DESTINATIONS } from "@/lib/destinations";
import { listEntries } from "@/lib/content";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

const INTER = { fontFamily: "var(--font-inter),sans-serif" };
const SERIF = { fontFamily: "var(--font-cormorant),Georgia,serif" };

const TITLE = "Destinations in Northern Pakistan";
const DESCRIPTION =
  "Travel guides to the valleys of northern Pakistan: Hunza, Skardu, Gilgit, Fairy Meadows, Nagar, Ghizer, Astore and Chitral, with what to see, when to go and tailor made tours.";

export const metadata = pageMetadata({
  title: "Destinations in Northern Pakistan: Hunza, Skardu, Gilgit & More",
  description: DESCRIPTION,
  path: "/destinations",
  image: "/dest-hero-panorama.jpg",
});

export default function DestinationsIndex() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }];
  const guides = listEntries("destinations");
  const guideCount = (slug: string) => guides.filter(g => g.slug.startsWith(`${slug}/`)).length;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: TITLE,
    itemListElement: DESTINATIONS.map((d, i) => ({
      "@type": "ListItem", position: i + 1, url: absoluteUrl(`/destinations/${d.slug}`), name: d.name,
    })),
  };

  return (
    <div className="bg-[#080808] text-[#F5F0E8] overflow-x-hidden">
      <JsonLd data={[breadcrumbSchema(crumbs), itemList]} />
      <NavMain darkPage />
      <GuideHero
        image="/dest-hero-panorama.jpg"
        imageAlt="Mountain panorama in northern Pakistan"
        eyebrow="Destinations"
        title={TITLE}
        intro="From the orchards of Hunza to the dunes of Skardu and the Kalash valleys of Chitral, every valley in the north has its own character. These are the places we know best."
        breadcrumbs={<Breadcrumbs items={crumbs} />}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map(d => {
            const n = guideCount(d.slug);
            return (
              <li key={d.slug}>
                <Link href={`/destinations/${d.slug}`} className="group block h-full bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C8903A]/50 transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={d.heroImage} alt={d.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-2" style={INTER}>{d.region}</p>
                    <h2 className="text-[28px] font-light text-[#F5F0E8] leading-snug mb-2" style={SERIF}>{d.name}</h2>
                    <p className="text-[13px] text-[#F5F0E8]/55 leading-relaxed" style={INTER}>
                      {d.highlights.slice(0, 3).join(" · ")}
                    </p>
                    {n > 0 && (
                      <p className="mt-4 text-[11px] tracking-[0.15em] uppercase text-[#F5F0E8]/40" style={INTER}>
                        {n} {n === 1 ? "guide" : "guides"}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-12 text-center text-[14px] text-[#F5F0E8]/55" style={INTER}>
          Looking for an itinerary? <Link href="/tours" className="text-[#C8903A] hover:text-[#F5F0E8] transition-colors">See all our tours →</Link>
        </p>
      </section>

      <EnquiryCta />
      <Footer />
    </div>
  );
}
