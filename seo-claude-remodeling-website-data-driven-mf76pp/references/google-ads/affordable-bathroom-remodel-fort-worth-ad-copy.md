# Ad Copy — "affordable bathroom remodel fort worth"

No Google Ads API access in this project, so this is a **validated, ready-to-paste copy pack for the
Ads UI**, not a live API build. Every headline/description/asset below has been character-checked and
uses only real facts from `data/company.ts` / `data/services.ts` — nothing invented.

## Important: the exact keyword phrase doesn't fit in one headline

`Affordable Bathroom Remodel Fort Worth` (the landing page H1) is **38 characters** — 8 over Google's
30-char headline hard limit. It's split across all 3 pinned slot-1 headlines instead, so the full
keyword is still covered across the ad's visible text, just not in one 30-char slot:

- `Affordable Bathroom Remodel` (27) + `Fort Worth Bathroom Remodel` (27) + `Affordable Remodel Fort Worth` (29)

## Headlines (15) — 3 pinned to slot 1, 12 unpinned

```
1.  Affordable Bathroom Remodel      [PIN POS 1] - keyword (27 chars)
2.  Fort Worth Bathroom Remodel      [PIN POS 1] - keyword (27 chars)
3.  Affordable Remodel Fort Worth    [PIN POS 1] - keyword (29 chars)
4.  Remodels Starting at $2,500      [unpinned] - offer (real cosmetic-tier floor)
5.  50% Off Installation             [unpinned] - offer (real, active this month)
6.  Free In-Home Estimate            [unpinned] - offer
7.  Licensed & Insured Crews         [unpinned] - trust
8.  4.8 Stars · 8 Reviews            [unpinned] - trust (real Google rating + count)
9.  8+ Years in DFW                  [unpinned] - trust (real "Years in Business" stat)
10. Workmanship Warranty             [unpinned] - guarantee
11. Transparent Itemized Pricing     [unpinned] - guarantee
12. Clean Job Sites Daily            [unpinned] - guarantee
13. Most Remodels in 2-3 Weeks       [unpinned] - urgency (real typical duration)
14. One Business Day Response        [unpinned] - urgency (real response-time promise)
15. Get Your Free Estimate           [unpinned] - CTA
```

All 6 headline patterns covered (keyword, offer, trust, urgency, guarantee, CTA). No `★` glyph
anywhere (spelled "Stars" per real Google policy enforcement), no phone number in text, no
exclamation marks, no unsubstantiated superlatives.

## Descriptions — 3 RSA variants, 4 each (12 total, angle-differentiated)

Headlines are identical across all 3 RSAs (the real-fact pool is what it is — duplicating a smaller
business's finite real facts into 3 fully separate headline sets would mean padding with filler).
Descriptions differ to actually test different opening angles.

**RSA 1 — Value-forward**
```
1. Bathroom remodels start at $2,500, with 50% off installation this month. Free estimate. (87)
2. Free, no-obligation in-home estimate. We respond within one business day. (73)
3. Licensed, insured Fort Worth crews. Transparent, itemized pricing on every project. (83)
4. 4.8 rating from real DFW homeowners. Workmanship warranty on every remodel we build. (84)
```

**RSA 2 — Trust-forward**
```
1. 4.8 rating from real DFW homeowners. Workmanship warranty on every remodel we build. (84)
2. Licensed, insured Fort Worth crews. Transparent, itemized pricing on every project. (83)
3. 8+ years remodeling DFW bathrooms. Clean job sites, every single day. (69)
4. Free, no-obligation in-home estimate. We respond within one business day. (73)
```

**RSA 3 — Process-forward**
```
1. Most bathroom remodels finished in 2-3 weeks. Free, no-obligation estimate first. (81)
2. We respond to every request within one business day. Licensed & insured crews. (78)
3. Bathroom remodels start at $2,500, with 50% off installation this month. (72)
4. 4.8 rating, 2,400+ DFW projects completed. Workmanship warranty included. (73)
```

All 3 RSAs: same 3 pinned keyword headlines, same 12 unpinned headlines, same final URL
(`https://mydreamhomeremodeling.com/affordable-bathroom-remodel-fort-worth`).

## Asset structure (attach at campaign level — single-SKAG setup)

### Sitelinks (5) — every URL verified real and live this session

| Title | Description 1 | Description 2 | URL |
|---|---|---|---|
| Bathroom Remodel | Full remodels, tub-to-shower & more | Free line-item estimate included | `/services/bathroom-remodeling` |
| Free Estimate | Response within 1 business day | No obligation, no pressure | `/contact` |
| Project Gallery | Real DFW remodels, not stock photos | See our actual finished work | `/gallery` |
| Customer Reviews | 4.8 rating from real homeowners | Read what DFW clients say | `/reviews` |
| Schedule Online | Book a free consultation now | Pick a time, no phone tag | `/schedule` |

### Callouts (11)

```
Licensed & Insured · Free Estimates · Workmanship Warranty · Transparent Pricing ·
Clean Job Sites Daily · 8+ Years in DFW · 2,400+ Projects Done · 4.8 Rating ·
50% Off This Month · One-Day Response · 20 DFW Cities Served
```

### Structured snippets (2 headers)

```
Header: Services
Values: Full Bathroom Remodels, Tub-to-Shower Conversion, Master Bath Remodels,
        Cosmetic Refreshes, Aging-in-Place

Header: Neighborhoods
Values: Fort Worth, Keller, Southlake, Grapevine, Colleyville, Haslet
```
(6 of your real 20 service cities — the shortest/cleanest names for the 25-char limit. Swap in others
if you want different ones featured.)

### Business name
`My Dream Home Remodeling` (24 chars, real legal/display name — matches the domain and site branding)

### Business logo — ⚠️ action needed
The real logo file (`/images/mydreamhome-logo.png`) is **horizontal** (~600×121, ~4.96:1) — that
matches Google's *optional secondary* 4:1 logo slot, but the **required primary slot is square (1:1,
1200×1200 recommended, 128×128 minimum)**. I don't have a square version of the logo to use, and
won't fabricate a crop — if you have one (or can get one made), that's what goes in the primary slot.
Without it, the business logo asset simply won't show; everything else above works regardless.

## Self-review: all pass

- Every headline ≤ 30 chars, every description ≤ 90 chars (validated with a script, not eyeballed)
- No `★` glyph, no phone number in ad text, no exclamation marks, no ALL CAPS words, no
  unsubstantiated superlatives (`#1`, `best`, `top`)
- Every stat is real: 4.8 rating, 8 reviews, 8+ years, 2,400+ projects, 20 cities, $2,500 starting
  price, the active 50% off promo — nothing invented
- Every sitelink URL verified live this session
- All 3 RSAs share the same final URL (SKAG discipline)

## Next steps (manual, since there's no API access here)

1. In the Ads UI, open the ad group for `affordable bathroom remodel fort worth` (or create it per
   `affordable-bathroom-remodel-fort-worth-campaign-plan.md` if it doesn't exist yet).
2. Create 3 new RSAs using the headline/description sets above — status will default to enabled on
   save in the UI, so **pause each one immediately after creating it** until you're ready to review
   and launch (this skill never unpauses anything, and neither should the first save).
3. Add the sitelink/callout/structured-snippet assets at campaign level.
4. Get (or create) a square 1200×1200 logo file before adding the business logo asset.
5. Review Google's automated policy check once ads are saved — re-check anything that comes back
   `PROHIBITED` against the self-review list above before resubmitting.
