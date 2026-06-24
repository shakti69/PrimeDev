import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { type Language } from '../../data/translations';
import { ClientDashboard } from '../dashboard/ClientDashboard';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor open-portal event from Portfolio section
  useEffect(() => {
    const handleOpenPortal = () => {
      setIsPortalOpen(true);
    };
    window.addEventListener('open-portal', handleOpenPortal);
    return () => window.removeEventListener('open-portal', handleOpenPortal);
  }, []);

  const navLinks = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'team', label: t('nav.team') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'blog', label: t('nav.blog') },
    { id: 'careers', label: t('nav.careers') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case 'en': return 'English';
      case 'es': return 'Español';
      case 'de': return 'Deutsch';
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img 
              src="/logo.jpg" 
              alt="PrimeDev Logo" 
              className="w-9 h-9 object-cover object-top rounded-xl shadow-md border border-slate-200/50 dark:border-slate-800/50 transition-transform group-hover:scale-105" 
            />
            <span className="text-xl font-bold font-sans tracking-tight text-slate-900 dark:text-white">
              Prime<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-blue to-brand-accent-cyan">Dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-accent-blue dark:hover:text-brand-accent-cyan transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300 text-slate-600 dark:text-slate-300"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300 text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
                title="Select Language"
              >
                <Globe className="w-4 h-4 text-brand-accent-blue" />
                <span className="text-xs font-bold uppercase">{language}</span>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-2xl glass-card border border-white/20 p-2 shadow-xl animate-float-quick">
                  {(['en', 'es', 'de'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                        language === lang
                          ? 'bg-gradient-to-r from-brand-accent-blue/10 to-brand-accent-purple/10 text-brand-accent-blue'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      {getLanguageLabel(lang)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Client Portal Trigger */}
            <button
              onClick={() => setIsPortalOpen(true)}
              className="btn-primary py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <User className="w-4 h-4" />
              {t('nav.portal')}
            </button>
          </div>

          {/* Mobile Actions launcher */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-nav border-t border-slate-200/50 dark:border-slate-800/50 shadow-xl p-6 space-y-4 animate-fade-in">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-accent-blue transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-4 flex flex-col gap-3">
              {/* Language Picker in mobile */}
              <div className="flex justify-between items-center px-2">
                <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                  <Globe className="w-4 h-4 text-brand-accent-blue" />
                  Language
                </span>
                <div className="flex gap-1.5">
                  {(['en', 'es', 'de'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase ${
                        language === lang
                          ? 'bg-brand-accent-blue text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Portal Button in mobile */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsPortalOpen(true);
                }}
                className="w-full btn-primary py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <User className="w-4 h-4" />
                {t('nav.portal')}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Client Portal Modal */}
      {isPortalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsPortalOpen(false)}
          />
          {/* Portal Container */}
          <div className="relative w-full max-w-4xl bg-white/70 dark:bg-brand-dark/70 backdrop-blur-xl border border-white/20 dark:border-slate-850/60 rounded-3xl shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col animate-float-quick">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 p-6 shrink-0">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-[9px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
                  Secure Portal
                </span>
                <span className="text-[10px] text-slate-400 font-medium">SSL Encrypted JWT Session</span>
              </div>
              <button 
                onClick={() => setIsPortalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Portal Content Scrollable */}
            <div className="overflow-y-auto flex-1 bg-slate-50/30 dark:bg-slate-950/20">
              <ClientDashboard />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
