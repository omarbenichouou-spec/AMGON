import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  MapPinned,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { ContactSection } from "@/components/ContactSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getAllArticles } from "@/lib/articles";
import { cityPages, generalFaqs, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "AMGOUN LIFT | Maintenance et Dépannage d’Ascenseurs au Maroc" },
  description:
    "AMGOUN LIFT propose des services de maintenance, dépannage, réparation et installation d’ascenseurs à Marrakech, Casablanca, Mohammedia, Rabat et Bouznika. Contactez-nous pour demander un devis.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);
  return (
    <>
      <section className="home-hero">
        <div className="hero-media">
          {/* Asset pré-optimisé : évite une transformation d’image à froid sur le LCP mobile. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-ascenseur.webp" alt="Ascenseur moderne aux portes ouvertes dans un bâtiment contemporain" width={1376} height={768} loading="eager" fetchPriority="high" decoding="async" />
        </div>
        <div className="container hero-content">
          <div className="hero-content__inner">
            <div className="hero-badge"><Clock3 size={14} aria-hidden="true" />Intervention 24h/24 et 7j/7</div>
            <h1>Votre sécurité,<span>notre engagement.</span></h1>
            <p className="hero-description">AMGOUN LIFT vous accompagne dans la maintenance, le dépannage, la réparation et l’installation de vos ascenseurs à Marrakech, Casablanca, Mohammedia, Rabat et Bouznika.</p>
            <div className="hero-actions">
              <Link href="/contact?type=Maintenance" className="button button--primary button--large">Demander un devis<ArrowUpRight size={19} /></Link>
              <a href={`tel:${site.phoneInternational}`} className="button button--outline button--large"><Phone size={18} />Appeler maintenant</a>
            </div>
            <div className="hero-note"><ShieldCheck size={17} /><span>Des prestations étudiées selon votre installation et vos besoins.</span></div>
          </div>
        </div>
        <div className="hero-service-card">
          <span>Nos expertises</span>
          {services.slice(0, 4).map((service) => <p key={service.slug}><Check size={13} />{service.shortTitle}</p>)}
        </div>
        <a href="#apropos" className="hero-scroll">Découvrir AMGOUN LIFT</a>
      </section>

      <div className="trust-rail" aria-label="Informations essentielles">
        <div className="container trust-rail__grid">
          <div className="trust-item"><span className="trust-item__icon"><Clock3 size={20} /></span><div><strong>24h/24 et 7j/7</strong><span>Disponibilité annoncée pour les interventions</span></div></div>
          <div className="trust-item"><span className="trust-item__icon"><MapPinned size={20} /></span><div><strong>5 villes desservies</strong><span>Des zones d’intervention clairement confirmées</span></div></div>
          <div className="trust-item"><span className="trust-item__icon"><FileText size={20} /></span><div><strong>Une demande sur mesure</strong><span>Devis et contrats étudiés selon votre installation</span></div></div>
        </div>
      </div>

      <section className="section" id="apropos">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-image"><Image src="/images/maintenance-ascenseur.jpg" alt="Technicien contrôlant une armoire d’ascenseur avec un appareil de mesure" fill sizes="(max-width: 960px) 100vw, 45vw" /></div>
            <div className="about-image-note"><ShieldCheck size={25} /><strong>La sécurité comme priorité</strong><p>Une approche attentive de vos installations et de leur suivi.</p></div>
          </div>
          <div className="about-copy">
            <span className="eyebrow"><span />Qui sommes-nous ?</span>
            <h2>À propos d’AMGOUN LIFT</h2>
            <p>AMGOUN LIFT accompagne ses clients dans leurs besoins en maintenance, dépannage, réparation et installation d’ascenseurs. Notre démarche repose sur la sécurité, le suivi des installations et des solutions adaptées aux besoins de chaque client.</p>
            <div className="about-values">
              <div className="about-value"><CheckCircle2 size={20} /><div><strong>Écouter votre besoin</strong><span>Comprendre l’installation, le bâtiment et l’usage attendu.</span></div></div>
              <div className="about-value"><CheckCircle2 size={20} /><div><strong>Clarifier la prestation</strong><span>Présenter une réponse adaptée sans conditions présumées.</span></div></div>
              <div className="about-value"><CheckCircle2 size={20} /><div><strong>Organiser le suivi</strong><span>Conserver une vision claire des besoins de maintenance.</span></div></div>
              <div className="about-value"><CheckCircle2 size={20} /><div><strong>Rester joignable</strong><span>Un numéro unique pour transmettre vos demandes.</span></div></div>
            </div>
            <Link href="/a-propos" className="button button--dark">Découvrir notre approche<ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--gray" id="services">
        <div className="container">
          <div className="section-intro-row">
            <SectionHeader eyebrow="Expertises & accompagnement" title="Nos services d’ascenseurs" subtitle="Des solutions adaptées à vos besoins." />
            <Link href="/services" className="text-link">Tous nos services<ArrowUpRight size={17} /></Link>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article key={service.slug} className={`service-card${service.icon === "emergency" ? " service-card--emergency" : ""}`}>
                <div className="service-card__top"><span className="service-card__icon"><ServiceIcon name={service.icon} /></span><span className="service-card__number">0{index + 1}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.icon === "emergency" && <p className="service-card__highlight"><Clock3 size={14} />Disponibilité annoncée 24h/24 et 7j/7</p>}
                <div className="service-card__links">
                  {service.icon === "emergency" ? <a href={`tel:${site.phoneInternational}`} className="text-link">{service.cta}<Phone size={15} /></a> : <Link href={`/contact?type=${encodeURIComponent(service.requestType)}`} className="text-link">{service.cta}<ArrowUpRight size={15} /></Link>}
                  <Link href={`/services/${service.slug}`} className="service-card__detail">En savoir plus</Link>
                </div>
              </article>
            ))}
            <div className="services-more"><div><h3>Un besoin qui ne rentre pas dans une case ?</h3><p>Présentez-nous votre situation. Nous examinerons votre demande avec vous.</p><Link href="/contact?type=Autre" className="button button--dark">Nous écrire<ArrowUpRight size={17} /></Link></div></div>
          </div>
        </div>
      </section>

      <section className="contract-feature">
        <div className="container contract-grid">
          <div className="contract-copy">
            <span className="eyebrow eyebrow--light"><span />Suivi & sérénité</span>
            <h2>Contrats de maintenance d’ascenseurs</h2>
            <p>Un suivi organisé selon les besoins de vos installations. Contactez AMGOUN LIFT pour discuter d’une solution de maintenance appropriée à votre ascenseur.</p>
            <ul className="check-list">
              <li><CheckCircle2 size={18} />Organisation de l’entretien</li>
              <li><CheckCircle2 size={18} />Suivi des besoins de maintenance</li>
              <li><CheckCircle2 size={18} />Prise en compte des caractéristiques de l’installation</li>
              <li><CheckCircle2 size={18} />Possibilité de demander une proposition adaptée</li>
            </ul>
            <Link href="/contact?type=Contrat%20de%20maintenance" className="button button--primary">Demander une proposition de contrat<ArrowUpRight size={18} /></Link>
          </div>
          <div className="contract-visual">
            <Image src="/images/cabine-ascenseur.jpg" alt="Cabine d’ascenseur contemporaine avec finitions bois et métal" fill sizes="(max-width: 960px) 100vw, 45vw" />
            <div className="contract-float"><strong>Un contrat se lit dans le détail.</strong><span>Prestations, limites et conditions sont à préciser dans la proposition.</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="zones">
        <div className="container">
          <SectionHeader eyebrow="Proximité & disponibilité" title="Nos zones d’intervention au Maroc" subtitle="AMGOUN LIFT propose ses services de maintenance, de dépannage, de réparation et d’installation d’ascenseurs dans cinq villes confirmées." />
          <div className="cities-grid">
            {cityPages.map((city) => (
              <Link key={city.slug} href={`/zones-intervention/${city.slug}`} className="city-card">
                <span className="city-card__number">{city.number}</span><h3>{city.name}</h3><p>Maintenance, dépannage, réparation et installation.</p><ArrowDownRight size={20} />
              </Link>
            ))}
          </div>
          <div className="cities-note"><p>Votre ville ne figure pas dans cette liste ? Sélectionnez « Autre » dans le formulaire pour nous demander si votre besoin peut être étudié.</p><Link href="/zones-intervention" className="text-link">Explorer nos zones<ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <section className="emergency-band">
        <div className="container emergency-band__inner">
          <div className="emergency-band__text"><Phone size={30} /><div><strong>Un dysfonctionnement à signaler ?</strong><p>Disponibilité annoncée 24h/24 et 7j/7. En cas d’urgence, privilégiez l’appel.</p></div></div>
          <a href={`tel:${site.phoneInternational}`} className="button button--dark button--large">{site.phoneDisplay}<ArrowUpRight size={18} /></a>
        </div>
      </section>

      <section className="section" id="blog">
        <div className="container">
          <div className="section-intro-row"><SectionHeader eyebrow="Le blog AMGOUN LIFT" title="Conseils et actualités sur les ascenseurs" subtitle="Des réponses claires à vos questions sur l’entretien, la sécurité, le dépannage et les projets d’installation." /><Link href="/blog" className="text-link">Voir tous les articles<ArrowUpRight size={17} /></Link></div>
          <div className="article-grid">{articles.map((article, index) => <ArticleCard key={article.slug} article={article} priority={index === 0} />)}</div>
        </div>
      </section>

      <section className="section section--gray" id="faq">
        <div className="container faq-grid">
          <div><SectionHeader eyebrow="Questions fréquentes" title="Vous avez une question ?" subtitle="Retrouvez les informations essentielles sur nos services et la manière de nous contacter." /><Link href="/faq" className="text-link">Consulter toute la FAQ<ArrowUpRight size={16} /></Link></div>
          <FaqAccordion items={generalFaqs.slice(0, 5)} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
