import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blogPosts";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: `Remodeling Guides & Advice | ${company.name}`,
  description: `Practical guides on kitchen, bathroom, and home remodeling for DFW homeowners, from ${company.name}.`,
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <div className="container section-padding">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
          Remodeling Guides &amp; Advice
        </h1>
        <p className="mt-4 text-muted-foreground">
          Practical, real-world guidance for DFW homeowners, from the {company.name} team.
        </p>
      </div>

      {blogPosts.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">
          New posts are on the way — check back soon.
        </p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={post.heroImage.src}
                  alt={post.heroImage.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground">{post.publishedDate}</p>
                <h2 className="mt-1 font-semibold text-charcoal">{post.title}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
