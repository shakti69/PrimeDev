export interface ProjectItem {
  id: string;
  category: 'saas' | 'ecommerce' | 'web-apps' | 'custom';
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
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const portfolioData: ProjectItem[] = [
  {
    id: 'p1',
    category: 'saas',
    titles: {
      en: "Aether SaaS Dashboard",
      es: "Dashboard SaaS Aether",
      de: "Aether SaaS Dashboard"
    },
    descriptions: {
      en: "A real-time cloud monitoring suite featuring glassmorphic analytics widgets, high-frequency charts, and complex server health tracking.",
      es: "Una suite de monitoreo en la nube en tiempo real con widgets de análisis glassmorphic, gráficos de alta frecuencia y seguimiento de salud de servidores.",
      de: "Echtzeit-Cloud-Monitoring-Plattform mit gläsernen Analytics-Widgets, Diagrammen und Server-Health-Trackern."
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
    liveUrl: "#portal", // Links directly to client dashboard for demo!
    githubUrl: "https://github.com/primedev/aether-dashboard"
  },
  {
    id: 'p2',
    category: 'ecommerce',
    titles: {
      en: "Veloce Headless Commerce",
      es: "Comercio Headless Veloce",
      de: "Veloce Headless E-Commerce"
    },
    descriptions: {
      en: "Ultra-fast headless storefront with global edge deployment, instant cart updates, Shopify GraphQL integration, and stripe payment processing.",
      es: "Tienda digital de alto rendimiento con despliegue perimetral, actualizaciones instantáneas del carrito e integración Shopify GraphQL.",
      de: "Ultraschneller Headless-Storefront mit globalem CDN-Deployment, Live-Warenkorb, Shopify GraphQL und Stripe-Zahlung."
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    techStack: ["Next.js", "GraphQL", "Tailwind CSS", "Shopify API", "Stripe API"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/primedev/veloce-commerce"
  },
  {
    id: 'p3',
    category: 'web-apps',
    titles: {
      en: "Apex Fitness Tracking Portal",
      es: "Portal de Fitness Apex",
      de: "Apex Fitness-Portal"
    },
    descriptions: {
      en: "Interactive trainer dashboard featuring customizable schedules, workout metrics tracking, live video channels, and chat integrations.",
      es: "Tablero interactivo para entrenadores con horarios personalizables, métricas de entrenamiento y canales de video en vivo.",
      de: "Interaktives Trainer-Dashboard mit anpassbaren Trainingsplänen, Trainingsstatistiken und Live-Videochat."
    },
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/primedev/apex-fitness"
  },
  {
    id: 'p4',
    category: 'custom',
    titles: {
      en: "Novus AI Writing Assistant",
      es: "Asistente de Escritura Novus AI",
      de: "Novus KI-Schreibassistent"
    },
    descriptions: {
      en: "AI-driven copywriting suite featuring auto-structured articles, keyword suggestions, SEO checks, and PDF report downloads.",
      es: "Suite de redacción impulsada por IA con artículos autoestructurados, sugerencias de palabras clave y comprobaciones SEO.",
      de: "KI-gestützte Copywriting-Plattform zur automatischen Strukturierung von Artikeln, Keyword-Recherchen und SEO-Checks."
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "FastAPI", "OpenAI API", "Tailwind CSS", "AWS S3"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/primedev/novus-ai"
  }
];
