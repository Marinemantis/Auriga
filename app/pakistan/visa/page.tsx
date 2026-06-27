"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

const VISA_TYPES = [
  {
    title: "Tourist e-Visa",
    duration: "30 days",
    tag: "Most Common",
    description: "Available to citizens of 50+ countries online. Single or multiple entry. Processed within 5–7 working days via NADRA's official portal. The simplest route for leisure travellers.",
    requirements: ["Valid passport (6+ months)", "Confirmed return ticket", "Hotel booking or invitation letter", "Passport-size photograph", "Travel insurance (recommended)"],
  },
  {
    title: "Visa on Arrival",
    duration: "30 days",
    tag: "Selected Nations",
    description: "Citizens of certain countries may obtain a visa on arrival at major international airports — Islamabad, Lahore, and Karachi. Conditions and eligible nationalities are subject to change; always confirm before travel.",
    requirements: ["Valid passport", "Return ticket", "Proof of accommodation", "Sufficient funds", "Completed arrival form"],
  },
  {
    title: "Mountaineering & Trekking Visa",
    duration: "Up to 90 days",
    tag: "Adventure",
    description: "Issued to expeditions and trekking groups visiting restricted or permit zones. Requires a registered Pakistani tour operator and a No-Objection Certificate from the Ministry of Tourism.",
    requirements: ["Registered local tour operator", "Expedition/trek permit", "NOC from Ministry of Tourism", "Group list with passport copies", "Emergency contact and insurance details"],
  },
  {
    title: "Business Visa",
    duration: "30–90 days",
    tag: "Professional",
    description: "Available to citizens of 95 countries. Requires an invitation letter from a registered Pakistani company and may include multiple-entry provisions for frequent travellers.",
    requirements: ["Invitation letter from Pakistani company", "Business registration proof", "Company letter from home country", "Bank statement", "Confirmed onward travel"],
  },
];

const STEPS = [
  {
    number: "01",
    title: "Check eligibility",
    description: "Visit Pakistan's official NADRA visa portal and enter your nationality to determine which visa category applies to you and whether e-Visa or Visa on Arrival is available.",
  },
  {
    number: "02",
    title: "Gather documents",
    description: "Prepare your passport scan (minimum 6 months validity), a recent photograph under 350KB, confirmed onward travel, and proof of accommodation or an invitation letter from your tour operator.",
  },
  {
    number: "03",
    title: "Apply online",
    description: "Create an account on NADRA's official visa portal (visa.nadra.gov.pk), complete the application form accurately, upload your documents, and pay the processing fee by credit or debit card.",
  },
  {
    number: "04",
    title: "Receive & verify",
    description: "Most tourist e-Visas are processed within 5–7 working days. You will receive your visa electronically via email. Print a copy to carry alongside your passport when travelling.",
  },
];

const TIPS = [
  { tip: "Apply at least 2–3 weeks before travel to allow processing time and any follow-up requests." },
  { tip: "Use only the official NADRA portal (visa.nadra.gov.pk) — do not use third-party websites claiming to process Pakistani visas." },
  { tip: "Ensure your passport has at least 6 months of validity beyond your planned departure date from Pakistan." },
  { tip: "Carry printed copies of your visa, hotel bookings, and tour operator details when entering Pakistan." },
  { tip: "If trekking in restricted zones (near borders or high-altitude permit areas), ensure your tour operator has secured all relevant NOCs before your arrival." },
  { tip: "Pakistan is on the list of required registration countries — upon arrival, all foreign visitors must register with the local police within 24 hours if staying in a private residence." },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1">
          <Logo variant="light" className="h-7 w-auto" />
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

export default function PakistanVisaPage() {
  return (
    <div className="bg-[#080808] text-[#F5F0E8] min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden pt-[72px]">
        <div className="absolute inset-0">
          <Image src="/slide-katpana-desert.jpg" alt="Katpana Cold Desert, Skardu, Pakistan" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/30 via-[#080808]/20 to-[#080808]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Your gateway to Pakistan
          </motion.p>
          <div style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[60px] md:text-[80px] lg:text-[100px] font-light text-[#F5F0E8] leading-[1]">
                Pakistan
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[60px] md:text-[80px] lg:text-[100px] font-light text-[#C8903A] leading-[1]">
                Visa Help
              </motion.h1>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-[#F5F0E8]/50 text-base md:text-lg mt-6 max-w-xl" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Pakistan's e-Visa system is now open to citizens of 191 countries. Here is everything you need to know.
          </motion.p>
        </div>
      </section>

      {/* Overview banner */}
      <div className="bg-[#C8903A]/10 border-y border-[#C8903A]/20 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F0E8]/70 text-[13px]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Pakistan's online visa system is open to citizens of <span className="text-[#C8903A] font-medium">191 countries</span>. Tourist e-Visas are available online for <span className="text-[#C8903A] font-medium">50+ nationalities</span>.
          </p>
          <a href="https://visa.nadra.gov.pk" target="_blank" rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 border border-[#C8903A] text-[#C8903A] text-[10px] tracking-[0.2em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Official NADRA Portal →
          </a>
        </div>
      </div>

      {/* Visa types */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Visa categories</p>
            <h2 className="text-[44px] md:text-[56px] font-light text-[#F5F0E8] leading-tight" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Choose your entry.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {VISA_TYPES.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.1, duration: 0.7 }}
                className="bg-[#0e0e0e] border border-[#1a1a1a] p-8 hover:border-[#C8903A]/30 transition-colors duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#C8903A] bg-[#C8903A]/10 px-3 py-1 mb-3 inline-block" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{v.tag}</span>
                    <h3 className="text-[24px] font-light text-[#F5F0E8]" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{v.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[#C8903A] text-[20px] font-light" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{v.duration}</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]/30" style={{ fontFamily: "var(--font-inter),sans-serif" }}>validity</p>
                  </div>
                </div>
                <p className="text-[#F5F0E8]/50 text-[13px] leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{v.description}</p>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Requirements</p>
                  {v.requirements.map(r => (
                    <div key={r} className="flex items-start gap-2 mb-2">
                      <span className="text-[#C8903A] text-xs mt-0.5">◇</span>
                      <p className="text-[#F5F0E8]/50 text-[12px]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{r}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application steps */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>How to apply</p>
            <h2 className="text-[44px] md:text-[56px] font-light text-[#F5F0E8] leading-tight" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Four steps to Pakistan.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div key={step.number}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                className="border-t border-[#C8903A]/30 pt-6">
                <p className="text-[#C8903A]/40 text-[40px] font-light mb-4" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{step.number}</p>
                <h3 className="text-[20px] font-light text-[#F5F0E8] mb-3" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{step.title}</h3>
                <p className="text-[#F5F0E8]/45 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Before you travel</p>
            <h2 className="text-[44px] md:text-[52px] font-light text-[#F5F0E8] leading-tight" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Essential tips.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {TIPS.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.6 }}
                className="flex items-start gap-4 py-5 border-b border-[#1a1a1a]">
                <span className="text-[#C8903A] text-lg shrink-0 mt-0.5">◇</span>
                <p className="text-[#F5F0E8]/55 text-[14px] leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{item.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter),sans-serif" }}>We handle the details</p>
          <h2 className="text-[44px] md:text-[56px] font-light text-[#F5F0E8] leading-[1.0] mb-6" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            Let Auriga take care<br /><em>of your visa.</em>
          </h2>
          <p className="text-[#F5F0E8]/40 text-[15px] leading-relaxed mb-10 max-w-md mx-auto" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            When you book a journey with Auriga Ventures, our team assists with all visa documentation, invitation letters, and NOCs — so you focus on the adventure, not the paperwork.
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
