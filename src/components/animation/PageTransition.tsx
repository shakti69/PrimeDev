import React, { useEffect, useState } from 'react';

export interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, pageKey }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [opacity, setOpacity] = useState(1);
  const [transform, setTransform] = useState('translateY(0px)');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayChildren(children);
      setOpacity(1);
      setTransform('translateY(0px)');
      return;
    }

    setOpacity(0);
    setTransform('translateY(4px)');

    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setOpacity(1);
      setTransform('translateY(0px)');
    }, 40);

    return () => clearTimeout(timer);
  }, [pageKey, children]);

  return (
    <div
      style={{
        opacity,
        transform,
        transition: 'opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
      className="w-full"
    >
      {displayChildren}
    </div>
  );
};
