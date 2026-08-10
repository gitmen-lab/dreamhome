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
  /** True for a topic-cluster hub post (see references/bathroom-remodeling-cluster/). */
  clusterHub?: boolean;
  /** Hand-curated slugs of other posts to surface in this post's Related Reading block. */
  relatedPostSlugs?: string[];
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
    title: "12 Modern Small Bathroom Remodeling Ideas",
    metaDescription:
      "12 real small bathroom remodeling ideas — curbless showers, floating vanities, oversized mirrors, and warm fixtures — with real DFW pricing for each idea.",
    keyword: "small bathroom remodeling ideas",
    excerpt:
      "Twelve ways to make a small bathroom feel bigger and look current, from a curbless walk-in shower to an oversized mirror — with real DFW cost ranges for each.",
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
  {
    slug: "bathroom-remodel-budget-guide",
    title: "What's a Realistic Budget for a Bathroom Remodel?",
    metaDescription:
      "A realistic bathroom remodel budget runs $2,500 for a cosmetic refresh to $80,000+ for a master suite. Real DFW pricing tiers and what actually drives the number.",
    keyword: "realistic budget for a bathroom remodel",
    excerpt:
      "A realistic bathroom remodel budget isn't one number — it's three tiers, from a $2,500 cosmetic refresh to an $80,000+ master suite. Here's how to know which one you're in.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/gallery/bathroom-shower-waterproofing-membrane-installation.jpg",
      alt: "Shower alcove with waterproof membrane board installed before tiling begins",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    clusterHub: true,
    relatedPostSlugs: [
      "most-expensive-part-bathroom-remodel",
      "bathroom-trends-2026",
      "most-regretted-bathroom-upgrades",
      "bathroom-color-trends-2026",
      "renovate-bathroom-for-5000",
      "what-to-avoid-bathroom-remodel",
      "is-10000-enough-bathroom-remodel",
    ],
    faqs: [
      {
        question: "How much does the average bathroom remodel cost?",
        answer:
          "Most bathroom remodels range from about $2,500 for a cosmetic refresh to $12,000–$30,000 for a standard full remodel, with master and luxury bathrooms running $25,000–$80,000 or more. DFW-area cost per square foot typically runs $70–$250, up to $500+ for luxury materials.",
      },
      {
        question: "Does the bathroom's size change the budget much?",
        answer:
          "Yes — cost is priced per square foot, so a larger bathroom costs more for the same finishes. A small hall bathroom and a large master bath at the same finish level can differ by tens of thousands of dollars.",
      },
      {
        question: "Should I set my budget before or after getting an estimate?",
        answer:
          "Define the scope first — what's actually changing — then get a real, line-item estimate before locking in a number. Picking a dollar figure before the scope is defined is one of the most common ways a budget runs short.",
      },
      {
        question: "How long does a bathroom remodel take?",
        answer:
          "A cosmetic refresh takes a few days, a standard full remodel typically 1–4 weeks, and a full master bathroom 3–10+ weeks depending on scope and material lead times. Most bathrooms are done in 2–3 weeks.",
      },
    ],
  },
  {
    slug: "renovate-bathroom-for-5000",
    title: "Can You Renovate a Bathroom for $5,000?",
    metaDescription:
      "Yes — as a cosmetic refresh. Here's exactly what $5,000 covers, what it doesn't, and how to stretch it further without cutting corners.",
    keyword: "renovate a bathroom for $5000",
    excerpt:
      "$5,000 covers a real bathroom refresh — new vanity, fixtures, paint, and flooring — as long as the layout and plumbing stay put. Here's what's realistic and what isn't.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/gallery/bathroom-remodel-wainscoting-vanity-installation.jpg",
      alt: "Raw wood wainscoting panels being installed above a double bathroom vanity",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    clusterHub: true,
    relatedPostSlugs: [
      "10000-dollar-bathroom-remodel",
      "bathroom-remodel-lessons-learned",
      "bathroom-trends-2026",
      "most-regretted-bathroom-upgrades",
      "bathroom-color-trends-2026",
      "bathroom-remodel-budget-guide",
      "what-to-avoid-bathroom-remodel",
      "is-10000-enough-bathroom-remodel",
    ],
    faqs: [
      {
        question: "What's the cheapest way to update a bathroom?",
        answer:
          "New paint, fixtures, and hardware cost the least relative to the visual difference they make. A new vanity top and updated lighting are the next-best value — all of it fits inside a $2,500–$10,000 cosmetic refresh with no layout change.",
      },
      {
        question: "Is it worth doing some of the work myself to save money?",
        answer:
          "Labor is usually the largest line item, so DIY-ing the parts within your skillset — painting, hardware, removing old accessories — genuinely stretches a small budget. Leave plumbing, electrical, and waterproofing to a licensed pro; mistakes there cost far more to fix than they saved.",
      },
      {
        question: "Can $5,000 cover a new shower?",
        answer:
          "Usually not a full tub-to-shower conversion — that involves demolition, waterproofing, and tile labor that pushes a project into the standard full remodel range starting around $12,000. $5,000 fits a refresh of an existing tub or shower surround, not a rebuild.",
      },
    ],
  },
  {
    slug: "what-to-avoid-bathroom-remodel",
    title: "What to Avoid When Renovating a Bathroom",
    metaDescription:
      "The costliest bathroom remodel mistakes are invisible ones — skipped waterproofing, skipped permits, and a budget set before the scope is defined. Here's the full list.",
    keyword: "what to avoid when renovating a bathroom",
    excerpt:
      "The bathroom remodel mistakes that cost the most to fix are the ones you can't see once the tile is up. Here's what to avoid, from waterproofing to hiring.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/gallery/drywall-repair-plaster-finishing.jpg",
      alt: "Drywall repair and plaster finishing work in progress",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    clusterHub: true,
    relatedPostSlugs: [
      "bathroom-remodel-lessons-learned",
      "bathroom-trends-2026",
      "most-regretted-bathroom-upgrades",
      "bathroom-color-trends-2026",
      "bathroom-paint-colors-to-avoid",
      "bathroom-color-resale-value",
      "bathroom-remodel-budget-guide",
      "renovate-bathroom-for-5000",
      "is-10000-enough-bathroom-remodel",
    ],
    faqs: [
      {
        question: "What's the most common bathroom remodel mistake?",
        answer:
          "Setting a dollar figure before the scope is defined. Homeowners pick a number based on the finishes they want and forget the work behind the walls — waterproofing, rough-in, permits — that has to happen first and doesn't show up in a photo.",
      },
      {
        question: "Do I need a permit for a bathroom remodel?",
        answer:
          "Any work involving plumbing or electrical changes is permitted and inspected per your city's requirements. Skipping it risks more than a fine — unpermitted work can complicate a home sale later when a buyer's inspector finds it.",
      },
      {
        question: "How do I avoid hiring the wrong contractor?",
        answer:
          "Ask for proof of insurance sent directly from the insurer, a written line-item estimate instead of a lump sum, and ask exactly what a bid does and doesn't include before comparing prices. A bid well below the others is usually missing scope, not offering a discount.",
      },
    ],
  },
  {
    slug: "is-10000-enough-bathroom-remodel",
    title: "Is $10,000 Enough for a Bathroom Remodel?",
    metaDescription:
      "$10,000 is the top of a cosmetic refresh and the edge of a standard remodel. Here's what it buys, what pushes it higher, and a real Fort Worth example.",
    keyword: "is $10,000 enough for a bathroom remodel",
    excerpt:
      "$10,000 sits right at the edge between a cosmetic refresh and a full remodel. Here's what determines which side of that line your bathroom lands on.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/gallery/bathroom-remodel-after-tile-walk-in-shower.jpg",
      alt: "Finished walk-in shower with white subway tile, shiplap accent wall, and patterned floor tile",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    clusterHub: true,
    relatedPostSlugs: [
      "most-expensive-part-bathroom-remodel",
      "cost-to-rip-out-replace-bathroom",
      "bathroom-upgrades-that-add-value",
      "tub-to-shower-conversion-cost",
      "should-you-convert-tub-to-shower",
      "bathroom-remodel-budget-guide",
      "renovate-bathroom-for-5000",
      "what-to-avoid-bathroom-remodel",
    ],
    faqs: [
      {
        question: "Is $10,000 enough for a full bathroom remodel?",
        answer:
          "It's enough for a complete cosmetic refresh, and it can cover a modest standard remodel in a small bathroom if the plumbing stays put and materials are efficient. A full remodel with a tub-to-shower conversion in a larger bathroom usually runs into the $12,000–$30,000 standard tier instead.",
      },
      {
        question: "What's the cheapest way to get a walk-in shower under $10,000?",
        answer:
          "Keep the shower in its existing footprint, avoid moving the drain, and choose a standard tile size over large-format or custom stone. Those three choices, together, keep a tub-to-shower conversion at the lower end of the standard remodel range.",
      },
      {
        question: "How much does a tub-to-shower conversion cost?",
        answer:
          "It typically falls in the standard full remodel range, $12,000–$30,000, depending on the tile, glass enclosure, and whether the drain needs to move. A cosmetic-tier refresh generally doesn't cover a full conversion.",
      },
    ],
  },
  {
    slug: "most-expensive-part-bathroom-remodel",
    title: "What's the Most Expensive Part of a Bathroom Remodel?",
    metaDescription:
      "Labor — not materials — is the biggest cost in a bathroom remodel, and moving plumbing is the single most expensive change. Here's the real cost breakdown by trade.",
    keyword: "most expensive part of a bathroom remodel",
    excerpt:
      "Labor typically outweighs materials in a bathroom remodel, and one change drives cost up faster than any other: moving plumbing. Here's the real breakdown by trade.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/gallery/bathroom-remodel-before-demo-old-tub-shower.jpg",
      alt: "Original tub and subway tile shower surround with a section of wall removed before demo",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    relatedPostSlugs: [
      "bathroom-remodel-budget-guide",
      "is-10000-enough-bathroom-remodel",
      "cost-to-rip-out-replace-bathroom",
      "bathroom-upgrades-that-add-value",
    ],
    faqs: [
      {
        question: "Is labor or materials more expensive in a bathroom remodel?",
        answer:
          "Labor usually costs more — typically 40–50% of the total, versus 35–50% for materials, with permits and miscellaneous costs making up the rest.",
      },
      {
        question: "What's the single most expensive change I can make?",
        answer:
          "Moving a drain or supply line. It requires opening the wall or floor and running new lines to code, which typically adds $2,000–$5,000 on its own.",
      },
      {
        question: "How can I reduce labor costs without cutting corners?",
        answer:
          "Keep every fixture in its current location, choose a standard-size tile instead of large-format or custom stone, and pick a stock or semi-custom vanity. None of that touches the parts of the job — waterproofing, code compliance — you shouldn't cut.",
      },
    ],
  },
  {
    slug: "cost-to-rip-out-replace-bathroom",
    title: "How Much Does It Cost to Rip Out and Replace a Bathroom?",
    metaDescription:
      "A full gut-and-replace bathroom typically costs $13,000–$28,000 nationally, close to our real $12,000–$30,000 DFW standard remodel range. Here's what's included.",
    keyword: "cost to rip out and replace a bathroom",
    excerpt:
      "A full gut renovation typically runs $13,000–$28,000 nationally — in line with our real DFW standard remodel pricing. Here's exactly what that covers.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/gallery/bathroom-remodel-before-outdated-tub-shower.jpg",
      alt: "Dated bathroom with green walls and an old tub-shower combo before remodeling",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    relatedPostSlugs: [
      "is-10000-enough-bathroom-remodel",
      "most-expensive-part-bathroom-remodel",
      "tub-to-shower-conversion-cost",
    ],
    faqs: [
      {
        question: "How much does it cost to gut a small bathroom?",
        answer:
          "For a standard 5'×8' bathroom, a full gut renovation typically runs $6,000–$16,000 nationally on the low end, with larger or higher-end projects reaching $25,000 or more.",
      },
      {
        question: "Does demolition alone cost a lot?",
        answer:
          "Demolition by itself typically runs a few hundred dollars up to around $3,500, depending on the bathroom's size and how much has to come out.",
      },
      {
        question: "How does this compare to your real DFW pricing?",
        answer:
          "A full gut-and-replace generally falls in our $12,000–$30,000 standard full remodel tier, with DFW cost per square foot typically running $70–$250. A larger or higher-end gut with a layout change moves into the $25,000–$80,000+ master tier.",
      },
    ],
  },
  {
    slug: "bathroom-upgrades-that-add-value",
    title: "What Adds the Most Value to a Bathroom?",
    metaDescription:
      "A midrange bathroom remodel recoups 60–80% of its cost at resale — one of the best returns of any home upgrade. Here's what specifically adds value.",
    keyword: "what adds the most value to a bathroom",
    excerpt:
      "Bathroom remodels return more of their cost at resale than almost any other home improvement. Here's which specific upgrades add the most.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/gallery/modern-bathroom-remodel-navy-accent-wall.jpg",
      alt: "Bathroom with a navy paneled accent wall, oval mirrors, and dual pedestal sinks",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["grapevine-tx"],
    relatedPostSlugs: [
      "is-10000-enough-bathroom-remodel",
      "should-you-convert-tub-to-shower",
      "most-expensive-part-bathroom-remodel",
    ],
    faqs: [
      {
        question: "Do bathroom remodels really pay for themselves?",
        answer:
          "Not fully, but they return more than most home improvements. A midrange full remodel typically recoups 60–80% of its cost at resale, and minor cosmetic updates return proportionally even more.",
      },
      {
        question: "Is a luxury remodel worth it for resale value?",
        answer:
          "It returns a smaller percentage of what you spend than a midrange remodel, even though the finished result is nicer. A luxury remodel is worth doing for your own daily use — treat resale as a secondary reason, not the main one.",
      },
      {
        question: "Does adding a new bathroom pay off better than remodeling an existing one?",
        answer:
          "No — a new bathroom addition typically returns around 50% of its cost, the lowest of the three, because of the added construction cost of the new space itself.",
      },
    ],
  },
  {
    slug: "tub-to-shower-conversion-cost",
    title: "How Much Does a Tub-to-Walk-In-Shower Conversion Cost?",
    metaDescription:
      "A tub-to-walk-in-shower conversion typically costs $5,000–$12,000, though a full custom build with real tile and waterproofing usually runs more. The real breakdown.",
    keyword: "tub to shower conversion cost",
    excerpt:
      "A tub-to-shower conversion typically runs $5,000–$12,000 nationally, though a real custom build costs more than a prefab liner. Here's what actually drives the price.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/gallery/bathroom-remodel-walk-in-shower-tile-installation.jpg",
      alt: "Walk-in shower alcove with marble-look tile and a wood slat accent wall under a pendant light",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    relatedPostSlugs: [
      "is-10000-enough-bathroom-remodel",
      "should-you-convert-tub-to-shower",
      "cost-to-rip-out-replace-bathroom",
    ],
    faqs: [
      {
        question: "How much does a walk-in shower conversion typically cost?",
        answer:
          "National industry data puts it at $5,000–$12,000 for a typical conversion, with a wider reported range of $3,500–$15,000 depending on materials and whether plumbing moves. A full custom build with real tile and waterproofing usually lands in our $12,000–$30,000 standard remodel range.",
      },
      {
        question: "Does moving the drain add much to the cost?",
        answer:
          "Yes — typically $1,000–$3,000, depending on how far the plumbing has to travel and whether it requires opening the wall or subfloor.",
      },
      {
        question: "How long does a tub-to-shower conversion take?",
        answer:
          "A basic prefab conversion can take a few days. A full custom build with real tile and a curbless entry takes longer — most of our bathroom projects finish in 2–3 weeks once demo starts.",
      },
    ],
  },
  {
    slug: "should-you-convert-tub-to-shower",
    title: "Is Converting Your Tub to a Shower a Good Idea?",
    metaDescription:
      "Converting your tub to a shower is usually a smart upgrade — unless it's the only tub in the house. Here's how to decide, with a real Fort Worth example.",
    keyword: "convert tub to shower",
    excerpt:
      "For most secondary bathrooms, converting a tub to a walk-in shower is an easy call. The one real exception: when it's the only tub in the house.",
    publishedDate: "2026-08-09",
    heroImage: {
      src: "/images/gallery/bathroom-remodel-after-tile-walk-in-shower.jpg",
      alt: "Finished walk-in shower with white subway tile, shiplap accent wall, and patterned floor tile",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx", "grapevine-tx"],
    relatedPostSlugs: [
      "is-10000-enough-bathroom-remodel",
      "tub-to-shower-conversion-cost",
    ],
    faqs: [
      {
        question: "Will removing my only tub hurt resale value?",
        answer:
          "It can, particularly in family-oriented neighborhoods — many buyers with young children still expect at least one functional tub in the home. It's less of a concern if you have a tub elsewhere in the house, or in markets where walk-in showers are strongly preferred.",
      },
      {
        question: "Is a walk-in shower better for aging in place?",
        answer:
          "Yes. Curbless entry, grab bars with proper blocking, and slip-resistant tile are among the most common accessibility upgrades we build, and a walk-in shower is usually the centerpiece of that plan.",
      },
      {
        question: "Can I keep a tub somewhere and still get a walk-in shower?",
        answer:
          "Yes — keeping a soaking tub in one bathroom (often the primary) while converting a secondary bathroom to a walk-in shower is a common, resale-friendly balance.",
      },
    ],
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const blogPostSlugs = blogPosts.map((p) => p.slug);
