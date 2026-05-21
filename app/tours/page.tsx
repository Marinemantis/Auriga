"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/lib/tours";
import PriceDisplay from "@/components/PriceDisplay";

const FILTERS = ["All", "Trekking", "Cultural", "Luxury Stays", "Off the Beaten Path"];

export default function ToursPage() {
  const [active, setActive] = useState("All");

  return (
    <div className="bg-white min-h-screen">

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8e4de] h-[72px] flex items-center px-6 lg:px-10">
        <div className="max-w-[1320px] mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-1">
            <span className="text-[22px] font-semibold text-[#111]" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Auriga</span>
            <span className="text-[22px] font-light text-[#C8903A]" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Ventures</span>
          </Link>
          <Link href="/#contact"
            className="px-5 py-2.5 bg-[#111] text-white text-[11px] tracking-[0.12em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300"
            style={{ fontFamily:"var(--font-inter),sans-serif" }}
          >Enquire Now</Link>
        </div>
      </header>

      {/* Hero banner */}
      <div className="relative pt-[72px] h-[52vh] min-h-[380px] overflow-hidden">
        <Image src="https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg" alt="Destinations" fill className="object-cover" unoptimized priority />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.7 }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-5" style={{ fontFamily:"var(--font-inter),sans-serif" }}
          >Tailor-made journeys</motion.p>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.35, duration:0.9, ease:[0.22,1,0.36,1] }}
            className="text-[52px] md:text-[72px] font-light text-white leading-[0.95]" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}
          >Our Destinations</motion.h1>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-[#e8e4de]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 flex gap-0 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={`shrink-0 px-5 py-4 text-[11px] tracking-[0.15em] uppercase border-b-2 -mb-px transition-all duration-250 ${active===f ? "border-[#C8903A] text-[#C8903A]" : "border-transparent text-[#888] hover:text-[#333]"}`}
              style={{ fontFamily:"var(--font-inter),sans-serif" }}
            >{f}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour, i) => (
            <motion.div key={tour.slug}
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-40px" }}
              transition={{ delay:(i%3)*0.1, duration:0.6, ease:[0.22,1,0.36,1] }}
            >
              <Link href={`/tours/${tour.slug}`} className="group block">
                {/* Image */}
                <div className="relative overflow-hidden mb-4" style={{ aspectRatio:"4/3" }}>
                  <Image src={tour.heroImage} alt={tour.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05] will-change-transform" unoptimized />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  {/* Nights */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{tour.duration}</span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M0 5h10M6 1l4 4-4 4" stroke="#111" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  </div>
                </div>
                {/* Text */}
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-1.5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{tour.region}</p>
                <h2 className="text-[26px] font-light text-[#111] mb-2 group-hover:text-[#C8903A] transition-colors duration-300" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>{tour.name}</h2>
                <p className="text-[#888] text-sm leading-relaxed mb-3 line-clamp-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{tour.tagline}</p>
                <div className="flex items-center justify-between">
                  <PriceDisplay usd={tour.priceUSD} className="text-[13px] text-[#C8903A]" />
                  <span className="text-[11px] tracking-[0.18em] uppercase text-[#888] group-hover:text-[#C8903A] flex items-center gap-2 transition-colors duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
                    View trip
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M0 4h12M8 1l4 3-4 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA band */}
      <div className="bg-[#111] py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Can't find what you're looking for?</p>
        <h2 className="text-[40px] md:text-[54px] font-light text-white mb-8" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>We'll build it from scratch.</h2>
        <Link href="/#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8903A] text-[#111] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#e0a84a] transition-colors duration-300"
          style={{ fontFamily:"var(--font-inter),sans-serif" }}
        >Plan My Trip</Link>
      </div>
    </div>
  );
}
