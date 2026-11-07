"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { ArticleMeta } from "@/lib/articles";
import { articleCategories } from "@/lib/article-taxonomy";
import { ArticleCard } from "./ArticleCard";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function BlogIndex({ articles, initialCategory = "Tous", initialSearch = "" }: { articles: ArticleMeta[]; initialCategory?: string; initialSearch?: string }) {
  const [category, setCategory] = useState(articleCategories.includes(initialCategory as (typeof articleCategories)[number]) ? initialCategory : "Tous");
  const [search, setSearch] = useState(initialSearch);
  const [visible, setVisible] = useState(6);

  useEffect(() => setVisible(6), [category, search]);

  const filtered = useMemo(() => {
    const query = normalize(search.trim());
    return articles.filter((article) => {
      const inCategory = category === "Tous" || article.category === category;
      const haystack = normalize(`${article.title} ${article.excerpt} ${article.category}`);
      return inCategory && (!query || haystack.includes(query));
    });
  }, [articles, category, search]);

  return (
    <>
      <div className="blog-tools">
        <div className="blog-search">
          <Search size={19} aria-hidden="true" />
          <label htmlFor="article-search" className="sr-only">Rechercher dans les articles</label>
          <input id="article-search" type="search" placeholder="Rechercher un conseil, une panne, un contrat…" value={search} onChange={(event) => setSearch(event.target.value)} />
          {search && <button type="button" onClick={() => setSearch("")} aria-label="Effacer la recherche"><X size={17} /></button>}
        </div>
        <div className="blog-categories" aria-label="Filtrer par catégorie">
          {["Tous", ...articleCategories].map((item) => <button key={item} type="button" className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
      </div>
      <p className="blog-results" aria-live="polite">{filtered.length} article{filtered.length > 1 ? "s" : ""}{category !== "Tous" ? ` dans « ${category} »` : ""}{search ? ` pour « ${search} »` : ""}</p>
      {filtered.length > 0 ? (
        <>
          <div className="article-grid">
            {filtered.slice(0, visible).map((article, index) => <ArticleCard key={article.slug} article={article} priority={index < 3} />)}
          </div>
          {visible < filtered.length && <div className="load-more"><button type="button" className="button button--outline-dark" onClick={() => setVisible((count) => count + 6)}>Afficher plus d’articles<span>{Math.min(6, filtered.length - visible)} sur {filtered.length - visible}</span></button></div>}
        </>
      ) : (
        <div className="empty-state"><Search size={34} /><h2>Aucun article trouvé</h2><p>Essayez un autre mot-clé ou affichez toutes les catégories.</p><button type="button" className="button button--primary" onClick={() => { setSearch(""); setCategory("Tous"); }}>Voir tous les articles</button></div>
      )}
    </>
  );
}
