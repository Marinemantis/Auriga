"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FadeUp, RevealPhoto, DrawLine } from "./Reveal";

const pillars = [
  {
    number: "01",
    title: "Handpicked Properties",
    body: "Every hotel, lodge, and camp in our network is chosen personally. No algorithms. No commissions driving the choice.",
    image: "/mms-glamping-deosai.jpg",
  },
  {
    number: "02",
    title: "Fully Tailored",
    body: "We start with a blank page for every client. Your itinerary is built around your pace, your interests, and the experiences only you'll have.",
    image: "/fullbleed-golden-mountains.jpg",
  },
  {
    number: "03",
    title: "Seamless from Start to End",
    body: "Transfers, permits, guides, meals: every detail is handled before you land. You travel. We handle the rest.",
    image: "/fullbleed-hunza-aerial.jpg",
  },
];

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Aerial drift — background image slowly pans
  const bgX = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section id="philosophy" ref={ref} className="relative bg-[#0C0C0C] py-32 lg:py-44 overflow-hidden">
      {/* Aerial drift background */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-[-6%] pointer-events-none will-change-transform"
      >
        <Image
          src="/slide-sheosar-lake.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          unoptimized
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#0C0C0C]/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 lg:mb-28 max-w-3xl">
          <FadeUp delay={0}>
            <div className="flex items-center gap-3 mb-6">
              <DrawLine />
              <span
                className="text-xs tracking-[0.3em] uppercase text-[#C8903A]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                The Auriga Way
              </span>
            </div>
          </FadeUp>

          <div
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                Luxury Is a Feeling,
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="text-[#C8903A]"
              >
                Not a Price Tag.
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="group"
            >
              {/* Photo with clip-path reveal */}
              <RevealPhoto delay={i * 0.15}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0C0C0C]/35 group-hover:bg-[#0C0C0C]/10 transition-colors duration-500" />
                  <span
                    className="absolute top-3 left-3 font-cormorant text-4xl text-[#C8903A]/40 font-light leading-none"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {pillar.number}
                  </span>
                </div>
              </RevealPhoto>

              <div className="border-t border-[#222222] pt-6 pb-10 mt-0">
                <h3
                  className="font-cormorant text-2xl text-[#F5F0E8] font-light mb-4 leading-snug group-hover:text-[#C8903A] transition-colors duration-400"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-[#F5F0E8]/45 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {pillar.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand strip */}
        <FadeUp delay={0.4}>
          <div className="mt-20 pt-10 border-t border-[#222222] flex flex-wrap gap-6">
            {["Unique.", "Different.", "Daring."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                whileHover={{ color: "rgba(200,144,58,0.5)" }}
                className="font-cormorant text-3xl text-[#F5F0E8]/20 font-light cursor-default"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
