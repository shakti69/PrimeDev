import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Layout } from './components/layout/Layout';
import { PageTransition } from './components/animation/PageTransition';
import { useSEO } from './hooks/useSEO';

// Core Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { route } = useRouter();
  useSEO(route);

  const renderCurrentPage = () => {
    switch (route.page) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'service-detail':
        return <ServiceDetailPage serviceId={route.param} />;
      case 'work':
        return <WorkPage />;
      case 'project-detail':
        return <ProjectDetailPage projectId={route.param} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const pageKey = route.page + (route.param ? `-${route.param}` : '');

  return (
    <Layout>
      <PageTransition pageKey={pageKey}>
        {renderCurrentPage()}
      </PageTransition>
    </Layout>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
