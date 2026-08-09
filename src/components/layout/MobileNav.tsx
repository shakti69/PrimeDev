import React, { useEffect } from 'react';
import { Icons, BrandLogo } from '../ui/Icons';
import { Button } from '../ui/Button';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  items,
  activeId,
  onItemClick,
}) => {
  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-nav-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 dark:bg-obsidian-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative flex flex-col justify-between h-full w-full max-w-sm bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] p-6 shadow-2xl animate-fade-in z-10">
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5">
              <BrandLogo size={32} />
              <span className="font-bold text-base text-[var(--text-primary)] tracking-tight">
                Prime<span className="text-brand-500 dark:text-brand-400">Dev</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              aria-label="Close navigation"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav aria-label="Mobile Menu Links" className="mt-6 flex flex-col space-y-2">
            {items.map((item, idx) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (onItemClick) {
                      onItemClick(item.id);
                    }
                    onClose();
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  className={`w-full min-h-[44px] flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                    isActive
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/25 font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  <Icons.ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA & footer */}
        <div className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <Button
            variant="primary"
            size="md"
            fullWidth
            rightIcon={<Icons.ArrowRight className="w-4 h-4" />}
            onClick={() => {
              if (onItemClick) {
                onItemClick('contact');
              }
              onClose();
            }}
          >
            Start Project Inquiry
          </Button>

          <p className="text-[11px] text-center text-[var(--text-subtle)]">
            © {new Date().getFullYear()} PrimeDev Engineering.
          </p>
        </div>
      </div>
    </div>
  );
};
