import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { CheckCircle2, Clock } from "lucide-react";
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { getServiceEsMx } from "@/data/services.es-mx";
import { getCityEsMx, countyLabelEs } from "@/data/cities.es-mx";
import { getGalleryByService } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";
import { company } from "@/data/company";

/**
 * One-off exception page, not part of a generated [service]/[city] route.
 * Only this exact combination is translated for now — see the note in
 * lib/es-mx/pageMap.ts if more combos get added later (that would need a
 * real dynamic route instead, to avoid a path collision with this folder).
 */
const service = getServiceEsMx("bathroom-remodeling")!;
const city = getCityEsMx("keller-tx")!;

export const metadata: Metadata = buildMetadata({
  title: `Remodelación de Baños en Keller, TX | ${company.name}`,
  description:
    "Remodelación de baños en Keller, TX — regaderas de entrada, azulejo e impermeabilización real. Licencia y seguro, cotización gratis. (817) 374-0962.",
  path: "/es-mx/services/bathroom-remodeling/keller-tx",
  image: service.image,
  locale: "es_MX",
  alternateLanguages: { "en-US": "/services/bathroom-remodeling/keller-tx" },
});

const faqs = [
  ...service.faqs,
  {
    question: "¿Tramitan los permisos de remodelación en Keller?",
    answer: `Sí. Cualquier trabajo que involucre cambios de plomería o electricidad requiere permiso, y tramitamos lo que Keller o ${countyLabelEs(city.county)} exija, incluyendo la programación de inspecciones.`,
  },
];

const bathroomGallery = getGalleryByService("bathroom-remodeling");

const kellerTestimonials = testimonials
  .filter((t) => t.serviceSlug === "bathroom-remodeling" && t.textEs)
  .map((t) => ({ ...t, text: t.textEs! }));

const crumbs = [
  { name: "Remodelación de Baños", path: "/es-mx/services/bathroom-remodeling" },
  { name: "Keller, TX", path: "/es-mx/services/bathroom-remodeling/keller-tx" },
];

export default function BathroomRemodelingKellerPageEsMx() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service, city),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} locale="es" />

      <Hero
        locale="es"
        compact
        eyebrow="Especialistas en Baños Sirviendo Keller, TX"
        title="Remodelación de Baños en Keller, TX"
        subtitle="Regaderas de entrada, tocadores, azulejo e impermeabilización real — remodelaciones de baño hechas bien y a tiempo para propietarios de Keller."
      />

      {/* Introduction */}
      <section className="container section-padding" aria-labelledby="overview-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="overview-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
            >
              Remodelación de Baños Profesional para Casas de Keller
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Keller se ubica constantemente entre los mejores lugares para vivir en Texas, con
              vecindarios establecidos de los años 90 y 2000 donde los baños principales — tinas
              profundas, azulejo anticuado, ventilación insuficiente — son los candidatos más
              comunes para una remodelación completa. Hemos trabajado en Keller y el{" "}
              {countyLabelEs(city.county)} durante más de 8 años, y sabemos qué buscan estos
              propietarios: una regadera de entrada sin bordes, un tocador doble con más
              almacenamiento, o un baño principal que se sienta como un spa.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Un baño involucra casi todos los oficios de construcción bajo un mismo techo —
              plomería, electricidad, azulejo, impermeabilización y carpintería. Coordinamos todo
              con un solo gerente de proyecto, así nada se pierde entre contratistas.
            </p>
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

      {/* Why choose us */}
      <section className="bg-muted" aria-labelledby="why-heading">
        <div className="container section-padding">
          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            Por Qué los Propietarios de Keller Eligen a {company.name}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: `Experiencia Local en Keller y ${countyLabelEs(city.county)}`,
                description: `Conocemos el tipo de vivienda de Keller — ${city.housingNote} — y el proceso de permisos de ${countyLabelEs(city.county)}, para que su proyecto avance sin demoras.`,
              },
              service.benefits[0],
              {
                title: "Un Equipo, Todos los Oficios",
                description:
                  "Plomería, electricidad, azulejo y carpintería coordinados por un solo gerente de proyecto para que nada se pierda.",
              },
              {
                title: "Precios Transparentes y Detallados",
                description:
                  "Cotización gratuita en el sitio, precios detallados — los propietarios de Keller siempre saben exactamente por qué están pagando.",
              },
            ].map((item) => (
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

      {/* Process */}
      <section className="container section-padding" aria-labelledby="process-heading">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Nuestro Proceso de Remodelación de Baños
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada proyecto en Keller sigue el mismo plan transparente y probado.
          </p>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {service.processSteps.map((step, i) => (
            <li key={step.title} className="relative rounded-lg border bg-card p-6">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Gallery */}
      {bathroomGallery.length > 0 && (
        <section className="bg-muted section-padding" aria-labelledby="gallery-heading">
          <div className="container">
            <h2
              id="gallery-heading"
              className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
            >
              Proyectos Reales de Baños
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Trabajo real de remodelación de baños en casas de todo DFW.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bathroomGallery.map((item) => (
                <figure key={item.id} className="overflow-hidden rounded-lg border bg-card shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4">
                    <p className="text-sm font-medium text-charcoal">{item.title}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {service.pricingTiers && (
        <section className="container section-padding" aria-labelledby="pricing-heading">
          <div className="max-w-3xl mx-auto">
            <h2
              id="pricing-heading"
              className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
            >
              ¿Cuánto Cuesta Remodelar un Baño en Keller?
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Cada proyecto recibe una cotización gratuita y detallada — estos son rangos típicos
              de DFW para planear.
            </p>
            <div className="mt-10 overflow-x-auto rounded-lg border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 font-semibold text-charcoal">Nivel</th>
                    <th className="p-4 font-semibold text-charcoal">Rango Típico</th>
                    <th className="p-4 font-semibold text-charcoal">Incluye</th>
                  </tr>
                </thead>
                <tbody>
                  {service.pricingTiers.map((tier) => (
                    <tr key={tier.tier} className="border-t">
                      <td className="p-4 font-medium text-charcoal">{tier.tier}</td>
                      <td className="p-4 whitespace-nowrap text-primary font-semibold">
                        {tier.range}
                      </td>
                      <td className="p-4 text-muted-foreground">{tier.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {kellerTestimonials.length > 0 && (
        <Testimonials
          items={kellerTestimonials}
          heading="Reseñas de Remodelación de Baños"
          subheading="Lo que dicen los propietarios de DFW sobre nuestro trabajo de baños."
        />
      )}

      <FAQAccordion
        faqs={faqs}
        heading="Remodelación de Baños en Keller — Preguntas Frecuentes"
        subheading={`Preguntas comunes sobre remodelación de baños en Keller — respondidas por ${company.name}.`}
      />

      <CTASection
        heading="Comience su Remodelación de Baño en Keller"
        body="Obtenga una cotización gratuita y sin compromiso en su casa en Keller. Precios transparentes, equipos con licencia, y garantía en cada proyecto."
        buttonLabel="Solicitar Cotización Gratuita"
        locale="es"
      />
    </>
  );
}
