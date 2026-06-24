export interface BlogArticle {
  id: string;
  category: 'coding' | 'design' | 'cloud' | 'business';
  isFeatured?: boolean;
  titles: {
    en: string;
    es: string;
    de: string;
  };
  excerpts: {
    en: string;
    es: string;
    de: string;
  };
  readTimes: {
    en: string;
    es: string;
    de: string;
  };
  author: {
    name: string;
    role: string;
    image: string;
  };
  date: string;
  image: string;
}

export const blogData: BlogArticle[] = [
  {
    id: 'b1',
    category: 'coding',
    isFeatured: true,
    titles: {
      en: "Why Next.js is Dominating Corporate Web Engineering in 2026",
      es: "Por qué Next.js domina la ingeniería web corporativa en 2026",
      de: "Warum Next.js die Webentwicklung für Unternehmen im Jahr 2026 dominiert"
    },
    excerpts: {
      en: "Explore how Server Actions, partial pre-rendering, and nested layouts enable corporate teams to build blazing-fast apps with simple configurations.",
      es: "Descubre cómo Server Actions, el prerrenderizado parcial y los diseños anidados permiten crear aplicaciones corporativas veloces y estables.",
      de: "Erfahren Sie, wie Server-Actions, Partial Pre-rendering und verschachtelte Layouts es Unternehmen ermöglichen, ultraschnelle Apps zu bauen."
    },
    readTimes: {
      en: "6 min read",
      es: "6 min de lectura",
      de: "6 Min. Lesezeit"
    },
    author: {
      name: "Marcus Vance",
      role: "Lead Fullstack Dev",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
    },
    date: "June 20, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'b2',
    category: 'design',
    titles: {
      en: "Designing for the Future: Glassmorphism and Spatial Interfaces",
      es: "Diseñando para el futuro: Glassmorphism e interfaces espaciales",
      de: "Design für die Zukunft: Glassmorphismus und räumliche Interfaces"
    },
    excerpts: {
      en: "Learn the core design theories behind light refraction, visual hierarchies, and CSS backdrop-filters that keep users engaged and wowed.",
      es: "Aprende las teorías de diseño detrás de la refracción de luz, jerarquías visuales y backdrop-filters de CSS que cautivan a los usuarios.",
      de: "Lernen Sie die Designtheorien hinter Lichtbrechung, visueller Hierarchie und CSS-Backdrop-Filtern kennen, die Nutzer begeistern."
    },
    readTimes: {
      en: "4 min read",
      es: "4 min de lectura",
      de: "4 Min. Lesezeit"
    },
    author: {
      name: "Suki Chen",
      role: "Lead UI/UX Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'b3',
    category: 'cloud',
    titles: {
      en: "Scaling SaaS Architectures: Docker Containers vs AWS Serverless",
      es: "Escalando arquitecturas SaaS: Contenedores Docker vs AWS Serverless",
      de: "Skalierung von SaaS-Architekturen: Docker vs. AWS Serverless"
    },
    excerpts: {
      en: "A comprehensive breakdown of billing, server cold-starts, state management, and edge routing budgets for startups building dynamic platforms.",
      es: "Un análisis comparativo sobre facturación, arranques en frío, gestión de estado y enrutamiento perimetral para nuevas empresas.",
      de: "Ein umfassender Vergleich von Abrechnungsmodellen, Kaltstarts, Zustandsverwaltung und Edge-Routing für Startups."
    },
    readTimes: {
      en: "8 min read",
      es: "8 min de lectura",
      de: "8 Min. Lesezeit"
    },
    author: {
      name: "David Miller",
      role: "Senior Backend Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
    },
    date: "June 08, 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  }
];
