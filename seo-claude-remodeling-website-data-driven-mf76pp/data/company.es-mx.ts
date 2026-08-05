import { company } from "@/data/company";

/**
 * Spanish (es-MX) display strings only — for the /es-mx pilot.
 * Real facts (phone, address, coordinates, rating, review count, founded
 * year) live in data/company.ts and are re-used directly here, never
 * duplicated, so NAP data can't drift between languages.
 *
 * DRAFT — needs the owner's review pass before this is treated as final.
 */
export const companyEsMx = {
  tagline:
    "Remodelación de Casas de Confianza en Todo el Área Metropolitana de Dallas–Fort Worth",
  guarantees: [
    "Cotizaciones gratuitas, sin compromiso",
    "Equipos con licencia y seguro",
    "Precios transparentes y detallados",
    "Garantía de mano de obra en cada proyecto",
    "Sitios de trabajo limpios, todos los días",
  ],
  /** Same real values as company.stats, translated labels only. */
  stats: [
    { label: "Años en el Negocio", value: company.stats.find((s) => s.label === "Years in Business")?.value ?? "" },
    { label: "Proyectos Completados", value: company.stats.find((s) => s.label === "Projects Completed")?.value ?? "" },
    { label: "Ciudades Atendidas", value: company.stats.find((s) => s.label === "Cities Served")?.value ?? "" },
    { label: "Calificación Promedio", value: company.stats.find((s) => s.label === "Average Rating")?.value ?? "" },
  ],
  license: "Con Licencia y Asegurados en Texas",
};
