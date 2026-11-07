import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { cityPages, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/a-propos", "/services", "/contrats-maintenance", "/zones-intervention", "/blog", "/faq", "/contact", "/mentions-legales"];
  return [
    ...staticPages.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: path === "/blog" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.8 })),
    ...services.map((service) => ({ url: `${site.url}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...cityPages.map((city) => ({ url: `${site.url}/zones-intervention/${city.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...getAllArticles().map((article) => ({ url: `${site.url}/blog/${article.slug}`, lastModified: new Date(`${article.updatedAt || article.publishedAt}T12:00:00Z`), changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
