import React from 'react';
import { useScrollReveal } from './useScrollReveal';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: RevealDirection;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  distance?: number; // Distance in pixels
  className?: string;
  triggerOnce?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  distance = 24,
  className = '',
  triggerOnce = true,
  ...props
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ triggerOnce });

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};
