# État du workflow refonte-site

## Étape courante: 2

## Historique
- [x] Étape 1 — Setup TypeScript + Design Tokens + globals.css ✅
- [ ] Étape 2 — Migration CV /cv + Layout Header/Footer + _app.js
- [ ] Étape 3 — Page d'accueil (Hero, Services, Process, About, CTA)
- [ ] Étape 4 — Page accompagnement (Timeline interactive)
- [ ] Étape 5 — Page contact (formulaire + Cal.com)
- [ ] Étape 6 — Animations GSAP, SEO, responsive, Lighthouse

## Ce qui a été livré (étape 1)

### Fichiers créés/modifiés
- `styles/design-tokens.css` — tokens CSS (Comfortaa/Inter, palette dark, spacings)
- `styles/globals.css` — restructuré :
  - `body` = styles site par défaut (Inter, `--bg-primary`, `--text-primary`)
  - `h1-h6` = reset neutre sans font-family (Comfortaa appliqué via SiteLayout en étape 2)
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
- Comfortaa **non** appliqué globalement sur h1-h6 → sera scopé dans `SiteLayout`

## Notes pour l'étape 2
- `locales/fr.json` à créer (textes nav Header)
- `components/site/` dossier à créer
- `styles/site/` dossier pour CSS modules site
- L'IDE doit rester accessible à `/cv` (copie de index.js) et `/` devient la nouvelle home
