"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const REGIONS = [
  {
    name: "Gilgit-Baltistan",
    description: "Home to five of the world's fourteen 8,000-metre peaks — including K2, the savage mountain — and the confluence of three of Earth's greatest mountain ranges: the Karakoram, Himalayas, and Hindu Kush.",
    highlights: ["K2 (8,611m)", "Hunza Valley", "Skardu", "Fairy Meadows"],
  },
  {
    name: "Khyber Pakhtunkhwa",
    description: "A land of ancient Silk Road cities, Kalash valleys, and towering Hindu Kush peaks. Chitral, Swat, and the Frontier regions hold cultures untouched for centuries.",
    highlights: ["Chitral Valley", "Kalash Valleys", "Swat Valley", "Peshawar"],
  },
  {
    name: "Punjab",
    description: "The heartland of Pakistan — a vast, fertile plain watered by five mighty rivers, home to Mughal masterpieces, Sufi shrines, and some of the world's most vibrant bazaars.",
    highlights: ["Lahore", "Badshahi Mosque", "Shalimar Gardens", "Mohenjo-daro"],
  },
  {
    name: "Sindh",
    description: "Where civilisation began. The Indus Valley culture flourished here over 4,500 years ago. Today Sindh blends ancient ruins, coastal landscapes, and a deeply distinct cultural identity.",
    highlights: ["Mohenjo-daro", "Karachi", "Thatta", "Indus Delta"],
  },
  {
    name: "Balochistan",
    description: "Pakistan's largest and least explored province — a vast plateau of dramatic desert landscapes, ancient caravan routes, turquoise coastline, and proud tribal culture.",
    highlights: ["Quetta", "Makran Coastal Highway", "Hingol National Park", "Gwadar"],
  },
  {
    name: "Azad Kashmir",
    description: "A jewel of emerald valleys, glacial rivers, and dense pine forests at the foot of the western Himalayas. Neelum Valley and Sharda are among Pakistan's most beautiful landscapes.",
    highlights: ["Neelum Valley", "Sharda", "Muzaffarabad", "Rawalakot"],
  },
];

const STATS = [
  { number: "5", label: "of Earth's 14 highest peaks" },
  { number: "7,253m", label: "Average altitude of Karakoram" },
  { number: "220M+", label: "Population, 5th largest" },
  { number: "5,000+", label: "Years of continuous civilisation" },
  { number: "70+", label: "Languages spoken" },
  { number: "3", label: "Great mountain ranges converge" },
];

const SEASONS = [
  {
    season: "Spring",
    months: "March – May",
    description: "Valleys burst into blossom. Cherry and apricot orchards flower across Hunza and Chitral. Temperatures are mild and skies are clear — ideal for cultural travel and moderate trekking.",
    rating: "Excellent",
  },
  {
    season: "Summer",
    months: "June – August",
    description: "Peak season in the north. High passes open, glaciers glisten, and wildflower meadows reach their peak. Temperatures in the mountains remain refreshingly cool even at the height of summer.",
    rating: "Peak Season",
  },
  {
    season: "Autumn",
    months: "September – November",
    description: "Golden light floods the valleys as poplar trees turn amber and crimson. The finest photography season. Trails remain open and crowds thin — the connoisseur's choice.",
    rating: "Excellent",
  },
  {
    season: "Winter",
    months: "December – February",
    description: "High passes close under snow. The south — Lahore, Karachi, Sindh — is at its most comfortable. Kalash winter festivals ignite Chitral with colour and ceremony.",
    rating: "South only",
  },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="text-[22px] font-semibold text-[#F5F0E8]" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Auriga</span>
          <span className="text-[22px] font-light text-[#C8903A]" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Ventures</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {[["Destinations", "/tours"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
            <Link key={l} href={h} className="text-[11px] tracking-[0.25em] uppercase text-[#F5F0E8]/60 hover:text-[#C8903A] transition-colors duration-300" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{l}</Link>
          ))}
        </nav>
        <Link href="/enquire" target="_blank" rel="noopener noreferrer"
          className="hidden md:block px-5 py-2.5 border border-[#C8903A] text-[#C8903A] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
          style={{ fontFamily: "var(--font-inter),sans-serif" }}>Plan Your Journey</Link>
      </div>
    </header>
  );
}

export default function AboutPakistanPage() {
  return (
    <div className="bg-[#080808] text-[#F5F0E8] min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden pt-[72px]">
        <div className="absolute inset-0">
          <Image src="/slide-sheosar-lake.jpg" alt="Sheosar Lake, Deosai National Park, Pakistan" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/30 via-[#080808]/20 to-[#080808]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-20 w-full">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Discover
          </motion.p>
          <div style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[64px] md:text-[88px] lg:text-[108px] font-light text-[#F5F0E8] leading-[1]">
                About
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[64px] md:text-[88px] lg:text-[108px] font-light text-[#C8903A] leading-[1]">
                Pakistan
              </motion.h1>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }}
            className="text-[#F5F0E8]/50 text-base md:text-lg mt-6 max-w-xl" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Where ancient civilisations meet the world's greatest mountains — a destination unlike any other on Earth.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[#0d0d0d] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-[#1a1a1a]">
            {STATS.map(({ number, label }) => (
              <div key={label} className="py-6 px-4 text-center">
                <p className="text-[28px] font-light text-[#C8903A] mb-1" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{number}</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]/30" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>The country</p>
              <h2 className="text-[44px] md:text-[56px] font-light text-[#F5F0E8] leading-[1.05] mb-6" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                The world's last great<br /><em>travel secret.</em>
              </h2>
              <p className="text-[#F5F0E8]/55 text-[15px] leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Pakistan is home to the greatest concentration of high mountains on Earth. Three of the world's most formidable mountain ranges — the Karakoram, the Himalayas, and the Hindu Kush — converge on its northern territories, creating landscapes of such scale and drama that they defy description.
              </p>
              <p className="text-[#F5F0E8]/40 text-[14px] leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Beyond the mountains, Pakistan holds 5,000 years of continuous civilisation — the ruins of Mohenjo-daro and Harappa among the oldest cities ever discovered. The Mughal Empire left its finest monuments here. The Silk Road passed through its valleys. Dozens of distinct cultures, languages, and traditions coexist across a land of breathtaking variety.
              </p>
              <Link href="/enquire" target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-[#d4a34d] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Plan Your Pakistan Journey
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative" style={{ aspectRatio: "4/5" }}>
              <Image src="/slide-katpana-desert.jpg" alt="Katpana Cold Desert, Skardu, Pakistan" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Explore by region</p>
            <h2 className="text-[44px] md:text-[56px] font-light text-[#F5F0E8] leading-tight" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Six worlds in one country.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((region, i) => (
              <motion.div key={region.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#0e0e0e] border border-[#1a1a1a] p-7 hover:border-[#C8903A]/30 transition-colors duration-500">
                <h3 className="text-[22px] font-light text-[#F5F0E8] mb-3" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{region.name}</h3>
                <p className="text-[#F5F0E8]/45 text-[13px] leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{region.description}</p>
                <div className="flex flex-wrap gap-2">
                  {region.highlights.map(h => (
                    <span key={h} className="text-[9px] tracking-[0.2em] uppercase text-[#C8903A]/70 border border-[#C8903A]/20 px-2.5 py-1" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{h}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best time to visit */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>When to go</p>
            <h2 className="text-[44px] md:text-[56px] font-light text-[#F5F0E8] leading-tight" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Every season has its gift.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEASONS.map((s, i) => (
              <motion.div key={s.season}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                className="border border-[#1a1a1a] p-6">
                <p className="text-[9px] tracking-[0.35em] uppercase text-[#C8903A] mb-2" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{s.months}</p>
                <h3 className="text-[24px] font-light text-[#F5F0E8] mb-1" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{s.season}</h3>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#C8903A]/60 mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{s.rating}</p>
                <p className="text-[#F5F0E8]/45 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>People & culture</p>
              <h2 className="text-[44px] md:text-[52px] font-light text-[#F5F0E8] leading-[1.05] mb-6" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                Among the world's<br /><em>most welcoming people.</em>
              </h2>
              <p className="text-[#F5F0E8]/55 text-[15px] leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Pakistan's reputation for hospitality is not a travel cliché — it is a lived reality. Across all regions, guests are received with warmth, generosity, and genuine curiosity. The tradition of <em>mehmaan-nawazi</em> — the sacred duty of honouring one's guest — is woven into the fabric of daily life.
              </p>
              <p className="text-[#F5F0E8]/40 text-[14px] leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Over 220 million people speak more than 70 languages across Pakistan, from Urdu and Punjabi to Burushaski — a language so ancient and so isolated it has no known relatives anywhere on Earth. The Kalash of Chitral preserve traditions that predate Islam by millennia. The Baloch, Pashtun, Sindhi, and Balti peoples each carry distinct identities, art forms, music, and culinary traditions.
              </p>
              <p className="text-[#F5F0E8]/40 text-[14px] leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Islam is the predominant faith, observed with quiet devotion across most of the country. The call to prayer five times daily is a constant, beautiful rhythm of life in every city and village.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
              className="relative" style={{ aspectRatio: "4/5" }}>
              <Image src="/feeling-altit-village.jpg" alt="Village life in Altit, Hunza Valley, Pakistan" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/fullbleed-golden-mountains.jpg" alt="Golden mountains at sunset, northern Pakistan" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#080808]/70" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Ready to experience it?</p>
          <h2 className="text-[48px] md:text-[64px] font-light text-[#F5F0E8] leading-[1.0] mb-8" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            Pakistan is waiting<br /><em>for you.</em>
          </h2>
          <p className="text-[#F5F0E8]/45 text-[15px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Let Auriga Ventures design your journey — bespoke, unhurried, and unlike anything you have experienced before.
          </p>
          <Link href="/enquire" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#d4a34d] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
