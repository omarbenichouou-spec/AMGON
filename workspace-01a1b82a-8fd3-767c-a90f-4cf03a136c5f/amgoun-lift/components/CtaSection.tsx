import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CtaSection({ title = "Parlons de votre ascenseur.", text = "Décrivez votre besoin en maintenance, dépannage, réparation ou installation. AMGOUN LIFT étudiera votre demande.", type = "Maintenance" }: { title?: string; text?: string; type?: string }) {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-panel__pattern" aria-hidden="true" />
          <div>
            <span className="eyebrow eyebrow--light"><span />Votre projet commence ici</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-panel__actions">
            <Link href={`/contact?type=${encodeURIComponent(type)}`} className="button button--white">Demander un devis<ArrowUpRight size={18} /></Link>
            <a href={`tel:${site.phoneInternational}`} className="cta-phone"><Phone size={19} /><span><small>Appelez-nous</small>{site.phoneDisplay}</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
