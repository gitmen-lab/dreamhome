# NAP Consistency Audit

This is a manual checklist — it can't be automated from inside the codebase,
since it requires checking accounts you own on external platforms. Work
through it before/soon after launch, and re-check quarterly.

## Canonical NAP (source of truth)

Use this exact formatting everywhere. It must match your Google Business
Profile **character-for-character** — abbreviations like "Dr" vs "Drive" or
"Ste" vs "Suite" count as a mismatch.

- **Name:** My Dream Home Remodeling
- **Address:** 5305 Hibbs Dr, Fort Worth, TX 76137
- **Phone:** (817) 374-0962

## Checklist

- [ ] **Google Business Profile** — confirm name/address/phone match the canonical NAP above exactly. Confirm the primary category is **"Bathroom remodeler"** (not a generic "Contractor" or "Remodeler" category) if bathroom remodeling is the priority service to rank. Confirm the website link on the profile points to the bathroom remodeling Fort Worth page (or the homepage), not a buried/old URL.
- [ ] **Yelp** — known discrepancy flagged: the phone number and/or address on this site's Yelp listing does not currently match the canonical NAP. Log into the Yelp Business account and correct both fields to match exactly.
- [ ] **Houzz** — verify name/address/phone match. Confirm the profile links back to this site.
- [ ] **BBB (Better Business Bureau)** — verify name/address/phone match. Confirm accreditation status is current if claiming BBB accreditation anywhere on the site.
- [ ] **Angi** — verify name/address/phone match.
- [ ] **Apple Maps / Bing Places** — same check; often forgotten but still crawled and cited by AI answer engines.
- [ ] **Facebook Business Page** (if one exists) — verify name/address/phone match.

## After fixing each listing

- [ ] Once you have the real values, fill in `data/company.ts`'s `licenseNumber` field and add the verified profile URLs to `data/company.ts`'s `social` array — these already feed `sameAs` in the site's Organization schema automatically once populated.
- [ ] Re-run this checklist quarterly, or after any office move / rebrand / phone number change.
