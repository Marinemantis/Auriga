"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

const DESTINATIONS   = ["Hunza Valley", "Skardu & Baltistan", "Astore Valley", "Ghizer & Phunder Valley", "Multiple Destinations", "Not sure — surprise me"];
const GROUP_TYPES    = ["Solo escape", "Couple", "Family", "Friends & group"];
const HOTEL_TYPES    = ["Best available", "Luxury resort", "Boutique & heritage", "Budget-friendly", "Leave it to Auriga"];
const ROOM_TYPES     = ["Standard", "Deluxe", "Suite", "Leave it to Auriga"];
const TRANSPORT_OPTS = ["Private vehicle", "Leave it to Auriga", "I'll arrange my own"];

interface FormState {
  name: string; email: string; phone: string; country: string;
  destination: string; departureDate: string; returnDate: string; departureCity: string;
  adults: number; children: number; infants: number; groupType: string;
  hotelType: string; roomType: string; rooms: number; accommodationNotes: string;
  transport: string; transportNotes: string;
  comments: string;
}

const INITIAL: FormState = {
  name: "", email: "", phone: "", country: "",
  destination: "", departureDate: "", returnDate: "", departureCity: "",
  adults: 1, children: 0, infants: 0, groupType: "",
  hotelType: "", roomType: "", rooms: 1, accommodationNotes: "",
  transport: "", transportNotes: "",
  comments: "",
};

function SelectGroup({ label, options, value, onChange, error }: {
  label: string; options: string[]; value: string;
  onChange: (v: string) => void; error?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-4"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {label} <span className="text-[#C8903A]/50">*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => (
          <button key={opt} type="button" onClick={() => onChange(opt)}
            className={`text-left px-4 py-3 border text-[12px] tracking-[0.08em] transition-all duration-200 ${
              value === opt
                ? "border-[#C8903A] bg-[#C8903A]/10 text-[#F5F0E8]"
                : "border-[#2a2a2a] text-[#F5F0E8]/50 hover:border-[#C8903A]/50 hover:text-[#F5F0E8]/80"
            }`}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            {value === opt && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C8903A] mr-2.5 align-middle" />}
            {opt}
          </button>
        ))}
      </div>
      {error && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
    </div>
  );
}

function TextInput({ label, value, onChange, placeholder, type = "text", required = true, error }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; required?: boolean; error?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-3"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {label} {required && <span className="text-[#C8903A]/50">*</span>}
      </label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className={`w-full bg-transparent border-b py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none transition-colors duration-300 ${
          error ? "border-red-500/60" : "border-[#2a2a2a] focus:border-[#C8903A]"
        }`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }} />
      {error && <p className="text-red-400/70 text-[10px] mt-2 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Required</p>}
    </div>
  );
}

function Stepper({ label, sublabel, value, onChange, min = 0, max = 20 }: {
  label: string; sublabel?: string; value: number; onChange: (v: number) => void; min?: number; max?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}>{label}</p>
      {sublabel && <p className="text-[10px] text-[#F5F0E8]/30" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{sublabel}</p>}
      <div className="flex items-center border border-[#2a2a2a] w-fit">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))}
          className="w-10 h-10 text-[#F5F0E8]/50 hover:text-[#C8903A] hover:bg-[#C8903A]/10 transition-colors border-r border-[#2a2a2a] text-lg flex items-center justify-center">
          −
        </button>
        <span className="w-12 text-center text-[#F5F0E8] text-[15px]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}>{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))}
          className="w-10 h-10 text-[#F5F0E8]/50 hover:text-[#C8903A] hover:bg-[#C8903A]/10 transition-colors border-l border-[#2a2a2a] text-lg flex items-center justify-center">
          +
        </button>
      </div>
    </div>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8903A]/50"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}>{num}</span>
      <div className="flex-1 h-px bg-[#1e1e1e]" />
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#F5F0E8]/20"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}>{title}</span>
    </div>
  );
}

export default function EnquirePage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const setStr = (key: keyof FormState) => (val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: false }));
  };
  const setNum = (key: keyof FormState) => (val: number) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const required: (keyof FormState)[] = [
      "name", "email", "phone",
      "destination", "departureDate", "returnDate",
      "groupType", "hotelType", "roomType", "transport",
    ];
    const newErrors: Partial<Record<keyof FormState, boolean>> = {};
    let hasError = false;
    for (const key of required) {
      if (!(form[key] as string).trim()) { newErrors[key] = true; hasError = true; }
    }
    if (hasError) {
      setErrors(newErrors);
      document.querySelector("[data-error='true']")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo variant="light" className="h-6 w-auto" />
          </Link>
          <Link href="/"
            className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 hover:text-[#C8903A] transition-colors duration-300 flex items-center gap-2"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M14 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Back to site
          </Link>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="thanks"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
            <div className="w-16 h-px bg-[#C8903A] mx-auto mb-10" />
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}>Your journey begins</p>
            <h1 className="text-[52px] md:text-[72px] font-light text-[#F5F0E8] leading-[1.0] mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Thank you,<br /><em>{form.name.split(" ")[0]}.</em>
            </h1>
            <p className="text-[#F5F0E8]/40 text-[15px] leading-relaxed max-w-md mb-12"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              We've received your journey request and will be in touch soon. Every great adventure starts with a single conversation.
            </p>
            <Link href="/"
              className="px-8 py-4 border border-[#C8903A]/40 text-[#C8903A] text-[11px] tracking-[0.25em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Return home
            </Link>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {/* Hero banner */}
            <div className="pt-[68px]">
              <div className="relative bg-[#0d0d0d] overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #C8903A22 0%, transparent 70%)" }} />
                <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-center relative z-10">
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    Journey planning
                  </motion.p>
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[52px] md:text-[72px] font-light text-[#F5F0E8] leading-[1.0] mb-6"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    Customise<br /><em>your journey.</em>
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
                    className="text-[#F5F0E8]/35 text-[15px] max-w-lg mx-auto leading-relaxed"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    Tell us your preferences and we will create the ideal journey for you. The more you share, the better we can tailor your experience.
                  </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8903A]/20 to-transparent" />
              </div>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="max-w-2xl mx-auto px-6 lg:px-0 py-16 md:py-20 flex flex-col gap-14">

                {/* 01 — Contact Information */}
                <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6">
                  <SectionHeader num="01" title="Contact Information" />

                  <div data-error={errors.name ? "true" : "false"}>
                    <TextInput label="Full Name" value={form.name} onChange={setStr("name")}
                      placeholder="e.g. Danial Adam" error={errors.name} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div data-error={errors.phone ? "true" : "false"}>
                      <TextInput label="Phone (include country code)" value={form.phone} onChange={setStr("phone")}
                        placeholder="+92 300 1234 567" type="tel" error={errors.phone} />
                    </div>
                    <div data-error={errors.email ? "true" : "false"}>
                      <TextInput label="Email Address" value={form.email} onChange={setStr("email")}
                        placeholder="you@example.com" type="email" error={errors.email} />
                    </div>
                  </div>
                  <TextInput label="Country of Residence" value={form.country} onChange={setStr("country")}
                    placeholder="e.g. Pakistan" required={false} />
                </motion.section>

                {/* 02 — Your Journey */}
                <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-10">
                  <SectionHeader num="02" title="Your Journey" />

                  <div data-error={errors.destination ? "true" : "false"}>
                    <SelectGroup
                      label="Which destinations would you like to visit?"
                      options={DESTINATIONS} value={form.destination}
                      onChange={setStr("destination")} error={errors.destination} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div data-error={errors.departureDate ? "true" : "false"}>
                      <TextInput label="Departure Date" value={form.departureDate} onChange={setStr("departureDate")}
                        placeholder="e.g. 15 June 2026" error={errors.departureDate} />
                    </div>
                    <div data-error={errors.returnDate ? "true" : "false"}>
                      <TextInput label="Return Date" value={form.returnDate} onChange={setStr("returnDate")}
                        placeholder="e.g. 25 June 2026" error={errors.returnDate} />
                    </div>
                  </div>

                  <TextInput label="Departure City" value={form.departureCity} onChange={setStr("departureCity")}
                    placeholder="e.g. Islamabad" required={false} />
                </motion.section>

                {/* 03 — Your Group */}
                <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-10">
                  <SectionHeader num="03" title="Your Group" />

                  <div className="grid grid-cols-3 gap-4">
                    <Stepper label="Adults" value={form.adults} onChange={setNum("adults")} min={1} />
                    <Stepper label="Children" sublabel="2 – 11 yrs" value={form.children} onChange={setNum("children")} />
                    <Stepper label="Infants" sublabel="0 – 1 yr" value={form.infants} onChange={setNum("infants")} />
                  </div>

                  <div data-error={errors.groupType ? "true" : "false"}>
                    <SelectGroup label="Travelling as" options={GROUP_TYPES} value={form.groupType}
                      onChange={setStr("groupType")} error={errors.groupType} />
                  </div>
                </motion.section>

                {/* 04 — Accommodation */}
                <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-10">
                  <SectionHeader num="04" title="Accommodation" />

                  <div data-error={errors.hotelType ? "true" : "false"}>
                    <SelectGroup label="Preferred hotel type" options={HOTEL_TYPES} value={form.hotelType}
                      onChange={setStr("hotelType")} error={errors.hotelType} />
                  </div>

                  <div data-error={errors.roomType ? "true" : "false"}>
                    <SelectGroup label="Preferred room type" options={ROOM_TYPES} value={form.roomType}
                      onChange={setStr("roomType")} error={errors.roomType} />
                  </div>

                  <Stepper label="No. of Rooms" value={form.rooms} onChange={setNum("rooms")} min={1} />

                  <TextInput label="Other accommodation preferences" value={form.accommodationNotes}
                    onChange={setStr("accommodationNotes")} placeholder="Any special requests…" required={false} />
                </motion.section>

                {/* 05 — Transport */}
                <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-10">
                  <SectionHeader num="05" title="Transport" />

                  <div data-error={errors.transport ? "true" : "false"}>
                    <SelectGroup label="Transport preference" options={TRANSPORT_OPTS} value={form.transport}
                      onChange={setStr("transport")} error={errors.transport} />
                  </div>

                  <TextInput label="Other transport preferences" value={form.transportNotes}
                    onChange={setStr("transportNotes")} placeholder="Any specific requirements…" required={false} />
                </motion.section>

                {/* 06 — Anything else */}
                <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6">
                  <SectionHeader num="06" title="Anything Else?" />

                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-3"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      Other comments or special requests{" "}
                      <span className="text-[#C8903A]/30 text-[9px] normal-case tracking-normal">optional</span>
                    </label>
                    <textarea
                      value={form.comments}
                      onChange={(e) => setStr("comments")(e.target.value)}
                      placeholder="Optional activities, extra nights, dietary requirements, special celebrations, accessibility needs…"
                      rows={5}
                      className="w-full bg-transparent border border-[#2a2a2a] p-4 text-[#F5F0E8] text-[14px] placeholder-[#F5F0E8]/15 focus:outline-none focus:border-[#C8903A] transition-colors duration-300 resize-none"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                  </div>
                </motion.section>

                {/* Submit */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-6 border-t border-[#1a1a1a]">
                  <p className="text-[#F5F0E8]/25 text-[12px] leading-relaxed mb-8"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    No obligation. No planning fees. Just a conversation about where you want to go and how you want to feel when you get there.
                  </p>
                  {submitError && (
                    <p className="text-red-400/70 text-[11px] mb-4 tracking-wider"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      Something went wrong. Please try again or email us at venturesauriga@gmail.com
                    </p>
                  )}
                  <button type="submit" disabled={submitting}
                    className="w-full py-5 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#d4a34d] active:scale-[0.99] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {submitting ? "Sending…" : "Submit My Journey Request"}
                  </button>
                </motion.div>

              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
