"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FadeUp, DrawLine } from "@/components/Reveal";

const EXPERIENCES = [
  {
    slug: "last-paradise",
    name: "The Last Paradise",
    region: "Hunza & Skardu",
    duration: "12 days",
    price: "From $2,800",
    tagline: "Hunza, Deosai & Skardu Grand Expedition",
    image: "/hunza-lady-finger.jpg",
  },
  {
    slug: "mountains-meet-stars",
    name: "Where Mountains Meet the Stars",
    region: "Astore & Skardu",
    duration: "8 days",
    price: "From $2,200",
    tagline: "Celestial Expedition through the Himalaya",
    image: "/mms-katpana-lake-skardu.jpg",
  },
  {
    slug: "realm-of-fairies",
    name: "The Realm of Fairies",
    region: "Fairy Meadows & Hunza",
    duration: "10 days",
    price: "From $2,400",
    tagline: "In the Shadow of Nanga Parbat",
    image: "/rof-hunza-village-drying.jpg",
  },
  {
    slug: "chitral-phunder",
    name: "Wilderness of Chitral & Phunder",
    region: "Chitral · Ghizer",
    duration: "12 nights",
    price: "From $2,600",
    tagline: "Kalash Valleys, Shandur & Phunder Lake",
    image: "/slide-ghizer-valley.jpg",
  },
  {
    slug: "khukush-lake-phunder",
    name: "Khukush Lake & Phunder",
    region: "Ghizer Valley",
    duration: "7 days",
    price: "From $1,800",
    tagline: "Seven-Day Alpine Odyssey",
    image: "/mms-dunsa-valley-tormik.jpg",
  },
  {
    slug: "nagma-valley",
    name: "Nagma Valley Trek",
    region: "Baltistan",
    duration: "8 days",
    price: "From $1,900",
    tagline: "Into Pakistan's Best-Kept Secret",
    image: "/mms-glamping-deosai.jpg",
  },
  {
    slug: "himalayan-dream",
    name: "Seven Day Himalayan Dream",
    region: "Astore to Minimarg",
    duration: "7 days",
    price: "From $2,000",
    tagline: "Rama Lake, Rupal Valley & Minimarg",
    image: "/mms-minimarg-astore.jpg",
  },
];

export default function ExperiencesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY  = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOp = useTransform(heroScroll, [0, 0.7], [1, 0]);

  const featured = EXPERIENCES[0];
  const rest      = EXPERIENCES.slice(1);

  return (
    <div className="bg-[#080808] text-[#F5F0E8] overflow-x-hidden">

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-[#1A1A1A] h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full flex items-center justify-between">
                    <Link href="/" className="flex items-center">
            <Image src="/auriga-logo.jpeg" alt="Auriga Ventures" height={44} width={51} className="object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Destinations", href: "/tours"        },
              { label: "Experiences",  href: "/experiences"  },
              { label: "About",        href: "/about"        },
              { label: "Contact",      href: "/#contact"     },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  l.href === "/experiences"
                    ? "text-[#C8903A]"
                    : "text-[#F5F0E8]/55 hover:text-[#C8903A]"
                }`}
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="hidden md:inline-flex px-5 py-2.5 border border-[#C8903A] text-[#C8903A] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter),sans-serif" }}
          >
            Plan Your Journey
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110 will-change-transform">
          <Image
            src="/fullbleed-golden-mountains.jpg"
            alt="Golden mountain ranges of northern Pakistan"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/25 via-transparent to-[#080808]/88" />
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
                Seven Curated Journeys · Northern Pakistan
              </span>
            </div>
          </FadeUp>

          <div className="overflow-hidden mb-5">
            <motion.h1
              className="text-[64px] md:text-[84px] lg:text-[100px] font-light text-[#F5F0E8] leading-[1]"
              style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              Our <em>Experiences</em>
            </motion.h1>
          </div>

          <FadeUp delay={0.55}>
            <p
              className="text-[#F5F0E8]/50 text-[15px] max-w-sm leading-relaxed"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              Each journey designed around a place, a feeling, and a standard of luxury that changes how you travel.
            </p>
          </FadeUp>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="border-y border-[#1A1A1A] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 divide-x divide-[#1A1A1A]">
            {[
              { stat: "7",       label: "Curated Journeys"    },
              { stat: "7 – 12",  label: "Days per Experience" },
              { stat: "$1,800+", label: "Starting From"       },
            ].map(({ stat, label }) => (
              <div key={label} className="px-4 lg:px-10 first:pl-0 last:pr-0 text-center">
                <p
                  className="text-3xl md:text-4xl font-light text-[#C8903A] mb-1"
                  style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
                >
                  {stat}
                </p>
                <p
                  className="text-[9px] tracking-[0.28em] uppercase text-[#F5F0E8]/30"
                  style={{ fontFamily: "var(--font-inter),sans-serif" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED JOURNEY ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-5">
        <FadeUp>
          <div className="flex items-center gap-3 mb-10">
            <DrawLine />
            <span
              className="text-[10px] tracking-[0.35em] uppercase text-[#F5F0E8]/28"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              Featured Journey
            </span>
          </div>
        </FadeUp>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href={`/tours/${featured.slug}`} className="group block relative overflow-hidden">
            <div className="relative" style={{ aspectRatio: "21/9", minHeight: "280px" }}>
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 1320px) 100vw, 1320px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/88 via-[#080808]/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-end p-8 md:p-12 lg:p-16">
                <div>
                  <p
                    className="text-[9px] tracking-[0.42em] uppercase text-[#C8903A] mb-3"
                    style={{ fontFamily: "var(--font-inter),sans-serif" }}
                  >
                    {featured.region}
                  </p>
                  <h2
                    className="text-4xl md:text-5xl lg:text-[58px] font-light text-[#F5F0E8] leading-tight mb-3 max-w-xl"
                    style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
                  >
                    {featured.name}
                  </h2>
                  <p
                    className="text-sm text-[#F5F0E8]/45 mb-7 max-w-xs"
                    style={{ fontFamily: "var(--font-inter),sans-serif" }}
                  >
                    {featured.tagline}
                  </p>
                  <div className="flex items-center gap-5 flex-wrap">
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#F5F0E8]/45" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{featured.duration}</span>
                    <span className="w-px h-3 bg-[#F5F0E8]/20 shrink-0" />
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#F5F0E8]/45" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{featured.price}</span>
                    <span
                      className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[#C8903A] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                      style={{ fontFamily: "var(--font-inter),sans-serif" }}
                    >
                      Explore Journey
                      <svg width="16" height="7" viewBox="0 0 16 7" fill="none">
                        <path d="M0 3.5h14M11 1l3 2.5L11 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ── ALL JOURNEYS GRID ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-5 pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {rest.map((exp, i) => (
            <motion.div
              key={exp.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/tours/${exp.slug}`} className="group block relative overflow-hidden bg-[#0D0D0D]">
                <div className="relative" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />

                  {/* Duration badge */}
                  <div className="absolute top-5 right-5 bg-[#080808]/80 backdrop-blur-sm px-3 py-1.5">
                    <span
                      className="text-[9px] tracking-[0.22em] uppercase text-[#F5F0E8]/65"
                      style={{ fontFamily: "var(--font-inter),sans-serif" }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p
                      className="text-[9px] tracking-[0.38em] uppercase text-[#C8903A] mb-2"
                      style={{ fontFamily: "var(--font-inter),sans-serif" }}
                    >
                      {exp.region}
                    </p>
                    <h3
                      className="text-[23px] font-light text-[#F5F0E8] leading-tight mb-2"
                      style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
                    >
                      {exp.name}
                    </h3>
                    <p
                      className="text-[11px] text-[#F5F0E8]/33 mb-5 leading-relaxed"
                      style={{ fontFamily: "var(--font-inter),sans-serif" }}
                    >
                      {exp.tagline}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] text-[#F5F0E8]/45"
                        style={{ fontFamily: "var(--font-inter),sans-serif" }}
                      >
                        {exp.price}
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-[9px] tracking-[0.18em] uppercase text-[#C8903A] opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        style={{ fontFamily: "var(--font-inter),sans-serif" }}
                      >
                        Explore
                        <svg width="12" height="5" viewBox="0 0 12 5" fill="none">
                          <path d="M0 2.5h10M7.5 1l2.5 1.5L7.5 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#1A1A1A] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <p
              className="text-[10px] tracking-[0.42em] uppercase text-[#C8903A] mb-6"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              No obligation. No planning fees.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="text-[48px] md:text-[60px] lg:text-[72px] font-light text-[#F5F0E8] leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
            >
              Can&apos;t decide?<br /><em>We&apos;ll guide you.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="text-[#F5F0E8]/40 text-[14px] mb-10 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              Tell us your travel dates, group size, and what kind of experience you&apos;re drawn to.
              Our advisors will recommend the perfect journey.
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
