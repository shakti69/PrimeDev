import React, { useRef, useState } from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'outline' | 'subtle';
  isHoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  isHoverable = false,
  className = '',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-obsidian-900/90 border-white/[0.08] shadow-card',
    interactive:
      'bg-obsidian-900/90 border-white/[0.08] hover:border-brand-500/40 hover:bg-obsidian-850/95 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer',
    outline: 'bg-transparent border-white/[0.12] hover:border-white/[0.24]',
    subtle: 'bg-obsidian-850/60 border-white/[0.05]',
  };

  const hoverStyle = isHoverable && variant !== 'interactive' 
    ? 'transition-all duration-300 hover:border-white/[0.16] hover:-translate-y-0.5' 
    : 'transition-all duration-300';

  return (
    <div
      className={`relative rounded-2xl border backdrop-blur-sm overflow-hidden ${variantStyles[variant]} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * SpotlightCard tracks the user's cursor to render a subtle 2026 radial light glow on hover
 */
export const SpotlightCard: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    spotlightColor?: string;
  }
> = ({
  children,
  spotlightColor = 'rgba(59, 130, 246, 0.12)',
  className = '',
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-white/[0.08] bg-obsidian-900/90 overflow-hidden shadow-card transition-all duration-300 hover:border-brand-500/30 ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`p-6 pb-3 flex flex-col gap-1.5 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h3
    className={`text-lg font-bold text-obsidian-100 tracking-tight flex items-center gap-2 ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p className={`text-sm text-obsidian-400 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`p-6 pt-3 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div
    className={`p-6 pt-0 flex items-center justify-between border-t border-white/[0.05] mt-4 pt-4 text-xs text-obsidian-400 ${className}`}
    {...props}
  >
    {children}
  </div>
);
