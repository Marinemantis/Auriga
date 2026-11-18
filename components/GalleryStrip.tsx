import Image from "next/image";

const row1 = [
  { src: "/shangri-la.jpg", alt: "Kachura Lake" },
  { src: "/slide-sheosar-lake.jpg", alt: "Nanga Parbat" },
  { src: "/fullbleed-hunza-aerial.jpg", alt: "Aerial Gilgit" },
  { src: "/slide-deosai-glamping.jpg", alt: "Deosai Plains" },
  { src: "/fullbleed-golden-mountains.jpg", alt: "Mountain Vista" },
];

const row2 = [
  { src: "/mms-dunsa-valley-tormik.jpg", alt: "Dunsa Valley" },
  { src: "/dest-chitral.jpg", alt: "Chitral" },
  { src: "/fullbleed-golden-mountains.jpg", alt: "Landscape" },
  { src: "/rakaposhi-moon.jpg", alt: "Rakaposhi" },
  { src: "/mms-glamping-deosai.jpg", alt: "Glamping Deosai" },
];

function PhotoRow({ photos, reverse }: { photos: typeof row1; reverse?: boolean }) {
  const doubled = [...photos, ...photos];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((photo, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: 280, height: 180 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              unoptimized
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#080808]/20 hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GalleryStrip() {
  return (
    <section className="bg-[#080808] py-16 overflow-hidden space-y-3">
      <PhotoRow photos={row1} />
      <PhotoRow photos={row2} reverse />
    </section>
  );
}
