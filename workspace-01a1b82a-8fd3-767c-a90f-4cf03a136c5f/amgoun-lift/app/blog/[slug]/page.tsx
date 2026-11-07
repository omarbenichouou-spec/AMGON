import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BookOpen, CalendarDays, Clock3, Phone } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { ShareButtons } from "@/components/ShareButtons";
import { formatArticleDate, getAllArticles, getArticle, getRelatedArticles } from "@/lib/articles";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() { return getAllArticles().map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: { type: "article", title: article.metaTitle, description: article.metaDescription, url: absoluteUrl(`/blog/${article.slug}`), publishedTime: article.publishedAt, modifiedTime: article.updatedAt || article.publishedAt, images: [{ url: article.image, alt: article.imageAlt }] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  const related = getRelatedArticles(article);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: absoluteUrl(article.image),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    inLanguage: "fr-MA",
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": absoluteUrl("/#organization") },
    articleSection: article.category,
  };
  return (
    <>
      <article>
        <header className="article-hero">
          <div className="container"><Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: article.category }]} light /></div>
          <div className="container article-hero__content"><span className="article-category">{article.category}</span><h1>{article.title}</h1><p>{article.excerpt}</p><div className="article-byline"><span><CalendarDays size={14} />Publié le {formatArticleDate(article.publishedAt)}</span>{article.updatedAt && article.updatedAt !== article.publishedAt && <span>Mis à jour le {formatArticleDate(article.updatedAt)}</span>}<span><Clock3 size={14} />{article.readingTime} min de lecture</span></div></div>
          <div className="article-hero__image"><Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 1100px) 100vw, 1100px" /></div>
        </header>
        <div className="article-body-section"><div className="container article-layout"><div className="article-content" dangerouslySetInnerHTML={{ __html: article.contentHtml }} /><aside className="article-sidebar" aria-label="Informations et contact"><div className="article-sidebar__card"><span className="eyebrow"><span />Votre installation</span><h2>Besoin d’une réponse adaptée ?</h2><p>Ce guide est informatif. Présentez votre équipement et les faits observés pour demander une prise en charge.</p><Link href="/contact" className="button button--primary">Contacter AMGOUN LIFT<ArrowUpRight size={15} /></Link><a className="article-sidebar__phone" href={`tel:${site.phoneInternational}`}><Phone size={15} />{site.phoneDisplay}</a></div><div className="article-toc"><span><BookOpen size={13} style={{ verticalAlign: "middle", marginRight: "5px" }} />À retenir</span><p>Ne réalisez aucun contrôle technique ou accès à la gaine vous-même. Les opérations relèvent de professionnels compétents.</p></div></aside></div><div className="container article-layout"><div><div className="article-notice"><p><strong>Information générale :</strong> ce contenu ne remplace ni l’examen de votre installation, ni les consignes de l’équipement, ni les instructions des secours ou des professionnels habilités. Les prestations et conditions d’AMGOUN LIFT sont à confirmer directement.</p></div><ShareButtons title={article.title} /></div></div></div>
      </article>
      <section className="section related-section"><div className="container"><SectionHeader eyebrow="Lecture recommandée" title="Articles liés" subtitle="Poursuivez avec d’autres conseils sur les ascenseurs et leur suivi." /><div className="article-grid">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
