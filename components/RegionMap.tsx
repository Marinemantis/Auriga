"use client";

import { motion } from "framer-motion";

/* Lat/lon projected onto a 640×720 canvas.
   x = (lon - 71.5) / 4.5 * 640   y = (37.2 - lat) / 4.4 * 720 */
const PLACES: { name: string; sub: string; x: number; y: number; major?: boolean }[] = [
  { name: "Khunjerab Pass", sub: "4,693m · China border", x: 559, y: 57 },
  { name: "Hunza",          sub: "Karakoram",             x: 448, y: 144, major: true },
  { name: "Nagar",          sub: "Karakoram",             x: 476, y: 172 },
  { name: "Gilgit",         sub: "Gateway to the North",  x: 400, y: 210, major: true },
  { name: "Phunder",        sub: "Ghizer Valley",         x: 235, y: 188, major: true },
  { name: "Chitral",        sub: "Hindu Kush",            x: 41,  y: 221, major: true },
  { name: "Astore",         sub: "Below Nanga Parbat",    x: 484, y: 304, major: true },
  { name: "Skardu",         sub: "Baltistan",             x: 587, y: 311, major: true },
  { name: "Deosai",         sub: "The Roof of the World", x: 558, y: 352 },
  { name: "Islamabad",      sub: "Arrival point",         x: 220, y: 576 },
];

/* Real road routes, each rendered as its own dashed line and — on mobile — its own vertical list */
const ROUTES: { name: string; places: string[] }[] = [
  { name: "Karakoram Highway",   places: ["Islamabad", "Gilgit", "Hunza", "Khunjerab Pass"] },
  { name: "Astore–Skardu Route", places: ["Gilgit", "Astore", "Deosai", "Skardu"] },
  { name: "Shandur Route",       places: ["Gilgit", "Phunder", "Chitral"] },
];

function findPlace(name: string) {
  return PLACES.find(p => p.name === name)!;
}

export default function RegionMap() {
  return (
    <div className="relative w-full">
      {/* ── Desktop / tablet: SVG map ── */}
      <div className="hidden sm:block max-w-[640px] mx-auto">
        <svg viewBox="0 0 640 720" className="w-full h-auto" role="img" aria-label="Map of Gilgit-Baltistan and Khyber Pakhtunkhwa showing major Auriga destinations and routes">
          {/* Soft contour texture suggesting mountain terrain */}
          <g opacity="0.07" stroke="#F5F0E8" fill="none" strokeWidth="1">
            <path d="M0 120 Q160 60 320 130 T640 90" />
            <path d="M0 230 Q200 170 380 240 T640 210" />
            <path d="M0 340 Q220 290 420 350 T640 320" />
            <path d="M0 460 Q200 410 400 470 T640 440" />
          </g>

          {/* Route lines */}
          {ROUTES.map((route, ri) => {
            const pts = route.places.map(findPlace);
            return (
              <motion.polyline
                key={route.name}
                points={pts.map(p => `${p.x},${p.y}`).join(" ")}
                fill="none"
                stroke="#C8903A"
                strokeWidth="1.4"
                strokeDasharray="2 7"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.55 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: ri * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            );
          })}

          {/* Pins */}
          {PLACES.map((p, i) => (
            <motion.g
              key={p.name}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {p.major && (
                <circle cx={p.x} cy={p.y} r="9" fill="none" stroke="#C8903A" strokeWidth="0.8" opacity="0.4" />
              )}
              <circle cx={p.x} cy={p.y} r={p.major ? 4.5 : 3} fill="#C8903A" />
              <circle cx={p.x} cy={p.y} r={p.major ? 4.5 : 3} fill="none" stroke="#080808" strokeWidth="1" />

              {/* Label — flips side near right/left edges to stay on-canvas */}
              <text
                x={p.x > 480 ? p.x - 12 : p.x + 12}
                y={p.y + 4}
                textAnchor={p.x > 480 ? "end" : "start"}
                fill="#F5F0E8"
                fontSize={p.major ? 15 : 12}
                fontFamily="var(--font-cormorant), Georgia, serif"
                fontWeight={300}
              >
                {p.name}
              </text>
              <text
                x={p.x > 480 ? p.x - 12 : p.x + 12}
                y={p.y + 4 + (p.major ? 15 : 13)}
                textAnchor={p.x > 480 ? "end" : "start"}
                fill="#F5F0E8"
                opacity="0.4"
                fontSize="9"
                letterSpacing="0.05em"
                fontFamily="var(--font-inter), sans-serif"
              >
                {p.sub}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>

      {/* ── Mobile: vertical route list (SVG text becomes illegible when scaled down this far) ── */}
      <div className="sm:hidden flex flex-col gap-10 max-w-sm mx-auto">
        {ROUTES.map((route, ri) => (
          <motion.div
            key={route.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: ri * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-[#C8903A]/70 mb-5"
              style={{ fontFamily: "var(--font-inter),sans-serif" }}
            >
              {route.name}
            </p>
            <div className="flex flex-col">
              {route.places.map((name, i) => {
                const p = findPlace(name);
                const isLast = i === route.places.length - 1;
                return (
                  <div key={name} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C8903A] shrink-0 mt-1.5" />
                      {!isLast && <span className="w-px flex-1 bg-[#C8903A]/25" style={{ minHeight: 34 }} />}
                    </div>
                    <div className={isLast ? "pb-0" : "pb-6"}>
                      <p className="text-[17px] font-light text-[#F5F0E8] leading-none" style={{ fontFamily: "var(--font-cormorant),Georgia,serif" }}>
                        {p.name}
                      </p>
                      <p className="text-[11px] text-[#F5F0E8]/40 mt-1.5" style={{ fontFamily: "var(--font-inter),sans-serif" }}>
                        {p.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
