"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import GrainOverlay from "@/components/roadtrip/GrainOverlay";

const CompassCursor = dynamic(() => import("@/components/roadtrip/CompassCursor"), { ssr: false });
const LoadingCurtain = dynamic(() => import("@/components/roadtrip/LoadingCurtain"), { ssr: false });

/* ─── Destinations data ─── */
const DESTINATIONS = [
  { name: "Hunza",            tagline: "Ancient forts, turquoise lakes, and a sky that never ends.",       price: "$1,300", drive: "18 hrs", image: "/shangri-la.jpg" },
  { name: "Skardu Valley",    tagline: "Where the Karakoram meets silence.",                               price: "$1,300", drive: "22 hrs", image: "/slide-sheosar-lake.jpg" },
  { name: "Ghizer Valley",    tagline: "Pakistan's most unspoiled valley. Still yours to discover.",       price: "$1,800", drive: "14 hrs", image: "/mms-dunsa-valley-tormik.jpg" },
  { name: "Rakaposhi",        tagline: "A trek to the foot of one of Pakistan's great mountains.",         price: "$1,350", drive: "16 hrs", image: "/rakaposhi-moon.jpg" },
  { name: "Chitral",          tagline: "Ancient kingdoms, mountain passes, and the Hindu Kush.",           price: "$1,900", drive: "10 hrs", image: "/dest-chitral.jpg" },
  { name: "Astore Valley",    tagline: "Remote. Serene. The kind of place you don't forget.",              price: "$1,400", drive: "20 hrs", image: "/slide-deosai-glamping.jpg" },
];

/* ─── Deterministic stars (no hydration mismatch) ─── */
const STARS = [
  {x:4,y:3,s:1.5,o:.8},{x:11,y:6,s:1,o:.5},{x:19,y:2,s:2,o:.9},{x:27,y:9,s:1,o:.4},
  {x:35,y:5,s:1.5,o:.7},{x:43,y:2,s:1,o:.6},{x:52,y:7,s:2,o:.8},{x:60,y:4,s:1,o:.5},
  {x:68,y:8,s:1.5,o:.7},{x:76,y:3,s:1,o:.9},{x:83,y:6,s:2,o:.6},{x:90,y:2,s:1,o:.4},
  {x:96,y:7,s:1.5,o:.8},{x:8,y:14,s:1,o:.4},{x:23,y:17,s:1.5,o:.6},{x:38,y:12,s:1,o:.5},
];

/* ════════════════════════════════════════
   SECTION CONTENT DEFINITIONS
   ════════════════════════════════════════ */

function PanelHero({ active }: { active: boolean }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Sky */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, #030608 0%, #0d1826 30%, #1a2a40 52%, #7a5028 68%, #e8a838 80%, #c87020 88%, #1a1a1a 100%)"
      }} />
      {STARS.map((s, i) => (
        <div key={i} style={{
          position:"absolute", left:s.x+"%", top:s.y+"%",
          width:s.s+"px", height:s.s+"px",
          background:"#f5f0e8", borderRadius:"50%", opacity:s.o
        }} />
      ))}
      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height:"42vh", overflow:"hidden" }}>
        <div style={{
          position:"absolute", bottom:0, left:"-60%", right:"-60%", height:"250%",
          transformOrigin:"bottom center",
          backgroundImage:`
            repeating-linear-gradient(to bottom,transparent 0px,transparent 50px,rgba(232,168,56,.85) 50px,rgba(232,168,56,.85) 90px,transparent 90px,transparent 140px),
            linear-gradient(to right,transparent calc(25% - 1.5px),rgba(245,240,232,.6) calc(25% - 1.5px),rgba(245,240,232,.6) 25%,transparent 25%,transparent 75%,rgba(245,240,232,.6) 75%,rgba(245,240,232,.6) calc(75% + 1.5px),transparent calc(75% + 1.5px)),
            #1c1c1c`,
          backgroundSize:"4px 140px,100% 100%,100% 100%",
          animation:"roadApproach 1.3s linear infinite",
        }} />
      </div>
      {/* Text */}
      <div className="relative z-10 text-center px-6">
        <div className="flex flex-wrap justify-center max-w-4xl mb-4">
          {"THE ROAD IS THE DESTINATION".split("").map((ch, i) => (
            <motion.span key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.032, duration: 0.4, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f5f0e8] tracking-widest"
              style={{ fontFamily: "var(--font-playfair)", lineHeight: 1.1 }}
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="text-[#c8d8e8]/60 text-sm tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Every mile a memory. Every horizon a promise.
        </motion.p>
      </div>
      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={active ? { opacity: 1 } : {}} transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0,10,0] }} transition={{ repeat:Infinity, duration:2, ease:"easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#e8a838]/50 to-transparent"
        />
        <span className="text-[8px] tracking-[0.4em] text-[#f5f0e8]/20 uppercase" style={{ fontFamily:"var(--font-dm-mono)" }}>
          SCROLL TO DRIVE
        </span>
      </motion.div>
    </div>
  );
}

function PanelAbout() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-10 md:px-20 overflow-hidden"
      style={{ background: "#0d0d0d" }}
    >
      {/* topo bg */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden>
        <defs>
          <pattern id="topo-a" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60,60 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" stroke="#e8a838" strokeWidth=".8" fill="none"/>
            <path d="M60,60 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" stroke="#e8a838" strokeWidth=".8" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-a)"/>
      </svg>

      <div className="max-w-2xl relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-[#e8a838]/40" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#e8a838]/60" style={{ fontFamily:"var(--font-dm-mono)" }}>Who we are</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-[#f5f0e8] mb-6 leading-tight" style={{ fontFamily:"var(--font-playfair)" }}>
          Pakistan is not a<br/>
          <span className="text-[#e8a838]">destination.</span><br/>
          It's a road trip.
        </h2>
        <p className="text-[#c8d8e8]/50 text-base leading-relaxed mb-4" style={{ fontFamily:"var(--font-dm-mono)" }}>
          Auriga Ventures curates road journeys through Pakistan's northern mountains, Hunza, Skardu, Chitral, and beyond.
          We don't just book trips. We map the routes, time the light, and make sure the car doesn't break down on a pass at 4,700m.
        </p>
        <p className="text-[#c8d8e8]/30 text-sm" style={{ fontFamily:"var(--font-dm-mono)" }}>Small groups. Real roads. No compromises.</p>
        <div className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-[#2a2a2a]">
          {[{n:"12+",l:"Routes mapped"},{n:"6",l:"Destinations"},{n:"4,700m",l:"Highest pass"},{n:"2014",l:"On the road since"}].map(({n,l})=>(
            <div key={l}>
              <p className="text-3xl font-bold text-[#e8a838]" style={{ fontFamily:"var(--font-playfair)" }}>{n}</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#f5f0e8]/25 mt-1" style={{ fontFamily:"var(--font-dm-mono)" }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PanelDestinations() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-8 md:px-16 py-12 overflow-y-auto"
      style={{ background:"#0d0d0d" }}
    >
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-10 bg-[#e8a838]/40"/>
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#e8a838]/60" style={{ fontFamily:"var(--font-dm-mono)" }}>Where the road leads</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8]" style={{ fontFamily:"var(--font-playfair)" }}>Our Destinations</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1">
        {DESTINATIONS.map((d) => (
          <div key={d.name} className="group relative overflow-hidden cursor-pointer" style={{ aspectRatio:"4/3" }}>
            <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-[8px] tracking-[0.3em] uppercase text-[#e8a838]/60 mb-0.5" style={{ fontFamily:"var(--font-dm-mono)" }}>{d.drive} · {d.price}</p>
              <p className="text-sm font-bold text-[#f5f0e8]" style={{ fontFamily:"var(--font-playfair)" }}>{d.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelCTA() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-10 overflow-hidden"
      style={{ background:"#111" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8a838]/20 to-transparent"/>
      <div className="text-center max-w-2xl relative z-10">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#e8a838]/50 mb-8" style={{ fontFamily:"var(--font-dm-mono)" }}>Ready to drive?</p>
        <h2 className="text-5xl md:text-7xl font-bold text-[#f5f0e8] mb-8 leading-tight" style={{ fontFamily:"var(--font-playfair)" }}>
          Your road is<br/>
          <span className="text-[#e8a838]">waiting.</span>
        </h2>
        <p className="text-[#c8d8e8]/40 text-sm mb-12 leading-relaxed" style={{ fontFamily:"var(--font-dm-mono)" }}>
          Plan your journey with Auriga Ventures. Every route, every stop, every memory waiting to be made.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#e8a838] text-[#0d0d0d] text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#f5c050] transition-colors duration-300"
            style={{ fontFamily:"var(--font-dm-mono)" }}
          >
            Explore All Trips
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M0 4h14M10 1l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </a>
          <a href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#e8a838]/30 text-[#f5f0e8]/60 text-xs tracking-[0.2em] uppercase hover:border-[#e8a838]/60 hover:text-[#f5f0e8] transition-all duration-300"
            style={{ fontFamily:"var(--font-dm-mono)" }}
          >
            Book a Route
          </a>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   CAR-WINDOW CAROUSEL
   Vertical scroll drives horizontal panel rotation.
   Each panel sits at rotateY = 0 when active,
   slides left (rotateY → -90) when passed,
   waits right (rotateY → 90) when upcoming.
   ════════════════════════════════════════ */
const PANELS = [PanelHero, PanelAbout, PanelDestinations, PanelCTA];
const N = PANELS.length;

type ScrollProg = ReturnType<typeof useScroll>["scrollYProgress"];

function AnimatedPanel({
  Panel, index, scrollYProgress, active,
}: {
  Panel: (props: { active: boolean }) => React.ReactNode;
  index: number;
  scrollYProgress: ScrollProg;
  active: boolean;
}) {
  const start  = index / N;
  const center = (index + 0.5) / N;
  const end    = (index + 1) / N;

  const rawY = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start, center, end, Math.min(1, end + 0.05)],
    [90, 60, 0, -60, -90]
  );
  const rotateY = useSpring(rawY, { stiffness: 80, damping: 22 });

  const rawOp = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start + 0.05, center, end - 0.05, Math.min(1, end + 0.05)],
    [0, 1, 1, 1, 0]
  );
  const opacity = useSpring(rawOp, { stiffness: 80, damping: 22 });

  const rawX = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start, center, end, Math.min(1, end + 0.05)],
    ["18%", "10%", "0%", "-10%", "-18%"]
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const x = useSpring(rawX as any, { stiffness: 80, damping: 22 });

  return (
    <motion.div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ rotateY, opacity, x, transformStyle: "preserve-3d", backfaceVisibility: "hidden" } as any}
      className="absolute inset-0 will-change-transform"
    >
      <Panel active={active} />
    </motion.div>
  );
}

function CarWindowCarousel({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const [activeIdx, setActiveIdx] = useState(0);
  scrollYProgress.on("change", (v) => {
    setActiveIdx(Math.round(v * (N - 1)));
  });

  return (
    <div ref={ref} style={{ height: `${N * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}>

        {/* Window frame vignette */}
        <div className="absolute inset-0 z-30 pointer-events-none" style={{
          background:"radial-gradient(ellipse 90% 85% at 50% 50%, transparent 60%, #000 100%)",
        }}/>

        {/* Panels — each in its own component so hooks are called at top level */}
        {PANELS.map((Panel, i) => (
          <AnimatedPanel
            key={i}
            Panel={Panel}
            index={i}
            scrollYProgress={scrollYProgress}
            active={active && i === 0}
          />
        ))}

        {/* Dot nav */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
          {PANELS.map((_, i) => (
            <div key={i} className={`w-1.5 rounded-full transition-all duration-300 ${i === activeIdx ? "h-6 bg-[#e8a838]" : "h-1.5 bg-[#f5f0e8]/20"}`}/>
          ))}
        </div>

        {/* A-pillar lines */}
        <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-[#2a2a2a]/60 to-transparent z-20 pointer-events-none"/>
        <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-[#2a2a2a]/60 to-transparent z-20 pointer-events-none"/>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   PAGE
   ════════════════════════════════════════ */
export default function RoadtripPage() {
  const [curtainDone, setCurtainDone] = useState(false);

  return (
    <main className="bg-[#0d0d0d] cursor-none">
      <GrainOverlay />
      <CompassCursor />
      {!curtainDone && <LoadingCurtain onDone={() => setCurtainDone(true)} />}
      <CarWindowCarousel active={curtainDone} />

      <style>{`
        @keyframes roadApproach {
          from { background-position: 0 0, 0 0, 0 0; }
          to   { background-position: 0 140px, 0 0, 0 0; }
        }
      `}</style>
    </main>
  );
}
