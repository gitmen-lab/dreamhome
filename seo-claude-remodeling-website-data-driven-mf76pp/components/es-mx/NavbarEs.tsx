"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { servicesEsMx } from "@/data/services.es-mx";
import { telHref } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { esToEn } from "@/lib/es-mx/pageMap";

/**
 * Spanish header for the /es-mx pilot. Not locale-aware itself (unlike the
 * shared component `locale` props elsewhere) -- this is a dedicated
 * component only ever rendered by app/es-mx/layout.tsx, matching the real
 * Navbar's structure so the two languages feel like the same site.
 */
export function NavbarEs() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const englishHref = esToEn[pathname];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/es-mx" aria-label={`${company.name} inicio`}>
          <span className="flex shrink-0 items-center">
            <Image
              src={company.logo}
              alt={`Logotipo de ${company.name}`}
              width={600}
              height={121}
              className="h-10 w-auto rounded-md shadow-sm"
              style={{ aspectRatio: "600 / 121" }}
              priority
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-primary transition-colors py-5"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Servicios
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-b-lg border bg-white shadow-lg py-2">
                {servicesEsMx.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/es-mx/services/${service.slug}`}
                    className="block px-4 py-2.5 text-sm text-charcoal hover:bg-accent hover:text-primary transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/es-mx/service-areas"
            className="text-sm font-medium text-charcoal hover:text-primary transition-colors"
          >
            Áreas de Servicio
          </Link>
          <Link
            href="/es-mx/blog"
            className="text-sm font-medium text-charcoal hover:text-primary transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {englishHref && (
            <Link
              href={englishHref}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              EN
            </Link>
          )}
          <a
            href={telHref(company.phone)}
            className="flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phoneDisplay}
          </a>
          <Button asChild>
            <Link href="/contact">Cotización Gratis</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-charcoal"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="lg:hidden border-t bg-white px-4 pb-6 pt-2 max-h-[calc(100vh-4rem)] overflow-y-auto"
          aria-label="Navegación móvil"
        >
          <p className="px-1 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Servicios
          </p>
          {servicesEsMx.map((service) => (
            <Link
              key={service.slug}
              href={`/es-mx/services/${service.slug}`}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              {service.name}
            </Link>
          ))}
          <div className="my-2 border-t" />
          <Link
            href="/es-mx/service-areas"
            className="block rounded-md px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Áreas de Servicio
          </Link>
          <Link
            href="/es-mx/blog"
            className="block rounded-md px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          {englishHref && (
            <Link
              href={englishHref}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              English
            </Link>
          )}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={telHref(company.phone)}
              className="flex items-center justify-center gap-2 rounded-md border py-2.5 text-sm font-semibold text-charcoal"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Solicitar Cotización Gratis
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
