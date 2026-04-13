---
description: "Étape 5 — Page contact (formulaire + Cal.com + infos)"
---

// turbo-all

## 5a. Ajouter les textes

Ajouter dans `locales/fr.json` (clé `contact`):

```json
"contact": {
  "title": "Discutons de votre projet",
  "subtitle": "Un formulaire, un café, un appel — comme vous préférez.",
  "form": {
    "name": "Votre nom",
    "email": "Votre email",
    "message": "Votre message",
    "submit": "Envoyer",
    "success": "Message envoyé ! Je reviens vers vous rapidement.",
    "error": "Une erreur est survenue. Réessayez ou contactez-moi directement."
  },
  "booking": {
    "title": "Préférez un rendez-vous ?",
    "description": "Réservez un créneau de 30 minutes pour discuter de votre projet.",
    "button": "Prendre rendez-vous"
  },
  "info": {
    "linkedin": "https://www.linkedin.com/in/jean-doutrebente-732884203/"
  }
}
```

## 5b. Formulaire de contact

Créer `components/site/ContactForm.tsx`:
- Props: `texts: typeof fr.contact.form`
- Champs: nom (text), email (email), message (textarea)
- Style: fond `--bg-secondary`, border `--border`, border-radius `--radius`
- Focus: border-color `--accent`, outline none
- Labels: `--text-secondary`, Inter `--font-size-sm`
- Bouton submit: filled `--accent`, disabled pendant loading
- États:
  - `idle`: formulaire normal
  - `loading`: bouton disabled + spinner/texte "Envoi..."
  - `success`: message vert + formulaire reset
  - `error`: message rouge + bouton réactivé
- Envoi: POST vers `process.env.NEXT_PUBLIC_API_URL` (même endpoint que Console.js)
- Fallback si pas d'API: afficher l'email en direct

## 5c. Bloc rendez-vous

Pour l'instant (avant création du compte Cal.com):
- Bouton "Prendre rendez-vous" comme lien externe (href configurable, placeholder `#`)
- Texte explicatif + icône calendrier (react-icons `HiOutlineCalendar`)
- Quand le compte Cal.com sera créé: remplacer par embed `@calcom/embed-react`

## 5d. Page contact

Créer `pages/contact.tsx`:
- Layout: 2 colonnes desktop (60% formulaire / 40% RDV + infos), 1 colonne mobile
- Colonne gauche: `<ContactForm>`
- Colonne droite:
  - Bloc RDV (titre, description, bouton)
  - Séparateur
  - Infos directes: email (lien mailto), LinkedIn (lien externe)
- Titre de page: h1 Oxanium centré au-dessus des colonnes
- Sous-titre: `--text-secondary`

Créer `styles/site/Contact.module.css`:
- Grid 2 colonnes: `grid-template-columns: 1.5fr 1fr` desktop
- Gap: 48px
- Mobile: `grid-template-columns: 1fr`
- Padding-top pour le header sticky

## Vérification

- `/contact` affiche formulaire + bloc RDV + infos
- Formulaire: les champs ont le bon style, focus visible
- Submit: envoie les données vers l'API (ou affiche l'email en fallback)
- États loading/success/error fonctionnent
- Responsive: 1 colonne mobile, 2 colonnes desktop
- Navigation complète: `/` ↔ `/accompagnement` ↔ `/contact` ↔ `/cv`
