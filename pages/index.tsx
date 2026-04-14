import Head from 'next/head';
import Hero from '../components/site/Hero';
import Services from '../components/site/Services';
import ProcessTeaser from '../components/site/ProcessTeaser';
import About from '../components/site/About';
import CallToAction from '../components/site/CallToAction';
import texts from '../locales/fr.json';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jean Doutrebente',
  jobTitle: 'Designer et Developpeur',
  url: 'https://jeandoutrebente.vercel.app/',
  sameAs: [
    'https://www.linkedin.com/in/jean-doutrebente-732884203/',
    'https://github.com/jeandout/'
  ]
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Jean Doutrebente',
  url: 'https://jeandoutrebente.vercel.app/'
};

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </Head>
      <Hero texts={texts.hero} />
      <Services texts={texts.services} />
      <About texts={texts.about} />
      <ProcessTeaser texts={texts.process_teaser} />
      <CallToAction texts={texts.cta_final} />
    </>
  );
}
