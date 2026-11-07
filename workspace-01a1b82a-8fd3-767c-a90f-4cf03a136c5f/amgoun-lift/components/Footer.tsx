import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { cityPages, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="AMGOUN LIFT — Accueil">
            <Image src="/brand/amgoun-lift-logo.png" alt="AMGOUN LIFT" width={998} height={239} sizes="220px" />
          </Link>
          <p>{site.slogan}</p>
          <p className="footer-description">Services de maintenance, dépannage, réparation et installation d’ascenseurs au Maroc.</p>
          <div className="footer-socials" aria-label="Profils sociaux">
            <span><Facebook size={17} aria-hidden="true" /> Facebook : <strong>{site.facebookName}</strong></span>
            <span><Instagram size={17} aria-hidden="true" /> Instagram : <strong>{site.instagramName}</strong></span>
          </div>
        </div>
        <div>
          <h2 className="footer-title">Nos services</h2>
          <ul className="footer-links">
            {services.map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.shortTitle}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Nos zones</h2>
          <ul className="footer-links">
            {cityPages.map((city) => <li key={city.slug}><Link href={`/zones-intervention/${city.slug}`}>Ascenseurs à {city.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Nous contacter</h2>
          <ul className="footer-contact">
            <li><Phone size={17} aria-hidden="true" /><a href={`tel:${site.phoneInternational}`}>{site.phoneDisplay}</a></li>
            <li><Mail size={17} aria-hidden="true" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><MapPin size={17} aria-hidden="true" /><span>Marrakech · Casablanca<br />Mohammedia · Rabat · Bouznika</span></li>
          </ul>
          <Link href="/contact" className="footer-contact-link">Parler de votre besoin <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} AMGOUN LIFT. Tous droits réservés.</span>
        <div><Link href="/faq">Questions fréquentes</Link><Link href="/mentions-legales">Mentions & confidentialité</Link></div>
      </div>
    </footer>
  );
}
