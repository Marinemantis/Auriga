import Image from "next/image";
import Link from "next/link";
import PriceDisplay from "@/components/PriceDisplay";
import type { Tour } from "@/lib/tours";
import type { Faq } from "@/lib/faqs";

const INTER = { fontFamily: "var(--font-inter),sans-serif" };
const SERIF = { fontFamily: "var(--font-cormorant),Georgia,serif" };

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block h-px w-10 bg-[#C8903A]" aria-hidden="true" />
      <span className="text-[10px] tracking-[0.38em] uppercase text-[#C8903A]" style={INTER}>{children}</span>
    </div>
  );
}

export function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-[34px] md:text-[42px] font-light text-[#F5F0E8] leading-tight mb-6 scroll-mt-28" style={SERIF}>
      {children}
    </h2>
  );
}

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.slug}`} className="group block bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C8903A]/50 transition-colors">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-2" style={INTER}>
          {tour.region} · {tour.duration}
        </p>
        <h3 className="text-[26px] font-light text-[#F5F0E8] leading-snug mb-3" style={SERIF}>{tour.name}</h3>
        <p className="text-[13px] text-[#F5F0E8]/55 leading-relaxed mb-5" style={INTER}>{tour.tagline}</p>
        <PriceDisplay usd={tour.priceUSD} className="text-[12px] tracking-[0.12em] uppercase text-[#F5F0E8]/80" />
      </div>
    </Link>
  );
}

export function TourGrid({ tours, heading = "Journeys to consider" }: { tours: Tour[]; heading?: string }) {
  if (tours.length === 0) return null;
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 border-t border-[#1A1A1A]">
      <SectionHeading>{heading}</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map(t => <TourCard key={t.slug} tour={t} />)}
      </div>
    </section>
  );
}

/** FAQ list built on <details>, so it works without client JavaScript. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-16 lg:py-24 border-t border-[#1A1A1A]">
      <SectionHeading id="faqs">Frequently asked questions</SectionHeading>
      <div className="divide-y divide-[#1A1A1A] border-y border-[#1A1A1A]">
        {faqs.map(f => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[16px] text-[#F5F0E8]" style={INTER}>
              {f.q}
              <span className="text-[#C8903A] transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
            </summary>
            <p className="mt-4 text-[14px] leading-relaxed text-[#F5F0E8]/60" style={INTER}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function EnquiryCta({
  heading = "Ready to go? Let's build your journey.",
  body = "Tell us how you like to travel and we will design a private itinerary around you, with the logistics handled from the moment you land.",
}: { heading?: string; body?: string }) {
  return (
    <section className="border-t border-[#1A1A1A]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">
        <h2 className="text-[38px] md:text-[48px] font-light text-[#F5F0E8] leading-tight mb-5" style={SERIF}>{heading}</h2>
        <p className="text-[15px] text-[#F5F0E8]/55 leading-relaxed mb-10" style={INTER}>{body}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/enquire" className="px-8 py-3.5 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.16em] uppercase font-medium hover:bg-[#F5F0E8] transition-colors" style={INTER}>
            Customise my tour
          </Link>
          <a href="https://wa.me/923339555682" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border border-[#F5F0E8]/25 text-[#F5F0E8] text-[11px] tracking-[0.16em] uppercase hover:border-[#25D366] hover:text-[#25D366] transition-colors" style={INTER}>
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}

export function StatsBox({ stats }: { stats: { label: string; value: string }[] }) {
  if (stats.length === 0) return null;
  return (
    <dl className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-px bg-[#1A1A1A] border border-[#1A1A1A] mb-12">
      {stats.map(s => (
        <div key={s.label} className="bg-[#0D0D0D] p-5">
          <dt className="text-[10px] tracking-[0.28em] uppercase text-[#F5F0E8]/40 mb-2" style={INTER}>{s.label}</dt>
          <dd className="text-[20px] text-[#F5F0E8]" style={SERIF}>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function GuideHero({
  image, imageAlt, eyebrow, title, intro, breadcrumbs,
}: {
  image: string; imageAlt: string; eyebrow: string; title: string; intro?: string; breadcrumbs: React.ReactNode;
}) {
  return (
    <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-[#080808]/10 to-[#080808]/95" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-14 lg:pb-20">
        <div className="mb-8">{breadcrumbs}</div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-light text-[#F5F0E8] leading-[0.98] mb-6 max-w-4xl" style={SERIF}>
          {title}
        </h1>
        {intro && <p className="text-[15px] md:text-[16px] text-[#F5F0E8]/65 leading-relaxed max-w-2xl" style={INTER}>{intro}</p>}
      </div>
    </section>
  );
}
