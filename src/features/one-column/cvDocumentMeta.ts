import type { CvProfileDataKey } from "../../hooks/useCvProfileDataKey";

const BASE_NAME = "Cyril Ichti";

export function getCvDocumentMeta(profile: CvProfileDataKey): {
  title: string;
  description: string;
} {
  switch (profile) {
    case "delivery":
      return {
        title: `${BASE_NAME} — CV | Direction des opérations & performance digitale`,
        description:
          "CV de Cyril Ichti : direction des opérations et de la performance digitale, programmes stratégiques et transformation. E-commerce, pilotage de delivery et équipes.",
      };
    case "product":
      return {
        title: `${BASE_NAME} — CV | Direction des opérations & performance digitale`,
        description:
          "CV de Cyril Ichti : orientation produit, roadmap et valeur business dans des environnements digitaux complexes. Programmes grands comptes, équipes pluridisciplinaires.",
      };
    default:
      return {
        title: `${BASE_NAME} — CV | Head of Product & Engineering`,
        description:
          "CV de Cyril Ichti : direction produit & engineering, stratégie digitale et gouvernance. Management d’équipes, périmètres transverses 100+, e-commerce et plateformes.",
      };
  }
}
