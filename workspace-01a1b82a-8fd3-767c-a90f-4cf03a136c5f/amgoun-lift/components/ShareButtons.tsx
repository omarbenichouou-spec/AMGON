"use client";

import { Check, Copy, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const currentUrl = () => window.location.href;
  async function copy() {
    try {
      await navigator.clipboard.writeText(currentUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copiez l’adresse de cet article :", currentUrl());
    }
  }
  return (
    <div className="share-buttons" aria-label="Partager cet article">
      <span>Partager</span>
      <button type="button" onClick={copy} aria-label="Copier le lien de l’article">{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "Copié" : "Copier le lien"}</button>
      <a href="#partager-linkedin" onClick={(event) => { event.preventDefault(); window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl())}`, "_blank", "noopener,noreferrer,width=680,height=620"); }} aria-label="Partager sur LinkedIn"><Linkedin size={17} /></a>
      <a href={`mailto:?subject=${encodeURIComponent(title)}`} onClick={(event) => { event.currentTarget.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(currentUrl())}`; }} aria-label="Partager par e-mail"><Mail size={17} /></a>
    </div>
  );
}
