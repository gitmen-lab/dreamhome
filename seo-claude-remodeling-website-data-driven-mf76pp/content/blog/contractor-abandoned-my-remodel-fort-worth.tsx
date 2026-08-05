import Link from "next/link";
import { Phone, ShieldCheck, Camera, FileText, Wrench, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { cities } from "@/data/cities";
import { telHref, cityLabel } from "@/lib/helpers";

export default function ContractorAbandonedMyRemodelFortWorth() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          Stop paying immediately, document everything before anyone touches the site, and get a written
          assessment of the unfinished work from a licensed contractor who accepts takeover jobs. In Fort
          Worth and the wider DFW Metroplex, {company.name} takes over abandoned kitchen, bathroom,
          flooring, drywall, and paint projects, inspects what was already installed, and gives you a free
          line-item estimate for what remains. Call{" "}
          <a href={telHref(company.phone)} className="font-semibold text-primary hover:underline">
            {company.phoneDisplay}
          </a>
          .
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          The order matters — homeowners who hire a replacement crew before documenting the site usually
          lose their leverage against the original contractor.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">The first 48 hours</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Half-finished bathrooms and kitchens don&apos;t stay stable. Open plumbing, an unsealed shower pan,
        or exposed drywall can turn a cosmetic problem into a water-damage claim within days. Move in this
        order.
      </p>
      <ol className="mt-6 space-y-5">
        {[
          {
            title: "Stop all payments",
            body: "Cancel any pending check, transfer, or scheduled draw. If you paid by credit card, call the issuer about a dispute today — most have a filing window that starts when the charge posts, not when the job stalls.",
          },
          {
            title: "Photograph everything before it's touched",
            body: "Wide shots of each room, then close-ups of every incomplete detail, with timestamps. This is the single most valuable thing you can do in the next hour.",
          },
          {
            title: "Send one written notice",
            body: "Text or email the contractor a short, factual message: the date work stopped, the amount paid, and a request that they return by a specific date. Keep it unemotional — it becomes evidence.",
          },
          {
            title: "Secure the site against damage",
            body: "Shut off water to the affected fixtures, cover open drains, and cap exposed wiring. If a shower is torn out and the pan is unsealed, don't use the space at all.",
          },
          {
            title: "Get an independent written assessment",
            body: "Have a licensed contractor walk the job and write down the condition of the existing work and the remaining scope before any new work begins. Without it, no one can tell later which defects were yours and which were theirs.",
          },
        ].map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-charcoal">{step.title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Free takeover assessment across DFW</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We walk the site, document what was installed, and hand you a written line-item estimate for the
          remaining work — no obligation. We respond to every request within one business day.
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

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        Is the job actually abandoned — or just slow?
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        The distinction matters, because acting too early can put you in breach of your own contract.
        Contractors do disappear for legitimate reasons: a permit hold, a material backorder, an injury on
        another site.
      </p>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 font-semibold text-charcoal">Signal</th>
              <th className="p-4 font-semibold text-charcoal">Probably delayed</th>
              <th className="p-4 font-semibold text-charcoal">Probably abandoned</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Communication", "Responds, gives dates, explains cause", "Stops answering calls and texts entirely"],
              ["Materials", "Supplies still on site, tools stored", "Tools and leftover material removed"],
              ["Money", "Payments match completed milestones", "Large deposit taken, little work done"],
              ["Subcontractors", "Subs confirm they're scheduled", "Subs say they were never paid"],
              ["Time", "Days without progress", "Weeks with no crew and no explanation"],
            ].map((row) => (
              <tr key={row[0]} className="border-t">
                {row.map((cell, i) => (
                  <td key={i} className={`p-4 ${i === 0 ? "font-medium text-charcoal" : "text-muted-foreground"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        If three or more of the right-hand column apply, treat it as abandonment and move on the steps
        above.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        What to document before the new crew arrives
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Assume you may need to prove all of this later, to a card issuer, a small-claims court, or an
        attorney. Collect it while it still exists.
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "The signed contract, plus every revision or change order",
          "Proof of every payment — cancelled checks, transfer receipts, card statements",
          "The full text and email thread, exported, not screenshotted piecemeal",
          "Dated photos and video of every unfinished area",
          "Any permit paperwork, and whether a permit was ever actually pulled",
          "Names and phone numbers of every subcontractor who worked on the job",
          "Receipts for materials you paid for that are now missing from the site",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        The Texas lien risk most homeowners miss
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Here&apos;s the part that catches people. In Texas, if your contractor took your money and never
        paid their subcontractors or material suppliers, those unpaid parties can generally file a
        mechanic&apos;s lien against your home — even though you already paid in full. Texas homestead law
        does provide some real protection for a primary residence (a lien typically can&apos;t attach
        without a written contract signed by both spouses), but the details are fact-specific, so don&apos;t
        assume you&apos;re automatically covered.
      </p>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        You may receive a notice letter from a tile supplier or a plumbing sub you never hired directly.
        Don&apos;t ignore it — deadlines in Texas lien law are short and unforgiving.
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "Call every subcontractor you can identify and ask directly whether they were paid",
          "Keep any notice letter you receive and note the date it arrived",
          "Ask your new contractor for a signed lien waiver from each sub and supplier at every payment",
          "If a notice or lien has already been filed, speak with a Texas construction attorney",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-lg border bg-muted p-4 text-sm text-muted-foreground">
        Nothing on this page is legal advice. We&apos;re remodelers, not attorneys, and lien deadlines and
        homestead protections depend on details specific to your contract and situation.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        How to hire a takeover contractor without repeating the mistake
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Most contractors quietly decline takeover work — they can&apos;t see what&apos;s behind the wall, so
        they can&apos;t stand behind it. The ones who do accept it should be able to answer all seven of
        these without hesitating.
      </p>
      <ol className="mt-6 space-y-4">
        {[
          ["“Will you put the condition of the existing work in writing before you start?”", "A yes protects both of you. A shrug means you'll be blamed for the last crew's defects."],
          ["“Which parts will you warranty, and which will you not?”", "The honest answer is never “all of it.” Expect them to name specific areas that must be opened up or torn out to be covered."],
          ["“Can your insurer email me the certificate directly?”", "Not a PDF forwarded by the contractor — direct from the insurance agency, current dates."],
          ["“Is the estimate line-item or lump sum?”", "Line-item. After an abandonment, a lump sum tells you nothing about what you're buying."],
          ["“What's the payment schedule?”", "Payments tied to completed milestones. A demand for most of the money up front is the exact pattern that just cost you."],
          ["“Will the same crew be here each day, and who's my point of contact?”", "One named project manager. Rotating crews are how details get lost twice."],
          ["“Will you provide lien waivers with each payment?”", "This closes the loop on the risk described above."],
        ].map(([q, a], i) => (
          <li key={q} className="rounded-lg border bg-card p-5">
            <p className="font-semibold text-charcoal">
              {i + 1}. {q}
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        What it costs to finish an abandoned remodel
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Expect completion to cost more than the remaining balance you owed the original contractor. For a
        typical DFW takeover job, labor alone (materials are separate and vary by project) runs roughly{" "}
        <strong className="text-charcoal">$2,500–$3,300</strong>. Three things drive that number up:
      </p>
      <ul className="mt-5 space-y-4">
        {[
          {
            icon: Wrench,
            title: "Corrective demolition",
            body: "Improperly waterproofed shower pans, out-of-level tile substrate, and undersized framing have to come out. This is the largest single line on most takeover bathroom estimates.",
          },
          {
            icon: FileText,
            title: "Missing materials",
            body: "Homeowners frequently find that cabinets, tile, or fixtures they already paid for were never ordered.",
          },
          {
            icon: Camera,
            title: "Assessment and sequencing",
            body: "Diagnosing someone else's half-built work takes real hours before a single tool comes out.",
          },
        ].map((item) => (
          <li key={item.title} className="flex gap-3 rounded-lg border bg-card p-5">
            <item.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-semibold text-charcoal">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">How our takeover process works</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        {company.name} is a licensed and insured Fort Worth contractor serving the DFW Metroplex since{" "}
        {company.foundedYear}. Takeover jobs run on a slightly different track than a normal remodel.
      </p>
      <ol className="mt-6 space-y-4">
        {[
          ["Documented walkthrough — free", "We photograph and write up the condition of every surface the previous crew touched, and give you a copy whether or not you hire us. That record is yours."],
          ["Line-item estimate for remaining scope", "Split into two sections: work that can be finished as-is, and work that must be redone. You see exactly which is which and what each costs."],
          ["Corrective work first, finishes second", "Waterproofing, framing, and rough-in get verified before anything decorative goes back on the wall."],
          ["Milestone payments and a workmanship warranty", "You pay as stages complete. Everything we build is covered by our workmanship warranty; work we didn't perform is documented as excluded, in writing, up front."],
        ].map(([title, body], i) => (
          <li key={title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-charcoal">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-lg border bg-muted p-6">
        <h3 className="font-semibold text-charcoal">Serving {cities.length} DFW communities</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {cities.map(cityLabel).join(" · ")}
        </p>
      </div>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Ready for a free, documented assessment?</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          Call {company.phoneDisplay} or request a free estimate — we respond within one business day.
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
