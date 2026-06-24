import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { Services } from './components/home/Services';
import { Portfolio } from './components/home/Portfolio';
import { Team } from './components/home/Team';
import { Pricing } from './components/home/Pricing';
import { Location } from './components/home/Location';
import { Contact } from './components/home/Contact';
import { Blog } from './components/home/Blog';
import { Careers } from './components/home/Careers';
import { FAQ } from './components/home/FAQ';
import { Footer } from './components/layout/Footer';
import { AIChatWidget } from './components/shared/AIChatWidget';
import { CookieConsent } from './components/shared/CookieConsent';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-brand-light dark:bg-brand-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 overflow-x-hidden selection:bg-brand-accent-blue/30">
          {/* Main sticky navigation */}
          <Header />
          
          {/* Page segments */}
          <main className="w-full">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Team />
            <Pricing />
            <Location />
            <Contact />
            <Blog />
            <Careers />
            <FAQ />
          </main>
          
          {/* Brand Footer */}
          <Footer />
          
          {/* Floating client support widgets */}
          <AIChatWidget />
          <CookieConsent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};
export default App;
