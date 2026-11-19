"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import NavMain from "@/components/NavMain";
import { FAQS } from "@/lib/faqs";


export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(0);

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
          Good To Know
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[44px] md:text-[60px] font-light text-[#F5F0E8] leading-[1.05]"
          style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}
        >
          Frequently Asked<br />Questions
        </motion.h1>
      </section>

      <section className="px-6 lg:px-10 max-w-3xl mx-auto pb-28">
        <div className="flex flex-col divide-y divide-[#1a1a1a] border-t border-[#1a1a1a]">
          {FAQS.map((item, i) => (
            <div key={item.q} className="py-2">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-[17px] md:text-[19px] font-light text-[#F5F0E8]" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                  {item.q}
                </span>
                <span className={`shrink-0 text-[#C8903A] text-xl transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#F5F0E8]/55 text-[15px] leading-relaxed pb-6 pr-10" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
          <p className="text-[#F5F0E8]/35 text-sm" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Still have a question? Email us at{" "}
            <a href="mailto:hello@aurigaventure.com" className="text-[#C8903A] hover:underline">
              hello@aurigaventure.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
