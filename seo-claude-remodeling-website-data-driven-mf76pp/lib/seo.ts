import type { Metadata } from "next";
import { company } from "@/data/company";
import type { Service, ServiceFAQ } from "@/data/services";
import type { City } from "@/data/cities";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import type { Testimonial } from "@/data/testimonials";
import { cityLabel } from "@/lib/helpers";
import { generateSEODescription } from "@/lib/content";

export const SITE_URL = company.url;

/* ------------------------------------------------------------------ */
/* Metadata builders                                                    */
/* ------------------------------------------------------------------ */

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function buildMetadata({ title, description, path, image }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? "/images/og-default.svg";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: "website",
      locale: "en_US",
      images: [{ url: `${SITE_URL}${ogImage}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${ogImage}`],
    },
  };
}

export function serviceMetadata(service: Service): Metadata {
  return buildMetadata({
    title: `${service.name} in Dallas–Fort Worth | ${company.name}`,
    description: `${service.shortDescription} Free estimates across the DFW Metroplex. Licensed & insured. Call ${company.phoneDisplay}.`,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export function cityMetadata(city: City): Metadata {
  return buildMetadata({
    title: `Home Remodeling in ${cityLabel(city)} | ${company.name}`,
    description: `Trusted remodeling contractor serving ${cityLabel(city)} and ${city.county}: kitchens, bathrooms, painting, flooring, drywall & demolition. Free estimates — call ${company.phoneDisplay}.`,
    path: `/service-areas/${city.slug}`,
  });
}

/**
 * Hand-tuned title/description overrides for pages where exact character-count
 * compliance and copy has been manually verified (see nap-audit.md-adjacent
 * QA notes), rather than relying on the general per-combo template below.
 */
const SERVICE_CITY_METADATA_OVERRIDES: Record<
  string,
  { title: string; description: string }
> = {
  "bathroom-remodeling:fort-worth-tx": {
    title: "Fort Worth Bathroom Remodeling - My Dream Home Remodeling", // 57 chars
    description:
      "Fort Worth's licensed bathroom remodeling contractor. Free in-home quote, workmanship warranty, most bathrooms done in 2-3 weeks. Call (817) 374-0962.", // 150 chars
  },
};

export function serviceCityMetadata(service: Service, city: City): Metadata {
  const override = SERVICE_CITY_METADATA_OVERRIDES[`${service.slug}:${city.slug}`];
  return buildMetadata({
    title: override?.title ?? `${service.name} ${cityLabel(city)} - ${company.shortName}`,
    description: override?.description ?? generateSEODescription(service, city),
    path: `/services/${service.slug}/${city.slug}`,
    image: service.image,
  });
}

/* ------------------------------------------------------------------ */
/* Schema.org JSON-LD builders                                          */
/* ------------------------------------------------------------------ */

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}${company.logo}`,
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.foundedYear),
    ...(company.social.length > 0 && {
      sameAs: company.social.map((s) => s.url),
    }),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
  };
}

export function localBusinessSchema(): JsonLd {
  const fortWorth = cities.find((c) => c.slug === "fort-worth-tx");

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: company.name,
    image: `${SITE_URL}${company.logo}`,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.coordinates.lat,
      longitude: company.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      ...cities.map((city) => ({
        "@type": "City",
        name: cityLabel(city),
      })),
      // Fort Worth is home base — add zip-level areaServed entries for the
      // primary target market on top of the city-level entries above.
      ...(fortWorth?.zipCodes.map((zip) => ({
        "@type": "PostalCode",
        name: zip,
      })) ?? []),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${company.name} Services`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${SITE_URL}/services/${service.slug}`,
        },
      })),
    },
    // NOTE: add an aggregateRating block here only with real review data
    // (matching your Google Business Profile) — fabricated ratings in
    // structured data risk manual penalties. See reviewSchema/aggregateRatingSchema
    // below — wire them in once data/testimonials.ts holds real, verifiable reviews.
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: company.name,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/**
 * Review/AggregateRating builders — not wired into any page yet.
 * data/testimonials.ts is placeholder content (see README "Replace the
 * placeholder stats" note), so marking it up as structured review data
 * would assert unverified ratings to search engines. Once real,
 * verifiable customer reviews replace that file, call these from
 * localBusinessSchema/serviceSchema to enable review rich results.
 */
export function reviewSchema(items: Testimonial[]): JsonLd[] {
  return items.map((t) => ({
    "@type": "Review",
    name: t.project,
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: t.text,
    datePublished: `${t.date}-01`,
  }));
}

export function aggregateRatingSchema(items: Testimonial[]): JsonLd | null {
  if (items.length === 0) return null;
  const ratingValue = items.reduce((sum, t) => sum + t.rating, 0) / items.length;
  return {
    "@type": "AggregateRating",
    ratingValue: Math.round(ratingValue * 10) / 10,
    reviewCount: items.length,
    bestRating: 5,
    worstRating: 1,
  };
}

export function serviceSchema(service: Service, city?: City): JsonLd {
  const areaServed = city
    ? {
        "@type": "City",
        name: city.city,
        containedInPlace: { "@type": "State", name: city.state },
      }
    : { "@type": "State", name: "Texas" };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city ? `${service.name} in ${cityLabel(city)}` : service.name,
    serviceType: service.name,
    description: service.shortDescription,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed,
    offers: {
      "@type": "Offer",
      priceRange: service.priceRange,
      priceCurrency: "USD",
    },
    url: city
      ? `${SITE_URL}/services/${service.slug}/${city.slug}`
      : `${SITE_URL}/services/${service.slug}`,
    ...(service.subServices &&
      service.subServices.length > 0 && {
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.name} Services`,
          itemListElement: service.subServices.map((sub) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: sub },
          })),
        },
      }),
  };
}

export function howToSchema(service: Service, city?: City): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: city
      ? `How ${service.name} Works in ${cityLabel(city)}`
      : `How ${service.name} Works`,
    description: service.shortDescription,
    step: service.processSteps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

export function faqSchema(faqs: ServiceFAQ[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}
