import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/site/Layout';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jeandoutrebente.vercel.app';
const TITLE = 'Jean Doutrebente — Designer & Développeur';
const DESCRIPTION = "Designer et développeur, j'accompagne les entreprises de l'identification du problème utilisateur jusqu'au prototype fonctionnel.";
const KEYWORDS = 'UX, UI, design, développement, prototypage, freelance, Paris';

// Routes qui ne doivent pas avoir le layout site (IDE legacy)
const NO_LAYOUT_ROUTES = ['/cv'];

function App({ Component, pageProps }) {
  const router = useRouter();
  const isNoLayout = NO_LAYOUT_ROUTES.includes(router.pathname);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="author" content="Jean Doutrebente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/favicon.ico`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={SITE_URL} />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={DESCRIPTION} />
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
