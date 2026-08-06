export interface City {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  zipCodes: string[];
  /** Slugs of nearby cities (must exist in this file) */
  nearbyCities: string[];
  localDescription: string;
  coordinates: { lat: number; lng: number };
  population: string;
  /** Local landmarks / neighborhoods used to make copy locally specific */
  localHighlights: string[];
  /** Typical housing stock note, used for locally relevant copy */
  housingNote: string;
  /** Well-known landmarks (not neighborhoods) used to ground "areas we serve" copy — optional, only add real ones */
  landmarks?: string[];
  /** Real permit-issuing office name for this city (city hall dept, or the county for unincorporated work) — only set when verified. */
  permitOffice?: string;
  /** Real, working URL to that office's permit/inspection page, if any. */
  permitUrl?: string;
  /** Real, city-specific permitting process notes (turnaround time, inspection scheduling quirks) — not generic "we pull permits" boilerplate. */
  permitProcessNote?: string;
  /**
   * Structured build-era range distinct from the prose `housingNote` above,
   * e.g. "1990s–2000s" — only set when explicitly stated/known, never
   * inferred or guessed.
   */
  buildEra?: string;
  /** Typical HOA/deed-restriction constraints affecting remodeling in this city's neighborhoods (exterior color approval, material limits, etc.) — only set when real and verified. */
  hoaNote?: string;
  /** Verified local climate/soil factor relevant to remodeling work here (soil movement, hail frequency, drainage, flood zone) — must be a sourced fact, not generic North Texas boilerplate. */
  climateSoilNote?: string;
}

export const cities: City[] = [
  {
    slug: "denton-tx",
    city: "Denton",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["76201", "76205", "76207", "76208", "76209", "76210"],
    nearbyCities: ["argyle-tx", "justin-tx", "flower-mound-tx", "roanoke-tx"],
    localDescription:
      "Home to two universities and one of the liveliest downtown squares in North Texas, Denton blends historic craftsman homes near the square with fast-growing master-planned communities to the south.",
    coordinates: { lat: 33.2148, lng: -97.1331 },
    population: "150,000+",
    localHighlights: [
      "the Denton Square",
      "University of North Texas area",
      "Robson Ranch",
      "Southridge",
    ],
    housingNote:
      "a mix of historic homes near downtown that often need careful updates and newer builds south of Loop 288",
    // TODO(yojainier): Permits in Denton — which office issues remodeling/plumbing/electrical permits (city hall, or Denton County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Denton — what decade(s) are most Denton homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Denton — do the Denton neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Denton — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Denton/Denton County that affects remodeling work?
  },
  {
    slug: "haslet-tx",
    city: "Haslet",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76052"],
    nearbyCities: ["fort-worth-tx", "keller-tx", "justin-tx", "watauga-tx"],
    localDescription:
      "A fast-growing community on the north edge of Fort Worth, Haslet pairs small-town feel with brand-new neighborhoods, larger lots, and easy access to the Alliance corridor.",
    coordinates: { lat: 32.9746, lng: -97.3478 },
    population: "3,500+",
    localHighlights: [
      "Sendera Ranch",
      "the Alliance corridor",
      "Avondale",
      "Willow Springs",
    ],
    housingNote:
      "newer construction on generous lots, where owners often upgrade builder-grade finishes",
    // TODO(yojainier): Permits in Haslet — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Haslet — what decade(s) are most Haslet homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Haslet — do the Haslet neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Haslet — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Haslet/Tarrant County that affects remodeling work?
  },
  {
    slug: "keller-tx",
    city: "Keller",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76244", "76248"],
    nearbyCities: [
      "southlake-tx",
      "watauga-tx",
      "north-richland-hills-tx",
      "haslet-tx",
    ],
    localDescription:
      "Consistently ranked among the best places to live in Texas, Keller features established upscale neighborhoods, top-rated schools, and homeowners who invest seriously in their properties.",
    coordinates: { lat: 32.9346, lng: -97.2517 },
    population: "45,000+",
    localHighlights: [
      "Old Town Keller",
      "Hidden Lakes",
      "Marshall Ridge",
      "the Keller Town Center",
    ],
    housingNote:
      "established 1990s–2000s homes where kitchens and primary baths are prime candidates for modernization",
    // TODO(yojainier): Permits in Keller — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    buildEra: "1990s–2000s",
    // TODO(yojainier): HOA in Keller — do the Keller neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Keller — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Keller/Tarrant County that affects remodeling work?
  },
  {
    slug: "roanoke-tx",
    city: "Roanoke",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["76262"],
    nearbyCities: ["justin-tx", "keller-tx", "southlake-tx", "haslet-tx"],
    localDescription:
      "Known as the 'Unique Dining Capital of Texas,' Roanoke's charming Oak Street anchors a growing community of newer neighborhoods and families upgrading their first move-up homes.",
    coordinates: { lat: 33.0043, lng: -97.2258 },
    population: "10,000+",
    localHighlights: [
      "Oak Street",
      "Fairway Ranch",
      "Highlands Glen",
      "the Trophy Club border",
    ],
    housingNote:
      "newer family homes where owners personalize open-concept spaces and outdoor living areas",
    // TODO(yojainier): Permits in Roanoke — which office issues remodeling/plumbing/electrical permits (city hall, or Denton County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Roanoke — what decade(s) are most Roanoke homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Roanoke — do the Roanoke neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Roanoke — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Roanoke/Denton County that affects remodeling work?
    // TODO(yojainier): Featured project for Roanoke — got one real completed project in Roanoke (any service) we can reference by project type, even without a client quote? Add it to data/testimonials.ts so this city gets a featured local project.
  },
  {
    slug: "watauga-tx",
    city: "Watauga",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76137", "76148"],
    nearbyCities: [
      "north-richland-hills-tx",
      "keller-tx",
      "haltom-city-tx",
      "fort-worth-tx",
    ],
    localDescription:
      "A close-knit, affordable community in northeast Tarrant County, Watauga is full of solid 1970s–90s homes that reward smart, value-focused renovations.",
    coordinates: { lat: 32.8579, lng: -97.2547 },
    population: "23,000+",
    localHighlights: [
      "Capp Smith Park",
      "the Whitley Road corridor",
      "Parkview",
      "Summerfields",
    ],
    housingNote:
      "well-built 1970s–90s ranch homes where updated kitchens, baths, and flooring dramatically boost value",
    // TODO(yojainier): Permits in Watauga — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    buildEra: "1970s–90s",
    // TODO(yojainier): HOA in Watauga — do the Watauga neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Watauga — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Watauga/Tarrant County that affects remodeling work?
  },
  {
    slug: "mesquite-tx",
    city: "Mesquite",
    state: "Texas",
    stateAbbr: "TX",
    county: "Dallas County",
    zipCodes: ["75149", "75150", "75181", "75185"],
    nearbyCities: ["grand-prairie-tx", "arlington-tx"],
    localDescription:
      "The official 'Rodeo Capital of Texas' on Dallas's eastern edge, Mesquite offers established neighborhoods with real character — and thousands of homes ready for modern updates.",
    coordinates: { lat: 32.7668, lng: -96.5992 },
    population: "150,000+",
    localHighlights: [
      "the Mesquite Rodeo",
      "Town East",
      "Creek Crossing",
      "Falcon's Lair",
    ],
    housingNote:
      "established brick homes from the 1970s–2000s, ideal candidates for kitchen, bath, and flooring updates",
    // TODO(yojainier): Permits in Mesquite — which office issues remodeling/plumbing/electrical permits (city hall, or Dallas County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    buildEra: "1970s–2000s",
    // TODO(yojainier): HOA in Mesquite — do the Mesquite neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Mesquite — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Mesquite/Dallas County that affects remodeling work?
  },
  {
    slug: "arlington-tx",
    city: "Arlington",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76001", "76002", "76006", "76010", "76012", "76013", "76015", "76016", "76017", "76018"],
    nearbyCities: ["grand-prairie-tx", "fort-worth-tx", "mesquite-tx"],
    localDescription:
      "Home of the Cowboys, the Rangers, and nearly 400,000 residents, Arlington spans everything from mid-century neighborhoods near UTA to newer communities in the south — all squarely in our service area.",
    coordinates: { lat: 32.7357, lng: -97.1081 },
    population: "395,000+",
    localHighlights: [
      "the Entertainment District",
      "Dalworthington Gardens area",
      "South Arlington",
      "the UTA district",
    ],
    housingNote:
      "an enormous range, from 1950s cottages to 2010s builds — each needing a different remodeling approach",
    // TODO(yojainier): Permits in Arlington — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Arlington — what decade(s) are most Arlington homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Arlington — do the Arlington neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Arlington — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Arlington/Tarrant County that affects remodeling work?
  },
  {
    slug: "grapevine-tx",
    city: "Grapevine",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76051", "76092"],
    nearbyCities: ["colleyville-tx", "southlake-tx", "flower-mound-tx", "keller-tx"],
    localDescription:
      "With its historic Main Street, lakeside living, and prime location beside DFW Airport, Grapevine mixes charming older homes with high-value properties that deserve quality craftsmanship.",
    coordinates: { lat: 32.9343, lng: -97.0781 },
    population: "50,000+",
    localHighlights: [
      "Historic Main Street",
      "Grapevine Lake",
      "the Vineyard district",
      "Silver Lake",
    ],
    housingNote:
      "character-rich older homes near Main Street and lakeside properties where quality finishes matter",
    // TODO(yojainier): Permits in Grapevine — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Grapevine — what decade(s) are most Grapevine homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Grapevine — do the Grapevine neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Grapevine — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Grapevine/Tarrant County that affects remodeling work?
  },
  {
    slug: "fort-worth-tx",
    city: "Fort Worth",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: [
      "76102", "76103", "76104", "76107", "76109", "76110", "76111", "76112",
      "76114", "76116", "76118", "76120", "76123", "76126", "76131", "76132",
      "76133", "76134", "76137", "76140", "76177", "76179", "76244",
    ],
    nearbyCities: [
      "haltom-city-tx",
      "watauga-tx",
      "lake-worth-tx",
      "haslet-tx",
      "arlington-tx",
    ],
    localDescription:
      "From historic Fairmount bungalows to Alliance-area new builds, Fort Worth is our home base — we've remodeled hundreds of homes across Cowtown's wonderfully varied neighborhoods.",
    coordinates: { lat: 32.7555, lng: -97.3308 },
    population: "960,000+",
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
      "the Stockyards/North Side",
      "West 7th & the Cultural District",
      "Westover Hills",
    ],
    housingNote:
      "everything from 1920s bungalows requiring careful renovation to modern builds needing custom upgrades",
    landmarks: [
      "the Fort Worth Zoo",
      "the Kimbell Art Museum",
      "TCU",
      "the Fort Worth Stockyards",
      "the Trinity Trails",
    ],
    // TODO(yojainier): Permits in Fort Worth — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Fort Worth — what decade(s) are most Fort Worth homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Fort Worth — do the Fort Worth neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Fort Worth — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Fort Worth/Tarrant County that affects remodeling work?
  },
  {
    slug: "lake-worth-tx",
    city: "Lake Worth",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76135"],
    nearbyCities: ["fort-worth-tx", "springtown-tx", "haslet-tx"],
    localDescription:
      "A lakeside community northwest of Fort Worth, Lake Worth combines affordable established neighborhoods with waterfront properties along its namesake lake.",
    coordinates: { lat: 32.8046, lng: -97.4453 },
    population: "4,900+",
    localHighlights: [
      "Lake Worth shoreline",
      "the Jacksboro Highway corridor",
      "Indian Oaks",
      "Marine Creek area",
    ],
    housingNote:
      "lakeside properties and established homes where smart updates deliver strong returns",
    // TODO(yojainier): Permits in Lake Worth — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Lake Worth — what decade(s) are most Lake Worth homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Lake Worth — do the Lake Worth neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Lake Worth — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Lake Worth/Tarrant County that affects remodeling work?
    // TODO(yojainier): Featured project for Lake Worth — got one real completed project in Lake Worth (any service) we can reference by project type, even without a client quote? Add it to data/testimonials.ts so this city gets a featured local project.
  },
  {
    slug: "haltom-city-tx",
    city: "Haltom City",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76117", "76137"],
    nearbyCities: [
      "watauga-tx",
      "north-richland-hills-tx",
      "fort-worth-tx",
    ],
    localDescription:
      "One of northeast Tarrant County's most established communities, Haltom City is full of sturdy mid-century homes where thoughtful remodeling goes a long way.",
    coordinates: { lat: 32.7996, lng: -97.2692 },
    population: "46,000+",
    localHighlights: [
      "the Broadway Avenue corridor",
      "Buffalo Ridge",
      "Little Fossil Park area",
      "North Haltom",
    ],
    housingNote:
      "solid mid-century homes with great bones, perfect for kitchen, bath, and flooring transformations",
    // TODO(yojainier): Permits in Haltom City — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Haltom City — what decade(s) are most Haltom City homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Haltom City — do the Haltom City neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Haltom City — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Haltom City/Tarrant County that affects remodeling work?
    // TODO(yojainier): Featured project for Haltom City — got one real completed project in Haltom City (any service) we can reference by project type, even without a client quote? Add it to data/testimonials.ts so this city gets a featured local project.
  },
  {
    slug: "argyle-tx",
    city: "Argyle",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["76226"],
    nearbyCities: ["denton-tx", "flower-mound-tx", "justin-tx", "roanoke-tx"],
    localDescription:
      "Rolling pastures, acre lots, and upscale new construction define Argyle — a community where homeowners expect craftsmanship that matches their investment.",
    coordinates: { lat: 33.1212, lng: -97.1834 },
    population: "5,500+",
    localHighlights: [
      "Harvest",
      "Canyon Falls",
      "the 5T Ranch area",
      "Old Town Argyle",
    ],
    housingNote:
      "custom and semi-custom homes on large lots where premium finishes and quality work are the standard",
    // TODO(yojainier): Permits in Argyle — which office issues remodeling/plumbing/electrical permits (city hall, or Denton County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Argyle — what decade(s) are most Argyle homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Argyle — do the Argyle neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Argyle — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Argyle/Denton County that affects remodeling work?
    // TODO(yojainier): Featured project for Argyle — got one real completed project in Argyle (any service) we can reference by project type, even without a client quote? Add it to data/testimonials.ts so this city gets a featured local project.
  },
  {
    slug: "flower-mound-tx",
    city: "Flower Mound",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["75022", "75028", "75077"],
    nearbyCities: ["grapevine-tx", "argyle-tx", "denton-tx", "southlake-tx"],
    localDescription:
      "A premier Denton County suburb between Grapevine Lake and Lewisville Lake, Flower Mound features meticulously kept neighborhoods where 1990s–2000s homes are entering prime remodeling years.",
    coordinates: { lat: 33.0146, lng: -97.0969 },
    population: "78,000+",
    localHighlights: [
      "Bridlewood",
      "Wellington",
      "the River Walk",
      "Lakeside DFW",
    ],
    housingNote:
      "well-maintained 1990s–2000s homes where kitchens and primary suites are ready for modern refreshes",
    // TODO(yojainier): Permits in Flower Mound — which office issues remodeling/plumbing/electrical permits (city hall, or Denton County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    buildEra: "1990s–2000s",
    // TODO(yojainier): HOA in Flower Mound — do the Flower Mound neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Flower Mound — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Flower Mound/Denton County that affects remodeling work?
  },
  {
    slug: "justin-tx",
    city: "Justin",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["76247"],
    nearbyCities: ["haslet-tx", "roanoke-tx", "argyle-tx", "denton-tx"],
    localDescription:
      "A small town with big growth, Justin holds onto its western heritage while welcoming new neighborhoods — and homeowners who want quality work without big-city hassle.",
    coordinates: { lat: 33.0848, lng: -97.2961 },
    population: "5,800+",
    localHighlights: [
      "Old Town Justin",
      "Timberbrook",
      "Justin Crossing",
      "the FM 407 corridor",
    ],
    housingNote:
      "a blend of older farmhouse-style properties and brand-new subdivisions, each with distinct remodeling needs",
    // TODO(yojainier): Permits in Justin — which office issues remodeling/plumbing/electrical permits (city hall, or Denton County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Justin — what decade(s) are most Justin homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Justin — do the Justin neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Justin — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Justin/Denton County that affects remodeling work?
    // TODO(yojainier): Featured project for Justin — got one real completed project in Justin (any service) we can reference by project type, even without a client quote? Add it to data/testimonials.ts so this city gets a featured local project.
  },
  {
    slug: "decatur-tx",
    city: "Decatur",
    state: "Texas",
    stateAbbr: "TX",
    county: "Wise County",
    zipCodes: ["76234"],
    nearbyCities: ["springtown-tx", "justin-tx", "denton-tx"],
    localDescription:
      "The Wise County seat with a beautiful historic courthouse square, Decatur mixes century-old homes, ranch properties, and new construction on the growing edge of the Metroplex.",
    coordinates: { lat: 33.2343, lng: -97.5861 },
    population: "7,000+",
    localHighlights: [
      "the Courthouse Square",
      "the Highway 380 corridor",
      "Sunset Oaks",
      "rural Wise County ranches",
    ],
    housingNote:
      "historic homes near the square and ranch properties that call for versatile, experienced crews",
    // TODO(yojainier): Permits in Decatur — which office issues remodeling/plumbing/electrical permits (city hall, or Wise County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Decatur — what decade(s) are most Decatur homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Decatur — do the Decatur neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Decatur — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Decatur/Wise County that affects remodeling work?
    // TODO(yojainier): Featured project for Decatur — got one real completed project in Decatur (any service) we can reference by project type, even without a client quote? Add it to data/testimonials.ts so this city gets a featured local project.
  },
  {
    slug: "grand-prairie-tx",
    city: "Grand Prairie",
    state: "Texas",
    stateAbbr: "TX",
    county: "Dallas County",
    zipCodes: ["75050", "75051", "75052", "75054", "75104"],
    nearbyCities: ["arlington-tx", "mesquite-tx", "fort-worth-tx"],
    localDescription:
      "Stretching from I-30 south to Joe Pool Lake, Grand Prairie covers established mid-city neighborhoods and booming lakeside communities alike — nearly 200,000 residents strong.",
    coordinates: { lat: 32.746, lng: -96.9978 },
    population: "200,000+",
    localHighlights: [
      "Joe Pool Lake",
      "EpicCentral",
      "Westchester",
      "Mira Lagos",
    ],
    housingNote:
      "everything from 1960s mid-city homes to newer lakeside builds near Joe Pool Lake",
    // TODO(yojainier): Permits in Grand Prairie — which office issues remodeling/plumbing/electrical permits (city hall, or Dallas County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Grand Prairie — what decade(s) are most Grand Prairie homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Grand Prairie — do the Grand Prairie neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Grand Prairie — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Grand Prairie/Dallas County that affects remodeling work?
    // TODO(yojainier): Featured project for Grand Prairie — got one real completed project in Grand Prairie (any service) we can reference by project type, even without a client quote? Add it to data/testimonials.ts so this city gets a featured local project.
  },
  {
    slug: "southlake-tx",
    city: "Southlake",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76092"],
    nearbyCities: ["keller-tx", "grapevine-tx", "colleyville-tx", "roanoke-tx"],
    localDescription:
      "One of DFW's most prestigious addresses, Southlake is defined by luxury custom homes, Town Square, and homeowners who expect — and receive — white-glove remodeling service.",
    coordinates: { lat: 32.9412, lng: -97.1342 },
    population: "31,000+",
    localHighlights: [
      "Southlake Town Square",
      "Timarron",
      "Carillon",
      "the Monticello area",
    ],
    housingNote:
      "luxury custom homes where premium materials, precise craftsmanship, and discretion are non-negotiable",
    // TODO(yojainier): Permits in Southlake — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Southlake — what decade(s) are most Southlake homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Southlake — do the Southlake neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Southlake — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Southlake/Tarrant County that affects remodeling work?
  },
  {
    slug: "springtown-tx",
    city: "Springtown",
    state: "Texas",
    stateAbbr: "TX",
    county: "Parker County",
    zipCodes: ["76082"],
    nearbyCities: ["lake-worth-tx", "decatur-tx", "fort-worth-tx"],
    localDescription:
      "A Parker County town with genuine country character, Springtown serves families on acreage and in town alike — folks who value straight talk and honest workmanship.",
    coordinates: { lat: 32.9662, lng: -97.6836 },
    population: "3,200+",
    localHighlights: [
      "the Springtown Square",
      "Highway 199 corridor",
      "rural Parker County acreage",
      "Pojo country",
    ],
    housingNote:
      "farmhouses, manufactured homes, and in-town properties — we bring the same quality to all of them",
    // TODO(yojainier): Permits in Springtown — which office issues remodeling/plumbing/electrical permits (city hall, or Parker County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    // TODO(yojainier): Build era for Springtown — what decade(s) are most Springtown homes we work on from? Only give a range you're confident is accurate.
    // TODO(yojainier): HOA in Springtown — do the Springtown neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Springtown — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Springtown/Parker County that affects remodeling work?
    // TODO(yojainier): Featured project for Springtown — got one real completed project in Springtown (any service) we can reference by project type, even without a client quote? Add it to data/testimonials.ts so this city gets a featured local project.
  },
  {
    slug: "colleyville-tx",
    city: "Colleyville",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76034"],
    nearbyCities: [
      "grapevine-tx",
      "southlake-tx",
      "keller-tx",
      "north-richland-hills-tx",
    ],
    localDescription:
      "An affluent, tree-lined community in the heart of northeast Tarrant County, Colleyville features estate properties and executive homes where quality remodeling protects serious investments.",
    coordinates: { lat: 32.8807, lng: -97.155 },
    population: "26,000+",
    localHighlights: [
      "Colleyville Boulevard",
      "Whittier Heights",
      "Remington Park",
      "the Pleasant Run corridor",
    ],
    housingNote:
      "executive and estate homes from the 1980s–2000s entering their prime renovation window",
    // TODO(yojainier): Permits in Colleyville — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    buildEra: "1980s–2000s",
    // TODO(yojainier): HOA in Colleyville — do the Colleyville neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in Colleyville — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to Colleyville/Tarrant County that affects remodeling work?
  },
  {
    slug: "north-richland-hills-tx",
    city: "North Richland Hills",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76180", "76182"],
    nearbyCities: [
      "watauga-tx",
      "keller-tx",
      "haltom-city-tx",
      "colleyville-tx",
    ],
    localDescription:
      "The third-largest city in Tarrant County, North Richland Hills offers established neighborhoods, strong schools, and tens of thousands of homes in their ideal remodeling years.",
    coordinates: { lat: 32.8343, lng: -97.2289 },
    population: "70,000+",
    localHighlights: [
      "Iron Horse",
      "Hometown NRH",
      "the Davis Boulevard corridor",
      "Smithfield",
    ],
    housingNote:
      "established 1980s–2000s neighborhoods where kitchens, baths, and floors are top remodeling priorities",
    // TODO(yojainier): Permits in North Richland Hills — which office issues remodeling/plumbing/electrical permits (city hall, or Tarrant County for unincorporated work)? Portal URL + typical turnaround or inspection-scheduling notes?
    buildEra: "1980s–2000s",
    // TODO(yojainier): HOA in North Richland Hills — do the North Richland Hills neighborhoods we work in most often have HOA rules affecting remodels (exterior color approval, roofing/siding material limits, etc.)? If so, what's the typical constraint?
    // TODO(yojainier): Climate/soil in North Richland Hills — any verified local factor (soil movement, hail frequency, drainage, flood zone) specific to North Richland Hills/Tarrant County that affects remodeling work?
  },
];

export const getCity = (slug: string): City | undefined =>
  cities.find((c) => c.slug === slug);

export const citySlugs = cities.map((c) => c.slug);
