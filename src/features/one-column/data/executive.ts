import ScrumOrg from "../../../assets/psm1.svg?react";
import Zend from "../../../assets/zcpe.svg?react";

export const executiveData = {
  identity: {
    firstname: "cyril",
    lastname: "ichti",
    post: "Head of Product & Engineering",
    phone: "06 58 66 55 14",
    mail: "cyril.ichti@gmail.com",
    linkedin: "fr.linkedin.com/in/cyril-ichti",
    address: "1 Impasse des Oeillets",
    zip: "34300",
    city: "Agde",
    country: "France",
  },
  profile: [
    "Je dirige une agence digitale de 10+ experts qui orchestre l’écosystème d’un acteur e-commerce à hauteur de 40 M€ de CA. De mes premières années d’entrepreneur à mon quotidien en direction 15 ans plus tard, je sécurise le business via le design du modèle d’exploitation adapté à l’activité et à son échelle."
  ],
  experiences: [
    {
      title: "Head of Product & Engineering",
      company: "Web Expert Business",
      location: "Annecy",
      period: "2022 – aujourd'hui",
      intro: "Reprise en main et redressement de l'agence en contexte de crise majeure. Relance d'un appareil de production bloqué, mise en amortissement des investissements, restauration de la confiance client.",
      achievements: [
        "Prévision de vente AI qui a amélioré la prédictibilité du niveau de stock et contribué à +20% de CA.",
        "Livraison de plusieurs applicatifs par an dans un delivery bloqué, l'activité est viabilisée.",
        "Cadence via rituels de transparence : alignement et synchronisation de 100+ contributeurs.",
        "Accompagnement au changement et suivi terrain jusqu'à adoption de produits initialement rejetés.",
        "Rupture avec un prestataire historique par absence de résultat pour sécuriser le run : SLO 99.98%.",
        "Renforcement de la qualité via une baisse de 30% de la capacité de production à périmètre constant.",
        "Séparation des Capex/Opex : réduction de 15% des investissements pour le même volume de build.",
        "Bascule vers un modèle AI-first avec cadrage des outils et des workflows, montée en compétences."
      ]
    },
    {
      title: "Fondateur — Produits & Services numériques",
      company: "Seeren",
      location: "Valence",
      period: "2011 – 2022",
      intro: "Création et direction d’une structure de lancement de produits numériques, direction de la stratégie, des opérations et des produits.",
      achievements: [
        "Direction de la structure, management de 2 salariés et croissance jusqu’à ~300K€ de CA.",
        "Gestion simultanée de portefeuilles multi-projets, multi-clients et produits internes.",
        "Arbitrage produit : lancement, sélection et arrêt d’initiatives pour concentrer les investissements.",
        "Accompagnement clients : déploiement Scrum/Agile en organisation produit & tech",
      ]
    }
  ],
  skills: [
    {
      title: "Décision",
      items: ["Priorisation valeur", "Arbitrage stratégique"],
    },
    {
      title: "Produit",
      items: ["Pilotage portefeuille", "Vision produit"],
    },
    {
      title: "Organisation",
      items: ["Structuration rôles", "Alignement transverse"],
    },
    {
      title: "Innovation",
      items: ["AI-first", "Automatisation", "Data-driven"],
    }
  ],
  certifications: [
    {
      icon: ScrumOrg,
      title: "Professional Scrum Master 1",
      delivery: "Scrum.org",
      date: "2018",
      id: "421856",
    },
    {
      icon: Zend,
      title: "Zend Certified Engineer",
      delivery: "Zend",
      date: "2016",
      id: "ZEND028549",
    },
  ],
  educations: [
    {
      title: "Architecture",
      school: "École Nationale Supérieure d'Architecture de Marseille",
      period: "2008 – 2011",
    },
    {
      title: "Design d'espace",
      school: "École Supérieure des Métiers Artistiques de Montpellier",
      period: "2005 – 2008",
    },
  ],
};
