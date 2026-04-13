# Portfolio → Site Services Jean Doutrebente — Règles Agent

Stack: Next.js 15 (Pages Router), React 18, CSS Modules, GSAP, react-responsive, react-icons
Nouveaux composants: TypeScript (.tsx) dans `components/site/` et pages `index|accompagnement|contact`
Composants IDE legacy: JS (.js) — pas de migration TS
PM: Yarn | Deploy: Vercel | Dev: `yarn dev` (port 3001)
Données CV: `public/CV.json` — source unique pour `/cv` uniquement

## Design system

Tokens dans `styles/design-tokens.css`
Palette dark premium: bg `#0a0a0a`, secondary `#141414`, accent bleu acier `#6b8aad`, hover `#8ba5c4`
Typo: Oxanium (titres 600/700) + Inter (corps 400/16px)
WCAG AA minimum partout

## Conventions

- Langue interface: FR | Code: EN (variables, composants) + FR (commentaires)
- Pas d'App Router, pas de TailwindCSS
- Breakpoint mobile/desktop: 940px (`react-responsive`)
- Pages site: Layout commun (Header/Footer) — exclu de `/cv`
- `/cv`: SSR désactivé, IDE + MobileView via `next/dynamic`
- URL site: `NEXT_PUBLIC_SITE_URL` dans `.env.local`
- API contact: `NEXT_PUBLIC_API_URL` dans `.env.local`

## Structure

```
pages/: index.tsx, accompagnement.tsx, contact.tsx, cv.js, _app.js
components/site/: Layout, Header, Footer, Hero, Services, ProcessTeaser, About, CallToAction, Timeline, ContactForm (.tsx)
components/: IDE, Editor, EditorContent, Console, MobileView, FolderInNav, ProfilPic (.js legacy)
styles/: design-tokens.css, globals.css, site/*.module.css, *.module.css (legacy)
locales/: fr.json (prêt pour i18n)
```

## Pièges

> [!WARNING]
> Ne jamais modifier `CV.json` sans adapter `EditorContent.js` et `MobileView.js` — switch/case sur titres.

> [!WARNING]
> `.env.local` contient `NEXT_PUBLIC_API_URL` et `NEXT_PUBLIC_SITE_URL` — ne jamais commiter.

> [!WARNING]
> `globals.css` sert les deux contextes (site + IDE). Les styles IDE restent dans leurs CSS Modules.
