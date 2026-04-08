import type { CvProfileDataKey } from "../../hooks/useCvProfileDataKey";

const BASE_NAME = "Cyril Ichti";

export function getCvDocumentMeta(profile: CvProfileDataKey): {
  title: string;
  description: string;
  keywords: string;
} {
  switch (profile) {
    case "delivery":
      return {
        title: `${BASE_NAME} — CV | Directeur de programme`,
        description:
          "CV de Cyril Ichti, directeur de programme : exécution de programmes digitaux, gouvernance de portefeuille, maîtrise des risques et des engagements, coordination métiers et finance. Delivery, SAFe, grands comptes e-commerce, équipes et périmètres 100+.",
        keywords:
          "Cyril Ichti, directeur de programme, programme digital, delivery, portefeuille projets, gouvernance, transformation digitale, SAFe, Scrum, e-commerce, coordination transverse, Agde",
      };
    case "product":
      return {
        title: `${BASE_NAME} — CV | Direction des opérations & performance digitale`,
        description:
          "CV de Cyril Ichti : orientation produit, roadmap et valeur business dans des environnements digitaux complexes. Programmes grands comptes, équipes pluridisciplinaires.",
        keywords:
          "Cyril Ichti, produit, roadmap, delivery, agile, e-commerce, transformation digitale",
      };
    case "executive":
      return {
        title: `${BASE_NAME} — CV | Head of Product & Engineering`,
        description:
          "CV de Cyril Ichti : direction produit & engineering, stratégie digitale et gouvernance. Management d’équipes, périmètres transverses 100+, e-commerce et plateformes.",
        keywords:
          "Cyril Ichti, Head of Product, Engineering, direction produit, stratégie digitale, gouvernance, e-commerce, leadership",
      };
    default:
      return {
        title: `${BASE_NAME} — CV | Head of Product & Engineering`,
        description:
          "CV de Cyril Ichti : direction produit & engineering, stratégie digitale et gouvernance. Management d’équipes, périmètres transverses 100+, e-commerce et plateformes.",
        keywords:
          "Cyril Ichti, Head of Product, Engineering, direction produit, stratégie digitale, gouvernance, e-commerce, leadership",
      };
  }
}
