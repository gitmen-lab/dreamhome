import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { blogPostSlugs } from "@/data/blogPosts";
import { blogPostSlugsEsMx } from "@/data/blogPosts.es-mx";

/**
 * Bidirectional English <-> Spanish path map, covering only the pages that
 * actually have a real Spanish counterpart in the /es-mx pilot (homepage +
 * 6 service pages). Add an entry here whenever another page gets translated
 * -- the language-switcher links in Navbar/NavbarEs are driven entirely by
 * this map, so an untranslated page never shows a dead "ES"/"EN" link.
 */
export const enToEs: Record<string, string> = {
  "/": "/es-mx",
  "/service-areas": "/es-mx/service-areas",
  ...Object.fromEntries(
    services.map((s) => [`/services/${s.slug}`, `/es-mx/services/${s.slug}`])
  ),
  ...Object.fromEntries(
    cities.map((c) => [`/service-areas/${c.slug}`, `/es-mx/service-areas/${c.slug}`])
  ),
  "/blog": "/es-mx/blog",
  ...Object.fromEntries(
    blogPostSlugs
      .filter((slug) => blogPostSlugsEsMx.includes(slug))
      .map((slug) => [`/blog/${slug}`, `/es-mx/blog/${slug}`])
  ),
};

export const esToEn: Record<string, string> = Object.fromEntries(
  Object.entries(enToEs).map(([en, es]) => [es, en])
);
