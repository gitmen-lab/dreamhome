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
 *
 * Voice: short sentences, real numbers over adjectives, "call us" not
 * "contact us," free/no-obligation estimate framed plainly. See
 * references/voice.md and references/humour.md.
 */

export function generateServiceIntro(service: Service, city: City): string {
  const seed = `${service.slug}:${city.slug}:intro`;
  const highlight = pickVariant(seed + ":hl", city.localHighlights);

  const openers = [
    `${company.name} handles ${service.name.toLowerCase()} for homeowners across ${cityLabel(city)}. Licensed, insured, one crew for every trade.`,
    `${city.city} homeowners call us for ${service.name.toLowerCase()} because we quote it straight and finish on schedule.`,
    `We've worked on homes from ${highlight} to every other corner of ${city.city}. ${service.name} is one of six things we do, all under one roof.`,
    `${company.name} runs ${service.name.toLowerCase()} projects in ${cityLabel(city)} the same way every time: free estimate, written scope, one project manager.`,
  ];

  const middles = [
    `We've served ${city.county} for ${new Date().getFullYear() - company.foundedYear}+ years. ${city.city} homes are ${city.housingNote} — we know what that means for a project before we walk in the door.`,
    `${city.city} homes are typically ${city.housingNote}. That shapes the estimate, the schedule, and what we watch for once demo starts.`,
    `We know ${city.county}'s housing stock. ${city.housingNote} isn't a surprise to us — it's what we plan around.`,
  ];

  const closers = [
    `Every project starts with a free, no-obligation estimate and ends with a walkthrough you sign off on.`,
    `One project manager, a written schedule, and a workmanship warranty — standard on every job, no upcharge.`,
    `Free estimates. Line-item pricing. A crew that cleans up before they leave. That's the whole pitch.`,
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
    `${service.name} in ${cityLabel(city)}: licensed & insured, free estimate, workmanship warranty. Serving ${city.county} since ${company.foundedYear}. Call ${company.phoneDisplay}.`,
    `${service.name} in ${cityLabel(city)}. Free, no-obligation estimate. Line-item pricing, no surprises. Call ${company.phoneDisplay}.`,
    `${city.city} ${service.name.toLowerCase()}: one crew, every trade, a workmanship warranty on every job. Free on-site estimate. Call ${company.phoneDisplay}.`,
    `${company.name} does ${service.name.toLowerCase()} throughout ${cityLabel(city)} and ${city.county}. Free estimate, honest, itemized pricing. ${company.phoneDisplay}.`,
    `Looking for ${service.name.toLowerCase()} near me in ${cityLabel(city)}? Licensed crew, free on-site quote, every ${city.city} project. Call ${company.phoneDisplay}.`,
    `${service.name} in ${cityLabel(city)}: free estimate, milestone payments, a crew that knows ${city.county}. Call ${company.phoneDisplay}.`,
    `${service.name} in ${city.city} typically takes ${service.duration}. Written, line-item estimate before any work begins. Call ${company.phoneDisplay}.`,
    `${city.city} homeowners call ${company.name} for ${service.name.toLowerCase()} — licensed crews, itemized pricing, one project manager per job. ${company.phoneDisplay}.`,
    `Free ${service.name.toLowerCase()} estimate in ${cityLabel(city)}. ${company.name} has worked in ${city.county} since ${company.foundedYear}. Call ${company.phoneDisplay}.`,
  ];
  return pickVariant(seed, variants);
}

/** "Near me"-phrased FAQ appended to service hub pages (no single city to anchor to). */
export function generateNearMeFaq(service: Service): ServiceFAQ {
  return {
    question: `Do you offer ${service.name.toLowerCase()} near me?`,
    answer: `Likely, yes. ${company.name} covers 20 DFW Metroplex cities, including Fort Worth, Arlington, Denton, and Southlake. Check our service areas page, or just call us — if you're in the Metroplex, there's a good chance we already work in your neighborhood.`,
  };
}

/**
 * City-specific FAQs for a service+city page. Deliberately just these 2,
 * local-data-driven entries -- the service's own 4 generic FAQs already live
 * on the parent /services/[service] page (see service.faqs there), so
 * repeating them here byte-for-byte on all 120 city pages was pure doorway-
 * page boilerplate.
 */
export function generateFAQs(service: Service, city: City): ServiceFAQ[] {
  return [
    {
      question: `Do you offer ${service.name.toLowerCase()} near me in ${cityLabel(city)}?`,
      answer: `Yes. We work all of ${city.city}, including the ${city.zipCodes.slice(0, 4).join(", ")} zip code${city.zipCodes.length > 1 ? "s" : ""}, plus surrounding ${city.county} communities. On-site estimates here are always free.`,
    },
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${city.city}?`,
      answer: `Depends on your home's size, condition, and material choices — ${city.city} homes are typically ${city.housingNote}, and we factor that into every quote. Typical timeline: ${service.duration}. You get a free, line-item estimate before anything starts, so the cost is never a surprise.`,
    },
  ];
}

export interface LocalFact {
  label: string;
  value: string;
  url?: string;
}

/**
 * Real, verified local facts for a city (permits, HOA, climate/soil, build
 * era) — pulled straight from data/cities.ts. Only returns entries whose
 * underlying field has actually been filled in; never pads with generic
 * boilerplate, so a city with no verified facts yet renders nothing here.
 */
export function getLocalFacts(city: City): LocalFact[] {
  const facts: LocalFact[] = [];
  if (city.permitOffice) {
    facts.push({
      label: "Permits",
      value: city.permitProcessNote
        ? `${city.permitOffice} — ${city.permitProcessNote}`
        : city.permitOffice,
      url: city.permitUrl,
    });
  }
  if (city.buildEra) {
    facts.push({
      label: "Typical build era",
      value: `Most ${city.city} homes we work on date to the ${city.buildEra}.`,
    });
  }
  if (city.hoaNote) {
    facts.push({ label: "HOA considerations", value: city.hoaNote });
  }
  if (city.climateSoilNote) {
    facts.push({ label: "Climate & soil", value: city.climateSoilNote });
  }
  return facts;
}

export interface CTAContent {
  heading: string;
  body: string;
  buttonLabel: string;
}

export function generateCTA(service: Service, city: City): CTAContent {
  const seed = `${service.slug}:${city.slug}:cta`;
  const headings = [
    `Start Your ${service.shortName} Project in ${city.city}`,
    `Get a Free ${service.shortName} Estimate in ${cityLabel(city)}`,
    `${city.city} ${service.shortName}, Done Right`,
  ];
  const bodies = [
    `Tell us about the project. We'll schedule a free, no-obligation estimate at your ${city.city} home — no pressure, just real numbers.`,
    `Free estimate, line-item pricing, a workmanship warranty. That's what every ${city.county} homeowner gets from us.`,
    `From the first walkthrough to the final inspection, you'll know what's happening and what it costs. Schedule your free ${city.city} estimate.`,
    `Free estimate. (Yes, everyone says that. Ours doesn't turn into a bigger number once we're inside.)`,
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
  return `${city.localDescription} We've worked in ${cityLabel(
    city
  )} and ${city.county} for ${years}+ years — ${
    city.housingNote
  } is what we see on most calls out here. From ${city.localHighlights[0]} to ${
    city.localHighlights[1]
  }, we know these streets.`;
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
      answer: `All six: interior & exterior painting, floor installation, bathroom remodeling, kitchen remodeling, drywall repair, and demolition. Every project starts with a free on-site estimate.`,
    },
    {
      question: `Which parts of ${city.city} do you cover?`,
      answer: `All of it, including ${city.localHighlights.join(", ")}, and the ${city.zipCodes.join(", ")} zip code${city.zipCodes.length > 1 ? "s" : ""} — plus surrounding ${city.county} communities.`,
    },
    {
      question: `How much does remodeling cost in ${city.city}?`,
      answer: `Depends on the project and your home — ${city.city} homes are typically ${city.housingNote}, and we factor that into every quote. You get a free, line-item estimate before any work begins, whichever service you need.`,
    },
    {
      question: `Are you licensed to work in ${city.city}?`,
      answer: `Yes. Licensed and insured across Texas. We pull any permits ${city.city} or ${city.county} requires and schedule the inspections.`,
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
  return `We work all of ${city.city}, including ${neighborhoods}, and these zip codes: ${zips}.${landmarkSentence} If you're in ${city.county}, there's a good chance we've already been on your street.`;
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
      description: `Every crew is licensed and insured in Texas. Every project carries our workmanship warranty.`,
    },
    {
      title: "Transparent, Itemized Pricing",
      description: `Free on-site estimate, line-item pricing. ${city.city} homeowners always know exactly what they're paying for.`,
    },
    {
      title: "One Project Manager, Start to Finish",
      description: `A single point of contact keeps your project on schedule and keeps you informed every day.`,
    },
  ];
}
