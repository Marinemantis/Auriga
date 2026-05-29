"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Destinations", href: "/tours"        },
  { label: "Experiences",  href: "/experiences"  },
  { label: "About",        href: "/about"        },
  { label: "Contact",      href: "#contact"      },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#222222]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1 group">
          <span
            className="font-cormorant text-2xl font-semibold tracking-wide text-[#F5F0E8]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Auriga
          </span>
          <span
            className="font-cormorant text-2xl font-light tracking-wide text-[#C8903A]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Ventures
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-[#F5F0E8]/70 hover:text-[#C8903A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-[#F5F0E8]/70 hover:text-[#C8903A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 border border-[#C8903A] text-[#C8903A] text-sm tracking-widest uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Plan Your Journey
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080808]/98 border-t border-[#222222] px-6 py-6 flex flex-col gap-5">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-[#F5F0E8]/70 hover:text-[#C8903A] transition-colors"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-[#F5F0E8]/70 hover:text-[#C8903A] transition-colors"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 border border-[#C8903A] text-[#C8903A] text-sm tracking-widest uppercase text-center hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Plan Your Journey
          </a>
        </div>
      )}
    </motion.nav>
  );
}
