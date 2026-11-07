import { Suspense } from "react";
import { Clock3, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { SectionHeader } from "./SectionHeader";
import { site } from "@/lib/site";

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {showHeading && <SectionHeader eyebrow="Votre demande, notre écoute" title="Contactez AMGOUN LIFT" subtitle="Besoin d’un devis, d’un contrat de maintenance ou d’une intervention ? Présentez-nous votre demande." align="center" />}
        <div className="contact-layout">
          <div className="contact-aside">
            <span className="eyebrow eyebrow--light"><span />Coordonnées directes</span>
            <h2>Parlons de votre besoin.</h2>
            <p>Pour toute demande urgente, privilégiez l’appel téléphonique. Pour un devis ou un contrat, décrivez votre installation dans le formulaire.</p>
            <div className="contact-details">
              <div className="contact-detail"><span className="contact-detail__icon"><Phone size={17} /></span><div><small>Téléphone</small><a href={`tel:${site.phoneInternational}`}>{site.phoneDisplay}</a></div></div>
              <div className="contact-detail"><span className="contact-detail__icon"><Mail size={17} /></span><div><small>E-mail</small><a href={`mailto:${site.email}`}>{site.email}</a></div></div>
              <div className="contact-detail"><span className="contact-detail__icon"><MapPin size={17} /></span><div><small>Zones confirmées</small><strong>Marrakech · Casablanca · Mohammedia · Rabat · Bouznika</strong></div></div>
              <div className="contact-detail"><span className="contact-detail__icon"><Facebook size={17} /></span><div><small>Facebook</small><strong>{site.facebookName}</strong></div></div>
              <div className="contact-detail"><span className="contact-detail__icon"><Instagram size={17} /></span><div><small>Instagram</small><strong>{site.instagramName}</strong></div></div>
            </div>
            <div className="contact-availability"><span><Clock3 size={16} />{site.availability}</span><p>Disponibilité annoncée. Toute estimation d’intervention est confirmée directement selon la situation.</p></div>
          </div>
          <div className="contact-form-wrap">
            <h3>Décrivez votre demande</h3>
            <p>Les champs marqués d’un astérisque (*) sont obligatoires.</p>
            <Suspense fallback={<div className="form-notice form-notice--loading">Chargement du formulaire…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
