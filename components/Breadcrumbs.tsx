import Link from "next/link";

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail. Pair with breadcrumbSchema() for structured data. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] tracking-[0.22em] uppercase text-[#F5F0E8]/45"
        style={{ fontFamily: "var(--font-inter),sans-serif" }}
      >
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-[#C8903A]">{c.name}</span>
              ) : (
                <>
                  <Link href={c.path} className="hover:text-[#F5F0E8] transition-colors">{c.name}</Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
