import React from 'react';

export type BadgeVariant = 'default' | 'accent' | 'success' | 'warning' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  pulse?: boolean;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  pulse = false,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center font-medium rounded-full transition-colors select-none tracking-tight';

  const variantStyles: Record<BadgeVariant, string> = {
    default:
      'bg-black/[0.05] dark:bg-obsidian-800/80 text-[var(--text-secondary)] border border-[var(--border-subtle)]',
    accent:
      'bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/25',
    success:
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25',
    warning:
      'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25',
    outline:
      'bg-transparent text-[var(--text-secondary)] border border-[var(--border-subtle)]',
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'text-[10px] px-2 py-0.5 gap-1 font-mono uppercase tracking-wider',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  };

  const dotColors: Record<BadgeVariant, string> = {
    default: 'bg-[var(--text-muted)]',
    accent: 'bg-brand-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    outline: 'bg-[var(--text-muted)]',
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 items-center justify-center">
          {pulse && (
            <span
              className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${dotColors[variant]}`}
            />
          )}
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColors[variant]}`} />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
