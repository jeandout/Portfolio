import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/site/Layout';

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

// Routes qui ne doivent pas avoir le layout site (IDE legacy)
const NO_LAYOUT_ROUTES = ['/cv'];

function App({ Component, pageProps }) {
  const router = useRouter();
  const isNoLayout = NO_LAYOUT_ROUTES.includes(router.pathname);
  const meta = PAGE_META[router.pathname] ?? DEFAULT_META;
  const pageUrl = `${SITE_URL}${router.pathname === '/' ? '' : router.pathname}`;

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

      {isNoLayout ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default App;
