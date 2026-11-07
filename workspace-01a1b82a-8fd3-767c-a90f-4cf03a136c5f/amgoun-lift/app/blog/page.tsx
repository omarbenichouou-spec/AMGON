import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { articleCategories, getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Conseils et actualités sur les ascenseurs",
  description: "Guides pratiques en français sur la maintenance, le dépannage, la sécurité, les contrats et l’installation d’ascenseurs au Maroc par AMGOUN LIFT.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ categorie?: string; recherche?: string }> }) {
  const { categorie = "Tous", recherche = "" } = await searchParams;
  const articles = getAllArticles();
  const category = articleCategories.includes(categorie as (typeof articleCategories)[number]) ? categorie : "Tous";
  return <><PageHero eyebrow="Le blog AMGOUN LIFT" title="Conseils et actualités sur les ascenseurs" description="Des guides utiles pour comprendre l’entretien, réagir prudemment à une panne, préparer un contrat ou étudier un projet d’installation." breadcrumbs={[{ label: "Blog" }]} /><section className="section"><div className="container"><BlogIndex articles={articles} initialCategory={category} initialSearch={recherche.slice(0, 100)} /></div></section><CtaSection title="Une question sur votre installation ?" text="Nos articles donnent des repères généraux. Pour votre ascenseur, décrivez votre situation à AMGOUN LIFT afin d’étudier la demande." /></>;
}
