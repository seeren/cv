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
    "Head of Product & Engineering avec 15+ ans d’expérience dans la structuration et le pilotage de plateformes digitales complexes. Je crée des organisations capables de délivrer rapidement et à l’échelle, en alignant stratégie business, produit et technologie. Management direct de 13 collaborateurs et orchestration transverse de périmètres 100+, avec responsabilité sur roadmap, arbitrages d’investissement et performance globale des produits."
  ],
  achievements: [
    {
      icon: Settings,
      title: "Transformation Product & Engineering",
      description:
        "Transformation de l’organisation Product & Engineering : clarification des rôles, gouvernance de portefeuille et pilotage des dépendances, pour rendre l’exécution prévisible et préserver la performance avec ~30% de capacité en moins.",
    },
    {
      icon: Rocket,
      title: "Pilotage du portefeuille",
      description:
        "Pilotage d’un portefeuille de 11 produits avec un rythme d’investissement adaptatif, en priorisant les jalons à plus forte valeur business.",
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
        "Renforcement de la résilience des services : pilotage des incidents majeurs, exigences de niveau de service et décisions de lancement, avec rétablissement en moins d'une heure dans 90% des cas.",
    },
  ],
  experiences: [
    {
      title: "Directeur Product & Tech",
      company: "Web Expert Business",
      location: "Annecy",
      period: "2022 – aujourd'hui",
      intro: "Head of Product & Engineering pour Miliboo, responsable de l’alignement stratégique et opérationnel entre produit, technologie et business, avec gouvernance directe auprès du CEO et coordination des équipes multi-fonctionnelles sur la chaîne de valeur digitale.",
      achievements: [
        "Pilotage d’un portefeuille de 11 produits numériques couvrant l’ensemble du parcours e-commerce, cœur d’un périmètre de 40 M€ de CA.",
        "Direction d’équipes cross-fonctionnelles (marketing, commerce, SAV, supply, qualité), avec alignement des interconnexions métiers et opérationnelles.",
        "Arbitrage des investissements entre refonte et production existante, en priorisant la valeur business et la rapidité d’impact pour sécuriser les engagements.",
        "Transformation du modèle d’exploitation : clarification des rôles, gouvernance unifiée et mécanismes de décision structurés pour améliorer la prévisibilité et l’efficacité de la delivery.",
        "• Transformation globale de l’organisation Product & Engineering, améliorant la capacité de delivery, la résilience des plateformes et la contribution directe à la croissance.",
        "Mise en place d’un outil de prévision des ventes contribuant à +20% de CA au Q1 2026.",
        "Renforcement de la résilience des services critiques : gouvernance de crise, remédiation rapide et maintien de la continuité de service.",
        "Transformation de l’adoption d’un CRM initialement rejeté : co-construction avec les équipes commerciales, intégration au cycle MVP, mise en place d’une transition progressive (ancien/nouveau système) et accompagnement terrain, aboutissant à une adoption complète et à l’alignement des usages métier.",
        "Évolution de l’architecture vers un modèle distribué et scalable : introduction d’une logique event-driven (Kafka), définition des standards d’intégration (API, RPC) et découplage des services pour renforcer la résilience et soutenir la croissance",
        "Mise en place d’un PIM enrichi par l’IA pour automatiser la production de contenus (traduction, éditorial, SEO), remplaçant des processus manuels et améliorant la scalabilité et la performance marketing.",
        "Introduction d’une approche AI-first dans les pratiques engineering, augmentant la productivité des équipes et permettant une réduction d’environ 30% des effectifs à vélocité constante.",
      ]
    },
    {
      title: "Founder & Product/Tech Leader",
      company: "Seeren",
      location: "Valence",
      period: "2011 – 2022",
      intro: "Création et direction d’une structure de transformation digitale et de lancement de produits numériques multi-clients, avec responsabilité business et opérationnelle complète.",
      achievements: [
        "Pilotage global : stratégie, organisation, delivery et innovation produit.",
        "Structuration et management d’équipes, coordination multisites et multi-clients.",
        "Conception et lancement de 4 applications mobiles et 3 ebooks avec cycles courts (MVP en ≤3 mois).",
        "Développement de l’activité jusqu’à ~300K€ CA annuel, avec amélioration continue de la performance et de la satisfaction client.",
      ]
    }
  ],
  skills: [
    {
      title: "Leadership Product & Engineering",
      description: "Gouvernance, org design, pilotage transverse, décisions structurantes",
    },
    {
      title: "Stratégie & Exécution",
      description: "Roadmap, arbitrages build/run, priorisation par la valeur, performance opérationnelle",
    },
    {
      title: "Performance & Résilience",
      description: "Continuité de service, gestion de crise, qualité d'exécution",
    },
    {
      title: "Innovation & Data",
      description: "IA appliquée, prévision, automatisation",
    },
    {
      title: "Product Strategy & Lifecycle",
      description: "Discovery, roadmap, priorisation, arbitrage build/run, adoption et impact business."
    }
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
