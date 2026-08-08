import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ServiceLinks } from "@/components/ServiceLinks";
import { CityLinks } from "@/components/CityLinks";
import { JsonLd } from "@/components/JsonLd";
import {
  CheckCircle2,
  MapPin,
  Clock,
  Phone,
  FileText,
  Home as HomeIcon,
  ShieldCheck,
  CloudRain,
  Quote,
} from "lucide-react";
import {
  serviceCityMetadata,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  howToSchema,
} from "@/lib/seo";
import { services, getService } from "@/data/services";
import { cities, getCity } from "@/data/cities";
import {
  generateServiceIntro,
  generateFAQs,
  generateCTA,
  generateAreasWeServe,
  getLocalFacts,
  getServiceCityDepthContent,
  type LocalFact,
} from "@/lib/content";
import {
  getRelatedServices,
  getNearbyCities,
  getCityProjectReference,
  cityLabel,
  telHref,
} from "@/lib/helpers";
import { getTestimonialsByService, getTestimonialsByCity } from "@/data/testimonials";
import { company } from "@/data/company";

const LOCAL_FACT_ICONS: Record<string, typeof FileText> = {
  Permits: FileText,
  "Typical build era": HomeIcon,
  "HOA considerations": ShieldCheck,
  "Climate & soil": CloudRain,
};

interface Params {
  service: string;
  city: string;
}

/** Pre-render every service × city combination (6 × 20 = 120 pages). */
export function generateStaticParams(): Params[] {
  return services.flatMap((service) =>
    cities.map((city) => ({ service: service.slug, city: city.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);
  if (!service || !city) return {};
  return serviceCityMetadata(service, city);
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);
  if (!service || !city) notFound();

  const intro = generateServiceIntro(service, city);
  const faqs = generateFAQs(service, city);
  const cta = generateCTA(service, city);
  const relatedServices = getRelatedServices(service.slug, 5);
  const nearbyCities = getNearbyCities(city.slug);
  const localFacts = getLocalFacts(city);
  const featuredProject = getCityProjectReference(city.slug, service.slug);
  const depthSections = getServiceCityDepthContent(service, city);

  // Prefer testimonials matching this city+service, then this service, then this city.
  const cityServiceTestimonials = getTestimonialsByCity(city.slug).filter(
    (t) => t.serviceSlug === service.slug
  );
  const testimonialPool =
    cityServiceTestimonials.length > 0
      ? cityServiceTestimonials
      : [...getTestimonialsByService(service.slug), ...getTestimonialsByCity(city.slug)];
  const pageTestimonials = testimonialPool
    // Drop the one already shown as the featured project above, so it isn't repeated.
    .filter((t) => t !== featuredProject)
    .filter((t, i, arr) => arr.indexOf(t) === i)
    .slice(0, 3);

  const crumbs = [
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
    { name: cityLabel(city), path: `/services/${service.slug}/${city.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service, city),
          howToSchema(service, city),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Hero
        compact
        eyebrow={`Serving ${cityLabel(city)} & all of ${city.county}`}
        title={
          <>
            {service.name} in{" "}
            <span className="text-primary">{cityLabel(city)}</span>
          </>
        }
        subtitle={`Licensed, insured ${service.name.toLowerCase()} for ${city.city} homeowners — free on-site estimates and a workmanship warranty on every project.`}
      />

      {/* Local intro */}
      <section className="container section-padding" aria-labelledby="local-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="local-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
            >
              {city.city}&apos;s Trusted {service.shortName} Team
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="accent">
                <MapPin className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                {city.county}
              </Badge>
              <Badge variant="accent">
                <Clock className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Typical timeline: {service.duration}
              </Badge>
              <Badge variant="accent">Zip codes: {city.zipCodes.slice(0, 3).join(", ")}{city.zipCodes.length > 3 ? " +" : ""}</Badge>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Also looking for something else in {city.city}?{" "}
              <Link
                href={`/service-areas/${city.slug}`}
                className="font-semibold text-primary hover:underline"
              >
                See all services in {cityLabel(city)}
              </Link>{" "}
              or learn more about{" "}
              <Link
                href={`/services/${service.slug}`}
                className="font-semibold text-primary hover:underline"
              >
                our {service.name.toLowerCase()} service
              </Link>
              .
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
            <Image
              src={service.image}
              alt={`${service.name} services in ${cityLabel(city)}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Local facts -- real, verified per-city data only; renders nothing until data/cities.ts has real values (see TODOs there). */}
      {localFacts.length > 0 && (
        <section className="container section-padding" aria-labelledby="local-facts-heading">
          <h2
            id="local-facts-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            What to Know Before You Remodel in {city.city}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {localFacts.map((fact: LocalFact) => {
              const Icon = LOCAL_FACT_ICONS[fact.label] ?? FileText;
              return (
                <div key={fact.label} className="flex gap-4 rounded-lg border bg-card p-6">
                  <Icon className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-charcoal">{fact.label}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {fact.value}
                    </p>
                    {fact.url && (
                      <a
                        href={fact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-block text-sm font-semibold text-primary hover:underline"
                      >
                        View permit portal
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Featured local project -- a real testimonial tied to this exact city, used as proof instead of generic copy. Absent (not fabricated) for cities with no testimonial yet. */}
      {featuredProject && (
        <section className="container section-padding" aria-labelledby="featured-project-heading">
          <h2
            id="featured-project-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            A Recent {city.city} Project
          </h2>
          <Card className="mt-8">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
              <Quote className="h-8 w-8 text-primary/20 shrink-0" aria-hidden="true" />
              <div>
                <blockquote className="text-charcoal leading-relaxed">
                  &ldquo;{featuredProject.text}&rdquo;
                </blockquote>
                <footer className="mt-3">
                  <p className="text-sm font-semibold text-charcoal">{featuredProject.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {featuredProject.project} · {cityLabel(city)}
                  </p>
                </footer>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Real neighborhoods/zips/landmarks from the city's own data, plus a link to the full city hub. */}
      <section className="bg-muted" aria-labelledby="areas-heading">
        <div className="container section-padding">
          <h2
            id="areas-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Areas We Serve in {city.city}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">
            {generateAreasWeServe(city)}
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-3xl">
            See every service we offer in {city.city} on our{" "}
            <Link
              href={`/service-areas/${city.slug}`}
              className="font-semibold text-primary hover:underline"
            >
              {cityLabel(city)} service area page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Depth content -- hand-written per (service, city) combo, see data/serviceCityContent.ts. Renders nothing for the other 119 pages. */}
      {depthSections.length > 0 && (
        <section className="container section-padding" aria-labelledby="depth-heading">
          <h2
            id="depth-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            {service.name} in {city.city}: The Details
          </h2>
          <div className="mt-8 space-y-10 max-w-3xl">
            {depthSections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-xl font-semibold text-charcoal">{section.heading}</h3>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Shared boilerplate below this point -- identical across every city for this service. */}

      {service.subServices && service.subServices.length > 0 && (
        <section className="container section-padding" aria-labelledby="subservices-heading">
          <h2
            id="subservices-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            Our {city.city} {service.name} Services
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub) => (
              <div key={sub} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold text-charcoal">{sub}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Benefits localized */}
      <section className="bg-muted" aria-labelledby="benefits-heading">
        <div className="container section-padding">
          <h2
            id="benefits-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            Why {city.city} Homeowners Choose {company.name}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4 rounded-lg border bg-card p-6">
                <CheckCircle2
                  className="h-6 w-6 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-charcoal">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        steps={service.processSteps}
        heading={`How ${service.shortName} Projects Work in ${city.city}`}
        subheading={`The same proven process behind every ${company.name} project in ${city.county}.`}
      />

      {service.pricingTiers && service.pricingTiers.length > 0 && (
        <section className="container section-padding" aria-labelledby="pricing-heading">
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            {service.name} Cost in {city.city} (2026 Pricing)
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            DFW-area cost per square foot for {service.name.toLowerCase()} typically runs
            $70–$250 (up to $500+ for luxury materials). Final price depends on scope, size,
            and materials — every {city.city} project starts with a free, written in-home
            quote.
          </p>
          <div className="mt-10 overflow-x-auto rounded-lg border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold text-charcoal">Tier</th>
                  <th className="px-4 py-3 font-semibold text-charcoal">
                    Typical {city.city} range (2026)
                  </th>
                  <th className="px-4 py-3 font-semibold text-charcoal">What&apos;s included</th>
                </tr>
              </thead>
              <tbody>
                {service.pricingTiers.map((tier) => (
                  <tr key={tier.tier} className="border-t">
                    <td className="px-4 py-3 font-medium text-charcoal">{tier.tier}</td>
                    <td className="px-4 py-3 text-primary font-semibold">{tier.range}</td>
                    <td className="px-4 py-3 text-muted-foreground">{tier.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get Your Free {city.city} Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={telHref(company.phone)}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {company.phoneDisplay}
              </a>
            </Button>
          </div>
        </section>
      )}

      {pageTestimonials.length > 0 && (
        <Testimonials
          items={pageTestimonials}
          heading="Reviews From Nearby Homeowners"
          subheading={`Recent feedback from ${service.name.toLowerCase()} and ${city.city}-area projects.`}
        />
      )}

      <FAQAccordion
        faqs={faqs}
        heading={`${service.name} in ${cityLabel(city)} — FAQs`}
        subheading={`Answers for ${city.city} homeowners planning a ${service.shortName.toLowerCase()} project.`}
      />

      {/* Internal links */}
      <section className="bg-muted">
        <div className="container section-padding space-y-14">
          <ServiceLinks
            services={relatedServices}
            city={city}
            heading={`More Services in ${cityLabel(city)}`}
          />
          {nearbyCities.length > 0 && (
            <CityLinks
              cities={nearbyCities}
              service={service}
              heading={`${service.name} Near ${city.city}`}
            />
          )}
        </div>
      </section>

      <CTASection heading={cta.heading} body={cta.body} buttonLabel={cta.buttonLabel} />
    </>
  );
}
