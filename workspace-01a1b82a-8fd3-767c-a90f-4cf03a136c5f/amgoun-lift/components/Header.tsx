"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navigation, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href) || (href === "/contrats-maintenance" && pathname === "/services/contrats-de-maintenance");

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span className="availability"><span className="status-dot" />{site.availability}</span>
          <div className="utility-links">
            <a href={`tel:${site.phoneInternational}`}><Phone size={13} aria-hidden="true" />{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}><Mail size={13} aria-hidden="true" />{site.email}</a>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="container main-nav__inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""} aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact?type=Maintenance" className="button button--primary nav-cta">
            Demander un devis <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav className="container" aria-label="Navigation mobile">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} className={isActive(item.href) ? "active" : ""}>
              <span>{String(index + 1).padStart(2, "0")}</span>{item.label}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
          <Link href="/contact?type=Maintenance" className="button button--primary" tabIndex={open ? 0 : -1}>Demander un devis</Link>
          <a href={`tel:${site.phoneInternational}`} className="mobile-menu__phone" tabIndex={open ? 0 : -1}><Phone size={18} />{site.phoneDisplay}</a>
        </nav>
      </div>
    </header>
  );
}
