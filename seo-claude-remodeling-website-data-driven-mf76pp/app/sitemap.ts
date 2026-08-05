import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { blogPosts } from "@/data/blogPosts";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified: every page here is generated from the same source data
  // at build time, so a single build-time timestamp applied to all 158 URLs
  // would tell Google nothing about which pages actually changed. Add real
  // per-entry timestamps if/when content is tracked with real update dates.
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
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
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
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
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
    }))
  );

  return [
    ...staticPages,
    ...servicePages,
    ...servicePagesEsMx,
    ...cityPages,
    ...cityPagesEsMx,
    ...serviceCityPages,
    ...blogPages,
  ];
}
