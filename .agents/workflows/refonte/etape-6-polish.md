---
description: "Étape 6 — Polish: animations GSAP, SEO, responsive final, Lighthouse"
---

// turbo-all

## 6a. Animations GSAP globales

Ajouter des animations scroll sur toutes les sections du site:
- Chaque section: fade-in + translateY(30px) au scroll via ScrollTrigger
- Cards services: stagger 0.1s
- ProcessTeaser pastilles: stagger 0.08s au scroll
- Timeline accompagnement: déjà fait à l'étape 4
- Smooth, `ease: "power2.out"`, duration 0.8s
- `gsap.registerPlugin(ScrollTrigger)` dans chaque composant qui en a besoin
- Cleanup: `ScrollTrigger.getAll().forEach(t => t.kill())` dans useEffect cleanup

## 6b. SEO

Mettre à jour `_app.js`:
- Importer `useRouter`
- Objet `pageMeta` avec titre/description par route:
  - `/`: "Jean Doutrebente — Designer & Développeur" / description services
  - `/accompagnement`: "Comment je travaille — Jean Doutrebente" / description processus
  - `/contact`: "Contact — Jean Doutrebente" / description contact
  - `/cv`: garder les meta actuels basés sur CV.json
- Injecter dynamiquement dans `<Head>`

Mettre à jour `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>SITE_URL/</loc></url>
  <url><loc>SITE_URL/accompagnement</loc></url>
  <url><loc>SITE_URL/contact</loc></url>
  <url><loc>SITE_URL/cv</loc></url>
</urlset>
```
Remplacer `SITE_URL` par la valeur réelle ou générer dynamiquement.

Mettre à jour `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: SITE_URL/sitemap.xml
```

## 6c. Responsive final

Vérifier et ajuster chaque page aux breakpoints:
- 375px (mobile small)
- 768px (tablet)
- 940px (breakpoint mobile/desktop du projet)
- 1440px (desktop large)

Points d'attention:
- Hero: font-size réduit sur mobile, boutons empilés
- Services: 1 colonne mobile, 3 colonnes desktop
- ProcessTeaser: scroll horizontal mobile
- Timeline accompagnement: alternance supprimée en mobile
- Contact: 1 colonne mobile
- Header: hamburger menu < 940px
- Padding sections réduit sur mobile

## 6d. Lighthouse

Objectifs:
- Performance > 90
- Accessibility > 95
- SEO > 95
- Best Practices > 90

Actions si scores bas:
- Images: lazy loading, formats modernes
- Fonts: `display=swap` (déjà dans les tokens)
- Aria labels sur tous les éléments interactifs
- Alt text sur les images
- Contraste WCAG AA vérifié

## 6e. Build final

```bash
yarn build
```

Vérifier 0 erreurs, 0 warnings bloquants.

## Vérification

- `yarn build` sans erreur
- Lighthouse scores atteignent les objectifs
- Navigation complète fluide sur toutes les pages
- Animations smooth, pas de jank
- Responsive impeccable à tous les breakpoints
- Meta tags corrects sur chaque page
- sitemap.xml et robots.txt à jour
