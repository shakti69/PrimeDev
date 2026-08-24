import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollWordRevealProps {
  text: string;
  className?: string;
}

const Word: React.FC<{
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(
    progress,
    range,
    ['rgba(36, 36, 36, 0.22)', 'rgba(30, 30, 30, 1)']
  );

  return (
    <span className="relative inline-block mr-[0.28em] my-[0.08em]">
      {/* Background shadow/ghost word */}
      <span className="opacity-20 text-[#242424] select-none absolute inset-0 pointer-events-none">
        {word}
      </span>
      {/* Active revealed word controlled by scroll */}
      <motion.span style={{ opacity, color }}>
        {word}
      </motion.span>
    </span>
  );
};

export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll through the container over a half-screen height window
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={className}>
      <p className="leading-[1.42] tracking-[-0.025em]">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        })}
      </p>
    </div>
  );
};
