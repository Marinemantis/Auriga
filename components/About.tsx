"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { RevealPhoto, FadeUp, DrawLine } from "./Reveal";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Photos move at different speeds — window-view parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [4, -2]);

  return (
    <section id="about" ref={ref} className="bg-[#0C0C0C] py-32 lg:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Left: parallax photo collage ── */}
          <div className="relative">
            {/* Gold vertical line — draws on scroll */}
            <div className="absolute top-0 -left-4 h-32 w-px">
              <DrawLine delay={0.2} vertical />
            </div>

            {/* Main portrait — slides up from clipping mask */}
            <motion.div style={{ y: y1 }} className="will-change-transform">
              <RevealPhoto delay={0.1}>
                <div className="relative" style={{ aspectRatio: "3/4", maxHeight: 560 }}>
                  <Image
                    src="/fullbleed-sunset-road.jpg"
                    alt="Pakistan mountain journey"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-transparent to-transparent" />
                </div>
              </RevealPhoto>
            </motion.div>

            {/* Small overlay photo — drifts at different speed, slight rotation */}
            <motion.div
              style={{ y: y2, rotate: rotate2 }}
              className="absolute -bottom-8 -right-6 w-48 lg:w-60 shadow-2xl will-change-transform"
            >
              <RevealPhoto delay={0.4}>
                <div
                  className="relative border-4 border-[#0C0C0C]"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src="/fullbleed-hunza-aerial.jpg"
                    alt="Aerial Gilgit-Baltistan"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Monospace caption */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-[#080808]/80">
                    <span
                      className="text-[8px] tracking-widest uppercase text-[#C8903A]/70"
                      style={{ fontFamily: "monospace" }}
                    >
                      36.18°N · 74.63°E
                    </span>
                  </div>
                </div>
              </RevealPhoto>
            </motion.div>
          </div>

          {/* ── Right: text content ── */}
          <div className="lg:pl-4">
            {/* Label line */}
            <FadeUp delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <DrawLine />
                <span
                  className="text-xs tracking-[0.3em] uppercase text-[#C8903A]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Our Mission
                </span>
              </div>
            </FadeUp>

            {/* Headline — lines reveal one by one */}
            <div
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "105%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                  We Don&apos;t Sell Tours.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "105%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="text-[#C8903A]"
                >
                  We Build Journeys.
                </motion.div>
              </div>
            </div>

            <FadeUp delay={0.3}>
              <p
                className="text-[#F5F0E8]/55 text-lg leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Every itinerary we craft is built from scratch, around who you
                are, how you travel, and what you want to feel. Not a template.
                Not a shortcut. A conversation.
              </p>
            </FadeUp>

            <FadeUp delay={0.45}>
              <blockquote
                className="font-cormorant text-xl text-[#F5F0E8]/35 italic border-l-2 border-[#C8903A]/40 pl-6 mb-12"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                &ldquo;Travel, at its highest form, is more than movement, it
                is emotion in motion.&rdquo;
              </blockquote>
            </FadeUp>

            {/* Stats — each number pops in */}
            <FadeUp delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-[#222222] pt-10 border-t border-[#222222]">
                {[
                  { stat: "6", label: "Destinations" },
                  { stat: "100%", label: "Fully Bespoke" },
                  { stat: "Gilgit", label: "Based in Pakistan" },
                ].map((item, i) => (
                  <motion.div
                    key={item.stat}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.12 }}
                    className="sm:px-8 first:pl-0 last:pr-0"
                  >
                    <p
                      className="font-cormorant text-4xl text-[#C8903A] font-light mb-1"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {item.stat}
                    </p>
                    <p
                      className="text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/35"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
