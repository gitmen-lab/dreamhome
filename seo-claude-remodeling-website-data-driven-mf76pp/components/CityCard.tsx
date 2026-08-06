import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { City } from "@/data/cities";
import type { Service } from "@/data/services";
import { cityLabel } from "@/lib/helpers";

interface CityCardProps {
  city: City;
  /** When set, links to the service+city page instead of the city page */
  service?: Service;
  /**
   * Defaults to "en". Plain city links (no `service`) point at the real
   * Spanish city page. Service+city combo links (service set) still point
   * at the English combo page — those 120 pages aren't translated yet.
   */
  locale?: "en" | "es";
}

export function CityCard({ city, service, locale = "en" }: CityCardProps) {
  const href = service
    ? `/services/${service.slug}/${city.slug}`
    : `${locale === "es" ? "/es-mx" : ""}/service-areas/${city.slug}`;

  return (
    <Card className="group relative h-full transition-shadow hover:shadow-lg">
      <CardContent className="flex h-full flex-col p-5">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
          <h3 className="font-semibold text-charcoal">
            <Link href={href} className="after:absolute after:inset-0">
              {service
                ? `${service.shortName} ${locale === "es" ? "en" : "in"} ${cityLabel(city)}`
                : cityLabel(city)}
            </Link>
          </h3>
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">
          {city.county} · {locale === "es" ? "Pob." : "Pop."} {city.population}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
          {locale === "es" ? "Ver detalles" : "View details"}
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </CardContent>
    </Card>
  );
}
