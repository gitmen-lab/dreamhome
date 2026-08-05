import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { blogPostsEsMx } from "@/data/blogPosts.es-mx";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: `Guías y Consejos de Remodelación | ${company.name}`,
  description: `Guías prácticas sobre remodelación de cocinas, baños, y casas para propietarios de DFW, de parte de ${company.name}.`,
  path: "/es-mx/blog",
  locale: "es_MX",
  alternateLanguages: { "en-US": "/blog" },
});

export default function BlogIndexPageEsMx() {
  return (
    <div className="container section-padding">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
          Guías y Consejos de Remodelación
        </h1>
        <p className="mt-4 text-muted-foreground">
          Orientación práctica y real para propietarios de DFW, del equipo de {company.name}.
        </p>
      </div>

      {blogPostsEsMx.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">
          Nuevas publicaciones en camino — vuelva pronto.
        </p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPostsEsMx.map((post) => (
            <Link
              key={post.slug}
              href={`/es-mx/blog/${post.slug}`}
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
