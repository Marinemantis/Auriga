"use client";
import { useRef, useState, use, FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTour, TOURS } from "@/lib/tours";
import PriceDisplay from "@/components/PriceDisplay";
import Footer from "@/components/Footer";

export default function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const tour = getTour(slug);
  if (!tour) notFound();

  const heroRef     = useRef<HTMLElement>(null);
  const [imgIdx, setImgIdx] = useState(0);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const related = TOURS.filter(t => tour.relatedSlugs.includes(t.slug));

  const [menuOpen, setMenuOpen] = useState(false);

  const [formName,    setFormName]    = useState("");
  const [formEmail,   setFormEmail]   = useState("");
  const [formDates,   setFormDates]   = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [submitting,  setSubmitting]  = useState(false);
  const [done,        setDone]        = useState(false);
  const [formError,   setFormError]   = useState(false);

  const handleEnquire = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(false);
    try {
      const res = await fetch("/api/tour-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          dates: formDates,
          message: formMessage,
          tourName: tour!.name,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
    } catch {
      setFormError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8e4de]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-1 shrink-0">
            <span className="text-[22px] font-semibold text-[#111]" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Auriga</span>
            <span className="text-[22px] font-light text-[#C8903A]" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Ventures</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/tours"       className="text-[11px] tracking-[0.12em] uppercase text-[#555] hover:text-[#111] transition-colors" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Destinations</Link>
            <Link href="/experiences" className="text-[11px] tracking-[0.12em] uppercase text-[#555] hover:text-[#111] transition-colors" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Experiences</Link>
            <Link href="/about"       className="text-[11px] tracking-[0.12em] uppercase text-[#555] hover:text-[#111] transition-colors" style={{ fontFamily:"var(--font-inter),sans-serif" }}>About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="#enquire"
              className="px-5 py-2.5 bg-[#111] text-white text-[11px] tracking-[0.12em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300"
              style={{ fontFamily:"var(--font-inter),sans-serif" }}
            >Plan Your Journey</Link>
            <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span className={`block w-5 h-px bg-[#111] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px bg-[#111] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-[#111] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#eee] px-6 py-6 flex flex-col gap-5">
            {[
              { label: "Destinations", href: "/tours"       },
              { label: "Experiences",  href: "/experiences" },
              { label: "About",        href: "/about"       },
              { label: "Contact",      href: "/#contact"    },
            ].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-[#444] hover:text-[#C8903A] transition-colors"
                style={{ fontFamily:"var(--font-inter),sans-serif" }}
              >{l.label}</Link>
            ))}
            <Link href="#enquire" onClick={() => setMenuOpen(false)}
              className="mt-1 text-center px-5 py-3 bg-[#111] text-white text-sm tracking-[0.15em] uppercase hover:bg-[#C8903A] transition-colors duration-300"
              style={{ fontFamily:"var(--font-inter),sans-serif" }}
            >Plan Your Journey</Link>
          </div>
        )}
      </header>

      {/* ── HERO — full-bleed, no text overlay ── */}
      <section ref={heroRef} className="relative pt-[72px] h-[82vh] min-h-[560px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110 will-change-transform">
          <Image src={tour.heroImage} alt={tour.name} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
        </motion.div>

        {/* Bottom caption */}
        <motion.div style={{ opacity: heroOp }} className="absolute bottom-0 left-0 right-0 px-6 lg:px-10 pb-10">
          <p className="text-white/50 text-xs italic" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>
            {tour.name} · {tour.region}
          </p>
        </motion.div>
      </section>

      {/* ── INFO BAR — when / price / duration ── */}
      <div className="border-b border-[#e8e4de] bg-[#FAFAF8]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e8e4de]">
            {[
              { label: "When",     val: tour.when     },
              { label: "Price",    val: <PriceDisplay usd={tour.priceUSD} /> },
              { label: "Duration", val: tour.duration },
              { label: tour.difficulty ? "Difficulty" : "Max altitude",
                val:   tour.difficulty ?? tour.maxAltitude ?? "Varies" },
            ].map(({ label, val }) => (
              <div key={label} className="py-5 px-6 first:pl-0 last:pr-0">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-1" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{label}</p>
                <p className="text-[15px] text-[#111]" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_340px] gap-16 lg:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Region tag + title */}
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{tour.region}</p>
            <h1 className="text-[52px] md:text-[64px] font-light text-[#111] leading-[1.0] mb-8" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>{tour.name}</h1>

            {/* Tagline */}
            <p className="text-[22px] md:text-[26px] font-light italic text-[#555] leading-relaxed mb-8 border-l-2 border-[#C8903A] pl-6" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>
              "{tour.tagline}"
            </p>

            {/* Intro */}
            <p className="text-[#444] text-[16px] leading-[1.85] mb-12" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{tour.intro}</p>

            {/* Gallery row */}
            <div className="mb-14">
              <div className="relative overflow-hidden mb-2" style={{ aspectRatio:"16/9" }}>
                <Image src={tour.galleryImages[imgIdx]} alt={`Gallery ${imgIdx + 1}`} fill className="object-cover transition-opacity duration-500" sizes="(max-width: 768px) 100vw, 66vw" />
              </div>
              <div className="flex gap-2">
                {tour.galleryImages.map((src, i) => (
                  <button key={i} onClick={() => setImgIdx(i)}
                    className={`relative overflow-hidden flex-1 transition-all duration-300 ${i===imgIdx ? "ring-2 ring-[#C8903A]" : "opacity-60 hover:opacity-90"}`}
                    style={{ aspectRatio:"4/3" }}
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
                  </button>
                ))}
              </div>
            </div>

            {/* Narrative sections */}
            <div className="flex flex-col gap-12 mb-14">
              {tour.sections.map((sec, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
                >
                  <h3 className="text-[26px] md:text-[30px] font-light text-[#111] mb-4" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>{sec.heading}</h3>
                  <p className="text-[#555] text-[15px] leading-[1.85]" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{sec.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mb-14">
              <h2 className="text-[32px] font-light text-[#111] mb-7" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Trip highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#C8903A] text-base mt-0.5 shrink-0">◇</span>
                    <p className="text-[#444] text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotels */}
            <div className="mb-14">
              <h2 className="text-[32px] font-light text-[#111] mb-2" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Where to rest your head</h2>
              <p className="text-[#888] text-sm mb-8" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Properties vary by trip and availability. All are personally vetted by our team.</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {tour.hotels.map((hotel, i) => (
                  <motion.div key={i}
                    initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true, margin:"-40px" }} transition={{ delay:i*0.1, duration:0.6 }}
                    className="group border border-[#e8e4de] overflow-hidden hover:border-[#C8903A]/40 transition-colors duration-300"
                  >
                    <div className="relative overflow-hidden" style={{ aspectRatio:"16/10" }}>
                      <Image src={hotel.image} alt={hotel.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <h4 className="text-[18px] font-light text-[#111] mb-2" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>{hotel.name}</h4>
                      <p className="text-[#777] text-sm leading-relaxed mb-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{hotel.description}</p>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8903A]" style={{ fontFamily:"var(--font-inter),sans-serif" }}>View hotel →</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── STICKY SIDEBAR ── */}
          <div className="hidden lg:block">
            <div className="sticky top-[100px]">

              {/* Enquiry card */}
              <div id="enquire" className="border border-[#e8e4de] p-7 mb-6">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#C8903A] mb-3" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Plan this trip</p>
                <h3 className="text-[24px] font-light text-[#111] mb-5 leading-tight" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>
                  Ready to go?<br />Let's talk.
                </h3>
                <p className="text-[#777] text-sm leading-relaxed mb-6" style={{ fontFamily:"var(--font-inter),sans-serif" }}>No planning fees. No obligation. We'll design your itinerary around your dates, group, and interests.</p>

                {done ? (
                  <div className="py-6 text-center">
                    <p className="text-[#C8903A] text-[11px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Enquiry sent</p>
                    <p className="text-[#555] text-sm" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Thank you! We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquire} className="flex flex-col gap-3.5">
                    <input type="text" required placeholder="Your name" value={formName} onChange={e=>setFormName(e.target.value)}
                      className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#C8903A] transition-colors"
                      style={{ fontFamily:"var(--font-inter),sans-serif" }}
                    />
                    <input type="email" required placeholder="Email address" value={formEmail} onChange={e=>setFormEmail(e.target.value)}
                      className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#C8903A] transition-colors"
                      style={{ fontFamily:"var(--font-inter),sans-serif" }}
                    />
                    <select value={formDates} onChange={e=>setFormDates(e.target.value)} className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#555] focus:outline-none focus:border-[#C8903A] transition-colors bg-white" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
                      <option value="">Approx. travel dates</option>
                      {["July–August 2026","September–October 2026","November–December 2026","2027 (flexible)"].map(o=><option key={o}>{o}</option>)}
                    </select>
                    <textarea rows={3} placeholder="Tell us more (group size, interests…)" value={formMessage} onChange={e=>setFormMessage(e.target.value)}
                      className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#C8903A] transition-colors resize-none"
                      style={{ fontFamily:"var(--font-inter),sans-serif" }}
                    />
                    {formError && <p className="text-red-500 text-xs" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Something went wrong. Please try again.</p>}
                    <button type="submit" disabled={submitting}
                      className="w-full py-3.5 bg-[#111] text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300 disabled:opacity-60"
                      style={{ fontFamily:"var(--font-inter),sans-serif" }}
                    >{submitting ? "Sending…" : "Enquire About This Trip →"}</button>
                  </form>
                )}

                {!done && <p className="text-[11px] text-[#bbb] text-center mt-4" style={{ fontFamily:"var(--font-inter),sans-serif" }}>No planning fees. We'll be in touch within 24 hours.</p>}
              </div>

              {/* Price box */}
              <div className="bg-[#F7F5F2] p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-[#aaa]" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Starting price</span>
                  <PriceDisplay usd={tour.priceUSD} className="text-[20px] font-light text-[#C8903A]" />
                </div>
                <p className="text-[11px] text-[#bbb] leading-relaxed" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
                  Price is per person and excludes international flights. Final price depends on group size, dates, and your chosen properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile enquiry */}
      <div className="lg:hidden px-6 pb-12">
        <div className="border border-[#e8e4de] p-7" id="enquire">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#C8903A] mb-3" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Plan this trip</p>
          <h3 className="text-[28px] font-light text-[#111] mb-5" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>Ready to go?</h3>
          {done ? (
            <div className="py-4 text-center">
              <p className="text-[#C8903A] text-[11px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Enquiry sent</p>
              <p className="text-[#555] text-sm" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Thank you! We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleEnquire} className="flex flex-col gap-3.5">
              <input type="text" required placeholder="Your name" value={formName} onChange={e=>setFormName(e.target.value)} className="w-full border border-[#ddd] px-4 py-3 text-sm focus:outline-none focus:border-[#C8903A] transition-colors" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
              <input type="email" required placeholder="Email address" value={formEmail} onChange={e=>setFormEmail(e.target.value)} className="w-full border border-[#ddd] px-4 py-3 text-sm focus:outline-none focus:border-[#C8903A] transition-colors" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
              <textarea rows={3} placeholder="Tell us more…" value={formMessage} onChange={e=>setFormMessage(e.target.value)} className="w-full border border-[#ddd] px-4 py-3 text-sm focus:outline-none focus:border-[#C8903A] transition-colors resize-none" style={{ fontFamily:"var(--font-inter),sans-serif" }} />
              {formError && <p className="text-red-500 text-xs" style={{ fontFamily:"var(--font-inter),sans-serif" }}>Something went wrong. Please try again.</p>}
              <button type="submit" disabled={submitting} className="w-full py-4 bg-[#111] text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C8903A] transition-colors disabled:opacity-60" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{submitting ? "Sending…" : "Plan Your Journey →"}</button>
            </form>
          )}
        </div>
      </div>

      {/* ── RELATED TOURS ── */}
      {related.length > 0 && (
        <section className="bg-[#F7F5F2] py-20 px-6 lg:px-10">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-[36px] font-light text-[#111]" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>You might also like</h2>
              <Link href="/tours" className="text-[11px] tracking-[0.2em] uppercase text-[#888] hover:text-[#C8903A] transition-colors flex items-center gap-2" style={{ fontFamily:"var(--font-inter),sans-serif" }}>
                View all
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M0 4h12M8 1l4 3-4 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((t, i) => (
                <motion.div key={t.slug}
                  initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.6 }}
                >
                  <Link href={`/tours/${t.slug}`} className="group block">
                    <div className="relative overflow-hidden mb-4" style={{ aspectRatio:"4/3" }}>
                      <Image src={t.heroImage} alt={t.name} fill className="object-cover transition-transform duration-600 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400"/>
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-1" style={{ fontFamily:"var(--font-inter),sans-serif" }}>{t.region}</p>
                    <h3 className="text-[22px] font-light text-[#111] mb-1 group-hover:text-[#C8903A] transition-colors" style={{ fontFamily:"var(--font-cormorant),Georgia,serif" }}>{t.name}</h3>
                    <p className="text-[#aaa] text-[11px]" style={{ fontFamily:"var(--font-inter),sans-serif" }}><PriceDisplay usd={t.priceUSD} /> · {t.duration}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
