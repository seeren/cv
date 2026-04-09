import ScrumOrg from "../../../assets/psm1.svg?react";
import Zend from "../../../assets/zcpe.svg?react";

export const productData = {
  identity: {
    firstname: "cyril",
    lastname: "ichti",
    post: "Product Owner",
    phone: "06 58 66 55 14",
    mail: "cyril.ichti@gmail.com",
    linkedin: "fr.linkedin.com/in/cyril-ichti",
    address: "1 Impasse des Oeillets",
    zip: "34300",
    city: "Agde",
    country: "France",
  },
  profile: [
    "J’aligne valeur produit, exécution et adoption : backlog, roadmap et priorisation ; lien entre besoins métiers, retours utilisateurs et équipes de développement sur un portefeuille multi-produits.",
  ],
  experiences: [
    {
      title: "Directeur produit",
      company: "Web Expert Business",
      location: "Annecy",
      period: "2022 – aujourd'hui",
      intro:
        "Programme clients e-commerce Miliboo : roadmap business, jalons de livraison et mise en relation équipes métier & techniques.",
      achievements: [
        "Mise en place d’un cycle de jalons réguliers ; time-to-delivery ramené à 4 semaines.",
        "Analyse des besoins et conception fonctionnelle avec les métiers ; synchronisation des équipes.",
        "Priorisation et arbitrages sur le portefeuille ; suivi des sprints et des engagements.",
        "Rituels client renforçant visibilité ; contribution à l’adoption des solutions et à la qualité des livrables.",
        "Coordination transverse ; anticipation des mises en production et accompagnement au changement.",
        "Fiabilisation des parcours critiques et qualité de service sur les interfaces produit.",
      ],
    },
    {
      title: "Fondateur — consulting, services & produits numériques",
      company: "Seeren",
      location: "Lyon / Valence",
      period: "2011 – 2022",
      intro:
        "Consulting méthodes & organisation et lancement de produits numériques : accompagnement client, amélioration continue et relation produit sur missions multi-projets.",
      achievements: [
        "Accompagnement de clients : agilité, prévisibilité, réduction des frictions métiers / delivery.",
        "Priorisation et coordination sur des portefeuilles multi-clients.",
        "Conception et mise en marché de solutions digitales :  MVP applications mobiles, ebooks.",
        "Relation client de bout en bout : du cadrage du besoin à la livraison et au suivi des usages.",
      ],
    },
  ],
  skills: [
    {
      title: "Produit",
      items: ["Roadmap & jalons", "Priorisation & arbitrages"],
    },
    {
      title: "Discovery",
      items: ["Besoins & conception", "Retours & adoption"],
    },
    {
      title: "Agile",
      items: ["Sprints & engagements", "Rituels & visibilité"],
    },
    {
      title: "Transverse",
      items: ["Acceptation du changement", "UX"],
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
