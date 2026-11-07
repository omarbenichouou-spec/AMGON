import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, FileCheck2 } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { getService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contrats de maintenance d’ascenseurs",
  description: "Demandez une proposition de contrat de maintenance d’ascenseur adaptée à votre installation avec AMGOUN LIFT. Échangez sur le suivi et les prestations.",
  alternates: { canonical: "/contrats-maintenance" },
};

export default function ContractsPage() {
  const service = getService("contrats-de-maintenance")!;
  return (
    <>
      <PageHero eyebrow="Un suivi organisé" title="Contrats de maintenance d’ascenseurs" description="Un suivi organisé selon les besoins de vos installations. Échangez avec AMGOUN LIFT pour définir les prestations et les conditions adaptées à votre situation." breadcrumbs={[{ label: "Contrats de maintenance" }]} />
      <section className="section"><div className="container service-feature-grid"><div className="service-feature-image"><Image src="/images/cabine-ascenseur.jpg" alt="Cabine d’ascenseur moderne illustrant le suivi d’une installation" fill priority sizes="(max-width: 960px) 100vw, 50vw" /></div><div className="service-feature-copy"><span className="service-card__icon"><FileCheck2 size={28} /></span><h2>Un cadre de suivi à définir ensemble.</h2><p>Un contrat de maintenance permet de formaliser les prestations et le cadre de suivi convenus pour votre ascenseur. AMGOUN LIFT vous invite à présenter votre installation et vos attentes afin d’étudier une proposition adaptée.</p><p>Le contrat doit permettre de comprendre les prestations incluses, leurs limites et les modalités de prise de contact. Il ne doit pas reposer sur des suppositions ou sur un simple intitulé commercial.</p><Link href="/contact?type=Contrat%20de%20maintenance" className="button button--primary">Demander une proposition de contrat<ArrowUpRight size={18} /></Link></div></div></section>
      <section className="section section--gray"><div className="container"><SectionHeader eyebrow="Les fondamentaux" title="Ce que la proposition doit clarifier" subtitle="Chaque point fait l’objet d’un échange et de conditions écrites. Aucun élément n’est inclus automatiquement." align="center" /><div className="service-link-grid">
        <article className="service-link-card"><span className="service-card__icon"><CheckCircle2 /></span><h3>L’organisation de l’entretien</h3><p>Le périmètre du suivi et les prestations attendues doivent être décrits en tenant compte de l’installation et de son environnement.</p></article>
        <article className="service-link-card"><span className="service-card__icon"><CheckCircle2 /></span><h3>Les demandes d’intervention</h3><p>Les canaux de contact et la manière de recevoir un signalement doivent être compris par les interlocuteurs du bâtiment.</p></article>
        <article className="service-link-card"><span className="service-card__icon"><CheckCircle2 /></span><h3>Les limites du contrat</h3><p>Réparations, pièces, exclusions et devis complémentaires ne doivent jamais être présumés. Leur traitement est à vérifier dans l’offre.</p></article>
      </div></div></section>
      <section className="section"><div className="container two-col-content"><div><span className="eyebrow"><span />Préparer votre demande</span><h2>Quelques informations suffisent pour commencer.</h2></div><div className="rich-text"><p>Indiquez votre ville, le type de bâtiment, le nombre d’ascenseurs et l’usage de l’équipement. Ajoutez les documents disponibles ou les difficultés déjà rencontrées. Si vous ne connaissez pas les références techniques, vous pouvez le préciser simplement.</p><p>AMGOUN LIFT ne publie ni prix, ni durée, ni nombre de visites, ni couverture de pièces sur ce site. Ces éléments doivent figurer dans une proposition correspondant à votre installation et faire l’objet d’un échange avant signature.</p></div></div></section>
      <section className="section section--gray"><div className="container faq-grid"><div><span className="eyebrow"><span />Questions fréquentes</span><h2 style={{ fontSize: "37px", margin: "14px 0" }}>Avant votre demande de contrat</h2><p>Des réponses pour préparer l’étude sans présumer des conditions.</p></div><FaqAccordion items={service.faqs} /></div></section>
      <CtaSection title="Étudions le suivi de votre installation." text="Sélectionnez « Contrat de maintenance » dans le formulaire et décrivez votre ascenseur pour demander une proposition adaptée." type="Contrat de maintenance" />
    </>
  );
}
