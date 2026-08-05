import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ServiceLinks } from "@/components/ServiceLinks";
import { JsonLd } from "@/components/JsonLd";
import { Clock } from "lucide-react";
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema, howToSchema } from "@/lib/seo";
import { servicesEsMx, getServiceEsMx } from "@/data/services.es-mx";
import { getTestimonialsByService } from "@/data/testimonials";
import { getGalleryByService } from "@/data/gallery";
import { company } from "@/data/company";

interface Params {
  service: string;
}

export function generateStaticParams(): Params[] {
  return servicesEsMx.map((service) => ({ service: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceEsMx(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} en Dallas–Fort Worth | ${company.name}`,
    description: `${service.shortDescription} Cotizaciones gratuitas en todo el Metroplex de DFW. Con licencia y seguro. Llame al ${company.phoneDisplay}.`,
    path: `/es-mx/services/${service.slug}`,
    image: service.image,
    locale: "es_MX",
    alternateLanguages: { "en-US": `/services/${service.slug}` },
  });
}

export default async function ServicePageEsMx({ params }: { params: Promise<Params> }) {
  const { service: slug } = await params;
  const service = getServiceEsMx(slug);
  if (!service) notFound();

  const serviceTestimonials = getTestimonialsByService(service.slug)
    .filter((t) => t.textEs)
    .map((t) => ({ ...t, text: t.textEs! }));
  const serviceGallery = getGalleryByService(service.slug);

  const crumbs = [
    { name: "Servicios", path: "/es-mx" },
    { name: service.name, path: `/es-mx/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          howToSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} locale="es" />

      <Hero locale="es" compact eyebrow={`Expertos de Confianza en ${service.shortName} en DFW`} title={service.name} subtitle={service.shortDescription} />

      {/* Overview */}
      <section className="container section-padding" aria-labelledby="overview-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="overview-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
            >
              {service.name} Profesional en Todo el Metroplex
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="accent">
                <Clock className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Duración típica: {service.duration}
              </Badge>
              <Badge variant="accent">Cotizaciones gratuitas en el sitio</Badge>
              <Badge variant="accent">Garantía de mano de obra</Badge>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted" aria-labelledby="benefits-heading">
        <div className="container section-padding">
          <h2
            id="benefits-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            Por Qué Elegirnos para {service.name}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4 rounded-lg border bg-card p-6">
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
        heading={`Nuestro Proceso de ${service.shortName}`}
        subheading="Cada proyecto sigue el mismo plan transparente y probado."
      />

      {/* Gallery omitted here on purpose: the shared component's per-photo
          link points at an English service+city page not translated yet. */}
      {serviceGallery.length > 0 && (
        <section className="container section-padding" aria-labelledby="gallery-heading">
          <h2
            id="gallery-heading"
            className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Proyectos Recientes de {service.shortName}
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            Trabajo real de {service.name.toLowerCase()} en casas de todo DFW.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGallery.map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-lg border bg-card shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {serviceTestimonials.length > 0 && (
        <Testimonials
          items={serviceTestimonials}
          heading={`Reseñas de ${service.shortName}`}
          subheading={`Lo que dicen los propietarios sobre nuestro trabajo de ${service.name.toLowerCase()}.`}
        />
      )}

      <FAQAccordion
        faqs={service.faqs}
        heading={`Preguntas Frecuentes de ${service.name}`}
        subheading={`Preguntas comunes sobre ${service.name.toLowerCase()} — respondidas por ${company.name}.`}
      />

      {/* Related services — CityLinks omitted here on purpose: the 120
          service x city combo pages aren't translated yet. */}
      <section className="bg-muted">
        <div className="container section-padding">
          <ServiceLinks
            services={servicesEsMx.filter((s) => s.slug !== service.slug).slice(0, 3)}
            heading="Servicios Relacionados"
            locale="es"
          />
        </div>
      </section>

      <CTASection
        heading={`Reciba su Cotización Gratuita de ${service.shortName}`}
        body="Cuéntenos sobre su proyecto y programaremos una visita gratuita a su casa en cualquier lugar del Metroplex de DFW. Precios transparentes, sin presión."
        buttonLabel="Solicitar Cotización Gratuita"
        locale="es"
      />
    </>
  );
}
