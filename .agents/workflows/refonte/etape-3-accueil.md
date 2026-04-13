---
description: "Étape 3 — Page d'accueil complète (Hero, Services, Process, About, CTA)"
---

// turbo-all

## 3a. Fichier de textes

Créer `locales/fr.json` avec les textes du site:

```json
{
  "site": {
    "name": "Jean Doutrebente",
    "title": "Designer & Développeur",
    "tagline": "Je simplifie la vie de vos utilisateurs."
  },
  "hero": {
    "title": "Jean Doutrebente",
    "subtitle": "Je simplifie la vie de vos utilisateurs.",
    "description": "Designer et développeur, j'accompagne les entreprises de l'identification du problème utilisateur jusqu'au prototype fonctionnel. Une approche pragmatique, centrée sur vos utilisateurs.",
    "cta_primary": "Parlons de votre projet",
    "cta_secondary": "Comment je travaille"
  },
  "services": {
    "title": "Ce que je fais",
    "items": [
      {
        "title": "Comprendre",
        "description": "Audit UX, recherche utilisateur, entretiens. J'identifie les vrais problèmes avant de chercher des solutions.",
        "icon": "search"
      },
      {
        "title": "Concevoir",
        "description": "Wireframes, architecture fonctionnelle, prototypes. Je structure l'expérience pour qu'elle soit claire et efficace.",
        "icon": "pencil"
      },
      {
        "title": "Développer",
        "description": "Prototypes fonctionnels, applications web et mobile. Je code ce que je conçois — pas de perte en traduction.",
        "icon": "code"
      }
    ],
    "note": "Je peux aussi vous orienter vers des solutions existantes si elles répondent mieux à votre besoin."
  },
  "process_teaser": {
    "title": "Un projet, étape par étape",
    "steps": ["Échange", "Problématique", "Recherche", "Benchmark", "Solutions", "Wireframes", "Prototype", "Livraison"],
    "cta": "Voir le détail de mon accompagnement"
  },
  "about": {
    "title": "Qui suis-je",
    "text": "7 ans d'expérience en design UX et gestion de projet, complétés par une formation intensive en développement web et mobile. Mon profil hybride me permet de penser un produit de bout en bout : de la compréhension du besoin utilisateur jusqu'à sa mise en production.",
    "cta": "Voir mon parcours complet"
  },
  "cta_final": {
    "title": "Un projet ? Une idée ?",
    "subtitle": "Discutons-en.",
    "button": "Me contacter"
  },
  "nav": {
    "accompagnement": "Accompagnement",
    "contact": "Contact",
    "cv": "CV"
  },
  "footer": {
    "copyright": "© 2026 Jean Doutrebente"
  }
}
```

## 3b. Composants

Créer dans `components/site/` + `styles/site/Home.module.css`:

**Hero.tsx**
- Fond: gradient radial subtil depuis `--accent` à ~5% opacité
- Titre h1 Oxanium: `--font-size-4xl` desktop, `--font-size-2xl` mobile
- Sous-titre Inter: `--text-secondary`
- Description: `--text-secondary`, max-width 600px
- Bouton primaire: filled `--accent`, texte blanc, hover `--accent-hover`
- Bouton secondaire: outline `--accent`, hover fill
- Animation GSAP: fade-in + translateY(40px) sur titre, subtitle, boutons (stagger 0.15s)
- Section min-height ~80vh, flex centré

**Services.tsx**
- Titre h2 Oxanium centré
- Grille CSS: 3 colonnes desktop (`repeat(3, 1fr)`), 1 colonne mobile
- Cards: padding 32px, border `--border`, border-radius `--radius-lg`, bg `--bg-secondary`
- Hover: translateY(-4px), border-color `--accent`, transition `--transition`
- Icônes: react-icons `HiOutlineSearch`, `HiOutlinePencilAlt`, `HiOutlineCode` taille 32px couleur `--accent`
- Note en bas: `--text-secondary`, font-style italic, centré

**ProcessTeaser.tsx**
- Timeline horizontale: flex row, overflow-x auto sur mobile
- 8 pastilles rondes (40px) numérotées, fond `--accent`, texte blanc
- Ligne de connexion: 2px `--border` entre les pastilles
- Labels sous chaque pastille: `--font-size-sm`, `--text-secondary`
- Lien "Voir le détail →" en `--accent`
- padding: `--section-padding` vertical

**About.tsx**
- Section simple, centré, max-width 700px, margin auto
- Titre h2 Oxanium
- Paragraphe Inter `--text-secondary`
- Lien vers `/cv`: "Voir mon parcours complet →" en `--accent`

**CallToAction.tsx**
- Section pleine largeur, fond `--bg-secondary`
- Titre h2 Oxanium grand + sous-titre
- Bouton large: filled `--accent`, padding généreux, border-radius `--radius`
- Lien vers `/contact`

## 3c. Assembler la page

`pages/index.tsx` — remplacer le placeholder:
```tsx
import Hero from '../components/site/Hero';
import Services from '../components/site/Services';
import ProcessTeaser from '../components/site/ProcessTeaser';
import About from '../components/site/About';
import CallToAction from '../components/site/CallToAction';
import texts from '../locales/fr.json';

export default function Home() {
  return (
    <>
      <Hero texts={texts.hero} />
      <Services texts={texts.services} />
      <ProcessTeaser texts={texts.process_teaser} />
      <About texts={texts.about} />
      <CallToAction texts={texts.cta_final} />
    </>
  );
}
```

## Vérification

- `/` affiche les 5 sections dans l'ordre avec le bon design
- Responsive: 375px (1 col, tailles réduites), 768px, 1440px (3 cols services)
- GSAP fade-in fonctionne au chargement du hero
- ProcessTeaser scrollable horizontalement sur mobile
- Liens: CTA primaire → `/contact`, CTA secondaire → `/accompagnement`, About → `/cv`
- `/cv` fonctionne toujours
