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

const ROUTE = ["Islamabad", "Gilgit", "Hunza", "Khunjerab Pass"];

function findPlace(name: string) {
  return PLACES.find(p => p.name === name)!;
}

export default function RegionMap() {
  const route = ROUTE.map(findPlace);

  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      <svg viewBox="0 0 640 720" className="w-full h-auto" role="img" aria-label="Map of Gilgit-Baltistan and Khyber Pakhtunkhwa showing major Auriga destinations">
        {/* Soft contour texture suggesting mountain terrain */}
        <g opacity="0.07" stroke="#F5F0E8" fill="none" strokeWidth="1">
          <path d="M0 120 Q160 60 320 130 T640 90" />
          <path d="M0 230 Q200 170 380 240 T640 210" />
          <path d="M0 340 Q220 290 420 350 T640 320" />
          <path d="M0 460 Q200 410 400 470 T640 440" />
        </g>

        {/* Route line: Islamabad → Gilgit → Hunza → Khunjerab */}
        <motion.polyline
          points={route.map(p => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="#C8903A"
          strokeWidth="1.4"
          strokeDasharray="2 7"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />

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
  );
}
