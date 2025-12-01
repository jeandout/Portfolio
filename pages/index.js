import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

//On désactive le SSR avec dynamic(..., { ssr: false }) pour s’assurer que ni IDE ni MobileView ne soient rendus côté serveur.
const IDE = dynamic(() => import('../components/IDE'), { ssr: false });
const MobileView = dynamic(() => import('../components/MobileView'), { ssr: false });

function Index() {
  
  // mounted empêche tout affichage avant que le composant ne soit monté (donc uniquement côté client).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isMobile = useMediaQuery({ maxWidth: 940 });

  if (!mounted) return null;

  return isMobile ? <MobileView /> : <IDE />;
}

export default Index;
