import type { BlogPost } from "@/data/blogPosts";

/**
 * Spanish (es-MX) translations of the blog posts' metadata + FAQs, for the
 * /es-mx/blog pilot. Same slugs/heroImage/relatedServiceSlug/relatedCitySlugs
 * as data/blogPosts.ts (those are real facts, not language-dependent) —
 * only title/metaDescription/keyword/excerpt/faqs are translated.
 *
 * DRAFT — needs the owner's review pass before this is treated as final.
 */
export const blogPostsEsMx: BlogPost[] = [
  {
    slug: "contractor-abandoned-my-remodel-fort-worth",
    title: "Mi Contratista Abandonó mi Remodelación en Fort Worth — Qué Hacer Ahora",
    metaDescription:
      "Su contratista se llevó el depósito y desapareció a la mitad de la remodelación. Esto es exactamente lo que debe hacer en las próximas 48 horas en Fort Worth, TX — protéjase legalmente, y luego termine el trabajo.",
    keyword: "contratista abandonó mi remodelación fort worth",
    excerpt:
      "Un plan de recuperación paso a paso para propietarios de Fort Worth y DFW cuyo contratista abandonó el proyecto a la mitad — las primeras 48 horas, la trampa del gravamen en Texas que la mayoría no conoce, y cómo debe trabajar un contratista de relevo.",
    publishedDate: "2026-08-05",
    heroImage: {
      src: "/images/gallery/bathroom-remodel-before-demo-old-tub-shower.jpg",
      alt: "Tina original y azulejo de regadera con una sección de pared removida antes de la demolición",
    },
    relatedServiceSlug: "bathroom-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    faqs: [
      {
        question:
          "¿Quién puede terminar una remodelación de baño que mi contratista abandonó en Fort Worth?",
        answer:
          "Busque un contratista de DFW con licencia y seguro que acepte explícitamente trabajos de relevo — muchos no lo hacen, porque no pueden garantizar una instalación oculta. My Dream Home Remodeling toma proyectos abandonados de cocina, baño, piso, tablaroca y pintura en todo el Metroplex de DFW, comenzando con una evaluación documentada gratuita de lo que ya se instaló.",
      },
      {
        question: "¿El nuevo contratista garantizará el trabajo del contratista anterior?",
        answer:
          "No, y desconfíe de cualquiera que diga lo contrario. Un contratista de relevo confiable garantiza su propia mano de obra, documenta la condición existente por escrito antes de comenzar, y le dice claramente qué partes deben reconstruirse para estar cubiertas.",
      },
      {
        question: "¿Terminar una remodelación abandonada cuesta más que empezar de cero?",
        answer:
          "Generalmente cuesta más por pie cuadrado que un inicio limpio, principalmente por la demolición correctiva y los materiales que el contratista original nunca ordenó. Casi siempre sigue siendo más barato que una demolición completa, y una evaluación real le dice en qué categoría está antes de comprometerse.",
      },
      {
        question:
          "¿Un subcontratista puede poner un gravamen sobre mi casa si mi contratista nunca le pagó?",
        answer:
          "En Texas, sí — los subcontratistas y proveedores de materiales sin pagar pueden presentar un gravamen de constructor contra su propiedad aunque ya le haya pagado en su totalidad al contratista general. Pida a cualquier contratista nuevo renuncias de gravamen firmadas de cada subcontratista y proveedor a medida que hace cada pago, y consulte a un abogado de construcción de Texas si ya recibió un aviso. Esto no es asesoría legal — los plazos dependen de su contrato específico.",
      },
      {
        question: "¿Debo presentar una queja antes de contratar a alguien más?",
        answer:
          "Documente primero, luego presente la queja. Fotografíe todo, guarde todos los mensajes de texto y facturas, y obtenga una evaluación por escrito del trabajo inconcluso antes de que comience cualquier trabajo nuevo. Los propietarios de Texas pueden presentar una queja ante la división de protección al consumidor de la Oficina del Procurador General, y ante la junta de licencias correspondiente si estuvo involucrado un oficio con licencia como plomería o electricidad.",
      },
      {
        question: "¿Qué tan rápido puede alguien comenzar en un baño a medio terminar?",
        answer:
          "Respondemos a cada solicitud dentro de un día hábil. Los tiempos de entrega de materiales para azulejo, gabinetes y accesorios generalmente marcan el ritmo de una reconstrucción completa más que la disponibilidad del equipo.",
      },
      {
        question: "¿Cómo me aseguro de que esto no vuelva a pasar?",
        answer:
          "Exija cuatro cosas antes de firmar: prueba de seguro de responsabilidad civil general enviada directamente por la aseguradora, un alcance detallado por escrito en lugar de una suma global, un calendario de pagos vinculado a hitos completados en lugar de un depósito grande por adelantado, y renuncias de gravamen en cada pago. Un contratista que se niegue a cualquiera de estos le está diciendo algo.",
      },
    ],
  },
];

export const getBlogPostEsMx = (slug: string): BlogPost | undefined =>
  blogPostsEsMx.find((p) => p.slug === slug);

export const blogPostSlugsEsMx = blogPostsEsMx.map((p) => p.slug);
