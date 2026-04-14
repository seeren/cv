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
        title: `${BASE_NAME} — CV | Product Owner`,
        description:
          "CV de Cyril Ichti : backlog, roadmap, priorisation, besoins métiers, retours utilisateurs, sprints. E-commerce, UX, Agile, Scrum, coordination transverse, mise en production.",
        keywords:
          "Cyril Ichti, Product Owner, backlog, roadmap, priorisation, user stories, discovery, Agile, Scrum, sprint, e-commerce, UX, mise en production, adoption, Agde",
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
        title: `${BASE_NAME} — CV | Directeur de programme / Product & Delivery`,
        description:
          "CV de Cyril Ichti : pilotage de programmes et produits, stratégie produit, delivery et transformation des organisations. Portefeuille multi-produits e-commerce (~40 M€ CA), périmètres 100+ contributeurs, KPI, Agile (Scrum, SAFe).",
        keywords:
          "Cyril Ichti, directeur de programme, Product, Delivery, stratégie produit, roadmap, KPI, portefeuille, Agile, Scrum, SAFe, transformation, e-commerce, conduite du changement, Agde",
      };
  }
}
