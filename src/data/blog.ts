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
      en: "Architecting Role-Based Web Apps with React, Express, and JWT Authentication",
      es: "Arquitectura de Aplicaciones Web con Roles usando React, Express y Autenticación JWT",
      de: "Architektur rollenbasierter Web-Apps mit React, Express und JWT-Authentifizierung"
    },
    excerpts: {
      en: "A deep dive into building secure multi-tier user systems (Students, Staff, Admins), handling OTP verification, and automating business logic such as daily cutoff timers and PDF reports.",
      es: "Un análisis profundo sobre cómo construir sistemas de usuarios de múltiples niveles, gestionar verificación OTP y automatizar la lógica empresarial y reportes en PDF.",
      de: "Ein tiefer Einblick in den Aufbau sicherer mehrstufiger Benutzersysteme, OTP-Verifizierung und die Automatisierung von Geschäftslogiken und PDF-Berichten."
    },
    readTimes: {
      en: "5 min read",
      es: "5 min de lectura",
      de: "5 Min. Lesezeit"
    },
    author: {
      name: "Shakti Prasad Hota",
      role: "Lead Full-Stack Developer",
      image: "/images/profile.png"
    },
    date: "August 2026",
    image: "/favicon.svg"
  },
  {
    id: 'b2',
    category: 'design',
    titles: {
      en: "Accessible Web Engineering: Building Audio & Voice Tutors for Blind Students",
      es: "Ingeniería Web Accesible: Creando Tutores de Audio y Voz para Estudiantes Invidentes",
      de: "Barrierefreie Webentwicklung: Audio- und Sprach-Tutoren für sehbehinderte Lernende"
    },
    excerpts: {
      en: "Best practices for implementing Web Speech API, PDF text extraction, high-contrast layouts, and keyboard-first accessibility without sacrificing modern aesthetic standards.",
      es: "Mejores prácticas para implementar Web Speech API, extracción de texto de PDFs, diseños de alto contraste y accesibilidad por teclado.",
      de: "Best Practices für die Implementierung der Web Speech API, PDF-Textextraktion, kontrastreiche Layouts und Tastatur-Zugänglichkeit."
    },
    readTimes: {
      en: "4 min read",
      es: "4 min de lectura",
      de: "4 Min. Lesezeit"
    },
    author: {
      name: "Shakti Prasad Hota",
      role: "Lead Full-Stack Developer",
      image: "/images/profile.png"
    },
    date: "July 2026",
    image: "/favicon.svg"
  },
  {
    id: 'b3',
    category: 'cloud',
    titles: {
      en: "Cybersecurity Fundamentals: Hardening Web Applications and Network Defense",
      es: "Fundamentos de Ciberseguridad: Protección de Aplicaciones Web y Defensa de Redes",
      de: "Grundlagen der Cybersicherheit: Absicherung von Webanwendungen und Netzwerkschutz"
    },
    excerpts: {
      en: "Practical techniques for vulnerability assessment, penetration testing with Kali Linux, securing API endpoints against XSS and injection, and safe state management.",
      es: "Técnicas prácticas para evaluación de vulnerabilidades, pruebas de penetración con Kali Linux y protección de endpoints de API.",
      de: "Praktische Techniken für Schwachstellenanalysen, Penetrationstests mit Kali Linux und die Absicherung von API-Endpunkten gegen Sicherheitsrisiken."
    },
    readTimes: {
      en: "6 min read",
      es: "6 min de lectura",
      de: "6 Min. Lesezeit"
    },
    author: {
      name: "Shakti Prasad Hota",
      role: "Cybersecurity Specialist",
      image: "/images/profile.png"
    },
    date: "June 2026",
    image: "/favicon.svg"
  }
];
