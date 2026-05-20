"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const route = ["Islamabad", "Gilgit", "Hunza", "Skardu", "Chitral", "Astore"];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Scroll-driven transforms — the "fly-in" effect
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const videoBlur = useTransform(scrollYProgress, [0, 0.6], [0, 6]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.38], [1, 0]);
  const hudOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.3, 0.85], [0, 0.7]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]"
    >
      {/* ── VIDEO — zooms forward as you descend ── */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 origin-center will-change-transform"
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            opacity: 0.6,
            filter: `blur(${videoBlur}px)` as unknown as string,
          }}
          poster="/hero-attabad.jpg"
        >
          <source
            src="https://aurigaventure.com/wp-content/uploads/2014/10/Gilgit-Baltistan-copy-2.mov"
            type="video/mp4"
          />
        </motion.video>
      </motion.div>

      {/* Progressive blackout on scroll (rushing into landscape) */}
      <motion.div
        style={{ opacity: blackout }}
        className="absolute inset-0 bg-[#080808] pointer-events-none"
      />

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-[#080808]/10 to-[#080808]/75 pointer-events-none" />

      {/* Cockpit vignette — oval darkening around edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 75% at 50% 45%, transparent 35%, rgba(8,8,8,0.75) 100%)",
        }}
      />

      {/* ── HUD LAYER — fades out as you scroll ── */}
      <motion.div
        style={{ opacity: hudOpacity }}
        className="absolute inset-0 pointer-events-none select-none"
      >
        {/* Scanning line */}
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8903A]/20 to-transparent animate-scan"
          style={{ top: "30%" }}
        />

        {/* Corner brackets */}
        {[
          "top-[88px] left-6 border-l border-t",
          "top-[88px] right-6 border-r border-t",
          "bottom-14 left-6 border-l border-b",
          "bottom-14 right-6 border-r border-b",
        ].map((cls) => (
          <div
            key={cls}
            className={`absolute w-7 h-7 border-[#C8903A]/25 ${cls}`}
          />
        ))}

        {/* GPS — top left */}
        <div className="absolute top-28 left-8 lg:left-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8903A] animate-blink" />
            <span
              className="text-[8px] tracking-[0.35em] uppercase text-[#C8903A]/80"
              style={{ fontFamily: "monospace" }}
            >
              TRACKING
            </span>
          </div>
          <div
            className="text-[10px] text-[#F5F0E8]/35 leading-loose"
            style={{ fontFamily: "monospace" }}
          >
            <div>36.1816° N</div>
            <div>74.6369° E</div>
          </div>
        </div>

        {/* Altitude + speed — top right */}
        <div className="absolute top-28 right-8 lg:right-14 text-right">
          <div
            className="text-[10px] text-[#F5F0E8]/35 leading-loose"
            style={{ fontFamily: "monospace" }}
          >
            <div>▲ ALT 1,500 m</div>
            <div>↻ GILGIT–BALTISTAN</div>
          </div>
        </div>

        {/* Centre reticle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-20 h-20 animate-drift">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-[#C8903A]/25" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-4 bg-[#C8903A]/25" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-4 bg-[#C8903A]/25" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-4 bg-[#C8903A]/25" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-[#C8903A]/30 rounded-full" />
          </div>
        </div>

        {/* Route strip — bottom */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center gap-3">
          {route.map((city, i) => (
            <div key={city} className="flex items-center gap-3">
              <span
                className={`text-[9px] tracking-[0.25em] uppercase ${
                  i === 1
                    ? "text-[#C8903A] font-semibold"
                    : "text-[#F5F0E8]/25"
                }`}
                style={{ fontFamily: "monospace" }}
              >
                {city}
              </span>
              {i < route.length - 1 && (
                <span className="text-[#C8903A]/20 text-[8px]">—</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── MAIN CONTENT — lifts and fades on scroll ── */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-28 will-change-transform"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block w-8 h-px bg-[#C8903A]" />
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#C8903A]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Gilgit, Pakistan
          </span>
        </motion.div>

        {/* Headline — words stagger in */}
        <div
          className="font-cormorant text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-light leading-[0.95] tracking-tight text-[#F5F0E8] mb-8 max-w-4xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {["Curated", "Around", "Your Curiosity"].map((line, li) => (
            <div key={li} className="overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.5 + li * 0.15,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className={li === 1 ? "text-[#C8903A]" : ""}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-xl text-base lg:text-lg text-[#F5F0E8]/50 leading-relaxed mb-12"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Bespoke luxury travel experiences in Pakistan — designed around
          emotion, intention, and the places that stay with you forever.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#destinations"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#C8903A] text-[#080808] text-sm tracking-widest uppercase font-medium hover:bg-[#D4A855] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Explore Our Journeys
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#F5F0E8]/20 text-[#F5F0E8]/60 text-sm tracking-widest uppercase hover:border-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Our Philosophy
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-16 pt-8 border-t border-[#1E1E1E] font-cormorant text-lg text-[#F5F0E8]/25 italic"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          &ldquo;Beyond Travel. We Curate Dreams.&rdquo;
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#C8903A]/50 to-transparent"
        />
        <span
          className="text-[8px] tracking-[0.4em] uppercase text-[#F5F0E8]/20"
          style={{ fontFamily: "monospace" }}
        >
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
