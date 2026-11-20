# Auriga Ventures: SEO Keyword Plan

> Source: GB Guide SEO Keyword Plan (145 pages, 202,740 monthly searches), mapped onto the existing Auriga routes. November 2026.
> Vol = monthly searches. KD = keyword difficulty. "—" = no volume figure in the source.

---

## 1. URL structure

Everything fits into routes that already exist, plus three new sections (`/trekking`, `/travel`, `/pakistan/mountains`).

| Section | URL pattern | Status | Source tier |
|---|---|---|---|
| Tours (bookable) | `/tours/[slug]` | **Existing route.** Add collection pages next to the current itineraries | Tier 5 + "tour packages" rows |
| Destination hubs | `/destinations/[slug]` | **Existing route.** Each hub is the "complete guide" pillar page | Tier 1, Tier 4 |
| Destination guides | `/destinations/[slug]/[topic]` | New nested route | Tier 1, Tier 4 |
| Destinations index | `/destinations` | New page (currently no index) | Tier 4 "Hidden Valleys" hub |
| Trekking | `/trekking` and `/trekking/[slug]` | New section | Tier 2 |
| Activities | `/experiences/[slug]` | **Existing hub**, add detail pages | Tier 3 |
| Festivals | `/pakistan/festivals/[slug]` | **Existing hub**, add detail pages | Tier 3 |
| Mountains | `/pakistan/mountains` and `/pakistan/mountains/[slug]` | New, beside `/pakistan/mountain-passes` | Tier 8 |
| Practical travel | `/travel` and `/travel/[slug]` | New section | Tier 7 |
| Journal | `/journal/[slug]` | New. Editorial posts only (see section 9) | CONTENT-PLAN.md |

### How `/tours/[slug]` holds both page types

`/tours/[slug]` already serves the 8 itineraries in `lib/tours.ts` (`last-paradise`, `realm-of-fairies`, ...). Collection pages such as `/tours/hunza` go in the same route:

- New data file `lib/tour-collections.ts`. Each collection has a slug, target keyword, intro copy, FAQs and a filter (destination tags) that picks its tours.
- `app/tours/[slug]/page.tsx` looks up the slug in collections first, then in tours, otherwise `notFound()`.
- A build-time check fails if a collection slug and a tour slug collide. None collide today.
- Itinerary pages link up to their collection (`/tours/last-paradise` → `/tours/hunza`, `/tours/skardu`). Collection pages list their itineraries.

### Pages merged to avoid competing with ourselves

The source lists some keywords twice. Each keyword gets one page only:

| Source rows | Single Auriga page |
|---|---|
| `/hunza/tour-packages/` + `/tours/hunza/` (both "hunza tour packages", 1,600) | `/tours/hunza` |
| `/skardu/tour-packages/` + `/tours/skardu/` (1,000) | `/tours/skardu` |
| `/hunza/how-to-reach/` + `/travel/islamabad-to-hunza/` (480) | `/travel/islamabad-to-hunza`. The Hunza hub gets a "Getting there" section linking to it |
| `/skardu/how-to-reach/` + `/travel/lahore-to-skardu/` (1,300) | `/travel/lahore-to-skardu`, same approach |
| Hunza "Things to Do" (170) + "Places to Visit" (390) | `/destinations/hunza/things-to-do` targets both |
| Skardu "Things to Do" (880) + "Tourist Places" (260) | `/destinations/skardu/things-to-do` targets both |
| Gilgit "Things to Do" + "Places to Visit" (140 each) | `/destinations/gilgit/things-to-do` |
| Khaplu + Khaplu Palace (590 each) | `/destinations/skardu/khaplu` |
| Katpana Desert + Sarfaranga Cold Desert | `/destinations/skardu/katpana-desert` |
| Chapursan Valley (in Tier 1 and Tier 4) | `/destinations/hunza/chapursan-valley` |
| Nanga Parbat Base Camp (in the Fairy Meadows hub and the trekking hub) | `/trekking/nanga-parbat-base-camp` |
| K2 itinerary / cost / permits / best time | One long `/trekking/k2-base-camp` page with jump links. Split it later only if one section starts ranking on its own |

---

## 2. Tours: `/tours/[slug]` (bookable, highest priority for revenue)

| Page | URL | Keyword | Vol | KD | Auriga tours to feature |
|---|---|---|---|---|---|
| Tours hub | `/tours` | tours / northern pakistan tours | — | — | Existing page, retitle and add copy |
| Hunza Tours | `/tours/hunza` | hunza tour packages | 1,600 | 30 | last-paradise, realm-of-fairies, nagar-valley |
| Skardu Tours | `/tours/skardu` | skardu tour packages | 1,000 | 21 | last-paradise, mountains-meet-stars, nagma-valley |
| Fairy Meadows Tours | `/tours/fairy-meadows` | fairy meadows tour | 170 | 10 | realm-of-fairies |
| K2 Base Camp Tours | `/tours/k2-base-camp` | k2 base camp tour | 880 | 40 | **No tour yet.** Needs a new itinerary or a bespoke enquiry page |
| Gilgit-Baltistan / Northern Areas Tours | `/tours/gilgit-baltistan` | gilgit baltistan tour + northern areas tour | 300 | 4–6 | All GB tours. **Merged** into one page (same search intent) |
| Chitral Tours | `/tours/chitral` | chitral tours | 70 | 4 | chitral-phunder |
| Tours from Islamabad | `/tours/from-islamabad` | tours from islamabad | 70 | 2 | All (every tour starts in Islamabad) |
| Tours from Lahore | `/tours/from-lahore` | tours from lahore | 390 | 19 | All, plus Lahore pickup or flight details |
| Tours from Karachi | `/tours/from-karachi` | tours from karachi | 480 | 30 | All, plus flight connection details |
| ~~Naran Kaghan Tours~~ | — | naran kaghan tour | 1,000 | 35 | **Skipped.** No Naran product. Add it if you build one |

Also: rework each existing itinerary page around its main keyword (e.g. `realm-of-fairies` → "fairy meadows and hunza tour").

---

## 3. Destination hubs and guides: `/destinations/[slug]/[topic]`

Each hub (`/destinations/hunza`) is the pillar page for "[place] guide" and "[place] valley". Each topic page links back to its hub and across to the matching `/tours/[place]` collection.

### Hunza: `/destinations/hunza` (existing)

| Topic | URL | Vol | KD | Notes |
|---|---|---|---|---|
| Weather | `/destinations/hunza/weather` | 49,500 | 38 | Live forecast + monthly climate table (see section 8) |
| Best Time to Visit | `/destinations/hunza/best-time-to-visit` | 140 | 16 | Month by month, linked to tour dates |
| Things to Do & Places to Visit | `/destinations/hunza/things-to-do` | 560 | 11–12 | Merged |
| Where to Stay | `/destinations/hunza/hotels` | 3,600 | 25 | Curated luxury stays (Serena Hunza etc.) |
| Food Guide | `/destinations/hunza/food` | 320 | 18 | |
| Hunza in Winter | `/destinations/hunza/in-winter` | 110 | 8 | |
| Hunza in Autumn | `/destinations/hunza/in-autumn` | 140 | 13 | |
| Karimabad | `/destinations/hunza/karimabad` | — | low | |
| Attabad Lake | `/destinations/hunza/attabad-lake` | 210 | 43 | |
| Baltit Fort ⭐ | `/destinations/hunza/baltit-fort` | — | ~8 | Build first |
| Altit Fort | `/destinations/hunza/altit-fort` | 170 | 31 | |
| Borith Lake | `/destinations/hunza/borith-lake` | 110 | 22 | |
| Eagle's Nest Viewpoint | `/destinations/hunza/eagles-nest` | 880 | 33 | Duikar |
| Khunjerab Pass | `/destinations/hunza/khunjerab-pass` | 260 | 6 | `/pakistan/mountain-passes` links here |
| Passu Cones ⭐ | `/destinations/hunza/passu-cones` | — | ~5 | Build first |
| Gulmit ⭐ | `/destinations/hunza/gulmit` | — | ~3 | |
| Chapursan Valley | `/destinations/hunza/chapursan-valley` | 210 | 13 | |
| Shimshal Valley | `/destinations/hunza/shimshal-valley` | 720 | 21 | Links to Shimshal Kuch festival |

### Skardu: `/destinations/skardu` (existing)

| Topic | URL | Vol | KD | Notes |
|---|---|---|---|---|
| Weather | `/destinations/skardu/weather` | high | — | |
| Things to Do & Tourist Places | `/destinations/skardu/things-to-do` | 1,140 | 21–22 | Merged |
| Where to Stay | `/destinations/skardu/hotels` | — | — | |
| Restaurants | `/destinations/skardu/restaurants` | 210 | 31 | |
| Shangrila Resort | `/destinations/skardu/shangrila-resort` | 8,100 | 40 | "Shangrila vs a private stay" angle |
| Deosai Plains | `/destinations/skardu/deosai-plains` | 320 | 10 | Deosai camp from mountains-meet-stars |
| Kachura Lake | `/destinations/skardu/kachura-lake` | 210 | 23 | |
| Satpara Lake ⭐ | `/destinations/skardu/satpara-lake` | — | low | |
| Shigar Valley | `/destinations/skardu/shigar-valley` | 260 | 24 | Reuse existing sub-valley copy |
| Shigar Fort | `/destinations/skardu/shigar-fort` | 2,400 | 36 | Auriga already books Shigar Fort Residence |
| Khaplu & Khaplu Palace | `/destinations/skardu/khaplu` | 590 | 36 | Merged |
| Basho Valley | `/destinations/skardu/basho-valley` | 390 | 17 | |
| Chunda Valley | `/destinations/skardu/chunda-valley` | 260 | 29 | |
| Kharpocho Fort ⭐ | `/destinations/skardu/kharpocho-fort` | — | ~5 | Build first |
| Katpana (Sarfaranga) Cold Desert ⭐ | `/destinations/skardu/katpana-desert` | — | ~3 | Build first, merged |
| Manthokha Waterfall ⭐ | `/destinations/skardu/manthokha-waterfall` | — | ~2 | |
| Sheosar Lake | `/destinations/skardu/sheosar-lake` | 40 | low | Inside Deosai |

### Gilgit: `/destinations/gilgit` (new hub)

| Topic | URL | Vol | KD | Notes |
|---|---|---|---|---|
| Hub / Complete Guide | `/destinations/gilgit` | — | — | New destination in `lib/destinations.ts` |
| Weather | `/destinations/gilgit/weather` | **60,500** | 38 | Biggest keyword in the plan |
| Things to Do & Places to Visit | `/destinations/gilgit/things-to-do` | 280 | 14–17 | Merged |
| Restaurants | `/destinations/gilgit/restaurants` | 140 | 28 | |
| Where to Stay | `/destinations/gilgit/hotels` | — | — | |
| Naltar Valley | `/destinations/gilgit/naltar-valley` | 110 | 5 | |
| Bagrot Valley | `/destinations/gilgit/bagrot-valley` | 110 | 29 | |
| Kargah Buddha ⭐ | `/destinations/gilgit/kargah-buddha` | — | ~3 | |
| Haramosh Valley | `/destinations/gilgit/haramosh-valley` | 1,300 | 22 | |

### Fairy Meadows: `/destinations/fairy-meadows` (new hub)

| Topic | URL | Vol | KD | Notes |
|---|---|---|---|---|
| Hub / Complete Guide | `/destinations/fairy-meadows` | **18,100** | low | Easiest big win. Includes a "The hike in" section (fairy meadows trek, 70) |
| How to Reach | `/destinations/fairy-meadows/how-to-reach` | high | low | Raikot Bridge jeep + hike |
| Camping ⭐ | `/destinations/fairy-meadows/camping` | — | ~3 | |
| Best Time to Visit | `/destinations/fairy-meadows/best-time-to-visit` | — | low | |

### Hidden valleys: Ghizer and Astore (Tier 4)

GB Guide hasn't published any of these yet.

| Page | URL | Vol | KD | Notes |
|---|---|---|---|---|
| All Destinations / Hidden Valleys | `/destinations` | — | — | New index page with a "Hidden valleys" section |
| Ghizer Valley | `/destinations/ghizer` | 720 | 25 | Renamed from `/destinations/phunder`, with a 301 redirect ("ghizer valley" has the volume). **Done** |
| Phander Lake ⭐ | `/destinations/ghizer/phander-lake` | — | ~3 | Build first |
| Gupis ⭐ | `/destinations/ghizer/gupis` | — | ~2 | |
| Yasin Valley | `/destinations/ghizer/yasin-valley` | 590 | 31 | chitral-phunder tour goes through Yaseen |
| Ishkoman Valley ⭐ | `/destinations/ghizer/ishkoman-valley` | — | ~2 | |
| Astore Valley | `/destinations/astore` | 140 | 19 | Existing hub, rework around the keyword |
| Minimarg | `/destinations/astore/minimarg` | 480 | 22 | himalayan-dream tour |
| Rama Lake | `/destinations/astore/rama-lake` | 40 | 22 | himalayan-dream tour |

Chitral and Nagar hubs stay as they are. The source has no extra keywords for them.

---

## 4. Trekking: `/trekking/[slug]` (new section)

Each trek page has a stats box (distance, days, max altitude, grade, permits) and a "Trek it with Auriga" card linking to the matching tour.

| Trek | URL | Vol | KD | Notes |
|---|---|---|---|---|
| All Treks hub | `/trekking` | — | — | Pillar |
| K2 Base Camp (itinerary, cost, permits, best time) | `/trekking/k2-base-camp` | 990 | 20–40 | One page, merged. Links to `/tours/k2-base-camp` |
| Gondogoro La | `/trekking/gondogoro-la` | 110 | 23 | |
| Concordia | `/trekking/concordia` | 140 | 21 | |
| Biafo-Hispar Snow Lake | `/trekking/snow-lake` | 110–210 | low | |
| Nanga Parbat Base Camp | `/trekking/nanga-parbat-base-camp` | 720 | 21 | realm-of-fairies |
| Nanga Parbat Rupal Face | `/trekking/rupal-face` | 110 | 9 | himalayan-dream (Rupal Valley) |
| Rakaposhi Base Camp | `/trekking/rakaposhi-base-camp` | 720 | 29 | nagar-valley |
| Rush Lake ⭐ | `/trekking/rush-lake` | 390 | low | Build first |
| Haramosh / Kutwal Lake | `/trekking/kutwal-lake` | 70 | 12 | |
| Laila Peak Base Camp | `/trekking/laila-peak-base-camp` | 1,600 | 26 | |
| Spantik Base Camp | `/trekking/spantik-base-camp` | 210 | 27 | nagar-valley includes it |
| Masherbrum Base Camp | `/trekking/masherbrum-base-camp` | 320 | 28 | |
| Hushe Valley ⭐ | `/trekking/hushe-valley` | — | ~5 | |
| Karambar Lake | `/trekking/karambar-lake` | 720 | 13 | |
| Naltar Lakes ⭐ | `/trekking/naltar-lakes` | — | ~2 | Build first |

---

## 5. Activities and festivals

### `/experiences/[slug]` (existing hub, add an "Activities" grid)

| Activity | URL | Vol | KD |
|---|---|---|---|
| Paragliding | `/experiences/paragliding` | 720 | 11 |
| Skiing in Naltar | `/experiences/skiing-naltar` | 260 | 22 |
| River Rafting | `/experiences/river-rafting` | 210 | 30 |
| Jeep Safari ⭐ | `/experiences/jeep-safari` | — | ~4 |
| Camping in GB | `/experiences/camping` | — | low |
| Rock Climbing at Trango | `/experiences/rock-climbing-trango` | 170 | 34 |
| Stargazing ⭐ | `/experiences/stargazing` | — | ~1 |

### `/pakistan/festivals/[slug]` (existing hub, each festival gets its own page)

| Festival | URL | Vol | KD | Notes |
|---|---|---|---|---|
| Shandur Polo Festival | `/pakistan/festivals/shandur-polo-festival` | 1,900 | 20 | chitral-phunder passes Shandur |
| Cherry Blossom Hunza ⭐ | `/pakistan/festivals/cherry-blossom-hunza` | — | ~2 | Publish before the April spike |

Optional later: the other 6 festivals already on the hub (Chilam Joshi, Choimus, etc.) can get their own pages from the existing copy.

---

## 6. Mountains: `/pakistan/mountains/[slug]` (new, in the Pakistan menu)

Each page has a stats box (height, first ascent, range, best viewpoint) and a "See it with Auriga" link (viewpoint tour or base camp trek).

| Peak | URL | Vol | KD | Links to |
|---|---|---|---|---|
| Mountains hub | `/pakistan/mountains` | — | — | |
| Nanga Parbat | `/pakistan/mountains/nanga-parbat` | 9,900 | 37 | Fairy Meadows, NP base camp |
| K2 | `/pakistan/mountains/k2` | 8,100 | 24 | K2 base camp trek |
| Laila Peak | `/pakistan/mountains/laila-peak` | 1,600 | 26 | Laila Peak BC, Hushe |
| Broad Peak | `/pakistan/mountains/broad-peak` | 720 | 35 | Concordia |
| Rakaposhi | `/pakistan/mountains/rakaposhi` | 720 | 29 | Rakaposhi BC, nagar-valley |
| Masherbrum | `/pakistan/mountains/masherbrum` | 320 | 28 | |
| Gasherbrum | `/pakistan/mountains/gasherbrum` | 260 | 18 | |
| Spantik (Golden Peak) | `/pakistan/mountains/spantik` | 210 | 27 | nagar-valley |
| Trango Towers | `/pakistan/mountains/trango-towers` | 170 | 34 | Rock climbing page |
| Haramosh Peak | `/pakistan/mountains/haramosh` | 110 | 11 | Kutwal Lake |

---

## 7. Practical travel: `/travel/[slug]` (new section)

Every guide ends with "Let Auriga handle this for you" and a link to the enquiry form.

| Guide | URL | Vol | KD | Notes |
|---|---|---|---|---|
| Travel hub | `/travel` | — | — | Also links `/pakistan/visa` |
| Islamabad to Hunza | `/travel/islamabad-to-hunza` | 480 | 10 | Also covers "how to reach hunza" |
| Lahore to Hunza | `/travel/lahore-to-hunza` | 880 | 7 | |
| Islamabad to Skardu | `/travel/islamabad-to-skardu` | — | low | |
| Lahore to Skardu | `/travel/lahore-to-skardu` | 1,300 | 16 | Also covers "how to reach skardu" |
| Gilgit to Skardu | `/travel/gilgit-to-skardu` | 90 | 11 | |
| Karakoram Highway | `/travel/karakoram-highway` | 2,400 | 49 | Hard keyword, long-term |
| Skardu Flights & Airport | `/travel/skardu-flights` | 90 | 25 | |
| Gilgit Airport | `/travel/gilgit-airport` | 260 | 25 | |
| NOC & Permits ⭐ | `/travel/noc-permits` | — | ~3 | Build first. Linked from `/pakistan/visa` |
| What to Pack ⭐ | `/travel/what-to-pack` | — | ~3 | |
| Best Time to Visit GB | `/travel/best-time-to-visit` | — | low | Reuse seasons copy from `/pakistan/about` |
| GB in Winter | `/travel/winter` | — | low | |
| GB Food Guide | `/travel/food-guide` | 260 | 25 | Links each area's food page |
| 7-Day Itinerary | `/travel/7-day-itinerary` | — | low | Links to the 7-day tours |
| 14-Day Itinerary | `/travel/14-day-itinerary` | — | low | Links to last-paradise, chitral-phunder |
| Budget Itinerary | — | — | ~2 | **Decision needed:** doesn't fit a luxury brand. Skip it, or write "What a GB trip really costs" instead |

**Not used:** Tier 6 "Tour Operators & Agencies" (110 vol in total). Auriga is an operator, so ranking competitors doesn't make sense. "tour operators in islamabad" is covered by `/tours/from-islamabad` and `/about`.

---

## 8. Technical work (do this before writing any content)

1. **Per-page metadata.** Every page is `"use client"` today, so every URL shares the title from `app/layout.tsx`. Split each page into a server `page.tsx` (with `generateMetadata` and `generateStaticParams`) that renders the existing client component.
2. **`app/sitemap.ts`** generated from all data files, **`app/robots.ts`**, and `metadataBase` plus canonical URLs in the layout.
3. **Content storage.** About 115 long pages is too much for TS strings. Use MDX in `content/<section>/<slug>.mdx` with frontmatter: `title`, `metaTitle`, `metaDescription`, `keyword`, `secondaryKeywords`, `heroImage`, `relatedTours`, `relatedPages`, `faqs`, `updated`. Tours and destinations can stay in `lib/` as they are.
4. **Page templates:** `GuidePage` (article plus a "Travel with Auriga" tour sidebar), `WeatherPage`, `TourCollectionPage`, `TrekPage` and `MountainPage` (both with a stats box), and `RoutePage` (distance, time, road or flight options).
5. **Weather pages.** Live 7-day forecast from Open-Meteo (free, no API key) fetched on the server with `revalidate: 10800`, plus a fixed month-by-month climate table and "what this means for your trip".
6. **Structured data:** `BreadcrumbList` everywhere, `FAQPage` where there are FAQs, `Article` on guides, `TouristTrip` on tours.
7. **Internal links:** guide → hub → `/tours/[place]` → enquiry. Breadcrumbs on every page. "Related" blocks driven by frontmatter.
8. **Navigation:** the "Destinations" menu item currently points to `/tours`. Split it into **Tours** (`/tours`) and a **Destinations** dropdown (`/destinations/*`). Rename the "Pakistan" dropdown to "Travel Guide" and add Trekking, Mountains, Travel and Permits.
9. **Redirect** `/destinations/phunder` → `/destinations/ghizer` (301) in `next.config.ts`. **Done**

---

## 9. What happens to CONTENT-PLAN.md

Most of its Priority 1, 2, 4 and 5 posts are now real pages in this plan (Passu Cones, Deosai, Shangrila, Islamabad to Hunza, K2, Rush Lake, ...). Write them there instead of as blog posts, using the voice and post structure CONTENT-PLAN.md describes. `/journal` keeps only the **Priority 3 editorial pieces** (founder story, "Why we only take 40 groups a year", client stories). Those link into the pages above.

---

## 10. Build order

| Phase | What | Pages |
|---|---|---|
| 0. Foundation | Everything in section 8 | — |
| 1. Revenue + build-first | `/tours/hunza`, `/tours/skardu`, `/tours/from-islamabad`, `/tours/fairy-meadows`, plus the 13 build-first pages: Gilgit weather, Hunza weather, Fairy Meadows hub, Passu Cones, Baltit Fort, Kharpocho Fort, Katpana Desert, Cherry Blossom Hunza, Stargazing, NOC & Permits, Rush Lake, Phander Lake, Naltar Lakes | ~17 |
| 2. New hubs | Gilgit hub, Ghizer rename, `/destinations` index, `/trekking`, `/travel`, `/pakistan/mountains` hubs, remaining tour collections | ~12 |
| 3. Hunza + Skardu depth | Remaining Hunza and Skardu topic pages (hotels, Shangrila, Shigar Fort first, since they have the most searches) | ~30 |
| 4. Trekking + mountains | Remaining trek and peak pages (Nanga Parbat, K2, Laila Peak first) | ~23 |
| 5. Travel, activities, the rest | Route guides, itineraries, activities, Gilgit and hidden-valley pages | ~33 |

About **115 new pages** in total, plus reworking the existing tour, destination and Pakistan pages.

Before publishing each page: one primary keyword per page, keyword in the title / H1 / URL / meta description, real Auriga photos, at least 3 internal links, one clear call to action.
