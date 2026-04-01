import { Cpu, Rocket, Settings, Users } from "lucide-react";
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
    "15+ ans en direction IT/Product: j’aligne stratégie, gouvernance delivery et roadmap sur des environnements digitaux complexes. Management direct de 13 collaborateurs et orchestration transverse d’un périmètre 100+, avec arbitrages budget pour accélérer le time-to-market et fiabiliser la performance.",
  ],
  achievements: [
    {
      icon: Settings,
      title: "Transformation Product & Engineering",
      description:
        "Transformation de l'organisation Product & Engineering - SAFe / Scrum, roadmap Portfolio / Solution - pour rendre le delivery prévisible et maintenir la production avec ~30% de capacité en moins.",
    },
    {
      icon: Rocket,
      title: "Pilotage du portefeuille",
      description:
        "Pilotage d'un portefeuille de 11 produits avec une cadence de livraison adaptative, en sécurisant plusieurs incréments par cycle selon la valeur business priorisée.",
    },
    {
      icon: Cpu,
      title: "Impact business",
      description:
        "Accélération de la performance commerciale via des leviers à impact direct - paiements, prévision des ventes - contribuant à +20% sur le trimestre.",
    },
    {
      icon: Users,
      title: "Résilience opérationnelle",
      description:
        "Renforcement de la résilience des services en pilotant les incidents majeurs, la gouvernance SLA et les décisions go/no-go, avec rétablissement en moins d'une heure dans 90% des cas.",
    },
  ],
  experiences: [
    {
      title: "Directeur de programme Product & Tech",
      company: "Web Expert Business",
      location: "Annecy",
      period: "2022 – aujourd'hui",
      intro:
        "Direction de programme pour Miliboo sur la chaîne de valeur digitale, en gouvernance directe avec le CEO client pour aligner objectifs de croissance, capacité d'exécution et trajectoire produit/technologie.",
      achievements: [
        "Pilotage de la trajectoire Product & Tech d’un portefeuille de 11 produits numériques, cœur d’un périmètre e-commerce de 40 M€ de CA.",
        "Direction de programmes cross-fonctionnels (marketing, commerce, SAV, supply, qualité), avec alignement des interconnexions métiers et opérationnelles.",
        "Arbitrage des investissements entre refonte et production existante, avec décisions de périmètre orientées MVP pour sécuriser les engagements et accélérer la création de valeur.",
        "Transformation de l'operating model via SAFe: clarification des responsabilités, standardisation de la gouvernance et structuration des mécanismes de décision.",
        "Contribution à +20% de CA au Q1 2026 via la mise en place d'un outil de prévision des ventes, tout en sécurisant la continuité de service sur actifs critiques grâce à une gouvernance de crise.",
      ],
    },
    {
      title: "Fondateur / Dirigeant",
      company: "Seeren",
      location: "Valence",
      period: "2011 – 2022",
      intro:
        "Création et direction de Seeren pendant 11 ans, avec pilotage de missions de transformation digitale, de delivery multi-clients et de lancements produits, en responsabilité complète business/ops.",
      achievements: [
        "Structuration et pilotage d’une activité de services numériques en multi-comptes, avec arbitrages continus entre croissance, qualité de delivery et capacité d’exécution.",
        "Accompagnement de chefs de projet et PO sur les méthodes de travail et la gouvernance projet, avec amélioration de la prévisibilité des livraisons sur des dizaines de missions.",
        "Développement de l’activité jusqu’à ~300K€ de CA annuel avec une équipe resserrée de 3 collaborateurs et coordination d’interventions multisites.",
        "Conception et mise sur le marché de solutions digitales en logique MVP, 4 applications mobiles, 3 ebooks, time-to-market jusqu’à 3 mois.",
      ],
    }
  ],
  skills: [
    {
      title: "Leadership Product & Engineering",
      description: "Gouvernance, org design, pilotage transverse, décisions structurantes",
    },
    {
      title: "Stratégie & Exécution",
      description: "Roadmap, arbitrages build/run, priorisation par la valeur, delivery",
    },
    {
      title: "Performance & Résilience",
      description: "Continuité de service, gestion de crise, qualité d'exécution",
    },
    {
      title: "Innovation & Data",
      description: "IA appliquée, prévision, automatisation",
    },
  ],
  certifications: [
    {
      icon: ScrumOrg,
      title: "Professional Scrum Master 1 (PSM1)",
      delivery: "Scrum.org",
      date: "2018",
      id: "421856",
    },
    {
      icon: Zend,
      title: "Zend Certified Engineer (ZCPE)",
      delivery: "Zend",
      date: "2016",
      id: "ZEND028549",
    },
  ],
  educations: [
    {
      title: "Architecture",
      school: "École Nationale Supérieure d'Architecture de Marseille",
      period: "2008-2011",
    },
    {
      title: "Design d'espace",
      school: "École Supérieure des Métiers Artistiques de Montpellier",
      period: "2006-2008",
    },
  ],
};
