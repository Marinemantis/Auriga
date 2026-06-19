"use client";
import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FooterComponent from "@/components/Footer";

/* ─── DATA ─── */
const DESTINATIONS = [
  { name: "The Last Paradise",              slug: "last-paradise",        region: "Hunza & Skardu",        nights: "12 days",   image: "/hunza-lady-finger.jpg",          price: "From $2,800", tripName: "HUNZA, DEOSAI & SKARDU GRAND EXPEDITION"  },
  { name: "Where Mountains Meet the Stars", slug: "mountains-meet-stars", region: "Astore & Skardu",       nights: "8 days",    image: "/mms-katpana-lake-skardu.jpg",    price: "From $2,200", tripName: "CELESTIAL EXPEDITION THROUGH THE HIMALAYA" },
  { name: "The Realm of Fairies",           slug: "realm-of-fairies",     region: "Fairy Meadows & Hunza", nights: "10 days",   image: "/rof-hunza-village-drying.jpg",            price: "From $2,400", tripName: "IN THE SHADOW OF NANGA PARBAT"             },
  { name: "Wilderness of Chitral & Phunder",slug: "chitral-phunder",      region: "Chitral · Ghizer",      nights: "12 nights", image: "/slide-ghizer-valley.jpg",        price: "From $2,600", tripName: "KALASH VALLEYS, SHANDUR & PHUNDER LAKE"   },
  { name: "Khukush Lake & Phunder",         slug: "khukush-lake-phunder", region: "Ghizer Valley",         nights: "7 days",    image: "/mms-dunsa-valley-tormik.jpg",    price: "From $1,800", tripName: "SEVEN-DAY ALPINE ODYSSEY"                 },
  { name: "Nagma Valley Trek",              slug: "nagma-valley",         region: "Baltistan",             nights: "8 days",    image: "/mms-glamping-deosai.jpg",        price: "From $1,900", tripName: "INTO PAKISTAN'S BEST-KEPT SECRET"         },
  { name: "Seven Day Himalayan Dream",      slug: "himalayan-dream",      region: "Astore to Minimarg",    nights: "7 days",    image: "/mms-minimarg-astore.jpg",        price: "From $2,000", tripName: "RAMA LAKE, RUPAL VALLEY & MINIMARG"       },
];

const HERO_SLIDES = [
  "/slide-ghizer-valley.jpg",
  "/slide-sheosar-lake.jpg",
  "/slide-katpana-desert.jpg",
  "/slide-deosai-glamping.jpg",
  "/slide-deosai-jeep.jpg",
];

const TESTIMONIALS = [
  { quote: "Auriga made our trip completely stress free. Everything was planned beautifully — we could just relax and enjoy the journey.", name: "Grace A.",        origin: "Lahore → Hunza"            },
  { quote: "Auriga Ventures understands that luxury travel is emotional. Every moment felt intentional, serene, exclusive, and effortless.", name: "Sarah Ibrahim",   origin: "Karachi → Skardu"          },
  { quote: "Auriga didn't just plan a trip — they curated an experience. Every detail reflected precision and passion.", name: "Zerish Zahra",    origin: "Dubai → Chitral"           },
  { quote: "I've traveled all over the world but nothing prepared me for the raw beauty of Pakistan's north. Auriga showed me why.", name: "James Whitfield", origin: "London → Gilgit-Baltistan" },
  { quote: "From our private glamping in Deosai to the sunrise over Nanga Parbat — every single moment was extraordinary.", name: "Amina Tariq",     origin: "Islamabad → Astore"        },
  { quote: "The team's knowledge of the region is unmatched. We felt safe, looked after, and constantly amazed. We'll be back.", name: "Raza & Farah",    origin: "Karachi → Hunza"           },
];

const WHY_US = [
  { title: "Award-winning planners",  body: "Over a decade crafting journeys through Pakistan's north. Every itinerary built from experience, not templates." },
  { title: "No planning fees",        body: "Our expertise costs you nothing extra. You pay for the trip, not the consultation."                               },
  { title: "No obligation quotes",    body: "Tell us your dream. We'll map it out. No pressure, no commitment until you're ready."                            },
  { title: "24/7 on-ground support",  body: "Our team is in the field, not a call centre. Reachable wherever you are, whenever you need."                     },
  { title: "Expert private guides",   body: "Born and raised in the north. They know the secret paths, hidden viewpoints, and real stories."                  },
];


/* ══════════════════════════════════════════
   NAV
══════════════════════════════════════════ */
function Nav({ heroVisible }: { heroVisible: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dark = !heroVisible; // white bg after hero scrolls away

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${dark ? "bg-white shadow-[0_1px_0_0_#e8e4de]" : "bg-transparent"}`}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

        <a href="/" className="flex items-baseline gap-1 shrink-0">
          <span className={`text-[22px] font-semibold tracking-wide transition-colors duration-500 ${dark ? "text-[#111]" : "text-white"}`} style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Auriga</span>
          <span className="text-[22px] font-light text-[#C8903A]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Ventures</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {/* Pakistan dropdown */}
          <div className="relative group">
            <span
              className={`flex items-center gap-1 cursor-default text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 select-none ${dark ? "text-[#333]/60 group-hover:text-[#111]" : "text-white/70 group-hover:text-white"}`}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Pakistan
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className="transition-transform duration-200 group-hover:rotate-180">
                <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className={`w-52 border shadow-xl py-1.5 ${dark ? "bg-white border-[#e8e4de]" : "bg-[#0d0d0d] border-[#222]"}`}>
                {[
                  ["About Pakistan",       "/pakistan/about"],
                  ["Pakistan Visa Help",   "/pakistan/visa"],
                  ["Mountain Passes",      "/pakistan/mountain-passes"],
                  ["Festivals of Pakistan","/pakistan/festivals"],
                ].map(([label, href]) => (
                  <Link key={href} href={href}
                    className={`block px-5 py-2.5 text-[10px] tracking-[0.15em] uppercase transition-colors duration-200 ${dark ? "text-[#444] hover:text-[#C8903A] hover:bg-[#f9f7f5]" : "text-[#F5F0E8]/60 hover:text-[#C8903A] hover:bg-[#161616]"}`}
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {["Destinations", "Experiences", "Inspiration", "About", "Contact"].map(l => (
            <Link key={l} href={l === "Destinations" ? "/tours" : l === "Experiences" ? "/experiences" : l === "About" ? "/about" : l === "Contact" ? "/contact" : "#"}
              className={`text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 ${dark ? "text-[#333]/60 hover:text-[#111]" : "text-white/70 hover:text-white"}`}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >{l}</Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a href="https://wa.me/923339555682" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-[11px] transition-colors duration-300 ${dark ? "text-[#555] hover:text-[#25D366]" : "text-white/60 hover:text-[#25D366]"}`} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            +92 333 9555 682
          </a>
          <Link href="/enquire" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#111] text-white text-[11px] tracking-[0.12em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >Enquire Now</Link>
        </div>

        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          {[0,1,2].map(i => (
            <span key={i} className={`block h-px w-5 transition-all duration-300 ${dark ? "bg-[#111]" : "bg-white"} ${i===0&&menuOpen?"rotate-45 translate-y-[7px]":""} ${i===1&&menuOpen?"opacity-0":""} ${i===2&&menuOpen?"-rotate-45 -translate-y-[7px]":""}`}/>
          ))}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:"auto" }} exit={{ opacity:0,height:0 }}
            className="md:hidden bg-white border-t border-[#eee] px-6 pb-8 pt-6 flex flex-col gap-5"
          >
            {["Destinations","Experiences","Inspiration","About","Contact"].map(l=>(
              <Link key={l} href={l === "Destinations" ? "/tours" : l === "Experiences" ? "/experiences" : l === "About" ? "/about" : l === "Contact" ? "/contact" : "#"} onClick={()=>setMenuOpen(false)} className="text-sm tracking-[0.12em] uppercase text-[#333] hover:text-[#C8903A]" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{l}</Link>
            ))}
            <Link href="/enquire" target="_blank" rel="noopener noreferrer" onClick={()=>setMenuOpen(false)} className="mt-2 text-center px-5 py-3 bg-[#111] text-white text-xs tracking-[0.12em] uppercase" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Enquire Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ══════════════════════════════════════════
   HERO  — centered text, crossfade slideshow bg
══════════════════════════════════════════ */
function Hero({ onVisibilityChange }: { onVisibilityChange: (v: boolean) => void }) {
  const ref = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const [ready, setReady] = useState(false);

  // Crossfade every 5s
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    const id = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 5000);
    return () => { clearTimeout(t); clearInterval(id); };
  }, []);

  // Tell Nav when hero is in view
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => onVisibilityChange(e.isIntersecting), { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [onVisibilityChange]);

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
            <Image src={src} alt="" fill className="object-cover" unoptimized priority={i === 0} />
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
          className="text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] font-light text-white leading-[0.95] mb-6"
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
        >Tailor-made journeys through Pakistan's north. Award-winning service.</motion.p>

        <motion.div
          initial={{ opacity:0, y:14 }} animate={ready?{opacity:1,y:0}:{}} transition={{ delay:0.75, duration:0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="#destinations" className="px-8 py-4 bg-white text-[#111] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#C8903A] hover:text-white transition-colors duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
            Explore Our Trips
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/50 text-white text-[11px] tracking-[0.18em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
            Plan My Trip
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
    <section className="bg-white py-28 lg:py-36 px-6">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-28 items-center">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-6" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Our philosophy</p>
            <h2 className="text-[44px] md:text-[56px] font-light text-[#111] leading-[1.05] mb-7" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>
              Every journey starts<br /><em>with a feeling.</em>
            </h2>
            <p className="text-[#555] text-[15px] leading-relaxed mb-5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              We don't believe in itineraries built from templates. Pakistan's north is too singular, too alive — too full of moments that can't be scheduled. We start with you: your pace, your curiosity, what you want to feel on the other side of the journey.
            </p>
            <p className="text-[#999] text-sm leading-relaxed mb-10" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              Over a decade of journeys through Hunza, Skardu, Chitral and beyond. No two alike. All extraordinary.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 text-[#111] text-[11px] tracking-[0.2em] uppercase font-medium hover:text-[#C8903A] hover:gap-5 transition-all duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              Get In Touch
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none"><path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
          </motion.div>

          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.9, ease:[0.22,1,0.36,1], delay:0.1 }} className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden" style={{ aspectRatio:"3/4" }}>
              <Image src="/feeling-altit-village.jpg" alt="Altit village and fort, Hunza" fill className="object-cover" unoptimized />
            </div>
            <div className="flex flex-col gap-3 pt-10">
              <div className="relative overflow-hidden flex-1">
                <Image src="/feeling-altit-fort.jpg" alt="Altit Fort on rock, Hunza" fill className="object-cover" unoptimized />
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
    <section className="bg-[#F7F5F2] py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 mb-12">
        <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>What our travellers say</p>
        <h2 className="text-[40px] md:text-[48px] font-light text-[#111]" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Real journeys. Real stories.</h2>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-4 px-6 lg:px-10 [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="shrink-0 w-[300px] md:w-[340px] bg-white border border-[#e8e4de] p-7 flex flex-col snap-start">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-5">
              <path d="M0 18V11C0 4.8 3.4 1.2 10.2 0l1.2 2.2C8 3.1 6.5 5 6.1 8H11V18H0ZM13 18V11C13 4.8 16.4 1.2 23.2 0l1.2 2.2C21 3.1 19.5 5 19.1 8H24V18H13Z" fill="#C8903A" fillOpacity="0.2"/>
            </svg>
            <p className="text-[#444] text-[15px] leading-relaxed mb-6 italic flex-1" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>"{t.quote}"</p>
            <div className="pt-5 border-t border-[#eee]">
              <p className="text-[#111] text-sm font-medium" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{t.name}</p>
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

  return (
    <section id="destinations" className="bg-[#1a1a1a] py-0 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-16 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Start your journey</p>
          <h2 className="text-[44px] md:text-[54px] font-light text-white" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Our Signature Experiences</h2>
        </div>
        <div className="flex gap-3 shrink-0">
          <button onClick={()=>scroll("l")} disabled={!canLeft}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${canLeft ? "border-white/30 text-white hover:border-white hover:bg-white hover:text-[#111]" : "border-white/10 text-white/20 cursor-not-allowed"}`}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M14 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </button>
          <button onClick={()=>scroll("r")} disabled={!canRight}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${canRight ? "border-white/30 text-white hover:border-white hover:bg-white hover:text-[#111]" : "border-white/10 text-white/20 cursor-not-allowed"}`}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Cards strip */}
      <div ref={scrollRef} onScroll={onScroll}
        className="flex gap-3 overflow-x-auto px-6 lg:px-10 pb-16 [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
      >
        {DESTINATIONS.map((d, i) => (
          <motion.div key={d.name}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-40px" }}
            transition={{ delay: i*0.06, duration:0.55, ease:[0.22,1,0.36,1] }}
            className="shrink-0 w-[280px] md:w-[320px] group cursor-pointer snap-start"
          >
            <Link href={`/tours/${d.slug}`} className="block relative overflow-hidden" style={{ aspectRatio:"3/4.2" }}>
              <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06] will-change-transform" unoptimized />
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
   FULL BLEED
══════════════════════════════════════════ */
function FullBleed() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start end","end start"] });
  const y = useTransform(scrollYProgress, [0,1], ["-10%","10%"]);
  return (
    <section ref={ref} className="relative h-[65vh] overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-[-10%] will-change-transform">
        <Image src="/fullbleed-golden-mountains.jpg" alt="Golden sunset over northern Pakistan mountains" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>
      <div className="relative z-10 text-center px-6">
        <p className="text-[11px] tracking-[0.5em] uppercase text-white/50 mb-6" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Their future is out there</p>
        <h2 className="text-[56px] md:text-[80px] lg:text-[96px] font-light text-white leading-[0.95] mb-10" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Find <em>it.</em></h2>
        <Link href="/enquire" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-[#111] transition-all duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
          Start planning
        </Link>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   WHAT WE DO — text left, image right, "Watch the film" CTA
══════════════════════════════════════════ */
function WhatWeDo() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[560px]">
        {/* Left — white bg, vertically centered text */}
        <motion.div
          initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
          className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20"
        >
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#111] leading-tight mb-6 uppercase tracking-tight" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
            WHAT WE DO<br />AND WHY WE DO IT
          </h2>
          <p className="text-[#555] text-[15px] leading-relaxed mb-8 max-w-sm" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
            Since our founding in 2014, Auriga Ventures has always been about crafting remarkable, tailor-made trips for families, couples, and private groups through Pakistan's extraordinary north. Our founders know this better than anyone.
          </p>
          <a href="#contact"
            className="inline-flex items-center justify-center w-fit px-7 py-3.5 bg-[#111] text-white text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#C8903A] transition-colors duration-300"
            style={{ fontFamily:"var(--font-inter),sans-serif" }}
          >Watch the Film</a>
        </motion.div>

        {/* Right — full-bleed image */}
        <motion.div
          initial={{ opacity:0, scale:1.04 }} whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true, margin:"-80px" }} transition={{ duration:1, ease:[0.22,1,0.36,1] }}
          className="relative min-h-[420px] lg:min-h-0 overflow-hidden"
        >
          <Image
            src="https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg"
            alt="Auriga founders" fill className="object-cover" unoptimized
          />
          <div className="absolute inset-0 bg-black/10" />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-18 h-18 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-all duration-300 w-16 h-16">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none"><path d="M1 1l16 10L1 21V1z" fill="white" fillOpacity="0.9"/></svg>
            </div>
          </div>
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
    <section className="bg-[#F7F5F2] py-28 lg:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Why Auriga</p>
          <h2 className="text-[44px] md:text-[54px] font-light text-[#111] max-w-2xl mx-auto leading-tight" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>What we do and why we do it.</h2>
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
              <h3 className="text-[14px] font-semibold text-[#111] mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{item.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 pt-12 border-t border-[#e8e4de] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{n:"12+",l:"Routes mapped"},{n:"500+",l:"Journeys completed"},{n:"4,700m",l:"Highest camp"}].map(({n,l})=>(
            <div key={l}>
              <p className="text-[42px] font-light text-[#111] leading-none mb-2" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>{n}</p>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#aaa]" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{l}</p>
            </div>
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
    <section ref={ref} className="bg-white py-28 lg:py-36 overflow-hidden">
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
            <div className="absolute bottom-8 -left-8 w-[56%] z-10 overflow-hidden border-4 border-white shadow-2xl" style={{ aspectRatio:"4/3" }}>
              <Image src="/guide-meadow-landscape.jpg" alt="Alpine meadow in northern Pakistan" fill className="object-cover" sizes="(max-width: 768px) 50vw, 30vw" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.9, ease:[0.22,1,0.36,1], delay:0.1 }}>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-6" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Our guide to luxury travel</p>
            <h2 className="text-[44px] md:text-[52px] font-light text-[#111] leading-[1.06] mb-7" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Luxury isn't a room.<br /><em>It's a feeling.</em></h2>
            <p className="text-[#555] text-[15px] leading-relaxed mb-5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              Imagine waking to the sound of glacial rivers from a canvas tent perched above the Hunza Valley — or hiking in peaceful solitude through Deosai, the world's second-highest plateau, where brown bears roam and the horizon disappears into sky.
            </p>
            <p className="text-[#999] text-sm leading-relaxed mb-10" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              Luxury in Pakistan is not what you find at a five-star city hotel. It's privacy. It's access. It's a guide who has spent his life learning a place so you can feel it fully in a week.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[#111] text-[11px] tracking-[0.2em] uppercase font-medium hover:text-[#C8903A] hover:gap-5 transition-all duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
              Continue reading
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none"><path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PRESS
══════════════════════════════════════════ */
function Press() {
  return (
    <div className="bg-[#F7F5F2] border-y border-[#e8e4de] py-14 px-6">
      <div className="max-w-[1320px] mx-auto">
        <p className="text-center text-[10px] tracking-[0.45em] uppercase text-[#bbb] mb-10" style={{ fontFamily:"var(--font-inter),sans-serif" }}>As featured in</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {["Forbes","Travel + Leisure","Condé Nast","Vogue Pakistan","Dawn"].map(p=>(
            <span key={p} className="text-[#ccc] text-xl font-light tracking-widest hover:text-[#999] transition-colors duration-300 cursor-default" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>{p}</span>
          ))}
        </div>
      </div>
    </div>
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
    <section id="contact" className="bg-white py-28 lg:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-6" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Ready to start?</p>
            <h2 className="text-[44px] md:text-[54px] font-light text-[#111] leading-[1.06] mb-8" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Tell us about<br /><em>your journey.</em></h2>
            <p className="text-[#666] text-[15px] leading-relaxed mb-12" style={{ fontFamily:"var(--font-inter),sans-serif" }}>No obligation. No planning fees. Just a conversation about where you want to go and how you want to feel when you get there.</p>
            <div className="flex flex-col gap-6">
              {[{label:"Email",val:"venturesauriga@gmail.com"},{label:"Phone",val:"+92 333 9555 682"},{label:"Address",val:"River View Road, Chinar Bagh, Gilgit-Baltistan, Pakistan — 15100"}].map(({label,val})=>(
                <div key={label} className="flex items-start gap-4 pb-6 border-b border-[#f0ece6]">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#bbb] w-16 shrink-0 mt-0.5" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{label}</p>
                  <p className="text-[#333] text-sm" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{val}</p>
                </div>
              ))}
            </div>
          </div>
          {done ? (
            <div className="flex flex-col justify-center py-10">
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Message received</p>
              <h3 className="text-[32px] font-light text-[#111] mb-4" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Thank you, {firstName}.</h3>
              <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter),sans-serif" }}>We'll be in touch shortly to start planning your journey.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>First name</label>
                  <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} required className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#C8903A] transition-colors duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Last name</label>
                  <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#C8903A] transition-colors duration-300" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Email</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#C8903A] transition-colors" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Where do you want to go?</label>
                <select value={destination} onChange={e=>setDestination(e.target.value)} className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#555] focus:outline-none focus:border-[#C8903A] transition-colors bg-white" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
                  <option value="">Select a destination</option>
                  {DESTINATIONS.map(d=><option key={d.name}>{d.name}</option>)}
                  <option value="unsure">Not sure yet — help me decide</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Tell us more</label>
                <textarea rows={4} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Group size, dates, special requests…" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] placeholder-[#ccc] focus:outline-none focus:border-[#C8903A] transition-colors resize-none" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
              </div>
              {error && <p className="text-red-500 text-xs" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Something went wrong. Please try again.</p>}
              <button type="submit" disabled={submitting} className="mt-1 w-full py-4 bg-[#111] text-white text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
                {submitting ? "Sending…" : "Start Planning →"}
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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#2a2a2a] py-4 px-6">
      <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[11px] tracking-[0.35em] uppercase text-white/60 shrink-0" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
          Sign up to our newsletter
        </span>
        {done ? (
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#C8903A]" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Thank you — you're signed up!</span>
        ) : (
          <div className="flex gap-0 w-full sm:w-auto">
            <input
              type="email" value={email} onChange={e=>setEmail(e.target.value)}
              placeholder="youremail@example.com"
              className="flex-1 sm:w-72 bg-white border-0 px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none"
              style={{ fontFamily:"var(--font-inter),sans-serif" }}
            />
            <button
              onClick={()=>{ if(email) setDone(true); }}
              className="px-6 py-3 bg-[#111] text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300 shrink-0"
              style={{ fontFamily:"var(--font-inter),sans-serif" }}
            >Sign Up</button>
          </div>
        )}
        <button onClick={()=>setShow(false)} className="text-white/30 hover:text-white/70 transition-colors shrink-0 text-lg leading-none">✕</button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function NewHomePage() {
  const [heroVisible, setHeroVisible] = useState(true);

  return (
    <div className="bg-[#FAFAF8]">
      <Nav heroVisible={heroVisible} />
      <Hero onVisibilityChange={setHeroVisible} />
      <MarqueeStrip />
      <Philosophy />
      <Testimonials />
      <DestCarousel />
      <FullBleed />
      <WhatWeDo />
      <WhyUs />
      <GuideSection />
      <Press />
      <Contact />
      <FooterComponent />
      <Newsletter />
    </div>
  );
}
