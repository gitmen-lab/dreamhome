import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPost } from "@/data/blogPosts";

interface RelatedArticlesProps {
  /** Hand-curated slugs from the article's internal-link-map entry. */
  slugs: string[];
  heading?: string;
}

/** Compact internal-linking block listing related blog posts (hub <-> supporting articles). */
export function RelatedArticles({ slugs, heading = "Related Reading" }: RelatedArticlesProps) {
  const posts = slugs.map(getBlogPost).filter((post) => post !== undefined);
  if (posts.length === 0) return null;

  return (
    <nav aria-label={heading} className="mt-14 border-t pt-8">
      <h2 className="text-2xl font-bold tracking-tight text-charcoal">{heading}</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center justify-between gap-3 rounded-lg border bg-card p-4 text-sm font-medium text-charcoal transition-colors hover:border-primary hover:text-primary"
            >
              {post.title}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
