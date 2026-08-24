import React from 'react';
import { Header, type HeaderProps } from './Header';
import { useRouter } from '../../context/RouterContext';

export interface LayoutProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
}

export const Layout: React.FC<LayoutProps> = ({ children, headerProps }) => {
  const { route } = useRouter();
  const isBookPage = route.page === 'book';

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col selection:bg-brand-500 selection:text-white transition-colors duration-200">
      {/* Floating Header on landing pages */}
      {!isBookPage && <Header {...headerProps} />}

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
};
