"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import NavMain from "@/components/NavMain";
import { FadeUp, DrawLine, RevealPhoto } from "@/components/Reveal";

/* ─── DATA ─── */
const TEAM = [
  {
    name: "Sheryar Khan",
    role: "Ground Operations Manager",
    tagline: "Boots On The Ground.",
    initials: "SK",
    description:
      "Raised in Gilgit and Nagar, Sheryar has been navigating the North long before it was on anyone's itinerary. If a road exists — or doesn't yet — he knows how to get you there. Speaks English, Urdu, Shina and Burushaski.",
  },
  {
    name: "Sidra Zeb",
    role: "Travel Advisor / Co-Founder",
    tagline: "Listening First. Designing Second.",
    initials: "SZ",
    description:
      "Born with the North in her blood and Pashto on her tongue, Sidra has been talking people into — and through — these mountains her entire life. As co-founder, she's the first voice you'll hear: taking your call, reading your email, and building your itinerary line by line until it's exactly what you imagined and a little more. Speaks English, Urdu and Pashto.",
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
    tagline: "Where Others Find a Wall, He Finds a Way.",
    initials: "KA",
    description:
      "Detail-obsessed and deeply empathetic, Karamat turns the most complex travel requests into seamless journeys. He finds a way where others find a wall.",
  },
];

const VALUES = [
  { label: "Born Here",        description: "Gilgit is home, not a destination." },
  { label: "Raised Exploring", description: "Our first expeditions predate our first jobs." },
  { label: "Still Friends",    description: "One trust, one standard, zero handovers." },
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

      <NavMain darkPage />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110 will-change-transform">
          <Image src="/slide-sheosar-lake.jpg" alt="Sheosar Lake, Deosai" fill className="object-cover" priority sizes="100vw" />
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

          <div className="text-6xl md:text-8xl lg:text-[100px] font-light text-[#F5F0E8] leading-[1] mb-6" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            <div className="overflow-hidden">
              <motion.div initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                We Didn&apos;t Discover the North.
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="text-[#C8903A]">
                We Grew Up in It.
              </motion.div>
            </div>
          </div>

          <FadeUp delay={0.7}>
            <p className="text-[#F5F0E8]/55 text-lg max-w-lg leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
              Tailor-made journeys, designed by friends who&apos;ve been exploring these mountains since childhood.
            </p>
          </FadeUp>
        </motion.div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

            <div>
              <FadeUp delay={0}>
                <div className="flex items-center gap-3 mb-4">
                  <DrawLine />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Who We Are
                  </span>
                </div>
              </FadeUp>

              <div className="text-5xl md:text-6xl font-light text-[#F5F0E8] leading-[1.05] mb-6" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                <div className="overflow-hidden">
                  <motion.div initial={{ y: "105%" }} whileInView={{ y: "0%" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
                    Friends First.
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div initial={{ y: "105%" }} whileInView={{ y: "0%" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-[#C8903A]">
                    Founders Second.
                  </motion.div>
                </div>
              </div>

              <FadeUp delay={0.3}>
                <p className="text-[#F5F0E8]/55 text-lg leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  Auriga Ventures wasn&apos;t born in a boardroom. It began as a group of childhood friends from Gilgit-Baltistan who spent every school holiday doing what we still do today — chasing lakes we&apos;d only heard about, crossing passes before the roads reached them, and coming home with stories nobody down-country would believe.
                </p>
                <p className="text-[#F5F0E8]/40 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  Somewhere along the way, we realised the trips we were taking for ourselves were the trips travellers dream about. So we turned a lifelong habit into a promise: journeys through the North designed by the people who know it best, because we never had to learn it. We lived it.
                </p>
              </FadeUp>

              <FadeUp delay={0.45}>
                <div className="flex gap-0 divide-x divide-[#222] mt-10 pt-8 border-t border-[#222]">
                  {VALUES.map((v) => (
                    <div key={v.label} className="px-8 first:pl-0 last:pr-0">
                      <p className="text-2xl text-[#C8903A] font-light mb-1" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{v.label}</p>
                      <p className="text-[10px] tracking-[0.18em] uppercase text-[#F5F0E8]/30 leading-snug" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{v.description}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            <div className="relative hidden lg:block">
              <RevealPhoto delay={0.15}>
                <div className="relative" style={{ aspectRatio: "4/5" }}>
                  <Image src="/slide-katpana-desert.jpg" alt="Katpana Desert, Skardu" fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
                </div>
              </RevealPhoto>

              <motion.div
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-[#111] border border-[#222] p-6 max-w-[200px]"
              >
                <p className="text-4xl text-[#C8903A] font-light mb-1" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>100%</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/35" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Fully Bespoke</p>
                <p className="text-[#F5F0E8]/25 text-xs mt-2 leading-snug" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Every journey built from a blank page.</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OUR TEAM ── */}
      <section className="py-20 lg:py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-14 lg:mb-20 max-w-2xl">
            <FadeUp delay={0}>
              <div className="flex items-center gap-3 mb-4">
                <DrawLine />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  Our Team
                </span>
              </div>
            </FadeUp>
            <div className="text-5xl md:text-6xl font-light text-[#F5F0E8] leading-[1.05]" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "105%" }} whileInView={{ y: "0%" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
                  United by Friendship.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "105%" }} whileInView={{ y: "0%" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-[#C8903A]">
                  Fluent in the North.
                </motion.div>
              </div>
            </div>
            <FadeUp delay={0.35}>
              <p className="text-[#F5F0E8]/40 text-base leading-relaxed mt-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Auriga Ventures is powered by a team of people who grew up in these mountains — united by friendship, driven by a shared belief that the North deserves to be shown properly.
              </p>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {TEAM.map((member, i) => (
              <motion.div key={member.name}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#0E0E0E] border border-[#1A1A1A] hover:border-[#C8903A]/30 transition-colors duration-500 p-8"
              >
                <div className="relative w-16 h-16 mb-6">
                  <div className="w-16 h-16 bg-[#161616] border border-[#C8903A]/25 flex items-center justify-center group-hover:border-[#C8903A]/60 transition-colors duration-500">
                    <span className="text-xl text-[#C8903A] font-light" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{member.initials}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#C8903A]/40 group-hover:border-[#C8903A]/80 transition-colors duration-500" />
                </div>

                <h3 className="text-2xl text-[#F5F0E8] font-light mb-1 group-hover:text-[#C8903A] transition-colors duration-400" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                  {member.name}
                </h3>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8903A]/60 mb-1" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  {member.role}
                </p>
                <p className="text-[#F5F0E8]/30 text-xs italic mb-5" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                  &ldquo;{member.tagline}&rdquo;
                </p>

                <div className="w-8 h-px bg-[#C8903A]/30 mb-5 group-hover:w-16 group-hover:bg-[#C8903A]/60 transition-all duration-500" />

                <p className="text-[#F5F0E8]/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── QUIET CTA — emotional high point after Team ── */}
      <FadeUp delay={0}>
        <div className="border-t border-[#1a1a1a] bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-2xl font-light text-[#F5F0E8]/70 italic mb-1" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                Ready to meet us on your journey?
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/25" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Every trip starts with a single conversation.
              </p>
            </div>
            <Link
              href="/enquire"
              className="shrink-0 px-8 py-3 border border-[#C8903A]/50 text-[#C8903A] text-[11px] tracking-[0.22em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300 whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </FadeUp>

      {/* ── WHY THE NAME ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/slide-deosai-glamping.jpg" alt="" fill className="object-cover opacity-[0.06]" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">

            <div className="lg:col-span-3">
              <FadeUp delay={0}>
                <div className="flex items-center gap-3 mb-4">
                  <DrawLine />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Why the Name
                  </span>
                </div>
              </FadeUp>

              <div className="text-5xl md:text-6xl font-light text-[#F5F0E8] leading-[1.05] mb-6" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                <div className="overflow-hidden">
                  <motion.div initial={{ y: "105%" }} whileInView={{ y: "0%" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
                    Trusted With Direction.
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div initial={{ y: "105%" }} whileInView={{ y: "0%" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-[#C8903A]">
                    Guided by Stars.
                  </motion.div>
                </div>
              </div>

              <FadeUp delay={0.3}>
                <p className="text-[#F5F0E8]/55 text-lg leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  In Roman culture, an <em>auriga</em> was the charioteer — the one trusted with direction and control. It&apos;s also a constellation, home to one of the brightest stars in the northern sky. The same sky, incidentally, that blazes over Deosai on a clear night.
                </p>
                <p className="text-[#F5F0E8]/40 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  We chose the name for what it demands of us: steady hands, clear direction, and journeys guided by something brighter than a checklist.
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center lg:items-end gap-8">
              <FadeUp delay={0.4}>
                <div className="relative w-full max-w-xs">
                  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-60">
                    <line x1="70"  y1="160" x2="110" y2="100" stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    <line x1="110" y1="100" x2="160" y2="80"  stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    <line x1="160" y1="80"  x2="200" y2="110" stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    <line x1="200" y1="110" x2="220" y2="60"  stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    <line x1="110" y1="100" x2="140" y2="140" stroke="#C8903A" strokeWidth="0.8" strokeDasharray="3,4" />
                    <circle cx="70"  cy="160" r="2.5" fill="#C8903A" opacity="0.7" />
                    <circle cx="110" cy="100" r="3"   fill="#C8903A" opacity="0.9" />
                    <circle cx="160" cy="80"  r="2.5" fill="#C8903A" opacity="0.7" />
                    <circle cx="200" cy="110" r="2"   fill="#C8903A" opacity="0.6" />
                    <circle cx="220" cy="60"  r="2"   fill="#C8903A" opacity="0.6" />
                    <circle cx="140" cy="140" r="2"   fill="#C8903A" opacity="0.5" />
                    <circle cx="110" cy="100" r="12"  fill="#C8903A" opacity="0.07" />
                    <circle cx="110" cy="100" r="6"   fill="#C8903A" opacity="0.15" />
                    <path d="M220,38 L223,55 L240,58 L223,61 L220,78 L217,61 L200,58 L217,55 Z" fill="#C8903A" opacity="0.8" />
                  </svg>
                  <p className="text-center text-[10px] tracking-[0.35em] uppercase text-[#C8903A]/50 mt-2" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Auriga Constellation
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.55}>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  {["Curiosity.", "Confidence.", "Wellness."].map((w, i) => (
                    <motion.div key={w} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-3 border-b border-[#1A1A1A] pb-3">
                      <span className="w-1 h-1 rounded-full bg-[#C8903A] flex-shrink-0" />
                      <span className="text-2xl text-[#F5F0E8]/60 font-light" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{w}</span>
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ── MISSION / PROMISE ── */}
      <section className="relative py-28 lg:py-40 overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/slide-ghizer-valley.jpg" alt="" fill className="object-cover opacity-[0.08]" sizes="100vw" />
          <div className="absolute inset-0 bg-[#080808]/75" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp delay={0}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <DrawLine />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Our Mission
              </span>
              <DrawLine />
            </div>
          </FadeUp>

          <div className="text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05] mb-8" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            <div className="overflow-hidden">
              <motion.div initial={{ y: "105%" }} whileInView={{ y: "0%" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
                To Create Remarkable
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div initial={{ y: "105%" }} whileInView={{ y: "0%" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-[#C8903A]">
                Experiences.
              </motion.div>
            </div>
          </div>

          <FadeUp delay={0.35}>
            <p className="text-[#F5F0E8]/50 text-xl leading-relaxed max-w-2xl mx-auto mb-8 italic" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
              &ldquo;Our mission is to create remarkable experiences that thoughtfully connect our clients to the world, inspiring them to explore it with curiosity, humility, and a sense of wonder.&rdquo;
            </p>
            <p className="text-[#F5F0E8]/40 text-base leading-relaxed max-w-xl mx-auto mb-12" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
              We show you our home the way we&apos;d show a friend — with candour about what&apos;s worth the detour, honesty about the rough patches, and genuine pride in what we know is extraordinary. If that&apos;s the kind of journey you&apos;re looking for, you&apos;re already in the right place.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <Link
              href="/enquire"
              className="inline-block px-10 py-4 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.28em] uppercase font-semibold hover:bg-[#d4a34d] transition-all duration-300"
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
