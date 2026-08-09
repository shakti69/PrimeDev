import React, { createContext, useContext, useState, useEffect } from 'react';
import { type PageId, type RouteState, parseHash, routeToHash } from '../utils/routeUtils';

export type { PageId, RouteState };

export interface RouterContextType {
  route: RouteState;
  navigate: (page: PageId, param?: string) => void;
}

export const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<RouteState>(() => {
    if (typeof window !== 'undefined') {
      return parseHash(window.location.hash);
    }
    return { page: 'home' };
  });

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseHash(window.location.hash);
      setRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: PageId, param?: string) => {
    const targetRoute: RouteState = { page, param };
    const newHash = routeToHash(targetRoute);
    window.location.hash = newHash;
    setRoute(targetRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
