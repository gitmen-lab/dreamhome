import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { companyEsMx } from "@/data/company.es-mx";
import { servicesEsMx } from "@/data/services.es-mx";
import { telHref } from "@/lib/helpers";

/**
 * Spanish footer for the /es-mx pilot -- dedicated component (not a locale
 * prop on the real Footer) so it's only ever rendered by app/es-mx/layout.tsx.
 * Real NAP data (phone/address/hours) comes straight from data/company.ts;
 * only the display strings come from data/company.es-mx.ts.
 */
export function FooterEs() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-gray-300">
      <div className="container section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/es-mx" aria-label={`${company.name} inicio`}>
              <Image
                src={company.logo}
                alt={`Logotipo de ${company.name}`}
                width={600}
                height={121}
                className="h-10 w-auto"
                style={{ aspectRatio: "600 / 121" }}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{companyEsMx.tagline}</p>
            <p className="mt-4 text-sm">{companyEsMx.license}</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={telHref(company.phone)}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" aria-hidden="true" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </span>
              </li>
            </ul>
          </div>

          <nav aria-label="Servicios en el pie de página">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {servicesEsMx.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/es-mx/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Enlaces de la empresa">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/es-mx/service-areas" className="hover:text-white transition-colors">
                  Áreas de Servicio
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Sitio en Inglés
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contacto y Cotizaciones Gratis
                </Link>
              </li>
            </ul>
            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
              Horario
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm">
              {company.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="text-gray-400">{h.hours}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {year} {company.legalName}. Todos los derechos reservados.</p>
          <p>{companyEsMx.license}</p>
        </div>
      </div>
    </footer>
  );
}
