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
    "J’aligne produit, technologie et business pour faire avancer les priorités et générer de l’impact. Management direct de 13 collaborateurs et orchestration transverse de périmètres 100+."
  ],
  experiences: [
    {
      title: "Directeur Product & Tech",
      company: "Web Expert Business",
      location: "Annecy",
      period: "2022 – aujourd'hui",
      intro: "Direction stratégique et opérationnelle des produits et de la technologie pour l'e-commerce Miliboo, en lien direct avec le CEO et les responsables métiers.",
      achievements: [
        "Priorisation et pilotage d’un portefeuille de 11 produits cœur d’un périmètre de 40 M€ de CA.",
        "Alignement des équipes : marketing, commercial, produit, après-vente, supply, qualité.",
        "Arbitrage refonte vs production : maintien du time-to-market et impact business.",
        "Transformation du modèle d’exploitation avec jalons mensuels et management par objectifs.",
        "Décisions produit fondées sur la data, contribuant à +20 % de CA au Q1 2026.",
        "Accompagnement de l’adoption d’un CRM initialement rejeté : suivi terrain jusqu'à adoption complète.",
        "Déploiement de pratiques AI-first et microservices pour faire progresser les produits.",
      ]
    },
    {
      title: "Founder & Product/Tech Leader",
      company: "Seeren",
      location: "Valence",
      period: "2011 – 2022",
      intro: "Création et direction d’une structure de lancement de produits numériques, direction de la stratégie, des opérations et des produits.",
      achievements: [
        "Direction de la structure, management de 2 salariés et croissance jusqu’à ~300K€ de CA.",
        "Gestion simultanée de portefeuilles multi-projets, multi-clients et produits internes.",
        "Arbitrage produit : lancement, sélection et arrêt d’initiatives pour concentrer les investissements.",
        "Accompagnement clients : déploiement Scrum/Agile en organisation produit & tech"
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
