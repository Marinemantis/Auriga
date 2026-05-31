"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const PASSES = [
  {
    name: "Khunjerab Pass",
    altitude: "4,693m",
    region: "Gilgit-Baltistan",
    season: "May – November",
    difficulty: "Easy (paved road)",
    description: "The crown of the Karakoram Highway — the highest paved international border crossing on Earth. Where Pakistan meets China at the edge of the sky. Standing here, between two mountain ranges, two nations, and two civilisations, is an experience of profound, almost surreal scale. The plateau at the top is vast and windswept, home to grazing Marco Polo sheep and a silence broken only by the wind.",
    highlights: ["Highest paved border crossing on Earth", "Marco Polo sheep in their natural habitat", "Karakoram Highway's greatest landmark", "Dramatic drive from Sost through the Hunza Valley"],
    image: "/rof-passu-cones.jpg",
    slug: "khunjerab",
  },
  {
    name: "Babusar Pass",
    altitude: "4,173m",
    region: "Khyber Pakhtunkhwa / Gilgit-Baltistan",
    season: "June – October",
    difficulty: "Moderate (partly unpaved)",
    description: "The dramatic gateway between Naran Valley and Chilas, connecting the lush valleys of Kaghan with the stark grandeur of the Karakoram. The road spirals upward through meadows carpeted in wildflowers before cresting a ridge that offers one of the most breathtaking panoramas in all of Pakistan — an ocean of mountains in every direction, with Nanga Parbat dominating the northern horizon.",
    highlights: ["Gateway between Kaghan Valley and Gilgit", "Wildflower meadows below the pass", "Nanga Parbat views from the summit plateau", "Seasonal closure due to snow — confirm before travelling"],
    image: "/mms-deosai-national-park.jpg",
    slug: "babusar",
  },
  {
    name: "Shandur Pass",
    altitude: "3,734m",
    region: "Chitral / Ghizer Valley",
    season: "May – October",
    difficulty: "Easy (mostly paved)",
    description: "Known as the Roof of the World — not for its altitude, but for its extraordinary setting. A vast, flat plateau ringed by snow-capped peaks, home to the world's highest polo ground. Every July, the Shandur Polo Festival ignites this remote highland with tribal competition, music, and centuries of tradition. Even without the festival, the plateau's scale and silence are unlike anything else in Pakistan.",
    highlights: ["World's highest polo ground at 3,734m", "Annual Shandur Polo Festival (July)", "Connects Chitral to Ghizer Valley", "Gateway to Phunder and Yasin beyond"],
    image: "/slide-deosai-glamping.jpg",
    slug: "shandur",
  },
  {
    name: "Lowari Pass",
    altitude: "3,118m",
    region: "Dir / Chitral",
    season: "Year-round (tunnel) / May–Oct (road)",
    difficulty: "Easy (tunnel available)",
    description: "The historic gateway between Dir and the mystical Chitral Valley. For decades, Lowari Pass was one of Pakistan's most challenging road crossings — snowbound for six months a year, accessible only on foot or by jeep when conditions allowed. The Lowari Tunnel now provides year-round access, but the original pass road remains open in summer for those who seek the old-fashioned way into Chitral.",
    highlights: ["Gateway to Chitral and the Kalash Valleys", "Lowari Tunnel provides year-round access", "Historic route on the ancient trade road to Central Asia", "Dramatic views over Dir Valley on the descent"],
    image: "/dest-chitral.jpg",
    slug: "lowari",
  },
  {
    name: "Broghil Pass",
    altitude: "3,804m",
    region: "Chitral / Wakhan Corridor",
    season: "June – September",
    difficulty: "Challenging (remote, 4WD required)",
    description: "One of the most remote and least-visited high passes in all of Pakistan, Broghil sits at the ancient junction of three countries — Pakistan, Afghanistan, and Tajikistan — in the wild Wakhan Corridor. An ancient Silk Road pass used for centuries by caravans connecting China with Central Asia, it remains today exactly as it has been for millennia: a windswept, sky-touching wilderness of extraordinary beauty.",
    highlights: ["Ancient Silk Road crossing point", "Access to the Wakhan Corridor", "Extreme remoteness — very few visitors", "Spectacular high-altitude wetlands and wildlife"],
    image: "/mms-minimarg-astore.jpg",
    slug: "broghil",
  },
  {
    name: "Deosai Plateau",
    altitude: "4,114m",
    region: "Astore / Skardu",
    season: "June – September",
    difficulty: "Easy (jeep road)",
    description: "Not a mountain pass in the traditional sense, but a passage through the sky. Deosai — Land of the Giants — is the world's second-highest plateau, a vast golden expanse of rolling meadows, crystal rivers, and sweeping silence. The road crosses the plateau at over 4,000 metres, connecting Skardu to Astore across a landscape so vast and open it rewires your sense of scale entirely. The Himalayan brown bear roams these plains freely.",
    highlights: ["World's second highest plateau", "Himalayan brown bears in the wild", "Sheosar Lake — a turquoise jewel at 4,114m", "Overnight glamping on the plateau available"],
    image: "/slide-sheosar-lake.jpg",
    slug: "deosai",
  },
  {
    name: "Mintaka Pass",
    altitude: "4,709m",
    region: "Upper Hunza / Xinjiang",
    season: "July – September (trekking only)",
    difficulty: "Strenuous (trekking only)",
    description: "One of the oldest trade passes on the Silk Road, Mintaka was the ancient commercial link between Hunza and the Chinese province of Xinjiang. Marco Polo may have crossed near here. Today it is accessible only by trekking — a demanding multi-day route through spectacular Karakoram terrain — but for those who make the effort, it offers a journey through layers of history and into a landscape unchanged for centuries.",
    highlights: ["Ancient Silk Road crossing", "Possible route of Marco Polo (1273 AD)", "Exceptional Karakoram wilderness trekking", "Very few visitors — genuine frontier exploration"],
    image: "/hunza-lady-finger.jpg",
    slug: "mintaka",
  },
  {
    name: "Zagar An Pass",
    altitude: "5,000m",
    region: "Gilgit-Baltistan",
    season: "July – August",
    difficulty: "Very strenuous (high altitude trek)",
    description: "A dramatic high-altitude traverse connecting remote valleys of Gilgit-Baltistan at 5,000 metres, the Zagar An Pass rewards experienced trekkers with sweeping views over the Karakoram that few people ever see. This is true mountain wilderness — technically demanding, altitude-challenged, and utterly spectacular. A route for the serious explorer.",
    highlights: ["5,000m — serious altitude acclimatisation required", "Remote Karakoram wilderness", "Outstanding mountain panoramas", "Part of multi-day trekking circuits"],
    image: "/mms-skardu-mountain-cliff.jpg",
    slug: "zagar-an",
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
          style={{ fontFamily: "var(--font-inter),sans-serif" }}>Enquire Now</Link>
      </div>
    </header>
  );
}

export default function MountainPassesPage() {
  return (
    <div className="bg-[#080808] text-[#F5F0E8] min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[540px] flex items-end overflow-hidden pt-[72px]">
        <div className="absolute inset-0">
          <Image src="/fullbleed-golden-mountains.jpg" alt="Mountain passes of Pakistan — golden peaks at sunset" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/20 via-[#080808]/30 to-[#080808]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Where roads touch the clouds
          </motion.p>
          <div style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[60px] md:text-[84px] lg:text-[104px] font-light text-[#F5F0E8] leading-[1]">
                Mountain
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[60px] md:text-[84px] lg:text-[104px] font-light text-[#C8903A] leading-[1]">
                Passes
              </motion.h1>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-[#F5F0E8]/50 text-base md:text-lg mt-6 max-w-xl" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Pakistan holds some of the world's highest, most dramatic, and most historically significant mountain crossings. Here is your guide.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#F5F0E8]/50 text-[16px] leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Pakistan's mountain passes are more than geographic crossings — they are portals through time. These are the routes of Silk Road merchants, Mughal armies, and colonial expeditions. Today they offer travellers some of the most spectacular high-altitude experiences on Earth, from the paved summit of Khunjerab to the ancient wilderness of Mintaka.
          </p>
        </div>
      </section>

      {/* Passes grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
          {PASSES.map((pass, i) => (
            <motion.article key={pass.slug}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`} style={{ aspectRatio: "16/10" }}>
                <Image src={pass.image} alt={`${pass.name} — Pakistan mountain pass at ${pass.altitude}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-[#C8903A] text-[28px] font-light" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{pass.altitude}</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]/50 self-end mb-1" style={{ fontFamily: "var(--font-inter),sans-serif" }}>elevation</span>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <p className="text-[9px] tracking-[0.35em] uppercase text-[#C8903A] mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{pass.region}</p>
                <h2 className="text-[36px] md:text-[44px] font-light text-[#F5F0E8] leading-tight mb-4" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{pass.name}</h2>
                <div className="flex flex-wrap gap-4 mb-5">
                  <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 mb-1" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Season</p>
                    <p className="text-[12px] text-[#F5F0E8]/70" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{pass.season}</p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 mb-1" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Difficulty</p>
                    <p className="text-[12px] text-[#F5F0E8]/70" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{pass.difficulty}</p>
                  </div>
                </div>
                <p className="text-[#F5F0E8]/50 text-[14px] leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{pass.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {pass.highlights.map(h => (
                    <div key={h} className="flex items-start gap-2">
                      <span className="text-[#C8903A] text-xs shrink-0 mt-0.5">◇</span>
                      <p className="text-[#F5F0E8]/45 text-[11px] leading-snug" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Cross these passes with us</p>
          <h2 className="text-[44px] md:text-[56px] font-light text-[#F5F0E8] leading-[1.0] mb-6" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            The road to the top<br /><em>starts here.</em>
          </h2>
          <p className="text-[#F5F0E8]/40 text-[15px] leading-relaxed mb-10 max-w-md mx-auto" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Auriga Ventures designs bespoke journeys across Pakistan's greatest mountain passes — fully supported, expertly guided, and unforgettable.
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
