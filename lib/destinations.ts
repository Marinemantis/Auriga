export interface Destination {
  slug: string;
  name: string;
  subtitle: string;
  region: string;
  heroImage: string;
  tagline: string;
  intro: string[];
  signature: { title: string; body: string }[];
  highlights: string[];
  subValleys?: { name: string; body: string }[];
  featuredTrek?: {
    title: string;
    subtitle: string;
    overview: { label: string; value: string }[];
    days: { title: string; meta?: string; body: string; overnight?: string; highlights?: string }[];
  };
  relatedTourSlugs: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    slug: "hunza",
    name: "Hunza Valley",
    subtitle: "A Pinnacle in Hunza",
    region: "Karakoram · Gilgit-Baltistan",
    heroImage: "/dest-hunza.jpg",
    tagline: "Experience Hunza in style.",
    intro: [
      "Hunza Valley is a timeless destination in Gilgit-Baltistan, Pakistan, celebrated for its breathtaking mountain scenery, rich cultural heritage, and peaceful way of life. Nestled among the majestic Karakoram peaks, Hunza represents harmony between nature and community. With crystal-clear lakes, scenic valleys, and welcoming locals, Hunza offers an authentic and responsible travel experience. From Karimabad to Khunjerab Pass, every journey reflects the valley's vision of natural preservation and cultural pride.",
      "The people of Hunza are deeply committed to preserving their natural environment, cultural traditions, and historic landmarks. This dedication is reflected in the valley's clean surroundings, eco-friendly lifestyle, and strong sense of community. Hunza Valley is home to remarkable heritage sites such as Baltit Fort and Altit Fort, centuries-old structures that showcase traditional architecture, strategic mountain planning, and the valley's royal past.",
      "Hunza's natural attractions are equally captivating. From the turquoise waters of Attabad Lake to the sweeping landscapes of Karimabad, Duikar, Passu Cones, and the high-altitude Khunjerab Pass, every journey through Hunza is a visual masterpiece. Scenic valleys, glacier-fed rivers, alpine meadows, and crystal-clear lakes provide endless opportunities for photography, hiking, and mindful exploration — making Hunza a leading destination for eco-tourism and sustainable travel in Pakistan.",
    ],
    signature: [
      {
        title: "Curated Retreats",
        body: "Your journey through Hunza Valley is transformed into a signature travel experience curated with precision and care. Auriga guides you through iconic destinations such as the ancient forts, Hopper Valley, Passu, and the high-altitude Khunjerab Pass — each woven into your experience through scenic drives, serene walks, and meaningful cultural encounters. Stay at handpicked boutique lodges and luxurious mountain resorts set against panoramic views of the Karakoram, blending traditional character with modern luxury.",
      },
      {
        title: "Adventure with Elegance",
        body: "Embark on private guided treks through breathtaking terrain — Rakaposhi Base Camp, Batura Glacier, Baskochi Meadows, Ultar, and Passu Glacier — offering close-up views of glaciers and towering snow-capped peaks. These treks are carefully designed and led by experienced guides, ensuring safety, comfort, and an enriching understanding of Hunza's geography and culture.",
      },
      {
        title: "Authentic Cultural Immersion",
        body: "Connect with the rich heritage of Hunza Valley through guided visits to Baltit Fort and Altit Fort, where centuries-old architecture and royal history reveal the valley's legacy of resilience and community living. Walk through markets filled with handmade crafts, traditional Hunza caps, jewelry, dried fruits, and organic produce while interacting with local artisans and planned musical events.",
      },
    ],
    highlights: ["Baltit & Altit Forts", "Attabad Lake", "Passu Cones", "Khunjerab Pass (4,700m)"],
    relatedTourSlugs: ["realm-of-fairies", "last-paradise"],
  },
  {
    slug: "phunder",
    name: "Phunder & Ghizer",
    subtitle: "The Calm of Phunder",
    region: "Ghizer Valley · Gilgit-Baltistan",
    heroImage: "/dest-phunder.jpg",
    tagline: "Experience the valley in style.",
    intro: [
      "Ghizer Valley, in the northwestern region of Gilgit-Baltistan, is one of Pakistan's most pristine and culturally rich landscapes, offering a rare blend of alpine beauty, flowing rivers, fertile valleys, and timeless mountain traditions. The journey begins in Gahkuch Valley, the administrative and cultural heart of the region, known for its scenic riverside setting and traditional bazaars. Nearby, the iconic Gupis Fort stands as a reminder of the region's royal past.",
      "From here, the route extends into the dramatic landscapes of Yasin Valley, steeped in history, folklore, and ancient trade routes. At the heart of this journey lies Phunder Valley, celebrated for its expansive alpine meadows, flowing streams, and the legendary Phunder Lake — a crystal-clear alpine lake renowned for its trout and mirror-like reflections.",
      "Beyond Phunder, the journey unfolds into the remote beauty of Langar Valley and the hidden sanctuary of Khukush Lake, where high-altitude trekking routes and untouched wilderness create extraordinary opportunities for immersive exploration. The experience is further elevated through Shandur Valley, home to the world-famous Shandur Pass (3,700m) — the 'Roof of the World' — and the legendary Shandur Polo Ground.",
    ],
    signature: [
      {
        title: "Curated Luxury Retreats",
        body: "Wake up to crisp mountain air and unspoiled landscapes that invite slow mornings and mindful exploration. Stay at handpicked boutique lodges with panoramic views, private bonfire evenings under the stars, and luxurious lakeside relaxation — designed to connect you with the serene beauty of Phunder, Ghizer, and Yasin Valley.",
      },
      {
        title: "Adventure with Elegance",
        body: "Curated outdoor activities including glamping under the stars, kayaking in crystal-clear lakes, and stargazing in untouched wilderness. Trek through unexplored meadows at a gentle, immersive pace, walk through open alpine pastures, and discover hidden viewpoints — each experience balancing adventure with comfort.",
      },
      {
        title: "Authentic Cultural Immersion",
        body: "Musical events with live performances set against Phunder Valley's breathtaking landscapes, followed by private gourmet dining experiences featuring local and international cuisine — a connection to the vibrant heritage of the Ghizer region.",
      },
    ],
    highlights: ["Phunder Lake", "Shandur Pass (3,700m)", "Yasin Valley", "Khukush Lake"],
    relatedTourSlugs: ["khukush-lake-phunder", "chitral-phunder"],
  },
  {
    slug: "skardu",
    name: "Skardu Valley",
    subtitle: "Heart of Gilgit-Baltistan",
    region: "Baltistan · Karakoram",
    heroImage: "/dest-skardu.jpg",
    tagline: "Explore the heart of Gilgit-Baltistan.",
    intro: [
      "This is not just a holiday — it is a refined journey through one of the world's last untouched mountain regions, where dramatic landscapes meet timeless elegance and authentic culture. Set between the legendary Karakoram and Himalayan mountain ranges, Skardu is the gateway to iconic peaks, pristine alpine lakes, and peaceful high-altitude valleys, offering an experience that feels both adventurous and indulgent.",
      "Beyond Skardu town, the journey unfolds into a world of heritage and serenity. The Shigar Valley, renowned for its royal history and beautifully restored forts, offers a glimpse into Baltistan's aristocratic past. Further east, the elegant landscapes of Khaplu Valley in Ghanche District reveal traditional wooden architecture, historic mosques, and riverside villages that feel frozen in time.",
      "Designed specifically for international travellers seeking luxury travel in northern Pakistan, this region seamlessly blends natural beauty, cultural immersion, and relaxed pacing — ideal for couples, families, photographers, and discerning explorers seeking comfort, depth, and unforgettable memories.",
    ],
    signature: [
      {
        title: "Heritage Stays",
        body: "Carefully selected accommodations, private transport, and expert local guides allow travellers to explore Baltistan in comfort without sacrificing authenticity — from restored heritage forts to boutique lodges overlooking dramatic mountain backdrops.",
      },
      {
        title: "Wilderness Exploration",
        body: "From the Cold Desert of Skardu to the turquoise Kachura Lakes, days unfold across some of the most striking high-altitude terrain in the Karakoram — paced for comfort, photography, and quiet reflection.",
      },
      {
        title: "Royal Heritage",
        body: "Shigar Fort, Khaplu Palace, and the valleys around them carry centuries of Baltistan's aristocratic history — woven into your stay through guided tours, private courtyard teas, and curated dining inspired by traditional Balti flavours.",
      },
    ],
    highlights: ["Shigar Valley", "Khaplu Palace", "Kachura Lakes", "Cold Desert"],
    subValleys: [
      {
        name: "Khaplu Valley — Refined Heritage & Timeless Elegance",
        body: "Stay in restored heritage palaces and boutique lodges overlooking emerald fields and dramatic mountain backdrops, where history and comfort blend seamlessly. Enjoy curated dining inspired by traditional Balti flavours, private courtyard teas, riverside walks, and peaceful evenings under starlit skies.",
      },
      {
        name: "Shigar Valley — Royal Legacy & Natural Sophistication",
        body: "Immerse yourself in the regal charm of Shigar Valley, staying in luxury heritage forts surrounded by orchards and cold desert landscapes. Savour chef-crafted meals using organic local produce, enjoyed in private garden settings or historic stone courtyards, with exclusive fort tours and bonfire nights beneath towering peaks.",
      },
      {
        name: "Ghanche Valley — Authentic Luxury in Untouched Landscapes",
        body: "Experience the softer side of the Karakoram with elegant lodges nestled among green valleys, rivers, and traditional villages. Indulge in slow, thoughtfully prepared cuisine blending local Balti specialties with international comforts, served in serene open-air settings.",
      },
    ],
    relatedTourSlugs: ["last-paradise", "mountains-meet-stars"],
  },
  {
    slug: "chitral",
    name: "Chitral Valley",
    subtitle: "Chitral Valley Tour",
    region: "Hindu Kush · Khyber Pakhtunkhwa",
    heroImage: "/dest-chitral.jpg",
    tagline: "Experience Chitral in style.",
    intro: [
      "Located in the heart of Khyber Pakhtunkhwa, Chitral Valley is one of Pakistan's most spectacular and culturally rich destinations, offering a rare blend of scenic landscapes, ancient traditions, and refined mountain hospitality. Framed by the towering peaks of the Hindu Kush range, including Tirich Mir (7,708m) — the highest mountain in the region — Chitral unfolds into a breathtaking panorama of snow-capped summits, alpine meadows, and fertile valleys.",
      "Among Chitral's most iconic experiences are the Kalash Valleys (Bumburet, Rumbur, and Birir), home to the ancient Kalash civilisation — one of the world's most unique indigenous cultures. Guests can explore traditional villages, vibrant festivals, and centuries-old customs that remain beautifully preserved. The journey continues to Garam Chashma, famous for its natural hot springs.",
      "Cultural landmarks such as Chitral Fort, historic mosques, and traditional bazaars provide insight into the region's royal heritage, while the legendary Shandur Pass (3,700m) hosts the world-famous Shandur Polo Festival — one of the most extraordinary sporting spectacles in the Himalayas.",
    ],
    signature: [
      {
        title: "Curated Retreats",
        body: "Auriga provides exclusive access to handpicked boutique lodges, heritage-style retreats, and elegant mountain resorts, each offering panoramic views of snow-capped peaks, lush valleys, and the flowing Chitral River — accommodations that reflect traditional Chitrali architecture while seamlessly incorporating modern luxury.",
      },
      {
        title: "Authentic Cultural Immersion",
        body: "Your cultural journey begins with guided visits to Chitral Fort and traditional mosques, where centuries-old architecture and royal history reveal Chitral's legacy of resilience and mountain life shaped by the Hindu Kush. Immersion is further enriched through traditional music and dance, and visits to the culturally unique Kalash Valleys.",
      },
    ],
    highlights: ["Kalash Valleys", "Shandur Polo Ground", "Garam Chashma", "Tirich Mir (7,708m)"],
    relatedTourSlugs: ["chitral-phunder"],
  },
  {
    slug: "astore",
    name: "Astore Valley",
    subtitle: "The Last Heaven",
    region: "Himalaya · Gilgit-Baltistan",
    heroImage: "/dest-astore.jpg",
    tagline: "The last heaven.",
    intro: [
      "Astore Valley, nestled in the heart of Gilgit-Baltistan, is one of the region's most breathtaking alpine destinations, offering a remarkable blend of dramatic mountain scenery, lush forests, glacial rivers, and traditional highland communities. Encircled by towering peaks, including the majestic Nanga Parbat (8,126m), the valley unfolds into a rich mosaic of alpine meadows, dense pine forests, and fertile valleys.",
      "The journey begins with the scenic charm of Rama Valley, renowned for its rolling green meadows and the iconic Rama Lake, set beneath dramatic granite cliffs. Beyond Rama, the experience extends into the dramatic expanse of Rupal Valley, famed for hosting the Rupal Face of Nanga Parbat — the highest vertical mountain face in the world.",
      "The journey continues through the scenic beauty of Chilim, a hidden valley of fertile fields and cascading waterfalls, before reaching the remote splendour of Minimarg — a pristine high-altitude plateau near the Line of Control, celebrated for its sweeping grasslands, wildflower fields, and dramatic mountain horizons.",
    ],
    signature: [
      {
        title: "Curated Retreats",
        body: "Auriga offers privileged access to boutique lodges, secluded alpine retreats, and elegant mountain camps, each selected for panoramic vistas and elevated comfort. From fireside evenings beneath starlit skies to private gourmet dining inspired by regional flavours, every element is curated for effortless luxury and a profound connection to nature.",
      },
      {
        title: "Adventure with Elegance",
        body: "Explore the untouched beauty of Rama Valley, Chilim, and Minimarg through guided high-altitude treks, scenic valley walks, alpine lake explorations, and exclusive wilderness camping. From remote mountain trails to private luxury camps beneath star-lit skies, every detail is elevated through expert guides and premium camping setups.",
      },
    ],
    highlights: ["Rama Lake", "Rupal Valley Face", "Minimarg Plateau", "Nanga Parbat (8,126m)"],
    featuredTrek: {
      title: "Rakaposhi Base Camp Trek",
      subtitle: "An iconic journey to the Queen of Karakoram",
      overview: [
        { label: "Trek Duration", value: "4 Days" },
        { label: "Maximum Altitude", value: "3,500m" },
        { label: "Difficulty Level", value: "Easy to Moderate" },
        { label: "Best Season", value: "May to October" },
        { label: "Starting Point", value: "Minapin Village, Nagar Valley" },
        { label: "Ideal For", value: "Beginners, photographers, families, first-time trekkers" },
      ],
      days: [
        {
          title: "Arrival in Nagar Valley — Drive to Minapin Village",
          meta: "Altitude 2,000m · 2–3 hours from Hunza or Gilgit",
          body: "Your journey begins with a scenic drive into Nagar Valley, followed by a short transfer to Minapin Village, the gateway to Rakaposhi Base Camp. Surrounded by terraced fields and towering peaks, Minapin offers your first clear views of Rakaposhi and Diran Peak. After meeting your trekking team, you'll receive a full trek briefing and gear check.",
          overnight: "Guesthouse in Minapin",
          highlights: "Village life, sunset views of Rakaposhi, cultural interaction",
        },
        {
          title: "Minapin to Hapakun Campsite",
          meta: "Altitude 2,700m · 4–5 hours · Easy to Moderate",
          body: "The trek begins on a well-marked trail that climbs through pine forests, mountain streams, and grazing pastures. As you gain altitude, views of Rakaposhi's massive face become more dramatic. Hapakun is a peaceful alpine meadow, ideal for rest and acclimatisation.",
          overnight: "Camping at Hapakun",
          highlights: "Rakaposhi Glacier views, forest trails, alpine meadows",
        },
        {
          title: "Hapakun to Rakaposhi Base Camp (Taghaphari)",
          meta: "Altitude 3,500m · 5–6 hours · Moderate",
          body: "The most rewarding day of the trek. The trail opens into wide alpine terrain with uninterrupted views of Rakaposhi Glacier and ice walls. You'll reach Taghaphari, a stunning campsite directly facing the north face of Rakaposhi — one of the most dramatic mountain views in the Karakoram.",
          overnight: "Camping at Base Camp",
          highlights: "Close-up Rakaposhi views, glacier scenery, photography",
        },
        {
          title: "Rakaposhi Base Camp to Minapin — End of Trek",
          meta: "5–6 hours downhill",
          body: "After breakfast at base camp, begin your descent back to Minapin along the same route. The downhill walk is easier and allows time to enjoy the landscape from a new perspective. Upon reaching Minapin, the trek officially concludes, with onward transfer to Hunza or Gilgit.",
          highlights: "Relaxed descent, final mountain views, trek completion",
        },
      ],
    },
    relatedTourSlugs: ["mountains-meet-stars", "nagar-valley"],
  },
  {
    slug: "nagar",
    name: "Nagar Valley",
    subtitle: "The Karakoram's Hidden Giant",
    region: "Nagar · Karakoram",
    heroImage: "/rakaposhi-moon.jpg",
    tagline: "Beneath Rakaposhi and Diran Peak.",
    intro: [
      "Across the river from Hunza, Nagar Valley unfolds beneath Rakaposhi (7,788m) — one of the most visually striking mountains in the world, rising almost vertically from the valley floor. Nagar offers a quieter, rawer side of the Karakoram: glacier basecamps, alpine meadows, and traditional villages where life follows centuries-old rhythms.",
      "The Rakaposhi Base Camp Trek from Minapin Village is one of the most scenic and accessible trekking experiences in northern Pakistan, unfolding through fertile farmlands, pine and juniper forests, and wide alpine meadows before reaching the dramatic, glacier-fed Rakaposhi Base Camp — big mountain drama without extreme altitude or difficult terrain.",
      "Beyond Minapin, Nagar's wider valley holds the Hoper Glacier and the remote Michar Kho Valley — Karakoram wilderness at its most raw, ideal for travellers seeking glacier treks and alpine basecamps away from the more frequented Hunza side of the river.",
    ],
    signature: [
      {
        title: "Glacier Basecamps",
        body: "Guided access to Rakaposhi Base Camp and the Hoper Glacier, with experienced trekking teams, premium camping setups, and close-up views of ice walls and glacier-fed streams — designed for travellers who want raw Himalayan beauty without pushing their physical limits.",
      },
      {
        title: "Village Life & Quiet Wilderness",
        body: "Stay in traditional guesthouses in Minapin surrounded by terraced fields and towering peaks, with sunset views of Rakaposhi and genuine cultural interaction — a quieter counterpoint to Hunza's more travelled valley floor.",
      },
    ],
    highlights: ["Rakaposhi Basecamp", "Hoper Glacier", "Michar Kho Valley", "Diran Peak"],
    relatedTourSlugs: ["nagar-valley"],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find(d => d.slug === slug);
}
