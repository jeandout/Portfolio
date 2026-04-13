import styles from '../../styles/site/Layout.module.css';
import { useTheme } from './ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, isThemeReady, toggleTheme } = useTheme();
  const nextThemeLabel = theme === 'dark' ? 'clair' : 'sombre';
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className={`${styles.themeToggle} ${isLight ? styles.themeToggleLight : ''} ${className ?? ''}`.trim()}
      onClick={toggleTheme}
      aria-label={isThemeReady ? `Activer le mode ${nextThemeLabel}` : 'Changer le theme'}
      aria-pressed={isLight}
    >
      <span className={styles.themeIconMoon} aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M16.9 14.8a7.3 7.3 0 0 1-8.7-8.7 8 8 0 1 0 8.7 8.7Z" />
        </svg>
      </span>
      <span className={styles.themeIconSun} aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7 17 17M7 7 5.3 5.3" />
        </svg>
      </span>
      <span className={styles.themeThumb} aria-hidden="true">
        {isLight ? (
          <span className={styles.themeThumbSun}>
            <svg viewBox="0 0 24 24" focusable="false">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7 17 17M7 7 5.3 5.3" />
            </svg>
          </span>
        ) : (
          <span className={styles.themeThumbMoon}>
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M16.9 14.8a7.3 7.3 0 0 1-8.7-8.7 8 8 0 1 0 8.7 8.7Z" />
            </svg>
          </span>
        )}
      </span>
    </button>
  );
}
