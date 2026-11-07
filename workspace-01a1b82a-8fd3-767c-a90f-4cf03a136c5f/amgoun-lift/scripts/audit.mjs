const base = process.env.AUDIT_BASE_URL || "http://localhost:3000";
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
if (!sitemapResponse.ok) throw new Error(`Sitemap indisponible : ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const pages = new Set(urls);
const discovered = new Set();
const titles = new Map();
const descriptions = new Map();
const failures = [];

for (const path of urls) {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) {
    failures.push(`${path} → HTTP ${response.status}`);
    continue;
  }
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="(.*?)"\/?>/)?.[1];
  if (!title) failures.push(`${path} → title manquant`);
  if (!description) failures.push(`${path} → description manquante`);
  for (const [map, value, label] of [[titles, title, "title"], [descriptions, description, "description"]]) {
    if (!value) continue;
    if (map.has(value)) failures.push(`${label} dupliqué : ${path} et ${map.get(value)}`);
    else map.set(value, path);
  }
  const h1Count = (html.match(/<h1[ >]/g) || []).length;
  if (h1Count !== 1) failures.push(`${path} → ${h1Count} H1`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch { failures.push(`${path} → JSON-LD invalide`); }
  }
  for (const match of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (href.startsWith("/") && !href.startsWith("//")) {
      const target = new URL(href, base);
      if (!target.hash) discovered.add(target.pathname + target.search);
    }
  }
}

for (const href of discovered) {
  if (href.startsWith("/api/") || href.startsWith("/admin/")) continue;
  const response = await fetch(`${base}${href}`);
  if (response.status >= 400) failures.push(`Lien interne cassé : ${href} → ${response.status}`);
}

console.log(`Audit SEO et liens : ${pages.size} pages du sitemap, ${titles.size} titres uniques, ${descriptions.size} descriptions uniques, ${discovered.size} liens internes testés.`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("Aucune erreur détectée.");
