"use client";
import { useState, useRef, useEffect, FormEvent, PointerEvent as ReactPointerEvent, MouseEvent as ReactMouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FooterComponent from "@/components/Footer";
import Logo from "@/components/Logo";
import NavMain from "@/components/NavMain";

/* ─── DATA ─── */
const DESTINATIONS = [
  { name: "The Last Paradise",              slug: "last-paradise",        region: "Hunza & Skardu",        nights: "12 days",   durationDays: 12, image: "/hunza-lady-finger.jpg",          price: "From $2,800", tripName: "HUNZA, DEOSAI & SKARDU GRAND EXPEDITION"  },
  { name: "Where Mountains Meet the Stars", slug: "mountains-meet-stars", region: "Astore & Skardu",       nights: "8 days",    durationDays: 8,  image: "/mms-katpana-lake-skardu.jpg",    price: "From $2,200", tripName: "CELESTIAL EXPEDITION THROUGH THE HIMALAYA" },
  { name: "The Realm of Fairies",           slug: "realm-of-fairies",     region: "Fairy Meadows & Hunza", nights: "10 days",   durationDays: 10, image: "/rof-hunza-village-drying.jpg",   price: "From $2,400", tripName: "IN THE SHADOW OF NANGA PARBAT"             },
  { name: "Wilderness of Chitral & Phunder",slug: "chitral-phunder",      region: "Chitral · Ghizer",      nights: "12 nights", durationDays: 13, image: "/slide-ghizer-valley.jpg",        price: "From $2,600", tripName: "KALASH VALLEYS, SHANDUR & PHUNDER LAKE"   },
  { name: "Khukush Lake & Phunder",         slug: "khukush-lake-phunder", region: "Ghizer Valley",         nights: "7 days",    durationDays: 7,  image: "/mms-dunsa-valley-tormik.jpg",    price: "From $1,800", tripName: "SEVEN-DAY ALPINE ODYSSEY"                 },
  { name: "Nagma Valley Trek",              slug: "nagma-valley",         region: "Baltistan",             nights: "8 days",    durationDays: 8,  image: "/mms-glamping-deosai.jpg",        price: "From $1,900", tripName: "INTO PAKISTAN'S BEST-KEPT SECRET"         },
  { name: "Seven Day Himalayan Dream",      slug: "himalayan-dream",      region: "Astore to Minimarg",    nights: "7 days",    durationDays: 7,  image: "/mms-minimarg-astore.jpg",        price: "From $2,000", tripName: "RAMA LAKE, RUPAL VALLEY & MINIMARG"       },
];

const HERO_SLIDES = [
  "/slide-ghizer-valley.jpg",
  "/slide-sheosar-lake.jpg",
  "/slide-katpana-desert.jpg",
  "/slide-deosai-glamping.jpg",
  "/slide-deosai-jeep.jpg",
];

const TESTIMONIALS = [
  { quote: "Our trip was completely stress free. Everything was planned beautifully — we could just relax and enjoy the journey.", name: "Grace A.",        origin: "Lahore → Hunza"            },
  { quote: "Few people truly understand that luxury travel is emotional. Every moment felt intentional, serene, exclusive, and effortless.", name: "Sarah Ibrahim",   origin: "Karachi → Skardu"          },
  { quote: "This wasn't just a trip — it was a curated experience. Every detail reflected precision and passion.", name: "Zerish Zahra",    origin: "Dubai → Chitral"           },
  { quote: "I've traveled all over the world but nothing prepared me for the raw beauty of Pakistan's north. Auriga showed me why.", name: "James Whitfield", origin: "London → Gilgit-Baltistan" },
  { quote: "From our private glamping in Deosai to the sunrise over Nanga Parbat — every single moment was extraordinary.", name: "Amina Tariq",     origin: "Islamabad → Astore"        },
  { quote: "The team's knowledge of the region is unmatched. We felt safe, looked after, and constantly amazed. We'll be back.", name: "Raza & Farah",    origin: "Karachi → Hunza"           },
];

const WHY_US = [
  { title: "Built from experience, not templates", body: "Every itinerary is planned from first-hand knowledge of these valleys, never from a template." },
  { title: "No planning fees",        body: "Our expertise costs you nothing extra. You pay for the trip, not the consultation."                               },
  { title: "No obligation quotes",    body: "Tell us your dream. We'll map it out. No pressure, no commitment until you're ready."                            },
  { title: "24/7 on-ground support",  body: "Our team is in the field, not a call centre. Reachable wherever you are, whenever you need."                     },
  { title: "Expert private guides",   body: "Born and raised in the north. They know the secret paths, hidden viewpoints, and real stories."                  },
];


/* ══════════════════════════════════════════
   HERO  — centered text, crossfade slideshow bg
══════════════════════════════════════════ */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const [ready, setReady] = useState(false);

  // Crossfade every 5s
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    const id = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 5000);
    return () => { clearTimeout(t); clearInterval(id); };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY  = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const txtY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const op   = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] overflow-hidden flex items-center justify-center text-center">

      {/* Crossfade slides */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110 will-change-transform">
        {HERO_SLIDES.map((src, i) => (
          <motion.div key={src} className="absolute inset-0"
            animate={{ opacity: i === slide ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="100vw" priority={i === 0} />
          </motion.div>
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </motion.div>

      {/* Centered content */}
      <motion.div style={{ y: txtY, opacity: op }} className="relative z-10 px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity:0, y:32 }} animate={ready?{opacity:1,y:0}:{}} transition={{ delay:0.3, duration:1, ease:[0.22,1,0.36,1] }}
          className="text-[56px] sm:text-[68px] md:text-[80px] lg:text-[90px] font-light text-white leading-[0.95] mb-6"
          style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}
        >The luxury<br />travel experts</motion.h1>

        <motion.p
          initial={{ opacity:0, y:16 }} animate={ready?{opacity:1,y:0}:{}} transition={{ delay:0.45, duration:0.8 }}
          className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-7"
          style={{ fontFamily:"var(--font-inter),sans-serif" }}
        >Bespoke luxury travel · Pakistan</motion.p>

        <motion.p
          initial={{ opacity:0, y:16 }} animate={ready?{opacity:1,y:0}:{}} transition={{ delay:0.6, duration:0.8 }}
          className="text-white/65 text-base md:text-lg mb-10 max-w-md mx-auto"
          style={{ fontFamily:"var(--font-inter),sans-serif" }}
        >Tailor-made journeys through Pakistan's north.</motion.p>

        <motion.div
          initial={{ opacity:0, y:14 }} animate={ready?{opacity:1,y:0}:{}} transition={{ delay:0.75, duration:0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="#destinations" className="px-8 py-4 border border-white/50 text-white text-[11px] tracking-[0.18em] uppercase font-semibold hover:border-white hover:bg-white/10 transition-all duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
            Explore Our Trips
          </a>
          <a href="#contact" className="px-8 py-4 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.18em] uppercase font-semibold hover:opacity-85 transition-opacity duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
            Plan Your Journey
          </a>
        </motion.div>
      </motion.div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)}
            className={`h-px transition-all duration-400 ${i===slide ? "w-8 bg-white" : "w-3 bg-white/30"}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity:0 }} animate={ready?{opacity:1}:{}} transition={{ delay:1.5 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y:[0,8,0] }} transition={{ repeat:Infinity, duration:2, ease:"easeInOut" }} className="w-px h-8 bg-white/30"/>
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 [writing-mode:vertical-lr]" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Scroll</span>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════
   MARQUEE STRIP
══════════════════════════════════════════ */
function MarqueeStrip() {
  const items = ["Hunza","Skardu","Chitral","Deosai","Rakaposhi","Gilgit-Baltistan","Fairy Meadows","Astore"];
  return (
    <div className="bg-[#111] py-4 overflow-hidden">
      <div className="flex gap-0 w-max" style={{ animation:"marquee 28s linear infinite" }}>
        {[...Array(4)].flatMap(() => items).map((n, i) => (
          <span key={i} className="inline-flex items-center gap-5 text-[10px] tracking-[0.4em] uppercase text-white/35 px-5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
            {n}<span className="text-[#C8903A] text-base leading-none">·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

/* ══════════════════════════════════════════
   PHILOSOPHY
══════════════════════════════════════════ */
function Philosophy() {
  return (
    <section className="bg-[#080808] py-28 lg:py-36 px-6">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-28 items-center">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-6" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Our philosophy</p>
            <h2 className="text-[44px] md:text-[56px] font-light text-[#F5F0E8] leading-[1.05] mb-7" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>
              Every journey starts<br /><em>with a feeling.</em>
            </h2>
            <p className="text-[#F5F0E8]/55 text-[15px] leading-relaxed mb-5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              We don't believe in itineraries built from templates. Pakistan's north is too singular, too alive — too full of moments that can't be scheduled. We start with you: your pace, your curiosity, what you want to feel on the other side of the journey.
            </p>
            <p className="text-[#F5F0E8]/35 text-sm leading-relaxed mb-10" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              Journeys through Hunza, Skardu, Chitral and beyond. No two alike.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 text-[#F5F0E8] text-[11px] tracking-[0.2em] uppercase font-medium hover:text-[#C8903A] hover:gap-5 transition-all duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              Get In Touch
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none"><path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
          </motion.div>

          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.9, ease:[0.22,1,0.36,1], delay:0.1 }} className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden" style={{ aspectRatio:"3/4" }}>
              <Image src="/feeling-altit-village.jpg" alt="Altit village and fort, Hunza" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className="flex flex-col gap-3 pt-10">
              <div className="relative overflow-hidden flex-1">
                <Image src="/feeling-altit-fort.jpg" alt="Altit Fort on rock, Hunza" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════ */
function Testimonials() {
  return (
    <section className="bg-[#0d0d0d] py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 mb-12">
        <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>What our travellers say</p>
        <h2 className="text-[40px] md:text-[48px] font-light text-[#F5F0E8]" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Real journeys. Real stories.</h2>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-4 px-6 lg:px-10 [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="shrink-0 w-[300px] md:w-[340px] bg-[#161616] border border-[#222] p-7 flex flex-col snap-start">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-5">
              <path d="M0 18V11C0 4.8 3.4 1.2 10.2 0l1.2 2.2C8 3.1 6.5 5 6.1 8H11V18H0ZM13 18V11C13 4.8 16.4 1.2 23.2 0l1.2 2.2C21 3.1 19.5 5 19.1 8H24V18H13Z" fill="#C8903A" fillOpacity="0.25"/>
            </svg>
            <p className="text-[#F5F0E8]/65 text-[15px] leading-relaxed mb-6 italic flex-1" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>"{t.quote}"</p>
            <div className="pt-5 border-t border-[#222]">
              <p className="text-[#F5F0E8] text-sm font-medium" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{t.name}</p>
              <p className="text-[#C8903A] text-[11px] tracking-wider mt-0.5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{t.origin}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   DESTINATION CARDS CAROUSEL  (Black Tomato style)
   Tall portrait cards, 4 visible, nights top-right,
   country + ALL-CAPS trip name + EXPLORE TRIP button
══════════════════════════════════════════ */
function DestCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startX: 0, startScrollLeft: 0, moved: false });

  const scroll = (dir: "l"|"r") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir==="r" ? 380 : -380, behavior:"smooth" });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  // Mouse drag-to-scroll — touch already scrolls natively, so only engage for mouse input
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { startX: e.clientX, startScrollLeft: el.scrollLeft, moved: false };
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScrollLeft - dx;
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    setDragging(false);
    scrollRef.current?.releasePointerCapture(e.pointerId);
  };

  // Suppress the card's Link navigation if the pointer actually dragged
  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section id="destinations" className="bg-[#0d0d0d] py-0 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-16 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Start your journey</p>
          <h2 className="text-[44px] md:text-[54px] font-light text-[#F5F0E8]" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Our Signature Experiences</h2>
        </div>
        <div className="flex gap-3 shrink-0">
          <button onClick={()=>scroll("l")} disabled={!canLeft}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${canLeft ? "border-[#F5F0E8]/30 text-[#F5F0E8] hover:border-[#C8903A] hover:bg-[#C8903A] hover:text-[#080808]" : "border-[#F5F0E8]/10 text-[#F5F0E8]/20 cursor-not-allowed"}`}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M14 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </button>
          <button onClick={()=>scroll("r")} disabled={!canRight}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${canRight ? "border-[#F5F0E8]/30 text-[#F5F0E8] hover:border-[#C8903A] hover:bg-[#C8903A] hover:text-[#080808]" : "border-[#F5F0E8]/10 text-[#F5F0E8]/20 cursor-not-allowed"}`}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Cards strip */}
      <div ref={scrollRef} onScroll={onScroll}
        onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={endDrag} onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className={`flex gap-3 overflow-x-auto px-6 lg:px-10 pb-16 [&::-webkit-scrollbar]:hidden select-none ${dragging ? "cursor-grabbing snap-none" : "cursor-grab snap-x snap-mandatory"}`}
      >
        {[...DESTINATIONS].sort((a, b) => a.durationDays - b.durationDays).map((d, i) => (
          <motion.div key={d.name}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-40px" }}
            transition={{ delay: i*0.06, duration:0.55, ease:[0.22,1,0.36,1] }}
            className="shrink-0 w-[280px] md:w-[320px] group cursor-pointer snap-start"
          >
            <Link href={`/tours/${d.slug}`} className="block relative overflow-hidden" style={{ aspectRatio:"3/4.2" }}>
              <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06] will-change-transform" sizes="(max-width: 768px) 80vw, 320px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

              {/* Nights badge — top right */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white font-medium" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{d.nights}</span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{d.region}</p>
                <h3 className="text-[22px] font-light text-white leading-tight mb-4" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>{d.name}</h3>

                {/* EXPLORE TRIP button */}
                <div className="inline-flex items-center gap-2 border border-white/50 px-4 py-2.5 group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white group-hover:text-[#111] transition-colors duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Explore Trip</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════
   WHAT WE DO — text left, image right, "Watch the film" CTA
══════════════════════════════════════════ */
function WhatWeDo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#080808] overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[560px]">
        {/* Left — vertically centered text */}
        <motion.div
          initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
          className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20"
        >
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#F5F0E8] leading-tight mb-6 uppercase tracking-tight" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
            WHO WE ARE
          </h2>
          <p className="text-[#F5F0E8]/55 text-[15px] leading-relaxed max-w-sm" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
            Auriga Ventures crafts remarkable, tailor-made trips for families, couples, and private groups through Pakistan's extraordinary north. Our founders know this better than anyone.
          </p>
        </motion.div>

        {/* Right — inline autoplay video */}
        <motion.div
          initial={{ opacity:0, scale:1.04 }} whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true, margin:"-80px" }} transition={{ duration:1, ease:[0.22,1,0.36,1] }}
          className="relative min-h-[420px] lg:min-h-0 overflow-hidden"
        >
          <video
            ref={videoRef}
            src="/gilgit-baltistan.mp4"
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   WHY US
══════════════════════════════════════════ */
function WhyUs() {
  return (
    <section className="bg-[#0d0d0d] py-28 lg:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Why Auriga</p>
          <p className="text-[#F5F0E8]/55 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily:"var(--font-inter),sans-serif" }}>We've spent over a decade refining every part of the journey — so when you travel with us, everything simply works. Here's what sets us apart.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 text-center border-b border-[#1A1A1A] pb-16">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-40px" }} transition={{ delay:0, duration:0.6, ease:[0.22,1,0.36,1] }}>
            <p className="text-[42px] font-light text-[#F5F0E8] leading-none mb-2" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>{DESTINATIONS.length}</p>
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#F5F0E8]/30" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Signature routes</p>
          </motion.div>
          {/* TODO: verify region count against live tour list before launch */}
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-40px" }} transition={{ delay:0.1, duration:0.6, ease:[0.22,1,0.36,1] }}>
            <p className="text-[42px] font-light text-[#F5F0E8] leading-none mb-2" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>6</p>
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#F5F0E8]/30" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Regions</p>
          </motion.div>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-40px" }} transition={{ delay:0.2, duration:0.6, ease:[0.22,1,0.36,1] }}>
            <p className="text-[42px] font-light text-[#F5F0E8] leading-none mb-2" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>4,700m</p>
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#F5F0E8]/30" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Highest camp</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {WHY_US.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-40px" }} transition={{ delay:i*0.1, duration:0.6, ease:[0.22,1,0.36,1] }}
              className="text-center"
            >
              <div className="w-10 h-10 rounded-full border border-[#C8903A]/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C8903A]">{["◈","○","◇","⬡","◎"][i]}</span>
              </div>
              <h3 className="text-[14px] font-semibold text-[#F5F0E8] mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{item.title}</h3>
              <p className="text-[#F5F0E8]/45 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   GUIDE
══════════════════════════════════════════ */
function GuideSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start end","end start"] });
  const imgY = useTransform(scrollYProgress, [0,1], ["-8%","8%"]);
  return (
    <section ref={ref} className="bg-[#080808] py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
            className="relative" style={{ aspectRatio:"4/5" }}
          >
            {/* Primary portrait image with parallax */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div style={{ y:imgY }} className="absolute inset-[-10%] will-change-transform">
                <Image src="/guide-fort-portrait.jpg" alt="Historic fort in northern Pakistan" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </motion.div>
            </div>
            {/* Inset landscape photo overlapping bottom-left */}
            <div className="absolute bottom-8 -left-8 w-[56%] z-10 overflow-hidden border-4 border-[#080808] shadow-2xl" style={{ aspectRatio:"4/3" }}>
              <Image src="/guide-shigar-dining.jpg" alt="Outdoor dining terrace at Serena Shigar Fort" fill className="object-cover" sizes="(max-width: 768px) 50vw, 30vw" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.9, ease:[0.22,1,0.36,1], delay:0.1 }}>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-6" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Our guide to luxury travel</p>
            <h2 className="text-[44px] md:text-[52px] font-light text-[#F5F0E8] leading-[1.06] mb-7" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Luxury isn't a room.<br /><em>It's a feeling.</em></h2>
            <p className="text-[#F5F0E8]/55 text-[15px] leading-relaxed mb-5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              Imagine waking to the sound of glacial rivers from a canvas tent perched above the Hunza Valley — or hiking in peaceful solitude through Deosai, the world's second-highest plateau, where brown bears roam and the horizon disappears into sky.
            </p>
            <p className="text-[#F5F0E8]/35 text-sm leading-relaxed mb-10" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              Luxury in Pakistan is not what you find at a five-star city hotel. It's privacy. It's access. It's a guide who has spent his life learning a place so you can feel it fully in a week.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════
   CONTACT
══════════════════════════════════════════ */
function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [destination, setDestination] = useState("");
  const [message,   setMessage]   = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done,      setDone]      = useState(false);
  const [error,     setError]     = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, destination, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#080808] py-28 lg:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-6" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Ready to start?</p>
            <h2 className="text-[44px] md:text-[54px] font-light text-[#F5F0E8] leading-[1.06] mb-8" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Tell us about<br /><em>your journey.</em></h2>
            <p className="text-[#F5F0E8]/50 text-[15px] leading-relaxed mb-12" style={{ fontFamily:"var(--font-inter),sans-serif" }}>No obligation. No planning fees. Just a conversation about where you want to go and how you want to feel when you get there.</p>
            <div className="flex flex-col gap-6">
              {[{label:"Email",val:"venturesauriga@gmail.com"},{label:"Phone",val:"+92 333 9555 682"},{label:"Address",val:"River View Road, Chinar Bagh, Gilgit-Baltistan, Pakistan — 15100"}].map(({label,val})=>(
                <div key={label} className="flex items-start gap-4 pb-6 border-b border-[#1A1A1A]">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 w-16 shrink-0 mt-0.5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{label}</p>
                  <p className="text-[#F5F0E8]/80 text-sm" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{val}</p>
                </div>
              ))}
            </div>
          </div>
          {done ? (
            <div className="flex flex-col justify-center py-10">
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Message received</p>
              <h3 className="text-[32px] font-light text-[#F5F0E8] mb-4" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Thank you, {firstName}.</h3>
              <p className="text-[#F5F0E8]/50 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter),sans-serif" }}>We'll be in touch shortly to start planning your journey.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/35 mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>First name</label>
                  <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} required className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-sm text-[#F5F0E8] focus:outline-none focus:border-[#C8903A] transition-colors duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/35 mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Last name</label>
                  <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-sm text-[#F5F0E8] focus:outline-none focus:border-[#C8903A] transition-colors duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/35 mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Email</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-sm text-[#F5F0E8] focus:outline-none focus:border-[#C8903A] transition-colors" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/35 mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Where do you want to go?</label>
                <select value={destination} onChange={e=>setDestination(e.target.value)} className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-3 text-sm text-[#F5F0E8]/70 focus:outline-none focus:border-[#C8903A] transition-colors" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
                  <option value="">Select a destination</option>
                  {DESTINATIONS.map(d=><option key={d.name}>{d.name}</option>)}
                  <option value="unsure">Not sure yet — help me decide</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/35 mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Tell us more</label>
                <textarea rows={4} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Group size, dates, special requests…" className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/25 focus:outline-none focus:border-[#C8903A] transition-colors resize-none" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
              </div>
              {error && <p className="text-red-400/80 text-xs" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Something went wrong. Please try again.</p>}
              <button type="submit" disabled={submitting} className="mt-1 w-full py-4 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.22em] uppercase font-medium hover:opacity-85 transition-opacity duration-300 disabled:opacity-60 disabled:cursor-not-allowed" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
                {submitting ? "Sending…" : "Plan Your Journey →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   NEWSLETTER STRIP  (sticky bottom on BT)
══════════════════════════════════════════ */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone]   = useState(false);
  const [show, setShow]   = useState(true);

  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#111] border-t border-[#1A1A1A] py-4 px-6">
      <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[11px] tracking-[0.35em] uppercase text-[#F5F0E8]/50 shrink-0" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
          Sign up to our newsletter
        </span>
        {done ? (
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#C8903A]" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Thank you — you're signed up!</span>
        ) : (
          <div className="flex gap-0 w-full sm:w-auto">
            <input
              type="email" value={email} onChange={e=>setEmail(e.target.value)}
              placeholder="youremail@example.com"
              className="flex-1 sm:w-72 bg-[#080808] border border-[#2a2a2a] px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/25 focus:outline-none focus:border-[#C8903A]"
              style={{ fontFamily:"var(--font-inter),sans-serif" }}
            />
            <button
              onClick={()=>{ if(email) setDone(true); }}
              className="px-6 py-3 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.2em] uppercase font-medium hover:opacity-85 transition-opacity duration-300 shrink-0"
              style={{ fontFamily:"var(--font-inter),sans-serif" }}
            >Sign Up</button>
          </div>
        )}
        <button onClick={()=>setShow(false)} className="text-[#F5F0E8]/30 hover:text-[#F5F0E8]/70 transition-colors shrink-0 text-lg leading-none">✕</button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function NewHomePage() {
  return (
    <div className="bg-[#080808]">
      <NavMain />
      <Hero />
      <MarqueeStrip />
      <Philosophy />
      <Testimonials />
      <DestCarousel />
      <WhatWeDo />
      <GuideSection />
      <WhyUs />
      <Contact />
      <FooterComponent />
      <Newsletter />
    </div>
  );
}
