# Stats & Real Numbers — My Dream Home Remodeling

> Canonical numbers for My Dream Home Remodeling. Use these exactly. Don't round
> them, don't invent new ones, don't estimate.
>
> **Source of truth:** the numbers below are pulled directly from `data/company.ts`
> and `data/services.ts`. If a page needs a number and it isn't here, go read
> those files — don't guess, and don't ask the reader to "call for pricing" when
> a real range already exists in `pricingTiers`.

## The business

- **Founded:** 2018 (`company.foundedYear`)
- **Legal name:** My Dream Home Remodeling, LLC
- **Service area:** Dallas–Fort Worth Metroplex, 20 named cities (`data/cities.ts`)
- **Home base:** 5305 Hibbs Dr, Fort Worth, TX 76137
- **Google review average:** 4.8★ (`company.googleRating`)
- **Google review count:** 8 (`company.googleReviewCount`) — small and real. Never
  round up to "hundreds" or imply a bigger number.
- **Years in business:** 8+
- **Cities served:** 20
- **Projects completed:** 2,400+ — this figure lives in `company.stats` but has
  not been independently re-verified beyond being in that file. Use it as-is if
  you use it; don't embellish it further (no "thousands of happy families," no
  invented follow-on stats).

## Hours

- **Monday–Friday:** 7:30 AM – 6:30 PM
- **Saturday:** 8:00 AM – 4:00 PM
- **Sunday:** Closed

## Contact

- **Phone:** (817) 374-0962
- **Email:** yojainier@mydreamhomeremodeling.com

## Guarantees (verbatim, from `company.guarantees`)

- Free, no-obligation estimates
- Licensed & insured crews
- Transparent, itemized pricing
- Workmanship warranty on every project
- Clean job sites, every day

## License

- **Status:** Licensed & Insured in Texas
- **License number:** not yet on file — do not invent one. If a page needs a
  license number, leave it as "Licensed & Insured in Texas" rather than
  fabricating digits.

## Bathroom remodeling pricing (from `services.ts` → `bathroom-remodeling.pricingTiers`)

| Tier | Range | Includes |
|------|-------|----------|
| Cosmetic refresh | $2,500 – $10,000 | New paint, fixtures, vanity top, hardware, lighting — no layout change |
| Standard full remodel | $12,000 – $30,000 | New tile, vanity, tub/shower, flooring, fixtures for a hall or guest bath |
| Master / luxury remodel | $25,000 – $80,000+ | Walk-in shower, double vanity, custom tile, layout changes, premium finishes |

- **DFW cost per square foot:** typically $70–$250 (up to $500+ for luxury materials)
- **Typical bathroom remodel duration:** 2–3 weeks

## Real documented case study

- **One** fully-documented before/after sequence exists: a Fort Worth bathroom,
  outdated tub-shower combo → full demo → finished walk-in shower with white
  subway tile, shiplap accent wall, patterned floor tile. Photos in
  `public/images/gallery/bathroom-remodel-{before-outdated-tub-shower,
  before-demo-old-tub-shower, after-tile-walk-in-shower}.jpg`.
- Don't imply there's a second one until real before/after photos exist for
  another project.

## How to use these numbers in content

- **Always specific, never rounded.** "8 Google reviews", not "dozens of reviews."
- **Prices come straight from `pricingTiers` — frame as real ranges, not "starting at."**
- **If a number isn't in this file or in the data files, don't use it.** Ask
  before inventing a stat, a review count, a completion date, or a license number.
