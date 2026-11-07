import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { generalFaqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ maintenance et dépannage d’ascenseurs",
  description: "Services, villes, devis, contrats et panne d’ascenseur : consultez les réponses aux questions fréquentes sur AMGOUN LIFT et ses prestations.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return <><PageHero eyebrow="Questions fréquentes" title="Des réponses claires à vos questions" description="Services, zones d’intervention, devis et sécurité : retrouvez les informations confirmées sur AMGOUN LIFT." breadcrumbs={[{ label: "FAQ" }]} /><section className="section"><div className="container faq-grid"><div><span className="eyebrow"><span />Besoin d’une précision ?</span><h2 style={{ fontSize: "37px", margin: "14px 0" }}>Votre situation reste unique.</h2><p>Les réponses ci-dessous sont générales. Pour votre équipement, contactez-nous directement afin de décrire les faits et les prestations recherchées.</p><a href={`tel:${site.phoneInternational}`} className="text-link"><Phone size={16} />{site.phoneDisplay}</a><br /><Link href="/blog" className="text-link" style={{ marginTop: "18px" }}>Lire nos conseils<ArrowUpRight size={16} /></Link></div><FaqAccordion items={generalFaqs} /></div></section><CtaSection title="Vous n’avez pas trouvé votre réponse ?" text="Présentez votre question ou votre installation dans le formulaire. AMGOUN LIFT pourra examiner votre demande." type="Autre" /></>;
}
