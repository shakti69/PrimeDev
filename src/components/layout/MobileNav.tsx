import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '../../context/RouterContext';

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
  onItemClick,
}) => {
  const { navigate } = useRouter();

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

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-nav-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-6 sm:pt-8 md:hidden"
        >
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Centered Floating Dark Menu Card (1:1 with Screenshot 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[390px] rounded-[32px] bg-[#1E1D1D] border border-white/10 text-white p-7 sm:p-8 shadow-2xl z-10 flex flex-col justify-between min-h-[500px]"
          >
            {/* Top Header Row: Brand Logo + Close Button */}
            <div className="flex items-center justify-between pb-4">
              <span
                style={{
                  fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
                  letterSpacing: '-0.02em',
                }}
                className="text-2xl font-bold text-white tracking-tight"
              >
                PrimeDev
              </span>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close navigation"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Centered Navigation Links List */}
            <nav aria-label="Mobile Menu Links" className="my-auto py-6 flex flex-col items-center justify-center space-y-5 text-center">
              {items.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  onClick={() => {
                    if (onItemClick) {
                      onItemClick(item.id);
                    }
                    onClose();
                  }}
                  style={{
                    fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
                  }}
                  className="text-2xl sm:text-[1.75rem] font-medium text-white/90 hover:text-[#FF5819] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer py-1"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Bottom CTA Button: Book a Free Call → */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  onClose();
                  navigate('book');
                }}
                style={{
                  backgroundColor: '#FF5819',
                  boxShadow: '2px 2px 12px rgba(36,36,36,0.2), inset 4px 4px 6px rgba(255,255,255,0.25)',
                }}
                className="btn-sheen w-full h-[52px] rounded-[40px] text-white font-semibold text-base inline-flex items-center justify-center gap-2 shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer select-none"
              >
                <span>Book a Free Call</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
