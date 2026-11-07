import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileActions() {
  return (
    <div className="mobile-actions" aria-label="Actions rapides">
      <a href={`tel:${site.phoneInternational}`}><Phone size={18} aria-hidden="true" />Appeler</a>
      <Link href="/contact?type=Maintenance">Demander un devis<ArrowUpRight size={17} aria-hidden="true" /></Link>
    </div>
  );
}
