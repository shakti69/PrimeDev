import React from 'react';

interface PrimeDevLogoMarkProps {
  className?: string;
  size?: number;
  color?: string;
}

export const PrimeDevLogoMark: React.FC<PrimeDevLogoMarkProps> = ({
  className = '',
  size = 22,
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size * (16 / 22)}
      height={size}
      viewBox="0 0 16 22"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
      aria-label="PrimeDev Monogram"
    >
      <g>
        {/* Solid Architectural Stem with descender */}
        <path d="M 0 0 L 5.333 0 L 5.333 22 L 0 22 Z" />
        
        {/* Geometric Chamfered Head Loop matching Brix Architecture */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 5.333 0 L 12.791 0 L 16 3.208 L 16 10.658 L 12.791 13.866 L 5.333 13.866 Z M 5.333 4.266 L 10.667 4.266 L 11.733 5.333 L 11.733 8.533 L 10.667 9.6 L 5.333 9.6 Z"
        />
      </g>
    </svg>
  );
};
