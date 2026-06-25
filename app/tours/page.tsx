"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import NavDark from "@/components/NavDark";
import { FadeUp, DrawLine } from "@/components/Reveal";
import RegionMap from "@/components/RegionMap";

/* ─── DESTINATION DATA (from Auriga destination guide) ─── */
const DESTINATIONS = [
  {
    id: "hunza",
    name: "Hunza Valley",
    subtitle: "A Pinnacle in Hunza",
    region: "Karakoram · Gilgit-Baltistan",
    image: "/dest-hunza.jpg",
    excerpt:
      "Nestled among the majestic Karakoram peaks, Hunza represents harmony between nature and community. Crystal-clear lakes, royal forts, and the ancient Silk Road — every journey reflects the valley's vision of natural preservation and cultural pride.",
    highlights: ["Baltit & Altit Forts", "Attabad Lake", "Passu Cones", "Khunjerab Pass"],
    pillars: ["Curated Retreats", "Adventure with Elegance", "Cultural Immersion"],
  },
  {
    id: "phunder",
    name: "Phunder & Ghizer",
    subtitle: "The Calm of Phunder",
    region: "Ghizer Valley · Gilgit-Baltistan",
    image: "/dest-phunder.jpg",
    excerpt:
      "One of northern Pakistan's most serene destinations, Ghizer Valley unfolds across emerald meadows, glacier rivers, and the legendary Phunder Lake — celebrated for its mirror-like reflections and breathtaking mountain backdrop.",
    highlights: ["Phunder Lake", "Shandur Pass", "Yasin Valley", "Khukush Lake"],
    pillars: ["Luxury Retreats", "Glamping & Kayaking", "Cultural Immersion"],
  },
  {
    id: "skardu",
    name: "Skardu Valley",
    subtitle: "Heart of Gilgit-Baltistan",
    region: "Baltistan · Karakoram",
    image: "/dest-skardu.jpg",
    excerpt:
      "Set between the Karakoram and Himalayan ranges, Skardu is the gateway to iconic peaks, pristine alpine lakes, and heritage valleys that feel frozen in time — adventurous and indulgent in equal measure.",
    highlights: ["Shigar Valley", "Khaplu Palace", "Kachura Lakes", "Cold Desert"],
    pillars: ["Heritage Stays", "Wilderness Exploration", "Royal Heritage"],
  },
  {
    id: "chitral",
    name: "Chitral Valley",
    subtitle: "Chitral Valley Tour",
    region: "Hindu Kush · Khyber Pakhtunkhwa",
    image: "/dest-chitral.jpg",
    excerpt:
      "Framed by the towering Hindu Kush including Tirich Mir (7,708m), Chitral is home to the ancient Kalash civilisation — one of the world's most unique indigenous cultures — alongside natural hot springs and legendary polo grounds.",
    highlights: ["Kalash Valleys", "Shandur Polo Ground", "Garam Chashma", "Tirich Mir"],
    pillars: ["Curated Retreats", "Adventure with Elegance", "Cultural Immersion"],
  },
  {
    id: "astore",
    name: "Astore Valley",
    subtitle: "The Last Heaven",
    region: "Himalaya · Gilgit-Baltistan",
    image: "/dest-astore.jpg",
    excerpt:
      "Encircled by Nanga Parbat (8,126m), Astore Valley unfolds across alpine meadows, dense pine forests, and glacial rivers. From the iconic Rama Lake to the wildflower plateaus of Minimarg — this is northern Pakistan at its most raw.",
    highlights: ["Rama Lake", "Rupal Valley Face", "Minimarg Plateau", "Rakaposhi Trek"],
    pillars: ["Curated Retreats", "Alpine Trekking", "Wilderness Camps"],
  },
];

/* ─── DESTINATION CARD ─── */
function DestCard({
  dest,
  tall = false,
  wide = false,
  index,
}: {
  dest: (typeof DESTINATIONS)[0];
  tall?: boolean;
  wide?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden bg-[#0D0D0D] ${
        tall ? "lg:row-span-2" : ""
      } ${wide ? "lg:col-span-2" : ""}`}
      style={{ minHeight: tall ? "unset" : wide ? "380px" : "340px" }}
    >
      {/* Image */}
      <div className={`absolute inset-0 ${tall ? "" : ""}`}>
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/35 to-[#080808]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/30 to-transparent" />
      </div>

      {/* Region badge */}
      <div className="absolute top-6 left-6">
        <span
          className="text-[8px] tracking-[0.42em] uppercase text-[#C8903A] bg-[#080808]/70 backdrop-blur-sm px-3 py-1.5"
          style={{ fontFamily: "var(--font-inter),sans-serif" }}
        >
          {dest.region}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
        <p
          className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]/80 mb-2 italic"
          style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
        >
          {dest.subtitle}
        </p>
        <h2
          className="text-[32px] lg:text-[38px] font-light text-[#F5F0E8] leading-tight mb-3"
          style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
        >
          {dest.name}
        </h2>
        <p
          className="text-[12px] text-[#F5F0E8]/50 leading-relaxed mb-5 max-w-sm line-clamp-2"
          style={{ fontFamily: "var(--font-inter),sans-serif" }}
        >
          {dest.excerpt}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {dest.highlights.map((h) => (
            <span
              key={h}
              className="text-[8px] tracking-[0.2em] uppercase text-[#F5F0E8]/45 border border-[#F5F0E8]/15 px-2.5 py-1"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-[9px] tracking-[0.22em] uppercase text-[#C8903A] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
          style={{ fontFamily: "var(--font-inter),sans-serif" }}
        >
          Discover Destination
          <svg width="14" height="6" viewBox="0 0 14 6" fill="none">
            <path d="M0 3h12M9 1l3 2-3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PAGE ─── */
export default function DestinationsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY  = useTransform(heroScroll, [0, 1], ["0%", "28%"]);
  const heroOp = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <div className="bg-[#080808] text-[#F5F0E8] overflow-x-hidden">

      {/* ── NAV ── */}
      <NavDark />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[80vh] min-h-[580px] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110 will-change-transform">
          <Image
            src="/dest-hero-panorama.jpg"
            alt="Hunza Valley panorama"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/15 via-transparent to-[#080808]/88" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOp }}
          className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24"
        >
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <DrawLine />
              <span
                className="text-[10px] tracking-[0.38em] uppercase text-[#C8903A]"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >
                Five Extraordinary Destinations
              </span>
            </div>
          </FadeUp>

          <div className="overflow-hidden mb-5">
            <motion.h1
              className="text-[64px] md:text-[84px] lg:text-[100px] font-light text-[#F5F0E8] leading-[0.95]"
              style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Our <em>Destinations</em>
            </motion.h1>
          </div>

          <FadeUp delay={0.55}>
            <p
              className="text-[#F5F0E8]/50 text-[15px] max-w-md leading-relaxed"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              Five regions. Each with its own character, landscape, and story. Every Auriga journey begins with choosing where to go.
            </p>
          </FadeUp>
        </motion.div>
      </section>

      {/* ── REGION PILLS ── */}
      <div className="border-y border-[#1A1A1A] py-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-0 max-w-7xl mx-auto px-6 lg:px-10 min-w-max">
          {DESTINATIONS.map((d, i) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className={`px-6 py-2 text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                i === 0 ? "pl-0" : ""
              } text-[#F5F0E8]/40 hover:text-[#C8903A]`}
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              {d.name}
            </a>
          ))}
        </div>
      </div>

      {/* ── REGION MAP ── */}
      <section className="border-b border-[#1A1A1A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <div className="text-center mb-10 lg:mb-12">
              <p
                className="text-[10px] tracking-[0.38em] uppercase text-[#C8903A] mb-4"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >
                Find Your Bearings
              </p>
              <h2
                className="text-[34px] md:text-[46px] font-light text-[#F5F0E8] leading-tight mb-4"
                style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
              >
                Where These Places Are
              </h2>
              <p
                className="text-[#F5F0E8]/45 text-[14px] max-w-md mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >
                A simple guide to Gilgit-Baltistan and Khyber Pakhtunkhwa — the mountain region where every Auriga journey unfolds.
              </p>
            </div>
          </FadeUp>
          <RegionMap />
        </div>
      </section>

      {/* ── DESTINATIONS GRID ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">

        {/* Intro */}
        <FadeUp>
          <div className="flex items-start gap-10 mb-14 lg:mb-16">
            <div className="hidden lg:block pt-1">
              <DrawLine />
            </div>
            <div className="max-w-2xl">
              <p
                className="text-[10px] tracking-[0.38em] uppercase text-[#C8903A] mb-4"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >
                Where Every Journey Begins
              </p>
              <p
                className="text-[#F5F0E8]/55 text-[15px] leading-relaxed"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >
                Northern Pakistan is not one place — it is a collection of worlds. From the royal grandeur of Hunza to the raw wilderness of Astore, each destination carries its own identity, its own silence, its own way of changing you.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Row 1: Hunza (wide) + Phunder (tall portrait) */}
        <div id="hunza" className="grid lg:grid-cols-3 gap-3 lg:gap-4 mb-3 lg:mb-4">
          {/* Hunza — spans 2 cols, landscape */}
          <Link href="/destinations/hunza" className="lg:col-span-2 relative overflow-hidden group bg-[#0D0D0D] block"
            style={{ height: "clamp(320px, 45vw, 580px)" }}>
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/dest-hunza.jpg"
                alt="Hunza Valley"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-transparent" />
            </motion.div>

            {/* Badge */}
            <div className="absolute top-6 left-6">
              <span className="text-[8px] tracking-[0.42em] uppercase text-[#C8903A] bg-[#080808]/70 backdrop-blur-sm px-3 py-1.5"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Karakoram · Gilgit-Baltistan
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#C8903A]/80 mb-2 italic"
                style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                A Pinnacle in Hunza
              </p>
              <h2 className="text-[42px] lg:text-[54px] font-light text-[#F5F0E8] leading-tight mb-3"
                style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                Hunza Valley
              </h2>
              <p className="text-[12px] text-[#F5F0E8]/50 leading-relaxed mb-5 max-w-md"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Nestled among the Karakoram peaks, Hunza represents harmony between nature and community. Baltit Fort, Attabad Lake, Passu Cones — every hour delivers a new revelation.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Baltit & Altit Forts", "Attabad Lake", "Passu Cones", "Khunjerab Pass (4,700m)"].map(h => (
                  <span key={h} className="text-[8px] tracking-[0.2em] uppercase text-[#F5F0E8]/45 border border-[#F5F0E8]/15 px-2.5 py-1"
                    style={{ fontFamily: "var(--font-inter),sans-serif" }}>{h}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-[9px] tracking-[0.22em] uppercase text-[#C8903A] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Discover Hunza
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none">
                  <path d="M0 3h12M9 1l3 2-3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Phunder — tall portrait */}
          <Link href="/destinations/phunder" id="phunder" className="relative overflow-hidden group bg-[#0D0D0D] block"
            style={{ height: "clamp(320px, 45vw, 580px)" }}>
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/dest-phunder.jpg"
                alt="Phunder Lake, Ghizer Valley"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/25 to-transparent" />
            </motion.div>

            <div className="absolute top-6 left-6">
              <span className="text-[8px] tracking-[0.42em] uppercase text-[#C8903A] bg-[#080808]/70 backdrop-blur-sm px-3 py-1.5"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Ghizer · Gilgit-Baltistan
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#C8903A]/80 mb-2 italic"
                style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                The Calm of Phunder
              </p>
              <h2 className="text-[34px] font-light text-[#F5F0E8] leading-tight mb-3"
                style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                Phunder & Ghizer
              </h2>
              <p className="text-[12px] text-[#F5F0E8]/50 leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Crystal-clear Phunder Lake, Shandur Pass — the Roof of the World — and the hidden sanctuary of Khukush Lake.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Phunder Lake", "Shandur Pass 3,700m", "Yasin Valley"].map(h => (
                  <span key={h} className="text-[8px] tracking-[0.2em] uppercase text-[#F5F0E8]/45 border border-[#F5F0E8]/15 px-2.5 py-1"
                    style={{ fontFamily: "var(--font-inter),sans-serif" }}>{h}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-[9px] tracking-[0.22em] uppercase text-[#C8903A] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Discover Phunder
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none">
                  <path d="M0 3h12M9 1l3 2-3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Row 2: Skardu + Chitral + Astore + Nagar — equal quarters */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">

          {[
            {
              id: "skardu",
              src: "/dest-skardu.jpg",
              region: "Baltistan · Karakoram",
              subtitle: "Heart of Gilgit-Baltistan",
              name: "Skardu Valley",
              excerpt: "Gateway to iconic peaks and heritage valleys — adventurous and indulgent in equal measure.",
              tags: ["Shigar Valley", "Khaplu Palace", "Kachura Lakes"],
              label: "Discover Skardu",
            },
            {
              id: "chitral",
              src: "/dest-chitral.jpg",
              region: "Hindu Kush · Khyber Pakhtunkhwa",
              subtitle: "Chitral Valley Tour",
              name: "Chitral Valley",
              excerpt: "Home to the ancient Kalash civilisation and the legendary Shandur Polo Ground at 3,700m.",
              tags: ["Kalash Valleys", "Shandur Polo", "Tirich Mir 7,708m"],
              label: "Discover Chitral",
            },
            {
              id: "astore",
              src: "/dest-astore.jpg",
              region: "Himalaya · Gilgit-Baltistan",
              subtitle: "The Last Heaven",
              name: "Astore Valley",
              excerpt: "Beneath Nanga Parbat (8,126m), pine forests and wildflower plateaus define Pakistan's most secret valley.",
              tags: ["Rama Lake", "Rupal Valley", "Minimarg Plateau"],
              label: "Discover Astore",
            },
            {
              id: "nagar",
              src: "/rakaposhi-moon.jpg",
              region: "Nagar · Karakoram",
              subtitle: "The Karakoram's Hidden Giant",
              name: "Nagar Valley",
              excerpt: "Beneath Rakaposhi and Diran Peak — glacier treks, alpine basecamps, and Karakoram wilderness at its most raw.",
              tags: ["Rakaposhi Basecamp", "Hoper Glacier", "Michar Kho Valley"],
              label: "Discover Nagar",
            },
          ].map((dest, i) => (
            <motion.div
              key={dest.id}
              id={dest.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
            <Link
              href={`/destinations/${dest.id}`}
              className="relative overflow-hidden group bg-[#0D0D0D] block"
              style={{ height: "clamp(300px, 35vw, 480px)" }}
            >
              <div className="absolute inset-0">
                <Image
                  src={dest.src}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/25 to-transparent" />
              </div>

              <div className="absolute top-5 left-5">
                <span className="text-[7px] tracking-[0.42em] uppercase text-[#C8903A] bg-[#080808]/70 backdrop-blur-sm px-2.5 py-1.5"
                  style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  {dest.region}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#C8903A]/75 mb-1.5 italic"
                  style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                  {dest.subtitle}
                </p>
                <h2 className="text-[30px] lg:text-[34px] font-light text-[#F5F0E8] leading-tight mb-2.5"
                  style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                  {dest.name}
                </h2>
                <p className="text-[11px] text-[#F5F0E8]/48 leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  {dest.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dest.tags.map(t => (
                    <span key={t} className="text-[7px] tracking-[0.2em] uppercase text-[#F5F0E8]/40 border border-[#F5F0E8]/12 px-2 py-0.5"
                      style={{ fontFamily: "var(--font-inter),sans-serif" }}>{t}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-[8px] tracking-[0.22em] uppercase text-[#C8903A] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
                  style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  {dest.label}
                  <svg width="12" height="5" viewBox="0 0 12 5" fill="none">
                    <path d="M0 2.5h10M7.5 1l2.5 1.5L7.5 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE PILLARS ── */}
      <section className="border-t border-[#1A1A1A] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <div className="flex items-center gap-3 mb-12">
              <DrawLine />
              <span className="text-[10px] tracking-[0.38em] uppercase text-[#F5F0E8]/28"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                How Auriga Curates Every Destination
              </span>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-px bg-[#1A1A1A]">
            {[
              {
                number: "01",
                title: "Curated Retreats",
                body: "Handpicked boutique lodges and mountain resorts set against panoramic Karakoram views. Traditional character with elevated modern comfort — every stay chosen for setting, soul, and service.",
              },
              {
                number: "02",
                title: "Adventure with Elegance",
                body: "Private guided treks, glamping under the stars, kayaking on crystal lakes, glacier walks, and high-altitude polo grounds. Every outdoor experience balanced precisely between challenge and indulgence.",
              },
              {
                number: "03",
                title: "Authentic Cultural Immersion",
                body: "Guided visits to ancient forts, Kalash festivals, traditional music events, artisan markets, and private family dinners. Culture as the centrepiece, not an afterthought.",
              },
            ].map((p) => (
              <FadeUp key={p.number} className="bg-[#080808] p-8 lg:p-10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]/60 mb-5 font-mono">
                  {p.number}
                </p>
                <h3 className="text-[26px] font-light text-[#F5F0E8] mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                  {p.title}
                </h3>
                <p className="text-[#F5F0E8]/45 text-[13px] leading-relaxed"
                  style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  {p.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#1A1A1A] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <p className="text-[10px] tracking-[0.42em] uppercase text-[#C8903A] mb-6"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}>
              No obligation. No planning fees.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[48px] md:text-[60px] lg:text-[72px] font-light text-[#F5F0E8] leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
              Which destination<br /><em>calls to you?</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#F5F0E8]/40 text-[14px] mb-10 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}>
              Tell us where you feel drawn. Our advisors will design a bespoke journey around it — tailored to your dates, pace, and idea of luxury.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#C8903A] text-[#C8903A] text-[11px] tracking-[0.28em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              Plan Your Journey
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
