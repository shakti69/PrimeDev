import React from 'react';
import { Header, type HeaderProps } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
}

export const Layout: React.FC<LayoutProps> = ({ children, headerProps }) => {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col selection:bg-brand-500/25 selection:text-brand-200 transition-colors duration-200">
      {/* Subtle global ambient background glow */}
      <div className="ambient-glow top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-600/10 pointer-events-none" />
      
      {/* Sticky Glass Header */}
      <Header {...headerProps} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {children}
      </main>

      {/* Modern Architectural Footer */}
      <Footer />
    </div>
  );
};
