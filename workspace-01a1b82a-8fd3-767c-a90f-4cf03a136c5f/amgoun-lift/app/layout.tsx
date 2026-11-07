import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActions } from "@/components/MobileActions";
import { Analytics } from "@/components/Analytics";
import { absoluteUrl, cityPages, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AMGOUN LIFT | Maintenance et Dépannage d’Ascenseurs au Maroc",
    template: "%s | AMGOUN LIFT",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: site.url,
    siteName: site.name,
    title: "AMGOUN LIFT | Votre sécurité, notre engagement.",
    description: site.description,
    images: [{ url: "/images/hero-ascenseur.jpg", width: 1376, height: 768, alt: "Ascenseur moderne AMGOUN LIFT" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/brand/amgoun-lift-logo.png"),
    description: site.description,
    slogan: site.slogan,
    email: site.email,
    telephone: site.phoneInternational,
    areaServed: cityPages.map((city) => ({ "@type": "City", name: city.name })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneInternational,
      email: site.email,
      contactType: "customer service",
      availableLanguage: ["French"],
    },
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    url: site.url,
    inLanguage: "fr-MA",
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: absoluteUrl("/blog?recherche={search_term_string}") },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <a href="#contenu" className="skip-link">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <MobileActions />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
