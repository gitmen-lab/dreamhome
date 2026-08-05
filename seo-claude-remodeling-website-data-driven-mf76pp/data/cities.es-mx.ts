import type { City } from "@/data/cities";
import { cities } from "@/data/cities";

/**
 * Spanish (es-MX) translations of the 20 real cities' descriptive copy, for
 * the /es-mx pilot. Slug/state/county/zipCodes/nearbyCities/coordinates/
 * population are real facts and identical to data/cities.ts — only
 * localDescription/housingNote/localHighlights/landmarks are translated
 * (proper place names kept as-is; only the surrounding prose is Spanish).
 *
 * DRAFT — needs the owner's review pass before this is treated as final.
 */
const localizedFields: Record<
  string,
  Pick<City, "localDescription" | "housingNote" | "localHighlights" | "landmarks">
> = {
  "denton-tx": {
    localDescription:
      "Hogar de dos universidades y una de las plazas más animadas del Norte de Texas, Denton combina casas estilo craftsman históricas cerca de la plaza con comunidades planificadas de rápido crecimiento al sur.",
    localHighlights: [
      "la Plaza de Denton",
      "el área de la Universidad de North Texas",
      "Robson Ranch",
      "Southridge",
    ],
    housingNote:
      "una mezcla de casas históricas cerca del centro que a menudo necesitan actualizaciones cuidadosas, y construcciones más nuevas al sur de Loop 288",
  },
  "haslet-tx": {
    localDescription:
      "Una comunidad de rápido crecimiento en el borde norte de Fort Worth, Haslet combina un ambiente de pueblo pequeño con vecindarios completamente nuevos, lotes más grandes, y fácil acceso al corredor de Alliance.",
    localHighlights: ["Sendera Ranch", "el corredor de Alliance", "Avondale", "Willow Springs"],
    housingNote:
      "construcción nueva en lotes generosos, donde los propietarios a menudo mejoran los acabados básicos de constructor",
  },
  "keller-tx": {
    localDescription:
      "Constantemente clasificada entre los mejores lugares para vivir en Texas, Keller cuenta con vecindarios establecidos de alto nivel, escuelas de primer nivel, y propietarios que invierten seriamente en sus propiedades.",
    localHighlights: ["Old Town Keller", "Hidden Lakes", "Marshall Ridge", "el Keller Town Center"],
    housingNote:
      "casas establecidas de los años 90 y 2000, donde las cocinas y baños principales son candidatos ideales para modernización",
  },
  "roanoke-tx": {
    localDescription:
      "Conocida como la 'Capital de la Cena Única de Texas,' la encantadora Oak Street de Roanoke sirve de ancla a una comunidad creciente de vecindarios nuevos y familias mejorando sus primeras casas.",
    localHighlights: ["Oak Street", "Fairway Ranch", "Highlands Glen", "el límite con Trophy Club"],
    housingNote:
      "casas familiares más nuevas donde los propietarios personalizan espacios de concepto abierto y áreas de vida exterior",
  },
  "watauga-tx": {
    localDescription:
      "Una comunidad unida y asequible en el noreste del Condado de Tarrant, Watauga está llena de casas sólidas de los años 70 a 90 que recompensan renovaciones inteligentes y enfocadas en el valor.",
    localHighlights: ["Capp Smith Park", "el corredor de Whitley Road", "Parkview", "Summerfields"],
    housingNote:
      "casas tipo rancho bien construidas de los años 70 a 90, donde cocinas, baños y pisos actualizados aumentan dramáticamente el valor",
  },
  "mesquite-tx": {
    localDescription:
      "La oficial 'Capital del Rodeo de Texas' en el borde este de Dallas, Mesquite ofrece vecindarios establecidos con verdadero carácter — y miles de casas listas para actualizaciones modernas.",
    localHighlights: ["el Rodeo de Mesquite", "Town East", "Creek Crossing", "Falcon's Lair"],
    housingNote:
      "casas de ladrillo establecidas de los años 70 a 2000, candidatas ideales para actualizaciones de cocina, baño y piso",
  },
  "arlington-tx": {
    localDescription:
      "Hogar de los Cowboys, los Rangers, y casi 400,000 residentes, Arlington abarca desde vecindarios de mediados de siglo cerca de UTA hasta comunidades más nuevas en el sur — todo dentro de nuestra área de servicio.",
    localHighlights: [
      "el Distrito de Entretenimiento",
      "el área de Dalworthington Gardens",
      "el sur de Arlington",
      "el distrito de UTA",
    ],
    housingNote:
      "un rango enorme, desde casitas de los años 50 hasta construcciones de los 2010, cada una necesitando un enfoque de remodelación diferente",
  },
  "grapevine-tx": {
    localDescription:
      "Con su histórica Main Street, vida junto al lago, y ubicación privilegiada junto al Aeropuerto DFW, Grapevine mezcla casas antiguas con encanto y propiedades de alto valor que merecen mano de obra de calidad.",
    localHighlights: ["la histórica Main Street", "el Lago Grapevine", "el distrito Vineyard", "Silver Lake"],
    housingNote:
      "casas con carácter cerca de Main Street y propiedades junto al lago donde los acabados de calidad importan",
  },
  "fort-worth-tx": {
    localDescription:
      "Desde los bungalows históricos de Fairmount hasta las construcciones nuevas del área de Alliance, Fort Worth es nuestra base — hemos remodelado cientos de casas en los maravillosamente variados vecindarios de Cowtown.",
    localHighlights: [
      "Fairmount",
      "Berkeley Place",
      "Mistletoe Heights",
      "Ryan Place",
      "Arlington Heights",
      "Crestline",
      "TCU/Westcliff",
      "Bluebonnet Hills",
      "Tanglewood",
      "Ridglea",
      "Wedgwood",
      "los Stockyards/North Side",
      "West 7th y el Distrito Cultural",
      "Westover Hills",
    ],
    housingNote:
      "de todo, desde bungalows de los años 20 que requieren renovación cuidadosa hasta construcciones modernas que necesitan mejoras personalizadas",
    landmarks: [
      "el Zoológico de Fort Worth",
      "el Museo de Arte Kimbell",
      "TCU",
      "los Fort Worth Stockyards",
      "los Trinity Trails",
    ],
  },
  "lake-worth-tx": {
    localDescription:
      "Una comunidad junto al lago al noroeste de Fort Worth, Lake Worth combina vecindarios establecidos y asequibles con propiedades frente al agua a lo largo de su lago homónimo.",
    localHighlights: ["la costa de Lake Worth", "el corredor de Jacksboro Highway", "Indian Oaks", "el área de Marine Creek"],
    housingNote:
      "propiedades junto al lago y casas establecidas donde actualizaciones inteligentes generan fuertes retornos",
  },
  "haltom-city-tx": {
    localDescription:
      "Una de las comunidades más establecidas del noreste del Condado de Tarrant, Haltom City está llena de casas sólidas de mediados de siglo donde una remodelación bien pensada rinde mucho.",
    localHighlights: ["el corredor de Broadway Avenue", "Buffalo Ridge", "el área de Little Fossil Park", "North Haltom"],
    housingNote:
      "casas sólidas de mediados de siglo con buena estructura, perfectas para transformaciones de cocina, baño y piso",
  },
  "argyle-tx": {
    localDescription:
      "Pastizales ondulados, lotes de una hectárea, y construcción nueva de alto nivel definen Argyle — una comunidad donde los propietarios esperan mano de obra que iguale su inversión.",
    localHighlights: ["Harvest", "Canyon Falls", "el área de 5T Ranch", "Old Town Argyle"],
    housingNote:
      "casas personalizadas y semi-personalizadas en lotes grandes donde los acabados premium y el trabajo de calidad son el estándar",
  },
  "flower-mound-tx": {
    localDescription:
      "Un suburbio de primer nivel del Condado de Denton entre el Lago Grapevine y el Lago Lewisville, Flower Mound cuenta con vecindarios meticulosamente cuidados donde las casas de los años 90 y 2000 están entrando en sus mejores años de remodelación.",
    localHighlights: ["Bridlewood", "Wellington", "el River Walk", "Lakeside DFW"],
    housingNote:
      "casas bien mantenidas de los años 90 y 2000 donde las cocinas y suites principales están listas para renovaciones modernas",
  },
  "justin-tx": {
    localDescription:
      "Un pueblo pequeño con gran crecimiento, Justin conserva su herencia del oeste mientras da la bienvenida a nuevos vecindarios — y a propietarios que quieren trabajo de calidad sin las molestias de la gran ciudad.",
    localHighlights: ["Old Town Justin", "Timberbrook", "Justin Crossing", "el corredor de FM 407"],
    housingNote:
      "una mezcla de propiedades estilo granja más antiguas y subdivisiones completamente nuevas, cada una con necesidades de remodelación distintas",
  },
  "decatur-tx": {
    localDescription:
      "La sede del Condado de Wise con una hermosa plaza de la corte histórica, Decatur combina casas centenarias, propiedades de rancho, y construcción nueva en el borde creciente del Metroplex.",
    localHighlights: ["la Plaza de la Corte", "el corredor de la Autopista 380", "Sunset Oaks", "ranchos rurales del Condado de Wise"],
    housingNote:
      "casas históricas cerca de la plaza y propiedades de rancho que requieren equipos versátiles y experimentados",
  },
  "grand-prairie-tx": {
    localDescription:
      "Extendiéndose desde la I-30 al sur hasta el Lago Joe Pool, Grand Prairie abarca tanto vecindarios establecidos de media ciudad como comunidades junto al lago en pleno auge — casi 200,000 residentes.",
    localHighlights: ["el Lago Joe Pool", "EpicCentral", "Westchester", "Mira Lagos"],
    housingNote:
      "de todo, desde casas de media ciudad de los años 60 hasta construcciones más nuevas junto al Lago Joe Pool",
  },
  "southlake-tx": {
    localDescription:
      "Una de las direcciones más prestigiosas de DFW, Southlake se define por casas personalizadas de lujo, Town Square, y propietarios que esperan — y reciben — un servicio de remodelación de primera clase.",
    localHighlights: ["Southlake Town Square", "Timarron", "Carillon", "el área de Monticello"],
    housingNote:
      "casas personalizadas de lujo donde los materiales premium, la mano de obra precisa, y la discreción no son negociables",
  },
  "springtown-tx": {
    localDescription:
      "Un pueblo del Condado de Parker con verdadero carácter campestre, Springtown sirve tanto a familias en el campo como en el pueblo — gente que valora la honestidad y el trabajo bien hecho.",
    localHighlights: ["la Plaza de Springtown", "el corredor de la Autopista 199", "terrenos rurales del Condado de Parker", "la zona de Pojo"],
    housingNote:
      "casas de granja, casas manufacturadas, y propiedades en el pueblo — ofrecemos la misma calidad a todas",
  },
  "colleyville-tx": {
    localDescription:
      "Una comunidad próspera y arbolada en el corazón del noreste del Condado de Tarrant, Colleyville cuenta con propiedades tipo finca y casas ejecutivas donde la remodelación de calidad protege inversiones serias.",
    localHighlights: ["Colleyville Boulevard", "Whittier Heights", "Remington Park", "el corredor de Pleasant Run"],
    housingNote:
      "casas ejecutivas y de finca de los años 80 a 2000 entrando en su ventana ideal de renovación",
  },
  "north-richland-hills-tx": {
    localDescription:
      "La tercera ciudad más grande del Condado de Tarrant, North Richland Hills ofrece vecindarios establecidos, escuelas sólidas, y decenas de miles de casas en sus años ideales de remodelación.",
    localHighlights: ["Iron Horse", "Hometown NRH", "el corredor de Davis Boulevard", "Smithfield"],
    housingNote:
      "vecindarios establecidos de los años 80 a 2000 donde cocinas, baños y pisos son las principales prioridades de remodelación",
  },
};

export const citiesEsMx: City[] = cities.map((city) => ({
  ...city,
  ...localizedFields[city.slug],
}));

export const getCityEsMx = (slug: string): City | undefined =>
  citiesEsMx.find((c) => c.slug === slug);

/** "Tarrant County" -> "Condado de Tarrant" for real Spanish-language county naming. */
export function countyLabelEs(county: string): string {
  return county.endsWith(" County") ? `Condado de ${county.replace(" County", "")}` : county;
}
