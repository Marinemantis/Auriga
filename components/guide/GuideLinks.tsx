import Image from "next/image";
import Link from "next/link";
import type { GuideEntry } from "@/lib/content";

const INTER = { fontFamily: "var(--font-inter),sans-serif" };
const SERIF = { fontFamily: "var(--font-cormorant),Georgia,serif" };

/**
 * Cards linking a hand-built hub page to its guide pages.
 * Rendered on the server and passed into client pages as a slot.
 * Renders nothing when there are no (published) guides.
 */
export default function GuideLinks({ entries, heading, eyebrow = "Guides" }: { entries: GuideEntry[]; heading: string; eyebrow?: string }) {
  if (entries.length === 0) return null;
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 border-t border-[#1A1A1A]">
      <div className="flex items-center gap-3 mb-5">
        <span className="block h-px w-10 bg-[#C8903A]" aria-hidden="true" />
        <span className="text-[10px] tracking-[0.38em] uppercase text-[#C8903A]" style={INTER}>{eyebrow}</span>
      </div>
      <h2 className="text-[34px] md:text-[42px] font-light text-[#F5F0E8] leading-tight mb-10" style={SERIF}>{heading}</h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(e => (
          <li key={e.path}>
            <Link href={e.path} className="group flex h-full gap-4 bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C8903A]/50 transition-colors p-4">
              <div className="relative w-24 h-24 shrink-0 overflow-hidden">
                <Image src={e.meta.heroImage} alt={e.meta.heroAlt ?? e.meta.title} fill sizes="96px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[19px] font-light text-[#F5F0E8] leading-snug mb-2 group-hover:text-[#C8903A] transition-colors" style={SERIF}>{e.meta.title}</h3>
                <p className="text-[12px] text-[#F5F0E8]/50 leading-relaxed line-clamp-3" style={INTER}>{e.meta.metaDescription}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
