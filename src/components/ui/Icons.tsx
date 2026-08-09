import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Code,
  Compass,
  Cpu,
  ExternalLink,
  Globe,
  Layers,
  LayoutGrid,
  Lock,
  Menu,
  Moon,
  Send,
  Server,
  Shield,
  Sparkles,
  Sun,
  Terminal,
  X,
  Zap,
  type LucideProps
} from 'lucide-react';

export interface IconProps extends LucideProps {
  name?: string;
}

// Crisp inline SVG for GitHub
export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const Icons = {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Code,
  Compass,
  Cpu,
  ExternalLink,
  Github: GithubIcon,
  Globe,
  Layers,
  LayoutGrid,
  Lock,
  Menu,
  Moon,
  Send,
  Server,
  Shield,
  Sparkles,
  Sun,
  Terminal,
  X,
  Zap,
};

export type IconName = keyof typeof Icons;

/**
 * PrimeDev Custom Geometric Monogram Logo
 */
export const BrandLogo: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-8 h-8", 
  size = 32 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 36 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="36" height="36" rx="10" fill="#0B0F17" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <path 
        d="M11 10H20C23.3137 10 26 12.6863 26 16C26 19.3137 23.3137 22 20 22H15.5V26H11V10Z" 
        fill="url(#logo-grad)" 
      />
      <circle cx="15.5" cy="16" r="2.5" fill="#06080D" />
      <path 
        d="M21 22L26 26" 
        stroke="#60A5FA" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <defs>
        <linearGradient id="logo-grad" x1="11" y1="10" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};
