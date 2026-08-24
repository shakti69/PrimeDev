import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MobileNav, type NavItem } from './MobileNav';
import { Handshake } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export interface HeaderProps {
  navItems?: NavItem[];
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'pricing', label: 'Plans', href: '#pricing' },
  { id: 'faq', label: 'Faqs', href: '#faq' },
];

export const Header: React.FC<HeaderProps> = ({
  navItems = DEFAULT_NAV_ITEMS,
}) => {
  const { navigate } = useRouter();
  const [activeId, setActiveId] = useState('work');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex items-center justify-center px-4 pointer-events-none">
        
        {/* =========================================================================
            MOBILE FLOATING CAPSULE HEADER (< 768px) (Exact 1:1 with Screenshot 1)
            ========================================================================= */}
        <div className="md:hidden pointer-events-auto w-full max-w-[440px] h-[58px] rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-lg px-6 flex items-center justify-between">
          {/* Left Brand Title */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
              letterSpacing: '-0.03em',
            }}
            className="text-2xl font-bold text-[#1E1E1E] tracking-tight cursor-pointer"
          >
            PrimeDev
          </button>

          {/* Right Hamburger Icon */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="w-10 h-10 -mr-2 rounded-full flex items-center justify-center text-[#1E1E1E] hover:bg-black/5 active:scale-95 transition-all cursor-pointer"
            aria-label="Open Menu"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="1" y1="1.5" x2="21" y2="1.5" />
              <line x1="1" y1="8" x2="21" y2="8" />
              <line x1="1" y1="14.5" x2="21" y2="14.5" />
            </svg>
          </button>
        </div>

        {/* =========================================================================
            DESKTOP FLOATING 3-ELEMENT NAVIGATION (>= 768px)
            ========================================================================= */}
        <div className="hidden md:flex pointer-events-auto items-center gap-3">
          
          {/* Left Brand Capsule (PrimeDev in bold without dot) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
              letterSpacing: '-0.03em',
            }}
            className="group relative overflow-hidden h-[48px] lg:h-[54px] px-5 lg:px-6 rounded-full bg-[#EAEAEA] backdrop-blur-md border border-black/[0.08] shadow-md flex items-center justify-center text-lg lg:text-xl font-bold text-[#1E1E1E] hover:text-[#FF5819] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none"
            aria-label="PrimeDev Home"
          >
            <span className="relative z-10 font-extrabold tracking-tight">PrimeDev</span>
            {/* Subtle Sheen Shine */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 pointer-events-none" />
          </button>

          {/* Center Links Container with Pure Smooth Sliding Capsule (Zero Jitter) */}
          <nav
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredId(null)}
            style={{
              backgroundColor: 'rgba(38, 38, 38, 0.88)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.4), inset 1px 1px 2px rgba(255,255,255,0.18)',
            }}
            className="flex items-center gap-1 p-1.5 rounded-full border border-white/10 relative"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              const isHovered = hoveredId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer select-none"
                >
                  {/* Smooth Hover Highlight Capsule */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="navbar-hover-capsule"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* Pure Smooth Active White Sliding Capsule */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-capsule"
                      className="absolute inset-0 rounded-full bg-white shadow-sm"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 32,
                      }}
                    />
                  )}

                  {/* Link Text */}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? 'text-[#242424] font-semibold'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Circle Pill with Animated Handshake Icon */}
          <button
            onClick={() => navigate('book')}
            className="group relative overflow-hidden w-[52px] h-[52px] lg:w-[56px] lg:h-[56px] rounded-full bg-[#EAEAEA] backdrop-blur-md border border-black/[0.08] shadow-md flex items-center justify-center text-[#242424] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Book a Call / Partner with Us"
          >
            <span className="relative z-10 flex items-center justify-center">
              <Handshake
                className="w-5 h-5 lg:w-[22px] lg:h-[22px] group-hover:scale-110 group-hover:text-[#FF5819] transition-all duration-300 animate-icon-handshake"
                strokeWidth={2.1}
              />
            </span>
            {/* Subtle Sheen Shine */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 pointer-events-none" />
          </button>

        </div>
      </header>

      {/* Mobile Drawer (1:1 with Screenshot 2) */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        items={navItems}
        activeId={activeId}
        onItemClick={handleNavClick}
      />
    </>
  );
};
