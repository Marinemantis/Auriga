"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const FESTIVALS = [
  {
    name: "Chilam Joshi",
    subtitle: "Spring Festival of the Kalash",
    month: "May",
    location: "Kalash Valleys, Chitral",
    duration: "3 days",
    description: "The most celebrated of the Kalash festivals, Chilam Joshi marks the arrival of spring with three days of dancing, music, ritual purification, and offerings of milk to the gods. Women in their spectacular hand-embroidered black robes and elaborate headdresses fill the valley with colour and song. This is one of the most extraordinary cultural spectacles anywhere in South Asia — and one of the rarest, preserved by a community of just a few thousand people.",
    highlights: ["Traditional Kalash dance and music", "Ritual purification ceremonies", "Intricate traditional dress and jewellery", "Community feasting and offerings"],
    image: "/dest-chitral.jpg",
    tag: "Cultural",
  },
  {
    name: "Shandur Polo Festival",
    subtitle: "The World's Highest Polo Ground",
    month: "July",
    location: "Shandur Pass, Chitral / Ghizer",
    duration: "3 days",
    description: "Every July, two teams from Gilgit and Chitral take to the world's highest polo ground at 3,734 metres, continuing a rivalry that stretches back centuries. This is polo in its original, untamed form — no helmets, no rules, just horsemanship at its rawest and most spectacular. The festival also features music, folk dancing, and the chance to experience one of Pakistan's most remote high plateaus alive with celebration.",
    highlights: ["Free-style traditional polo matches", "Gilgit vs Chitral rivalry — centuries old", "Folk music and traditional dance", "3,734m — spectacular mountain setting"],
    image: "/slide-deosai-glamping.jpg",
    tag: "Sport & Culture",
  },
  {
    name: "Hunza Blossom Festival",
    subtitle: "When the Valley Blooms",
    month: "March – April",
    location: "Hunza Valley, Gilgit-Baltistan",
    duration: "Multiple weeks",
    description: "For a few magical weeks each spring, the entire Hunza Valley transforms into a canvas of pink and white as cherry, apricot, and peach orchards burst into blossom against the backdrop of snow-capped Karakoram peaks. Local festivals, cultural programmes, and guided blossom walks celebrate the season's arrival. This is one of the most photographed spectacles in Pakistan — and one of the most emotionally affecting.",
    highlights: ["Cherry and apricot orchards in full bloom", "Cultural programmes and local music", "Guided orchard walks with local families", "Dramatic backdrop of Rakaposhi and Ultar Sar"],
    image: "/rof-hunza-apricots.jpg",
    tag: "Nature & Culture",
  },
  {
    name: "Choimus — Kalash Winter Festival",
    subtitle: "The Longest Kalash Celebration",
    month: "December",
    location: "Kalash Valleys, Chitral",
    duration: "15 days",
    description: "The grandest of all Kalash festivals, Choimus is a two-week winter celebration involving elaborate purification rituals, the slaughter of goats as offerings, ceremonial bonfires, dancing through the night, and the welcoming of ancestral spirits back into the community. It is a festival of extraordinary spiritual depth, celebrated by one of the world's most unique indigenous communities — and increasingly recognised as a precious piece of living human heritage.",
    highlights: ["15-day festival — longest Kalash celebration", "Ceremonial bonfires and night dancing", "Ancestral spirit welcoming rituals", "Community feasting and sacrifice"],
    image: "/dest-chitral.jpg",
    tag: "Cultural",
  },
  {
    name: "Mayfung Fire Festival",
    subtitle: "Fire in the Karakoram",
    month: "February",
    location: "Skardu, Gilgit-Baltistan",
    duration: "1 day",
    description: "A dramatic mid-winter celebration unique to the Baltistan region, the Mayfung Fire Festival sees communities light ceremonial fires across hillsides and village squares, illuminating the dark winter mountains with a thousand points of flame. The festival marks the passage of winter and the coming warmth, celebrated with traditional Balti music, storytelling, and communal gathering.",
    highlights: ["Ceremonial fires lit across mountainsides", "Traditional Balti music and dance", "Mid-winter celebration unique to Baltistan", "Spectacular visual spectacle after dark"],
    image: "/dest-skardu.jpg",
    tag: "Cultural",
  },
  {
    name: "Hindukush Snow Festival",
    subtitle: "Winter in the Hindu Kush",
    month: "February",
    location: "Madaklasht, Chitral",
    duration: "3 days",
    description: "Set against the backdrop of the Hindu Kush in the remote Madaklasht Valley near Chitral, this winter festival celebrates the season's harshest months with ski competitions, snow sports, traditional music, and cultural programmes. It brings together the mountain communities of Chitral in one of the most scenically dramatic winter settings in Pakistan.",
    highlights: ["Snow sports and ski competitions", "Traditional Chitrali music and dance", "Madaklasht Valley — dramatic Hindu Kush setting", "February — deep winter atmosphere"],
    image: "/mms-minimarg-astore.jpg",
    tag: "Sport & Culture",
  },
  {
    name: "Shimshal Kuch Festival",
    subtitle: "The Herders' Return",
    month: "October",
    location: "Shimshal Valley, Gilgit-Baltistan",
    duration: "2 days",
    description: "One of Pakistan's most remote and authentic cultural festivals, the Shimshal Kuch celebrates the return of herders and their yaks from the high summer pastures. The valley erupts in music, dancing, and communal celebration as the animals are brought back down from some of the highest grazing grounds in the world. Reaching Shimshal requires a dedicated journey — which only adds to the festival's rare, unspoiled character.",
    highlights: ["Return of yak herds from high-altitude pastures", "Traditional Wakhi music and dance", "Remote valley — genuine community festival", "One of Pakistan's most authentic cultural events"],
    image: "/rof-borith-lake.jpg",
    tag: "Cultural",
  },
  {
    name: "Lok Mela",
    subtitle: "Pakistan's National Folk Festival",
    month: "October – November",
    location: "Islamabad",
    duration: "5 days",
    description: "Pakistan's premier national folk festival, held annually in Islamabad, brings together artisans, musicians, dancers, and storytellers from every province and community. It is the most accessible and comprehensive window into Pakistan's extraordinary cultural diversity — a single location where the embroidery of Sindh, the woodcarving of Swat, the truck art of Punjab, and the music of Balochistan all exist in one glorious, loud, and joyful celebration.",
    highlights: ["All-Pakistan cultural representation", "Traditional crafts, textiles, and food", "Music and dance from every province", "Accessible from Islamabad — ideal for new visitors"],
    image: "/slide-sheosar-lake.jpg",
    tag: "National Festival",
  },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
                  <Link href="/" className="flex items-center">
            <Image src="/auriga-logo.png" alt="Auriga Ventures" height={60} width={69} className="object-contain" />
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

export default function FestivalsPage() {
  return (
    <div className="bg-[#080808] text-[#F5F0E8] min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[540px] flex items-end overflow-hidden pt-[72px]">
        <div className="absolute inset-0">
          <Image src="/slide-deosai-glamping.jpg" alt="Festival celebrations in northern Pakistan" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/20 via-[#080808]/30 to-[#080808]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Celebrate at the roof of the world
          </motion.p>
          <div style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[60px] md:text-[84px] lg:text-[100px] font-light text-[#F5F0E8] leading-[1]">
                Festivals of
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[60px] md:text-[84px] lg:text-[100px] font-light text-[#C8903A] leading-[1]">
                Pakistan
              </motion.h1>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-[#F5F0E8]/50 text-base md:text-lg mt-6 max-w-xl" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            From ancient Kalash ceremonies to high-altitude polo on the world's greatest playing field — Pakistan's festivals are unlike anything else on Earth.
          </motion.p>
        </div>
      </section>

      {/* Festival calendar strip */}
      <div className="bg-[#0d0d0d] border-y border-[#1a1a1a] overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex gap-0 divide-x divide-[#1a1a1a] min-w-max">
            {[
              { month: "Feb", festivals: "Mayfung · Hindukush Snow" },
              { month: "Mar–Apr", festivals: "Hunza Blossom" },
              { month: "May", festivals: "Chilam Joshi" },
              { month: "Jul", festivals: "Shandur Polo" },
              { month: "Oct", festivals: "Shimshal Kuch · Lok Mela" },
              { month: "Dec", festivals: "Choimus" },
            ].map(({ month, festivals }) => (
              <div key={month} className="py-5 px-6 text-center">
                <p className="text-[#C8903A] text-[11px] tracking-[0.3em] uppercase mb-1" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{month}</p>
                <p className="text-[#F5F0E8]/40 text-[11px]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{festivals}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Festivals grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {FESTIVALS.map((festival, i) => (
              <motion.article key={festival.name}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.07, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#0e0e0e] border border-[#1a1a1a] overflow-hidden hover:border-[#C8903A]/30 transition-colors duration-500">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image src={festival.image} alt={`${festival.name} — ${festival.location}`} fill className="object-cover transition-transform duration-700 hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/90 via-[#0e0e0e]/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-[8px] tracking-[0.3em] uppercase text-[#C8903A] bg-[#080808]/80 px-3 py-1.5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{festival.tag}</span>
                    <span className="text-[8px] tracking-[0.3em] uppercase text-[#F5F0E8]/60 bg-[#080808]/80 px-3 py-1.5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{festival.month}</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]/40 bg-[#080808]/70 px-3 py-1.5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{festival.duration}</span>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-[9px] tracking-[0.35em] uppercase text-[#C8903A]/70 mb-2" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{festival.location}</p>
                  <h2 className="text-[26px] font-light text-[#F5F0E8] mb-1" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{festival.name}</h2>
                  <p className="text-[13px] italic text-[#F5F0E8]/40 mb-4" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>{festival.subtitle}</p>
                  <p className="text-[#F5F0E8]/50 text-[13px] leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{festival.description}</p>
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#1a1a1a]">
                    {festival.highlights.map(h => (
                      <div key={h} className="flex items-start gap-2">
                        <span className="text-[#C8903A] text-xs shrink-0 mt-0.5">◇</span>
                        <p className="text-[#F5F0E8]/40 text-[11px] leading-snug" style={{ fontFamily: "var(--font-inter),sans-serif" }}>{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/slide-deosai-jeep.jpg" alt="Pakistan festival journey" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#080808]/75" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Time your journey perfectly</p>
          <h2 className="text-[48px] md:text-[64px] font-light text-[#F5F0E8] leading-[1.0] mb-8" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            Experience a festival<br /><em>with Auriga.</em>
          </h2>
          <p className="text-[#F5F0E8]/45 text-[15px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            We design bespoke journeys timed to coincide with Pakistan's most extraordinary cultural events — so you don't just visit a festival, you experience it from the inside.
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
