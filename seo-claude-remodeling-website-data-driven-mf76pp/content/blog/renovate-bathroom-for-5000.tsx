import Link from "next/link";
import { Phone, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function RenovateBathroomFor5000() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          Yes — but as a cosmetic refresh, not a full remodel. $5,000 sits inside our{" "}
          <strong className="text-charcoal">$2,500–$10,000 cosmetic refresh</strong> range: new paint,
          fixtures, a vanity top, hardware, and lighting, with the existing layout and plumbing left alone.
          It won&apos;t stretch to a new tub, shower, or tile floor once labor and materials are both in
          the number.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What $5,000 realistically covers</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Think refresh, not reconstruction. The existing layout and plumbing stay exactly where they are —
        that&apos;s what keeps the number from ballooning.
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "New vanity, sink, and faucet (drop-in or replace-in-place, not relocated)",
          "New toilet",
          "Paint and updated lighting",
          "New flooring, if the existing subfloor doesn't need repair",
          "New hardware, mirror, and accessories",
          "Fresh caulk and grout on an otherwise sound tub or shower surround",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What it usually can&apos;t cover</h2>
      <ul className="mt-5 space-y-3">
        {[
          "A new tub-to-shower conversion — that's real demolition, waterproofing, and tile labor",
          "Moving a drain, supply line, or the toilet's position",
          "A full tile job on the shower walls or floor",
          "Structural or layout changes of any kind",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <X className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        If a tub-to-shower conversion is the goal, plan on the standard full remodel range instead — see{" "}
        <Link href="/blog/is-10000-enough-bathroom-remodel" className="text-primary hover:underline">
          whether $10,000 is enough to get there
        </Link>
        .
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">How to make $5,000 go further</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Labor is usually the largest line item on any remodel, so the fastest way to stretch a small budget
        is to reduce it — without cutting corners on the parts that fail if they&apos;re done wrong.
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "Keep every fixture in its current location — nothing eats budget faster than moving plumbing.",
          "Handle the parts within your skillset yourself: painting, hardware swaps, removing old accessories.",
          "Spend on one or two things that get touched daily — the faucet, the lighting — rather than spreading the budget thin.",
          "Get a real line-item estimate before you buy materials, so you know what's actually left for finishes.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Before you spend it</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A tight budget makes mistakes more expensive, because there&apos;s no slack to absorb a redo. See{" "}
        <Link href="/blog/what-to-avoid-bathroom-remodel" className="text-primary hover:underline">
          what to avoid when renovating a bathroom
        </Link>{" "}
        before you buy anything, and read our full{" "}
        <Link href="/blog/bathroom-remodel-budget-guide" className="text-primary hover:underline">
          bathroom remodel budget guide
        </Link>{" "}
        if $5,000 turns out to be tighter than what your project needs.
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Not sure which tier your bathroom needs?</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We&apos;ll walk your bathroom and tell you honestly whether a refresh fits your goals or you need
          a full remodel — with a free, line-item estimate either way. Learn more about our{" "}
          <Link href="/services/bathroom-remodeling" className="font-semibold underline">
            bathroom renovation services
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
