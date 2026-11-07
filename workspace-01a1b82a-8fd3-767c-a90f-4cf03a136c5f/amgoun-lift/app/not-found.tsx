import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <div><span>404</span><h1>Cette page reste entre deux étages.</h1><p>Le contenu demandé n’existe pas ou a été déplacé. Revenez à l’accueil pour poursuivre votre visite.</p><Link href="/" className="button button--primary"><ArrowLeft size={18} />Retour à l’accueil</Link></div>
    </section>
  );
}
