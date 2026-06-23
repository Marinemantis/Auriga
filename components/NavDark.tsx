"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Destinations", href: "/tours"       },
  { label: "Experiences",  href: "/experiences"  },
  { label: "About",        href: "/about"        },
  { label: "Contact",      href: "/#contact"     },
];

export default function NavDark() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-baseline gap-1 shrink-0">
          <span className="text-2xl font-semibold text-[#F5F0E8]" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Auriga</span>
          <span className="text-2xl font-light text-[#C8903A]"    style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>Ventures</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                pathname === l.href ? "text-[#C8903A]" : "text-[#F5F0E8]/55 hover:text-[#C8903A]"
              }`}
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/#contact"
            className="hidden md:inline-flex px-5 py-2.5 border border-[#C8903A] text-[#C8903A] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter),sans-serif" }}
          >Plan Your Journey</Link>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-[#F5F0E8] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#F5F0E8] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#F5F0E8] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#080808]/98 border-t border-[#1A1A1A] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={`text-sm tracking-[0.2em] uppercase transition-colors ${
                    pathname === l.href ? "text-[#C8903A]" : "text-[#F5F0E8]/60 hover:text-[#C8903A]"
                  }`}
                  style={{ fontFamily: "var(--font-inter),sans-serif" }}
                >{l.label}</Link>
              ))}
              <Link href="/#contact" onClick={() => setOpen(false)}
                className="mt-2 text-center px-5 py-3.5 border border-[#C8903A] text-[#C8903A] text-sm tracking-[0.2em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >Plan Your Journey</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
