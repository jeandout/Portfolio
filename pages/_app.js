import '../styles/globals.css';
import Head from 'next/head';
import data from '../public/CV.json'; // Import data for SEO
require('dotenv').config();

function App({ Component, pageProps }) {
  const { profil } = data;
  const title = `${profil.user.firstname} ${profil.user.name} - ${profil.cvTitle}`;
  const description = profil.resume;
  const url = "https://jeandoutrebente.com"; // Placeholder URL

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Développeur Full Stack, Web, Mobile, React, Node.js, Jean Doutrebente, Portfolio" />
        <meta name="author" content={`${profil.user.firstname} ${profil.user.name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${url}/favicon.ico`} /> {/* Using favicon as placeholder image */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${url}/favicon.ico`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
