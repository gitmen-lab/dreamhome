import { ShieldCheck, Award, Clock, ThumbsUp } from "lucide-react";
import { company } from "@/data/company";
import { companyStat } from "@/lib/helpers";

/** Defaults to "en". Only swaps this component's own hardcoded strings. */
export function TrustBadges({ locale = "en" }: { locale?: "en" | "es" }) {
  const years = new Date().getFullYear() - company.foundedYear;

  const badges =
    locale === "es"
      ? [
          {
            icon: ShieldCheck,
            title: "Con Licencia y Seguro",
            description: "Totalmente licenciados y asegurados en Texas",
          },
          {
            icon: Award,
            title: `${years}+ Años de Experiencia`,
            description: `Sirviendo a DFW desde ${company.foundedYear}`,
          },
          {
            icon: ThumbsUp,
            title: `${companyStat("Average Rating")} Calificación Promedio`,
            description: `${company.googleReviewCount} reseñas en Google`,
          },
          {
            icon: Clock,
            title: "A Tiempo, Dentro del Presupuesto",
            description: "Calendarios por escrito y precios detallados",
          },
        ]
      : [
          {
            icon: ShieldCheck,
            title: "Licensed & Insured",
            description: "Fully licensed and insured in Texas",
          },
          {
            icon: Award,
            title: `${years}+ Years Experience`,
            description: `Serving DFW since ${company.foundedYear}`,
          },
          {
            icon: ThumbsUp,
            title: `${companyStat("Average Rating")} Average Rating`,
            description: `${company.googleReviewCount} Google reviews`,
          },
          {
            icon: Clock,
            title: "On-Time, On-Budget",
            description: "Written schedules & itemized pricing",
          },
        ];

  return (
    <section
      className="border-b bg-white"
      aria-label={locale === "es" ? "Por qué los propietarios confían en nosotros" : "Why homeowners trust us"}
    >
      <ul className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {badges.map((badge) => (
          <li key={badge.title} className="flex items-center gap-3">
            <badge.icon className="h-8 w-8 text-primary shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-charcoal">{badge.title}</p>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {badge.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
