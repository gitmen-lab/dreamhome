import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function Is10000EnoughBathroomRemodel() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          $10,000 sits right at the edge. It&apos;s the top of our{" "}
          <strong className="text-charcoal">$2,500–$10,000 cosmetic refresh</strong> range, which covers a
          full surface-level update with no layout change. A standard full remodel — new tub or shower,
          tile, and flooring — starts around $12,000. Whether $10,000 gets you there depends almost entirely
          on the bathroom&apos;s size and whether the plumbing stays put.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What $10,000 typically buys</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        At the top of the cosmetic tier, $10,000 stretches to a genuinely complete refresh: new vanity,
        fixtures, paint, lighting, flooring, and a re-tiled or refinished tub surround — as long as the
        layout and plumbing locations don&apos;t move. In a small hall or guest bathroom with efficient
        material choices, $10,000 can also cover a modest standard remodel — new tile and a tub-to-shower
        conversion, for example — if the scope stays tight and nothing gets moved.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What pushes it past $10,000</h2>
      <ul className="mt-5 space-y-3">
        {[
          "Moving a drain, supply line, or the toilet — the single most expensive change on any remodel",
          "A full tub-to-shower conversion with new waterproofing, tile, and a frameless glass enclosure",
          "A larger bathroom, where the same finishes simply cover more square footage",
          "Premium tile, stone, or fixtures instead of standard-grade materials",
          "Any structural or layout change, including widening a doorway or moving a wall",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        DFW cost per square foot typically runs $70–$250, so the honest way to know where your bathroom
        lands is a real measurement and a written estimate — not a rule of thumb.
      </p>

      <div className="mt-8 rounded-lg border bg-muted p-6">
        <p className="text-sm font-semibold text-charcoal">A real Fort Worth example</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          &ldquo;They converted our cramped tub into a beautiful walk-in shower with frameless glass. The
          tile work is flawless — friends assume we spent twice what we did. Clean crew, honest
          pricing.&rdquo;
        </p>
        <p className="mt-2 text-xs font-medium text-muted-foreground">
          — James R.,{" "}
          <Link href="/service-areas/fort-worth-tx" className="text-primary hover:underline">
            Fort Worth
          </Link>
          , tub-to-shower conversion
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">If your bathroom needs more than $10,000</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        That&apos;s not a failure of planning — it&apos;s just the standard or master tier, and it&apos;s
        worth knowing before you commit to a smaller number and run out of budget halfway through. See our
        full{" "}
        <Link href="/blog/bathroom-remodel-budget-guide" className="text-primary hover:underline">
          bathroom remodel budget guide
        </Link>{" "}
        for all three tiers, or start smaller and see{" "}
        <Link href="/blog/renovate-bathroom-for-5000" className="text-primary hover:underline">
          what $5,000 can realistically cover
        </Link>{" "}
        if $10,000 is out of reach right now.
      </p>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Whatever your number is, avoid the mistakes that eat a tight budget fastest — see{" "}
        <Link href="/blog/what-to-avoid-bathroom-remodel" className="text-primary hover:underline">
          what to avoid when renovating a bathroom
        </Link>
        .
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Find out exactly what $10,000 gets you</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We&apos;ll walk your bathroom and give you a free, line-item estimate so you know precisely what
          fits your budget before demo day. Learn more about{" "}
          <Link href="/services/bathroom-remodeling" className="font-semibold underline">
            our bathroom remodeling services
          </Link>
          .
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
