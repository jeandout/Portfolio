import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useCVPopup } from '../components/site/CVPopupContext';

const MobileView = dynamic(() => import('../components/MobileView'), { ssr: false });

function CV() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 940 });
  const { isDesktop, openCvPopup } = useCVPopup();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || !isDesktop) return;
    openCvPopup();
  }, [mounted, isDesktop, openCvPopup]);

  if (!mounted) return null;

  if (isMobile) {
    return (
      <section className="section">
        <div className="container ide-root">
          <MobileView />
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1>CV</h1>
        <p>La version desktop du CV s&apos;ouvre dans une fenetre superposee.</p>
        <button type="button" onClick={openCvPopup}>
          Ouvrir le CV
        </button>
      </div>
    </section>
  );
}

export default CV;
