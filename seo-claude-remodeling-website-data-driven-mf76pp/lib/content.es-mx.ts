import type { City } from "@/data/cities";
import type { ServiceFAQ } from "@/data/services";
import { company } from "@/data/company";
import { cityLabel } from "@/lib/helpers";
import { countyLabelEs } from "@/data/cities.es-mx";

/**
 * Spanish (es-MX) equivalents of lib/content.ts's real per-city generator
 * functions, for the /es-mx city-hub pages. Take the translated city object
 * from data/cities.es-mx.ts as input. Same real facts (years in business,
 * zip codes, county) as the English versions — only the prose is Spanish.
 */

export function generateCityIntroEs(city: City): string {
  const years = new Date().getFullYear() - company.foundedYear;
  return `${city.localDescription} Hemos trabajado en ${cityLabel(city)} y ${countyLabelEs(
    city.county
  )} durante ${years}+ años — ${city.housingNote} es lo que vemos en la mayoría de las llamadas por aquí. Desde ${city.localHighlights[0]} hasta ${city.localHighlights[1]}, conocemos estas calles.`;
}

export function generateCityFaqsEs(city: City): ServiceFAQ[] {
  return [
    {
      question: `¿Qué servicios de remodelación ofrecen en ${cityLabel(city)}?`,
      answer:
        "Los seis: pintura de interiores y exteriores, instalación de pisos, remodelación de baños, remodelación de cocinas, reparación de tablaroca, y demolición. Cada proyecto comienza con una cotización gratuita en el sitio.",
    },
    {
      question: `¿Qué partes de ${city.city} cubren?`,
      answer: `Todo, incluyendo ${city.localHighlights.join(", ")}, y los códigos postales ${city.zipCodes.join(", ")} — además de las comunidades circundantes de ${countyLabelEs(city.county)}.`,
    },
    {
      question: `¿Cuánto cuesta remodelar en ${city.city}?`,
      answer: `Depende del proyecto y de su casa — las casas en ${city.city} son típicamente ${city.housingNote}, y lo consideramos en cada cotización. Recibirá una cotización gratuita y detallada antes de que comience cualquier trabajo, sin importar qué servicio necesite.`,
    },
    {
      question: `¿Tienen licencia para trabajar en ${city.city}?`,
      answer: `Sí. Con licencia y seguro en todo Texas. Tramitamos cualquier permiso que ${city.city} o ${countyLabelEs(city.county)} requiera y programamos las inspecciones.`,
    },
  ];
}

export function generateAreasWeServeEs(city: City): string {
  const neighborhoods = city.localHighlights.slice(0, 8).join(", ");
  const zips = city.zipCodes.join(", ");
  const landmarkSentence = city.landmarks?.length
    ? ` Trabajamos cerca de puntos de referencia locales como ${city.landmarks.slice(0, 3).join(", ")}, y en todo lo demás.`
    : "";
  return `Trabajamos en todo ${city.city}, incluyendo ${neighborhoods}, y estos códigos postales: ${zips}.${landmarkSentence} Si está en ${countyLabelEs(city.county)}, es muy probable que ya hayamos estado en su calle.`;
}

export function generateWhyChooseUsEs(city: City): { title: string; description: string }[] {
  return [
    {
      title: `Experiencia Local en ${countyLabelEs(city.county)}`,
      description: `Conocemos el tipo de vivienda de ${city.city} — ${city.housingNote} — y el proceso de permisos local, para que los proyectos comiencen más rápido y avancen sin problemas.`,
    },
    {
      title: "Con Licencia, Seguro y Garantía",
      description:
        "Cada equipo tiene licencia y seguro en Texas, y cada proyecto incluye nuestra garantía de mano de obra.",
    },
    {
      title: "Precios Transparentes y Detallados",
      description: `Cotización gratuita en el sitio, precios detallados. Los propietarios de ${city.city} siempre saben exactamente por qué están pagando.`,
    },
    {
      title: "Un Gerente de Proyecto, de Principio a Fin",
      description:
        "Un solo punto de contacto mantiene su proyecto en calendario y lo mantiene informado todos los días.",
    },
  ];
}
