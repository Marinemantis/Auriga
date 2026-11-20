import type { Faq } from "@/lib/faqs";
import { TOURS } from "@/lib/tours";

/**
 * Keyword landing pages that live beside the itineraries at /tours/[slug],
 * e.g. /tours/hunza ("hunza tour packages"). Each one lists matching tours.
 * See SEO-KEYWORD-PLAN.md, section 2.
 */
export interface TourCollection {
  slug: string;
  /** H1, e.g. "Hunza Tours". */
  name: string;
  /** Small label above the H1. */
  eyebrow: string;
  heroImage: string;
  /** Primary keyword this page targets. */
  keyword: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  /** Itineraries from lib/tours.ts to list, in display order. */
  tourSlugs: string[];
  sections?: { heading: string; body: string[] }[];
  faqs?: Faq[];
  /** Links to /destinations/[slug] hubs. */
  relatedDestinationSlugs?: string[];
}

export const TOUR_COLLECTIONS: TourCollection[] = [
  {
    slug: "hunza",
    name: "Hunza Tours",
    eyebrow: "Tailor made Hunza tour packages",
    heroImage: "/dest-hunza.jpg",
    keyword: "hunza tour packages",
    seoTitle: "Hunza Tour Packages: Private & Tailor Made Hunza Tours",
    seoDescription:
      "Private, tailor made Hunza tour packages from 8 to 12 days: Baltit and Altit forts, Attabad Lake, Passu Cones and Khunjerab Pass, with hand-picked lodges throughout.",
    intro: [
      "Hunza is the valley most people picture when they think of northern Pakistan: terraced orchards beneath Rakaposhi and Ultar, the Silk Road forts of Baltit and Altit, the turquoise water of Attabad Lake and the sawtooth Passu Cones further north. It is also the valley most often rushed, squeezed into a day or two between long drives.",
      "Our Hunza journeys are built the other way round. Each one is private and tailor made, with time in Karimabad and Upper Hunza, hand-picked places to stay, and the logistics handled from the moment you arrive, so the days are spent in the valley rather than on the road.",
    ],
    tourSlugs: ["realm-of-fairies", "last-paradise", "nagar-valley"],
    sections: [
      {
        heading: "What a Hunza journey with Auriga looks like",
        body: [
          "The Realm of Fairies pairs two nights at Fairy Meadows beneath Nanga Parbat with Hunza's forts, Attabad Lake, the Hussaini Suspension Bridge, Borith Lake, the Passu Cones and a drive up to Khunjerab Pass at around 4,700 metres. The Last Paradise links Hunza with Skardu and the Deosai Plains over twelve days. Our Nagar Valley journey crosses the river to the quieter side of the valley, with treks to the glacier base camps beneath Rakaposhi.",
          "Any of these can be adjusted: more time in one place, a different pace, a particular lodge, or a combination we haven't listed. Every Hunza tour we run is planned around the people travelling.",
        ],
      },
      {
        heading: "When to go",
        body: [
          "Our Hunza journeys run from May to October. Spring brings the apricot and cherry blossom, summer is the season for high passes and treks, and autumn turns the poplars gold, which many of our guests consider the most beautiful time of all. Winter travel is possible but quieter, colder and more limited.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many days do you need for a Hunza tour?",
        a: "We recommend at least a week. Our Hunza journeys run from 8 to 12 days, which leaves time for Karimabad, Upper Hunza and Khunjerab Pass without spending most of each day in a vehicle.",
      },
      {
        q: "What is the best time for a Hunza tour?",
        a: "May to October. Late spring is blossom season, summer is best for treks and Khunjerab Pass, and autumn has the famous golden colours.",
      },
      {
        q: "Are Hunza tours private or group tours?",
        a: "Every Auriga journey is private and tailor made around you. The itineraries on this page are starting points that we adapt to your dates, pace and interests.",
      },
      {
        q: "How do you get to Hunza?",
        a: "Most travellers fly from Islamabad to Gilgit and continue by road along the Karakoram Highway to Hunza. Flights are weather-dependent, so we build a little flexibility into every itinerary.",
      },
    ],
    relatedDestinationSlugs: ["hunza", "nagar", "fairy-meadows"],
  },
  {
    slug: "skardu",
    name: "Skardu Tours",
    eyebrow: "Tailor made Skardu tour packages",
    heroImage: "/dest-skardu.jpg",
    keyword: "skardu tour packages",
    seoTitle: "Skardu Tour Packages: Private Skardu & Deosai Tours",
    seoDescription:
      "Private Skardu tour packages from 8 to 12 days: Shigar, the Katpana cold desert, Deosai Plains and Baltistan's hidden valleys, with stays such as the Shigar Fort Residence.",
    intro: [
      "Skardu is the heart of Baltistan: a wide valley of sand dunes, lakes and orchards on the Indus, ringed by some of the highest mountains on Earth and the gateway to K2, Deosai and the old princely valleys of Shigar and Khaplu.",
      "Our Skardu journeys are private and tailor made, combining Baltistan's heritage, from restored forts to village life, with its wilder side: the Katpana cold desert, the high Deosai Plains and remote valleys few visitors reach.",
    ],
    tourSlugs: ["last-paradise", "mountains-meet-stars", "nagma-valley"],
    sections: [
      {
        heading: "What a Skardu journey with Auriga looks like",
        body: [
          "Where Mountains Meet the Stars crosses the Deosai Plains between Astore and Skardu, with a night at a camp on the plateau. The Nagma Valley Trek heads into one of Baltistan's quietest valleys. The Last Paradise combines Skardu and Deosai with Gilgit and Hunza over twelve days. Several of these journeys include nights at the Shigar Fort Residence, a restored royal fort in the Shigar valley.",
        ],
      },
      {
        heading: "When to go",
        body: [
          "Our Skardu journeys run between April and October, depending on the route. Deosai is usually reached in summer, from around June to September, when the plateau is snow-free and in flower.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many days do you need for a Skardu tour?",
        a: "Our Skardu journeys run from 8 to 12 days. A week is enough for Skardu, Shigar and Deosai; longer lets you combine Baltistan with Hunza.",
      },
      {
        q: "Can you visit Deosai on a Skardu tour?",
        a: "Yes, in summer. Where Mountains Meet the Stars and The Last Paradise both cross the Deosai Plains, and we can add Deosai to a tailor made Skardu itinerary when the plateau is open.",
      },
      {
        q: "How do you get to Skardu?",
        a: "By air from Islamabad, or by road. Flights are short but weather-dependent, so we always plan a margin around them.",
      },
    ],
    relatedDestinationSlugs: ["skardu", "astore"],
  },
  {
    slug: "fairy-meadows",
    name: "Fairy Meadows Tours",
    eyebrow: "Fairy Meadows & Nanga Parbat",
    heroImage: "/rof-nanga-parbat-meadows.jpg",
    keyword: "fairy meadows tour",
    seoTitle: "Fairy Meadows Tours: Private Trips to Nanga Parbat",
    seoDescription:
      "Private Fairy Meadows tours with two nights beneath Nanga Parbat, the jeep, porters and camp arranged for you, combined with Hunza over ten days.",
    intro: [
      "Fairy Meadows is a pine-fringed alpine meadow at the foot of Nanga Parbat, the ninth-highest mountain in the world. The last part of the journey in is on foot, which keeps the meadow quiet, green and unlike anywhere else in Pakistan.",
      "On our Fairy Meadows tours you stay two nights rather than one, so you see the mountain at dawn, by day and under the stars, with the jeep, porters and camp arranged so you only carry a day pack.",
    ],
    tourSlugs: ["realm-of-fairies"],
    sections: [
      {
        heading: "The Realm of Fairies",
        body: [
          "Our ten-day journey begins in Gilgit, spends two nights at Fairy Meadows, and then continues up the Karakoram Highway into Hunza for the forts, Attabad Lake, Borith Lake, the Passu Cones and Khunjerab Pass. It runs from May to October and can be adapted to your dates and pace.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have to hike to reach Fairy Meadows?",
        a: "Yes. After a jeep ride from Raikot Bridge, the final stretch is a walk of around three hours. Porters carry the luggage, so you walk with just a day pack.",
      },
      {
        q: "When can you visit Fairy Meadows?",
        a: "From around May to October, when the jeep track is open and the meadow is green. Our Fairy Meadows journey runs in that window.",
      },
    ],
    relatedDestinationSlugs: ["fairy-meadows", "hunza", "gilgit"],
  },
  {
    slug: "from-islamabad",
    name: "Tours from Islamabad",
    eyebrow: "Northern Pakistan from the capital",
    heroImage: "/fullbleed-sunset-road.jpg",
    keyword: "tours from islamabad",
    seoTitle: "Tours from Islamabad to Hunza, Skardu & Fairy Meadows",
    seoDescription:
      "Private tours from Islamabad to Hunza, Skardu, Fairy Meadows, Ghizer and Astore. How the journey north works by air and road, and the itineraries to choose from.",
    intro: [
      "Islamabad is where most journeys into northern Pakistan really start. From the capital you reach the mountains either by a short, spectacular flight to Gilgit or Skardu, or overland along the Karakoram Highway, one of the great road journeys of the world.",
      "Every Auriga journey is private and tailor made. Tell us where you are starting from and we will plan the connection north around your dates, so the first day of your trip is spent travelling well rather than working out logistics.",
    ],
    tourSlugs: [
      "realm-of-fairies", "last-paradise", "mountains-meet-stars", "nagar-valley",
      "khukush-lake-phunder", "chitral-phunder", "nagma-valley", "himalayan-dream",
    ],
    sections: [
      {
        heading: "Flying or driving north",
        body: [
          "Flights from Islamabad to Gilgit and Skardu are short and fly past some of the highest mountains on Earth, but they depend on clear weather and can be delayed or cancelled. Driving takes much longer, a long day or more depending on the route and season, but the road itself becomes part of the trip.",
          "Because of the weather, we build a margin into every itinerary that relies on a flight, and we can plan the route north by road when that suits you better.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you get from Islamabad to Hunza?",
        a: "Fly from Islamabad to Gilgit and continue by road to Hunza, or drive the whole way along the Karakoram Highway. We plan whichever suits your dates best.",
      },
      {
        q: "How do you get from Islamabad to Skardu?",
        a: "By a direct flight, or by road. Flights are quick but weather-dependent, so we plan a margin around them.",
      },
      {
        q: "Can you build a tour around my arrival in Islamabad?",
        a: "Yes. Every journey we run is tailor made, so we plan it around your arrival date and the way you want to travel north.",
      },
    ],
    relatedDestinationSlugs: ["hunza", "skardu", "gilgit", "fairy-meadows"],
  },  {
    slug: "gilgit-baltistan",
    name: "Gilgit-Baltistan Tours",
    eyebrow: "Northern Pakistan, tailor made",
    heroImage: "/dest-hero-panorama.jpg",
    keyword: "gilgit baltistan tour",
    seoTitle: "Gilgit-Baltistan Tours: Private Northern Areas Tour Packages",
    seoDescription:
      "Private, tailor made tours of Gilgit-Baltistan and Pakistan's northern areas: Hunza, Skardu, Fairy Meadows, Nagar, Ghizer and Astore, from 7 to 12 days.",
    intro: [
      "Gilgit-Baltistan, still often called the Northern Areas, is where three of the world's great mountain ranges meet: the Karakoram, the Himalaya and the Hindu Kush. It holds K2 and Nanga Parbat, the old Silk Road valleys of Hunza and Nagar, the high plateau of Deosai, and the dunes and forts of Baltistan.",
      "Our journeys through Gilgit-Baltistan are private and tailor made. Each one balances the famous places with quieter valleys, with hand-picked places to stay and every transfer, permit and porter arranged, so the time is spent in the mountains rather than organising them.",
    ],
    tourSlugs: [
      "last-paradise", "realm-of-fairies", "mountains-meet-stars", "nagar-valley",
      "khukush-lake-phunder", "nagma-valley", "himalayan-dream",
    ],
    sections: [
      {
        heading: "Choosing a route",
        body: [
          "For a first journey, The Last Paradise covers the great classics over twelve days: Skardu, Deosai, Gilgit and Hunza. The Realm of Fairies pairs Fairy Meadows and Nanga Parbat with Hunza. For something quieter, Khukush Lake & Phunder heads west into Ghizer, Seven Day Himalayan Dream explores Astore, Rama Lake and Minimarg, and the Nagma Valley Trek goes deep into Baltistan.",
        ],
      },
      {
        heading: "When to go",
        body: [
          "Most of our Gilgit-Baltistan journeys run between May and October, when the high roads and passes are open. Spring brings blossom to the valleys, summer opens Deosai and the treks, and autumn brings clear skies and golden colour.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Gilgit-Baltistan the same as the Northern Areas?",
        a: "Yes. Gilgit-Baltistan was officially known as the Northern Areas until 2009, and many people still use the old name.",
      },
      {
        q: "How many days do you need for a Gilgit-Baltistan tour?",
        a: "At least a week for one region, such as Hunza or Skardu, and 10 to 14 days to combine two or more. Our journeys run from 7 to 12 days.",
      },
      {
        q: "What is the best time to visit Gilgit-Baltistan?",
        a: "May to October. Late spring for blossom, summer for high passes, Deosai and treks, and autumn for colour and clear weather.",
      },
    ],
    relatedDestinationSlugs: ["hunza", "skardu", "gilgit", "fairy-meadows", "nagar", "astore"],
  },
  {
    slug: "chitral",
    name: "Chitral Tours",
    eyebrow: "Kalash valleys, Shandur & the Hindu Kush",
    heroImage: "/dest-chitral.jpg",
    keyword: "chitral tours",
    seoTitle: "Chitral Tours: Private Kalash Valley & Shandur Journeys",
    seoDescription:
      "Private Chitral tours through the Kalash valleys, Chitral Fort and the Shandur Pass, continuing to Phunder and the Ghizer valley. Twelve nights, tailor made.",
    intro: [
      "Chitral lies in the Hindu Kush, beneath Tirich Mir, the highest mountain of the range. It is home to the Kalash valleys of Bumburet, Rumbur and Birir, to the old royal fort of Chitral, and to one of the most beautiful mountain roads in Pakistan, over the Shandur Pass to Gilgit-Baltistan.",
      "Our Chitral journey is private and tailor made, with culturally sensitive visits to the Kalash valleys, a heritage lodge with views of Tirich Mir, and the crossing of Shandur, the world's highest polo ground, into the Ghizer valley.",
    ],
    tourSlugs: ["chitral-phunder"],
    sections: [
      {
        heading: "Wilderness of Chitral & Phunder",
        body: [
          "Over twelve nights, the journey begins in Chitral, with the fort, the bazaars and the Kalash valleys, then climbs to Shandur at 3,734 metres and descends into Ghizer for Phunder Lake, the Yasin valley and Gupis Fort. It runs from May to September and can be adapted to your dates.",
        ],
      },
    ],
    faqs: [
      {
        q: "When is the best time for a Chitral tour?",
        a: "May to September, when the Shandur Pass is open. Many travellers also time their visit to the Kalash spring festival or the Shandur Polo Festival in summer.",
      },
      {
        q: "Can you visit the Kalash valleys on a Chitral tour?",
        a: "Yes. Our Chitral journey includes guided, culturally sensitive visits to the Kalash valleys, including a family lunch in Bumburet.",
      },
    ],
    relatedDestinationSlugs: ["chitral", "ghizer"],
  },
  {
    slug: "from-lahore",
    name: "Tours from Lahore",
    eyebrow: "Northern Pakistan from Lahore",
    heroImage: "/lp-indus-river.jpg",
    keyword: "tours from lahore",
    seoTitle: "Tours from Lahore to Hunza, Skardu & the Northern Areas",
    seoDescription:
      "Private tours from Lahore to Hunza, Skardu, Fairy Meadows and the rest of Gilgit-Baltistan. How the journey north works by air and road, and the itineraries to choose from.",
    intro: [
      "From Lahore, the mountains of the north are closer than they feel. Most journeys connect through Islamabad, a few hours away by motorway or a short flight, and continue north by air to Gilgit or Skardu, or overland along the Karakoram Highway.",
      "Every Auriga journey is private and tailor made. Tell us when you are leaving Lahore and we will plan the connection north around your dates.",
    ],
    tourSlugs: [
      "realm-of-fairies", "last-paradise", "mountains-meet-stars", "nagar-valley",
      "khukush-lake-phunder", "chitral-phunder", "nagma-valley", "himalayan-dream",
    ],
    sections: [
      {
        heading: "Getting north from Lahore",
        body: [
          "The simplest route is via Islamabad, then a flight to Gilgit or Skardu, or the drive north. Direct flights between Lahore and Skardu have operated at times, so we check what is flying for your dates. Mountain flights depend on clear weather, so we always plan a margin around them.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you get from Lahore to Hunza?",
        a: "Usually via Islamabad: fly or drive to Islamabad, then fly to Gilgit and continue by road to Hunza, or drive the whole way along the Karakoram Highway.",
      },
      {
        q: "How do you get from Lahore to Skardu?",
        a: "By flying, either direct when a route is operating or via Islamabad, or by road. We plan whichever suits your dates and the season.",
      },
    ],
    relatedDestinationSlugs: ["hunza", "skardu", "gilgit"],
  },
  {
    slug: "from-karachi",
    name: "Tours from Karachi",
    eyebrow: "Northern Pakistan from Karachi",
    heroImage: "/fullbleed-golden-mountains.jpg",
    keyword: "tours from karachi",
    seoTitle: "Tours from Karachi to Hunza, Skardu & the Northern Areas",
    seoDescription:
      "Private tours from Karachi to Hunza, Skardu, Fairy Meadows and Gilgit-Baltistan, with flights north planned around your dates and tailor made itineraries.",
    intro: [
      "From Karachi, the quickest way into the mountains is by air: a flight north to Islamabad and on to Gilgit or Skardu, and within a day you can go from the Arabian Sea to the foot of the Karakoram.",
      "Every Auriga journey is private and tailor made. Tell us your dates and we will plan the flights and connections north so the journey starts smoothly.",
    ],
    tourSlugs: [
      "realm-of-fairies", "last-paradise", "mountains-meet-stars", "nagar-valley",
      "khukush-lake-phunder", "chitral-phunder", "nagma-valley", "himalayan-dream",
    ],
    sections: [
      {
        heading: "Getting north from Karachi",
        body: [
          "Most travellers fly from Karachi to Islamabad and connect to Gilgit or Skardu. Direct flights between Karachi and Skardu have operated in some seasons, so we check what is flying for your dates. Because mountain flights depend on the weather, we build a margin into every itinerary.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you get from Karachi to Hunza?",
        a: "Fly to Islamabad, then on to Gilgit, and continue by road to Hunza. We plan the connections and the transfer for you.",
      },
      {
        q: "How do you get from Karachi to Skardu?",
        a: "By air, either direct when a route is operating or via Islamabad. We check current flights for your dates.",
      },
    ],
    relatedDestinationSlugs: ["hunza", "skardu", "gilgit", "fairy-meadows"],
  },
];

export function getTourCollection(slug: string): TourCollection | undefined {
  return TOUR_COLLECTIONS.find(c => c.slug === slug);
}

// Collections and itineraries share the /tours/[slug] namespace.
const tourSlugs = new Set(TOURS.map(t => t.slug));
for (const c of TOUR_COLLECTIONS) {
  if (tourSlugs.has(c.slug)) {
    throw new Error(`Tour collection slug "${c.slug}" collides with a tour in lib/tours.ts`);
  }
  for (const s of c.tourSlugs) {
    if (!tourSlugs.has(s)) throw new Error(`Tour collection "${c.slug}" lists unknown tour "${s}"`);
  }
}
