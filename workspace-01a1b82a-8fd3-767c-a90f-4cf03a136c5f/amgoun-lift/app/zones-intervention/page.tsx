import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { cityPages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zones d’intervention ascenseurs au Maroc",
  description: "AMGOUN LIFT intervient à Marrakech, Casablanca, Mohammedia, Rabat et Bouznika pour la maintenance, le dépannage, la réparation et l’installation d’ascenseurs.",
  alternates: { canonical: "/zones-intervention" },
};

export default function AreasPage() {
  return (
    <>
      <PageHero eyebrow="Cinq villes confirmées" title="Nos zones d’intervention au Maroc" description="AMGOUN LIFT propose ses services de maintenance, de dépannage, de réparation et d’installation d’ascenseurs à Marrakech, Casablanca, Mohammedia, Rabat et Bouznika." breadcrumbs={[{ label: "Zones d’intervention" }]} />
      <section className="section"><div className="container"><SectionHeader eyebrow="Choisissez votre ville" title="Des informations locales, sans adresse inventée" subtitle="Chaque page présente les services disponibles et des conseils adaptés aux situations que vous pouvez rencontrer dans votre bâtiment. Le numéro de contact reste le même dans toutes les zones." /><div className="cities-grid">{cityPages.map((city) => <Link key={city.slug} href={`/zones-intervention/${city.slug}`} className="city-card"><span className="city-card__number">{city.number}</span><h3>{city.name}</h3><p>{city.metaDescription}</p><ArrowDownRight size={20} /></Link>)}</div></div></section>
      <section className="section section--gray"><div className="container two-col-content"><div><span className="eyebrow"><span />Une autre localisation ?</span><h2>Demandez si votre besoin peut être étudié.</h2></div><div className="rich-text"><p>Les cinq villes ci-dessus sont les seules zones confirmées affichées par AMGOUN LIFT. Si votre bâtiment se trouve ailleurs, vous pouvez sélectionner « Autre » dans le formulaire et décrire la localisation dans votre message.</p><p>Cette demande ne signifie pas que la zone est couverte automatiquement. AMGOUN LIFT pourra vous répondre directement. Aucune agence, adresse locale ou délai d’arrivée n’est annoncé sans confirmation.</p><Link href="/contact?type=Autre" className="button button--dark">Présenter ma localisation<ArrowUpRight size={17} /></Link></div></div></section>
      <section className="section--compact"><div className="container"><div className="info-panel"><h3><MapPin size={20} style={{ verticalAlign: "middle", marginRight: "8px", color: "var(--orange-dark)" }} />Un seul numéro pour les cinq villes</h3><p>Pour une demande urgente, appelez le <strong>06 90 82 26 44</strong>. Pour un devis ou un contrat, utilisez le formulaire en précisant votre ville. La disponibilité annoncée est 24h/24 et 7j/7.</p></div></div></section>
      <CtaSection title="Votre ascenseur se trouve dans l’une de nos zones ?" text="Décrivez votre installation et votre ville pour demander une prise en charge adaptée à votre besoin." />
    </>
  );
}
