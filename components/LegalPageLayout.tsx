"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import NavMain from "@/components/NavMain";

interface Section {
  heading: string;
  body: string[];
}

interface Props {
  eyebrow: string;
  title: string;
  updated: string;
  sections: Section[];
}

export default function LegalPageLayout({ eyebrow, title, updated, sections }: Props) {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8]">
      <NavMain darkPage />

      <section className="pt-[160px] pb-16 px-6 lg:px-10 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-5"
          style={{ fontFamily: "var(--font-inter),sans-serif" }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[44px] md:text-[60px] font-light text-[#F5F0E8] leading-[1.05] mb-5"
          style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
        >
          {title}
        </motion.h1>
        <p className="text-[#F5F0E8]/30 text-xs" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
          Last updated: {updated}
        </p>
      </section>

      <section className="px-6 lg:px-10 max-w-3xl mx-auto pb-28">
        <div className="flex flex-col gap-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.heading}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
            >
              <h2 className="text-[20px] font-light text-[#C8903A] mb-3" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                {s.heading}
              </h2>
              <div className="flex flex-col gap-3">
                {s.body.map((p, j) => (
                  <p key={j} className="text-[#F5F0E8]/55 text-[15px] leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
          <p className="text-[#F5F0E8]/35 text-sm" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Questions about this page? Email us at{" "}
            <a href="mailto:venturesauriga@gmail.com" className="text-[#C8903A] hover:underline">
              venturesauriga@gmail.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
