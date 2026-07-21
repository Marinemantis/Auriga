"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDestination, DESTINATIONS } from "@/lib/destinations";
import { getTour } from "@/lib/tours";
import Footer from "@/components/Footer";
import NavMain from "@/components/NavMain";
import { FadeUp, DrawLine, RevealPhoto } from "@/components/Reveal";
import PriceDisplay from "@/components/PriceDisplay";

export default function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const dest = getDestination(slug);
  if (!dest) notFound();

  const relatedTours = dest.relatedTourSlugs.map(getTour).filter(Boolean);
  const otherDestinations = DESTINATIONS.filter(d => d.slug !== dest.slug).slice(0, 3);

  return (
    <div className="bg-[#080808] text-[#F5F0E8] overflow-x-hidden">
      <NavMain darkPage />

      {/* ── HERO ── */}
      <section className="relative h-[78vh] min-h-[540px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={dest.heroImage} alt={dest.name} fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/20 via-transparent to-[#080808]/92" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-14 lg:pb-20">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <DrawLine />
              <span className="text-[10px] tracking-[0.38em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                {dest.region}
              </span>
            </div>
          </FadeUp>
          <p className="text-[12px] tracking-[0.28em] uppercase text-[#C8903A]/80 mb-2 italic" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            {dest.subtitle}
          </p>
          <div className="overflow-hidden mb-5">
            <motion.h1
              className="text-[56px] md:text-[80px] lg:text-[96px] font-light text-[#F5F0E8] leading-[0.95]"
              style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
              initial={{ y: "105%" }} animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {dest.name}
            </motion.h1>
          </div>
          <FadeUp delay={0.5}>
            <p className="text-[#F5F0E8]/50 text-[15px] max-w-md leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
              {dest.tagline}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="flex flex-col gap-5">
          {dest.intro.map((p, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p className="text-[#F5F0E8]/60 text-[16px] leading-[1.85]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                {p}
              </p>
            </FadeUp>
          ))}
        </div>

        {/* Highlights */}
        <FadeUp delay={0.15}>
          <div className="flex flex-wrap gap-2 mt-8">
            {dest.highlights.map(h => (
              <span key={h} className="text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]/55 border border-[#F5F0E8]/15 px-3 py-1.5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                {h}
              </span>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ── SIGNATURE EXPERIENCES ── */}
      <section className="border-t border-[#1A1A1A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <div className="flex items-center gap-3 mb-12">
              <DrawLine />
              <span className="text-[10px] tracking-[0.38em] uppercase text-[#F5F0E8]/28" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Experience With Auriga
              </span>
            </div>
          </FadeUp>
          <div className={`grid gap-px bg-[#1A1A1A] ${dest.signature.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {dest.signature.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08} className="bg-[#080808] p-8 lg:p-10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]/60 mb-5 font-mono">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-[26px] font-light text-[#F5F0E8] mb-4 leading-tight" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                  {s.title}
                </h3>
                <p className="text-[#F5F0E8]/45 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  {s.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB-VALLEYS (Skardu only) ── */}
      {dest.subValleys && (
        <section className="border-t border-[#1A1A1A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeUp>
              <p className="text-[10px] tracking-[0.38em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Must-Visit Valleys
              </p>
              <h2 className="text-[34px] md:text-[44px] font-light text-[#F5F0E8] leading-tight mb-12 max-w-2xl" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                Skardu is not a single destination — it's a collection of breathtaking valleys.
              </h2>
            </FadeUp>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {dest.subValleys.map((v, i) => (
                <FadeUp key={v.name} delay={i * 0.08}>
                  <h3 className="text-[20px] font-light text-[#C8903A] mb-3 leading-snug" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                    {v.name}
                  </h3>
                  <p className="text-[#F5F0E8]/50 text-[14px] leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    {v.body}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURED TREK (Astore only) ── */}
      {dest.featuredTrek && (
        <section className="border-t border-[#1A1A1A] py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <FadeUp>
              <p className="text-[10px] tracking-[0.38em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Featured Trek
              </p>
              <h2 className="text-[34px] md:text-[44px] font-light text-[#F5F0E8] leading-tight mb-2" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                {dest.featuredTrek.title}
              </h2>
              <p className="text-[#C8903A]/70 italic text-[15px] mb-10" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                {dest.featuredTrek.subtitle}
              </p>
            </FadeUp>

            {/* Overview strip */}
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1A1A1A] mb-14">
                {dest.featuredTrek.overview.map(o => (
                  <div key={o.label} className="bg-[#080808] p-5">
                    <p className="text-[9px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-1.5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{o.label}</p>
                    <p className="text-[13px] text-[#F5F0E8]/80" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{o.value}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Day by day */}
            <div className="flex flex-col divide-y divide-[#1A1A1A] border-t border-[#1A1A1A]">
              {dest.featuredTrek.days.map((d, i) => (
                <FadeUp key={d.title} delay={i * 0.06} className="py-8">
                  <div className="flex items-start gap-6">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#C8903A] shrink-0 pt-1" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                      Day {i + 1}
                    </span>
                    <div>
                      <h4 className="text-[20px] font-light text-[#F5F0E8] mb-2 leading-snug" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                        {d.title}
                      </h4>
                      {d.meta && (
                        <p className="text-[#C8903A]/60 text-[11px] tracking-[0.05em] mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{d.meta}</p>
                      )}
                      <p className="text-[#F5F0E8]/50 text-[14px] leading-relaxed mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                        {d.body}
                      </p>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-[#F5F0E8]/35" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                        {d.overnight && <span>Overnight: {d.overnight}</span>}
                        {d.highlights && <span>Highlights: {d.highlights}</span>}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED TOURS ── */}
      {relatedTours.length > 0 && (
        <section className="border-t border-[#1A1A1A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeUp>
              <p className="text-[10px] tracking-[0.38em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Bookable Journeys
              </p>
              <h2 className="text-[34px] md:text-[44px] font-light text-[#F5F0E8] leading-tight mb-12" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                Tours through {dest.name}
              </h2>
            </FadeUp>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {relatedTours.map((t, i) => t && (
                <FadeUp key={t.slug} delay={i * 0.1}>
                  <Link href={`/tours/${t.slug}`} className="group block">
                    <RevealPhoto className="relative mb-5" delay={i * 0.05}>
                      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                        <Image src={t.heroImage} alt={t.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
                      </div>
                    </RevealPhoto>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-1" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{t.region}</p>
                    <h3 className="text-[26px] font-light text-[#F5F0E8] mb-2 group-hover:text-[#C8903A] transition-colors" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{t.name}</h3>
                    <div className="flex items-center gap-2 text-[#F5F0E8]/40 text-[12px]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                      <PriceDisplay usd={t.priceUSD} /> <span>·</span> <span>{t.duration}</span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EXPLORE OTHER DESTINATIONS ── */}
      <section className="border-t border-[#1A1A1A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <p className="text-[10px] tracking-[0.38em] uppercase text-[#F5F0E8]/28 mb-12" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
              Explore More Destinations
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-3 lg:gap-4">
            {otherDestinations.map((d, i) => (
              <FadeUp key={d.slug} delay={i * 0.08}>
                <Link href={`/destinations/${d.slug}`} className="group relative block overflow-hidden bg-[#0D0D0D]" style={{ height: "260px" }}>
                  <Image src={d.heroImage} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[9px] tracking-[0.28em] uppercase text-[#C8903A]/80 mb-1.5 italic" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{d.subtitle}</p>
                    <h3 className="text-[24px] font-light text-[#F5F0E8] leading-tight" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{d.name}</h3>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#1A1A1A] py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <p className="text-[10px] tracking-[0.42em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
              No obligation. No planning fees.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[42px] md:text-[56px] lg:text-[68px] font-light text-[#F5F0E8] leading-[1.05] mb-8" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
              Ready to discover<br /><em>{dest.name}?</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 border border-[#C8903A] text-[#C8903A] text-[11px] tracking-[0.28em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
              Plan Your Journey
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
