import '../styles/globals.css';
import Head from 'next/head';
require('dotenv').config();



function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jean DOUTREBENTE - Dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
