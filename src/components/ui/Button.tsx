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
      'inline-flex items-center justify-center font-medium transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-950 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

    // Variant matrices
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'btn-shimmer bg-brand-600 hover:bg-brand-500 text-white shadow-sm hover:shadow-glow-sm border border-brand-400/30 font-semibold',
      secondary:
        'bg-obsidian-850 hover:bg-obsidian-800 text-obsidian-100 hover:text-white border border-white/[0.08] hover:border-white/[0.18] shadow-subtle',
      outline:
        'bg-transparent hover:bg-white/[0.05] text-obsidian-200 hover:text-white border border-white/[0.12] hover:border-white/[0.24]',
      ghost:
        'bg-transparent hover:bg-white/[0.06] text-obsidian-300 hover:text-white border border-transparent',
      danger:
        'bg-rose-600 hover:bg-rose-500 text-white border border-rose-400/30 shadow-sm',
    };

    // Size matrices
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5 tracking-tight',
      md: 'text-sm px-4.5 py-2.5 rounded-xl gap-2 tracking-tight',
      lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 tracking-tight font-semibold',
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
