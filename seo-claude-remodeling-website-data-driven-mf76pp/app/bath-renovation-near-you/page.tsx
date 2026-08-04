import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Star,
  Quote,
  ShieldCheck,
  BadgeCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceSchema, faqSchema } from "@/lib/seo";
import { company } from "@/data/company";
import { getService } from "@/data/services";
import { cities } from "@/data/cities";
import { galleryItems } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";
import { telHref, companyStat, cityLabel } from "@/lib/helpers";

const service = getService("bathroom-remodeling")!;
const bathGallery = galleryItems.filter((g) => g.serviceSlug === "bathroom-remodeling");

export const metadata: Metadata = buildMetadata({
  title: "Bath Renovation Near You in DFW | My Dream Home Remodeling",
  description:
    "Searching for bath renovation near you? My Dream Home Remodeling is a licensed, Fort Worth-based contractor serving the whole DFW Metroplex — free in-home estimates, one crew for every trade, most renovations done in 2-3 weeks.",
  path: "/bath-renovation-near-you",
  image: "/images/gallery/bathroom-remodel-after-tile-walk-in-shower.jpg",
});

const faqs = [
  {
    question: "How much does a bath renovation cost?",
    answer:
      "Most bathroom renovations range from about $2,500 for a cosmetic refresh to $12,000–$30,000 for a standard full remodel, with master and luxury bathrooms running $25,000–$80,000 or more. DFW-area cost per square foot typically runs $70–$250 (up to $500+ for luxury materials). Every project gets a free, line-item estimate before work begins.",
  },
  {
    question: "How long will I be without my bathroom?",
    answer:
      "A cosmetic refresh takes a few days, a standard full remodel typically 1–4 weeks, and a full master bathroom 3–10+ weeks of construction depending on scope and material lead times. We compress the 'no water' window as much as possible.",
  },
  {
    question: "Do you charge for the estimate?",
    answer:
      "Never. Every renovation starts with a free, no-obligation in-home consultation and a written estimate, so you know the exact cost before committing to anything.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer:
      "Yes. Any work involving plumbing or electrical changes is permitted and inspected per your city's requirements — we handle the paperwork.",
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes. ${company.name} is fully licensed and insured in the State of Texas, and all plumbing and electrical work is performed by licensed trade professionals and inspected to local code. Every contractor says this — ask to see it anyway.`,
  },
  {
    question: "Can you make my bathroom safer for aging in place?",
    answer:
      "Absolutely. Curbless showers, grab bars with proper blocking, comfort-height toilets, and slip-resistant tile are all common requests we design for.",
  },
];

const cityNames = cities.map(cityLabel).slice(0, 10).join(", ");

const bathTestimonials = testimonials.filter((t) => t.serviceSlug === "bathroom-remodeling");
const otherTestimonials = testimonials.filter((t) => t.serviceSlug !== "bathroom-remodeling");
const gridTestimonials = [...bathTestimonials, ...otherTestimonials].slice(0, 9);

function SectionCta({ label = "Get My Free Estimate" }: { label?: string }) {
  return (
    <div className="mt-10 hidden justify-center lg:flex">
      <Button size="lg" asChild>
        <a href="#estimate-form">{label}</a>
      </Button>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function BathRenovationNearYouPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(service), faqSchema(faqs)]} />

      {/* Minimal header -- logo + click-to-call, no site nav */}
      <header className="border-b bg-white">
        <div className="container flex items-center justify-between py-2.5">
          <Link href="/" aria-label={`${company.name} home`}>
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={600}
              height={121}
              className="h-9 w-auto rounded-md shadow-sm sm:h-10"
              style={{ aspectRatio: "600 / 121" }}
              priority
            />
          </Link>
          <a
            href={telHref(company.phone)}
            className="hidden items-center gap-2 text-sm font-semibold text-charcoal hover:text-primary transition-colors lg:flex"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {company.phoneDisplay}
          </a>
        </div>
      </header>

      {/* Hero + form */}
      <section className="relative overflow-hidden bg-charcoal-dark text-white py-14 md:py-20">
        <Image
          src="/images/gallery/bathroom-remodel-walk-in-shower-tile-installation.jpg"
          alt="Walk-in shower with marble-look tile and wood slat accent wall"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal-dark/85 to-charcoal-dark/50"
          aria-hidden="true"
        />
        <div className="container relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium">
              Serving the DFW Metroplex
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Bath Renovation Near You — Local Crew, Real Pricing, No Guesswork
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              {company.name} is a Fort Worth-based, licensed and insured contractor
              serving the whole DFW Metroplex. One crew handles every trade. Most
              bathrooms are done in 2–3 weeks. You get a written estimate before
              anything gets demoed — not a guess over the phone.
            </p>
            <ul className="mt-8 space-y-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                Licensed &amp; insured, every job permitted and inspected
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                Workmanship warranty on every renovation
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                Fixed, written timelines — most bathrooms done in 2–3 weeks
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-5 w-5 shrink-0 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                {companyStat("Average Rating")} average rating on Google
              </li>
            </ul>
            <div className="mt-8 hidden lg:block">
              <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                <a href={telHref(company.phone)}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {company.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
          <div
            id="estimate-form"
            className="order-first rounded-lg border border-white/10 bg-white p-6 shadow-xl md:p-8 lg:order-none"
          >
            <h2 className="text-xl font-semibold text-charcoal">
              Get Your Free Bath Renovation Estimate
            </h2>
            <p className="mt-1 mb-6 text-sm text-muted-foreground">
              We respond to every request within one business day.
            </p>
            <ContactForm defaultService="bathroom-remodeling" />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b bg-white py-8">
        <ul className="container grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
          <li>
            <p className="text-3xl font-bold text-primary">{companyStat("Average Rating")}</p>
            <p className="mt-1 text-sm text-muted-foreground">Google Rating</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-primary">{companyStat("Years in Business")}</p>
            <p className="mt-1 text-sm text-muted-foreground">Years in DFW</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-primary">{companyStat("Cities Served")}</p>
            <p className="mt-1 text-sm text-muted-foreground">DFW Cities Served</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-primary">Free</p>
            <p className="mt-1 text-sm text-muted-foreground">In-Home Estimate</p>
          </li>
        </ul>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Why DFW Homeowners Call Us First
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {service.benefits.map((b) => (
              <li key={b.title} className="flex gap-3 rounded-lg border bg-card p-5">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal">{b.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <SectionCta />
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted py-14 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            How Your Renovation Actually Works
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {service.processSteps.map((step, i) => (
              <li key={step.title} className="rounded-lg border bg-card p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="mt-3 font-semibold text-charcoal">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <SectionCta />
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Recent Bathroom Renovations
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Real projects from our DFW crews — not stock photos.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bathGallery.map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-lg border shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm font-medium text-charcoal">{item.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <SectionCta />
        </div>
      </section>

      {/* Case study */}
      <section className="bg-muted py-14 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Case Study: Outdated Tub to Spa-Style Walk-In Shower
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            A real Fort Worth renovation, start to finish.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
              <Image
                src="/images/gallery/bathroom-remodel-before-outdated-tub-shower.jpg"
                alt="Dated bathroom with green walls and an old tub-shower combo before renovation"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
              <span className="absolute left-2 top-2 rounded bg-charcoal-dark/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                1. Before
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
              <Image
                src="/images/gallery/bathroom-remodel-before-demo-old-tub-shower.jpg"
                alt="Original tub and subway tile shower surround with a section of wall removed before demo"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
              <span className="absolute left-2 top-2 rounded bg-charcoal-dark/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                2. Demo
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
              <Image
                src="/images/gallery/bathroom-remodel-after-tile-walk-in-shower.jpg"
                alt="Finished walk-in shower with white subway tile after renovation"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
              <span className="absolute left-2 top-2 rounded bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                3. After
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-center text-muted-foreground leading-relaxed">
            This Fort Worth bathroom started as a dated tub-shower combo with worn
            tile and poor lighting. Demo day is loud — not &ldquo;close the
            door&rdquo; loud, &ldquo;text your neighbors first&rdquo; loud. After
            full demo, a new waterproofing membrane, and a rebuild, it's now a
            walk-in shower finished in white subway tile with a shiplap accent
            wall and patterned floor tile.
          </p>
          <SectionCta label="Start My Renovation" />
        </div>
      </section>

      {/* Pricing */}
      {service.pricingTiers && (
        <section className="bg-white py-14 md:py-20">
          <div className="container max-w-3xl">
            <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
              What Does a Bath Renovation Cost?
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Every project gets a free, line-item estimate — these are typical DFW
              ranges to help you plan. (Grout color is the decision that actually
              breaks people. The price range, at least, isn't up for debate.)
            </p>
            <div className="mt-10 overflow-x-auto rounded-lg border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 font-semibold text-charcoal">Tier</th>
                    <th className="p-4 font-semibold text-charcoal">Typical Range</th>
                    <th className="p-4 font-semibold text-charcoal">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {service.pricingTiers.map((tier) => (
                    <tr key={tier.tier} className="border-t">
                      <td className="p-4 font-medium text-charcoal">{tier.tier}</td>
                      <td className="p-4 whitespace-nowrap text-primary font-semibold">
                        {tier.range}
                      </td>
                      <td className="p-4 text-muted-foreground">{tier.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SectionCta label="Get My Line-Item Estimate" />
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="bg-muted py-14 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Real Reviews From Real Renovations
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            {company.googleReviewCount} Google reviews, {companyStat("Average Rating")} average —
            small numbers, and every one of them real.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {gridTestimonials.map((t, i) => (
              <div key={i} className="flex h-full flex-col rounded-lg border bg-card p-6">
                <Quote className="h-7 w-7 text-primary/20" aria-hidden="true" />
                <Stars rating={t.rating} />
                <blockquote className="mt-3 flex-1 text-sm text-charcoal leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <footer className="mt-4 border-t pt-4">
                  <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.project}</p>
                </footer>
              </div>
            ))}
          </div>
          <SectionCta />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            The Questions Everyone Asks Before They Sign
          </h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border bg-card p-6">
                <dt className="font-semibold text-charcoal">{faq.question}</dt>
                <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
          <SectionCta />
        </div>
      </section>

      {/* Service area */}
      <section className="bg-muted py-10">
        <div className="container max-w-3xl text-center">
          <h2 className="text-lg font-semibold text-charcoal">
            Proudly Serving {cities.length} DFW Communities
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {cityNames}, and more across the Dallas–Fort Worth Metroplex.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-14 md:py-20 text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Start Your Bath Renovation?
          </h2>
          <p className="mt-4 text-lg text-blue-100 leading-relaxed">
            Get a free, no-obligation in-home estimate from a local, licensed DFW
            crew.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="white" asChild>
              <a href="#estimate-form">Get My Free Estimate</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href={telHref(company.phone)}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {company.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-charcoal-dark py-8 text-xs text-gray-400">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved. ·{" "}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
          <p className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {company.license}
          </p>
        </div>
      </footer>

      {/* Spacer so the fixed mobile CTA bar never covers footer content */}
      <div className="h-16 lg:hidden" aria-hidden="true" />

      {/* Fixed single CTA on mobile/tablet, hidden on desktop */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-primary p-3 shadow-lg lg:hidden">
        <a
          href={telHref(company.phone)}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-white py-3 text-base font-semibold text-primary"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now: {company.phoneDisplay}
        </a>
      </div>
    </>
  );
}
