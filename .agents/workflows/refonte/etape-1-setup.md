---
description: "Étape 1 — Setup TypeScript, Design Tokens, globals.css, env"
---

// turbo-all

## 1a. TypeScript

```bash
yarn add -D typescript @types/react @types/node
```

Créer `tsconfig.json` à la racine (Next.js le pré-remplit au prochain `yarn dev`).
Lancer `yarn dev` une fois pour que Next.js génère `next-env.d.ts`.
Vérifier que les fichiers `.js` existants continuent de fonctionner.

## 1b. Design tokens

Créer `styles/design-tokens.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@600;700&family=Inter:wght@400;500;600&display=swap');

:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --bg-elevated: #1a1a1a;
  --border: rgba(255, 255, 255, 0.08);
  --text-primary: #f5f5f5;
  --text-secondary: #a0a0a0;
  --accent: #6b8aad;
  --accent-hover: #8ba5c4;

  --font-heading: 'Comfortaa', cursive;
  --font-body: 'Inter', sans-serif;
  --font-size-base: 16px;
  --font-size-sm: 14px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;
  --font-size-2xl: 36px;
  --font-size-3xl: 48px;
  --font-size-4xl: 64px;
  --line-height: 1.6;

  --section-padding: 120px;
  --container-max: 1200px;
  --radius: 8px;
  --radius-lg: 16px;

  --transition: 0.3s ease;
  --transition-slow: 0.6s ease;
}
```

## 1c. Refonte globals.css

Réécrire `globals.css`:
- Importer `design-tokens.css` en premier
- Reset minimal pour le SITE (html, body, typographie avec les tokens)
- NE PAS casser les styles IDE legacy — ils sont dans CSS Modules
- Ajouter classes utilitaires: `.container` (max-width, margin auto, padding), `.section` (padding vertical)
- CONSERVER tels quels les anciens styles globaux utilisés par l'IDE: `.tab`, `.selectedTab`, `.selectedTextTab`, `.resizer`, `.resizerH`, `.editorContent`, `.profilContent`, `.menuTitle`, `.folderInNav`, `.folderInNavIcon`, `.folderInNavContent`, `.selectedFile`, `.console`, `.sendButton`

## 1d. Variable d'environnement

Ajouter dans `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://jeandoutrebente.vercel.app
```

## Vérification

- `yarn dev` démarre sans erreur
- `/` (page actuelle IDE) fonctionne toujours identiquement
- `:root` dans le navigateur contient les tokens CSS (DevTools → Computed)
- Comfortaa et Inter chargées (onglet Network → Fonts)
