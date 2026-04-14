import ScrumOrg from "../../../assets/psm1.svg?react";
import Zend from "../../../assets/zcpe.svg?react";

export const defaultData = {
    identity: {
        firstname: "cyril",
        lastname: "ichti",
        post: "Directeur de programme / Product & Delivery",
        phone: "06 58 66 55 14",
        mail: "cyril.ichti@gmail.com",
        linkedin: "fr.linkedin.com/in/cyril-ichti",
        address: "1 Impasse des Oeillets",
        zip: "34300",
        city: "Agde",
        country: "France",
    },

    profile: [
        "Je pilote des programmes et produits en combinant stratégie produit, delivery et transformation des organisations. Responsable de périmètres multi-produits jusqu’à 40M€ de CA et 100+ contributeurs"
    ],
    experiences: [
        {
            title: "Directeur de programme / Product & Delivery",
            company: "Web Expert Business",
            location: "Annecy",
            period: "2022 – aujourd'hui",
            intro:
                "Pilotage d’un programme e-commerce avec responsabilité sur la stratégie produit, le delivery et la coordination des équipes métiers et techniques.",
            achievements: [
                "Pilotage d’un portefeuille de 11 produits au cœur d’un périmètre e-commerce de ~40 M€ de CA.",
                "Mise en place d’indicateurs de performance produit contribuant à +20 % de CA.",
                "Alignement des équipes métiers, produit, tech et finance autour des priorités et des engagements.",
                "Structuration du delivery (jalons, sprints, gouvernance) pour améliorer la prévisibilité.",
                "Transformation des pratiques Agile (Scrum, SAFe) pour fiabiliser la chaîne de delivery."
            ],
        },

        {
            title: "Fondateur / Directeur — Services & Produits numériques",
            company: "Seeren",
            location: "Valence",
            period: "2011 – 2022",
            intro:
                "Création et direction d’une structure de services et produits numériques combinant conseil, delivery multi-clients et lancement de produits.",
            achievements: [
                "Développement de l’activité jusqu’à ~300 K€ de CA annuel.",
                "Gestion de portefeuilles multi-projets et multi-clients avec priorisation et respect des engagements.",
                "Pilotage du delivery et de la qualité de service sur des missions variées."
            ],
        },

        {
            title: "Intégrateur web",
            company: "L&G Conseil Informatique",
            location: "Aix-en-Provence",
            period: "2008 – 2011",
            intro:
                "Réalisation de sites web et d’interfaces front-end dans un contexte de projets clients.",
            achievements: [],
        },
    ],

    skills: [
        {
            title: "Programme & Delivery",
            items: ["Pilotage", "Gestion de portefeuille"],
        },
        {
            title: "Produit",
            items: ["Roadmap produit", "KPI & performance"],
        },
        {
            title: "Transformation",
            items: ["Agile", "Conduite du changement"],
        },
        {
            title: "Leadership",
            items: ["Management d’équipe", "Coordination"],
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