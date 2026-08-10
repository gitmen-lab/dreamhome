import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function BathroomUpgradesThatAddValue() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          A midrange bathroom remodel recoups roughly 60–80% of its cost at resale, according to the
          annual Cost vs. Value report — one of the best returns of any home improvement. Small cosmetic
          updates return even more proportionally: about $1.71 in value for every $1 spent on things like
          paint, refinished cabinets, or a new mirror and hardware. Bigger, more customized remodels return
          a smaller percentage of what you spend, even though the finished result is nicer.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Value by project size</h2>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 font-semibold text-charcoal">Project type</th>
              <th className="p-4 font-semibold text-charcoal">Typical resale return</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Minor cosmetic update (paint, hardware, mirror)", "~70–85% of cost, or ~$1.71 per $1 spent"],
              ["Midrange full remodel", "~60–80% of cost"],
              ["Upscale or luxury remodel", "smaller percentage, despite higher total spend"],
              ["Adding a new bathroom (not remodeling an existing one)", "~50% of cost — lowest of the three"],
            ].map((row) => (
              <tr key={row[0]} className="border-t">
                <td className="p-4 font-medium text-charcoal">{row[0]}</td>
                <td className="p-4 text-muted-foreground">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        These are national averages from industry resale research, not a promise for any specific home —
        local market conditions and your specific bathroom always matter more than an average.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">The specific upgrades that tend to add the most</h2>
      <ul className="mt-5 space-y-3">
        {[
          "A double vanity in a shared or primary bathroom",
          "A walk-in shower with quality tile and a frameless glass enclosure",
          "Updated, code-compliant lighting and ventilation",
          "Durable, neutral-toned tile and flooring buyers won't want to rip out",
          "Real waterproofing behind every tile job — invisible, but it's what keeps the bathroom from becoming a liability instead of an asset",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">What tends to add less than you'd expect</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Highly personal or trend-specific choices — an unusual tile color, a very niche fixture finish, or
        removing the only tub in the house — can narrow your buyer pool even if you love the result. See{" "}
        <Link href="/blog/should-you-convert-tub-to-shower" className="text-primary hover:underline">
          whether converting your only tub to a shower is a good idea
        </Link>{" "}
        before you decide, and{" "}
        <Link href="/blog/what-to-avoid-bathroom-remodel" className="text-primary hover:underline">
          what to avoid when renovating a bathroom
        </Link>{" "}
        for the choices that tend to backfire.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">A real example</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A Grapevine homeowner&apos;s master bath went from builder-grade to spa-level with heated floors, a
        soaking tub, and marble-look porcelain throughout — done in 19 days, exactly as promised. Pairing a
        soaking tub with an upgraded shower and premium finishes is a strong resale strategy: it keeps the
        home appealing to buyers who want a tub while still delivering the spa-style upgrade most buyers
        respond to.
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Get a plan built around real value, not guesswork</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We&apos;ll help you choose finishes and a scope that fit your budget and hold their value. Explore
          our{" "}
          <Link href="/services/bathroom-remodeling" className="font-semibold underline">
            bathroom remodeling services
          </Link>{" "}
          for a free, line-item estimate.
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
