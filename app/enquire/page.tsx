"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const FORM_FIELDS = {
  heard: ["Instagram", "A Friend / Referral", "Facebook", "Other"],
  destination: ["Hunza Valley", "Skardu and Baltistan Region", "Astore Valley", "Ghizer and Phunder Valley", "Other"],
  travelling: ["A solo escape", "Better half and I", "Family", "Group of friends"],
  experience: ["Quiet immersion in nature", "Scenic drives", "Adventure with elegance", "Wellness"],
  duration: ["5 Days", "7 Days", "10 Days", "12 Days", "14 Days and above"],
  budget: ["$1500 – $2000", "$2000 – $3000", "$3000 – $3500", "$3500 – $4000", "$4000 and above"],
  contact: ["WhatsApp", "Phone Call", "Email", "Video Consultation"],
  unforgettable: [
    "A thoughtfully balanced luxury experience",
    "Experiencing authentic culture",
    "Adventure and exploration",
    "Relaxation and escape",
  ],
  moment: [
    "An anniversary dinner in mountains",
    "Birthday celebrations",
    "Private bonfire",
    "A curated cultural encounter",
  ],
};

type FieldName = keyof typeof FORM_FIELDS;

interface FormState {
  name: string;
  email: string;
  phone: string;
  heard: string;
  destination: string;
  travelling: string;
  experience: string;
  duration: string;
  budget: string;
  contact: string;
  unforgettable: string;
  moment: string;
}

const INITIAL: FormState = {
  name: "", email: "", phone: "",
  heard: "", destination: "", travelling: "",
  experience: "", duration: "", budget: "",
  contact: "", unforgettable: "", moment: "",
};

function SelectGroup({ field, label, options, value, onChange }: {
  field: string; label: string; options: string[]; value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label
        className="block text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-4"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {label} <span className="text-[#C8903A]/50">*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`text-left px-4 py-3 border text-[12px] tracking-[0.08em] transition-all duration-200 ${
              value === opt
                ? "border-[#C8903A] bg-[#C8903A]/10 text-[#F5F0E8]"
                : "border-[#2a2a2a] text-[#F5F0E8]/50 hover:border-[#C8903A]/50 hover:text-[#F5F0E8]/80"
            }`}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {value === opt && (
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C8903A] mr-2.5 align-middle" />
            )}
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function EnquirePage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const set = (key: keyof FormState) => (val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: false }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const required: (keyof FormState)[] = [
      "name", "email", "phone",
      "heard", "destination", "travelling", "experience",
      "duration", "budget", "contact", "unforgettable", "moment",
    ];
    const newErrors: Partial<Record<keyof FormState, boolean>> = {};
    let hasError = false;
    for (const key of required) {
      if (!form[key].trim()) {
        newErrors[key] = true;
        hasError = true;
      }
    }
    if (hasError) {
      setErrors(newErrors);
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
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
      {/* ── Top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/auriga-logo.jpeg" alt="Auriga Ventures" height={44} width={51} className="object-contain" />
          </Link>
          <Link
            href="/"
            className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 hover:text-[#C8903A] transition-colors duration-300 flex items-center gap-2"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M14 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            Back to site
          </Link>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          /* ── Thank you state ── */
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
          >
            <div className="w-16 h-px bg-[#C8903A] mx-auto mb-10" />
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Your journey begins</p>
            <h1 className="text-[52px] md:text-[72px] font-light text-[#F5F0E8] leading-[1.0] mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Thank you,<br /><em>{form.name.split(" ")[0]}.</em>
            </h1>
            <p className="text-[#F5F0E8]/40 text-[15px] leading-relaxed max-w-md mb-12" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              We've received your discovery form and will be in touch shortly via {form.contact}. Every great journey starts with a single conversation.
            </p>
            <Link
              href="/"
              className="px-8 py-4 border border-[#C8903A]/40 text-[#C8903A] text-[11px] tracking-[0.25em] uppercase hover:bg-[#C8903A] hover:text-[#080808] transition-all duration-300"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Return home
            </Link>
          </motion.div>
        ) : (
          /* ── Form ── */
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero banner */}
            <div className="pt-[68px]">
              <div className="relative bg-[#0d0d0d] overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #C8903A22 0%, transparent 70%)" }}
                />
                <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-center relative z-10">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    The journey discovery
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[52px] md:text-[72px] font-light text-[#F5F0E8] leading-[1.0] mb-6"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Tell us about<br /><em>your dream.</em>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
                    className="text-[#F5F0E8]/35 text-[15px] max-w-lg mx-auto leading-relaxed"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    A few questions to help us craft something extraordinary — tailored entirely to you.
                  </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8903A]/20 to-transparent" />
              </div>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="max-w-2xl mx-auto px-6 lg:px-0 py-16 md:py-20 flex flex-col gap-14">

                {/* ── Section 1: Personal details ── */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8903A]/50" style={{ fontFamily: "var(--font-inter), sans-serif" }}>01</span>
                    <div className="flex-1 h-px bg-[#1e1e1e]" />
                  </div>

                  {/* Name */}
                  <div data-error={errors.name ? "true" : "false"}>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      Your name <span className="text-[#C8903A]/50">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                      placeholder="Full name"
                      className={`w-full bg-transparent border-b py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none transition-colors duration-300 ${
                        errors.name ? "border-red-500/60" : "border-[#2a2a2a] focus:border-[#C8903A]"
                      }`}
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                    {errors.name && <p className="text-red-400/70 text-[10px] mt-2 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please enter your name</p>}
                  </div>

                  {/* Email */}
                  <div data-error={errors.email ? "true" : "false"}>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      Email address <span className="text-[#C8903A]/50">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email")(e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full bg-transparent border-b py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none transition-colors duration-300 ${
                        errors.email ? "border-red-500/60" : "border-[#2a2a2a] focus:border-[#C8903A]"
                      }`}
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                    {errors.email && <p className="text-red-400/70 text-[10px] mt-2 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please enter your email</p>}
                  </div>

                  {/* Phone */}
                  <div data-error={errors.phone ? "true" : "false"}>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C8903A] mb-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      WhatsApp / Phone <span className="text-[#C8903A]/50">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                      placeholder="+92 000 000 0000"
                      className={`w-full bg-transparent border-b py-3 text-[#F5F0E8] text-[15px] placeholder-[#F5F0E8]/15 focus:outline-none transition-colors duration-300 ${
                        errors.phone ? "border-red-500/60" : "border-[#2a2a2a] focus:border-[#C8903A]"
                      }`}
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                    {errors.phone && <p className="text-red-400/70 text-[10px] mt-2 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please enter your phone number</p>}
                  </div>
                </motion.section>

                {/* ── Section 2: Discovery ── */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8903A]/50" style={{ fontFamily: "var(--font-inter), sans-serif" }}>02</span>
                    <div className="flex-1 h-px bg-[#1e1e1e]" />
                  </div>

                  <div data-error={errors.heard ? "true" : "false"}>
                    <SelectGroup
                      field="heard"
                      label="How did you hear about Auriga Ventures?"
                      options={FORM_FIELDS.heard}
                      value={form.heard}
                      onChange={set("heard")}
                    />
                    {errors.heard && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
                  </div>

                  <div data-error={errors.destination ? "true" : "false"}>
                    <SelectGroup
                      field="destination"
                      label="Which destination resonated most with you?"
                      options={FORM_FIELDS.destination}
                      value={form.destination}
                      onChange={set("destination")}
                    />
                    {errors.destination && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
                  </div>
                </motion.section>

                {/* ── Section 3: Your journey ── */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8903A]/50" style={{ fontFamily: "var(--font-inter), sans-serif" }}>03</span>
                    <div className="flex-1 h-px bg-[#1e1e1e]" />
                  </div>

                  <div data-error={errors.travelling ? "true" : "false"}>
                    <SelectGroup
                      field="travelling"
                      label="Who will be travelling with you?"
                      options={FORM_FIELDS.travelling}
                      value={form.travelling}
                      onChange={set("travelling")}
                    />
                    {errors.travelling && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
                  </div>

                  <div data-error={errors.experience ? "true" : "false"}>
                    <SelectGroup
                      field="experience"
                      label="Which experience calls to you most?"
                      options={FORM_FIELDS.experience}
                      value={form.experience}
                      onChange={set("experience")}
                    />
                    {errors.experience && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
                  </div>

                  <div data-error={errors.duration ? "true" : "false"}>
                    <SelectGroup
                      field="duration"
                      label="How much time would you ideally give to this journey?"
                      options={FORM_FIELDS.duration}
                      value={form.duration}
                      onChange={set("duration")}
                    />
                    {errors.duration && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
                  </div>
                </motion.section>

                {/* ── Section 4: Investment & contact ── */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8903A]/50" style={{ fontFamily: "var(--font-inter), sans-serif" }}>04</span>
                    <div className="flex-1 h-px bg-[#1e1e1e]" />
                  </div>

                  <div data-error={errors.budget ? "true" : "false"}>
                    <SelectGroup
                      field="budget"
                      label="Which investment range per traveller feels right?"
                      options={FORM_FIELDS.budget}
                      value={form.budget}
                      onChange={set("budget")}
                    />
                    {errors.budget && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
                  </div>

                  <div data-error={errors.contact ? "true" : "false"}>
                    <SelectGroup
                      field="contact"
                      label="How should we stay in touch?"
                      options={FORM_FIELDS.contact}
                      value={form.contact}
                      onChange={set("contact")}
                    />
                    {errors.contact && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
                  </div>
                </motion.section>

                {/* ── Section 5: The moment ── */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8903A]/50" style={{ fontFamily: "var(--font-inter), sans-serif" }}>05</span>
                    <div className="flex-1 h-px bg-[#1e1e1e]" />
                  </div>

                  <div data-error={errors.unforgettable ? "true" : "false"}>
                    <SelectGroup
                      field="unforgettable"
                      label="What would make this journey truly unforgettable?"
                      options={FORM_FIELDS.unforgettable}
                      value={form.unforgettable}
                      onChange={set("unforgettable")}
                    />
                    {errors.unforgettable && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
                  </div>

                  <div data-error={errors.moment ? "true" : "false"}>
                    <SelectGroup
                      field="moment"
                      label="Is there a particular moment you'd love Auriga to create for you?"
                      options={FORM_FIELDS.moment}
                      value={form.moment}
                      onChange={set("moment")}
                    />
                    {errors.moment && <p className="text-red-400/70 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Please select an option</p>}
                  </div>
                </motion.section>

                {/* ── Submit ── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-6 border-t border-[#1a1a1a]"
                >
                  <p className="text-[#F5F0E8]/25 text-[12px] leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    No obligation. No planning fees. Just a conversation about where you want to go and how you want to feel when you get there.
                  </p>
                  {submitError && (
                    <p className="text-red-400/70 text-[11px] mb-4 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      Something went wrong. Please try again or email us directly at venturesauriga@gmail.com
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-5 bg-[#C8903A] text-[#080808] text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#d4a34d] active:scale-[0.99] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {submitting ? "Sending…" : "Submit My Journey Discovery"}
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
