export const articleCategories = ["Maintenance", "Dépannage", "Installation", "Sécurité", "Conseils pratiques"] as const;
export type ArticleCategory = (typeof articleCategories)[number];
