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
      intro: "Ascension rapide de contributeur à directeur pour redresser l'agence en contexte de crise. Relance de la production bloquée, mise en amortissement des investissements et restauration de la confiance.",
      achievements: [
        "Déploiement d'une IA de prévision des ventes améliorant les stocks et contribuant à +20% de CA.",
        "Synchronisation et alignement de 75+ contributeurs via des rituels de transparence.",
        "Accompagnement terrain et conduite du changement pour adopter des produits rejetés au départ.",
        "Rupture de contrats prestataires infructueux pour sécuriser le run : atteinte d'un SLO à 99.98%.",
        "Optimisation des Capex/Opex : réduction de 15% des investissements à volume de build constant.",
        "Bascule vers un modèle AI-first avec cadrage des outils, des workflows et montée en compétences."
      ]
    },
    {
      title: "Fondateur — Produits & Services numériques",
      company: "Seeren",
      location: "Valence",
      period: "2011 – 2022",
      intro: "Création et direction d'une structure de services numériques et d'infrastructure. Gestion de la trésorerie, pivots de l'offre pour sécuriser le cash-flow et évolution vers du consulting.",
      achievements: [
        "Gestion du cash et diversification de l'activité pour viabiliser puis pérenniser la structure.",
        "Montée en compétences rapide sur des technologies complexes pour assurer des TJM élevés.",
        "Missions de conseil technique et méthodologique, réalisation d'audits de sécurité.",
        "Lancement et arbitrage de plusieurs produits propres (Web, iOS/Android, Ebooks) en Fast-Fail."
      ]
    }
  ],
  skills: [
    {
      title: "Stratégie",
      items: ["Arbitrage budgétaire", "Priorisation valeur"],
    },
    {
      title: "Produit",
      items: ["Pilotage portefeuille", "Gouvernance roadmap"],
    },
    {
      title: "Organisation",
      items: ["Design d'organisation", "Alignement transverse"],
    },
    {
      title: "Innovation",
      items: ["AI-first", "Data-driven", "Automatisation"],
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
