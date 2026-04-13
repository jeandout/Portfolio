---
description: "Étape 4 — Page accompagnement avec timeline verticale interactive GSAP"
---

// turbo-all

## 4a. Ajouter les textes

Ajouter dans `locales/fr.json` (clé `accompagnement`):

```json
"accompagnement": {
  "title": "Comment je travaille",
  "subtitle": "Chaque projet suit un parcours adapté, étape par étape.",
  "steps": [
    {"title": "Échange initial", "description": "On discute de votre contexte, vos objectifs, vos contraintes. L'idée est de comprendre votre situation avant tout."},
    {"title": "Identification de la problématique", "description": "Je reformule le problème réel à résoudre. Souvent, la vraie difficulté n'est pas celle qu'on imagine au départ."},
    {"title": "Recherche utilisateur", "description": "Entretiens, observations, personas. Je vais à la rencontre de vos utilisateurs pour comprendre leurs besoins réels."},
    {"title": "Cartographie d'expérience", "description": "Je cartographie les parcours, identifie les points de friction et les opportunités d'amélioration."},
    {"title": "Benchmark", "description": "Analyse de l'existant et des solutions du marché. Ce qui fonctionne ailleurs peut inspirer — ou être directement recommandé."},
    {"title": "Exploration de solutions", "description": "Idéation et priorisation. Je propose des pistes concrètes, y compris des outils existants si c'est plus pertinent."},
    {"title": "Wireframes & Architecture", "description": "Arborescence fonctionnelle et maquettes fil de fer. La structure avant l'habillage."},
    {"title": "Prototypage", "description": "Prototype fonctionnel et interactif, en code. Pas un mockup statique — un outil testable."},
    {"title": "Itération & livraison", "description": "Tests utilisateur, ajustements, mise en production par blocs fonctionnels. On avance de manière pragmatique."}
  ],
  "cta": "Prêt à démarrer ?"
}
```

## 4b. Composant Timeline

Créer `components/site/Timeline.tsx`:
- Props: `steps: Array<{title: string, description: string}>`
- Timeline verticale: ligne de connexion 2px `--border` au centre (desktop) ou à gauche (mobile)
- Chaque étape:
  - Pastille ronde 48px avec numéro, fond `--accent`, texte blanc, Comfortaa 700
  - Titre h3 Comfortaa `--text-primary`
  - Description p Inter `--text-secondary`
- Desktop: alternance gauche/droite (étapes impaires à gauche, paires à droite)
- Mobile (< 940px): tout à droite de la ligne
- Animation GSAP ScrollTrigger: chaque étape fade-in + translateX(30px ou -30px selon le côté), trigger à 80% du viewport
- `gsap.registerPlugin(ScrollTrigger)` au mount, cleanup au unmount

## 4c. Page accompagnement

Créer `pages/accompagnement.tsx`:
```tsx
import Timeline from '../components/site/Timeline';
import CallToAction from '../components/site/CallToAction';
import texts from '../locales/fr.json';
import styles from '../styles/site/Accompagnement.module.css';

export default function Accompagnement() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>{texts.accompagnement.title}</h1>
        <p>{texts.accompagnement.subtitle}</p>
      </header>
      <Timeline steps={texts.accompagnement.steps} />
      <CallToAction texts={{ title: texts.accompagnement.cta, subtitle: "", button: "Me contacter" }} />
    </div>
  );
}
```

Créer `styles/site/Accompagnement.module.css`:
- `.page`: padding-top pour compenser le header sticky
- `.pageHeader`: centré, titre Comfortaa `--font-size-3xl`, sous-titre `--text-secondary`, margin-bottom large

## Vérification

- `/accompagnement` affiche titre + 9 étapes dans la timeline + CTA
- ScrollTrigger: les étapes apparaissent au scroll avec animation
- Alternance gauche/droite sur desktop
- Mobile: tout aligné à droite de la ligne
- CTA "Prêt à démarrer ?" → pointe vers `/contact`
- Navigation retour vers `/` fonctionne via le header
