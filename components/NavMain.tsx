"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Destinations", href: "/tours"       },
  { label: "Experiences",  href: "/experiences"  },
  { label: "About",        href: "/about"        },
  { label: "Contact",      href: "/contact"      },
];

const PAKISTAN_LINKS = [
  ["About Pakistan",        "/pakistan/about"          ],
  ["Pakistan Visa Help",    "/pakistan/visa"           ],
  ["Mountain Passes",       "/pakistan/mountain-passes"],
  ["Festivals of Pakistan", "/pakistan/festivals"      ],
];

// darkPage=true  → solid bg becomes dark  (#080808) — tours, experiences, about
// darkPage=false → solid bg becomes white            — homepage, tour detail
export default function NavMain({ darkPage = false }: { darkPage?: boolean }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // bg classes when scrolled
  const solidBg = darkPage
    ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#1A1A1A]"
    : "bg-white shadow-[0_1px_0_0_#e8e4de]";

  // text is "light" when white bg is showing
  const light = scrolled && !darkPage;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? solidBg : "bg-transparent"}`}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1 shrink-0">
          <span
            className={`text-[22px] font-semibold tracking-wide transition-colors duration-500 ${light ? "text-[#111]" : "text-white"}`}
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >Auriga</span>
          <span className="text-[22px] font-light text-[#C8903A]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Ventures</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">

          {/* Pakistan dropdown */}
          <div className="relative group">
            <span
              className={`flex items-center gap-1 cursor-default text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 select-none ${light ? "text-[#333]/60 group-hover:text-[#111]" : "text-white/70 group-hover:text-white"}`}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Pakistan
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className="transition-transform duration-200 group-hover:rotate-180">
                <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className={`w-52 border shadow-xl py-1.5 ${light ? "bg-white border-[#e8e4de]" : "bg-[#0d0d0d] border-[#222]"}`}>
                {PAKISTAN_LINKS.map(([label, href]) => (
                  <Link key={href} href={href}
                    className={`block px-5 py-2.5 text-[10px] tracking-[0.15em] uppercase transition-colors duration-200 ${light ? "text-[#444] hover:text-[#C8903A] hover:bg-[#f9f7f5]" : "text-[#F5F0E8]/60 hover:text-[#C8903A] hover:bg-[#161616]"}`}
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >{label}</Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className={`text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 ${light ? "text-[#333]/60 hover:text-[#111]" : "text-white/70 hover:text-white"}`}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >{l.label}</Link>
          ))}
        </nav>

        {/* Desktop right — WhatsApp + CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://wa.me/923339555682" target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-[11px] transition-colors duration-300 ${light ? "text-[#555] hover:text-[#25D366]" : "text-white/60 hover:text-[#25D366]"}`}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +92 333 9555 682
          </a>
          <Link href="/enquire" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#111] text-white text-[11px] tracking-[0.12em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >Enquire Now</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`block h-px w-5 transition-all duration-300 ${light ? "bg-[#111]" : "bg-white"} ${i===0&&menuOpen?"rotate-45 translate-y-[7px]":""} ${i===1&&menuOpen?"opacity-0":""} ${i===2&&menuOpen?"-rotate-45 -translate-y-[7px]":""}`} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t border-[#eee] px-6 pb-8 pt-6 flex flex-col gap-5 overflow-hidden"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#bbb]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Pakistan</p>
            {PAKISTAN_LINKS.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.12em] uppercase text-[#777] hover:text-[#C8903A] pl-3 border-l border-[#eee] transition-colors"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >{label}</Link>
            ))}
            <div className="h-px bg-[#eee]" />
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.12em] uppercase text-[#333] hover:text-[#C8903A] transition-colors"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >{l.label}</Link>
            ))}
            <Link href="/enquire" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 bg-[#111] text-white text-xs tracking-[0.12em] uppercase hover:bg-[#C8903A] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >Enquire Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
