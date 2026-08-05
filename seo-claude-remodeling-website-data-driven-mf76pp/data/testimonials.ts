export interface Testimonial {
  name: string;
  citySlug: string;
  /** Service slug the testimonial relates to */
  serviceSlug: string;
  rating: number;
  text: string;
  /** Spanish translation of `text` — same real review, translated wording. For the /es-mx pilot. */
  textEs?: string;
  project: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    citySlug: "keller-tx",
    serviceSlug: "kitchen-remodeling",
    rating: 5,
    text: "Our 1998 kitchen was stuck in the past. The team reworked the layout, installed gorgeous quartz counters, and finished two days ahead of schedule. The project manager texted us updates every single morning.",
    textEs:
      "Nuestra cocina de 1998 estaba atrapada en el pasado. El equipo rediseñó la distribución, instaló hermosas cubiertas de cuarzo, y terminó dos días antes de lo previsto. El gerente de proyecto nos enviaba actualizaciones por mensaje cada mañana.",
    project: "Full kitchen remodel",
    date: "2026-04",
  },
  {
    name: "James R.",
    citySlug: "fort-worth-tx",
    serviceSlug: "bathroom-remodeling",
    rating: 5,
    text: "They converted our cramped tub into a beautiful walk-in shower with frameless glass. The tile work is flawless — friends assume we spent twice what we did. Clean crew, honest pricing.",
    textEs:
      "Convirtieron nuestra tina estrecha en una hermosa regadera de entrada con vidrio sin marco. El trabajo de azulejo es impecable — nuestros amigos creen que gastamos el doble de lo que gastamos. Equipo limpio, precios honestos.",
    project: "Tub-to-shower conversion",
    date: "2026-03",
  },
  {
    name: "Melissa T.",
    citySlug: "denton-tx",
    serviceSlug: "interior-exterior-painting",
    rating: 5,
    text: "We had our 1940s bungalow near the square painted inside and out. The prep work was incredible — they repaired years of settling cracks before painting. It looks brand new but kept all its charm.",
    textEs:
      "Pintaron nuestro bungalow de los años 40 cerca de la plaza, por dentro y por fuera. El trabajo de preparación fue increíble — repararon años de grietas de asentamiento antes de pintar. Se ve completamente nuevo pero conservó todo su encanto.",
    project: "Full interior & exterior repaint",
    date: "2026-05",
  },
  {
    name: "David & Anna K.",
    citySlug: "flower-mound-tx",
    serviceSlug: "floor-installation",
    rating: 5,
    text: "2,100 square feet of luxury vinyl plank installed in three days, including moving all our furniture. The transitions between rooms are seamless. Best contractor experience we've had in Flower Mound.",
    textEs:
      "2,100 pies cuadrados de vinilo de lujo instalados en tres días, incluyendo mover todos nuestros muebles. Las transiciones entre habitaciones son perfectas. La mejor experiencia con un contratista que hemos tenido en Flower Mound.",
    project: "Whole-home LVP installation",
    date: "2026-02",
  },
  {
    name: "Robert H.",
    citySlug: "southlake-tx",
    serviceSlug: "kitchen-remodeling",
    rating: 5,
    text: "High-end work, period. Custom cabinets, a 10-foot island, designer lighting — every detail was executed precisely. They treated our home like their own for six weeks.",
    textEs:
      "Trabajo de alta gama, punto. Gabinetes personalizados, una isla de 10 pies, iluminación de diseñador — cada detalle se ejecutó con precisión. Trataron nuestra casa como si fuera suya durante seis semanas.",
    project: "Luxury kitchen renovation",
    date: "2026-01",
  },
  {
    name: "Patricia L.",
    citySlug: "watauga-tx",
    serviceSlug: "drywall-repair",
    rating: 5,
    text: "A slow roof leak destroyed part of our living room ceiling. They replaced the drywall and matched our knockdown texture perfectly — you cannot tell where the repair was. Fast and affordable.",
    textEs:
      "Una fuga lenta en el techo destruyó parte del techo de nuestra sala. Reemplazaron la tablaroca e igualaron nuestra textura knockdown perfectamente — no se puede notar dónde estuvo la reparación. Rápido y económico.",
    project: "Ceiling water damage repair",
    date: "2026-04",
  },
  {
    name: "Miguel A.",
    citySlug: "arlington-tx",
    serviceSlug: "demolition",
    rating: 5,
    text: "They removed the wall between our kitchen and dining room, installed a support beam, and hauled everything away in two days. Dust barriers kept the rest of the house spotless.",
    textEs:
      "Quitaron la pared entre nuestra cocina y el comedor, instalaron una viga de soporte, y se llevaron todo en dos días. Las barreras de polvo mantuvieron el resto de la casa impecable.",
    project: "Load-bearing wall removal",
    date: "2026-03",
  },
  {
    name: "Jennifer W.",
    citySlug: "grapevine-tx",
    serviceSlug: "bathroom-remodeling",
    rating: 5,
    text: "Our master bath went from builder-grade to spa-level. Heated floors, a soaking tub, marble-look porcelain everywhere. Done in 19 days, exactly as promised.",
    textEs:
      "Nuestro baño principal pasó de nivel constructor a nivel spa. Pisos con calefacción, una tina de inmersión, porcelanato con apariencia de mármol por todas partes. Terminado en 19 días, exactamente como prometieron.",
    project: "Master bathroom remodel",
    date: "2026-05",
  },
  {
    name: "Tom B.",
    citySlug: "north-richland-hills-tx",
    serviceSlug: "interior-exterior-painting",
    rating: 5,
    text: "Exterior repaint on our two-story in NRH. They power-washed, replaced rotted trim, caulked everything, and the finish looks fantastic. Fair price and zero surprises.",
    textEs:
      "Repintado exterior de nuestra casa de dos pisos en NRH. Lavaron a presión, reemplazaron molduras podridas, sellaron todo con calafateo, y el acabado se ve fantástico. Precio justo y cero sorpresas.",
    project: "Exterior repaint with trim repair",
    date: "2026-02",
  },
  {
    name: "Karen S.",
    citySlug: "haslet-tx",
    serviceSlug: "floor-installation",
    rating: 5,
    text: "We replaced builder carpet with engineered hardwood throughout the first floor of our Sendera Ranch home. Beautiful work, honest quote, and they left the house cleaner than they found it.",
    textEs:
      "Reemplazamos la alfombra de constructor con madera de ingeniería en todo el primer piso de nuestra casa en Sendera Ranch. Trabajo hermoso, cotización honesta, y dejaron la casa más limpia de lo que la encontraron.",
    project: "Engineered hardwood installation",
    date: "2026-06",
  },
  {
    name: "Bill & Donna P.",
    citySlug: "mesquite-tx",
    serviceSlug: "kitchen-remodeling",
    rating: 5,
    text: "Our 1985 kitchen needed everything. New cabinets, counters, backsplash, and lighting — all coordinated by one project manager who actually answered his phone. Worth every penny.",
    textEs:
      "Nuestra cocina de 1985 necesitaba de todo. Gabinetes nuevos, cubiertas, salpicadero e iluminación — todo coordinado por un gerente de proyecto que de verdad contestaba su teléfono. Valió cada centavo.",
    project: "Kitchen renovation",
    date: "2026-01",
  },
  {
    name: "Lauren G.",
    citySlug: "colleyville-tx",
    serviceSlug: "interior-exterior-painting",
    rating: 5,
    text: "Cabinet painting plus full interior repaint before we listed our home. Our realtor said it added real value — the house sold in four days over asking.",
    textEs:
      "Pintura de gabinetes más un repintado completo de interiores antes de poner la casa en venta. Nuestra agente dijo que agregó valor real — la casa se vendió en cuatro días por encima del precio pedido.",
    project: "Pre-sale interior & cabinet painting",
    date: "2026-04",
  },
];

export const getTestimonialsByService = (serviceSlug: string) =>
  testimonials.filter((t) => t.serviceSlug === serviceSlug);

export const getTestimonialsByCity = (citySlug: string) =>
  testimonials.filter((t) => t.citySlug === citySlug);
