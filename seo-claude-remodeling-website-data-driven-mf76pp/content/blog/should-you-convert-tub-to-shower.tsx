import Link from "next/link";
import { Phone, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function ShouldYouConvertTubToShower() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          For most hall and guest bathrooms, yes — a walk-in shower is easier to use daily, easier to keep
          clean, and reads as more updated to buyers. The one real exception: if it&apos;s the only tub in
          the house, removing it can narrow your buyer pool in family-oriented markets. The strongest
          resale strategy is balance — keep at least one tub somewhere in the home if you can.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">When converting makes sense</h2>
      <ul className="mt-5 space-y-3">
        {[
          "You already have (or are keeping) a tub elsewhere in the house",
          "This bathroom is a secondary or guest bath, not the home's only one",
          "You or someone in the household would benefit from easier, curbless access",
          "The existing tub is dated and a walk-in shower is genuinely the more usable upgrade",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">When to think twice</h2>
      <ul className="mt-5 space-y-3">
        {[
          "It's the only tub in the house, and you're in a family-oriented neighborhood",
          "You're remodeling primarily for resale in a market where buyers still expect a tub",
          "You're planning to sell within the next year or two, before you'd get daily use out of the change",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <X className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Real estate guidance is consistent on this: many buyers, especially families with young children,
        still expect at least one functional tub somewhere in the home. That doesn&apos;t mean every
        bathroom needs one — it means the decision should account for whether this is the only one.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">The everyday case for converting</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Set resale aside for a moment — for daily use, a curbless walk-in shower is easier to step into,
        easier to clean, and safer as families age. It&apos;s also one of the most requested accessibility
        upgrades we build: curbless entry, grab bars with proper blocking, and slip-resistant tile are all
        common requests for aging-in-place bathrooms.
      </p>

      <div className="mt-8 rounded-lg border bg-muted p-6">
        <p className="text-sm font-semibold text-charcoal">The balanced approach, done for real</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          &ldquo;Our master bath went from builder-grade to spa-level. Heated floors, a soaking tub,
          marble-look porcelain everywhere. Done in 19 days, exactly as promised.&rdquo;
        </p>
        <p className="mt-2 text-xs font-medium text-muted-foreground">
          — Jennifer W., Grapevine, master bathroom remodel
        </p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Keeping a soaking tub in the master while upgrading a secondary bathroom to a walk-in shower is
          exactly the kind of balance that works well for both daily living and resale.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Once you've decided</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        See{" "}
        <Link href="/blog/tub-to-shower-conversion-cost" className="text-primary hover:underline">
          what a tub-to-shower conversion actually costs
        </Link>{" "}
        to plan your budget, or read our full{" "}
        <Link href="/blog/is-10000-enough-bathroom-remodel" className="text-primary hover:underline">
          $10,000 budget breakdown
        </Link>{" "}
        if you&apos;re working with a set number.
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Talk through your options with us</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We&apos;ll walk your bathroom, talk through what fits your household and your goals, and give you
          a free, line-item estimate either way. Explore our{" "}
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
