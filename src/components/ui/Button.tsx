import React, { forwardRef } from 'react';
import { Magnetic } from '../animation/Magnetic';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  magnetic?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      disabled,
      href,
      target,
      rel,
      magnetic = false,
      ...props
    },
    ref
  ) => {
    // Refined 2026 aesthetics with crisp transitions
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

    // Variant matrices matching Brix Studio
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-[#FF4E27] hover:bg-[#E83D16] text-white shadow-orange-glow border border-transparent font-medium',
      secondary:
        'bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-subtle font-medium',
      outline:
        'bg-transparent hover:bg-black/[0.04] dark:hover:bg-white/[0.05] text-[var(--text-primary)] border border-[var(--border-subtle)] font-medium',
      ghost:
        'bg-transparent hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-transparent',
      danger:
        'bg-rose-600 hover:bg-rose-500 text-white border border-rose-400/30 shadow-sm',
    };

    // Size matrices with rounded-full pill shape
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-xs px-4 py-2 rounded-full gap-1.5 tracking-tight',
      md: 'text-sm px-5 py-2.5 rounded-full gap-2 tracking-tight',
      lg: 'text-sm sm:text-base px-7 py-3 rounded-full gap-2.5 tracking-tight font-medium',
    };

    const widthStyle = fullWidth ? 'w-full' : '';
    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim();

    const content = (
      <>
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{rightIcon}</span>}
      </>
    );

    const renderedElement = href ? (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${combinedClasses} group cursor-pointer inline-flex`}
      >
        {content}
      </a>
    ) : (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${combinedClasses} group`}
        {...props}
      >
        {content}
      </button>
    );

    if (magnetic && !disabled && !isLoading) {
      return <Magnetic strength={0.2}>{renderedElement}</Magnetic>;
    }

    return renderedElement;
  }
);

Button.displayName = 'Button';
