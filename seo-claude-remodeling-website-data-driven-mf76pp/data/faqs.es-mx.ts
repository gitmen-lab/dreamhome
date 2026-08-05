import type { FAQ } from "@/data/faqs";
import { company } from "@/data/company";

/** Spanish translation of data/faqs.ts's generalFaqs, for the /es-mx homepage. */
export const generalFaqsEsMx: FAQ[] = [
  {
    question: "¿Tienen licencia y seguro?",
    answer: `Sí. ${company.name} tiene licencia y seguro completo en el Estado de Texas, y todo el trabajo de plomería, electricidad y gas es realizado por profesionales licenciados e inspeccionado según el código local.`,
  },
  {
    question: "¿Cobran por las cotizaciones?",
    answer:
      "Nunca. Cada proyecto comienza con una consulta gratuita y sin obligación, y una cotización detallada por escrito. Sabrá exactamente qué está pagando antes de que comience cualquier trabajo.",
  },
  {
    question: "¿Cómo funcionan los pagos?",
    answer:
      "Usamos un calendario de pagos basado en hitos vinculado al trabajo completado — nunca depósitos grandes por adelantado. Usted paga a medida que avanza el progreso, y el pago final se debe solo después de la aprobación de su recorrido.",
  },
  {
    question: "¿Ofrecen garantía?",
    answer:
      "Sí. Cada proyecto incluye nuestra garantía de mano de obra, además de las garantías del fabricante para materiales y accesorios. Si algo que construimos no está bien, regresamos y lo arreglamos.",
  },
  {
    question: "¿El mismo equipo estará en mi casa todos los días?",
    answer:
      "Sí — a cada proyecto se le asigna un equipo dedicado y un solo gerente de proyecto que es su punto de contacto desde la cotización hasta el recorrido final.",
  },
  {
    question: "¿Con cuánta anticipación debo reservar?",
    answer:
      "Trabajos pequeños como reparación de tablaroca a menudo se pueden programar en días. Las remodelaciones más grandes típicamente se reservan de 2 a 4 semanas de anticipación, y recomendamos contactarnos temprano para proyectos de cocina para que el diseño y los pedidos de materiales no retrasen su fecha de inicio.",
  },
];
