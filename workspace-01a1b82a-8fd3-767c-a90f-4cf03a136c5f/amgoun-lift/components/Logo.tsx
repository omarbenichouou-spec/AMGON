import Image from "next/image";
import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand-logo${inverse ? " brand-logo--inverse" : ""}`} aria-label="AMGOUN LIFT — Accueil">
      <Image
        src="/brand/amgoun-lift-logo.png"
        alt="AMGOUN LIFT — Service ascenseur"
        width={998}
        height={239}
        priority
        sizes="(max-width: 600px) 184px, 226px"
      />
    </Link>
  );
}
