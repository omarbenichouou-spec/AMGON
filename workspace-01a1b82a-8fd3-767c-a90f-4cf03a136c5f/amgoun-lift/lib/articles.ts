import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "content/articles");

import { articleCategories, type ArticleCategory } from "./article-taxonomy";
export { articleCategories, type ArticleCategory } from "./article-taxonomy";

export type ArticleMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: ArticleCategory;
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt?: string;
  draft: boolean;
  featured: boolean;
  related: string[];
  readingTime: number;
};

export type Article = ArticleMeta & { contentHtml: string };

function readArticleFile(fileName: string): { meta: ArticleMeta; content: string } {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(articlesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const words = content.trim().split(/\s+/).length;
  const dateValue = (value: unknown) => {
    if (!value) return undefined;
    if (value instanceof Date) return value.toISOString().slice(0, 10);
    return String(value).slice(0, 10);
  };

  return {
    meta: {
      slug,
      title: String(data.title),
      metaTitle: String(data.metaTitle || data.title),
      metaDescription: String(data.metaDescription || data.excerpt),
      excerpt: String(data.excerpt),
      category: data.category as ArticleCategory,
      image: String(data.image || "/images/cabine-ascenseur.jpg"),
      imageAlt: String(data.imageAlt || "Ascenseur moderne"),
      publishedAt: dateValue(data.publishedAt) || "",
      updatedAt: dateValue(data.updatedAt),
      draft: data.draft === true,
      featured: data.featured === true,
      related: Array.isArray(data.related)
        ? data.related.map((item) => typeof item === "string" ? item : String(item?.slug || "")).filter(Boolean)
        : [],
      readingTime: Math.max(1, Math.ceil(words / 210)),
    },
    content,
  };
}

export function getAllArticles(includeDrafts = false): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => readArticleFile(fileName).meta)
    .filter((article) => includeDrafts || !article.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || Number(b.featured) - Number(a.featured));
}

export async function getArticle(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const { meta, content } = readArticleFile(`${slug}.md`);
  if (meta.draft) return null;
  const processedContent = await remark().use(html).process(content);
  return { ...meta, contentHtml: processedContent.toString() };
}

export function getRelatedArticles(article: ArticleMeta, limit = 3): ArticleMeta[] {
  const all = getAllArticles().filter((candidate) => candidate.slug !== article.slug);
  const preferred = article.related
    .map((slug) => all.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is ArticleMeta => Boolean(candidate));
  const sameCategory = all.filter(
    (candidate) => candidate.category === article.category && !preferred.some((item) => item.slug === candidate.slug),
  );
  const others = all.filter(
    (candidate) =>
      candidate.category !== article.category &&
      !preferred.some((item) => item.slug === candidate.slug),
  );
  return [...preferred, ...sameCategory, ...others].slice(0, limit);
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
