import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getBlogPost, blogPostSlugs } from "@/data/blogPosts";
import { blogBodies } from "@/content/blog";
import {
  buildMetadata,
  articleSchema,
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/seo";
import { getService } from "@/data/services";
import { JsonLd } from "@/components/JsonLd";

interface Params {
  slug: string;
}

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return blogPostSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.heroImage.src,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const Body = blogBodies[post.slug];
  const service = post.relatedServiceSlug ? getService(post.relatedServiceSlug) : undefined;

  return (
    <article className="py-14 md:py-20">
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(post.faqs && post.faqs.length > 0 ? [faqSchema(post.faqs)] : []),
          ...(service ? [serviceSchema(service)] : []),
        ]}
      />
      <div className="container max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Back to Blog
        </Link>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {post.publishedDate}
          {post.updatedDate ? ` (updated ${post.updatedDate})` : ""}
        </p>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border">
          <Image
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="prose prose-slate mt-10 max-w-none">
          <Body />
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal">
              Frequently Asked Questions
            </h2>
            <dl className="mt-6 space-y-6">
              {post.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border bg-card p-6">
                  <dt className="font-semibold text-charcoal">{faq.question}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </article>
  );
}
