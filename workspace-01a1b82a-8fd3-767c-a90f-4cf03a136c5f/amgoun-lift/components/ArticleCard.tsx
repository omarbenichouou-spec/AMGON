import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { ArticleMeta } from "@/lib/articles";

export function ArticleCard({ article, priority = false }: { article: ArticleMeta; priority?: boolean }) {
  return (
    <article className="article-card">
      <Link href={`/blog/${article.slug}`} className="article-card__image" tabIndex={-1} aria-hidden="true">
        <Image src={article.image} alt="" fill priority={priority} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        <span>{article.category}</span>
      </Link>
      <div className="article-card__body">
        <div className="article-card__meta"><span>{new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${article.publishedAt}T12:00:00Z`))}</span><span><Clock3 size={14} />{article.readingTime} min</span></div>
        <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link href={`/blog/${article.slug}`} className="text-link">Lire l’article<ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
