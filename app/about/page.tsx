"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FadeUp, DrawLine, RevealPhoto } from "@/components/Reveal";

/* ─── TEAM DATA ─── */
const TEAM = [
  {
    name: "Sheryar Khan",
    role: "Ground Operations Manager",
    tagline: "Boots On The Ground.",
    initials: "SK",
    description:
      "The man who makes it real. Sheryar's unmatched knowledge of Pakistan's mountain terrain ensures every expedition runs with precision — from the first road to the last ridge.",
  },
  {
    name: "Fatima Amin",
    role: "Travel Advisor",
    tagline: "Tailoring, Until It's Right.",
    initials: "FA",
    description:
      "Patient, intuitive, and deeply knowledgeable, Fatima listens first and designs second. Every itinerary she touches is shaped around the traveller, not the other way around.",
  },
  {
    name: "Faizan Khan",
    role: "Digital Marketing Manager",
    tagline: "Telling the Auriga Story.",
    initials: "FK",
    description:
      "Creative and curious, Faizan translates Pakistan's beauty into narratives that resonate. He ensures the world sees what northern Pakistan truly is — not what it's assumed to be.",
  },
  {
    name: "Christina Hardy",
    role: "Marketing Manager",
    tagline: "The Voice of Auriga.",
    initials: "CH",
    description:
      "With a background in global luxury travel, Christina brings an international perspective that keeps Auriga positioned at the very front of the premium travel conversation.",
  },
  {
    name: "Karamat Ali",
    role: "Travel Advisor",
    tagline: "Tailoring, Until It's Right.",
    initials: "KA",
    description:
      "Detail-obsessed and deeply empathetic, Karamat turns the most complex travel requests into seamless journeys. He finds a way where others find a wall.",
  },
];

const VALUES = [
  { label: "Luxury", description: "Every touchpoint elevated." },
  { label: "Curated", description: "Nothing left to chance." },
  { label: "Travel", description: "Experience, not logistics." },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY  = useTransform(heroScroll, [0, 1], ["0%", "28%"]);
  const heroOp = useTransform(heroScroll, [0, 0.75], [1, 0]);

  return (
    <div className="bg-[#080808] text-[#F5F0E8] overflow-x-hidden">

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-[#1A1A1A] h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-1">
            <span className="font-cormorant text-2xl font-semibold text-[#F5F0E8]" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Auriga</span>
            <span className="font-cormorant text-2xl font-light text-[#C8903A]"    style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Ventures</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Trips",       href: "/#destinations" },
              { label: "Philosophy",  href: "/#philosophy"   },
              { label: "About",       href: "/about"         },
              { label: "Contact",     href: "/#contact"      },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[11px] tracking-[0.25em] uppercase text-[#F5F0E8]/60 hover:text-[#C8903A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link href="/enquire" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#C8903A] text-[#C8903A] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter),sans-serif" }}
          >
            Plan Your Journey
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110 will-change-transform">
          <Image
            src="/slide-sheosar-lake.jpg"
            alt="Sheosar Lake, Deosai"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/30 via-[#080808]/20 to-[#080808]/85" />
        </motion.div>

        <motion.div style={{ opacity: heroOp }} className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <DrawLine />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Auriga Ventures · Est. Gilgit, Pakistan
              </span>
            </div>
          </FadeUp>

          <div className="font-cormorant text-6xl md:text-8xl lg:text-[100px] font-light text-[#F5F0E8] leading-[1] mb-6" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                We&apos;ll Show
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#C8903A]"
              >
                You the World.
              </motion.div>
            </div>
          </div>

          <FadeUp delay={0.7}>
            <p className="text-[#F5F0E8]/55 text-lg max-w-lg leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
              Tailor-made. Stress-free. Never, ever off the shelf.
            </p>
          </FadeUp>
        </motion.div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="py-32 lg:py-44 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

            {/* Left — large quote and body */}
            <div>
              <FadeUp delay={0}>
                <div className="flex items-center gap-3 mb-8">
                  <DrawLine />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Who We Are
                  </span>
                </div>
              </FadeUp>

              <div className="font-cormorant text-5xl md:text-6xl font-light text-[#F5F0E8] leading-[1.05] mb-8" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "105%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Expertise. Passion.
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "105%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#C8903A]"
                  >
                    At the Top of Their Game.
                  </motion.div>
                </div>
              </div>

              <FadeUp delay={0.3}>
                <p className="text-[#F5F0E8]/55 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  At Auriga Ventures, we help our travellers embark on the trips
                  closest to their hearts — cutting clean through the noise.
                  Whenever you plan a journey with us, you&apos;re getting the
                  knowledge, passion, and insight of experts who live and breathe
                  these mountains.
                </p>
                <p className="text-[#F5F0E8]/40 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  With unmatched expertise and a love for North Pakistan&apos;s
                  raw beauty, Auriga Ventures creates journeys that Inspire, Relax,
                  and Amaze. We redefine luxury travel with attention to every
                  detail — from accommodations to bespoke itineraries designed to
                  exceed your expectations.
                </p>
              </FadeUp>

              {/* Value pillars */}
              <FadeUp delay={0.45}>
                <div className="flex gap-0 divide-x divide-[#222] mt-12 pt-10 border-t border-[#222]">
                  {VALUES.map((v) => (
                    <div key={v.label} className="px-8 first:pl-0 last:pr-0">
                      <p className="font-cormorant text-3xl text-[#C8903A] font-light mb-1" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{v.label}</p>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/30" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{v.description}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — image stack */}
            <div className="relative hidden lg:block">
              <RevealPhoto delay={0.15}>
                <div className="relative" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/slide-katpana-desert.jpg"
                    alt="Katpana Desert, Skardu"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
                </div>
              </RevealPhoto>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-[#111] border border-[#222] p-6 max-w-[200px]"
              >
                <p className="font-cormorant text-4xl text-[#C8903A] font-light mb-1" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>100%</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/35" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Fully Bespoke</p>
                <p className="text-[#F5F0E8]/25 text-xs mt-2 leading-snug" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Every journey built from a blank page.</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY THE NAME ── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#080808]">
        {/* Dim background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/slide-deosai-glamping.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#080808]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">

            {/* Text — spans 3 cols */}
            <div className="lg:col-span-3">
              <FadeUp delay={0}>
                <div className="flex items-center gap-3 mb-8">
                  <DrawLine />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Why the Name
                  </span>
                </div>
              </FadeUp>

              <div className="font-cormorant text-5xl md:text-6xl font-light text-[#F5F0E8] leading-[1.05] mb-10" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "105%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Trusted With Direction.
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "105%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#C8903A]"
                  >
                    Guided by Stars.
                  </motion.div>
                </div>
              </div>

              <FadeUp delay={0.3}>
                <p className="text-[#F5F0E8]/55 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  In Roman culture, an <em>auriga</em> was a skilled and disciplined
                  chariot driver — someone trusted with direction and control.
                  Auriga is also the name of a prominent constellation, home to one
                  of the brightest stars in the night sky.
                </p>
                <p className="text-[#F5F0E8]/40 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  Inspired by this legacy of leadership and direction, we position
                  ourselves as a guided premium venture. We illuminate pathways to
                  growth, inspiration, and long-term memories — guiding travellers
                  toward Curiosity, Confidence, and Wellness.
                </p>
              </FadeUp>
            </div>

            {/* Symbol — spans 2 cols */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-end gap-8">
              {/* Constellation dots — decorative SVG */}
              <FadeUp delay={0.4}>
                <div className="relative w-full max-w-xs">
                  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-60">
                    {/* Constellation lines */}
                    <line x1="70"  y1="160" x2="110" y2="100" stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    <line x1="110" y1="100" x2="160" y2="80"  stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    <line x1="160" y1="80"  x2="200" y2="110" stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    <line x1="200" y1="110" x2="220" y2="60"  stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    <line x1="110" y1="100" x2="140" y2="140" stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    {/* Stars */}
                    <circle cx="70"  cy="160" r="2.5" fill="#C8903A" opacity="0.7" />
                    <circle cx="110" cy="100" r="3"   fill="#C8903A" opacity="0.9" />
                    <circle cx="160" cy="80"  r="2.5" fill="#C8903A" opacity="0.7" />
                    <circle cx="200" cy="110" r="2"   fill="#C8903A" opacity="0.6" />
                    <circle cx="220" cy="60"  r="2"   fill="#C8903A" opacity="0.6" />
                    <circle cx="140" cy="140" r="2"   fill="#C8903A" opacity="0.5" />
                    {/* Bright Capella star */}
                    <circle cx="110" cy="100" r="12"  fill="#C8903A" opacity="0.07" />
                    <circle cx="110" cy="100" r="6"   fill="#C8903A" opacity="0.15" />
                    {/* 8-pointed star */}
                    <path d="M220,38 L223,55 L240,58 L223,61 L220,78 L217,61 L200,58 L217,55 Z" fill="#C8903A" opacity="0.8" />
                  </svg>
                  <p className="text-center text-[10px] tracking-[0.35em] uppercase text-[#C8903A]/50 mt-2" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Auriga Constellation
                  </p>
                </div>
              </FadeUp>

              {/* Three brand words */}
              <FadeUp delay={0.55}>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  {["Curiosity.", "Confidence.", "Wellness."].map((w, i) => (
                    <motion.div
                      key={w}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-3 border-b border-[#1A1A1A] pb-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C8903A] flex-shrink-0" />
                      <span className="font-cormorant text-2xl text-[#F5F0E8]/60 font-light" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{w}</span>
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-32 lg:py-44 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="mb-20 lg:mb-28 max-w-2xl">
            <FadeUp delay={0}>
              <div className="flex items-center gap-3 mb-6">
                <DrawLine />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  Our Team
                </span>
              </div>
            </FadeUp>
            <div className="font-cormorant text-5xl md:text-6xl font-light text-[#F5F0E8] leading-[1.05]" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "105%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  United by Passion.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "105%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#C8903A]"
                >
                  Driven by Purpose.
                </motion.div>
              </div>
            </div>
            <FadeUp delay={0.35}>
              <p className="text-[#F5F0E8]/40 text-base leading-relaxed mt-6" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Auriga Ventures is powered by a vibrant team, united by their
                boundless passion for adventure and a shared dream of crafting
                extraordinary journeys.
              </p>
            </FadeUp>
          </div>

          {/* Team grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#0E0E0E] border border-[#1A1A1A] hover:border-[#C8903A]/30 transition-colors duration-500 p-8"
              >
                {/* Avatar */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="w-16 h-16 bg-[#161616] border border-[#C8903A]/25 flex items-center justify-center group-hover:border-[#C8903A]/60 transition-colors duration-500">
                    <span
                      className="font-cormorant text-xl text-[#C8903A] font-light"
                      style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                  {/* Gold corner accent */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#C8903A]/40 group-hover:border-[#C8903A]/80 transition-colors duration-500" />
                </div>

                {/* Name & role */}
                <h3
                  className="font-cormorant text-2xl text-[#F5F0E8] font-light mb-1 group-hover:text-[#C8903A] transition-colors duration-400"
                  style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase text-[#C8903A]/60 mb-1"
                  style={{ fontFamily: "var(--font-inter),sans-serif" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-[#F5F0E8]/30 text-xs italic mb-5 font-cormorant"
                  style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
                >
                  &ldquo;{member.tagline}&rdquo;
                </p>

                <div className="w-8 h-px bg-[#C8903A]/30 mb-5 group-hover:w-16 group-hover:bg-[#C8903A]/60 transition-all duration-500" />

                <p
                  className="text-[#F5F0E8]/40 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter),sans-serif" }}
                >
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="relative py-36 lg:py-52 overflow-hidden bg-[#080808]">
        {/* Background image — very dim */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/slide-ghizer-valley.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#080808]/75" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp delay={0}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <DrawLine />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Our Mission
              </span>
              <DrawLine />
            </div>
          </FadeUp>

          <div className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05] mb-10" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                To Create Remarkable
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#C8903A]"
              >
                Experiences.
              </motion.div>
            </div>
          </div>

          <FadeUp delay={0.35}>
            <p className="text-[#F5F0E8]/50 text-xl leading-relaxed max-w-2xl mx-auto mb-16 font-cormorant italic" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
              &ldquo;Our mission is to create remarkable experiences that thoughtfully
              connect our clients to the world, inspiring them to explore it with
              curiosity, humility, and a sense of wonder.&rdquo;
            </p>
          </FadeUp>

          {/* Brand pillars */}
          <FadeUp delay={0.5}>
            <div className="flex items-center justify-center gap-6 md:gap-10">
              {["Thoughtful", "Curious", "Humble"].map((word, i) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C8903A]" />
                  <span className="font-cormorant text-2xl md:text-3xl text-[#F5F0E8]/60 font-light" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{word}</span>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.65}>
            <div className="mt-16">
              <Link
                href="/enquire"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 border border-[#C8903A] text-[#C8903A] text-[11px] tracking-[0.25em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-400"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >
                Plan Your Journey with Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
