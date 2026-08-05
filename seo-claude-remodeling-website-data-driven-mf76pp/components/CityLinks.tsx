import Link from "next/link";
import { MapPin } from "lucide-react";
import type { City } from "@/data/cities";
import type { Service } from "@/data/services";
import { cityLabel } from "@/lib/helpers";

interface CityLinksProps {
  cities: City[];
  /** When set, links go to service+city pages */
  service?: Service;
  heading?: string;
  /** Defaults to "en". Swaps the href prefix and the "in"/"en" connector word. */
  locale?: "en" | "es";
}

/** Compact internal-linking block listing cities (optionally scoped to a service). */
export function CityLinks({ cities, service, heading, locale = "en" }: CityLinksProps) {
  const prefix = locale === "es" ? "/es-mx" : "";
  return (
    <nav aria-label={heading ?? (locale === "es" ? "Ciudades que atendemos" : "Cities we serve")}>
      {heading && (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal">
          {heading}
        </h2>
      )}
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {cities.map((city) => (
          <li key={city.slug}>
            <Link
              href={
                service
                  ? `${prefix}/services/${service.slug}/${city.slug}`
                  : `${prefix}/service-areas/${city.slug}`
              }
              className="inline-flex items-center gap-1.5 rounded-full border bg-card px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-primary hover:text-primary"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {service
                ? `${service.shortName} ${locale === "es" ? "en" : "in"} ${cityLabel(city)}`
                : cityLabel(city)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
