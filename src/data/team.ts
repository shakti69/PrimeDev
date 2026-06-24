export interface TeamMember {
  id: string;
  name: string;
  positions: {
    en: string;
    es: string;
    de: string;
  };
  skills: { name: string; percentage: number }[];
  socials: {
    linkedin: string;
    github?: string;
    twitter?: string;
  };
  bios: {
    en: string;
    es: string;
    de: string;
  };
  image: string;
}

export const teamData: TeamMember[] = [
  {
    id: 't1',
    name: 'Elena Rostova',
    positions: {
      en: "Founder & CEO",
      es: "Fundadora y CEO",
      de: "Gründerin & CEO"
    },
    skills: [
      { name: "Digital Strategy", percentage: 98 },
      { name: "Business Growth", percentage: 95 },
      { name: "Product Design", percentage: 88 },
      { name: "Public Speaking", percentage: 92 }
    ],
    socials: {
      linkedin: "https://linkedin.com/in/elena-rostova",
      twitter: "https://twitter.com/elena_rostova"
    },
    bios: {
      en: "Elena has spent 12 years consulting Fortune 500 firms on tech transformations. She established PrimeDev to bridge modern frontends with robust enterprise engines.",
      es: "Elena cuenta con 12 años de experiencia asesorando a empresas Fortune 500 en transformación digital. Creó PrimeDev para unir interfaces web con robustos motores empresariales.",
      de: "Elena berät seit 12 Jahren Fortune-500-Unternehmen bei der digitalen Transformation. Sie gründete PrimeDev, um moderne Frontends mit robusten Enterprise-Architekturen zu verbinden."
    },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    positions: {
      en: "Lead Fullstack Developer",
      es: "Desarrollador Fullstack Principal",
      de: "Lead Fullstack Entwickler"
    },
    skills: [
      { name: "React / Next.js", percentage: 98 },
      { name: "Node.js / APIs", percentage: 95 },
      { name: "TypeScript", percentage: 96 },
      { name: "System Architecture", percentage: 92 }
    ],
    socials: {
      linkedin: "https://linkedin.com/in/marcus-vance",
      github: "https://github.com/marcusvance",
      twitter: "https://twitter.com/marcusv_dev"
    },
    bios: {
      en: "Marcus is an open-source contributor and performance extremist. He is obsessed with page speed budgets, atomic design libraries, and clean repository code.",
      es: "Marcus es colaborador de código abierto y fanático del rendimiento. Está obsesionado con los presupuestos de carga, librerías de diseño atómico y código limpio.",
      de: "Marcus ist Open-Source-Contributor und Performance-Enthusiast. Er optimiert Ladezeiten bis ins kleinste Detail und liebt saubere Code-Architekturen."
    },
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 't3',
    name: 'Suki Chen',
    positions: {
      en: "Lead UI/UX Designer",
      es: "Diseñadora UI/UX Principal",
      de: "Lead UI/UX Designerin"
    },
    skills: [
      { name: "UI/UX & Figma", percentage: 98 },
      { name: "Design Systems", percentage: 95 },
      { name: "Motion Design", percentage: 90 },
      { name: "User Research", percentage: 85 }
    ],
    socials: {
      linkedin: "https://linkedin.com/in/suki-chen",
      twitter: "https://twitter.com/sukichen_design"
    },
    bios: {
      en: "Suki creates interfaces that are beautiful, intuitive, and highly accessible. She translates complex user requirements into stunning, clean visual flows.",
      es: "Suki crea interfaces hermosas, intuitivas y accesibles. Traduce requisitos complejos de usuario en flujos visuales limpios y atractivos.",
      de: "Suki entwirft Benutzeroberflächen, die nicht nur schön, sondern auch intuitiv und barrierefrei sind. Sie übersetzt komplexe Anforderungen in visuelle Erlebnisse."
    },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 't4',
    name: 'David Miller',
    positions: {
      en: "Senior Backend Developer",
      es: "Desarrollador Backend Senior",
      de: "Senior Backend-Entwickler"
    },
    skills: [
      { name: "Express / NestJS", percentage: 94 },
      { name: "MongoDB / PostgreSQL", percentage: 96 },
      { name: "AWS & Docker", percentage: 90 },
      { name: "Security & JWT", percentage: 95 }
    ],
    socials: {
      linkedin: "https://linkedin.com/in/david-miller",
      github: "https://github.com/davidmiller-backend"
    },
    bios: {
      en: "David constructs secure and highly scalable microservices. He oversees databases, cache layers, validation structures, and data encryption.",
      es: "David construye microservicios seguros y altamente escalables. Supervisa bases de datos, capas de caché, estructuras de validación y encriptación de datos.",
      de: "David entwickelt sichere und hochskalierbare Microservices. Er überwacht Datenbanken, Caching-Layer, Validierungsstrukturen und Datenverschlüsselung."
    },
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 't5',
    name: 'Sarah Jenkins',
    positions: {
      en: "Marketing Specialist",
      es: "Especialista en Marketing",
      de: "Marketing-Spezialistin"
    },
    skills: [
      { name: "Growth Marketing", percentage: 95 },
      { name: "SEO & Content", percentage: 92 },
      { name: "Data Analytics", percentage: 88 },
      { name: "Brand Strategy", percentage: 90 }
    ],
    socials: {
      linkedin: "https://linkedin.com/in/sarah-jenkins",
      twitter: "https://twitter.com/sarahj_marketing"
    },
    bios: {
      en: "Sarah helps clients acquire organic traffic and optimize conversion funnels. She links brand assets with targeted digital campaigns to maximize growth.",
      es: "Sarah ayuda a los clientes a adquirir tráfico orgánico y optimizar embudos de conversión. Vincula activos de marca con campañas de marketing.",
      de: "Sarah hilft Kunden dabei, organischen Traffic zu generieren und Konversionspfade zu optimieren. Sie verknüpft Markenidentitäten mit Kampagnen."
    },
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
  }
];
