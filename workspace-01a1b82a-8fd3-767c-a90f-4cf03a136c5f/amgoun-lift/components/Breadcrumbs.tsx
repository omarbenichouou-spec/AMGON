import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { absoluteUrl } from "@/lib/site";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items, light = false }: { items: BreadcrumbItem[]; light?: boolean }) {
  const allItems: BreadcrumbItem[] = [{ label: "Accueil", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
  return (
    <>
      <nav className={`breadcrumbs${light ? " breadcrumbs--light" : ""}`} aria-label="Fil d’Ariane">
        <ol>
          {allItems.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              {index > 0 && <ChevronRight size={13} aria-hidden="true" />}
              {item.href && index < allItems.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current={index === allItems.length - 1 ? "page" : undefined}>{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
