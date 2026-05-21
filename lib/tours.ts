export interface Hotel {
  name: string;
  description: string;
  image: string;
}

export interface Tour {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  when: string;
  price: string;
  duration: string;
  difficulty?: string;
  maxAltitude?: string;
  intro: string;
  sections: { heading: string; body: string }[];
  highlights: string[];
  hotels: Hotel[];
  relatedSlugs: string[];
}

export const TOURS: Tour[] = [
  {
    slug: "last-paradise",
    name: "The Last Paradise",
    region: "Hunza & Skardu",
    tagline: "Twelve days across Pakistan's most iconic mountain realms — Skardu, Deosai, Gilgit, and Hunza.",
    heroImage: "/hunza-lady-finger.jpg",
    galleryImages: [
      "/lp-camping-deosai.jpg",
      "/lp-foggy-skardu.jpg",
      "/lp-katpana-chalet.jpg",
      "/lp-indus-river.jpg",
    ],
    when: "May – October",
    price: "From $2,800 pp",
    duration: "12 days",
    intro:
      "This is our most iconic journey — a masterpiece of design, discovery, and emotion crafted for travellers who seek the world's last great frontiers without compromise. Over twelve extraordinary days, the expedition unfolds across Pakistan's most spellbinding mountain realms: the turquoise lakes and royal valleys of Skardu, the vast golden silence of Deosai, the ancient forts and shimmering horizons of Hunza. Every detail is considered. Every moment is earned.",
    sections: [
      {
        heading: "Where the journey begins — Skardu",
        body:
          "Your adventure opens in Skardu, the legendary gateway to the Karakoram. Over several immersive days, the valley reveals its many faces: the tranquil turquoise waters of Upper and Lower Kachura Lakes, the regal elegance of Shigar Valley and its restored fort, and the poetic beauty of Khaplu, where royal palaces rest beneath towering peaks. Every day brings a new revelation — hidden waterfalls, sweeping viewpoints, riverside picnics, and intimate cultural encounters woven together by your private guide.",
      },
      {
        heading: "Deosai — the land of giants",
        body:
          "The journey ascends into Deosai National Park, where vast golden plains stretch endlessly toward distant snow-capped horizons, broken only by crystalline streams and wandering Himalayan wildlife. Crossing Deosai is a surreal experience — where silence becomes sound and scale reshapes perception. We camp on the plateau for one night, in a setup designed for comfort rather than endurance. From here, we descend gently into Gilgit, transitioning toward the next realm of wonder.",
      },
      {
        heading: "The Kingdom of Light — Hunza",
        body:
          "Beyond Gilgit, the road unfurls toward the mythical valley of Hunza, celebrated for its dramatic scenery, ancient heritage, and legendary hospitality. Explore the timeless grandeur of Altit and Baltit Forts, perched high above the valley, guarding centuries of Silk Road legacy. Journey onward into Upper Hunza, where landscapes grow even more dramatic — the luminous turquoise of Attabad Lake, the daring crossing of Hussaini Suspension Bridge, the serene stillness of Borith Lake, and the iconic spires of the Passu Cones rising sharply into the sky.",
      },
      {
        heading: "Khunjerab Pass — the roof of the world",
        body:
          "At the edge of the world, the road climbs toward the legendary Khunjerab Pass, the highest paved international border crossing on Earth. At nearly 4,700 metres, mountains, clouds, and silence converge, creating a moment of profound awe and reflection. Days in Hunza flow with gentle grace — scenic drives, guided village walks, curated dining experiences, and unhurried moments of contemplation. Nights unfold beneath star-laden skies, where the mountains glow silver and time seems to pause.",
      },
    ],
    highlights: [
      "Private guided visit to Khaplu Palace and Shigar Fort",
      "Overnight glamping on Deosai Plains (4,114m)",
      "Dawn boat crossing on Attabad Lake",
      "Drive to Khunjerab Pass (4,700m)",
      "Altit and Baltit Forts with expert historian guide",
      "Passu Cones and Hussaini Suspension Bridge walk",
      "Hand-selected luxury lodges throughout",
      "Seamless private transfers across all regions",
    ],
    hotels: [
      {
        name: "Shigar Fort Residence",
        description: "A 400-year-old fort converted into Pakistan's most atmospheric heritage hotel. Every room is different; every ceiling tells a story.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
      },
      {
        name: "Serena Hunza",
        description: "Perched above Karimabad with uninterrupted views of Rakaposhi, Serena blends traditional Hunzai architecture with genuine comfort.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
      },
    ],
    relatedSlugs: ["realm-of-fairies", "mountains-meet-stars", "nagma-valley"],
  },

  {
    slug: "mountains-meet-stars",
    name: "Where Mountains Meet the Stars",
    region: "Astore & Skardu Valley",
    tagline: "Eight days through epic mountain landscapes, vast golden plateaus, and glacial valleys — the Auriga way.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
    galleryImages: [
      "/mms-astore-meadow1.jpg",
      "/mms-astore-meadow2.jpg",
      "/mms-minimarg-valley.jpg",
      "/mms-deosai-storm.jpg",
    ],
    when: "April – October",
    price: "From $2,200 pp",
    duration: "8 days",
    intro:
      "Designed for discerning travellers who seek immersive beauty, elevated comfort, and authentic adventure, this curated eight-day journey unfolds across the breathtaking realms of Astore, Deosai, and Skardu, revealing northern Pakistan at its most spectacular. Beginning in Gilgit, your expedition moves through lush sanctuaries, boundless high-altitude plateaus, and royal mountain valleys — each transition as cinematic as the last.",
    sections: [
      {
        heading: "Astore Valley — sanctuary in the shadow of Nanga Parbat",
        body:
          "Your expedition ascends into the lush sanctuary of Astore Valley, home to the enchanting Rama Lake and the dramatic Rupal Valley, framed by the colossal south face of Nanga Parbat. Wander through fragrant pine forests, explore rolling alpine meadows, and discover glacial streams that carve through pristine wilderness — each moment revealing landscapes that feel untouched by time.",
      },
      {
        heading: "Deosai — boundless golden plains",
        body:
          "The journey flows across the legendary Deosai National Park — the Land of Giants — where boundless golden plains stretch to the horizon, punctuated by crystal-clear rivers, wild Himalayan marmots, and an overwhelming sense of scale and stillness. Crossing through the scenic Chilim region, this passage offers one of the most surreal high-altitude drives on Earth.",
      },
      {
        heading: "Skardu Valley — raw grandeur meets royal heritage",
        body:
          "Descending into the majestic heart of Skardu Valley, you enter a world where raw mountain grandeur meets royal heritage. Discover the timeless beauty of Shigar Valley and Fort, the regal elegance of Khaplu Palace, the mirror-like turquoise waters of Upper and Lower Kachura Lakes, and the wild serenity of Basho Valley. Cultural encounters, scenic viewpoints, and curated wilderness dining weave together days of effortless exploration and refined leisure.",
      },
    ],
    highlights: [
      "Rama Lake at dawn through pine forest",
      "Rupal Face viewpoint — world's highest mountain wall",
      "Overnight glamping on Deosai Plains",
      "Private visit to Khaplu Palace",
      "Shigar Valley and Fort exploration",
      "Upper and Lower Kachura Lakes",
      "Expert local guide and private vehicle throughout",
      "Evenings beneath starlit skies with crackling fires",
    ],
    hotels: [
      {
        name: "Shigar Fort Residence",
        description: "A 400-year-old fort converted into Pakistan's most atmospheric heritage hotel, surrounded by fruit orchards and the sound of the Shigar River.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
      },
      {
        name: "Deosai Plains Camp",
        description: "Our signature glamping setup on the plateau — canvas tents at 4,114m with proper beds, gas heaters, and a night sky that redefines darkness.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      },
    ],
    relatedSlugs: ["last-paradise", "himalayan-dream", "nagma-valley"],
  },

  {
    slug: "khukush-lake-phunder",
    name: "Khukush Lake & Phunder",
    region: "Ghizer Valley",
    tagline: "Seven days of luxury alpine exploration through northern Pakistan's most untouched terrain.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
    ],
    when: "June – September",
    price: "From $1,800 pp",
    duration: "7 days",
    intro:
      "This immersive seven-day journey blends refined comfort with raw alpine exploration, guiding travellers through dramatic landscapes, hidden valleys, and pristine high-altitude wilderness. Beginning in Gilgit, we acclimatise gently at the turquoise oasis of Khalti Lake before moving deeper into the enchanting Phunder Valley — and finally ascending to the secluded sanctuary of Khukush Lake, where civilisation fades and nature commands complete attention.",
    sections: [
      {
        heading: "Days 1 & 2 — Khalti Lake and Phunder Valley",
        body:
          "Your adventure begins in Gilgit, the gateway to the Karakoram. The first day is dedicated to gentle acclimatisation — travelling along scenic mountain roads toward the tranquil oasis of Khalti Lake, where fresh alpine air and a relaxed pace allow your body to adjust to increasing altitude. We continue onward to the enchanting Phunder Valley, famed for its turquoise lake, rolling meadows, and snow-capped summits, checking into your exclusive retreat as twilight settles over the water.",
      },
      {
        heading: "Days 3 & 4 — Khukush Lake and luxury alpine camps",
        body:
          "The adventure deepens as you trek toward the secluded Khukush Lake, traversing wildflower-filled pastures, whispering pine forests, and crystal-clear mountain streams. Upon reaching the lake, settle into luxury alpine camps set beside its shimmering turquoise waters. For two magical nights, experience complete immersion in nature — guided walks, serene lakeside picnics, stargazing under crystal-clear skies, and moments of quiet reflection amid breathtaking alpine solitude.",
      },
      {
        heading: "Days 5 – 7 — Return through Phunder to Gilgit",
        body:
          "After a peaceful morning by the lake, retrace your steps back to Phunder Valley for a rejuvenating evening by the lakeside — stories around a crackling fire beneath a canopy of stars. The final days return to Gilgit, allowing time to explore local bazaars, cultural landmarks, and scenic viewpoints before departure. These closing hours offer the perfect balance of reflection and soft adventure before you leave the mountains behind.",
      },
    ],
    highlights: [
      "Acclimatisation at Khalti Lake",
      "Trek to secluded Khukush Lake",
      "Two nights in luxury alpine camps",
      "Guided nature walks and lakeside picnics",
      "Stargazing from high-altitude wilderness",
      "Phunder Valley trout and mountain silence",
      "Expert local guide and private vehicle throughout",
      "Curated wilderness dining at every camp",
    ],
    hotels: [
      {
        name: "Phunder Lake Retreat",
        description: "An exclusive lakeside retreat in Phunder Valley, designed to blend modern luxury with natural harmony — floor-to-ceiling mountain views, warm hospitality.",
        image: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
      },
      {
        name: "Khukush Alpine Camp",
        description: "Our private luxury camping setup at the lake edge — proper expedition tents, beds rated for altitude, and a camp cook who has fed trekkers in these mountains for decades.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      },
    ],
    relatedSlugs: ["chitral-phunder", "last-paradise", "himalayan-dream"],
  },

  {
    slug: "chitral-phunder",
    name: "Wilderness of Chitral & Phunder",
    region: "Chitral · Ghizer Valley",
    tagline: "Twelve nights through Pakistan's most enchanting and least explored regions — the Auriga way.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",
      "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
    ],
    when: "May – September",
    price: "From $2,600 pp",
    duration: "12 nights",
    intro:
      "This twelve-night tailored journey invites you into one of Pakistan's most enchanting and least explored regions — a land of towering peaks, emerald valleys, crystalline rivers, and timeless culture. From the cultural heart of Chitral Valley to the serene alpine beauty of Phunder, Ghizer, and Yaseen, this expedition is an ode to slow travel, indulgent living, and nature at its most pristine. Every detail has been thoughtfully designed to ensure you experience the region not as a visitor, but as a privileged guest.",
    sections: [
      {
        heading: "Cultural gateway — Chitral Valley",
        body:
          "Your adventure begins with a scenic arrival in Chitral, a valley steeped in legend, hospitality, and centuries-old tradition. Nestled among dramatic mountain ranges, Chitral is home to the fascinating Kalash culture, historic forts, and vibrant bazaars. Explore the grand Chitral Fort, wander through markets filled with intricate handicrafts and gemstones, and join an exclusive lunch experience with a Kalash family in the mystical valleys that have preserved their ancient way of life for millennia. Evenings unfold over candlelit dinners of organic mountain produce, lantern-lit and river-soft.",
      },
      {
        heading: "Shandur Top — the roof of the world",
        body:
          "Leaving Chitral, the journey ascends to the iconic Shandur Top — famously known as the Roof of the World — offering breathtaking panoramic views at 3,734 metres. This is the world's highest polo ground, a high grassland above the clouds ringed by glaciated peaks. Even outside festival season, the plateau is extraordinary: a place of low light and enormous sky, where the silence is so complete you can hear your own heartbeat.",
      },
      {
        heading: "Phunder and beyond — Yaseen, Gupis, and Gahkuch",
        body:
          "The journey descends toward the tranquil paradise of Phunder Valley, where each private chalet offers floor-to-ceiling views and nature becomes part of your living space. Glide across the mirror-like waters of Phunder Lake. Venture to breathtaking Yaseen Valley — a land of towering peaks, emerald fields, and vibrant mountain culture. Continue to the historic Gupis Fort, standing as a silent guardian of ancient trade routes, before exploring the serene beauty of Gahkuch Valley, where winding rivers, alpine meadows, and traditional villages offer a deeply immersive final chapter.",
      },
    ],
    highlights: [
      "Culturally sensitive guided visit to Kalash Valleys",
      "Exclusive family lunch experience in Bumburet",
      "Shandur Pass (3,734m) — world's highest polo ground",
      "Gliding on the mirror-still Phunder Lake",
      "Yaseen Valley and Gupis Fort exploration",
      "Heritage lodge in Chitral with views of Tirich Mir",
      "Private chalet accommodation in Phunder Valley",
      "Expert guides fluent in Khowar, Burushaski and English",
    ],
    hotels: [
      {
        name: "Hindukush Heights",
        description: "Perched above Chitral town with panoramic views of Tirich Mir, this boutique hotel combines traditional Chitrali wood carving with genuine mountain hospitality.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",
      },
      {
        name: "Phunder Valley Retreat",
        description: "Private chalets with floor-to-ceiling valley views, where nature becomes part of your living space and every evening ends around a fire beneath the stars.",
        image: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
      },
    ],
    relatedSlugs: ["khukush-lake-phunder", "realm-of-fairies", "last-paradise"],
  },

  {
    slug: "realm-of-fairies",
    name: "The Realm of Fairies",
    region: "Fairy Meadows & Hunza",
    tagline: "Ten days from the shadow of Nanga Parbat to the ancient kingdom of Hunza — where exploration becomes transformation.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg",
      "/hero-attabad.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
    ],
    when: "May – October",
    price: "From $2,400 pp",
    duration: "10 days",
    intro:
      "This extraordinary ten-day luxury expedition across Gilgit, Fairy Meadows, and Hunza is a masterfully curated journey through Pakistan's most spellbinding landscapes. Designed for travellers who seek rare beauty, elevated comfort, and profound emotional connection, the experience flows seamlessly from raw wilderness into refined mountain elegance — delivering moments of wonder that linger for a lifetime.",
    sections: [
      {
        heading: "The Realm of Giants — Fairy Meadows",
        body:
          "Your journey begins in Gilgit, where adventure, culture, and grandeur converge. The expedition ascends into one of the most iconic landscapes on Earth: Fairy Meadows, a legendary alpine sanctuary resting in the shadow of Nanga Parbat — the ninth-highest mountain in the world. Reaching Fairy Meadows is an adventure in itself, a dramatic ascent along winding mountain roads followed by a gentle trek through pine forests and wildflower-filled clearings. As the meadow reveals itself, the scene feels almost unreal: emerald pastures, wooden cabins, whispering pines, and the colossal ice-clad face of Nanga Parbat towering above.",
      },
      {
        heading: "Two nights in an ethereal world",
        body:
          "Over two unforgettable days, immerse yourself in Fairy Meadows completely. Wander pristine alpine trails, explore forested ridges, and gaze upon glacier-fed streams flowing silently through the valley. Evenings unfold beneath skies ablaze with stars, where campfires flicker and silence becomes a sacred luxury. Here, time dissolves and nature commands full attention. After descending, return to Gilgit for a night of rest and reflection, preparing for the next realm of beauty.",
      },
      {
        heading: "The Kingdom of Light — Hunza",
        body:
          "Beyond Gilgit, the Karakoram Highway unfurls toward the mythical land of Hunza — a valley of radiant landscapes, ancient civilisations, and legendary longevity. Explore the iconic Altit and Baltit Forts, timeless guardians of the Silk Road. Venture into Upper Hunza, where nature reveals its most dramatic forms: the glowing turquoise of Attabad Lake, the heart-racing crossing of the Hussaini Suspension Bridge, the reflective calm of Borith Lake, and the razor-sharp silhouettes of the Passu Cones. The journey crescendos at Khunjerab Pass, where earth, sky, and silence merge into one overwhelming moment of awe.",
      },
    ],
    highlights: [
      "Guided trek to Fairy Meadows with overnight stay",
      "Close-up views of Nanga Parbat's ice-clad face",
      "Campfire evenings under Himalayan stars",
      "Private boat crossing on Attabad Lake",
      "Baltit and Altit Forts with historian guide",
      "Hussaini Suspension Bridge and Passu Cones",
      "Drive to Khunjerab Pass (4,700m)",
      "Hand-selected luxury lodges throughout",
    ],
    hotels: [
      {
        name: "Fairy Meadows Camp",
        description: "Our curated camp at the meadow edge — comfortable tents with Nanga Parbat filling the entire horizon at dawn.",
        image: "https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg",
      },
      {
        name: "Eagle's Nest Hotel, Hunza",
        description: "Arguably the finest viewpoint in Hunza, Eagle's Nest offers private cottages above the clouds with sunset views across five mountain ranges.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg",
      },
    ],
    relatedSlugs: ["last-paradise", "chitral-phunder", "himalayan-dream"],
  },

  {
    slug: "nagma-valley",
    name: "Nagma Valley Trek",
    region: "Baltistan",
    tagline: "Eight days into Pakistan's best-kept secret — a pristine sanctuary of silence and untouched alpine beauty.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
    ],
    when: "June – September",
    price: "From $1,900 pp",
    duration: "8 days",
    difficulty: "Moderate",
    intro:
      "Hidden deep within the remote folds of Baltistan, Nagma Valley is our best-kept secret: a pristine sanctuary of silence, soaring peaks, and untouched natural beauty, far removed from conventional travel routes and crowded trails. We begin in Skardu before transitioning into the regal calm of Shigar Valley — two carefully paced days allowing space for acclimatisation and immersion — before venturing into the wilderness that few travellers ever witness.",
    sections: [
      {
        heading: "Skardu and Shigar — acclimatisation and immersion",
        body:
          "We begin in Skardu, the cultural and adventure heart of northern Pakistan. Over two carefully paced days, we allow space for acclimatisation, exploration, and immersion — wandering ancient forts, strolling along glacial rivers, and soaking in panoramic mountain views that prepare you for the deeper wilderness ahead. Shigar Valley, with its restored Mughal-era fort and fruit orchards, offers a first taste of Baltistan's extraordinary heritage.",
      },
      {
        heading: "Into the wild — three days in Nagma Valley",
        body:
          "For three unforgettable days, we venture into the secluded realm of Nagma Valley, where civilisation fades and nature takes centre stage. Towering snow-draped peaks, whispering pine forests, cascading waterfalls, and crystal-clear alpine streams create a setting of absolute serenity. Guided explorations lead across rolling meadows and hidden mountain trails, revealing landscapes few travellers ever witness. Days are spent in curated wilderness picnics and unhurried exploration. Evenings unfold beneath vast starlit skies, where crackling fires and mountain silence deliver moments of deep stillness.",
      },
      {
        heading: "Return to Skardu — leisure and reflection",
        body:
          "After the raw beauty of Nagma Valley, we return to Skardu for two days of gentle leisure and cultural immersion. Explore serene lakes, vibrant bazaars, and ancient landmarks — or simply unwind at your luxury retreat, allowing time to reflect and absorb the journey's emotional richness. These final days offer the perfect balance before departure, where the mountains leave their mark quietly and permanently.",
      },
    ],
    highlights: [
      "Three immersive days in remote Nagma Valley",
      "Curated wilderness camping with private chef",
      "Shigar Fort overnight stay",
      "Guided exploration of alpine meadows and trails",
      "Stargazing from high-altitude wilderness camps",
      "Skardu town, lakes, and cultural landmarks",
      "Expert Balti-speaking local guide",
      "Complete solitude — no tourist crowds",
    ],
    hotels: [
      {
        name: "Shigar Fort Residence",
        description: "A 400-year-old fort converted into Pakistan's most atmospheric heritage hotel. The ideal base before venturing into the wilderness.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      },
      {
        name: "Nagma Valley Camp",
        description: "Our signature wilderness camp deep in Nagma Valley — luxury tents, proper beds, a camp cook, and absolute mountain solitude.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
      },
    ],
    relatedSlugs: ["mountains-meet-stars", "last-paradise", "himalayan-dream"],
  },

  {
    slug: "himalayan-dream",
    name: "Seven Day Himalayan Dream",
    region: "Astore to Minimarg",
    tagline: "A meticulously curated seven-day alpine journey through Astore, Rupal, Rama Lake, and Minimarg.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
    ],
    when: "June – September",
    price: "From $2,000 pp",
    duration: "7 days",
    intro:
      "Unfolding across the majestic landscapes of Astore Valley, Rupal Valley, Rama Lake, and Minimarg, this meticulously curated seven-day luxury adventure begins and concludes in Gilgit, guiding travellers through some of northern Pakistan's most awe-inspiring alpine frontiers. Designed for explorers seeking refined comfort, breathtaking scenery, and immersive cultural encounters, this journey reveals the untouched elegance of the Himalayan and Karakoram realms.",
    sections: [
      {
        heading: "Gilgit and the ascent to Rama Lake",
        body:
          "Your expedition commences in Gilgit, the vibrant gateway to the northern mountains. Day two takes you toward the enchanting Astore Valley, ascending through winding mountain roads to reach the iconic Rama Lake — a pristine alpine jewel nestled amid dense pine forests and towering snow-capped peaks. Guided nature walks, lakeside relaxation, and panoramic photography sessions are followed by an overnight stay surrounded by pure mountain serenity.",
      },
      {
        heading: "Rupal Valley — the world's highest mountain wall",
        body:
          "The journey continues into the dramatic landscapes of Rupal Valley, home to the majestic south face of Nanga Parbat, the world's ninth-highest mountain. Known as one of the most awe-inspiring mountain walls on Earth — 4,600 metres of near-vertical rock and ice — Rupal Valley offers sweeping meadows, glacial rivers, and breathtaking viewpoints. We drive here in the afternoon, when the face catches the last sun.",
      },
      {
        heading: "Minimarg — wildflowers at the edge of the world",
        body:
          "Day four ascends toward the remote wonder of Minimarg, a hidden alpine paradise perched near the Line of Control. Renowned for its rolling grasslands, vibrant wildflower fields, and boundless horizons, Minimarg offers unparalleled tranquility and natural splendour. The journey itself unfolds as a visual masterpiece, revealing dramatic mountain landscapes at every turn. Spend the night immersed in vast open plains beneath towering Himalayan sentinels, before two final leisurely days in Gilgit to explore, reflect, and depart.",
      },
    ],
    highlights: [
      "Rama Lake at dawn in pine forest",
      "Rupal Face viewpoint — world's highest vertical wall",
      "Overnight in Minimarg wildflower meadows",
      "Nanga Parbat (8,126m) from multiple vantage points",
      "Private vehicle and expert local guide throughout",
      "Curated wilderness picnics and dining",
      "Gilgit cultural exploration and local bazaars",
      "Suitable for first-time Pakistan travellers",
    ],
    hotels: [
      {
        name: "Astore Mountain Lodge",
        description: "A thoughtfully appointed lodge in Astore Valley with a garden terrace facing Nanga Parbat — perfectly positioned between Rama Lake and the Rupal Valley.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
      },
      {
        name: "Minimarg High Camp",
        description: "Our private camp on the Minimarg plateau — canvas tents, proper beds, and a sky full of stars above one of Pakistan's most remote high-altitude meadows.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      },
    ],
    relatedSlugs: ["mountains-meet-stars", "nagma-valley", "realm-of-fairies"],
  },
];

export function getTour(slug: string): Tour | undefined {
  return TOURS.find(t => t.slug === slug);
}
