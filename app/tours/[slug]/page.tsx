import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import TourCollectionPage from "@/components/guide/TourCollectionPage";
import { TOURS, getTour, type Tour } from "@/lib/tours";
import { TOUR_COLLECTIONS, getTourCollection } from "@/lib/tour-collections";
import { absoluteUrl, pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import TourClient from "./TourClient";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [...TOUR_COLLECTIONS, ...TOURS].map(({ slug }) => ({ slug }));
}

function tourTitle(t: Tour) {
  return t.seoTitle ?? `${t.name}: ${t.duration} in ${t.region}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getTourCollection(slug);
  if (collection) {
    return pageMetadata({
      title: collection.seoTitle,
      description: collection.seoDescription,
      path: `/tours/${slug}`,
      image: collection.heroImage,
    });
  }
  const tour = getTour(slug);
  if (!tour) return {};
  return pageMetadata({
    title: tourTitle(tour),
    description: tour.seoDescription ?? `${tour.tagline} A private, tailor made journey by ${SITE_NAME}, ${tour.when}.`,
    path: `/tours/${slug}`,
    image: tour.heroImage,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const collection = getTourCollection(slug);
  if (collection) return <TourCollectionPage collection={collection} />;

  const tour = getTour(slug);
  if (!tour) notFound();

  const path = `/tours/${slug}`;
  const trip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.tagline,
    url: absoluteUrl(path),
    image: absoluteUrl(tour.heroImage),
    touristType: "Luxury travellers",
    itinerary: { "@type": "Place", name: `${tour.region}, Pakistan` },
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      price: tour.priceUSD,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
    },
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tours", path: "/tours" },
            { name: tour.name, path },
          ]),
          trip,
        ]}
      />
      <TourClient slug={slug} />
    </>
  );
}
