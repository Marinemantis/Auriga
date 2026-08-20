"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const destinations = [
  "Hunza",
  "Skardu Valley",
  "Ghizer Valley",
  "Rakaposhi Basecamp",
  "Chitral",
  "Astore Valley",
  "Not sure yet — help me choose",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#050505] py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-[#C8903A]" />
              <span
                className="text-xs tracking-[0.3em] uppercase text-[#C8903A]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Get In Touch
              </span>
            </div>
            <h2
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Let&apos;s Begin
              <br />
              <em className="not-italic text-[#C8903A]">Something Remarkable.</em>
            </h2>
            <p
              className="text-[#F5F0E8]/55 text-base leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Tell us where you want to go — or tell us how you want to feel.
              We&apos;ll handle the rest.
            </p>

            {/* Contact info */}
            <div className="space-y-5 mb-10">
              {[
                { label: "Address", value: "Hotel Reveria, Riverview Road, Gilgit, Pakistan" },
                { label: "Phone", value: "+92 333 166 4550" },
                { label: "Email", value: "hello@aurigaventure.com" },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase text-[#C8903A]/60 mb-1"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[#F5F0E8]/60 text-sm"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923331664550"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm tracking-widest uppercase hover:bg-[#25D366]/20 transition-all duration-300"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center py-20">
                <span
                  className="font-cormorant text-6xl text-[#C8903A] block mb-6"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  &ldquo;
                </span>
                <h3
                  className="font-cormorant text-3xl text-[#F5F0E8] font-light mb-4"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Thank you. We&apos;ll be in touch shortly.
                </h3>
                <p
                  className="text-[#F5F0E8]/50 text-sm"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Your journey begins with a conversation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Your Name", id: "name", type: "text", placeholder: "e.g. Sarah Ibrahim" },
                  { label: "Email Address", id: "email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/40 mb-2"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="w-full bg-[#0F0F0F] border border-[#222222] focus:border-[#C8903A]/50 text-[#F5F0E8] placeholder-[#F5F0E8]/20 px-4 py-3.5 text-sm outline-none transition-colors duration-300"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="destination"
                    className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/40 mb-2"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Destination of Interest
                  </label>
                  <select
                    id="destination"
                    className="w-full bg-[#0F0F0F] border border-[#222222] focus:border-[#C8903A]/50 text-[#F5F0E8] px-4 py-3.5 text-sm outline-none transition-colors duration-300 appearance-none cursor-pointer"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    <option value="">Select a destination…</option>
                    {destinations.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/40 mb-2"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your ideal journey — when, how many people, what you're looking for…"
                    className="w-full bg-[#0F0F0F] border border-[#222222] focus:border-[#C8903A]/50 text-[#F5F0E8] placeholder-[#F5F0E8]/20 px-4 py-3.5 text-sm outline-none transition-colors duration-300 resize-none"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#C8903A] text-[#080808] text-sm tracking-widest uppercase font-medium hover:bg-[#D4A855] transition-colors duration-300 mt-2"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
