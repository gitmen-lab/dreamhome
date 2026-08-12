import type { Metadata } from "next";
import Script from "next/script";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export const metadata: Metadata = buildMetadata({
  title: `Schedule a Free Consultation | ${company.name}`,
  description: `Pick a time online for a free bathroom, kitchen, or remodeling consultation with ${company.name}. No obligation — we respond within one business day.`,
  path: "/schedule",
});

const crumbs = [{ name: "Schedule", path: "/schedule" }];

export default function SchedulePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="container section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            Schedule Your Free Consultation
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Pick a day and time that works for you. We&apos;ll walk your project, answer your
            questions, and give you a free, no-obligation estimate — no phone tag required.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-lg border bg-card p-4 shadow-sm md:p-6">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/mydreamhomeremodeling/30min"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
          Prefer to talk it through first? Call or text{" "}
          <a href={telHref(company.phone)} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phoneDisplay}
          </a>
          .
        </p>
      </section>
    </>
  );
}
