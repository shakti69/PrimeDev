import { useEffect } from 'react';
import { type RouteState } from '../utils/routeUtils';
import { SERVICES_LIST } from '../data/servicesData';
import { PROJECTS_LIST } from '../data/projectsData';

export function useSEO(route: RouteState) {
  useEffect(() => {
    let title = 'PrimeDev | Next-Gen Full-Stack Web Engineering & Scalable Systems';
    let description =
      'PrimeDev engineers high-performance web platforms, role-based multi-tenant SaaS architectures, assistive software tools, and secure cloud solutions. Founded by Shakti Prasad Hota.';

    switch (route.page) {
      case 'home':
        title = 'PrimeDev | Next-Gen Full-Stack Web Engineering';
        description =
          'PrimeDev engineers high-performance web platforms, multi-tenant SaaS architectures, assistive software tools, and secure cloud infrastructure.';
        break;
      case 'about':
        title = 'About PrimeDev | Engineering Philosophy & Standards';
        description =
          'Learn about PrimeDev’s engineering principles: security-by-design, strict type safety, modular tokens, and founder Shakti Prasad Hota.';
        break;
      case 'services':
        title = 'Engineering Services & Capabilities | PrimeDev';
        description =
          'Explore PrimeDev disciplines: Full-Stack Web Engineering, SaaS Multi-Tenant Platforms, Cloud Infrastructure & APIs, and Assistive IoT.';
        break;
      case 'service-detail': {
        const found = SERVICES_LIST.find((s) => s.id === route.param || s.slug === route.param);
        if (found) {
          title = `${found.title} | PrimeDev Architecture Specification`;
          description = found.overview;
        }
        break;
      }
      case 'work':
        title = 'Selected Work & Case Studies | PrimeDev Portfolio';
        description =
          'Explore production-grade full-stack case studies: Hostel Meal Management System, Smart WiFi Attendance, Smart Audio Tutor, and Strikz Esports Hub.';
        break;
      case 'project-detail': {
        const found = PROJECTS_LIST.find((p) => p.id === route.param || p.slug === route.param);
        if (found) {
          title = `${found.title} | Case Study — PrimeDev`;
          description = found.tagline;
        }
        break;
      }
      case 'contact':
        title = 'Initiate Engineering Discovery | PrimeDev Contact';
        description =
          'Schedule an architectural discovery session with PrimeDev for full-stack web applications, SaaS platforms, or custom software solutions.';
        break;
    }

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [route]);
}
