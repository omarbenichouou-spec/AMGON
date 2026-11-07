"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { cities, requestTypes, site } from "@/lib/site";

type Fields = {
  name: string;
  phone: string;
  email: string;
  city: string;
  requestType: string;
  message: string;
  website: string;
};

const emptyFields: Fields = { name: "", phone: "", email: "", city: "", requestType: "", message: "", website: "" };

function validate(fields: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (fields.name.trim().length < 2) errors.name = "Indiquez votre nom complet.";
  const phoneDigits = fields.phone.replace(/\D/g, "");
  if (phoneDigits.length < 8 || phoneDigits.length > 15) errors.phone = "Indiquez un numéro de téléphone valide.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) errors.email = "Indiquez une adresse e-mail valide.";
  if (![...cities, "Autre"].includes(fields.city as (typeof cities)[number] | "Autre")) errors.city = "Sélectionnez votre ville.";
  if (!requestTypes.includes(fields.requestType as (typeof requestTypes)[number])) errors.requestType = "Sélectionnez le type de demande.";
  if (fields.message.trim().length < 10) errors.message = "Décrivez votre demande en quelques mots (10 caractères minimum).";
  if (fields.message.length > 2000) errors.message = "Votre message ne doit pas dépasser 2 000 caractères.";
  return errors;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("type") || "";
  const validInitialType = requestTypes.includes(requestedType as (typeof requestTypes)[number]) ? requestedType : "";
  const [fields, setFields] = useState<Fields>({ ...emptyFields, requestType: validInitialType });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "unconfigured">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const startedAt = useRef(Date.now());

  const mailto = useMemo(() => {
    const subject = `Demande ${fields.requestType || "ascenseur"} — ${fields.city || "ville à préciser"}`;
    const body = [
      `Nom complet : ${fields.name}`,
      `Téléphone : ${fields.phone}`,
      `Adresse e-mail : ${fields.email}`,
      `Ville : ${fields.city}`,
      `Type de demande : ${fields.requestType}`,
      "",
      "Message :",
      fields.message,
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [fields]);

  function update(name: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status !== "idle" && status !== "loading") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setStatusMessage("Veuillez vérifier les champs indiqués avant d’envoyer votre demande.");
      const firstError = Object.keys(nextErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }

    setStatus("loading");
    setStatusMessage("Envoi de votre demande en cours…");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, startedAt: startedAt.current }),
      });
      const result = (await response.json()) as { message?: string; code?: string };
      if (!response.ok) {
        setStatus(result.code === "EMAIL_NOT_CONFIGURED" ? "unconfigured" : "error");
        setStatusMessage(result.message || "L’envoi n’a pas abouti. Vous pouvez nous contacter directement par e-mail ou par téléphone.");
        return;
      }
      setStatus("success");
      setStatusMessage("Votre demande a bien été transmise à AMGOUN LIFT. Merci.");
      setFields(emptyFields);
      startedAt.current = Date.now();
    } catch {
      setStatus("error");
      setStatusMessage("La connexion au service d’envoi a échoué. Aucun message n’a été confirmé. Utilisez l’e-mail prérempli ou appelez-nous.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={42} aria-hidden="true" />
        <h3>Demande transmise</h3>
        <p>{statusMessage}</p>
        <button className="button button--outline-dark" type="button" onClick={() => { setStatus("idle"); setStatusMessage(""); }}>Faire une autre demande</button>
      </div>
    );
  }

  const inputProps = (name: keyof Fields) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Nom complet <span aria-hidden="true">*</span></label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Votre nom et prénom" value={fields.name} onChange={(e) => update("name", e.target.value)} maxLength={120} required {...inputProps("name")} />
          {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="phone">Téléphone <span aria-hidden="true">*</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Ex. 06 00 00 00 00" value={fields.phone} onChange={(e) => update("phone", e.target.value)} maxLength={25} required {...inputProps("phone")} />
          {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="email">Adresse e-mail <span aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="vous@exemple.com" value={fields.email} onChange={(e) => update("email", e.target.value)} maxLength={160} required {...inputProps("email")} />
          {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="city">Ville <span aria-hidden="true">*</span></label>
          <select id="city" name="city" value={fields.city} onChange={(e) => update("city", e.target.value)} required {...inputProps("city")}>
            <option value="">Sélectionner une ville</option>
            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
            <option value="Autre">Autre</option>
          </select>
          {errors.city && <span className="field-error" id="city-error">{errors.city}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="requestType">Type de demande <span aria-hidden="true">*</span></label>
          <select id="requestType" name="requestType" value={fields.requestType} onChange={(e) => update("requestType", e.target.value)} required {...inputProps("requestType")}>
            <option value="">Sélectionner un service</option>
            {requestTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
          {errors.requestType && <span className="field-error" id="requestType-error">{errors.requestType}</span>}
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
          <textarea id="message" name="message" rows={5} placeholder="Décrivez votre installation, votre besoin ou le dysfonctionnement constaté…" value={fields.message} onChange={(e) => update("message", e.target.value)} maxLength={2000} required {...inputProps("message")} />
          <div className="field-meta">{errors.message ? <span className="field-error" id="message-error">{errors.message}</span> : <span>Ne communiquez pas de données sensibles.</span>}<span>{fields.message.length}/2000</span></div>
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={fields.website} onChange={(e) => update("website", e.target.value)} />
      </div>
      {statusMessage && (
        <div className={`form-notice form-notice--${status}`} role={status === "error" ? "alert" : "status"} aria-live="polite">
          {status === "loading" ? <Loader2 className="spin" size={20} /> : <AlertCircle size={20} />}
          <div><p>{statusMessage}</p>{(status === "unconfigured" || status === "error") && <a href={mailto} className="form-mailto"><Mail size={16} />Ouvrir mon e-mail prérempli</a>}</div>
        </div>
      )}
      <div className="form-submit-row">
        <button className="button button--primary button--large" type="submit" disabled={status === "loading"}>
          {status === "loading" ? <Loader2 className="spin" size={19} /> : <Send size={18} />}
          {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
        <p>En envoyant ce formulaire, vous acceptez que vos informations soient utilisées pour répondre à votre demande.</p>
      </div>
    </form>
  );
}
