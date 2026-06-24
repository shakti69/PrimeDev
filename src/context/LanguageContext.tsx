import React, { createContext, useContext, useState } from 'react';
import { type Language, translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang === 'en' || savedLang === 'es' || savedLang === 'de') {
        return savedLang;
      }
      
      // Auto-detect browser language if possible
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === 'es') return 'es';
      if (browserLang === 'de') return 'de';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Helper to read nested paths in translations object, e.g. "nav.home"
  const t = (keyPath: string): any => {
    const keys = keyPath.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English translation
        let englishFallback: any = translations['en'];
        for (const engKey of keys) {
          if (englishFallback && typeof englishFallback === 'object' && engKey in englishFallback) {
            englishFallback = englishFallback[engKey];
          } else {
            return keyPath; // return key if not found
          }
        }
        return englishFallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
