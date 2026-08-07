import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { blogPosts, blogPostSlugs } from "@/data/blogPosts";
import { blogPostsEsMx, blogPostSlugsEsMx } from "@/data/blogPosts.es-mx";
import { SITE_URL, SERVICE_CITY_ES_MX } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified on these: they're generated from the same source data at
  // build time, so a single build-time timestamp would tell Google nothing
  // about which pages actually changed. Blog posts are the exception --
  // see blogPages/blogPagesEsMx below -- since those carry real tracked
  // publishedDate/updatedDate fields.
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${SITE_URL}/service-areas`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { "es-MX": `${SITE_URL}/es-mx/service-areas` } },
    },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/gallery`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/reviews`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    {
      url: `${SITE_URL}/bathtub-to-shower-conversion`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/bath-renovation-near-you`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/conversion-de-tina-a-regadera`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { "es-MX": `${SITE_URL}/es-mx/blog` } },
    },
    {
      url: `${SITE_URL}/es-mx`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { "en-US": `${SITE_URL}/` } },
    },
    {
      url: `${SITE_URL}/es-mx/service-areas`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { "en-US": `${SITE_URL}/service-areas` } },
    },
    {
      url: `${SITE_URL}/es-mx/blog`,
      changeFrequency: "weekly",
      priority: 0.65,
      alternates: { languages: { "en-US": `${SITE_URL}/blog` } },
    },
  ];

  // Unlike the generated pages above, blog posts carry real tracked
  // publishedDate/updatedDate fields, so a real lastModified is meaningful here.
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedDate ?? post.publishedDate,
    changeFrequency: "monthly",
    priority: 0.6,
    ...(blogPostSlugsEsMx.includes(post.slug) && {
      alternates: { languages: { "es-MX": `${SITE_URL}/es-mx/blog/${post.slug}` } },
    }),
  }));

  const blogPagesEsMx: MetadataRoute.Sitemap = blogPostsEsMx.map((post) => ({
    url: `${SITE_URL}/es-mx/blog/${post.slug}`,
    lastModified: post.updatedDate ?? post.publishedDate,
    changeFrequency: "monthly",
    priority: 0.55,
    // Only claim an English alternate when a real English post with this
    // exact slug exists -- some /es-mx posts are Spanish-only.
    ...(blogPostSlugs.includes(post.slug) && {
      alternates: { languages: { "en-US": `${SITE_URL}/blog/${post.slug}` } },
    }),
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
    alternates: {
      languages: { "es-MX": `${SITE_URL}/es-mx/services/${service.slug}` },
    },
  }));

  const servicePagesEsMx: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/es-mx/services/${service.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
    alternates: {
      languages: { "en-US": `${SITE_URL}/services/${service.slug}` },
    },
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE_URL}/service-areas/${city.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
    alternates: {
      languages: { "es-MX": `${SITE_URL}/es-mx/service-areas/${city.slug}` },
    },
  }));

  const cityPagesEsMx: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE_URL}/es-mx/service-areas/${city.slug}`,
    changeFrequency: "weekly",
    priority: 0.75,
    alternates: {
      languages: { "en-US": `${SITE_URL}/service-areas/${city.slug}` },
    },
  }));

  const serviceCityPages: MetadataRoute.Sitemap = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${SITE_URL}/services/${service.slug}/${city.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      ...(SERVICE_CITY_ES_MX[`${service.slug}:${city.slug}`] && {
        alternates: {
          languages: {
            "es-MX": `${SITE_URL}/es-mx/services/${service.slug}/${city.slug}`,
          },
        },
      }),
    }))
  );

  const serviceCityPagesEsMx: MetadataRoute.Sitemap = Object.keys(SERVICE_CITY_ES_MX).map(
    (combo) => {
      const [serviceSlug, citySlug] = combo.split(":");
      return {
        url: `${SITE_URL}/es-mx/services/${serviceSlug}/${citySlug}`,
        changeFrequency: "monthly" as const,
        priority: 0.65,
        alternates: {
          languages: { "en-US": `${SITE_URL}/services/${serviceSlug}/${citySlug}` },
        },
      };
    }
  );

  return [
    ...staticPages,
    ...servicePages,
    ...servicePagesEsMx,
    ...cityPages,
    ...cityPagesEsMx,
    ...serviceCityPages,
    ...serviceCityPagesEsMx,
    ...blogPages,
    ...blogPagesEsMx,
  ];
}
