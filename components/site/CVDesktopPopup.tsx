import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/site/CVDesktopPopup.module.css';

const IDE = dynamic(() => import('../IDE'), { ssr: false });

type CVDesktopPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CVDesktopPopup({ isOpen, onClose }: CVDesktopPopupProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="CV de Jean Doutrebente"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.toolbar}>
          <button ref={closeButtonRef} type="button" className={styles.closeButton} onClick={onClose}>
            Fermer
          </button>
        </div>
        <div className={styles.content}>
          <div className="ide-root">
            <IDE />
          </div>
        </div>
      </div>
    </div>
  );
}
