"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";


export default function ContactPage() {
  const [name,          setName]          = useState("");
  const [email,         setEmail]         = useState("");
  const [confirmEmail,  setConfirmEmail]  = useState("");
  const [phone,         setPhone]         = useState("");
  const [subject,       setSubject]       = useState("");
  const [message,       setMessage]       = useState("");
  const [submitting,    setSubmitting]    = useState(false);
  const [done,          setDone]          = useState(false);
  const [error,         setError]         = useState(false);
  const [emailMismatch, setEmailMismatch] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEmailMismatch(false);
    if (email !== confirmEmail) {
      setEmailMismatch(true);
      return;
    }
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/contact-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8]">

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo variant="light" className="h-7 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Destinations", href: "/tours"    },
              { label: "About",        href: "/about"    },
              { label: "Contact",      href: "/contact"  },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[11px] tracking-[0.25em] uppercase text-[#F5F0E8]/60 hover:text-[#C8903A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter),sans-serif" }}
              >{l.label}</Link>
            ))}
          </nav>
          <Link href="/enquire" target="_blank" rel="noopener noreferrer"
            className="hidden md:block px-5 py-2.5 border border-[#C8903A] text-[#C8903A] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter),sans-serif" }}
          >Plan Your Journey</Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/shangri-la.jpg" alt="Shangri-La lake at night, Pakistan" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-[#080808]/30 to-[#080808]/90" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-4"
            style={{ fontFamily: "var(--font-inter),sans-serif" }}
          >
            Get In Touch
          </motion.p>
          <div style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }} animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[64px] md:text-[88px] lg:text-[108px] font-light text-[#F5F0E8] leading-[1]"
              >
                Begin the
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }} animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[64px] md:text-[88px] lg:text-[108px] font-light text-[#C8903A] leading-[1]"
              >
                Conversation.
              </motion.h1>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-[#F5F0E8]/45 text-base md:text-lg mt-6 max-w-md"
            style={{ fontFamily: "var(--font-inter),sans-serif" }}
          >
            No obligation. No planning fees. Just a conversation about where you want to go.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      {done ? (
        <motion.section
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 lg:px-10 py-28 text-center"
        >
          <div className="w-16 h-px bg-[#C8903A] mx-auto mb-10" />
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Message sent</p>
          <h2 className="text-[52px] md:text-[68px] font-light text-[#F5F0E8] leading-[1.0] mb-6" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
            Thank you,<br /><em>{name.split(" ")[0]}.</em>
          </h2>
          <p className="text-[#F5F0E8]/40 text-[15px] leading-relaxed max-w-md mx-auto mb-10" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            We've received your message and will be in touch shortly at {email}.
          </p>
          <Link href="/" className="inline-block px-8 py-4 border border-[#C8903A]/40 text-[#C8903A] text-[11px] tracking-[0.25em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
            Return home
          </Link>
        </motion.section>
      ) : (
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">

            {/* ── Left: Contact info ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between"
            >
              <div>
                <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-8" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                  Contact Details
                </p>

                <div className="flex flex-col gap-0 divide-y divide-[#1a1a1a]">
                  {/* Email */}
                  <div className="py-6">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-2" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Email</p>
                    <a href="mailto:hello@aurigaventure.com" className="text-[#F5F0E8]/80 hover:text-[#C8903A] transition-colors text-[15px]" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                      hello@aurigaventure.com
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="py-6">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-2" style={{ fontFamily: "var(--font-inter),sans-serif" }}>WhatsApp / Phone</p>
                    <a href="https://wa.me/923339555682" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#F5F0E8]/80 hover:text-[#25D366] transition-colors text-[15px]"
                      style={{ fontFamily: "var(--font-inter),sans-serif" }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      +92 333 9555 682
                    </a>
                  </div>

                  {/* Location */}
                  <div className="py-6">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-2" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Address</p>
                    <p className="text-[#F5F0E8]/80 text-[15px] leading-relaxed" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                      Auriga Ventures (Pvt) Limited<br />
                      River View Road, Chinar Bagh<br />
                      Gilgit-Baltistan, Pakistan — 15100
                    </p>
                  </div>

                  {/* Social */}
                  <div className="py-6">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Connect With Us</p>
                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/aurigaventures/" target="_blank" rel="noopener noreferrer"
                        className="text-[#F5F0E8]/40 hover:text-[#C8903A] transition-colors duration-300" aria-label="Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                      <a href="https://www.facebook.com/people/AurigaVentures/61576182084718/" target="_blank" rel="noopener noreferrer"
                        className="text-[#F5F0E8]/40 hover:text-[#C8903A] transition-colors duration-300" aria-label="Facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/auriga-ventures-b04192362/" target="_blank" rel="noopener noreferrer"
                        className="text-[#F5F0E8]/40 hover:text-[#C8903A] transition-colors duration-300" aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
                className="mt-10 pt-10 border-t border-[#1a1a1a]"
              >
                <p className="text-[#F5F0E8]/25 text-xl italic leading-relaxed" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                  &ldquo;Every great journey starts with a single conversation.&rdquo;
                </p>
              </motion.blockquote>
            </motion.div>

            {/* ── Right: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Send Us A Message
              </p>
              <p className="text-[#F5F0E8]/40 text-[14px] leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                Complete the form below to tell us about your trip. We'll review your preferences and be in touch shortly to help you start planning your journey.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-7">

                {/* Name */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/35 mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Full Name <span className="text-[#C8903A]/60">*</span>
                  </label>
                  <input
                    type="text" required value={name} onChange={e => setName(e.target.value)}
                    placeholder="e.g. Danial Adam"
                    className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none focus:border-[#C8903A] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter),sans-serif" }}
                  />
                </div>

                {/* Email + Retype Email */}
                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/35 mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                      Email Address <span className="text-[#C8903A]/60">*</span>
                    </label>
                    <input
                      type="email" required value={email} onChange={e => { setEmail(e.target.value); setEmailMismatch(false); }}
                      placeholder="you@example.com"
                      className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none focus:border-[#C8903A] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-inter),sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/35 mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                      Retype Email Address <span className="text-[#C8903A]/60">*</span>
                    </label>
                    <input
                      type="email" required value={confirmEmail} onChange={e => { setConfirmEmail(e.target.value); setEmailMismatch(false); }}
                      placeholder="you@example.com"
                      className={`w-full bg-transparent border-b py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none transition-colors duration-300 ${emailMismatch ? "border-red-500/60" : "border-[#2a2a2a] focus:border-[#C8903A]"}`}
                      style={{ fontFamily: "var(--font-inter),sans-serif" }}
                    />
                    {emailMismatch && (
                      <p className="text-red-400/70 text-[10px] mt-2 tracking-wider" style={{ fontFamily: "var(--font-inter),sans-serif" }}>Emails do not match</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/35 mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder="e.g. +92 000 000 0000"
                    className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none focus:border-[#C8903A] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter),sans-serif" }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/35 mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Subject
                  </label>
                  <input
                    type="text" value={subject} onChange={e => setSubject(e.target.value)}
                    placeholder="What is your enquiry about?"
                    className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none focus:border-[#C8903A] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter),sans-serif" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/35 mb-3" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Message <span className="text-[#C8903A]/60">*</span>
                  </label>
                  <textarea
                    required rows={5} value={message} onChange={e => setMessage(e.target.value)}
                    placeholder="Tell us what's on your mind…"
                    className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none focus:border-[#C8903A] transition-colors duration-300 resize-none"
                    style={{ fontFamily: "var(--font-inter),sans-serif" }}
                  />
                </div>

                {error && (
                  <p className="text-red-400/70 text-[11px] tracking-wider" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit" disabled={submitting}
                  className="mt-2 w-full py-5 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#d4a34d] active:scale-[0.99] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-inter),sans-serif" }}
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </motion.div>

          </div>
        </section>
      )}

      <Footer />

    </div>
  );
}
