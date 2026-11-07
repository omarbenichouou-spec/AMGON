import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Eye, MessageSquareText, ShieldCheck } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "À propos d’AMGOUN LIFT",
  description: "Découvrez l’approche d’AMGOUN LIFT : écoute, sécurité, suivi des installations et solutions d’ascenseurs adaptées aux besoins de chaque client.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Notre entreprise" title="À propos d’AMGOUN LIFT" description="Votre sécurité, notre engagement. Une approche professionnelle centrée sur vos installations, leurs usages et vos besoins de suivi." breadcrumbs={[{ label: "À propos" }]} />
      <section className="section">
        <div className="container about-grid">
          <div className="about-visual"><div className="about-image"><Image src="/images/cabine-ascenseur.jpg" alt="Cabine d’ascenseur contemporaine aux finitions soignées" fill priority sizes="(max-width: 960px) 100vw, 45vw" /></div><div className="about-image-note"><ShieldCheck size={25} /><strong>Votre sécurité, notre engagement.</strong><p>Le slogan qui guide la présentation de nos services.</p></div></div>
          <div className="about-copy"><span className="eyebrow"><span />Notre démarche</span><h2>Des solutions adaptées, sans réponse toute faite.</h2><p>AMGOUN LIFT accompagne ses clients dans leurs besoins en maintenance, dépannage, réparation et installation d’ascenseurs. Notre démarche repose sur la sécurité, le suivi des installations et des solutions adaptées aux besoins de chaque client.</p><p>Nous commençons par les informations disponibles : votre bâtiment, votre équipement, son utilisation et votre demande. Cette approche permet d’étudier les prestations sans supposer qu’une même solution convient à toutes les installations.</p></div>
        </div>
      </section>
      <section className="section section--gray">
        <div className="container"><SectionHeader eyebrow="Nos principes de travail" title="Une relation claire, de la demande au suivi" subtitle="Notre présentation s’appuie sur des informations confirmées et sur la compréhension de votre situation." align="center" />
          <div className="service-link-grid">
            <article className="service-link-card"><span className="service-card__icon"><MessageSquareText /></span><h3>Écouter avant de proposer</h3><p>Votre description, les contraintes du bâtiment et les signes observés servent de point de départ. Nous ne vous demandons pas de poser un diagnostic technique.</p></article>
            <article className="service-link-card"><span className="service-card__icon"><ShieldCheck /></span><h3>Replacer la sécurité au centre</h3><p>Les gaines, machineries, armoires et réglages restent réservés aux professionnels. Nos contenus rappellent des réflexes prudents sans encourager de manipulation.</p></article>
            <article className="service-link-card"><span className="service-card__icon"><Eye /></span><h3>Rendre les prestations lisibles</h3><p>Un contrat ou un devis doit permettre de comprendre les actions, les limites et les conditions. Aucun prix ou niveau de couverture n’est présumé en ligne.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-col-content"><div><span className="eyebrow"><span />Nos domaines d’activité</span><h2>Un accompagnement autour de la vie de votre ascenseur.</h2></div><div className="rich-text"><p>La maintenance organise le suivi de l’équipement. Le dépannage répond à une indisponibilité signalée. La réparation rassemble les actions définies après examen d’un dysfonctionnement. L’installation s’étudie à partir des caractéristiques du projet.</p><p>AMGOUN LIFT reçoit également les demandes de contrats de maintenance afin de discuter d’un cadre de suivi adapté. Les prestations, les exclusions et les conditions doivent être précisées dans la proposition remise au client.</p><ul className="check-list"><li style={{ color: "var(--text)" }}><CheckCircle2 size={18} />Marrakech, Casablanca, Mohammedia, Rabat et Bouznika</li><li style={{ color: "var(--text)" }}><CheckCircle2 size={18} />Un contact unique : 06 90 82 26 44</li><li style={{ color: "var(--text)" }}><CheckCircle2 size={18} />Disponibilité annoncée 24h/24 et 7j/7</li></ul></div></div>
      </section>
      <CtaSection title="Faisons connaissance autour de votre besoin." text="Présentez votre ascenseur, votre bâtiment ou votre projet à AMGOUN LIFT pour engager un échange clair." />
    </>
  );
}
