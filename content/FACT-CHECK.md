# Phase 1 fact-check list

Every guide page in `content/` is `draft: true`. Drafts show on the dev server but are left out of the live site and the sitemap.
To publish a page: check the items below, fill in its `TODO (Auriga team)` comment with a first-hand detail, replace placeholder photos, then delete the `draft: true` line.

Pages link to each other through `relatedPages`. A published page can't link to a draft: the build fails until both are published or the link is removed.

## Verified sources used

- **Gilgit climate table**: Pakistan Meteorological Department figures, as published in the Wikipedia Gilgit weather box (checked against the page source, 19 Nov 2026). The normals period isn't stated there, so it's worth confirming with PMD if you can.
- **Hunza climate table**: Climate-Data.org modelled averages for Aliabad. There's no official long-term station in central Hunza. The page says so.
- **Not used**: Open-Meteo's archive and forecast data. Both show a large wet bias in these valleys (for Gilgit, about 1,400 mm/year against roughly 108 mm actual), and the free API isn't licensed for commercial use.

## Per page

### /destinations/gilgit/weather
- [ ] Seasonal advice matches your experience.
- [ ] Optional: confirm the normals period with PMD.

### /destinations/hunza/weather
- [ ] Valley floor elevation range (2,200–2,500 m) and the blossom timing.
- [ ] That many guesthouses close in winter.

### /destinations/hunza/passu-cones
- [ ] Tupopdan height (about 6,100 m).
- [ ] Drive time Karimabad → Passu (about 1.5 h).
- [ ] Best light and viewpoints.
- [ ] Gulmit described as the old summer capital.

### /destinations/hunza/baltit-fort
- [ ] Age (about 700 years) and the AKTC restoration (reopened 1996).
- [ ] Guided tours only, current opening hours and entry arrangements.
- [ ] **Photo**: the hero is a general Hunza aerial. Replace with a photo of Baltit Fort.

### /destinations/skardu/kharpocho-fort
- [ ] Attribution to Ali Sher Khan Anchan (late 16th century) and the meaning "king of forts".
- [ ] Climb time (about 45 min), the path's condition, and that the mosque survives.
- [ ] **Photo**: the hero is misty Skardu. Replace with the fort.

### /destinations/skardu/katpana-desert
- [ ] Elevation (about 2,200 m) and drive time from Skardu (about 15 min).
- [ ] That Katpana and Sarfaranga are separate locations, as written.

### /pakistan/festivals/cherry-blossom-hunza
- [ ] Bloom timing (late March to April, apricot then cherry).
- [ ] Local festival details, if you want to name them.

### /experiences/stargazing
- [ ] Places and seasons match where you take guests.
- [ ] Add how you run stargazing (telescope, guide, camp setup).

### /travel/noc-permits ⚠️ highest risk
- [ ] Every section against current Ministry of Interior and GB Tourism Department rules.
- [ ] The current list of restricted areas that need an NOC, for foreigners and for Pakistanis.
- [ ] Trekking-permit zones and liaison-officer rules. Lead times.
- [ ] The Deosai entry fee statement.

### /trekking/rush-lake
- [ ] Lake altitude (about 4,700 m), duration (4–6 days), season (July–September).
- [ ] Route details: start at Hopar, glacier crossing, the stage and camp names you use.
- [ ] Peaks visible from Rush Peak.
- [ ] Whether any permit applies.
- [ ] **Photo**: the hero is Rakaposhi. Replace with Rush Lake if you have one.

### /destinations/ghizer/phander-lake
- [ ] Drive time from Gilgit and the lake's altitude.
- [ ] Trout fishing, and that the road to Shandur closes in winter.

### /trekking/naltar-lakes
- [ ] Drive time from Gilgit, lake names (Satrangi, Blue Lake), altitudes.
- [ ] That jeeps are needed for the last section, and the Naltar Pass trek.
- [ ] **Photo**: the hero is an Astore meadow. Replace with Naltar.

## Live on merge (not drafts): please also review

- **/destinations/gilgit** and **/destinations/fairy-meadows** hubs (`lib/destinations.ts`)
  - Fairy Meadows: about 3,300 m, the jeep from Raikot Bridge towards Tato, a walk of about 3 hours, season May–October, two nights on your journeys.
  - Gilgit: flights from Islamabad, a first night in Gilgit.
- **/tours/hunza, /tours/skardu, /tours/fairy-meadows, /tours/from-islamabad** (`lib/tour-collections.ts`)
  - The copy only uses facts from `lib/tours.ts`.
  - Check the FAQ answers about flights and driving.
- **/tours/gilgit-baltistan, /tours/chitral, /tours/from-lahore, /tours/from-karachi** (added in Phase 2)
  - Gilgit-Baltistan: the claim that every transfer, permit and porter is arranged.
  - Lahore and Karachi: the claim that direct flights to Skardu "have operated at times". Remove it if you'd rather not mention it.
  - Chitral: the Kalash spring festival and Shandur timing.
- **Price mismatch (pre-existing)**: the `/tours` listing shows different "From" prices than `lib/tours.ts`. For example, The Last Paradise is $2,800 on the listing and $3,100 in the tour data. The new tour landing pages use the `lib/tours.ts` prices.
