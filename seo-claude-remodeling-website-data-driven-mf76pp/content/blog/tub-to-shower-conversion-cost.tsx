import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function TubToShowerConversionCost() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          A tub-to-walk-in-shower conversion typically costs{" "}
          <strong className="text-charcoal">$5,000–$12,000</strong> nationally, with a wider reported range
          of $3,500–$15,000 depending on materials and whether plumbing moves. A full custom conversion
          with real tile, waterproofing, and frameless glass — the kind we build — usually lands in our own{" "}
          <strong className="text-charcoal">$12,000–$30,000 standard full remodel</strong> range rather than
          at the low end of that national figure, which often reflects a one-day prefab liner instead of a
          real remodel.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What&apos;s included in the cost</h2>
      <ul className="mt-5 space-y-3">
        {[
          "Demolition of the existing tub and surround",
          "Waterproofing membrane and cement backer board",
          "New tile on the walls and floor of the shower",
          "A shower pan or curb (or a curbless build, if the subfloor allows it)",
          "New fixtures — shower valve, showerhead, and hardware",
          "A frameless or semi-frameless glass enclosure",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What raises the price</h2>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 font-semibold text-charcoal">Factor</th>
              <th className="p-4 font-semibold text-charcoal">Typical added cost</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Moving the drain or supply lines", "$1,000 – $3,000"],
              ["Grab bars", "$85 – $300 each"],
              ["Built-in bench or seat", "$200 – $500"],
              ["Slip-resistant flooring", "$200 – $1,000"],
              ["Custom tile vs. a prefab shower kit", "highly variable — the biggest single factor"],
            ].map((row) => (
              <tr key={row[0]} className="border-t">
                <td className="p-4 font-medium text-charcoal">{row[0]}</td>
                <td className="p-4 text-muted-foreground">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        See{" "}
        <Link href="/blog/most-expensive-part-bathroom-remodel" className="text-primary hover:underline">
          what typically drives the total cost of a bathroom remodel
        </Link>{" "}
        for how moving plumbing compares to other changes.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">How long it takes</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A basic prefab conversion can take a few days. A full custom build with real tile, proper
        waterproofing, and a curbless entry typically takes longer — most of our bathroom projects finish in
        2–3 weeks once demo starts, which includes far more than the shower alone.
      </p>

      <div className="mt-8 rounded-lg border bg-muted p-6">
        <p className="text-sm font-semibold text-charcoal">A real Fort Worth conversion</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          &ldquo;They converted our cramped tub into a beautiful walk-in shower with frameless glass. The
          tile work is flawless — friends assume we spent twice what we did. Clean crew, honest
          pricing.&rdquo;
        </p>
        <p className="mt-2 text-xs font-medium text-muted-foreground">
          — James R., Fort Worth, tub-to-shower conversion
        </p>
      </div>

      <p className="mt-6 text-muted-foreground leading-relaxed">
        Still deciding if a conversion is the right move at all? See{" "}
        <Link href="/blog/should-you-convert-tub-to-shower" className="text-primary hover:underline">
          whether converting your tub to a shower is a good idea
        </Link>{" "}
        before you get quotes.
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Get a real conversion estimate</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We&apos;ll walk your bathroom and tell you exactly what a real tub-to-shower conversion costs for
          your space — free, no obligation. Explore our{" "}
          <Link href="/services/bathroom-remodeling" className="font-semibold underline">
            walk-in shower conversions
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
