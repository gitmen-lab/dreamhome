import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocationMap } from "@/components/LocationMap";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { CityLinks } from "@/components/CityLinks";
import { JsonLd } from "@/components/JsonLd";
import { CheckCircle2, MapPin } from "lucide-react";
import { cityMetadataEsMx, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { servicesEsMx } from "@/data/services.es-mx";
import { citiesEsMx, getCityEsMx, countyLabelEs } from "@/data/cities.es-mx";
import {
  generateCityIntroEs,
  generateWhyChooseUsEs,
  generateCityFaqsEs,
  generateAreasWeServeEs,
} from "@/lib/content.es-mx";
import { getNearbyCities, cityLabel } from "@/lib/helpers";
import { getTestimonialsByCity, testimonials } from "@/data/testimonials";
import { company } from "@/data/company";

interface Params {
  city: string;
}

export function generateStaticParams(): Params[] {
  return citiesEsMx.map((city) => ({ city: city.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityEsMx(slug);
  if (!city) return {};
  return cityMetadataEsMx(city);
}

export default async function CityPageEsMx({ params }: { params: Promise<Params> }) {
  const { city: slug } = await params;
  const city = getCityEsMx(slug);
  if (!city) notFound();

  const intro = generateCityIntroEs(city);
  const whyChooseUs = generateWhyChooseUsEs(city);
  // Nearby cities: resolve real slugs via the English data (nearbyCities is
  // identical), then map to the translated City objects for display.
  const nearbyCities = getNearbyCities(city.slug)
    .map((c) => getCityEsMx(c.slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const cityTestimonials = getTestimonialsByCity(city.slug)
    .filter((t) => t.textEs)
    .map((t) => ({ ...t, text: t.textEs! }));
  const fallbackTestimonials = testimonials
    .filter((t) => t.textEs)
    .slice(0, 3)
    .map((t) => ({ ...t, text: t.textEs! }));
  const pageTestimonials = cityTestimonials.length > 0 ? cityTestimonials : fallbackTestimonials;

  const localFaqs = generateCityFaqsEs(city);

  const crumbs = [
    { name: "Áreas de Servicio", path: "/es-mx/service-areas" },
    { name: cityLabel(city), path: `/es-mx/service-areas/${city.slug}` },
  ];

  return (
    <>
      <JsonLd data={[faqSchema(localFaqs), breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} locale="es" />

      <Hero
        locale="es"
        compact
        eyebrow={`Equipos locales sirviendo a ${countyLabelEs(city.county)}`}
        title={
          <>
            Remodelación de Casas en{" "}
            <span className="text-primary">{cityLabel(city)}</span>
          </>
        }
        subtitle={`Cocinas, baños, pintura, pisos, tablaroca y demolición para los propietarios de ${city.city} — con licencia, seguro, y respaldados por una garantía de mano de obra.`}
      />

      {/* Local introduction */}
      <section className="container section-padding" aria-labelledby="intro-heading">
        <div className="max-w-3xl">
          <h2
            id="intro-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Sus Vecinos en {city.city} Ya Nos Conocen
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">{intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge variant="accent">
              <MapPin className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
              {countyLabelEs(city.county)}
            </Badge>
            <Badge variant="accent">Población {city.population}</Badge>
            <Badge variant="accent">
              Códigos postales: {city.zipCodes.slice(0, 4).join(", ")}
              {city.zipCodes.length > 4 ? " +" : ""}
            </Badge>
          </div>
        </div>
      </section>

      {/* Areas we serve + map (Fort Worth is home base, so it gets the embedded map) */}
      <section className="container section-padding" aria-labelledby="areas-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2
              id="areas-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
            >
              Áreas que Atendemos en {city.city}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {generateAreasWeServeEs(city)}
            </p>
          </div>
          {city.slug === "fort-worth-tx" && <LocationMap locale="es" />}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted" aria-labelledby="why-heading">
        <div className="container section-padding">
          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            Por Qué los Propietarios de {city.city} Eligen a {company.name}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border bg-card p-6">
                <CheckCircle2
                  className="h-6 w-6 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services available in this city — links to the general Spanish
          service page, not a service+city combo (those 120 pages aren't
          translated yet). */}
      <section className="container section-padding" aria-labelledby="services-heading">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Servicios de Remodelación en {cityLabel(city)}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada servicio a continuación está disponible para los propietarios de{" "}
            {city.city} con cotizaciones gratuitas y equipos locales.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesEsMx.map((service) => (
            <ServiceCard key={service.slug} service={service} locale="es" />
          ))}
        </div>
      </section>

      {pageTestimonials.length > 0 && (
        <Testimonials
          items={pageTestimonials.slice(0, 3)}
          heading={
            cityTestimonials.length > 0
              ? `Reseñas de Propietarios de ${city.city}`
              : "Reseñas de Propietarios de DFW"
          }
        />
      )}

      <FAQAccordion faqs={localFaqs} heading={`Remodelación en ${city.city} — Preguntas Frecuentes`} />

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="bg-muted">
          <div className="container section-padding">
            <CityLinks
              cities={nearbyCities}
              heading={`También Atendemos Comunidades Cerca de ${city.city}`}
              locale="es"
            />
            <p className="mt-6 text-sm text-muted-foreground">
              Vea la lista completa en nuestra{" "}
              <Link
                href="/es-mx/service-areas"
                className="font-semibold text-primary hover:underline"
              >
                página de áreas de servicio
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      <CTASection
        heading={`Comience su Proyecto en ${city.city} Hoy`}
        body={`Obtenga una cotización gratuita y sin compromiso en su casa en ${city.city}. Precios transparentes, equipos con licencia, y garantía en cada proyecto.`}
        buttonLabel="Solicitar Cotización Gratuita"
        locale="es"
      />
    </>
  );
}
