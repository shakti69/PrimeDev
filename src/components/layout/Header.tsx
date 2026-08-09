import React, { useState, useEffect } from 'react';
import { Icons, BrandLogo } from '../ui/Icons';
import { Button } from '../ui/Button';
import { MobileNav, type NavItem } from './MobileNav';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, type PageId } from '../../context/RouterContext';

export interface HeaderProps {
  navItems?: NavItem[];
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#/' },
  { id: 'about', label: 'About', href: '#/about' },
  { id: 'services', label: 'Services', href: '#/services' },
  { id: 'work', label: 'Work', href: '#/work' },
  { id: 'contact', label: 'Contact', href: '#/contact' },
];

export const Header: React.FC<HeaderProps> = ({
  navItems = DEFAULT_NAV_ITEMS,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { route, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    navigate(id as PageId);
  };

  // Determine active item from route
  const getActiveId = () => {
    if (route.page === 'service-detail') return 'services';
    if (route.page === 'project-detail') return 'work';
    return route.page;
  };

  const activeId = getActiveId();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-xl p-1"
            aria-label="PrimeDev Home"
          >
            <BrandLogo size={32} className="transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-base font-bold text-obsidian-100 tracking-tight flex items-center gap-1">
                Prime<span className="text-brand-400">Dev</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-white/[0.06] text-obsidian-400 border border-white/[0.08] ml-1 hidden sm:inline-block">
                  v2026
                </span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-obsidian-900/70 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                    isActive
                      ? 'bg-white/[0.1] text-white shadow-sm font-semibold'
                      : 'text-obsidian-400 hover:text-obsidian-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Theme toggle + CTA + Mobile launcher */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border border-white/[0.08] bg-obsidian-900/50 hover:bg-obsidian-850 text-obsidian-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Icons.Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Icons.Moon className="w-4 h-4 text-brand-400" />
              )}
            </button>

            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                magnetic
                rightIcon={<Icons.ArrowUpRight className="w-3.5 h-3.5" />}
                onClick={() => navigate('contact')}
              >
                Start Inquiry
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav-drawer"
              aria-label="Open mobile navigation menu"
              className="lg:hidden p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border border-white/[0.08] bg-obsidian-900/50 text-obsidian-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <Icons.Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
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
