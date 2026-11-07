import { test, expect } from "@playwright/test";

const importantRoutes = [
  "/", "/a-propos", "/services", "/services/maintenance-ascenseurs", "/services/depannage-urgence",
  "/contrats-maintenance", "/zones-intervention", "/zones-intervention/marrakech",
  "/zones-intervention/casablanca", "/zones-intervention/mohammedia", "/zones-intervention/rabat",
  "/zones-intervention/bouznika", "/blog", "/blog/panne-ascenseur-que-faire", "/faq", "/contact",
];

test("les pages importantes répondent et ont un H1", async ({ request }) => {
  for (const route of importantRoutes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
    const html = await response.text();
    expect((html.match(/<h1[ >]/g) || []).length, `Un seul H1 sur ${route}`).toBe(1);
    expect(html, `Meta description sur ${route}`).toContain('<meta name="description"');
    expect(html, `Canonical sur ${route}`).toContain('<link rel="canonical"');
  }
});

test("accueil, logo, CTA et coordonnées officielles", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle("AMGOUN LIFT | Maintenance et Dépannage d’Ascenseurs au Maroc");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Votre sécurité,notre engagement.");
  await expect(page.locator('a[href="tel:+212690822644"]').first()).toBeVisible();
  await expect(page.locator('a[href="mailto:amgounlift@gmail.com"]').first()).toBeVisible();
  await expect(page.locator('img[alt="AMGOUN LIFT — Service ascenseur"]')).toBeVisible();
  expect(await page.locator('a[href*="wa.me"], a[href*="whatsapp"]').count()).toBe(0);
  expect(errors).toEqual([]);
});

test("le menu mobile est utilisable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Ouvrir le menu" });
  await toggle.click();
  await expect(page.locator("#mobile-menu")).toHaveClass(/is-open/);
  await page.locator("#mobile-menu").getByRole("link", { name: /Zones d’intervention/ }).click();
  await expect(page).toHaveURL(/\/zones-intervention$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Nos zones d’intervention");
});

test("recherche, catégories et chargement progressif du blog", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.locator(".article-card")).toHaveCount(6);
  await page.getByRole("button", { name: /Afficher plus d’articles/ }).click();
  await expect(page.locator(".article-card")).toHaveCount(10);
  const search = page.getByRole("searchbox", { name: "Rechercher dans les articles" });
  await search.fill("bloqué");
  await expect(page.locator(".article-card")).toHaveCount(2);
  await search.fill("texte introuvable xyz");
  await expect(page.getByRole("heading", { name: "Aucun article trouvé" })).toBeVisible();
  await page.getByRole("button", { name: "Voir tous les articles" }).click();
  await page.getByRole("button", { name: "Installation", exact: true }).click();
  await expect(page.locator(".article-card")).toHaveCount(1);
  await expect(page.locator(".article-card h3")).toContainText("Installation d’un ascenseur");
});

test("le formulaire valide les champs et ne simule pas un envoi", async ({ page }) => {
  await page.goto("/contact?type=Contrat%20de%20maintenance");
  await expect(page.locator("#requestType")).toHaveValue("Contrat de maintenance");
  await page.getByRole("button", { name: "Envoyer ma demande" }).click();
  await expect(page.locator("#name-error")).toBeVisible();
  await page.locator("#name").fill("Test de validation");
  await page.locator("#phone").fill("0690822644");
  await page.locator("#email").fill("test@example.com");
  await page.locator("#city").selectOption("Casablanca");
  await page.locator("#message").fill("Ceci est une demande de test du fonctionnement du formulaire.");
  await page.waitForTimeout(2600);
  await page.getByRole("button", { name: "Envoyer ma demande" }).click();
  await expect(page.locator(".form-notice--unconfigured")).toContainText("Votre demande n’a pas été envoyée");
  await expect(page.locator(".form-success")).toHaveCount(0);
  const mailto = page.getByRole("link", { name: "Ouvrir mon e-mail prérempli" });
  await expect(mailto).toHaveAttribute("href", /^mailto:amgounlift@gmail.com/);
});

test("le sitemap, robots et une page inconnue", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  expect((xml.match(/<loc>/g) || []).length).toBe(29);
  expect(xml).toContain("/zones-intervention/bouznika");
  expect(xml).toContain("/blog/maintenance-reguliere-ascenseur");
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /admin/");
  const missing = await request.get("/cette-page-nexiste-pas");
  expect(missing.status()).toBe(404);
});
