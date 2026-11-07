import { NextRequest, NextResponse } from "next/server";
import { cities, requestTypes, site } from "@/lib/site";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; resetAt: number }>();
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] || character);
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 15000) return NextResponse.json({ message: "La demande est trop volumineuse." }, { status: 413 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt < now) attempts.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
  else {
    if (current.count >= 5) return NextResponse.json({ message: "Trop de tentatives ont été effectuées. Réessayez plus tard ou contactez-nous par téléphone." }, { status: 429 });
    current.count += 1;
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const fields = {
      name: text(body.name, 120),
      phone: text(body.phone, 25),
      email: text(body.email, 160),
      city: text(body.city, 50),
      requestType: text(body.requestType, 80),
      message: text(body.message, 2000),
    };
    const website = text(body.website, 200);
    const startedAt = Number(body.startedAt);

    // A filled hidden field or an instantaneous submission is silently discarded as spam.
    if (website || (Number.isFinite(startedAt) && now - startedAt < 2500)) {
      return NextResponse.json({ message: "Votre demande n’a pas pu être validée. Réessayez dans quelques instants." }, { status: 400 });
    }
    if (fields.name.length < 2 || fields.message.length < 10) {
      return NextResponse.json({ message: "Le nom et le message doivent être complétés correctement." }, { status: 400 });
    }
    const digits = fields.phone.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) return NextResponse.json({ message: "Le numéro de téléphone n’est pas valide." }, { status: 400 });
    if (!EMAIL_PATTERN.test(fields.email)) return NextResponse.json({ message: "L’adresse e-mail n’est pas valide." }, { status: 400 });
    if (![...cities, "Autre"].includes(fields.city as (typeof cities)[number] | "Autre")) return NextResponse.json({ message: "La ville sélectionnée n’est pas valide." }, { status: 400 });
    if (!requestTypes.includes(fields.requestType as (typeof requestTypes)[number])) return NextResponse.json({ message: "Le type de demande n’est pas valide." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !from) {
      return NextResponse.json({
        code: "EMAIL_NOT_CONFIGURED",
        message: "L’envoi direct n’est pas encore configuré sur cette version du site. Votre demande n’a pas été envoyée. Utilisez l’e-mail prérempli ci-dessous ou appelez-nous.",
      }, { status: 503 });
    }

    const plainText = [
      `Nom complet : ${fields.name}`,
      `Téléphone : ${fields.phone}`,
      `E-mail : ${fields.email}`,
      `Ville : ${fields.city}`,
      `Type de demande : ${fields.requestType}`,
      "",
      "Message :",
      fields.message,
    ].join("\n");

    const rows = [
      ["Nom complet", fields.name],
      ["Téléphone", fields.phone],
      ["E-mail", fields.email],
      ["Ville", fields.city],
      ["Type de demande", fields.requestType],
    ].map(([label, value]) => `<tr><td style="padding:8px 16px 8px 0;color:#666">${label}</td><td style="padding:8px 0;font-weight:600">${escapeHtml(value)}</td></tr>`).join("");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [site.email],
        reply_to: fields.email,
        subject: `[Site AMGOUN LIFT] ${fields.requestType.replace(/[\r\n]/g, " ")} — ${fields.city.replace(/[\r\n]/g, " ")}`,
        text: plainText,
        html: `<div style="font-family:Arial,sans-serif;max-width:640px;color:#20212A"><h1 style="font-size:22px">Nouvelle demande depuis le site</h1><table style="border-collapse:collapse">${rows}</table><h2 style="font-size:17px;margin-top:28px">Message</h2><p style="white-space:pre-wrap;background:#F4F5F7;padding:18px;border-radius:8px">${escapeHtml(fields.message)}</p></div>`,
      }),
      signal: AbortSignal.timeout(12000),
    });

    if (!resendResponse.ok) {
      console.error("Échec Resend", resendResponse.status, await resendResponse.text());
      return NextResponse.json({ message: "Le service d’e-mail n’a pas accepté la demande. Aucun message n’a été confirmé. Utilisez l’e-mail prérempli ou contactez-nous par téléphone." }, { status: 502 });
    }

    return NextResponse.json({ message: "Votre demande a bien été transmise à AMGOUN LIFT." });
  } catch (error) {
    console.error("Erreur du formulaire de contact", error);
    return NextResponse.json({ message: "Une erreur technique a empêché l’envoi. Aucun message n’a été confirmé. Réessayez ou utilisez nos coordonnées directes." }, { status: 500 });
  }
}
