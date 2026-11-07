# AMGOUN LIFT — Site officiel, SEO et blog

Site vitrine français premium pour **AMGOUN LIFT**, construit avec Next.js, React et TypeScript. Les couleurs et le logo proviennent de la carte de visite fournie. Le contenu respecte une règle éditoriale stricte : aucune ancienneté, certification, adresse, note, statistique commerciale, garantie ou zone non confirmée n’est inventée.

## Démarrer le site

Prérequis : Node.js 20.9 ou plus récent et npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir `http://localhost:3000`.

```bash
npm run build       # vérification de production
npm run start       # serveur de production local
```

Le site n’est pas considéré comme « en ligne » tant qu’un hébergement public n’a pas été configuré et testé.

## Contenu inclus

- Accueil premium responsive, appel et demande de devis ;
- À propos ;
- Cinq pages services : maintenance, contrats, dépannage, réparation, installation ;
- Page dédiée aux contrats de maintenance ;
- Cinq pages locales avec contenus et FAQ réellement différents : Marrakech, Casablanca, Mohammedia, Rabat et Bouznika ;
- Dix articles français d’environ 800 à 990 mots, avec catégories, recherche, filtres, chargement progressif, partage et recommandations ;
- FAQ, contact, mentions et confidentialité, page 404 ;
- Métadonnées uniques, canonicals, Open Graph, JSON-LD Organization, WebSite, Service, Article et BreadcrumbList ;
- Sitemap XML et robots.txt ;
- Formulaire avec validation client et serveur, honeypot, délai anti-robot, limitation simple du nombre de tentatives et envoi via Resend ;
- CMS Decap avec flux de relecture éditoriale et brouillons par défaut pour les nouveaux articles.

Aucun schéma de note, avis, adresse ou horaire d’ouverture n’est ajouté. Aucun bouton WhatsApp n’est présent tant que l’inscription du numéro à WhatsApp n’a pas été vérifiée. Les noms Facebook et Instagram sont affichés sans URL tant que les profils officiels n’ont pas été fournis.

## Configuration de l’envoi d’e-mails

L’envoi utilise l’API [Resend](https://resend.com). Aucune clé n’est enregistrée dans le projet.

1. Créer un compte Resend avec l’autorisation du propriétaire.
2. Valider le domaine d’expédition demandé par Resend.
3. Créer une clé API limitée à l’envoi.
4. Renseigner `.env.local` ou les variables privées de l’hébergeur :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL=AMGOUN LIFT <contact@votre-domaine.ma>
```

5. Redémarrer/re-déployer et envoyer une demande réelle de test.
6. Vérifier la réception dans `amgounlift@gmail.com`, le bon fonctionnement de « répondre à » et les messages d’erreur.

**Sans ces deux variables, aucun succès n’est simulé.** Le formulaire indique que la demande n’a pas été envoyée et propose un e-mail prérempli ainsi que le téléphone. Ne jamais présenter l’intégration comme opérationnelle avant ce test de bout en bout.

Pour une forte volumétrie, remplacer la limitation en mémoire par un service de limitation partagé et ajouter une protection anti-spam managée après validation du propriétaire.

## URL publique et SEO

Définir avant la mise en ligne :

```env
NEXT_PUBLIC_SITE_URL=https://www.votre-domaine.ma
```

Cette valeur alimente les canonicals, Open Graph, JSON-LD, `sitemap.xml` et `robots.txt`. Sans configuration, la valeur est `http://localhost:3000`, adaptée uniquement au développement.

Après déploiement, vérifier :

- `https://www.votre-domaine.ma/sitemap.xml` ;
- `https://www.votre-domaine.ma/robots.txt` ;
- les canonicals de plusieurs pages ;
- les aperçus de partage ;
- les redirections du domaine nu/www et HTTP/HTTPS choisies chez l’hébergeur.

## Ajouter ou modifier un article

### Avec l’interface CMS en local

Dans deux terminaux :

```bash
npm run dev
npm run cms
```

Ouvrir `http://localhost:3000/admin/`. Le backend local Decap permet d’éditer les fichiers Markdown du dossier `content/articles` et les médias de `public/images/articles`.

1. Créer un article ; le champ **Brouillon** est activé par défaut.
2. Rédiger un H1 clair, une meta description unique, un résumé et un texte alternatif d’image précis.
3. Ajouter des liens internes vers les services uniquement lorsqu’ils sont utiles.
4. Vérifier les conseils de sécurité et toute affirmation technique, juridique ou réglementaire avec une source fiable avant publication.
5. Relire sur mobile, vérifier les liens et conserver l’article en brouillon jusqu’à validation éditoriale.
6. Après validation, désactiver **Brouillon**, enregistrer la date de publication et ajouter une date de mise à jour seulement lors d’une révision réelle.

### En production avec Git

Le fichier `public/admin/config.yml` utilise `git-gateway` et `editorial_workflow`. Sur un hébergeur compatible (par exemple Netlify avec Identity et Git Gateway), connecter le dépôt, activer ces services et inviter uniquement les éditeurs autorisés. Les propositions sont relues avant fusion ; la plateforme re-déploie ensuite automatiquement le site. L’éditeur n’a pas à modifier le code ni à lancer manuellement un build.

Si l’hébergeur choisi ne propose pas Git Gateway, configurer un backend Git Decap adapté ou utiliser l’édition locale suivie d’une revue Git. Ne pas exposer `/admin/` sans authentification.

Les articles dont le frontmatter contient `draft: true` sont absents des pages publiques et du sitemap.

### Structure d’un article

Chaque fichier Markdown contient : `title`, `metaTitle`, `metaDescription`, `excerpt`, `category`, `image`, `imageAlt`, `publishedAt`, `updatedAt` facultatif, `draft`, `featured`, `related` et le corps en Markdown.

Catégories autorisées : Maintenance, Dépannage, Installation, Sécurité, Conseils pratiques.

## Déploiement et domaine

Le projet fonctionne sur un hébergement Node.js compatible Next.js. Le choix et l’achat d’une offre ou d’un domaine restent soumis à l’autorisation du propriétaire.

1. Placer le projet dans un dépôt Git privé.
2. Importer le dépôt chez l’hébergeur choisi.
3. Utiliser `npm run build` comme commande de build et le framework Next.js détecté par la plateforme.
4. Ajouter `NEXT_PUBLIC_SITE_URL`, puis les variables Resend après validation du domaine.
5. Déployer d’abord sur l’URL temporaire de l’hébergeur et exécuter les tests.
6. Choisir ensuite le nom de domaine avec le propriétaire et suivre les instructions DNS de l’hébergeur/registrar.
7. Mettre à jour `NEXT_PUBLIC_SITE_URL` avec le domaine définitif et re-déployer.
8. Configurer une seule version canonique du domaine (www ou non-www), HTTPS et les redirections permanentes appropriées.
9. Refaire un test complet : navigation, appels, e-mails, formulaire réel, sitemap et affichage mobile.

## Google Search Console

Après mise en ligne sur le domaine définitif :

1. Ouvrir [Google Search Console](https://search.google.com/search-console/) avec le compte choisi par l’entreprise.
2. Ajouter une propriété **Domaine** (recommandé) ou **Préfixe d’URL**.
3. Suivre la méthode de validation DNS ou HTML proposée par Google. Ne pas placer de jeton fictif dans le code.
4. Dans **Sitemaps**, soumettre `sitemap.xml`.
5. Vérifier que Google lit le fichier et qu’aucune URL canonique ne pointe encore vers localhost.
6. Utiliser **Inspection d’URL** sur l’accueil, une page service, une ville et un article pour contrôler le rendu et demander l’indexation si nécessaire.
7. Suivre ensuite les pages indexées, les erreurs d’exploration, l’expérience mobile et les requêtes réelles.

L’indexation et la visibilité prennent du temps. Aucune position, aucun délai de classement et aucun trafic ne peuvent être garantis. Les articles doivent être mis à jour selon leur utilité et les retours réels, pas pour accumuler des mots-clés.

## Google Analytics facultatif

Après choix du propriétaire et mise en conformité de l’information/consentement applicable :

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Le script n’est chargé que si cette variable existe. Aucun outil de mesure tiers n’est actif par défaut sur les pages publiques.

## Tests et audits

Avec le serveur de développement actif :

```bash
# Navigateur Chromium requis une première fois
npx playwright install chromium
npm run test:e2e
npm run audit
```

Les tests couvrent les pages importantes, les H1, le menu mobile, les liens téléphone/e-mail, la recherche et les filtres du blog, le chargement progressif, le formulaire non configuré, le sitemap, la page 404 et des audits automatisés WCAG A/AA sur cinq modèles de pages. L’audit Node vérifie aussi les titres/descriptions uniques, le JSON-LD et les liens internes des 29 URLs du sitemap.

Ces tests ne remplacent pas une revue humaine d’accessibilité, un test réel de l’envoi d’e-mails, ni une validation éditoriale et technique par les professionnels concernés.

## Informations à faire confirmer avant enrichissement

- URL exactes des profils Facebook et Instagram ;
- inscription du numéro à WhatsApp avant tout bouton WhatsApp ;
- domaine définitif ;
- mentions d’hébergement et informations juridiques éventuellement requises ;
- toute certification, adresse, condition contractuelle, garantie ou engagement de délai avant de l’afficher.

En l’absence de confirmation, ces informations restent volontairement absentes.
