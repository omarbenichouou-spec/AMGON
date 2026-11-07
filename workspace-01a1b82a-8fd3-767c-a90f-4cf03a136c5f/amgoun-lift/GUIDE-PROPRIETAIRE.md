# Guide de mise en ligne — AMGOUN LIFT

## Ce qui est prêt

Le site contient toutes les pages publiques, les cinq villes confirmées, les cinq services, dix articles de blog, le formulaire, le sitemap et une interface de gestion éditoriale. La version de prévisualisation permet de tester le design et les parcours sur ordinateur et mobile.

## Ce qui nécessite encore votre validation

1. **Nom de domaine** : aucun domaine n’a été acheté. Choisissez-le avant la mise en ligne.
2. **Envoi du formulaire** : tant que les accès Resend ne sont pas configurés, le site indique honnêtement qu’aucun message n’a été envoyé et propose un e-mail prérempli.
3. **Réseaux sociaux** : les noms « Amgounlift » sont affichés, mais aucun lien n’est inventé. Fournissez les URL officielles pour activer les icônes.
4. **WhatsApp** : aucun bouton n’est affiché. Confirmez d’abord que le 06 90 82 26 44 est bien le numéro WhatsApp à utiliser.
5. **Relecture éditoriale** : relisez les articles avant leur diffusion publique. Tout nouvel article créé dans le CMS est enregistré comme brouillon par défaut.
6. **Informations complémentaires** : aucune ancienneté, certification, adresse, tarif, garantie ou durée d’intervention ne sera ajoutée sans élément confirmé.

## Prévisualiser

- Version développement : `npm install`, puis `npm run dev`.
- Adresse locale : `http://localhost:3000`.
- Blog et articles : menu **Blog**.
- Administration éditoriale locale : lancer aussi `npm run cms`, puis ouvrir `http://localhost:3000/admin/`.

## Publier sur Internet

Le site peut être importé chez un hébergeur compatible Next.js. Après le premier déploiement sur une adresse temporaire :

- testez les appels et les liens e-mail ;
- configurez l’URL publique et l’envoi d’e-mails ;
- faites un envoi réel depuis le formulaire ;
- connectez le domaine uniquement après validation de la prévisualisation ;
- mettez à jour `NEXT_PUBLIC_SITE_URL` avec le domaine définitif ;
- vérifiez HTTPS, les redirections et le sitemap.

Les étapes techniques exactes figurent dans `README.md`.

## Publier un article

1. Ouvrez l’interface `/admin/` configurée.
2. Créez l’article et gardez **Brouillon** activé.
3. Ajoutez une image et son texte alternatif.
4. Vérifiez les informations techniques et les conseils de sécurité.
5. Prévisualisez sur mobile et relisez les liens.
6. Après validation, désactivez **Brouillon** et publiez via le flux éditorial.

Ne publiez pas automatiquement un texte généré sans relecture. Ne promettez ni prix, ni délai, ni obligation réglementaire non vérifiée.

## Soumettre le site à Google

Une fois le domaine public :

1. Créez la propriété du domaine dans Google Search Console.
2. Validez-la avec la méthode proposée par Google.
3. Soumettez `https://votre-domaine.ma/sitemap.xml` dans la rubrique **Sitemaps**.
4. Inspectez l’accueil, un service, une ville et un article.
5. Suivez les rapports d’indexation et les requêtes au fil du temps.

Le référencement naturel demande du temps. Le site est techniquement préparé pour être exploré, mais aucune indexation ou position sur Google n’est garantie.

## Contacts officiels utilisés

- **Téléphone :** 06 90 82 26 44
- **E-mail :** amgounlift@gmail.com
- **Zones :** Marrakech, Casablanca, Mohammedia, Rabat et Bouznika
- **Disponibilité annoncée :** intervention 24h/24 et 7j/7
