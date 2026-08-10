# Bathroom Remodeling Topic Cluster — Internal Link Map

Semantic link graph. Each entry lists what an article links to, what should link
back to it, and why. `relatedPostSlugs` on the `BlogPost` object drives the
`RelatedArticles` component automatically — listing a slug that doesn't exist yet
is safe (the component silently skips it) and starts rendering the moment that
article is added, so hub `relatedPostSlugs` were written forward-looking for the
full 16-article graph even though only the 4 hubs exist today.

## Hubs (live)

### H1 — `bathroom-remodel-budget-guide`
- **Links to (in-body, real today):** H2, H3, H4, `/services/bathroom-remodeling`, `/contact`
- **`relatedPostSlugs`:** S1, S2, S3, S4, H2, H3, H4
- **Receives links from:** H2, H3, H4 (all reference the master budget guide);
  every supporting article in its cluster once written
- **Anchor text used:** "whether $10,000 is enough for your project", "what a
  $5,000 bathroom remodel can realistically cover", "what to avoid when
  renovating a bathroom", "bathroom remodeling services"

### H2 — `renovate-bathroom-for-5000`
- **Links to (in-body, real today):** H1, H3, H4, `/services/bathroom-remodeling`, `/contact`
- **`relatedPostSlugs`:** S5, S6, S2, S3, S4, H1, H3, H4
- **Receives links from:** H1 (budget tiers), H4 (as the lower-budget alternative)
- **Anchor text used:** "whether $10,000 is enough to get there", "what to avoid
  when renovating a bathroom", "bathroom remodel budget guide", "bathroom
  renovation services"

### H3 — `what-to-avoid-bathroom-remodel`
- **Links to (in-body, real today):** H1, H2, H4, `/services/bathroom-remodeling`, `/contact`
- **`relatedPostSlugs`:** S6, S2, S3, S4, S7, S8, H1, H2, H4
- **Receives links from:** H1, H2, H4 (every hub references avoiding mistakes)
- **Anchor text used:** "what a realistic bathroom remodel budget looks like",
  "$5,000", "$10,000", "professional bathroom remodeling"

### H4 — `is-10000-enough-bathroom-remodel`
- **Links to (in-body, real today):** H1, H2, H3, `/service-areas/fort-worth-tx`
  (on the real James R. testimonial), `/services/bathroom-remodeling`, `/contact`
- **`relatedPostSlugs`:** S1, S9, S10, S11, S12, H1, H2, H3
- **Receives links from:** H1, H2 (as the upper budget-tier reference point)
- **Anchor text used:** "bathroom remodel budget guide", "what $5,000 can
  realistically cover", "what to avoid when renovating a bathroom", "our
  bathroom remodeling services"

## Supporting articles (pending — planned graph)

| Article | Links up to | Cross-links to (siblings) | Reasoning |
|---|---|---|---|
| S1 expensive part | H1, H4 | S9 (rip-replace cost), S10 (adds value) | Same cost-driver topic from different angles |
| S2 trends 2026 | H1, H2, H3 | S3 (regretted upgrades), S4 (colors 2026) | Trend-adjacent, both about "what's now/next" |
| S3 regretted upgrades | H1, H2, H3 | S2 (trends), S6 (lessons learned) | Regret and hindsight are the same reader intent |
| S4 colors 2026 | H1, H2, H3 | S7 (colors to avoid), S8 (resale color), S2 (trends) | All color-decision content |
| S5 $10k remodel look | H2 | H2 (parent), S6 (lessons learned), S1 (expensive part) | Natural "what does the next tier up look like" step |
| S6 lessons learned | H2, H3 | S3 (regretted upgrades), H3 | Planning hindsight overlaps with mistakes |
| S7 colors to avoid | H3 | S4 (colors 2026), S8 (resale color) | Direct color-decision cluster |
| S8 resale color | H3 | S7 (colors to avoid), S10 (adds value) | Resale value ties to both color and upgrade-value questions |
| S9 rip-replace cost | H4 | S1 (expensive part), S11 (tub-shower cost) | Full-scope cost articles belong together |
| S10 adds value | H4 | S8 (resale color), S1 (expensive part) | Value and resale are the same underlying question |
| S11 tub-shower cost | H4 | S12 (convert or not), S9 (rip-replace cost) | Cost immediately precedes the decision question |
| S12 convert or not | H4 | S11 (tub-shower cost) | Decision follows directly from the cost article |

Every supporting article, once written, also gets a real contextual link to
`/services/bathroom-remodeling` with varied anchor text (not the same phrase
twice in a row across the cluster) — see the CTA blocks in the 4 live hub
articles for the anchor-text variety already established: "bathroom remodeling
services", "professional bathroom remodeling", "our bathroom remodeling
services", "bathroom renovation services".
