import { Cpu, Rocket, Settings, Users } from "lucide-react";
import ScrumOrg from "../../../assets/psm1.svg?react";
import Zend from "../../../assets/zcpe.svg?react";

export const deliveryData = {
  identity: {
    firstname: "cyril",
    lastname: "ichti",
    post: "Directeur des Opérations et de la Performance Digitale",
    phone: "06 58 66 55 14",
    mail: "cyril.ichti@gmail.com",
    linkedin: "fr.linkedin.com/in/cyril-ichti",
    city: "Annecy",
    country: "France",
  },
  profile: [
    "Directeur des opérations digitales, je pilote un programme stratégique pour un client majeur (CA > 40 M€) avec une équipe de 13 personnes, en structurant les workflows et en maximisant la performance collective pour créer de la valeur business durable.",
  ],
  achievements: [
    {
      icon: Rocket,
      title: "Opérations & Delivery",
      description:
        "7 produits majeurs (e-commerce et backoffice) livrés en 18 mois par une équipe multi-disciplinaire, lancement réduit à 4 semaines grâce à l’approche MVP.",
    },
    {
      icon: Settings,
      title: "Performance & Organisation",
      description:
        "Culture de responsabilité partagée instaurée sur 4 équipes, réduisant le turnover de 50% et augmentant la prévisibilité des livraisons.",
    },
    {
      icon: Cpu,
      title: "Transformation Digitale",
      description:
        "Refonte d’un produit obsolète en un produit modulable garantissant continuité et scalabilité des services.",
    },
    {
      icon: Users,
      title: "Leadership & Cohésion",
      description:
        "Orchestration des équipes pour garantir 90% des engagements respectés, planification et staffing optimisés selon les priorités stratégiques.",
    },
  ],
  experiences: [
    {
      title: "Directeur de projet digital",
      company: "Web Expert Business",
      period: "2022 – aujourd'hui",
      achievements: [
        "Pilotage d’un programme de 11 produits mobilisant plus de 100 collaborateurs.",
        "Collaboration directe avec la direction financière client pour aligner budgets et priorités d’investissement.",
        "Priorisation et arbitrages : rythme de livraison de 6 jalons/mois.",
        "Optimisation des ressources et recrutement ciblé pour soutenir la roadmap.",
        "Performance opérationnelle : rétablissement moyen <1h lors des incidents.",
      ],
    },
    {
      title: "Fondateur / Dirigeant",
      company: "Seeren",
      period: "2011 – 2022",
      achievements: [
        "Polyvalence sur 10 ans : jusqu'à 3 salariés et ~300K CA/an en prestation de services",
        "Responsable des planning, de la qualité, du delivery et des interactions clients.",
        "Conception et livraison de solutions variées : apps mobiles, outils web, ebooks et mini-jeux.",
      ],
    },
    {
      title: "Intégrateur web",
      company: "L&G Conseil Informatique",
      period: "2008 – 2011",
      achievements: ["Réalisation de sites web et d’interfaces front-end pour 2 clients."],
    },
  ],
  skills: [
    {
      title: "Leadership & Management",
      description: "Pilotage, coaching, recrutement, stratégie opérationnelle.",
    },
    {
      title: "Architecture & Delivery",
      description: "Conception et livraison de plateformes digitales multi-produits.",
    },
    {
      title: "Méthodes",
      description: "Agile, Scrum, SAFe, Kanban",
    },
    {
      title: "Domaines",
      description: "E-commerce, marketplaces, transformation digitale",
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
