import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Layout from '../components/site/Layout';
import { ThemeContext } from '../components/site/ThemeContext';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jeandoutrebente.vercel.app';
const KEYWORDS = 'UX, UI, design, développement, prototypage, freelance, Paris';
const DEFAULT_META = {
  title: 'Jean Doutrebente — Designer & Développeur',
  description:
    "Designer et développeur, j'accompagne les entreprises de l'identification du problème utilisateur jusqu'au prototype fonctionnel."
};

const PAGE_META = {
  '/': {
    title: 'Jean Doutrebente — Designer & Développeur',
    description:
      "Designer et développeur, j'accompagne les entreprises de l'identification du problème utilisateur jusqu'au prototype fonctionnel."
  },
  '/accompagnement': {
    title: 'Comment je travaille — Jean Doutrebente',
    description:
      "Decouvrez mon accompagnement: de l'echange initial au prototypage fonctionnel, avec une approche pragmatique et centree utilisateurs."
  },
  '/contact': {
    title: 'Contact — Jean Doutrebente',
    description:
      "Parlons de votre projet via formulaire, email ou rendez-vous. Je reviens vers vous rapidement avec une proposition adaptee."
  },
  '/cv': {
    title: 'Parcours Product Engineer — Jean Doutrebente',
    description:
      "Découvrez mon parcours de Product Engineer : 7 ans d'expérience en design UX et gestion de projet, complétés par une expertise en développement web et mobile."
  },
  '/v1': {
    title: 'CV interactif V1 — Jean Doutrebente',
    description: "Version historique de mon CV interactif en interface IDE."
  }
};

const THEME_STORAGE_KEY = 'site-theme';

const getPreferredTheme = () => {
  if (typeof window === 'undefined') return 'dark';

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App({ Component, pageProps }) {
  const router = useRouter();
  const meta = PAGE_META[router.pathname] ?? DEFAULT_META;
  const pageUrl = `${SITE_URL}${router.pathname === '/' ? '' : router.pathname}`;
  const [theme, setTheme] = useState('dark');
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    document.documentElement.setAttribute('data-theme', preferredTheme);
    setIsThemeReady(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) => {
      const nextTheme = previousTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  }, []);

  const themeContextValue = {
    theme,
    isThemeReady,
    toggleTheme
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="author" content="Jean Doutrebente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JD.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/JD.svg" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`${SITE_URL}/favicon.ico`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={`${SITE_URL}/favicon.ico`} />
      </Head>

      <ThemeContext.Provider value={themeContextValue}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
