import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Layout from '../components/site/Layout';
import CVDesktopPopup from '../components/site/CVDesktopPopup';
import { CVPopupContext } from '../components/site/CVPopupContext';

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
  '/cv': DEFAULT_META
};

const DESKTOP_BREAKPOINT = 940;

function App({ Component, pageProps }) {
  const router = useRouter();
  const meta = PAGE_META[router.pathname] ?? DEFAULT_META;
  const pageUrl = `${SITE_URL}${router.pathname === '/' ? '' : router.pathname}`;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCvPopupOpen, setIsCvPopupOpen] = useState(false);

  const openCvPopup = useCallback(() => setIsCvPopupOpen(true), []);
  const closeCvPopup = useCallback(() => setIsCvPopupOpen(false), []);

  useEffect(() => {
    const updateViewport = () => {
      const desktop = window.innerWidth > DESKTOP_BREAKPOINT;
      setIsDesktop(desktop);

      if (!desktop) {
        setIsCvPopupOpen(false);
      }
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    setIsCvPopupOpen(false);
  }, [router.pathname]);

  const cvPopupContextValue = {
    isDesktop,
    isCvPopupOpen,
    openCvPopup,
    closeCvPopup
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="author" content="Jean Doutrebente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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

      <CVPopupContext.Provider value={cvPopupContextValue}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {isDesktop ? <CVDesktopPopup isOpen={isCvPopupOpen} onClose={closeCvPopup} /> : null}
      </CVPopupContext.Provider>
    </>
  );
}

export default App;
