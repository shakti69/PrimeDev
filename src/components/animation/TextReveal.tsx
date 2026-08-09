import React from 'react';
import { useScrollReveal } from './useScrollReveal';

export interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  as: Component = 'h1',
  className = '',
  delay = 0,
  highlightWords = [],
  highlightClassName = 'text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300',
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLHeadingElement>({ threshold: 0.1 });
  const words = text.split(' ');

  return (
    <Component ref={ref as React.RefObject<any>} className={`${className} flex flex-wrap gap-x-[0.28em] gap-y-1`}>
      {words.map((word, idx) => {
        const isHighlighted = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span
            key={idx}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
              transitionProperty: 'opacity, transform',
              transitionDuration: '500ms',
              transitionDelay: `${delay + idx * 35}ms`,
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'inline-block',
            }}
            className={isHighlighted ? highlightClassName : ''}
          >
            {word}
          </span>
        );
      })}
    </Component>
  );
};
