import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos services d’ascenseurs au Maroc",
  description: "Découvrez les services AMGOUN LIFT : maintenance, contrat, dépannage, réparation et installation d’ascenseurs dans cinq villes du Maroc.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Nos expertises" title="Nos services d’ascenseurs" description="Des solutions adaptées à vos besoins, de l’entretien de votre équipement à l’étude d’un nouveau projet d’installation." breadcrumbs={[{ label: "Nos services" }]} />
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Un besoin, une réponse claire" title="Cinq prestations pour vos ascenseurs" subtitle="Chaque demande commence par la description de votre installation et de votre situation. Les actions et conditions sont ensuite étudiées sans engagement technique présumé." />
          <div className="service-link-grid">
            {services.map((service) => (
              <article className="service-link-card" key={service.slug}>
                <span className="service-card__icon"><ServiceIcon name={service.icon} /></span>
                <h3>{service.title}</h3><p>{service.description}</p>
                <Link href={`/services/${service.slug}`} className="text-link">Découvrir ce service<ArrowUpRight size={16} /></Link>
              </article>
            ))}
            <div className="service-link-card" style={{ background: "var(--orange-light)", borderColor: "#f2d4a8" }}>
              <span className="service-card__icon"><ArrowUpRight /></span><h3>Vous hésitez sur le service à choisir ?</h3><p>Décrivez simplement les faits ou votre projet. Nous vous aiderons à orienter votre demande.</p><Link href="/contact?type=Autre" className="text-link">Présenter mon besoin<ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gray">
        <div className="container two-col-content">
          <div><span className="eyebrow"><span />Notre manière d’échanger</span><h2>Des informations concrètes avant toute proposition.</h2></div>
          <div className="rich-text"><p>Un ascenseur ne se résume pas à une fiche produit. Son bâtiment, son usage, son historique et les signes constatés comptent pour comprendre votre demande. C’est pourquoi AMGOUN LIFT ne publie pas de prix, de délai d’arrivée ou de contenu de contrat applicables à tous.</p><p>Vous pouvez nous transmettre les informations dont vous disposez, même si elles sont incomplètes. Les éléments complémentaires nécessaires seront précisés lors des échanges. Ne tentez jamais d’inspecter vous-même une gaine, une armoire ou un mécanisme pour compléter votre message.</p></div>
        </div>
      </section>
      <CtaSection title="Quel service correspond à votre besoin ?" text="Présentez votre situation à AMGOUN LIFT. Nous étudierons votre demande de maintenance, réparation ou installation." />
    </>
  );
}
