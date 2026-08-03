import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: `Privacy Policy | ${company.name}`,
  description: `How ${company.name} collects, uses, and protects information submitted through our website.`,
  path: "/privacy-policy",
});

const crumbs = [{ name: "Privacy Policy", path: "/privacy-policy" }];

const lastUpdated = "August 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="container section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

          <div className="mt-10 space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-charcoal">Information We Collect</h2>
              <p className="mt-3">
                When you request a free estimate through our contact form, we collect the
                information you provide: your name, phone number, email address, city,
                the service you&apos;re interested in, and any project details you share
                with us. We don&apos;t require any information beyond what&apos;s needed
                to respond to your request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-charcoal">How We Use It</h2>
              <p className="mt-3">
                We use the information you submit solely to respond to your estimate
                request, schedule a consultation, and communicate with you about your
                project. We do not sell your information to third parties, and we do not
                use it for unrelated marketing without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-charcoal">Who We Share It With</h2>
              <p className="mt-3">
                We may share your information with service providers who help us operate
                our business — for example, email or scheduling tools we use to manage
                estimate requests. These providers are only permitted to use your
                information to help us provide our services to you, not for their own
                purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-charcoal">Cookies &amp; Analytics</h2>
              <p className="mt-3">
                Our website may use basic analytics tools to understand how visitors use
                our site (for example, which pages are viewed most often) so we can
                improve it. These tools do not collect the contact information you submit
                through our estimate form separately from that form itself.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-charcoal">Your Choices</h2>
              <p className="mt-3">
                You can ask us to access, correct, or delete the personal information
                we hold about you at any time by contacting us at{" "}
                <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                  {company.email}
                </a>{" "}
                or {company.phoneDisplay}. We&apos;ll respond to your request within a
                reasonable time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-charcoal">Contact Us</h2>
              <p className="mt-3">
                Questions about this policy or how we handle your information? Reach us
                at{" "}
                <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                  {company.email}
                </a>{" "}
                or {company.phoneDisplay}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
