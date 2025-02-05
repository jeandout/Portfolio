import '../styles/globals.css';
import Head from 'next/head';
require('dotenv').config();



function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
