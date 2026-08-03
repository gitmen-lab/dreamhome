export interface GalleryItem {
  id: string;
  title: string;
  serviceSlug: string;
  /** Real project photos default to "fort-worth-tx" (our home base) since we
   * don't track the exact city per photo yet — correct if you know the real
   * location. Left empty for stock photos so no specific city is claimed. */
  citySlug: string;
  image: string;
  alt: string;
  description: string;
  /** True for licensed stock photography (Pexels), not a completed project of ours. */
  isStock?: boolean;
}

export const galleryItems: GalleryItem[] = [
  // Bathroom remodeling — real project photos
  {
    id: "bathroom-before-outdated-tub",
    title: "Outdated Tub & Shower — Before",
    serviceSlug: "bathroom-remodeling",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/bathroom-remodel-before-outdated-tub-shower.jpg",
    alt: "Dated bathroom with green walls and an old tub-shower combo before remodeling",
    description: "A dated tub-shower combo before its full remodel — same bathroom, next photo.",
  },
  {
    id: "bathroom-after-tile-walk-in",
    title: "Subway Tile Walk-In Shower — After",
    serviceSlug: "bathroom-remodeling",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/bathroom-remodel-after-tile-walk-in-shower.jpg",
    alt: "Finished walk-in shower with white subway tile, shiplap accent wall, and patterned floor tile",
    description: "White subway tile, a shiplap accent wall, and patterned floor tile finish the space.",
  },
  {
    id: "bathroom-before-demo",
    title: "Bathroom Demo — Before",
    serviceSlug: "bathroom-remodeling",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/bathroom-remodel-before-demo-old-tub-shower.jpg",
    alt: "Original tub and subway tile shower surround with a section of wall removed before demo",
    description: "The original tub-shower surround, mid-demo, before a full retile and rebuild.",
  },
  {
    id: "bathroom-navy-accent-wall",
    title: "Navy Panel Wall & Pedestal Sinks",
    serviceSlug: "bathroom-remodeling",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/modern-bathroom-remodel-navy-accent-wall.jpg",
    alt: "Bathroom with a navy paneled accent wall, oval mirrors, and dual pedestal sinks",
    description: "A custom navy paneled accent wall with oval mirrors transforms a double-sink vanity.",
  },
  {
    id: "bathroom-waterproofing",
    title: "Shower Waterproofing in Progress",
    serviceSlug: "bathroom-remodeling",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/bathroom-shower-waterproofing-membrane-installation.jpg",
    alt: "Shower alcove with waterproof membrane board installed before tiling begins",
    description: "Waterproof membrane board goes on before a single tile — the part you never see again.",
  },
  {
    id: "bathroom-wainscoting-vanity",
    title: "Vanity Wainscoting Installation",
    serviceSlug: "bathroom-remodeling",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/bathroom-remodel-wainscoting-vanity-installation.jpg",
    alt: "Raw wood wainscoting panels being installed above a double bathroom vanity",
    description: "Custom wainscoting panels being fitted above a double vanity, ready for paint.",
  },
  {
    id: "bathroom-shower-niche-tile",
    title: "Wood Slat Shower Niche",
    serviceSlug: "bathroom-remodeling",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/bathroom-remodel-walk-in-shower-tile-installation.jpg",
    alt: "Walk-in shower alcove with marble-look tile and a wood slat accent wall under a pendant light",
    description: "Marble-look tile paired with a wood slat accent wall for a spa-style walk-in shower.",
  },
  {
    id: "bathroom-shiplap-wainscoting",
    title: "Powder Room Wainscoting",
    serviceSlug: "bathroom-remodeling",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/bathroom-remodel-shiplap-wainscoting-in-progress.jpg",
    alt: "Bathroom wall wainscoting installation in progress with raw wood panels",
    description: "Full-wall wainscoting going in panel by panel during a powder room refresh.",
  },

  // Interior & exterior painting — real project photos
  {
    id: "painting-door-refinish-before",
    title: "Entry Doors Before Refinishing",
    serviceSlug: "interior-exterior-painting",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/exterior-door-refinishing-before.jpg",
    alt: "Weathered wood double entry doors before staining and refinishing",
    description: "Sun-worn double entry doors before a full strip, stain, and refinish.",
  },
  {
    id: "painting-blue-gray-staircase",
    title: "Two-Story Staircase Repaint",
    serviceSlug: "interior-exterior-painting",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/interior-painting-blue-gray-staircase-wall.jpg",
    alt: "Freshly painted blue-gray two-story staircase wall with white trim",
    description: "A soft blue-gray refresh on a two-story stairwell, crisp against the white trim.",
  },
  {
    id: "painting-olive-living-room",
    title: "Olive Green Living Room Repaint",
    serviceSlug: "interior-exterior-painting",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/interior-painting-olive-green-living-room.jpg",
    alt: "Living room with freshly painted olive green walls and a brick fireplace",
    description: "A bold olive green wall color brings warmth to this living room's brick fireplace.",
  },
  {
    id: "painting-trim-prep",
    title: "Our Crew Prepping Trim Work",
    serviceSlug: "interior-exterior-painting",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/painter-prepping-wainscoting-trim-wall.jpg",
    alt: "My Dream Home Remodeling crew member taping off wainscoting before painting a staircase wall",
    description: "Careful taping and prep work before the first coat goes on new wainscoting.",
  },
  {
    id: "painting-blue-gray-great-room",
    title: "Great Room Color Refresh",
    serviceSlug: "interior-exterior-painting",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/interior-painting-blue-gray-great-room.jpg",
    alt: "Two-story great room with freshly painted blue-gray walls and a mounted TV",
    description: "A full-height great room repainted in a calming blue-gray from floor to vaulted ceiling.",
  },
  {
    id: "painting-accent-wall-barn-doors",
    title: "Accent Wall with Barn Door Pass-Through",
    serviceSlug: "interior-exterior-painting",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/interior-painting-accent-wall-barn-doors.jpg",
    alt: "Freshly painted blue-gray accent wall above sliding barn doors leading to a kitchen",
    description: "A fresh coat carries the same blue-gray tone up and over a barn door pass-through.",
  },

  // Kitchen remodeling — licensed stock (no completed project photos yet)
  {
    id: "kitchen-renovation-stock",
    title: "Kitchen Renovation in Progress",
    serviceSlug: "kitchen-remodeling",
    citySlug: "",
    image: "/images/gallery/kitchen-renovation-in-progress.jpg",
    alt: "Spacious kitchen mid-renovation with a ladder and tools set up during cabinet work",
    description: "Cabinet and finish work underway during a full kitchen renovation.",
    isStock: true,
  },

  // Flooring — licensed stock
  {
    id: "flooring-installer-stock",
    title: "Hardwood Flooring Installation",
    serviceSlug: "floor-installation",
    citySlug: "",
    image: "/images/gallery/flooring-installer-measuring-wood-panels.jpg",
    alt: "Flooring installer measuring and marking wood floor panels before cutting",
    description: "Careful measuring and cutting are what separate a tight floor from a gappy one.",
    isStock: true,
  },

  // Drywall repair — licensed stock
  {
    id: "drywall-repair-stock",
    title: "Drywall Patch & Finish",
    serviceSlug: "drywall-repair",
    citySlug: "",
    image: "/images/gallery/drywall-repair-plaster-finishing.jpg",
    alt: "Gloved hand applying joint compound to a drywall patch with a taping knife",
    description: "A smooth finish coat over a drywall patch, feathered so the repair disappears.",
    isStock: true,
  },

  // Demolition — licensed stock
  {
    id: "demolition-site-stock",
    title: "Interior Demolition Prep",
    serviceSlug: "demolition",
    citySlug: "",
    image: "/images/gallery/demolition-renovation-tools-ladder.jpg",
    alt: "Interior room mid-renovation with a ladder, framing, and demolition tools",
    description: "A room stripped down and staged for rebuild — the necessary first step on many projects.",
    isStock: true,
  },
];

export const getGalleryByService = (serviceSlug: string) =>
  galleryItems.filter((g) => g.serviceSlug === serviceSlug);

export const getGalleryByCity = (citySlug: string) =>
  galleryItems.filter((g) => g.citySlug === citySlug);
