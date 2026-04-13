import Hero from '../components/site/Hero';
import Services from '../components/site/Services';
import ProcessTeaser from '../components/site/ProcessTeaser';
import About from '../components/site/About';
import CallToAction from '../components/site/CallToAction';
import texts from '../locales/fr.json';

export default function Home() {
  return (
    <>
      <Hero texts={texts.hero} />
      <Services texts={texts.services} />
      <ProcessTeaser texts={texts.process_teaser} />
      <About texts={texts.about} />
      <CallToAction texts={texts.cta_final} />
    </>
  );
}
