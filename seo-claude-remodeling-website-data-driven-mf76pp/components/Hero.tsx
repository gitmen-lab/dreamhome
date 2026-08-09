import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref, companyStat } from "@/lib/helpers";
import type { ReactNode } from "react";

interface HeroProps {
  title: ReactNode;
  subtitle: string;
  eyebrow?: string;
  compact?: boolean;
  backgroundImage?: { src: string; alt: string };
  /**
   * Optional looping background video, layered over `backgroundImage` (which
   * still renders first/underneath as the poster and LCP element, and as the
   * fallback for prefers-reduced-motion via a pure-CSS `motion-reduce:hidden`
   * -- no client component needed to keep this a server component). Muted,
   * autoplaying, and decorative, so it's aria-hidden.
   */
  backgroundVideo?: { src: string };
  /**
   * Renders arbitrary content (e.g. a contact form) alongside the hero copy
   * in a two-column layout on large screens. Passed as a slot rather than
   * imported directly so pages that don't use it (all the compact/service
   * pages) never pull its JS into their bundle.
   */
  formSlot?: ReactNode;
  /** Defaults to "en". Only swaps this component's own hardcoded strings. */
  locale?: "en" | "es";
}

const STRINGS = {
  en: {
    getEstimate: "Get a Free Estimate",
    licensedInsured: "Licensed & Insured",
    workmanshipWarranty: "Workmanship Warranty",
    averageRating: "Average Rating",
    formHeading: "Get Your Free Estimate",
    formSubheading: "We respond to every request within one business day.",
  },
  es: {
    getEstimate: "Solicitar Cotización Gratuita",
    licensedInsured: "Con Licencia y Seguro",
    workmanshipWarranty: "Garantía de Mano de Obra",
    averageRating: "Calificación Promedio",
    formHeading: "Solicite su Cotización Gratuita",
    formSubheading: "Respondemos a cada solicitud dentro de un día hábil.",
  },
};

export function Hero({
  title,
  subtitle,
  eyebrow,
  compact = false,
  backgroundImage,
  backgroundVideo,
  formSlot,
  locale = "en",
}: HeroProps) {
  const t = STRINGS[locale];
  const content = (
    <div className={formSlot ? "" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
        {title}
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">{subtitle}</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          {/* No Spanish /contact page in this pilot yet — links to the real English
              contact page rather than a route that doesn't exist. */}
          <Link href="/contact">{t.getEstimate}</Link>
        </Button>
        <Button size="lg" variant="white" asChild>
          <a href={telHref(company.phone)}>
            <Phone className="h-5 w-5" aria-hidden="true" />
            {company.phoneDisplay}
          </a>
        </Button>
      </div>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300">
        <li className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
          {t.licensedInsured}
        </li>
        <li className="flex items-center gap-2">
          <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
          {t.workmanshipWarranty}
        </li>
        <li className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
          {companyStat("Average Rating")} {t.averageRating}
        </li>
      </ul>
    </div>
  );
  return (
    <section
      className={`relative overflow-hidden bg-charcoal-dark text-white ${
        compact ? "py-16 md:py-20" : "py-20 md:py-32"
      }`}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      {backgroundVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={backgroundVideo.src} type="video/mp4" />
        </video>
      )}
      {/* Dark overlay so white text stays legible over a photo/video background */}
      {(backgroundImage || backgroundVideo) && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal-dark/85 to-charcoal-dark/50"
          aria-hidden="true"
        />
      )}
      {/* Decorative gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.15),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="container relative">
        {formSlot ? (
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {content}
            <div className="rounded-lg border border-white/10 bg-white p-6 shadow-xl md:p-8">
              <h2 className="text-xl font-semibold text-charcoal">{t.formHeading}</h2>
              <p className="mt-1 mb-6 text-sm text-muted-foreground">{t.formSubheading}</p>
              {formSlot}
            </div>
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  );
}
