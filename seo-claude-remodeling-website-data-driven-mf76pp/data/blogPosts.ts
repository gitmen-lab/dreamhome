export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  /** Primary target keyword this post was researched and written for. */
  keyword: string;
  /** Short teaser shown on the blog index card and used as an OG description fallback. */
  excerpt: string;
  /** ISO date string, e.g. "2026-08-05" */
  publishedDate: string;
  /** Set only when the post has actually been refreshed. */
  updatedDate?: string;
  heroImage: { src: string; alt: string };
  /** Real service slug from data/services.ts, if this post is clearly about one service. */
  relatedServiceSlug?: string;
  /** Real city slugs from data/cities.ts this post is locally relevant to. */
  relatedCitySlugs?: string[];
  /** Sourced from real research + real answers — see references/data-map.md in the blog skill. */
  faqs?: BlogFAQ[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "contractor-abandoned-my-remodel-fort-worth",
    title: "Contractor Abandoned My Remodel in Fort Worth — What To Do Next",
    metaDescription:
      "Your contractor took the deposit and disappeared mid-remodel. Here's exactly what to do in the next 48 hours in Fort Worth, TX — protect yourself legally, then get the job finished.",
    keyword: "contractor abandoned my remodel fort worth",
    excerpt:
      "A step-by-step recovery plan for Fort Worth and DFW homeowners whose contractor quit mid-project — the first 48 hours, the Texas lien trap most people miss, and how a takeover contractor should work.",
    publishedDate: "2026-08-05",
    heroImage: {
      src: "/images/gallery/bathroom-remodel-before-demo-old-tub-shower.jpg",
      alt: "Original tub and subway tile shower surround with a section of wall removed before demo",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    faqs: [
      {
        question: "Who can finish a bathroom remodel my contractor abandoned in Fort Worth?",
        answer:
          "Look for a licensed, insured DFW contractor that explicitly accepts takeover work — many won't, because they can't warranty hidden installation. My Dream Home Remodeling takes over abandoned kitchen, bathroom, flooring, drywall, and paint projects across the DFW Metroplex, starting with a free documented assessment of what was already installed.",
      },
      {
        question: "Will the new contractor warranty the old contractor's work?",
        answer:
          "No, and be suspicious of anyone who says otherwise. A reputable takeover contractor warranties their own workmanship, documents the existing condition in writing before starting, and tells you plainly which portions must be rebuilt to be covered.",
      },
      {
        question: "Does finishing an abandoned remodel cost more than starting over?",
        answer:
          "It usually costs more per square foot than a clean start, mainly because of corrective demolition and materials the original contractor never ordered. It's still almost always cheaper than a full teardown, and a real assessment tells you which category you're in before you commit.",
      },
      {
        question: "Can a subcontractor put a lien on my house if my contractor never paid them?",
        answer:
          "In Texas, yes — unpaid subcontractors and material suppliers can file a mechanic's lien against your property even if you already paid the general contractor in full. Ask any new contractor for signed lien waivers from every sub and supplier as you make each payment, and consult a Texas construction attorney if a notice has already been sent to you. This isn't legal advice — deadlines depend on your specific contract.",
      },
      {
        question: "Should I file a complaint before hiring someone else?",
        answer:
          "Document first, then file. Photograph everything, save all texts and invoices, and get a written assessment of the unfinished work before any new work begins. Texas homeowners can file a complaint with the Office of the Attorney General's consumer protection division, and with the relevant licensing board if a licensed trade like plumbing or electrical was involved.",
      },
      {
        question: "How fast can someone start on a half-finished bathroom?",
        answer:
          "We respond to every request within one business day. Material lead times on tile, cabinetry, and fixtures usually set the pace for a full rebuild more than crew availability does.",
      },
      {
        question: "How do I make sure this doesn't happen again?",
        answer:
          "Require four things before signing: proof of general liability insurance sent directly from the insurer, a written line-item scope rather than a lump sum, a payment schedule tied to completed milestones instead of a large upfront deposit, and lien waivers at each payment. A contractor who refuses any of these is telling you something.",
      },
    ],
  },
  {
    slug: "small-bathroom-remodeling-ideas",
    title: "Modern Small Bathroom Remodeling Ideas",
    metaDescription:
      "10 real design ideas for a small bathroom remodel — curbless showers, floating vanities, recessed niches, and warm fixtures — plus real DFW pricing and what each idea actually costs.",
    keyword: "small bathroom remodeling ideas",
    excerpt:
      "Ten ways to make a small bathroom feel bigger and look current, from a curbless walk-in shower to a floating vanity with backlit mirror — with real DFW cost ranges for each.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/blog/small-bathroom-remodeling-ideas/small-bathroom-remodel-full-view.jpg",
      alt: "Small bathroom with a backlit round mirror, floating wood vanity, and frameless glass shower",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    faqs: [
      {
        question: "What's the best layout for a small bathroom remodel?",
        answer:
          "Tuck the shower into a corner or along one wall so the middle of the room stays open, and swap a hinged door for a pocket door or a door that swings out instead of in. Those two changes free up more usable floor space than almost anything else you can do in a small footprint.",
      },
      {
        question: "Is a walk-in shower better than a tub in a small bathroom?",
        answer:
          "For a small hall or guest bathroom, most homeowners get more usable space and an easier remodel out of a curbless walk-in shower with frameless glass than a tub. If the home only has one bathroom, we generally recommend keeping at least one tub in the house for resale.",
      },
      {
        question: "How much does it cost to remodel a small bathroom?",
        answer:
          "A cosmetic refresh — new paint, fixtures, vanity top, and lighting with no layout change — runs about $2,500–$10,000. Anything that changes the layout, like converting a tub to a walk-in shower or moving plumbing, moves into the standard full remodel range of $12,000–$30,000. DFW cost per square foot typically runs $70–$250.",
      },
      {
        question: "How long does a small bathroom remodel take?",
        answer:
          "A cosmetic refresh takes a few days. A standard full remodel of a small hall or guest bathroom typically takes 1–4 weeks, with most bathrooms done in 2–3 weeks.",
      },
      {
        question: "Can a small bathroom be remodeled for aging in place?",
        answer:
          "Yes — curbless entry, grab bars with proper blocking, a comfort-height toilet, and slip-resistant tile all fit a small footprint and are common requests we design for.",
      },
      {
        question: "Do I need a permit to remodel a small bathroom?",
        answer:
          "Any work that touches plumbing or electrical — moving a shower drain, adding a light over a new vanity — needs a permit and inspection per your city's requirements. We handle that paperwork as part of the project.",
      },
    ],
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const blogPostSlugs = blogPosts.map((p) => p.slug);
