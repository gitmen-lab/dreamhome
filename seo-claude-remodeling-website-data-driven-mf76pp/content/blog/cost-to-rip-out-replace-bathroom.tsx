import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function CostToRipOutReplaceBathroom() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          A full gut-and-replace of a standard bathroom typically runs{" "}
          <strong className="text-charcoal">$13,000–$28,000</strong> nationally, including demolition,
          disposal, waterproofing, new tile, fixtures, vanity, and toilet. That range lines up closely with
          our own real{" "}
          <strong className="text-charcoal">$12,000–$30,000 standard full remodel</strong> tier for DFW
          homeowners.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What &quot;rip out and replace&quot; actually includes</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        This is a full gut, not a refresh: everything comes out down to the studs and subfloor, then goes
        back new. A complete estimate covers:
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "Demolition and disposal of the old tub, tile, vanity, and toilet",
          "Rough and finish plumbing",
          "Electrical work, including any new lighting or outlets",
          "Waterproofing membrane and cement backer board before any tile goes up",
          "New tile, fixtures, vanity, and toilet",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Demolition alone</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Demolition by itself typically runs a few hundred dollars up to around $3,500, depending on the
        bathroom&apos;s size and how much has to come out — a full gut to the studs costs more than
        removing just a vanity and toilet. For a standard 5&apos;×8&apos; bathroom, a complete gut
        renovation nationally lands around $6,000–$16,000 on the low end, with larger or higher-end projects
        reaching $25,000 or more.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What pushes it toward the top of the range</h2>
      <ul className="mt-5 space-y-3">
        {[
          "Moving plumbing lines instead of replacing fixtures in place",
          "Upgrading the electrical panel or adding circuits",
          "Structural repairs discovered once the walls are opened",
          "Custom vanities, premium tile, or luxury fixtures instead of stock materials",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        See{" "}
        <Link href="/blog/most-expensive-part-bathroom-remodel" className="text-primary hover:underline">
          what typically drives the total cost of a bathroom remodel
        </Link>{" "}
        for the full breakdown by trade.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Our real DFW pricing</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A standard full remodel — new tile, vanity, tub or shower, flooring, and fixtures for a hall or
        guest bath — runs{" "}
        <Link href="/blog/bathroom-remodel-budget-guide" className="text-primary hover:underline">
          $12,000–$30,000
        </Link>{" "}
        with us, and DFW cost per square foot typically runs $70–$250. A larger or higher-end gut with a
        layout change moves into the $25,000–$80,000+ master tier. Every project gets a free, written,
        line-item estimate — not a rule of thumb — before anything is torn out.
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Considering a full gut renovation?</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We&apos;ll walk your bathroom and give you a real, line-item number for a complete rip-out and
          replace — no guesswork. Learn more about our{" "}
          <Link href="/services/bathroom-remodeling" className="font-semibold underline">
            full bathroom remodels
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
