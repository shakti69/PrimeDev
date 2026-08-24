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
  Plus,
  Phone,
  MessageSquare,
  Monitor,
  Smartphone,
  Package,
  Box,
  RotateCcw,
  HelpCircle,
  CheckCircle2,
  Star,
  Palette,
  Repeat,
  Clock,
  Users,
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
  Plus,
  Phone,
  MessageSquare,
  Monitor,
  Smartphone,
  Package,
  Box,
  RotateCcw,
  HelpCircle,
  CheckCircle2,
  Star,
  Palette,
  Repeat,
  Clock,
  Users,
};

export type IconName = keyof typeof Icons;

/**
 * PrimeDev Custom Geometric Monogram Logo matching Brix Studio styling
 */
export const BrandLogo: React.FC<{ className?: string; size?: number; inverted?: boolean }> = ({ 
  className = "w-8 h-8", 
  size = 32,
  inverted = false
}) => {
  return (
    <div 
      style={{ width: size, height: size }}
      className={`rounded-full flex items-center justify-center font-black text-sm select-none transition-transform duration-200 ${
        inverted 
          ? 'bg-white text-[#FF4E27]' 
          : 'bg-[#FF4E27] text-white shadow-sm'
      } ${className}`}
    >
      <span className="leading-none tracking-tighter" style={{ fontSize: size * 0.55 }}>p</span>
    </div>
  );
};

