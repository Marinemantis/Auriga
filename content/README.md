# Guide content

Each `.mdx` file here becomes a page. The folder decides the URL:

| File | URL |
|---|---|
| `destinations/hunza/passu-cones.mdx` | `/destinations/hunza/passu-cones` |
| `trekking/rush-lake.mdx` | `/trekking/rush-lake` |
| `travel/noc-permits.mdx` | `/travel/noc-permits` |
| `mountains/k2.mdx` | `/pakistan/mountains/k2` |
| `experiences/stargazing.mdx` | `/experiences/stargazing` |
| `festivals/shandur-polo-festival.mdx` | `/pakistan/festivals/shandur-polo-festival` |

Destination folders must match a slug in `lib/destinations.ts`. Files starting with `_` are ignored.
The `/trekking`, `/travel` and `/pakistan/mountains` hub pages appear automatically once they have one published guide.
Which keyword each page targets is in `SEO-KEYWORD-PLAN.md`.

## Frontmatter

```yaml
---
title: "Passu Cones: How to See Pakistan's Most Photographed Peaks"  # H1 (required)
metaTitle: "Passu Cones, Hunza: Best Viewpoints & When to Go"         # <title>, optional; " | Auriga Ventures" is added
metaDescription: "Where to see the Passu Cones, the best light..."     # required, about 150 characters
keyword: "passu cones"                                                 # required, one primary keyword per page
secondaryKeywords: ["passu cathedral", "passu village"]
eyebrow: "Hunza Valley"                                                # small label above the H1
intro: "One or two sentences shown under the H1."
heroImage: "/rof-passu-cones.jpg"                                      # required, must exist in /public
heroAlt: "The Passu Cones above the Hunza River at sunrise"
stats:                                                                 # optional fact box
  - { label: "Altitude", value: "2,400 m" }
  - { label: "Best light", value: "Sunrise" }
relatedTours: ["realm-of-fairies", "last-paradise"]                    # slugs from lib/tours.ts
relatedPages: ["/destinations/hunza/attabad-lake", "/destinations/hunza"]
faqs:                                                                  # shown on the page and as FAQ structured data
  - q: "How far are the Passu Cones from Karimabad?"
    a: "About an hour's drive north on the Karakoram Highway."
updated: 2026-11-19                                                    # required
draft: true                                                            # optional: hidden in production builds
---
```

The build fails if a required field is missing, the hero image doesn't exist, or a `relatedTours` / `relatedPages` link points nowhere.

## Body

Plain Markdown: `## Headings`, lists, **bold**, links, tables, `> quotes` and images (`![alt](/image.jpg)`).
Use `## ` for section headings (the page title is already the H1).
For a fact box partway through the article: `<Stats items={[{ label: "Height", value: "8,611 m" }]} />`.

Follow the voice and structure in `CONTENT-PLAN.md`: first person, specific, real photos, one clear call to action (the enquiry block is added automatically at the end).
