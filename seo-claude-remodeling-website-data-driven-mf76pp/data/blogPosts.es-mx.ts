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
  {
    slug: "remodelacion-cocina-fort-worth-espanol",
    title: "Remodelación de Cocina en Fort Worth con un Contratista que Habla Español",
    metaDescription:
      "Contratista de remodelación de cocina en Fort Worth que habla español. Cotización gratis por escrito, contrato en español, con licencia y seguro. Llame al (817) 374-0962.",
    keyword: "remodelación de cocina fort worth español",
    excerpt:
      "Cómo funciona una remodelación de cocina en Fort Worth con un contratista que habla español: tiempos reales, qué debe incluir la cotización, cómo verificar que el contratista es legítimo en Texas, y permisos.",
    publishedDate: "2026-08-07",
    heroImage: {
      src: "/images/services/kitchen.jpg",
      alt: "Cocina remodelada y luminosa con gabinetes blancos, herrajes dorados y piso de madera",
    },
    relatedServiceSlug: "kitchen-remodeling",
    relatedCitySlugs: ["fort-worth-tx"],
    faqs: [
      {
        question: "¿El equipo de trabajo también habla español o solo el vendedor?",
        answer:
          "Es la pregunta más importante que puede hacer. Muchas empresas anuncian que hablan español, pero solo la persona que contesta el teléfono lo habla. Pregunte específicamente si el gerente de proyecto, quien le da actualizaciones diarias, habla español, y si el contrato y la cotización se le entregan por escrito en español.",
      },
      {
        question: "¿Cuánto tiempo toma una remodelación de cocina completa?",
        answer:
          "De 4 a 8 semanas de construcción una vez que los materiales llegan, más 1 o 2 semanas antes para el diseño y la selección de materiales. Los gabinetes son casi siempre lo que determina la fecha de inicio, porque tienen tiempo de fabricación — pedir todo antes de la demolición mantiene el calendario firme.",
      },
      {
        question: "¿Cuánto cuesta remodelar una cocina?",
        answer:
          "Los proyectos de reemplazo de gabinetes y cubiertas suelen costar entre $12,000 y $25,000, mientras que una renovación completa de cocina típicamente va de $30,000 a $75,000 o más, dependiendo del tamaño, cambios de distribución y materiales. Recibirá una cotización detallada línea por línea antes de comprometerse a nada.",
      },
      {
        question: "¿Necesito ser ciudadano o residente para contratar a un contratista?",
        answer:
          "No. Para contratar trabajo de remodelación en su vivienda no se requiere ciudadanía ni estatus migratorio específico. Lo que sí necesita es ser el propietario de la casa o tener autorización del propietario, porque los permisos de construcción se emiten a nombre de la propiedad.",
      },
      {
        question: "¿Se requiere permiso para remodelar una cocina en Fort Worth?",
        answer:
          "Generalmente sí, cuando se modifica la plomería, la electricidad, o se cambian o reparan paredes o pisos en un área de 16 pies cuadrados o más. Cambiar únicamente gabinetes y cubiertas sin tocar instalaciones suele no requerir permiso. Confirme siempre con el Departamento de Servicios de Desarrollo de la Ciudad de Fort Worth, porque los requisitos pueden cambiar.",
      },
      {
        question: "¿Cómo verifico que un contratista en Texas es legítimo?",
        answer:
          "Texas no emite una licencia estatal para contratistas generales de remodelación. Por eso la verificación recae en usted: pida el certificado de seguro de responsabilidad civil, confirme que el electricista tenga licencia vigente del TDLR (Departamento de Licencias y Regulación de Texas) y que el plomero tenga licencia vigente del TSBPE (Junta Estatal de Examinadores de Plomería de Texas — es una agencia distinta a TDLR), y exija que el contrato esté por escrito antes de dar cualquier anticipo.",
      },
      {
        question: "¿Cuánto anticipo es normal pagar?",
        answer:
          "Un anticipo razonable cubre materiales iniciales, no la mayor parte del trabajo. Desconfíe de quien pida la mitad o más por adelantado, de quien exija efectivo, y de quien no entregue recibo. Los pagos deben ir ligados a etapas terminadas del proyecto y quedar establecidos por escrito en el contrato.",
      },
    ],
  },
];

export const getBlogPostEsMx = (slug: string): BlogPost | undefined =>
  blogPostsEsMx.find((p) => p.slug === slug);

export const blogPostSlugsEsMx = blogPostsEsMx.map((p) => p.slug);
