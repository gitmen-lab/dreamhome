import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function MostExpensivePartBathroomRemodel() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          Labor, not materials, is the biggest line item on most bathroom remodels — typically
          40–50% of the total. Within labor, moving a plumbing line is the single most expensive change
          you can make, usually adding $2,000–$5,000 to a project on its own.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Where the money actually goes</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Industry cost guides split a typical bathroom remodel roughly into labor at 40–50% of the total,
        materials at 35–50%, and permits plus miscellaneous costs making up the rest. Here&apos;s how that
        breaks down by trade:
      </p>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 font-semibold text-charcoal">Item</th>
              <th className="p-4 font-semibold text-charcoal">Typical range</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Demolition", "$500 – $1,500"],
              ["Plumbing rough-in and fixtures", "$1,000 – $4,000"],
              ["Electrical", "$500 – $2,000"],
              ["Tile installation (floor + shower)", "$1,000 – $3,000"],
              ["Carpentry and finish work", "$500 – $1,500"],
              ["Moving a drain or supply line", "adds $2,000 – $5,000"],
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
        These are national industry ranges, not a quote — get a{" "}
        <Link href="/blog/bathroom-remodel-budget-guide" className="text-primary hover:underline">
          real, line-item DFW estimate
        </Link>{" "}
        before you budget against them.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">The biggest material costs</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        On the materials side, tile — floor and shower surround together — and the vanity or countertop are
        consistently the largest line items. Both scale directly with your choices: a standard-size ceramic
        tile costs far less than a large-format porcelain or natural stone, and a stock vanity costs far
        less than a custom one.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Why moving plumbing costs so much</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Relocating a drain or supply line means opening the wall or floor, running new lines to code, and
        closing everything back up before a single tile goes down — real demolition and rough-in labor, not
        a quick swap. It&apos;s the change that most reliably pushes a project from one budget tier to the
        next. If you&apos;re specifically pricing a{" "}
        <Link href="/blog/tub-to-shower-conversion-cost" className="text-primary hover:underline">
          tub-to-shower conversion
        </Link>
        , this is usually the deciding cost factor.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">How to keep costs down without cutting corners</h2>
      <ul className="mt-5 space-y-3">
        {[
          "Keep every fixture in its current location if the layout already works",
          "Choose a standard-size tile over large-format or custom stone",
          "Pick a stock or semi-custom vanity instead of a fully custom build",
          "Get a written, line-item estimate before committing so you know exactly where your money is going",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        For a full gut renovation rather than a partial update, see{" "}
        <Link href="/blog/cost-to-rip-out-replace-bathroom" className="text-primary hover:underline">
          what it costs to rip out and replace a bathroom
        </Link>
        .
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Get real numbers, not national averages</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We&apos;ll walk your bathroom and give you a free, line-item estimate for your actual project —
          not a rule of thumb. Explore our{" "}
          <Link href="/services/bathroom-remodeling" className="font-semibold underline">
            bathroom remodeling services
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
