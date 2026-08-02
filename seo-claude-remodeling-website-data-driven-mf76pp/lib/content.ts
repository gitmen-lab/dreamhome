import type { Service, ServiceFAQ } from "@/data/services";
import type { City } from "@/data/cities";
import { company } from "@/data/company";
import { pickVariant, cityLabel } from "@/lib/helpers";

/**
 * Content generation for service+city pages.
 *
 * Each function composes copy from multiple template variants selected
 * deterministically per service+city pair, then weaves in city-specific data
 * (county, neighborhoods, housing stock). The result: 120 pages that are
 * genuinely different from each other and locally useful — not spun text.
 */

export function generateServiceIntro(service: Service, city: City): string {
  const seed = `${service.slug}:${city.slug}:intro`;
  const highlight = pickVariant(seed + ":hl", city.localHighlights);

  const openers = [
    `${company.name} provides licensed ${service.name.toLowerCase()} throughout ${cityLabel(city)}.`,
    `${company.name} brings professional ${service.name.toLowerCase()} to homeowners across ${cityLabel(city)}.`,
    `${city.city} homeowners rely on ${company.name} for licensed ${service.name.toLowerCase()}, backed by a workmanship warranty.`,
    `From ${highlight} to every corner of ${city.city}, ${company.name} crews handle ${service.name.toLowerCase()} for local homeowners.`,
  ];

  const middles = [
    `We've served ${city.county} for over ${new Date().getFullYear() - company.foundedYear} years, and ${city.city}'s homes — ${city.housingNote} — are territory we know well.`,
    `${city.city} features ${city.housingNote}, and our team has hands-on experience with exactly these kinds of projects throughout ${city.county}.`,
    `Homes here are ${city.housingNote}. That local knowledge shapes how we plan, price, and build every project in ${city.city}.`,
  ];

  const closers = [
    `Every project starts with a free on-site estimate and ends with a walkthrough you sign off on.`,
    `You get a dedicated project manager, a written schedule, and a workmanship warranty — standard on every job.`,
    `Free estimates, transparent pricing, and crews who clean up daily: that's how we've earned our reputation across the Metroplex.`,
  ];

  return [
    pickVariant(seed + ":o", openers),
    pickVariant(seed + ":m", middles),
    pickVariant(seed + ":c", closers),
  ].join(" ");
}

export function generateSEODescription(service: Service, city: City): string {
  const seed = `${service.slug}:${city.slug}:seo`;
  const variants = [
    `Professional ${service.name.toLowerCase()} in ${cityLabel(city)}. Licensed & insured, free estimates, workmanship warranty. Serving ${city.county} since ${company.foundedYear}. Call ${company.phoneDisplay}.`,
    `Need ${service.name.toLowerCase()} in ${cityLabel(city)}? ${company.name} delivers quality craftsmanship with transparent pricing and free estimates. Call ${company.phoneDisplay} today.`,
    `Top-rated ${service.name.toLowerCase()} for ${city.city} homeowners. Free on-site estimates, licensed crews, and a written warranty on every project. Call ${company.phoneDisplay}.`,
    `${company.name} provides expert ${service.name.toLowerCase()} throughout ${cityLabel(city)} and ${city.county}. Free estimates and honest, itemized pricing. ${company.phoneDisplay}.`,
    `Searching for ${service.name.toLowerCase()} near me in ${cityLabel(city)}? ${company.name} brings licensed, insured crews and a free on-site quote to every ${city.city} project.`,
    `${service.name} in ${cityLabel(city)}, done right: free estimates, milestone-based payments, and a workmanship warranty from a crew that knows ${city.county}. Call ${company.phoneDisplay}.`,
    `Typical timeline for ${service.name.toLowerCase()} in ${city.city}: ${service.duration}. ${company.name} gives ${city.city} homeowners a written, line-item estimate before any work begins.`,
    `${city.city} homeowners trust ${company.name} for ${service.name.toLowerCase()} — licensed crews, transparent pricing, and a dedicated project manager on every job. Call ${company.phoneDisplay}.`,
    `Get a free ${service.name.toLowerCase()} estimate in ${cityLabel(city)}. ${company.name} has served ${city.county} homeowners since ${company.foundedYear} with honest, itemized pricing.`,
  ];
  return pickVariant(seed, variants);
}

/** "Near me"-phrased FAQ appended to service hub pages (no single city to anchor to). */
export function generateNearMeFaq(service: Service): ServiceFAQ {
  return {
    question: `Do you offer ${service.name.toLowerCase()} near me?`,
    answer: `Likely, yes. ${company.name} serves 20 DFW Metroplex communities, including Fort Worth, Arlington, Denton, and Southlake. Search "${service.name.toLowerCase()} near me" and check our service areas page, or contact us directly — if you're anywhere in the Metroplex, there's a good chance we already work in your neighborhood.`,
  };
}

/** City-specific FAQs generated for a service+city page, merged with the service's own FAQs. */
export function generateFAQs(service: Service, city: City): ServiceFAQ[] {
  const localFaqs: ServiceFAQ[] = [
    {
      question: `Do you offer ${service.name.toLowerCase()} near me in ${cityLabel(city)}?`,
      answer: `Yes — ${company.name} serves all of ${city.city}, including the ${city.zipCodes.slice(0, 4).join(", ")} zip code${city.zipCodes.length > 1 ? "s" : ""}, plus surrounding ${city.county} communities. On-site estimates in ${city.city} are always free.`,
    },
    {
      question: `How much does ${service.shortName.toLowerCase() === service.name.toLowerCase() ? service.name.toLowerCase() : service.name.toLowerCase()} cost in ${city.city}?`,
      answer: `Pricing depends on your home's size, condition, and material choices — ${city.city} homes are typically ${city.housingNote}, which we factor into every quote. Typical project duration is ${service.duration}. We provide a free, line-item estimate so you know the exact cost before work begins.`,
    },
    {
      question: `Are you licensed to work in ${city.city}?`,
      answer: `Yes. We're licensed and insured across Texas, and we handle any permits ${city.city} or ${city.county} requires for your project, including scheduling inspections.`,
    },
  ];
  return [...localFaqs, ...service.faqs];
}

export interface CTAContent {
  heading: string;
  body: string;
  buttonLabel: string;
}

export function generateCTA(service: Service, city: City): CTAContent {
  const seed = `${service.slug}:${city.slug}:cta`;
  const headings = [
    `Ready to Start Your ${service.shortName} Project in ${city.city}?`,
    `Get Your Free ${service.shortName} Estimate in ${cityLabel(city)}`,
    `${city.city}'s Trusted ${service.shortName} Experts Are One Call Away`,
  ];
  const bodies = [
    `Tell us about your project and we'll schedule a free on-site estimate at your ${city.city} home — no pressure, no obligation, just honest numbers.`,
    `Join hundreds of ${city.county} homeowners who trusted ${company.name} with their homes. Free estimates, transparent pricing, and a warranty on every project.`,
    `From the first walkthrough to the final inspection, you'll know exactly what's happening and what it costs. Schedule your free ${city.city} estimate today.`,
  ];
  return {
    heading: pickVariant(seed + ":h", headings),
    body: pickVariant(seed + ":b", bodies),
    buttonLabel: "Get a Free Estimate",
  };
}

/** Intro paragraph for city landing pages */
export function generateCityIntro(city: City): string {
  const years = new Date().getFullYear() - company.foundedYear;
  return `${city.localDescription} ${company.name} has proudly served ${cityLabel(
    city
  )} and the wider ${city.county} area for ${years}+ years, helping homeowners with ${
    city.housingNote
  }. From ${city.localHighlights[0]} to ${
    city.localHighlights[1]
  }, our crews are part of the neighborhood.`;
}

/**
 * City-hub FAQs (used on /service-areas/[city]).
 * Fully city-specific — unlike the service+city page, there's no single
 * service to anchor questions to, so these cover coverage area, service
 * lineup, pricing, and licensing, each woven with real per-city data
 * instead of borrowing the sitewide general FAQs verbatim.
 */
export function generateCityFaqs(city: City): ServiceFAQ[] {
  return [
    {
      question: `Which remodeling services do you offer in ${cityLabel(city)}?`,
      answer: `All six of our services are available in ${city.city}: interior & exterior painting, floor installation, bathroom remodeling, kitchen remodeling, drywall repair, and demolition. Every project includes a free on-site estimate.`,
    },
    {
      question: `Which parts of ${city.city} do you cover?`,
      answer: `We serve all of ${city.city}, including ${city.localHighlights.join(", ")}, and the ${city.zipCodes.join(", ")} zip code${city.zipCodes.length > 1 ? "s" : ""} — plus surrounding ${city.county} communities.`,
    },
    {
      question: `How much does remodeling cost in ${city.city}?`,
      answer: `It depends on the project and your home — ${city.city} homes are typically ${city.housingNote}, which we factor into every quote. We provide a free, line-item estimate before any work begins, so you know the exact cost upfront regardless of which service you need.`,
    },
    {
      question: `Are you licensed to work in ${city.city}?`,
      answer: `Yes. We're licensed and insured across Texas, and we handle any permits ${city.city} or ${city.county} requires for your project, including scheduling inspections.`,
    },
  ];
}

/**
 * "Areas We Serve" copy for a city hub/service+city page — real neighborhoods
 * and zip codes from the city's data, with a landmark tie-in where available
 * so it reads as local expertise rather than a keyword list.
 */
export function generateAreasWeServe(city: City): string {
  const neighborhoods = city.localHighlights.slice(0, 8).join(", ");
  const zips = city.zipCodes.join(", ");
  const landmarkSentence = city.landmarks?.length
    ? ` We work near local landmarks like ${city.landmarks.slice(0, 3).join(", ")}, and everywhere in between.`
    : "";
  return `We serve every neighborhood in ${city.city}, including ${neighborhoods}, and the following zip codes: ${zips}.${landmarkSentence} If you're in ${city.county}, chances are we've already worked on your street.`;
}

/** "Why choose us" bullets for city pages, lightly localized */
export function generateWhyChooseUs(city: City): { title: string; description: string }[] {
  return [
    {
      title: `Local ${city.county} Experience`,
      description: `We know ${city.city}'s housing stock — ${city.housingNote} — and the local permitting process, so projects start faster and run smoother.`,
    },
    {
      title: "Licensed, Insured & Warrantied",
      description: `Every crew is licensed and insured in Texas, and every project carries our workmanship warranty.`,
    },
    {
      title: "Transparent, Itemized Pricing",
      description: `Free on-site estimates with line-item pricing — ${city.city} homeowners always know exactly what they're paying for.`,
    },
    {
      title: "One Project Manager, Start to Finish",
      description: `A single point of contact keeps your project on schedule and keeps you informed every day.`,
    },
  ];
}
