"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FadeUp, DrawLine } from "./Reveal";

const destinations = [
  {
    name: "Hunza",
    price: "$1,300",
    description: "Ancient forts, turquoise lakes, and a sky that never ends.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
  },
  {
    name: "Skardu Valley",
    price: "$1,300",
    description: "Where the Karakoram meets silence.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
  },
  {
    name: "Ghizer Valley",
    price: "$1,800",
    description: "Pakistan's most unspoiled valley. Still yours to discover.",
    image: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
  },
  {
    name: "Rakaposhi Basecamp",
    price: "$1,350",
    description: "A trek to the foot of one of Pakistan's great mountains.",
    image: "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg",
  },
  {
    name: "Chitral",
    price: "$1,900",
    description: "Ancient kingdoms, mountain passes, and the Hindu Kush.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",
  },
  {
    name: "Astore Valley",
    price: "$1,400",
    description: "Remote. Serene. The kind of place you don't forget.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
  },
];

function DestCard({ dest, index }: { dest: typeof destinations[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1, rotateX: 0 }
          : { opacity: 0, y: 60, scale: 0.92, rotateX: 8 }
      }
      initial={{ opacity: 0, y: 60, scale: 0.92, rotateX: 8 }}
      transition={{
        duration: 0.85,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      style={{ perspective: 800 }}
      className="group relative overflow-hidden cursor-pointer"
    >
      {/* Aspect ratio box */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        {/* Photo — zooms subtly on hover */}
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
          sizes="(max-width: 768px) 50vw, 20vw"
          loading="lazy"
        />

        {/* Permanent base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />

        {/* Gold shimmer on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#C8903A]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Price badge */}
        <motion.div
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: (index % 3) * 0.1 + 0.3 }}
          className="absolute top-5 right-5 px-3 py-1.5 bg-[#080808]/70 backdrop-blur-sm border border-[#C8903A]/30"
        >
          <span
            className="font-cormorant text-sm text-[#C8903A]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            from {dest.price}
          </span>
        </motion.div>

        {/* Left accent bar — grows on hover */}
        <div className="absolute left-0 top-0 w-0.5 h-0 bg-[#C8903A] group-hover:h-full transition-all duration-500 ease-out" />

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
          {/* Name always visible */}
          <h3
            className="font-cormorant text-3xl font-light text-[#F5F0E8] leading-tight mb-2"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {dest.name}
          </h3>

          {/* Description + CTA slide up on hover */}
          <div className="overflow-hidden">
            <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <p
                className="text-[#F5F0E8]/65 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {dest.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#C8903A] border-b border-[#C8903A]/40 pb-0.5 hover:border-[#C8903A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Enquire now
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="bg-[#080808] py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <FadeUp delay={0}>
            <div className="flex items-center gap-3 mb-6">
              <DrawLine />
              <span
                className="text-xs tracking-[0.3em] uppercase text-[#C8903A]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Our Destinations
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
                Remarkable Places.
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
                Even Better Stories.
              </motion.div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((dest, i) => (
            <DestCard key={dest.name} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
