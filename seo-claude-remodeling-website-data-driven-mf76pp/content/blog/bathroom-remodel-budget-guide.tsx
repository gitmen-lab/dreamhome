import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function BathroomRemodelBudgetGuide() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          A realistic bathroom remodel budget runs <strong className="text-charcoal">$2,500–$10,000</strong> for
          a cosmetic refresh, <strong className="text-charcoal">$12,000–$30,000</strong> for a standard full
          remodel, and <strong className="text-charcoal">$25,000–$80,000+</strong> for a master or luxury
          bathroom. In the DFW area, cost per square foot typically runs $70–$250, up to $500+ for luxury
          materials. Every project gets a free, line-item estimate before you commit to a number.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        What a bathroom remodel actually costs
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        The single biggest driver of your budget isn&apos;t the room&apos;s size — it&apos;s how much of it
        changes. Three tiers cover almost every real project:
      </p>
      <ul className="mt-5 space-y-4">
        {[
          {
            title: "Cosmetic refresh — $2,500–$10,000",
            body: "New paint, fixtures, a vanity top, hardware, and lighting. No layout change, no moved plumbing.",
          },
          {
            title: "Standard full remodel — $12,000–$30,000",
            body: "New tile, vanity, tub or shower, flooring, and fixtures for a hall or guest bath. This is the most common full remodel.",
          },
          {
            title: "Master or luxury remodel — $25,000–$80,000+",
            body: "A walk-in shower, double vanity, custom tile, a layout change, and premium finishes.",
          },
        ].map((tier) => (
          <li key={tier.title} className="rounded-lg border bg-card p-5">
            <p className="font-semibold text-charcoal">{tier.title}</p>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{tier.body}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What actually drives the number up</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Industry cost guides put the national average bathroom remodel around $16,500, with most projects
        landing between $8,000 and $45,000 depending on scope, materials, and region. Labor typically
        accounts for 40–50% of the total, materials 35–50%, and permits and miscellaneous costs the rest.
        Tile work and the vanity are usually the biggest material line items. If one change moves your
        project into a higher tier faster than anything else, it&apos;s relocating plumbing — shifting a
        drain or supply line is real demolition and rough-in work, not a swap.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Set your budget by what you&apos;re actually doing</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        &quot;What&apos;s a realistic budget&quot; isn&apos;t one number — it depends on which of these you&apos;re
        doing:
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "Refreshing what's there — new paint, fixtures, and a vanity, keeping the layout: cosmetic tier.",
          "Replacing the tub, tile, and flooring in a hall or guest bath without moving plumbing: standard tier.",
          "Converting a tub to a walk-in shower, or building a spa-style master bath with a layout change: master tier.",
          "Making a bathroom accessible — curbless entry, grab bars, comfort-height fixtures: usually standard tier, sometimes cosmetic depending on scope.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        If your number is closer to $5,000, see{" "}
        <Link href="/blog/renovate-bathroom-for-5000" className="text-primary hover:underline">
          what a $5,000 bathroom remodel can realistically cover
        </Link>
        . If you&apos;re working with $10,000, see{" "}
        <Link href="/blog/is-10000-enough-bathroom-remodel" className="text-primary hover:underline">
          whether $10,000 is enough for your project
        </Link>
        .
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">The budget mistake we see most</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Homeowners often set a number based on the finishes they want and forget the work behind the walls —
        waterproofing, rough-in, and code-required permits — that doesn&apos;t show up in a photo but has to
        happen first. See{" "}
        <Link href="/blog/what-to-avoid-bathroom-remodel" className="text-primary hover:underline">
          what to avoid when renovating a bathroom
        </Link>{" "}
        for the mistakes that blow up a budget mid-project.
      </p>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        It&apos;s also worth deciding what you&apos;re chasing before you spend: some upgrades that look
        great in a showroom get regretted a year later, and some 2026 color and material choices will age
        better than others. Both are worth ten minutes of research before demo day.
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Get a real number for your bathroom</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We walk your bathroom and give you a free, line-item estimate before anything is torn out — so you
          know which tier you&apos;re in before you commit. Explore our{" "}
          <Link href="/services/bathroom-remodeling" className="font-semibold underline">
            bathroom remodeling services
          </Link>{" "}
          or call us directly.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button size="lg" variant="white" asChild>
            <a href={telHref(company.phone)}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {company.phoneDisplay}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href="/contact">Request a Free Estimate</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
