export interface DepthSection {
  heading: string;
  paragraphs: string[];
}

/**
 * Optional, hand-written depth content for one specific (service, city)
 * combo -- for flagship pages that need real substance beyond the generated
 * per-page copy in lib/content.ts. Keyed the same way as SERVICE_CITY_ES_MX
 * and SERVICE_CITY_METADATA_OVERRIDES in lib/seo.ts: `${service.slug}:${city.slug}`.
 *
 * Every entry is additive only -- a combo with no entry here renders
 * identically to before. Every fact in a paragraph must be real: sourced
 * from this project's own data (service.pricingTiers, city.housingNote,
 * city.localDescription, city.permitOffice/climateSoilNote, etc.) or
 * independently verified and cited in the commit that added it. No invented
 * reviews, case studies, license numbers, turnaround promises, or figures.
 */
export const SERVICE_CITY_DEPTH_CONTENT: Record<string, DepthSection[]> = {
  "bathroom-remodeling:fort-worth-tx": [
    {
      heading: "What a Bathroom Remodel Actually Costs in Fort Worth",
      paragraphs: [
        "Fort Worth bathroom remodels break down into three real tiers we quote every week: a cosmetic refresh — new paint, fixtures, vanity top, hardware, and lighting with no layout change — runs $2,500–$10,000. A standard full remodel with new tile, vanity, tub or shower, flooring, and fixtures for a hall or guest bath runs $12,000–$30,000. A master or luxury remodel with a walk-in shower, double vanity, custom tile, and layout changes runs $25,000–$80,000+.",
        "Where in Fort Worth you are can move the number. Older homes — the 1920s bungalows common in neighborhoods like Fairmount — sometimes carry extra plumbing cost, because original supply and drain lines from that era often need full replacement rather than a simple tie-in. Newer construction near the Alliance corridor typically doesn't need that step, which is one reason we walk every home in person before quoting a number.",
      ],
    },
    {
      heading: "How Bathroom Permits Work in Fort Worth",
      paragraphs: [
        "Any bathroom remodel that touches plumbing or electrical needs a permit from the City of Fort Worth Development Services Department, 200 Texas Street, Fort Worth, TX 76102. Permits and inspection scheduling both go through the city's Accela Citizen Access portal.",
        "Once the permit is issued, a City building inspector has to sign off on the plumbing and electrical work before it's closed up behind tile and drywall — that inspection is a scheduled milestone we build into the written timeline, not a surprise that stalls the job. Questions about a specific Fort Worth permit go to Development Services' customer service line at (817) 392-2222.",
      ],
    },
    {
      heading: "Fort Worth's Bathrooms, By Era",
      paragraphs: [
        "Fort Worth's housing stock runs from 1920s bungalows in neighborhoods like Fairmount to newer construction near the Alliance corridor, and what a bathroom remodel involves often depends on which one you're in. Homes from that bungalow era commonly have original cast-iron or galvanized plumbing lines, and sometimes older wiring nearby — both common enough in pre-1950s construction that we plan for the possibility during the walkthrough rather than assuming a straightforward tie-in.",
        "Fort Worth also sits on Blackland Prairie clay soil, which expands and contracts with seasonal moisture. In a bathroom specifically, that can mean slab plumbing penetrations shifting slightly over the years, tile cracking along old grout lines, or a door frame that's gone slightly out of square — all worth a look before we finalize scope, not after demo starts.",
      ],
    },
  ],
};
