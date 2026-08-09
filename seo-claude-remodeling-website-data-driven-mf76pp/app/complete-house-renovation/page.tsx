import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Star, ShieldCheck, BadgeCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceSchema, faqSchema } from "@/lib/seo";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { telHref, companyStat } from "@/lib/helpers";

export const metadata: Metadata = buildMetadata({
  title: "Complete House Renovation Fort Worth - My Dream Home Remodeling",
  description:
    "One crew for your whole home: kitchen, bathroom, flooring, painting, drywall, and demolition. Licensed & insured DFW contractor, free in-home estimate.",
  path: "/complete-house-renovation",
  image: "/images/dfw-home-remodel-exterior-dusk.jpg",
});

const faqs = [
  {
    question: "How long does a complete house renovation take?",
    answer:
      "It depends entirely on scope — a kitchen alone typically runs 4-8 weeks, a bathroom 2-3 weeks, flooring 2-5 days, and painting 2-7 days. Combining trades under one crew usually finishes faster than hiring each separately, since scheduling is coordinated instead of sequential. You'll get a real, project-specific timeline at your free walkthrough.",
  },
  {
    question: "What's included in a complete house renovation?",
    answer:
      "Any combination of kitchen remodeling, bathroom remodeling, flooring, interior & exterior painting, drywall repair, and demolition — coordinated by one project manager so you're not juggling separate contractors for each trade.",
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes. ${company.name} is fully licensed and insured in the State of Texas, and all plumbing and electrical work is performed by licensed trade professionals and inspected to local code.`,
  },
  {
    question: "Do you charge for the estimate?",
    answer:
      "Never. Every project starts with a free, no-obligation in-home consultation and a written estimate, so you know the exact cost and timeline before committing.",
  },
];

export default function CompleteHouseRenovationPage() {
  return (
    <>
      <JsonLd data={[...services.map((s) => serviceSchema(s)), faqSchema(faqs)]} />

      {/* Minimal header -- logo only, centered, no site nav */}
      <header className="border-b bg-white">
        <div className="container flex items-center justify-center py-2.5">
          <Link href="/" aria-label={`${company.name} home`}>
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={600}
              height={121}
              className="h-9 w-auto rounded-md border shadow-sm sm:h-10"
              style={{ aspectRatio: "600 / 121" }}
              priority
            />
          </Link>
        </div>
      </header>

      {/* Hero + form */}
      <section className="relative overflow-hidden bg-charcoal-dark text-white py-14 md:py-20">
        <Image
          src="/images/dfw-home-remodel-exterior-dusk.jpg"
          alt="Renovated DFW home exterior at dusk"
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
              One Crew, Every Trade
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Complete House Renovation
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Kitchen, bathroom, flooring, painting, drywall, demolition — one project manager
              coordinating every trade, instead of you hiring and scheduling each one separately.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                Licensed &amp; Insured
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                Workmanship Warranty
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                {companyStat("Average Rating")} Average Rating
              </li>
            </ul>
          </div>
          <div className="order-first rounded-lg border border-white/10 bg-white p-6 shadow-xl md:p-8 lg:order-none">
            <h2 className="text-xl font-semibold text-charcoal">
              Get Your Free Whole-Home Estimate
            </h2>
            <p className="mt-1 mb-6 text-sm text-muted-foreground">
              We respond to every request within one business day.
            </p>
            <ContactForm />
            <p className="mt-4 text-center text-xs text-muted-foreground">
              *Free in-home estimate. Scope and pricing depend on the trades involved.
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b bg-white py-8">
        <ul className="container grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
          <li>
            <p className="text-3xl font-bold text-primary">
              {companyStat("Average Rating")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Average Rating</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-primary">
              {companyStat("Years in Business")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Years in DFW</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-primary">6</p>
            <p className="mt-1 text-sm text-muted-foreground">Trades, One Crew</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-primary">Free</p>
            <p className="mt-1 text-sm text-muted-foreground">In-Home Estimate</p>
          </li>
        </ul>
      </section>

      {/* What's included — real services grid */}
      <section className="bg-muted py-14 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Every Trade, Coordinated By One Crew
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Mix and match what your project needs — one project manager keeps every trade on the
            same schedule.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.slug} className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-charcoal">{service.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>
                <p className="mt-3 text-xs font-medium text-primary">
                  Typical timeline: {service.duration}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <a href="#estimate-form">Get My Free Estimate</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            What DFW Homeowners Say
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-lg border bg-card p-6">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                &ldquo;Our 1998 kitchen was stuck in the past. The team reworked the layout,
                installed gorgeous quartz counters, and finished two days ahead of schedule. The
                project manager texted us updates every single morning.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-charcoal">
                Sarah M. — Keller, TX
              </p>
              <p className="text-xs text-muted-foreground">Full kitchen remodel</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                &ldquo;They converted our cramped tub into a beautiful walk-in shower with
                frameless glass. The tile work is flawless — friends assume we spent twice what
                we did. Clean crew, honest pricing.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-charcoal">
                James R. — Fort Worth, TX
              </p>
              <p className="text-xs text-muted-foreground">Tub-to-shower conversion</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-14 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Complete House Renovation — FAQs
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
        </div>
      </section>

      {/* Final CTA */}
      <section id="estimate-form" className="bg-primary py-14 md:py-20 text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready To Start Your Renovation?
          </h2>
          <p className="mt-4 text-lg text-blue-100 leading-relaxed">
            One call gets every trade on the same schedule. Free estimate, no obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="white" asChild>
              <a href="#top">Get My Free Estimate</a>
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
    </>
  );
}
