import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export const metadata: Metadata = buildMetadata({
  title: `Gracias | ${company.name}`,
  description: "Su solicitud de cotización gratuita ha sido recibida.",
  path: "/es-mx/gracias",
  locale: "es_MX",
  noindex: true,
});

export default function GraciasPage() {
  return (
    <section className="container section-padding">
      <div className="mx-auto max-w-lg text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" aria-hidden="true" />
        <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
          ¡Solicitud Recibida!
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Gracias por contactarnos. Un miembro de nuestro equipo se comunicará con usted
          dentro de un día hábil para programar su cotización gratuita.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/es-mx">Volver al Inicio</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={telHref(company.phone)}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Llame al {company.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
