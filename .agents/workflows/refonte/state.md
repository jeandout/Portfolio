# État du workflow refonte-site

## Étape courante: terminée

## Historique
- [x] Étape 1 — Setup TypeScript + Design Tokens + globals.css ✅
- [x] Étape 2 — Migration CV /cv + Layout Header/Footer + _app.js ✅
- [x] Étape 3 — Page d'accueil (Hero, Services, Process, About, CTA) ✅
- [x] Étape 4 — Page accompagnement (Timeline interactive) ✅
- [x] Étape 5 — Page contact (formulaire + Cal.com) ✅
- [x] Étape 6 — Animations GSAP, SEO, responsive, Lighthouse ✅

## Ce qui a été livré (étape 1)

### Fichiers créés/modifiés
- `styles/design-tokens.css` — tokens CSS (Oxanium/Inter, palette dark, spacings)
- `styles/globals.css` — restructuré :
  - `body` = styles site par défaut (Inter, `--bg-primary`, `--text-primary`)
  - `h1-h6` = reset neutre sans font-family (Oxanium appliqué via SiteLayout en étape 2)
  - `.ide-root` = isolation complète IDE (police système, `rgb(31,31,31)`, `rgb(201,201,201)`, `line-height: normal`)
  - `.ide-root *` = reset font-family + line-height (héritent de `.ide-root`)
  - Classes legacy IDE conservées à l'identique
- `tsconfig.json` — `strict:false`, `allowJs:true`, `moduleResolution:bundler`
- `.env.local` — `NEXT_PUBLIC_SITE_URL` ajouté
- `pages/index.js` — IDE enveloppé dans `<div className="ide-root">`

### Règles CSS importantes
- `button { color: inherit }` — global, spéc. 0,0,1 — force l'héritage (contourne UA stylesheet)
- `.selectedFile { color: rgb(51, 118, 205) }` — spéc. 0,1,0 → gagne sur `button` → lien actif bleu ✅
- `.ide-root { color: rgb(201,201,201) }` — boutons inactifs héritent → gris ✅
- `.ide-root button` — PAS de `color` explicite (héritage suffit)
- Oxanium **non** appliqué globalement sur h1-h6 → sera scopé dans `SiteLayout`

## Ce qui a été livré (étape 5)

### Fichiers créés/modifiés
- `components/site/ContactForm.tsx` — formulaire complet avec états `idle/loading/success/error`
- `pages/contact.tsx` — page contact avec grille responsive (formulaire + bloc rendez-vous + contact direct)
- `styles/site/Contact.module.css` — styles du formulaire et de la page contact
- `locales/fr.json` — ajout de la clé `contact` (textes formulaire, RDV, infos directes)

## Ce qui a été livré (étape 6)

### Fichiers créés/modifiés
- `components/site/Services.tsx` — animation scroll section + stagger cards
- `components/site/ProcessTeaser.tsx` — animation scroll + stagger pastilles
- `components/site/About.tsx` — animation scroll fade/translate
- `components/site/CallToAction.tsx` — animation scroll fade/translate
- `components/site/Timeline.tsx` — harmonisation durée animation à 0.8s
- `pages/_app.js` — meta tags dynamiques par route (`/`, `/accompagnement`, `/contact`, `/cv`)
- `public/sitemap.xml` — URLs `/`, `/accompagnement`, `/contact`, `/cv`
- `public/robots.txt` — sitemap aligné sur le domaine de prod
- `styles/globals.css` — ajustements responsive globaux (container + section paddings)

### Vérification
- `yarn build` exécuté avec succès (0 erreur)
