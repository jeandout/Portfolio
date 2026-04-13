import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// SSR désactivé — composants client-only
const IDE = dynamic(() => import('../components/IDE'), { ssr: false });
const MobileView = dynamic(() => import('../components/MobileView'), { ssr: false });

function CV() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isMobile = useMediaQuery({ maxWidth: 940 });

  if (!mounted) return null;

  return (
    <div className="ide-root">
      {isMobile ? <MobileView /> : <IDE />}
    </div>
  );
}

export default CV;
