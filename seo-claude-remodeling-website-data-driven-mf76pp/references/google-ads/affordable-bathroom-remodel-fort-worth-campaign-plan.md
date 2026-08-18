# Campaign Plan — "affordable bathroom remodel fort worth"

No Google Ads API access is wired into this project (no `.env` credentials, no build scripts), so
this is a **manual build checklist for the Google Ads web UI**, not a live API build. Everything below
uses real data from this repo — nothing here is a placeholder.

## Already confirmed

- **Landing page**: `/affordable-bathroom-remodel-fort-worth` — live, H1 matches the keyword
  word-for-word, real $2,500 starting price + active 50% off installation offer, `noindex` (paid
  traffic only, doesn't compete with the organic `/services/bathroom-remodeling/fort-worth-tx` page).
- **Conversion tracking already exists**: `app/layout.tsx` already fires a real Google Ads conversion
  tag, `AW-18358748702`, alongside GA4 (`G-SZN03QS8DJ`). This means a Google Ads account already
  exists for this business — getting full API access later is a matter of a developer token + OAuth
  application against that existing account, not starting from zero.
- **`ContactForm` already redirects to `/thank-you`**, which is what that conversion tag tracks.
  Submitting the form on the new landing page gets working conversion tracking for free.

## ⚠️ Check before building: does a live campaign already target `/bathroom-remodel-fort-worth`?

That page is `noindex` specifically because it's a paid-traffic destination — strongly implying a
live campaign already points at it. If one does, targeting "affordable bathroom remodel fort worth"
as a **brand-new, separate campaign** risks the two competing against each other in the same auctions
(both bidding on near-identical query space). Two real options:

1. **Recommended if a live campaign already exists**: add "affordable bathroom remodel fort worth" as
   a **new ad group inside that existing campaign** instead — it inherits the same budget, geo,
   schedule, and negatives, and Google won't auction you against yourself.
2. **If no live campaign exists yet, or you want independent budget/reporting**: build it as its own
   new campaign per the settings below.

Check your Google Ads account for an active campaign pointing at `/bathroom-remodel-fort-worth`
before deciding.

## Step 1 — Keyword

**`affordable bathroom remodel fort worth`** — phrase match. HI-intent pattern (`affordable [service]
[city]`) per the SOP's 12 universal patterns. Volume not machine-validated (no Keyword Planner
access on this tier) — validate manually in the Ads UI before committing budget.

## Step 2 — Campaign settings (the 9 defaults, populated with real data)

| # | Setting | Value for this campaign | Source |
|---|---|---|---|
| 1 | Campaign type | Search Network only | SOP default |
| 2 | Bidding | Maximize Conversions, no target CPA (day 1) | You don't have a target CPA yet |
| 3 | Ad schedule | Business hours: Mon–Fri 7:30 AM–6:30 PM, Sat 8 AM–4 PM, closed Sun | `data/company.ts` real hours |
| 4 | Locations | **Presence only**, 40 mi / 65 km radius around 5305 Hibbs Dr, Fort Worth, TX 76137 | Computed from the real coordinates of all 20 cities in `data/cities.ts` — 40 mi is the actual distance to your farthest served city (Mesquite); a smaller radius would exclude real service cities you already advertise on the site |
| 5 | Excluded locations | Every country except the United States | Kills VPN/bot clicks |
| 6 | Devices | All devices | SOP default |
| 7 | Audience segments | None | Keyword is the audience for Search |
| 8 | Auto-applied recommendations | All off | SOP default |
| 9 | Ad rotation | Optimize (Google default) | SOP default |

**Daily budget: $30/day** (your confirmed number — the SOP's recommended floor for Maximize
Conversions to function).

Real service-area distances (from the actual business address, not city-center approximations):

| City | Distance |
|---|---|
| Mesquite | 40.0 mi / 64.3 km (farthest — sets the radius) |
| Decatur | 30.0 mi / 48.2 km |
| Springtown | 24.5 mi / 39.4 km |
| Denton | 23.8 mi / 38.4 km |
| Grand Prairie | 18.8 mi / 30.2 km |
| Argyle | 16.8 mi / 27.0 km |
| Arlington | 14.3 mi / 23.0 km |
| Justin | 13.5 mi / 21.8 km |
| Flower Mound | 13.3 mi / 21.4 km |
| Lake Worth | 11.7 mi / 18.8 km |
| Grapevine | 11.6 mi / 18.7 km |
| Fort Worth (city center) | 9.9 mi / 15.9 km |
| Southlake | 8.7 mi / 14.0 km |
| Roanoke | 8.3 mi / 13.4 km |
| Haslet | 7.3 mi / 11.8 km |
| Colleyville | 6.8 mi / 10.9 km |
| Haltom City | 6.2 mi / 10.1 km |
| North Richland Hills | 4.6 mi / 7.4 km |
| Keller | 3.3 mi / 5.3 km |
| Watauga | 2.4 mi / 3.9 km |

If $30/day feels thin spread across a 40 mi radius, the alternative is tightening to ~20–25 mi
(covers 16 of the 20 cities, excludes Mesquite/Decatur/Springtown/Denton) and expanding later once
you see where conversions actually come from.

## Step 3 — Landing page ✓

Done — see "Already confirmed" above.

## Negative keywords (campaign level, broad match)

The 15 universal service-business negatives:
```
jobs, salary, salaries, career, careers, school, schools, course, courses,
training, apprentice, apprenticeship, certification, diy, how to
```
Do **not** add `free`, `cheap`, or `near me` to this list — all three have real converting traffic in
this category (an "affordable" campaign will naturally attract price-conscious searchers; excluding
`cheap` would work against the campaign's own positioning).

## Step 4 — Ad copy (separate step)

Once the ad group + keyword exist, run the `generate-ads` skill for the actual RSA headlines/
descriptions and sitelinks/callouts — that's a distinct skill with its own validation gate, not
duplicated here. The keyword-match headline should read **"Affordable Bathroom Remodel Fort Worth"**
in slot 1, pinned, to match the landing page H1 exactly for Quality Score.

## Step 5 — UI review checklist before unpausing

Standard SOP checklist — campaign type Search-only, budget $30/day, bidding Maximize Conversions no
target, locations 40mi presence-only around Fort Worth, USA-only, business-hours schedule, 15
negatives present, ad group has exactly 1 keyword, RSAs show "Good"/"Excellent" strength, final URL
points at the live `/affordable-bathroom-remodel-fort-worth` page (not a 404), EU political ads
declared "Doesn't have EU political ads."

**Actively decline** these Google UI prompts when setting up: AI Max for Search, Dynamic Search Ads,
automatically created assets, Text customization, Final URL expansion, broad match keyword inclusion,
Search Partners. Each one breaks SKAG discipline (keyword + ad + landing page control).

## Never

Never launch this as `ENABLED` on first save — build it `PAUSED`, review the Step 5 checklist, then
unpause deliberately.
