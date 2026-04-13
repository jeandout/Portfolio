import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';
import styles from '../../styles/site/Button.module.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'md' | 'lg';

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

type LinkButtonProps = BaseButtonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

function getButtonClassName(className: string | undefined, variant: ButtonVariant, size: ButtonSize, fullWidth: boolean) {
  return [
    styles.button,
    styles[variant],
    styles[`size${size.toUpperCase()}`],
    fullWidth ? styles.fullWidth : '',
    className ?? ''
  ]
    .filter(Boolean)
    .join(' ');
}

export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    ...restProps
  } = props;
  const buttonClassName = getButtonClassName(className, variant, size, fullWidth);

  if ('href' in props) {
    const { href, onClick } = restProps as {
      href: string;
      onClick?: MouseEventHandler<HTMLAnchorElement>;
    };
    return (
      <Link href={href} className={buttonClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = restProps as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} type={type} className={buttonClassName}>
      {children}
    </button>
  );
}
