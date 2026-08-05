import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityCard } from "@/components/CityCard";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { cities } from "@/data/cities";
import { countyLabelEs } from "@/data/cities.es-mx";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: `Áreas de Servicio — ${cities.length} Ciudades de DFW | ${company.name}`,
  description: `${company.name} atiende ${cities.length} comunidades en todo el Metroplex de Dallas–Fort Worth, desde Fort Worth y Arlington hasta Denton y Southlake. Encuentre servicios de remodelación en su ciudad.`,
  path: "/es-mx/service-areas",
  locale: "es_MX",
  alternateLanguages: { "en-US": "/service-areas" },
});

const crumbs = [{ name: "Áreas de Servicio", path: "/es-mx/service-areas" }];

export default function ServiceAreasIndexPageEsMx() {
  const counties = Array.from(new Set(cities.map((c) => c.county)));

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} locale="es" />

      <section className="container section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            Ciudades que Atendemos en Todo DFW
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {company.name} lleva equipos de remodelación con licencia a {cities.length}{" "}
            comunidades en todo el Metroplex. Seleccione su ciudad para ver servicios
            locales, reseñas, y respuestas a preguntas comunes.
          </p>
        </div>

        <div className="mt-10">
          <ServiceAreaMap locale="es" />
          <p className="mt-3 text-sm text-muted-foreground">
            El contorno punteado es un límite de servicio aproximado — haga clic en
            cualquier marcador para más detalles, o revise la lista completa abajo para
            confirmar que cubrimos su ciudad.
          </p>
        </div>

        {counties.map((county) => (
          <div key={county} className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal">
              {countyLabelEs(county)}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cities
                .filter((c) => c.county === county)
                .map((city) => (
                  <CityCard key={city.slug} city={city} locale="es" />
                ))}
            </div>
          </div>
        ))}
      </section>

      <CTASection
        heading="¿No Ve su Ciudad?"
        body={`Atendemos todo ${company.serviceRadius} y regularmente tomamos proyectos en comunidades vecinas. Contáctenos — es probable que ya hayamos trabajado en su calle.`}
        buttonLabel="Solicitar Cotización Gratuita"
        locale="es"
      />
    </>
  );
}
