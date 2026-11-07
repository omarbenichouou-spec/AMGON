import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { ServiceIcon } from "@/components/ServiceIcon";
import { absoluteUrl, cityPages, getService, services, site } from "@/lib/site";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.metaTitle, description: service.metaDescription, url: absoluteUrl(`/services/${service.slug}`), images: [{ url: service.image, alt: service.imageAlt }] },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const isEmergency = service.icon === "emergency";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@type": "Organization", "@id": absoluteUrl("/#organization"), name: site.name, telephone: site.phoneInternational },
    areaServed: cityPages.map((city) => ({ "@type": "City", name: city.name })),
  };
  return (
    <>
      <PageHero eyebrow={service.eyebrow} title={service.title} description={service.description} breadcrumbs={[{ label: "Nos services", href: "/services" }, { label: service.title }]} />
      <section className="section">
        <div className="container service-feature-grid">
          <div className="service-feature-image"><Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 960px) 100vw, 50vw" /></div>
          <div className="service-feature-copy">
            <span className="service-card__icon"><ServiceIcon name={service.icon} size={28} /></span>
            <h2>{service.eyebrow}</h2><p>{service.introduction}</p>
            <ul className="check-list" style={{ marginBottom: "28px" }}>
              {service.points.map((point) => <li key={point} style={{ color: "var(--text)" }}><CheckCircle2 size={18} />{point}</li>)}
            </ul>
            {isEmergency ? <a href={`tel:${site.phoneInternational}`} className="button button--primary"><Phone size={18} />{service.cta} — {site.phoneDisplay}</a> : <Link href={`/contact?type=${encodeURIComponent(service.requestType)}`} className="button button--primary">{service.cta}<ArrowUpRight size={18} /></Link>}
          </div>
        </div>
      </section>
      <section className="section section--gray">
        <div className="container two-col-content">
          <div><span className="eyebrow"><span />Comprendre la prestation</span><h2>Votre installation reste au centre de la demande.</h2></div>
          <div>
            <div className="rich-text"><p>{service.description} Pour avancer, AMGOUN LIFT s’appuie sur les informations propres à votre équipement et à votre bâtiment. Aucune condition technique ou commerciale n’est présumée à partir de cette présentation générale.</p></div>
            <div className="service-detail-sections">{service.sections.map((section) => <article className="service-detail-card" key={section.title}><h3>{section.title}</h3><p>{section.text}</p></article>)}</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container faq-grid">
          <div><span className="eyebrow"><span />Questions sur ce service</span><h2 style={{ fontSize: "37px", margin: "14px 0" }}>Avant de nous contacter</h2><p>Quelques réponses pour préparer votre demande.</p></div>
          <FaqAccordion items={service.faqs} />
        </div>
      </section>
      <CtaSection title={isEmergency ? "Un dysfonctionnement à signaler ?" : `Parlons de ${service.shortTitle.toLowerCase() === "contrats" ? "votre contrat" : "votre besoin"}.`} text={isEmergency ? `Appelez AMGOUN LIFT au ${site.phoneDisplay}. Disponibilité annoncée 24h/24 et 7j/7, sans délai d’arrivée présumé.` : "Décrivez votre installation et vos attentes afin qu’AMGOUN LIFT puisse examiner votre demande."} type={service.requestType} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
