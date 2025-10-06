# CV - Cyril

Mon CV personnel développé avec React, TypeScript et Tailwind CSS. Le CV est optimisé pour l'impression au format A4.

## 🚀 Comment l'exécuter

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation et lancement

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
cd cv
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

4. Ouvrir votre navigateur sur `http://localhost:5173`

### Autres commandes disponibles

- `npm run build` - Construire la version de production
- `npm run preview` - Prévisualiser la version de production
- `npm run start` - Alternative à `npm run dev`

## 📄 Format A4

Le CV est conçu spécifiquement pour le format A4 (210mm × 297mm) et optimisé pour l'impression. Utilisez la fonction d'impression de votre navigateur (Ctrl/Cmd + P) pour imprimer ou sauvegarder en PDF.

## 🛠️ Technologies utilisées

- **React 19** - Framework JavaScript
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Vite** - Outil de build et serveur de développement
- **Lucide React** - Icônes

## 📁 Structure du projet

```
src/
├── components/         # Composants réutilisables
│   ├── A4.tsx          # Composant wrapper pour le format A4
│   ├── ButtonPrint.tsx # Bouton d'impression
│   ├── Section.tsx     # Composant de section
│   └── SectionHeading.tsx
├── features/           # Sections du CV
│   ├── achievements/   # Réalisations
│   ├── certifications/ # Certifications
│   ├── educations/     # Formation
│   ├── experiences/    # Expériences professionnelles
│   ├── identity/       # Informations personnelles
│   ├── profile/        # Profil/À propos
│   └── skills/         # Compétences
```
