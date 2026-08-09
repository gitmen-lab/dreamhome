/**
 * Routes that render with no site chrome (Navbar/Footer) and are never
 * linked from anywhere else on the site -- e.g. paid-ads landing pages
 * that need a focused, single-CTA layout. Add new ones here rather than
 * duplicating the check in both Navbar and Footer.
 */
export const STANDALONE_ROUTES: string[] = [
  "/bathtub-to-shower-conversion",
  "/bath-renovation-near-you",
  "/conversion-de-tina-a-regadera",
  "/bathroom-remodel-fort-worth",
  "/dashboard",
  "/complete-house-renovation",
];
