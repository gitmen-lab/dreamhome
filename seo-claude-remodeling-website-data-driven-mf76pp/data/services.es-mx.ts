import type { Service } from "@/data/services";

/**
 * Spanish (es-MX) translations of the 6 real services, for the /es-mx pilot.
 * Same slugs/icon/image/priceRange/duration as data/services.ts (those aren't
 * language-dependent) — only the copy fields are translated. Keywords are
 * real Spanish search phrasing, not literal translations of the English ones.
 *
 * DRAFT — needs the owner's review pass before this is treated as final.
 */
export const servicesEsMx: Service[] = [
  {
    slug: "interior-exterior-painting",
    name: "Pintura de Interiores y Exteriores",
    shortName: "Pintura",
    icon: "paintbrush",
    shortDescription:
      "Acabados de pintura nítidos y duraderos para interiores y exteriores, desde paredes decorativas hasta el repintado completo de la casa.",
    longDescription:
      "Un trabajo de pintura profesional es la forma más rápida de transformar una casa — y una de las más fáciles de arruinar sin la preparación adecuada. Nuestros equipos se encargan de cada paso: proteger pisos y muebles, reparar imperfecciones en la superficie, aplicar sellador y usar pinturas premium bajas en compuestos orgánicos volátiles (VOC) con líneas limpias y precisas. En exteriores, lavamos a presión, raspamos, sellamos con calafateo y aplicamos sellador antes de la primera capa, para que el acabado resista el sol y las tormentas de Texas por años, no meses.",
    benefits: [
      {
        title: "Preparación Meticulosa de Superficies",
        description:
          "Parchado, lijado, calafateo y sellado vienen incluidos — porque un acabado es tan bueno como la superficie debajo de él.",
      },
      {
        title: "Pinturas Premium Resistentes al Clima",
        description:
          "Usamos pinturas interiores premium bajas en VOC y recubrimientos exteriores resistentes a los rayos UV, hechos para el calor y la humedad del Norte de Texas.",
      },
      {
        title: "Equipos Limpios y Respetuosos",
        description:
          "Muebles cubiertos, pisos protegidos, y una limpieza completa al final de cada jornada de trabajo.",
      },
      {
        title: "Consulta de Color Incluida",
        description:
          "¿No está seguro de la paleta de colores? Le ayudamos a probar y elegir colores que se ajusten a la luz y el estilo de su casa.",
      },
    ],
    processSteps: [
      {
        title: "Consulta Gratuita de Color y Alcance",
        description:
          "Recorremos el espacio con usted, discutimos colores y acabados, y entregamos un presupuesto detallado por escrito.",
      },
      {
        title: "Preparación de Superficies",
        description:
          "Lavado, raspado, parchado, lijado, calafateo y enmascarado — el trabajo poco glamoroso que hace que el acabado dure.",
      },
      {
        title: "Sellado y Pintura",
        description:
          "Selladores de calidad seguidos de dos capas completas de pintura premium, aplicadas con brocha, rodillo o aspersor según lo requiera la superficie.",
      },
      {
        title: "Inspección y Retoques",
        description:
          "Recorremos el trabajo con usted, hacemos cualquier retoque en el momento, y dejamos el espacio más limpio de lo que lo encontramos.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo toma repintar toda una casa por dentro?",
        answer:
          "La mayoría de los repintados completos de interiores toman de 3 a 5 días dependiendo de los metros cuadrados, el estado de las paredes y el número de colores. Le damos un calendario firme antes de comenzar el trabajo.",
      },
      {
        question: "¿Usan pintura baja en VOC?",
        answer:
          "Sí. Por defecto usamos pinturas premium bajas y cero VOC, lo que significa un olor mínimo y una casa en la que puede vivir cómodamente durante el proyecto.",
      },
      {
        question: "¿Cuál es la mejor época del año para pintar exteriores en Texas?",
        answer:
          "La primavera y el otoño ofrecen temperaturas ideales, pero los recubrimientos modernos nos permiten pintar la mayor parte del año. Monitoreamos las condiciones climáticas y nunca pintamos en condiciones que comprometan la adherencia.",
      },
      {
        question: "¿Necesito mover mis muebles antes de que lleguen?",
        answer:
          "No — nuestro equipo mueve y cubre los muebles como parte del trabajo. Solo pedimos que aparte los objetos frágiles y de valor.",
      },
    ],
    keywords: [
      "pintores de casas",
      "pintura de interiores",
      "pintura de exteriores",
      "contratista de pintura residencial",
      "pintura de gabinetes",
      "repintado de casas",
    ],
    image: "/images/services/painting.jpg",
    imageAlt:
      "Puertas de entrada dobles de madera oscura recién teñidas en el exterior de una casa de piedra después de la restauración",
    priceRange: "$$",
    duration: "2–7 días",
  },
  {
    slug: "floor-installation",
    name: "Instalación de Pisos",
    shortName: "Pisos",
    icon: "layers",
    shortDescription:
      "Instalación experta de madera, vinilo de lujo, laminado y pisos de cerámica con una preparación impecable del subsuelo.",
    longDescription:
      "Un piso nuevo cambia cómo se siente y se ve toda una casa. Instalamos madera, madera de ingeniería, vinilo de lujo (LVP), laminado y cerámica — y tratamos la preparación del subsuelo con la misma seriedad que el material de acabado. Un subsuelo desnivelado o dañado causa crujidos, espacios y desgaste prematuro, así que nivelamos, reparamos y probamos la humedad antes de instalar la primera tabla o azulejo. El resultado: pisos que se ven perfectos como de exhibición y se mantienen así.",
    benefits: [
      {
        title: "Todos los Tipos Principales de Piso",
        description:
          "Madera, madera de ingeniería, vinilo de lujo, laminado y cerámica o porcelanato — un equipo, una garantía, un punto de contacto.",
      },
      {
        title: "Preparación Seria del Subsuelo",
        description:
          "Nivelación, reparación y prueba de humedad antes de la instalación, evitando crujidos, espacios y abultamientos después.",
      },
      {
        title: "Remoción Controlada de Polvo",
        description:
          "El piso viejo se retira con contención y limpieza que mantiene el resto de su casa habitable.",
      },
      {
        title: "Transiciones y Molduras Precisas",
        description:
          "Puertas, escaleras y transiciones entre habitaciones terminadas limpiamente — los detalles que separan el trabajo profesional del hágalo-usted-mismo.",
      },
    ],
    processSteps: [
      {
        title: "Medición y Cotización en su Casa",
        description:
          "Medimos cada habitación, discutimos opciones de materiales y presupuesto, y entregamos una cotización detallada con muestras de material.",
      },
      {
        title: "Remoción y Preparación del Subsuelo",
        description:
          "El piso existente se retira y se desecha, luego el subsuelo se nivela, repara y prueba por humedad.",
      },
      {
        title: "Instalación",
        description:
          "Los materiales se aclimatan en el sitio, luego se instalan según las especificaciones del fabricante con cortes precisos, patrones y espacios de expansión.",
      },
      {
        title: "Acabado y Recorrido Final",
        description:
          "Se instalan molduras, transiciones y umbrales, se limpia el sitio, y recorremos cada habitación con usted.",
      },
    ],
    faqs: [
      {
        question: "¿Qué tipo de piso aguanta mejor con niños y mascotas?",
        answer:
          "El vinilo de lujo es el más resistente: impermeable, resistente a rayones y con una apariencia realista. El porcelanato es otra excelente opción de alta durabilidad, especialmente en cocinas y baños.",
      },
      {
        question: "¿Pueden instalar piso nuevo sobre mi piso existente?",
        answer:
          "A veces — ciertos pisos flotantes pueden colocarse sobre superficies duras existentes si están planas y en buen estado. Evaluamos en el sitio y siempre recomendamos lo mejor a largo plazo, no lo más rápido.",
      },
      {
        question: "¿Cuánto tiempo toma la instalación de piso?",
        answer:
          "Una casa típica de 3 recámaras toma de 2 a 4 días incluyendo la remoción. La madera y la cerámica toman más tiempo que los pisos flotantes debido al tiempo de aclimatación y curado.",
      },
      {
        question: "¿Mueven muebles y electrodomésticos?",
        answer:
          "Sí, mover muebles está incluido en nuestras cotizaciones. Coordinamos la desconexión y reconexión de electrodomésticos donde sea necesario.",
      },
    ],
    keywords: [
      "instalación de pisos",
      "piso de madera",
      "instalación de vinilo de lujo",
      "piso de cerámica",
      "instalación de laminado",
      "contratista de pisos",
    ],
    image: "/images/services/flooring.jpg",
    imageAlt: "Habitación amplia con piso de madera recién instalado y luz natural",
    priceRange: "$$",
    duration: "2–5 días",
  },
  {
    slug: "bathroom-remodeling",
    name: "Remodelación de Baños",
    shortName: "Baños",
    icon: "bath",
    shortDescription:
      "Transformaciones completas de baños — tinas, regaderas de entrada, tocadores, azulejo e iluminación — hechas bien y a tiempo.",
    longDescription:
      "Los baños son las habitaciones que más trabajan en una casa, y remodelar uno involucra casi todos los oficios: plomería, electricidad, azulejo, impermeabilización, carpintería y acabados. Nosotros manejamos todo bajo un mismo techo. Ya sea que quiera convertir su tina en una regadera de entrada, un baño principal estilo spa, o una remodelación para envejecer en casa con entrada sin bordes y barras de apoyo, nos encargamos del diseño, la demolición y la construcción con la impermeabilización adecuada detrás de cada pared — la parte que nunca ve pero siempre apreciará.",
    benefits: [
      {
        title: "Sistemas Reales de Impermeabilización",
        description:
          "Membranas modernas para regadera y placa de cemento detrás de cada trabajo de azulejo — no atajos de nivel constructor.",
      },
      {
        title: "Un Equipo, Todos los Oficios",
        description:
          "Plomería, electricidad, azulejo y carpintería coordinados por un solo gerente de proyecto para que nada se pierda.",
      },
      {
        title: "Calendarios Fijos",
        description:
          "Un calendario por escrito antes del día de demolición, con actualizaciones proactivas. La mayoría de los baños se terminan en 2 a 3 semanas.",
      },
      {
        title: "Ayuda de Diseño Incluida",
        description:
          "Diseños de azulejo, selección de tocador, planes de iluminación — le ayudamos a tomar decisiones que se vean bien juntas.",
      },
    ],
    processSteps: [
      {
        title: "Diseño y Cotización Detallada",
        description:
          "Medimos su baño, discutimos el diseño y los acabados, y producimos una cotización detallada con un calendario realista.",
      },
      {
        title: "Demolición e Instalación Preliminar",
        description:
          "Demolición cuidadosa con contención de polvo, luego instalación preliminar de plomería y electricidad, inspeccionada y a código.",
      },
      {
        title: "Impermeabilización y Azulejo",
        description:
          "Bases de regadera, membranas y placa base instaladas según especificación, seguidas de trabajo de azulejo de precisión.",
      },
      {
        title: "Accesorios y Acabados",
        description:
          "Tocadores, llaves, vidrio, iluminación y herrajes instalados, luego una limpieza completa y recorrido final.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta remodelar un baño?",
        answer:
          "La mayoría de las remodelaciones de baño van desde aproximadamente $2,500 para una renovación estética hasta $12,000–$30,000 para una remodelación completa estándar, con baños principales y de lujo entre $25,000–$80,000 o más. El costo por pie cuadrado en el área de DFW típicamente es de $70–$250 (hasta $500+ para materiales de lujo). Cada proyecto recibe una cotización gratuita y detallada antes de comenzar el trabajo.",
      },
      {
        question: "¿Cuánto tiempo estaré sin mi baño?",
        answer:
          "Una renovación estética toma unos días, una remodelación completa estándar típicamente de 1 a 4 semanas, y un baño principal completo de 3 a 10+ semanas de construcción dependiendo del alcance y los tiempos de entrega de materiales. Reducimos al máximo el tiempo sin agua.",
      },
      {
        question: "¿Se encargan de permisos e inspecciones?",
        answer:
          "Sí. Cualquier trabajo que involucre cambios de plomería o electricidad requiere permiso y es inspeccionado según los requisitos de su ciudad — nosotros nos encargamos del papeleo.",
      },
      {
        question: "¿Pueden hacer mi baño más seguro para envejecer en casa?",
        answer:
          "Por supuesto. Regaderas sin bordes, barras de apoyo con el refuerzo adecuado, inodoros de altura cómoda y azulejo antiderrapante son solicitudes comunes para las que diseñamos.",
      },
    ],
    keywords: [
      "remodelación de baños",
      "renovación de baños",
      "conversión de tina a regadera",
      "instalación de regadera de entrada",
      "remodelación de baño principal",
      "contratista de baños",
    ],
    image: "/images/services/bathroom.jpg",
    imageAlt:
      "Remodelación terminada de un medio baño con friso de madera, lavabo de pedestal y accesorios de latón",
    priceRange: "$$$",
    duration: "2–3 semanas",
    pricingTiers: [
      {
        tier: "Renovación estética",
        range: "$2,500 – $10,000",
        includes:
          "Pintura nueva, accesorios, cubierta de tocador, herrajes e iluminación — sin cambio de diseño.",
      },
      {
        tier: "Remodelación completa estándar",
        range: "$12,000 – $30,000",
        includes:
          "Azulejo nuevo, tocador, tina/regadera, piso y accesorios para un baño de visitas o pasillo.",
      },
      {
        tier: "Remodelación principal / de lujo",
        range: "$25,000 – $80,000+",
        includes:
          "Regadera de entrada, tocador doble, azulejo personalizado, cambios de diseño y acabados premium.",
      },
    ],
    subServices: [
      "Remodelaciones Completas de Baño",
      "Conversión de Tina a Regadera de Entrada",
      "Remodelaciones de Baño Principal",
      "Renovaciones Estéticas",
      "Accesibilidad y Envejecimiento en Casa",
    ],
  },
  {
    slug: "kitchen-remodeling",
    name: "Remodelación de Cocinas",
    shortName: "Cocinas",
    icon: "chef-hat",
    shortDescription:
      "Renovaciones completas de cocina — gabinetes, cubiertas, islas, iluminación y diseños construidos para cómo realmente cocina.",
    longDescription:
      "La cocina es donde las casas se ganan su lugar, y una remodelación bien planeada se recupera cada día. Nos encargamos de todo, desde el reacabado de gabinetes y mejoras de cubiertas hasta renovaciones completas con nuevos diseños, islas y planes de iluminación. Nuestro proceso comienza con cómo su familia realmente usa el espacio — almacenamiento, flujo de tráfico, zonas de preparación — y luego añadimos materiales y acabados que se ajusten a su presupuesto. Un gerente de proyecto coordina cada oficio desde la demolición hasta el último tirador de gabinete.",
    benefits: [
      {
        title: "Diseño Basado en el Flujo",
        description:
          "Diseñamos alrededor del flujo de trabajo y el almacenamiento antes que los acabados, para que la cocina funcione tan bien como se ve.",
      },
      {
        title: "Gabinetes para Todo Presupuesto",
        description:
          "Opciones de reacabado, semi-personalizados y completamente personalizados, todos instalados y nivelados profesionalmente.",
      },
      {
        title: "Oficios Licenciados Internos",
        description:
          "Trabajo de plomería, electricidad y línea de gas manejado por profesionales licenciados e inspeccionado a código.",
      },
      {
        title: "Proceso de Remodelación Habitable",
        description:
          "Barreras de polvo, cocinas temporales y calendarios claros mantienen su hogar funcionando durante la construcción.",
      },
    ],
    processSteps: [
      {
        title: "Consulta de Diseño",
        description:
          "Medimos, discutimos su lista de deseos y presupuesto, y desarrollamos un plan de diseño y acabados con una cotización detallada.",
      },
      {
        title: "Selecciones y Pedidos",
        description:
          "Gabinetes, cubiertas, azulejo y accesorios se finalizan y ordenan antes de la demolición — para que el proyecto nunca se detenga esperando materiales.",
      },
      {
        title: "Demolición y Construcción",
        description:
          "Remoción, enmarcado, instalación preliminar de plomería y electricidad, seguido de tablaroca, gabinetes y plantillas de cubierta.",
      },
      {
        title: "Acabados y Recorrido",
        description:
          "Se instalan salpicadero, iluminación, herrajes y electrodomésticos, se completa la lista de pendientes, y se revela su nueva cocina.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta remodelar una cocina?",
        answer:
          "El reacabado de gabinetes y proyectos de cubiertas a menudo van de $12,000–$25,000, mientras que las renovaciones completas de cocina típicamente van de $30,000–$75,000+ dependiendo del tamaño, cambios de diseño y materiales. Recibirá una cotización detallada antes de comprometerse a nada.",
      },
      {
        question: "¿Cuánto tiempo toma una remodelación de cocina?",
        answer:
          "La mayoría de las remodelaciones completas toman de 4 a 8 semanas de construcción después de que llegan los materiales. Pedir todo antes de la demolición mantiene el calendario ajustado.",
      },
      {
        question: "¿Puedo mantener mi diseño existente para ahorrar dinero?",
        answer:
          "Sí — mantener la plomería y el gas donde están es el mayor ahorro en una remodelación de cocina. Le diremos honestamente si un cambio de diseño vale la pena para su espacio.",
      },
      {
        question: "¿Instalan electrodomésticos?",
        answer:
          "Sí, la instalación y conexión de electrodomésticos — incluyendo estufas de gas y campanas de extracción — es parte de nuestro alcance, manejado por profesionales licenciados.",
      },
    ],
    keywords: [
      "remodelación de cocinas",
      "renovación de cocinas",
      "instalación de gabinetes",
      "instalación de cubiertas",
      "isla de cocina",
      "contratista de cocinas",
    ],
    image: "/images/services/kitchen.jpg",
    imageAlt: "Cocina renovada y luminosa con gabinetes blancos, herrajes de latón y piso de madera",
    priceRange: "$$$$",
    duration: "4–8 semanas",
  },
  {
    slug: "drywall-repair",
    name: "Reparación de Tablaroca",
    shortName: "Tablaroca",
    icon: "wrench",
    shortDescription:
      "Parchado invisible de tablaroca, igualación de textura e instalación completa de tablaroca — reparaciones que desaparecen en la pared.",
    longDescription:
      "Daño por agua, agujeros de perilla de puerta, grietas por asentamiento, parches mal hechos de hágalo-usted-mismo — los problemas de tablaroca son comunes, pero las reparaciones invisibles son raras. Igualar la textura es la parte difícil, y es nuestra especialidad: piel de naranja, knockdown, remoción de gotelé, o acabados lisos nivel 5. Reparamos desde burbujas de clavos hasta reemplazos completos de techo después de una fuga, luego sellamos y pintamos para que genuinamente no pueda encontrar dónde estuvo el daño.",
    benefits: [
      {
        title: "Expertos en Igualación de Textura",
        description:
          "Piel de naranja, knockdown, salpicado, o liso — igualamos su textura existente para que la reparación desaparezca.",
      },
      {
        title: "Especialistas en Daño por Agua",
        description:
          "Evaluamos la humedad, reemplazamos la tablaroca comprometida, y coordinamos con su plomero o la reparación de su techo.",
      },
      {
        title: "Trabajos Pequeños Bienvenidos",
        description:
          "Ninguna reparación es demasiado pequeña. Parches individuales, burbujas de clavos y reparaciones de esquina reciben el mismo cuidado que habitaciones completas.",
      },
      {
        title: "Listo para Pintar o Pintado",
        description:
          "Podemos dejar la superficie sellada y lista, o terminar con pintura del color exacto para una reparación verdaderamente invisible.",
      },
    ],
    processSteps: [
      {
        title: "Evaluación y Cotización",
        description:
          "Inspeccionamos el daño (fotos funcionan para trabajos pequeños), revisamos problemas de humedad subyacentes, y cotizamos la reparación.",
      },
      {
        title: "Corte y Reparación",
        description:
          "Se retira el material dañado, se añade enmarcado o soporte según sea necesario, y se instala y sella la tablaroca nueva.",
      },
      {
        title: "Sellado, Lijado y Textura",
        description:
          "Múltiples capas de compuesto para juntas lijadas hasta quedar lisas, luego se aplica textura para igualar la pared o techo circundante.",
      },
      {
        title: "Sellador y Pintura",
        description:
          "La reparación se sella y pinta para mezclarse con la superficie existente — hecho en tan solo una visita para parches pequeños.",
      },
    ],
    faqs: [
      {
        question: "¿De verdad pueden igualar la textura de mi pared?",
        answer:
          "Sí — igualar la textura es la habilidad principal de nuestro equipo de tablaroca. Probamos la igualación en un lugar discreto primero en texturas difíciles como el knockdown pesado.",
      },
      {
        question: "Mi techo tiene manchas de agua. ¿Necesito tablaroca nueva?",
        answer:
          "No siempre. Si la tablaroca está seca y en buen estado, un sellador bloqueador de manchas y pintura pueden ser suficientes. Si está hundida, blanda o con moho, reemplazamos la sección afectada. Revisamos con un medidor de humedad antes de recomendar cualquiera de las dos opciones.",
      },
      {
        question: "¿Remueven techos de gotelé?",
        answer:
          "Sí. Raspamos, emparejamos y volvemos a texturizar (o dejamos acabado liso) techos de gotelé, con contención completa de polvo — y podemos aconsejar sobre pruebas de asbesto para casas construidas antes de mediados de los 1980.",
      },
      {
        question: "¿Qué tan pronto pueden programar reparaciones pequeñas?",
        answer:
          "Los trabajos de parches pequeños usualmente se pueden programar dentro de unos días hábiles, y muchos se completan en una sola visita con compuestos de secado rápido.",
      },
    ],
    keywords: [
      "reparación de tablaroca",
      "reparación de drywall",
      "igualación de textura",
      "tablaroca con daño de agua",
      "remoción de techo de gotelé",
      "contratista de tablaroca",
    ],
    image: "/images/services/drywall.jpg",
    imageAlt: "Contratista con casco instalando un panel de tablaroca en una pared interior",
    priceRange: "$",
    duration: "1–3 días",
  },
  {
    slug: "demolition",
    name: "Demolición",
    shortName: "Demolición",
    icon: "hammer",
    shortDescription:
      "Demolición interior segura y controlada — paredes, cocinas, baños, pisos — con retiro completo de escombros.",
    longDescription:
      "Las buenas remodelaciones comienzan con buena demolición. Nuestros equipos manejan demolición interior controlada — remoción de cocinas y baños, remoción de paredes, remoción de piso y azulejo, demolición de terrazas y cobertizos — con la protección y contención que mantiene el resto de su casa limpia e intacta. Identificamos paredes de carga antes de que algo se derrumbe, tapamos plomería y electricidad de forma segura, y retiramos cada resto de escombro. Ya sea que se esté preparando para su propia remodelación o la nuestra, dejamos un espacio limpio y listo para construir.",
    benefits: [
      {
        title: "Conciencia Estructural",
        description:
          "Paredes de carga identificadas antes del día de demolición, con soluciones de viga diseñada cuando las paredes necesitan salir.",
      },
      {
        title: "Contención de Polvo y Daño",
        description:
          "Barreras de plástico, protección de piso y máquinas de aire negativo mantienen el desorden de la demolición fuera del resto de su casa.",
      },
      {
        title: "Servicios Manejados de Forma Segura",
        description:
          "Las líneas de plomería, gas y electricidad se ubican, desconectan y tapan por profesionales calificados antes de la remoción.",
      },
      {
        title: "Retiro Completo de Escombros",
        description:
          "El transporte y desecho responsable están incluidos — reciclando metal y materiales limpios donde sea posible.",
      },
    ],
    processSteps: [
      {
        title: "Evaluación del Sitio",
        description:
          "Evaluamos la estructura, ubicamos servicios, marcamos elementos de carga, y proporcionamos una cotización firme.",
      },
      {
        title: "Protección y Desconexión",
        description:
          "Se colocan barreras de contención, se protegen los pisos, y los servicios en la zona de trabajo se tapan de forma segura.",
      },
      {
        title: "Demolición Controlada",
        description:
          "Remoción sistemática que quita lo que debe irse y protege lo que debe quedarse.",
      },
      {
        title: "Retiro y Acabado de Limpieza",
        description:
          "Todos los escombros se cargan y transportan el mismo día cuando es posible, dejando un espacio barrido y listo para construir.",
      },
    ],
    faqs: [
      {
        question: "¿Pueden saber si mi pared es de carga?",
        answer:
          "Sí. Evaluamos el enmarcado, la dirección de las vigas y lo que hay arriba de la pared. Si es de carga, le explicamos sus opciones — incluyendo instalar una viga diseñada para que la pared pueda salir de todas formas.",
      },
      {
        question: "¿El transporte de escombros está incluido?",
        answer:
          "Siempre. Nuestras cotizaciones de demolición incluyen carga, transporte y cuotas de desecho — sin cargos sorpresa de contenedor.",
      },
      {
        question: "¿Qué tan sucia será la demolición?",
        answer:
          "La demolición es inherentemente polvorienta, pero las barreras de contención, protección de piso y filtración de aire la mantienen confinada a la zona de trabajo. Barremos diariamente.",
      },
      {
        question: "¿Hacen demolición exterior como terrazas y cobertizos?",
        answer:
          "Sí — terrazas, cobertizos, pérgolas, cercas y remoción de concreto están todos dentro de nuestro alcance, incluyendo el transporte.",
      },
    ],
    keywords: [
      "contratista de demolición",
      "demolición interior",
      "remoción de cocina",
      "remoción de paredes",
      "remoción de terrazas",
      "transporte de escombros",
    ],
    image: "/images/services/demolition.jpg",
    imageAlt: "Habitación interior en remodelación con herramientas de demolición y materiales de construcción",
    priceRange: "$",
    duration: "1–4 días",
  },
];

export const getServiceEsMx = (slug: string): Service | undefined =>
  servicesEsMx.find((s) => s.slug === slug);
