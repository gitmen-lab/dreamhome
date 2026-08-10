import Link from "next/link";
import { Phone, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function WhatToAvoidBathroomRemodel() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          The costliest bathroom remodel mistakes are invisible ones: skipped waterproofing, skipped
          permits, and a budget set before the scope is actually defined. Get those three right and most of
          the visible mistakes — wrong layout, wrong finish, wrong contractor — become much easier to avoid
          too.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        What not to do — the mistakes that cost the most to fix
      </h2>
      <ol className="mt-6 space-y-5">
        {[
          {
            title: "Skipping proper waterproofing behind the tile",
            body: "A shower membrane and cement backer board go on before a single tile — and you never see them again once the job's done. Skip them, or let a crew rush them, and the failure shows up as a leak or mold months later, usually behind a wall that now has to be torn back open.",
          },
          {
            title: "Not pulling permits for plumbing or electrical work",
            body: "Any work that touches plumbing or electrical needs a permit and inspection in most DFW cities. Skipping it doesn't just risk a fine — it can complicate a home sale later when the buyer's inspector finds unpermitted work.",
          },
          {
            title: "Setting a budget before the scope is defined",
            body: "Picking a number first and fitting the project to it backwards almost always means a mid-project surprise. Define what's actually changing — layout, plumbing, tile, fixtures — then price it.",
          },
          {
            title: "Hiring based on the lowest bid alone",
            body: "A bid well below the others is usually missing scope, not finding a discount — often the waterproofing or permit costs the others included and this one didn't.",
          },
          {
            title: "Choosing finishes before confirming they're available",
            body: "Falling in love with a specific tile or vanity before checking lead times can stall a project for weeks once demo has already started.",
          },
          {
            title: "Ignoring ventilation",
            body: "A bathroom without a properly sized exhaust fan traps moisture, which shortens the life of everything else you just paid to install.",
          },
        ].map((item, i) => (
          <li key={item.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-charcoal">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Mistakes that are about money, not construction</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Not every mistake is a construction defect. A few are just planning mistakes that cost you money
        without anyone doing anything wrong:
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "Under-budgeting for the tier of project you're actually doing — see our full bathroom remodel budget guide",
          "Spending on a finish you'll regret in a year instead of one that ages well",
          "Choosing a bathroom color purely on trend without thinking about resale",
          "Not asking what a bid does and doesn't include before comparing prices",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        For the money side specifically, see{" "}
        <Link href="/blog/bathroom-remodel-budget-guide" className="text-primary hover:underline">
          what a realistic bathroom remodel budget looks like
        </Link>{" "}
        before you set yours, whether you&apos;re working with{" "}
        <Link href="/blog/renovate-bathroom-for-5000" className="text-primary hover:underline">
          $5,000
        </Link>{" "}
        or{" "}
        <Link href="/blog/is-10000-enough-bathroom-remodel" className="text-primary hover:underline">
          $10,000
        </Link>
        .
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">How we avoid these on our own projects</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        This is the part of the process homeowners don&apos;t always see, so we build it into how every
        project runs: modern shower membranes and cement board behind every tile job, one project manager
        coordinating plumbing, electrical, and tile so nothing falls through the cracks, and a written
        line-item estimate with a realistic timeline before demo day. Most bathrooms are done in 2–3 weeks
        once work starts.
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Skip the guesswork on your remodel</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We&apos;ll walk your bathroom, tell you what the real scope involves, and hand you a free,
          line-item estimate before anything is torn out. Explore{" "}
          <Link href="/services/bathroom-remodeling" className="font-semibold underline">
            professional bathroom remodeling
          </Link>{" "}
          with us.
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
