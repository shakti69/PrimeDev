import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  clean?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  clean = false,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  const paddingStyle = clean ? '' : 'px-4 sm:px-6 lg:px-8';

  return (
    <div
      className={`mx-auto w-full ${sizeStyles[size]} ${paddingStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bordered?: boolean;
  withGrid?: boolean;
  withDots?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  bordered = false,
  withGrid = false,
  withDots = false,
  className = '',
  ...props
}) => {
  return (
    <section
      className={`relative py-16 sm:py-24 overflow-hidden ${
        bordered ? 'border-b border-white/[0.06]' : ''
      } ${withGrid ? 'bg-grid' : ''} ${withDots ? 'bg-dots' : ''} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
