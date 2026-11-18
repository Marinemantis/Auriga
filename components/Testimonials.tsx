"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp, DrawLine } from "./Reveal";

const testimonials = [
  {
    quote:
      "Auriga made our trip completely stress free. Everything was planned beautifully, and we could just relax and enjoy the journey.",
    name: "Grace A",
    title: "Entrepreneur",
  },
  {
    quote:
      "Auriga Ventures understands that luxury travel is emotional. Every moment felt intentional, serene, exclusive, and effortless. We've traveled extensively, but this was different.",
    name: "Sarah Ibrahim",
    title: "Developer",
  },
  {
    quote:
      "Auriga didn't just plan a trip, they curated an experience. Every detail, from our private stay to the seamless transfers, reflected precision and passion. This is luxury travel planning at its finest.",
    name: "Zerish Zahra",
    title: "Traveller",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#080808] py-32 lg:py-44 overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <Image
          src="https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg"
          alt="Pakistan landscape"
          fill
          className="object-cover opacity-10"
          unoptimized
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#080808]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <FadeUp delay={0}>
            <div className="flex items-center gap-3 mb-6">
              <DrawLine />
              <span
                className="text-xs tracking-[0.3em] uppercase text-[#C8903A]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                What Clients Say
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
                Journeys That Stay
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
                With You.
              </motion.div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-5 overflow-x-auto md:grid md:grid-cols-3 pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.14,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-start bg-[#0F0F0F]/80 backdrop-blur-sm border border-[#1E1E1E] hover:border-[#C8903A]/30 p-8 lg:p-10 flex flex-col justify-between transition-colors duration-500"
            >
              <div>
                <span
                  className="font-cormorant text-6xl text-[#C8903A]/30 leading-none block mb-4 -mt-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-[#F5F0E8]/65 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {t.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#222222]">
                <p
                  className="font-cormorant text-lg text-[#F5F0E8] font-medium"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs tracking-[0.15em] uppercase text-[#C8903A]/70 mt-1"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {t.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
