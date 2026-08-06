import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Star, ShieldCheck, BadgeCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceSchema, faqSchema } from "@/lib/seo";
import { company } from "@/data/company";
import { getService } from "@/data/services";
import { telHref, companyStat } from "@/lib/helpers";

const service = getService("bathroom-remodeling")!;

export const metadata: Metadata = buildMetadata({
  title: "Conversión de Tina a Regadera | 50% de Descuento - My Dream Home Remodeling",
  description:
    "Convierta su tina en una regadera de entrada con 50% de descuento este mes. Contratista con licencia en DFW, cotización gratuita a domicilio, la mayoría de las conversiones se completan en menos de 2 semanas.",
  path: "/conversion-de-tina-a-regadera",
  image: "/images/gallery/bathroom-remodel-after-tile-walk-in-shower.jpg",
  locale: "es_MX",
});

const faqs = [
  {
    question: "¿Cuánto cuesta una conversión de tina a regadera?",
    answer:
      "La mayoría de las conversiones de tina a regadera están en nuestro rango de remodelación cosmética a estándar, aproximadamente $2,500–$30,000 dependiendo del azulejo, el vidrio, y si se necesitan cambios de distribución. Recibirá una cotización gratuita y detallada antes de comenzar cualquier trabajo.",
  },
  {
    question: "¿Cuánto tiempo toma una conversión de tina a regadera?",
    answer:
      "Las conversiones de tina a regadera a menudo se completan en menos de dos semanas — más rápido que una remodelación completa de baño, ya que la ubicación de la plomería normalmente no cambia.",
  },
  {
    question: "¿Están licenciados y asegurados?",
    answer: `Sí. ${company.name} está completamente licenciado y asegurado en el Estado de Texas, y todo el trabajo de plomería y electricidad es realizado por profesionales licenciados e inspeccionado según el código local.`,
  },
  {
    question: "¿Cobran por la cotización?",
    answer:
      "Nunca. Cada conversión comienza con una consulta gratuita a domicilio, sin compromiso, y una cotización por escrito, para que sepa el costo exacto antes de comprometerse.",
  },
];

export default function ConversionDeTinaARegaderaPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(service), faqSchema(faqs)]} />

      {/* Encabezado mínimo -- solo logo, centrado, sin navegación del sitio */}
      <header className="border-b bg-white">
        <div className="container flex items-center justify-center py-2.5">
          <Link href="/es-mx" aria-label={`${company.name} inicio`}>
            <Image
              src="/images/mydreamhome-logo.png"
              alt={`Logo de ${company.name}`}
              width={600}
              height={121}
              className="h-9 w-auto rounded-md border shadow-sm sm:h-10"
              style={{ aspectRatio: "600 / 121" }}
              priority
            />
          </Link>
        </div>
      </header>

      {/* Hero + formulario */}
      <section className="relative overflow-hidden bg-charcoal-dark text-white py-14 md:py-20">
        <Image
          src="/images/gallery/bathroom-remodel-walk-in-shower-tile-installation.jpg"
          alt="Regadera de entrada con azulejo tipo mármol y pared de acento de madera"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal-dark/85 to-charcoal-dark/50"
          aria-hidden="true"
        />
        <div className="container relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium">
              Solo Este Mes
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Ahorre 50% en su Conversión de Tina a Regadera
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Cambie su tina estrecha por una regadera de entrada — instalada en tan
              solo 2 semanas, con una cotización gratuita a domicilio y sin
              compromiso.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                Con Licencia y Seguro
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                Garantía de Mano de Obra
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                {companyStat("Average Rating")} Calificación Promedio
              </li>
            </ul>
          </div>
          <div className="order-first rounded-lg border border-white/10 bg-white p-6 shadow-xl md:p-8 lg:order-none">
            <h2 className="text-xl font-semibold text-charcoal">
              Reclame su Cotización con 50% de Descuento
            </h2>
            <p className="mt-1 mb-6 text-sm text-muted-foreground">
              Respondemos a cada solicitud dentro de un día hábil.
            </p>
            <ContactForm locale="es" />
            <p className="mt-4 text-center text-xs text-muted-foreground">
              *Se requiere cotización gratuita a domicilio. Pregunte por los
              términos completos.
            </p>
          </div>
        </div>
      </section>

      {/* Barra de confianza */}
      <section className="border-b bg-white py-8">
        <ul className="container grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
          <li>
            <p className="text-3xl font-bold text-primary">
              {companyStat("Average Rating")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Calificación Promedio</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-primary">
              {companyStat("Years in Business")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Años en DFW</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-primary">&lt;2 sem.</p>
            <p className="mt-1 text-sm text-muted-foreground">Conversión Típica</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-primary">Gratis</p>
            <p className="mt-1 text-sm text-muted-foreground">Cotización a Domicilio</p>
          </li>
        </ul>
      </section>

      {/* Antes / después */}
      <section className="bg-muted py-14 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Conversión Real, Resultados Reales
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Una conversión real de tina a regadera de uno de nuestros proyectos en
            DFW — no es una foto de stock.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
              <Image
                src="/images/gallery/bathroom-remodel-before-outdated-tub-shower.jpg"
                alt="Baño anticuado con paredes verdes y una combinación de tina y regadera antigua antes de la conversión"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded bg-charcoal-dark/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Antes
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
              <Image
                src="/images/gallery/bathroom-remodel-after-tile-walk-in-shower.jpg"
                alt="Regadera de entrada terminada con azulejo blanco tipo metro después de la conversión"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Después
              </span>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <a href="#cotizacion">Obtener mi Cotización Gratuita</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-14 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Lo Que Dicen Nuestros Clientes en DFW
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-lg border bg-card p-6">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                &ldquo;Convirtieron nuestra tina estrecha en una hermosa regadera de
                entrada con vidrio sin marco. El trabajo de azulejo es impecable —
                nuestros amigos creen que gastamos el doble de lo que gastamos.
                Equipo limpio, precios honestos.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-charcoal">
                James R. — Fort Worth, TX
              </p>
              <p className="text-xs text-muted-foreground">Conversión de tina a regadera</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                &ldquo;Nuestro baño principal pasó de nivel constructor a nivel spa.
                Pisos con calefacción, una tina de inmersión, porcelanato con
                apariencia de mármol por todas partes. Terminado en 19 días,
                exactamente como prometieron.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-charcoal">
                Jennifer W. — Grapevine, TX
              </p>
              <p className="text-xs text-muted-foreground">Remodelación de baño principal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="bg-muted py-14 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Conversión de Tina a Regadera — Preguntas Frecuentes
          </h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border bg-card p-6">
                <dt className="font-semibold text-charcoal">{faq.question}</dt>
                <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA final */}
      <section id="cotizacion" className="bg-primary py-14 md:py-20 text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            ¿Listo para Ahorrar 50% en su Conversión?
          </h2>
          <p className="mt-4 text-lg text-blue-100 leading-relaxed">
            Esta oferta está disponible por tiempo limitado este mes. Obtenga su
            cotización gratuita antes de que se acabe.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="white" asChild>
              <a href="#top">Obtener mi Cotización Gratuita</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href={telHref(company.phone)}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Llame al {company.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pie de página mínimo */}
      <footer className="bg-charcoal-dark py-8 text-xs text-gray-400">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Todos los derechos
            reservados. ·{" "}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </p>
          <p className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Con Licencia y Seguro en Texas
          </p>
        </div>
      </footer>
    </>
  );
}
