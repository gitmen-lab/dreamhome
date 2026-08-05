import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { TrustBadges } from "@/components/TrustBadges";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { company } from "@/data/company";
import { companyEsMx } from "@/data/company.es-mx";
import { servicesEsMx } from "@/data/services.es-mx";
import { cities } from "@/data/cities";
import { testimonials } from "@/data/testimonials";
import { generalFaqsEsMx } from "@/data/faqs.es-mx";
import { galleryItems } from "@/data/gallery";
import { companyStat, cityLabel } from "@/lib/helpers";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: `Contratista de Remodelación de Casas en DFW | Cocinas, Baños y Más | ${company.name}`,
  description: `Remodelación de cocinas y baños, pintura, pisos, reparación de tablaroca y demolición en todo el Metroplex de DFW. Con licencia y seguro, cotizaciones gratuitas. Llame al ${company.phoneDisplay}.`,
  path: "/es-mx",
  locale: "es_MX",
  alternateLanguages: { "en-US": "/" },
});

const homeProcess = [
  {
    title: "Consulta Gratuita",
    description:
      "Visitamos su casa, escuchamos sus objetivos, y proporcionamos una cotización detallada por escrito — gratis y sin obligación.",
  },
  {
    title: "Diseño y Planificación",
    description:
      "Materiales, acabados y un calendario realista se acuerdan antes de comenzar el trabajo, para que no haya sorpresas.",
  },
  {
    title: "Construcción Experta",
    description:
      "Equipos con licencia construyen a código con limpieza diaria y un gerente de proyecto dedicado que lo mantiene informado.",
  },
  {
    title: "Recorrido Final",
    description:
      "Recorremos cada detalle con usted, completamos la lista de pendientes, y respaldamos el trabajo con nuestra garantía.",
  },
];

const galleryPreview = galleryItems.slice(0, 6);

const testimonialsEsMx = testimonials
  .filter((t) => t.textEs)
  .slice(0, 6)
  .map((t) => ({ ...t, text: t.textEs! }));

export default function HomePageEsMx() {
  return (
    <>
      <JsonLd data={[faqSchema(generalFaqsEsMx)]} />

      <Hero
        locale="es"
        eyebrow={`Calificación de ${companyStat("Average Rating")} por propietarios de DFW`}
        title={
          <>
            El Contratista de Remodelación{" "}
            <span className="text-primary">de Casas con Licencia</span> de Dallas–Fort Worth
          </>
        }
        subtitle={`Remodelación hecha bien, respaldada por resultados — ¿busca un contratista de remodelación cerca de mí? Desde cocinas y baños hasta pintura, pisos, tablaroca y demolición, ${company.name} ofrece mano de obra con licencia y garantía en ${cities.length} comunidades de DFW.`}
        backgroundImage={{
          src: "/images/dfw-home-remodel-exterior-dusk.jpg",
          alt: "Hermosa casa suburbana iluminada al atardecer",
        }}
        formSlot={<ContactForm locale="es" />}
      />

      <TrustBadges locale="es" />

      {/* Services */}
      <section className="container section-padding" aria-labelledby="services-heading">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Nuestros Servicios de Remodelación
          </h2>
          <p className="mt-4 text-muted-foreground">
            Seis servicios especializados, un equipo responsable. Cada proyecto incluye
            cotizaciones gratuitas, equipos con licencia, y nuestra garantía de mano de obra.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesEsMx.map((service) => (
            <ServiceCard key={service.slug} service={service} locale="es" />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-charcoal-dark text-white" aria-labelledby="why-heading">
        <div className="container section-padding">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
                Por Qué los Propietarios de DFW Eligen a {company.name}
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Desde {company.foundedYear}, hemos completado{" "}
                {companyStat("Projects Completed")} proyectos en todo el Metroplex. Nuestra
                promesa es simple: precios honestos, equipos capacitados, y casas tratadas con
                respeto.
              </p>
              <ul className="mt-8 space-y-4">
                {companyEsMx.guarantees.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-6 w-6 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-200">{g}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/about">Más Sobre Nuestro Equipo</Link>
              </Button>
            </div>
            <dl className="grid grid-cols-2 gap-6">
              {companyEsMx.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/5 p-8 text-center"
                >
                  <dd className="text-4xl font-bold text-blue-300">{stat.value}</dd>
                  <dt className="mt-2 text-sm text-gray-300">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ProcessSteps steps={homeProcess} heading="Cómo Trabajamos" />

      {/* Portfolio — inline grid, not the shared Gallery component: its per-photo
          link points at an English service+city page that doesn't exist here yet. */}
      <section className="container section-padding" aria-labelledby="gallery-heading">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="gallery-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Proyectos Recientes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un vistazo a la calidad de trabajo que ofrecemos en cada casa.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreview.map((item) => (
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
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {testimonialsEsMx.length > 0 && (
        <Testimonials
          items={testimonialsEsMx}
          heading="Lo Que Dicen Nuestros Clientes"
          subheading="Reseñas reales de proyectos reales en todo el Metroplex de DFW."
        />
      )}

      {/* Service areas — real city names, no links: the English city-hub pages
          aren't translated yet, so we don't link to them from a Spanish page. */}
      <section className="container section-padding" aria-labelledby="areas-heading">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="areas-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Sirviendo con Orgullo {cities.length} Comunidades de DFW
          </h2>
          <p className="mt-4 text-muted-foreground">
            Desde Fort Worth hasta Denton, Arlington hasta Southlake — nuestros equipos son
            locales del Metroplex y conocen bien sus casas.
          </p>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {cities.map(cityLabel).join(" · ")}
        </p>
      </section>

      <FAQAccordion
        faqs={generalFaqsEsMx}
        heading="Preguntas Frecuentes"
        subheading="Respuestas directas a las preguntas que más nos hacen los propietarios."
      />
    </>
  );
}
