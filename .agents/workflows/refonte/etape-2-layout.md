---
description: "Étape 2 — Migration CV vers /cv, Layout site (Header/Footer), _app.js conditionnel"
---

// turbo-all

## 2a. Créer pages/cv.js

Copier le contenu exact de `pages/index.js` dans `pages/cv.js`.
Identique: même dynamic imports IDE/MobileView, même logique responsive useMediaQuery.

## 2b. Layout site

Créer `components/site/Layout.tsx`:
- Props: `children: React.ReactNode`
- Structure: Header + `<main>{children}</main>` + Footer

**Header** (`components/site/Header.tsx`):
- Sticky top, fond transparent → `--bg-primary` au scroll (state `scrolled` via useEffect scroll listener)
- Gauche: "Jean Doutrebente" en Comfortaa, lien vers `/`
- Droite: liens nav — Accompagnement (`/accompagnement`), Contact (`/contact`), CV (`/cv`)
- CTA bouton: "Parlons de votre projet" → `/contact` (filled, --accent)
- Mobile (< 940px): hamburger menu, nav en overlay plein écran
- Textes depuis `locales/fr.json` → `nav`
- Transition: `--transition` sur background-color

**Footer** (`components/site/Footer.tsx`):
- Fond: `--bg-secondary`
- "Jean Doutrebente — Designer & Développeur"
- Liens: LinkedIn (`https://www.linkedin.com/in/jean-doutrebente-732884203/`), GitHub (`https://github.com/jeandout/`)
- "© 2026 Jean Doutrebente"

Créer `styles/site/Layout.module.css`.

## 2c. Modifier _app.js

- Import Layout depuis `components/site/Layout`
- `useRouter()` pour détecter la route
- Si `router.pathname === '/cv'` → render `<Component>` brut (pas de Layout)
- Sinon → `<Layout><Component /></Layout>`
- Mettre à jour les meta tags Head:
  - Titre: "Jean Doutrebente — Designer & Développeur"
  - Description: "Designer et développeur, j'accompagne les entreprises de l'identification du problème utilisateur jusqu'au prototype fonctionnel."
  - URL: `process.env.NEXT_PUBLIC_SITE_URL`
  - Keywords: "UX, UI, design, développement, prototypage, freelance, Paris"
  - Garder les OG tags, adapter le contenu

## 2d. Créer index.tsx (placeholder)

Supprimer `pages/index.js` (le contenu est maintenant dans `cv.js`).
Créer `pages/index.tsx`:
- Contenu temporaire: centré, "Site en construction" pour vérifier le Layout
- Sera remplacé à l'étape 3

## Vérification

- `/cv` affiche l'IDE identiquement à l'ancien `/`
- `/` affiche le placeholder AVEC Header + Footer
- Header/Footer n'apparaissent PAS sur `/cv`
- Navigation header: les liens pointent vers les bonnes routes
- Mobile: hamburger menu fonctionne
- Meta tags corrects (inspecter `<head>` dans le DOM)
