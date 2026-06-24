import { Code, ShoppingCart, Globe, Layout, Search, Settings, Cpu, Database, Link, Cloud } from 'lucide-react';

export interface ServiceItem {
  id: string;
  iconName: string;
  category: 'development' | 'design' | 'optimization' | 'cloud';
  titleKey: string; // key in translation translations if we want, or define translations here
  titles: {
    en: string;
    es: string;
    de: string;
  };
  descriptions: {
    en: string;
    es: string;
    de: string;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    iconName: 'Globe',
    category: 'development',
    titleKey: 'services.webDev',
    titles: {
      en: "Website Development",
      es: "Desarrollo de Sitios Web",
      de: "Webentwicklung"
    },
    descriptions: {
      en: "Stunning corporate sites with ultra-fast loads, robust responsive layouts, and SEO-friendly structures.",
      es: "Sitios corporativos impresionantes con cargas ultrarrápidas, diseños responsivos y optimizados para SEO.",
      de: "Beeindruckende Unternehmens-Websites mit ultraschnellen Ladezeiten und responsivem Layout."
    }
  },
  {
    id: 's2',
    iconName: 'ShoppingCart',
    category: 'development',
    titleKey: 'services.eCommerce',
    titles: {
      en: "E-Commerce Development",
      es: "Comercio Electrónico",
      de: "E-Commerce-Entwicklung"
    },
    descriptions: {
      en: "Scalable digital shops using headless commerce platforms, custom gateways, and optimized checkout funnels.",
      es: "Tiendas digitales escalables utilizando plataformas headless, pasarelas de pago y embudos optimizados.",
      de: "Skalierbare Online-Shops auf Headless-Plattformen, mit sicheren Gateways und hoher Conversion Rate."
    }
  },
  {
    id: 's3',
    iconName: 'Code',
    category: 'development',
    titleKey: 'services.webApps',
    titles: {
      en: "Web Application Development",
      es: "Aplicaciones Web a Medida",
      de: "Webanwendungen"
    },
    descriptions: {
      en: "High-performance enterprise dashboards, databases, and responsive apps tailored for complex operations.",
      es: "Tableros empresariales de alto rendimiento, bases de datos y aplicaciones adaptadas a operaciones complejas.",
      de: "Leistungsstarke Dashboards und Web-Apps für komplexe geschäftliche Workflows."
    }
  },
  {
    id: 's4',
    iconName: 'Layout',
    category: 'design',
    titleKey: 'services.uiUx',
    titles: {
      en: "UI/UX Product Design",
      es: "Diseño UI/UX de Producto",
      de: "UI/UX Design"
    },
    descriptions: {
      en: "Figma wireframes, dynamic interactive prototypes, design systems, and beautiful modern interfaces.",
      es: "Estructuras de Figma, prototipos interactivos, sistemas de diseño e interfaces hermosas y modernas.",
      de: "Kreative Figma-Wireframes, interaktive Prototypen, Design-Systeme und ansprechende Benutzeroberflächen."
    }
  },
  {
    id: 's5',
    iconName: 'Search',
    category: 'optimization',
    titleKey: 'services.seoOpt',
    titles: {
      en: "SEO Optimization",
      es: "Optimización SEO",
      de: "SEO-Optimierung"
    },
    descriptions: {
      en: "On-page keyword strategies, schema markups, speed audits, and links profiles to dominate rankings.",
      es: "Estrategias de palabras clave, marcado de esquema, auditorías de velocidad y enlaces para dominar los rankings.",
      de: "On-Page Keyword-Strategien, Schema-Markup, Ladezeit-Optimierung und Ranking-Audits."
    }
  },
  {
    id: 's6',
    iconName: 'Settings',
    category: 'optimization',
    titleKey: 'services.maintenance',
    titles: {
      en: "Website Maintenance",
      es: "Mantenimiento Web",
      de: "Website-Wartung"
    },
    descriptions: {
      en: "24/7 security updates, package patches, cloud performance tracking, backups, and layout hotfixes.",
      es: "Actualizaciones de seguridad 24/7, parches de paquetes, copias de seguridad y correcciones de diseño.",
      de: "24/7 Sicherheits-Updates, Versions-Patches, Backups und schnelle Fehlerbehebungen."
    }
  },
  {
    id: 's7',
    iconName: 'Cpu',
    category: 'development',
    titleKey: 'services.saasDev',
    titles: {
      en: "SaaS Development",
      es: "Desarrollo de SaaS",
      de: "SaaS-Entwicklung"
    },
    descriptions: {
      en: "End-to-end multi-tenant architectures, subscription pricing models, admin analytics, and scalable structures.",
      es: "Arquitecturas multi-inquilino de extremo a extremo, modelos de suscripción y paneles de análisis administrativo.",
      de: "Komplette Multi-Tenant-Systeme mit Abonnementmodellen, Admin-Bereichen und skalierbarer Cloud-Architektur."
    }
  },
  {
    id: 's8',
    iconName: 'Database',
    category: 'development',
    titleKey: 'services.customSoftware',
    titles: {
      en: "Custom Software Solutions",
      es: "Software a Medida",
      de: "Custom-Software"
    },
    descriptions: {
      en: "Bespoke scripting, workflow automation dashboards, desktop-to-web ports, and legacy code rewrites.",
      es: "Automatización de flujos de trabajo, integraciones de sistemas antiguos y migraciones a la web.",
      de: "Individuelle Skripte, Automatisierungs-Dashboards, Legacy-Code-Modernisierung und Desktop-zu-Web-Ports."
    }
  },
  {
    id: 's9',
    iconName: 'Link',
    category: 'development',
    titleKey: 'services.apiDev',
    titles: {
      en: "API Development & Integration",
      es: "Desarrollo e Integración de APIs",
      de: "API-Entwicklung"
    },
    descriptions: {
      en: "Secure RESTful/GraphQL microservice backends, authorization protocols, and third-party API mappings.",
      es: "Backends de microservicios RESTful/GraphQL seguros, protocolos de autorización y mapeos de API externos.",
      de: "Sichere RESTful- und GraphQL-Schnittstellen, Autorisierungsprotokolle und Third-Party Integrations."
    }
  },
  {
    id: 's10',
    iconName: 'Cloud',
    category: 'cloud',
    titleKey: 'services.cloudSolutions',
    titles: {
      en: "Cloud Solutions",
      es: "Soluciones en la Nube",
      de: "Cloud-Lösungen"
    },
    descriptions: {
      en: "Cloud migrations, AWS infrastructure deployments, Docker container setups, and CDN edge optimization.",
      es: "Migraciones a la nube, despliegues de AWS, configuraciones de contenedores Docker y optimización CDN.",
      de: "Cloud-Migrationen, AWS-Infrastrukturen, Docker-Container-Setups und CDN Edge-Optimierung."
    }
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Code': return Code;
    case 'ShoppingCart': return ShoppingCart;
    case 'Globe': return Globe;
    case 'Layout': return Layout;
    case 'Search': return Search;
    case 'Settings': return Settings;
    case 'Cpu': return Cpu;
    case 'Database': return Database;
    case 'Link': return Link;
    case 'Cloud': return Cloud;
    default: return Globe;
  }
};
