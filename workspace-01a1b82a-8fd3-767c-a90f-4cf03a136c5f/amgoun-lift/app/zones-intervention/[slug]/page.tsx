import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { CtaSection } from "@/components/CtaSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getAllArticles } from "@/lib/articles";
import { absoluteUrl, cityPages, getCity, services, site } from "@/lib/site";

export function generateStaticParams() { return cityPages.map((city) => ({ slug: city.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/zones-intervention/${city.slug}` },
    openGraph: { title: city.metaTitle, description: city.metaDescription, url: absoluteUrl(`/zones-intervention/${city.slug}`), images: [{ url: "/images/hero-ascenseur.jpg", alt: `Services d’ascenseurs à ${city.name}` }] },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const allArticles = getAllArticles();
  const relatedArticles = city.relatedArticles.map((articleSlug) => allArticles.find((article) => article.slug === articleSlug)).filter((article) => article !== undefined);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Services d’ascenseurs à ${city.name}`,
    serviceType: "Maintenance, dépannage, réparation et installation d’ascenseurs",
    description: city.metaDescription,
    url: absoluteUrl(`/zones-intervention/${city.slug}`),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: { "@type": "City", name: city.name },
  };
  return (
    <>
      <PageHero eyebrow={`Services d’ascenseurs à ${city.name}`} title={city.h1} description={city.introduction} breadcrumbs={[{ label: "Zones d’intervention", href: "/zones-intervention" }, { label: city.name }]} />
      <section className="section"><div className="container two-col-content"><div><span className="eyebrow"><span />Votre bâtiment à {city.name}</span><h2>{city.contextTitle}</h2><div className="contact-availability contact-availability--light" style={{ marginTop: "25px" }}><span><MapPin size={16} />Zone d’intervention confirmée</span><p>Aucune adresse d’agence locale n’est revendiquée. Contact unique : {site.phoneDisplay}.</p></div></div><div className="rich-text">{city.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ul className="check-list">{["Maintenance et contrat de suivi", "Dépannage et réparation", "Installation selon le projet"].map((item) => <li key={item} style={{ color: "var(--text)" }}><CheckCircle2 size={18} />{item}</li>)}</ul></div></div></section>
      <section className="section section--gray"><div className="container"><SectionHeader eyebrow="Selon votre situation" title={city.situationsTitle} subtitle={`Trois manières de présenter votre demande à AMGOUN LIFT à ${city.name}, sans diagnostic improvisé ni engagement présumé.`} /><div className="service-link-grid">{city.situations.map((situation, index) => <article className="service-link-card" key={situation.title}><span className="city-card__number">0{index + 1}</span><h3>{situation.title}</h3><p>{situation.text}</p></article>)}</div></div></section>
      <section className="section"><div className="container"><SectionHeader eyebrow="Nos prestations locales" title={`Les services d’ascenseurs à ${city.name}`} subtitle="Accédez au détail de chaque service et présentez votre demande avec le type de prestation présélectionné." /><div className="service-link-grid">{services.map((service) => <article className="service-link-card" key={service.slug}><span className="service-card__icon"><ServiceIcon name={service.icon} /></span><h3>{service.title}</h3><p>{service.description}</p><Link href={`/services/${service.slug}`} className="text-link">Découvrir le service<ArrowUpRight size={16} /></Link></article>)}</div></div></section>
      <section className="emergency-band"><div className="container emergency-band__inner"><div className="emergency-band__text"><Phone size={30} /><div><strong>Une panne à signaler à {city.name} ?</strong><p>Disponibilité annoncée 24h/24 et 7j/7. Le délai éventuel est confirmé directement.</p></div></div><a href={`tel:${site.phoneInternational}`} className="button button--dark button--large">{site.phoneDisplay}<ArrowUpRight size={18} /></a></div></section>
      <section className="section"><div className="container faq-grid"><div><span className="eyebrow"><span />Questions locales</span><h2 style={{ fontSize: "37px", margin: "14px 0" }}>Vos questions à {city.name}</h2><p>Des réponses spécifiques à la prise de contact et aux services dans cette zone.</p></div><FaqAccordion items={city.faqs} /></div></section>
      <section className="section related-section"><div className="container"><div className="section-intro-row"><SectionHeader eyebrow="Guides pratiques" title="Pour aller plus loin" subtitle={`Des conseils utiles pour préparer votre demande d’ascenseur à ${city.name}.`} /><Link href="/blog" className="text-link">Tous les articles<ArrowUpRight size={16} /></Link></div><div className="article-grid">{relatedArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div></div></section>
      <CtaSection title={`Parlons de votre ascenseur à ${city.name}.`} text="Décrivez votre installation et votre besoin à AMGOUN LIFT pour demander une prise en charge ou une proposition adaptée." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
