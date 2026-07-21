"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import NavMain from "@/components/NavMain";

const FAQS: { q: string; a: string }[] = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 2–3 months ahead, especially for travel between May and October when our boutique properties and camps fill quickly. Custom itineraries and last-minute trips can sometimes be arranged with shorter notice — just ask.",
  },
  {
    q: "What's included in the price?",
    a: "Each itinerary includes private ground transport, accommodation as listed, a guide/driver, and the activities described in the trip's day-by-day plan. International flights, visas, travel insurance, and personal expenses are excluded unless stated otherwise.",
  },
  {
    q: "Do I need a visa to visit Pakistan?",
    a: "Most nationalities can apply for a Pakistan e-Visa online before travel. We'll share guidance specific to your nationality once you enquire, and can point you to the official visa portal.",
  },
  {
    q: "Is altitude sickness a concern?",
    a: "Several of our journeys reach altitudes above 3,000–4,500 metres (Deosai, Khunjerab Pass, Khukush Lake). Our itineraries are paced for gradual acclimatisation, but we recommend consulting your doctor beforehand, especially if you have a cardiac or respiratory condition.",
  },
  {
    q: "What's the best time of year to travel?",
    a: "Most of our trips run May through October, when mountain roads are clear and weather is most stable. Specific windows vary by trip — check the 'When' field on each tour page for guidance.",
  },
  {
    q: "Can you design a custom itinerary?",
    a: "Yes — every Auriga journey can be tailored around your dates, group size, pace, and interests. Reach out via the enquiry form on any trip page or our contact page and we'll start designing with you.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellation terms depend on the specific trip and how close to departure you cancel, since many properties and camps require non-refundable deposits. Full terms are shared with your itinerary agreement before booking — see our Terms & Conditions for an overview.",
  },
  {
    q: "How do payments work?",
    a: "Bookings are confirmed with a deposit, with the balance due before departure. We arrange payment directly with you via bank transfer — we do not process card payments on this website.",
  },
  {
    q: "Do you arrange group trips or only private journeys?",
    a: "We specialise in private, fully-tailored journeys, but can also arrange trips for small private groups of friends or family travelling together.",
  },
];

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
