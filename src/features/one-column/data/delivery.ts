import ScrumOrg from "../../../assets/psm1.svg?react";
import Zend from "../../../assets/zcpe.svg?react";

export const deliveryData = {
  identity: {
    firstname: "cyril",
    lastname: "ichti",
    post: "Directeur de programme",
    phone: "06 58 66 55 14",
    mail: "cyril.ichti@gmail.com",
    linkedin: "fr.linkedin.com/in/cyril-ichti",
    address: "1 Impasse des Oeillets",
    zip: "34300",
    city: "Agde",
    country: "France",
  },
  profile: [
    "Je structure et fiabilise l’exécution de programmes : gouvernance de portefeuille, maîtrise des risques et des engagements, coordination transverse avec les métiers et la finance. Management direct de 13 collaborateurs et orchestration de périmètres 100+ côté client.",
  ],
  experiences: [
    {
      title: "Directeur de programme",
      company: "Web Expert Business",
      location: "Annecy",
      period: "2022 – aujourd'hui",
      intro:
        "Programme Miliboo : conduite du delivery multi-produits ; alignement des équipes, de la finance client et des partenaires sur les priorités et les engagements.",
      achievements: [
        "Conduite d’un portefeuille de 11 produits au cœur d’un périmètre e-commerce de ~40 M€ CA.",
        "Alignement des budgets et des investissements avec la direction financière client.",
        "Cadence de livraison par sprints, jalons et indicateurs pour stabiliser la prévisibilité et la visibilité.",
        "Transformation des pratiques (SAFe, rituels de gouvernance) pour fiabiliser la chaîne de delivery.",
        "Continuité de service sur actifs critiques : gestion d’incidents et SLA de 99,9%.",
        "Animation des instances de pilotage client et renforcement de la relation de confiance.",
      ],
    },
    {
      title: "Fondateur / Dirigeant",
      company: "Seeren",
      location: "Valence",
      period: "2011 – 2022",
      intro:
        "Création et direction d’une structure de services numériques : responsabilité complète des opérations, du delivery multi-clients et de la qualité de service.",
      achievements: [
        "Direction de la structure, management de salariés et développement jusqu’à ~300 K€ de CA annuel.",
        "Portefeuilles multi-projets et multi-clients, avec priorisation et respect des engagements.",
        "Responsabilité des plannings, de la qualité de delivery et des interactions clients sur nos missions.",
        "Accompagnement d’organisations clientes : introduction d’Agile / Scrum pour structurer le delivery.",
      ],
    },
  ],
  skills: [
    {
      title: "Programme",
      items: ["Portefeuille projets", "Risques & jalons"],
    },
    {
      title: "Exécution",
      items: ["Prévisibilité livraisons", "Continuité de service"],
    },
    {
      title: "Transversalité",
      items: ["Métiers & DSI", "Finance & priorisation"],
    },
    {
      title: "Méthodes",
      items: ["Agile", "Scrum", "SAFe"],
    },
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
