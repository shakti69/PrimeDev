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
      en: "Hostel Meal Management System",
      es: "Sistema de Gestión de Comidas de Residencia",
      de: "Hostel-Mahlzeiten-Managementsystem"
    },
    descriptions: {
      en: "Full-stack enterprise application with 4 distinct roles (Student, Staff, Admin, Developer), OTP auth, real-time meal toggle cutoff logic, automated monthly billing calculation, and jsPDF invoice generation.",
      es: "Aplicación empresarial full-stack con 4 roles (Estudiante, Personal, Administrador, Desarrollador), autenticación OTP, lógica de corte de comidas y facturación PDF con jsPDF.",
      de: "Enterprise Full-Stack-Anwendung mit 4 Rollen (Student, Personal, Admin, Entwickler), OTP-Authentifizierung, Mahlzeiten-Schaltlogik und automatisierter PDF-Rechnungserstellung mit jsPDF."
    },
    image: "/favicon.svg",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "jsPDF", "Recharts"],
    liveUrl: "#portal", // Seamless demo in client portal!
    githubUrl: "https://github.com/shakti69/hostel-meal-management-system"
  },
  {
    id: 'p2',
    category: 'web-apps',
    titles: {
      en: "Smart WiFi Attendance System",
      es: "Sistema de Asistencia Inteligente por WiFi",
      de: "Smartes WiFi-Anwesenheitssystem"
    },
    descriptions: {
      en: "Automated institutional presence detection and attendance tracking framework utilizing network hardware integrations to eliminate manual roll calls and eliminate paper waste.",
      es: "Sistema automatizado de detección de presencia y registro de asistencia escolar mediante integración de hardware de red para eliminar el registro manual.",
      de: "Automatisiertes System zur Anwesenheitserfassung über WiFi-Netzwerkintegration, das manuelle Anwesenheitslisten und Papieraufwand überflüssig macht."
    },
    image: "/favicon.svg",
    techStack: ["WiFi Hardware", "Networking", "JavaScript", "REST API", "Database Integration"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/shakti69"
  },
  {
    id: 'p3',
    category: 'custom',
    titles: {
      en: "Smart Audio Tutor for Blind Students",
      es: "Tutor de Audio Inteligente para Estudiantes Invidentes",
      de: "Smarter Audio-Tutor für sehbehinderte Lernende"
    },
    descriptions: {
      en: "Inclusive and accessible web learning platform featuring PDF chapter parsing, automated text-to-speech audio lessons, hands-free voice command navigation, and interactive voice quizzes.",
      es: "Plataforma de aprendizaje web accesible con procesamiento de capítulos PDF, lecciones de texto a voz, control por comandos de voz y cuestionarios interactivos hablados.",
      de: "Barrierefreie Lernplattform mit automatischer PDF-Kapitelanalyse, Text-to-Speech-Lektionen, Sprachsteuerung und interaktiven Sprach-Quizzen."
    },
    image: "/favicon.svg",
    techStack: ["HTML5", "JavaScript", "Web Speech API", "PDF.js", "Node.js", "Voice Recognition"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/shakti69"
  },
  {
    id: 'p4',
    category: 'web-apps',
    titles: {
      en: "Strikz Esports Arena & Tournament Hub",
      es: "Plataforma de Torneos y Arena Strikz Esports",
      de: "Strikz Esports Turnier- und Gaming-Plattform"
    },
    descriptions: {
      en: "Dynamic esports management hub with player team registrations, real-time match scheduling, interactive brackets, and media streaming integrations for competitive tournaments.",
      es: "Hub dinámico de gestión de deportes electrónicos con registro de equipos, programación de partidas en tiempo real, tablas de torneo y transmisión multimedia.",
      de: "Dynamische E-Sports-Management-Plattform mit Team-Registrierungen, Live-Match-Planung, Turnierbäumen und Streaming-Integrationen."
    },
    image: "/images/strikz_banner.png",
    techStack: ["HTML5", "CSS3 / Cyberpunk UI", "JavaScript", "Node.js", "Audio Integration"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/shakti69"
  },
  {
    id: 'p5',
    category: 'ecommerce',
    titles: {
      en: "Bajarangi Digital Agency Platform",
      es: "Plataforma de Agencia Digital Bajarangi",
      de: "Bajarangi Digital-Agentur-Plattform"
    },
    descriptions: {
      en: "Next-gen web agency portal engineered with Next.js App Router, futuristic neon styling, fast-loading service showcases, and automated lead capture workflows.",
      es: "Portal de agencia web de última generación diseñado con Next.js App Router, estilo neón futurista y flujos automatizados de captación de clientes.",
      de: "Moderne Agentur-Website auf Basis von Next.js App Router mit futuristischem Design, performanter Leistungsübersicht und automatisierter Lead-Erfassung."
    },
    image: "/favicon.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostCSS"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/shakti69"
  },
  {
    id: 'p6',
    category: 'custom',
    titles: {
      en: "Active Noise Cancellation (ANC) DSP Filter",
      es: "Filtro DSP de Cancelación Activa de Ruido (ANC)",
      de: "Aktiver Rauschunterdrückungsfilter (ANC DSP)"
    },
    descriptions: {
      en: "Real-time acoustic signal processing and noise reduction utility implemented with Python, analyzing microphone input feeds to dynamically filter background frequencies.",
      es: "Utilidad de procesamiento de señales acústicas y reducción de ruido en tiempo real con Python para filtrar frecuencias de fondo en vivo.",
      de: "Echtzeit-Audiosignalverarbeitung und Rauschunterdrückungstool mit Python zur dynamischen Filterung von Hintergrundfrequenzen bei Mikrofonaufnahmen."
    },
    image: "/favicon.svg",
    techStack: ["Python", "Digital Signal Processing", "Audio Analysis", "NumPy", "PyAudio"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/shakti69"
  }
];
