# Rapport qualité — AMGOUN LIFT

Contrôles réalisés le 7 novembre 2026 sur la version de production locale.

## Build et couverture

- Build Next.js de production réussi, TypeScript sans erreur.
- 35 routes générées, dont les pages techniques et l’API.
- 29 URLs publiques dans le sitemap : pages principales, 5 services, 5 villes et 10 articles.
- 29 titres SEO uniques et 29 meta descriptions uniques.
- 35 liens internes testés : aucun lien cassé détecté.
- JSON-LD vérifié sur les pages du sitemap.
- `robots.txt`, sitemap, canonicals, Open Graph et page 404 présents.
- Audit npm de production : aucune vulnérabilité connue signalée au moment du contrôle.

## Tests navigateur

11 tests Playwright réussis :

- réponse et H1 des pages importantes ;
- logo, coordonnées officielles, liens téléphone et e-mail ;
- navigation mobile ;
- recherche, catégories et chargement progressif du blog ;
- présélection « Contrat de maintenance » ;
- validation des champs ;
- comportement honnête du formulaire sans configuration e-mail : aucun faux succès et lien `mailto` prérempli ;
- sitemap, robots et page 404 ;
- audits WCAG A/AA automatisés sur l’accueil, le contact, le blog, un article et une page ville.

## Lighthouse — production locale

| Catégorie | Score |
| --- | ---: |
| Performance | 87/100 |
| Accessibilité | 100/100 |
| Bonnes pratiques | 100/100 |
| SEO | 100/100 |

Mesures relevées : FCP 1,6 s, LCP 3,4 s, TBT 230 ms, CLS 0,001. Ces chiffres sont une photographie d’un test local, pas une garantie pour un autre hébergement ou appareil. Une nouvelle mesure est recommandée après déploiement sur le domaine définitif.

L’image principale a été convertie en WebP pré-optimisé afin d’éviter une transformation à froid lors du premier chargement. Les autres images utilisent l’optimisation Next.js et le chargement différé lorsqu’il est approprié.

## Vérification éditoriale

- Nom et logo AMGOUN LIFT préservés à partir de la carte fournie.
- Contenu public en français.
- Seules Marrakech, Casablanca, Mohammedia, Rabat et Bouznika sont présentées comme zones confirmées.
- Aucun nombre d’années d’expérience, date de création, effectif, projet réalisé, note, témoignage, certification, prix, adresse ou délai garanti n’a été ajouté.
- Les dix articles comptent environ 800 à 990 mots chacun et comportent des liens internes, des CTA et des rappels de sécurité.
- Les pages villes ont des introductions, contextes, situations et FAQ distincts.
- Aucun bouton WhatsApp et aucune URL de profil social inventés.
- Les nouveaux articles du CMS sont en brouillon par défaut et le flux éditorial Decap est activé.

## Points à configurer avant la mise en ligne publique

1. Domaine et `NEXT_PUBLIC_SITE_URL`.
2. Identifiants Resend et test réel de réception du formulaire.
3. Hébergement, HTTPS et redirections canoniques.
4. Validation Google Search Console et soumission du sitemap après déploiement.
5. URL officielles des réseaux sociaux si le propriétaire souhaite activer les liens.
6. Confirmation WhatsApp avant tout ajout d’un bouton.
7. Revue humaine finale des contenus, de l’accessibilité et des informations légales applicables.

Les audits automatisés ne remplacent pas ces validations humaines et techniques. Les instructions détaillées figurent dans `README.md` et `GUIDE-PROPRIETAIRE.md`.
