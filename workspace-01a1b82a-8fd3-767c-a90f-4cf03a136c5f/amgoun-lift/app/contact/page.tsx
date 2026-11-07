import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact et devis ascenseur",
  description: "Contactez AMGOUN LIFT pour un devis, un contrat de maintenance ou une intervention d’ascenseur. Téléphone : 06 90 82 26 44. Formulaire en ligne.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <><PageHero eyebrow="Échangeons sur votre besoin" title="Contactez AMGOUN LIFT" description="Besoin d’un devis, d’un contrat de maintenance ou d’une intervention ? Présentez-nous votre demande. Pour une situation urgente, privilégiez l’appel au 06 90 82 26 44." breadcrumbs={[{ label: "Contact" }]} /><ContactSection showHeading={false} /></>;
}
