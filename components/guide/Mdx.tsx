import "server-only";
import Image from "next/image";
import Link from "next/link";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import type { MDXComponents } from "mdx/types";
import { StatsBox } from "@/components/guide/GuideBlocks";

const INTER = { fontFamily: "var(--font-inter),sans-serif" };
const SERIF = { fontFamily: "var(--font-cormorant),Georgia,serif" };

function slugify(children: React.ReactNode): string {
  const text = Array.isArray(children) ? children.join("") : String(children ?? "");
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/** Styled replacements for the HTML elements MDX produces. */
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 id={slugify(children)} className="text-[32px] md:text-[40px] font-light text-[#F5F0E8] leading-tight mt-16 mb-6 scroll-mt-28" style={SERIF}>{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 id={slugify(children)} className="text-[24px] md:text-[28px] font-light text-[#F5F0E8] leading-snug mt-10 mb-4 scroll-mt-28" style={SERIF}>{children}</h3>
  ),
  p: ({ children }) => <p className="text-[16px] leading-[1.85] text-[#F5F0E8]/70 mb-6" style={INTER}>{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[16px] leading-[1.8] text-[#F5F0E8]/70 marker:text-[#C8903A]" style={INTER}>{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-[16px] leading-[1.8] text-[#F5F0E8]/70 marker:text-[#C8903A]" style={INTER}>{children}</ol>,
  strong: ({ children }) => <strong className="font-medium text-[#F5F0E8]">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="my-10 border-l-2 border-[#C8903A] pl-6 text-[24px] italic font-light text-[#F5F0E8]/85 [&_p]:text-[24px] [&_p]:text-[#F5F0E8]/85 [&_p]:leading-snug" style={SERIF}>{children}</blockquote>
  ),
  a: ({ href = "", children }) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} className="text-[#C8903A] underline decoration-[#C8903A]/40 underline-offset-4 hover:decoration-[#C8903A]">{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#C8903A] underline decoration-[#C8903A]/40 underline-offset-4 hover:decoration-[#C8903A]">{children}</a>
    ),
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto border border-[#1A1A1A]">
      <table className="w-full text-left text-[14px] text-[#F5F0E8]/75" style={INTER}>{children}</table>
    </div>
  ),
  th: ({ children }) => <th className="bg-[#0D0D0D] px-4 py-3 text-[10px] tracking-[0.2em] uppercase font-normal text-[#C8903A] whitespace-nowrap">{children}</th>,
  td: ({ children }) => <td className="border-t border-[#1A1A1A] px-4 py-3 align-top">{children}</td>,
  hr: () => <hr className="my-14 border-[#1A1A1A]" />,
  img: ({ src = "", alt = "" }) => (
    <span className="block relative my-10 aspect-[16/10] overflow-hidden">
      <Image src={String(src)} alt={alt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
    </span>
  ),
  // Usable inside MDX: <Stats items={[{ label: "Height", value: "8,611 m" }]} />
  Stats: ({ items }: { items: { label: string; value: string }[] }) => <StatsBox stats={items} />,
};

export default async function Mdx({ source }: { source: string }) {
  const { default: Content } = await evaluate(source, { ...runtime, remarkPlugins: [remarkGfm] });
  return <Content components={components} />;
}
