export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Web Engineering' | 'SaaS Architecture' | 'Cloud & Systems' | 'Accessible & IoT';
  iconName: string;
  overview: string;
  deliverables: string[];
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  useCases: string[];
}

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'web-engineering',
    slug: 'web-engineering',
    title: 'Full-Stack Web Engineering',
    tagline: 'Modern, high-performance web applications built for speed, accessibility, and scale.',
    category: 'Web Engineering',
    iconName: 'Code',
    overview:
      'We engineer production-grade web applications utilizing modern component frameworks, strict TypeScript typing, modular state management, and optimized asset pipelines.',
    deliverables: [
      'Custom React & Next.js client-side & server-side architectures',
      'Strict TypeScript configuration with zero loose types',
      'Sub-second first contentful paint (FCP) and optimal Core Web Vitals',
      'Responsive design across mobile, tablet, and desktop viewports',
      'Accessible WCAG 2.1 AA compliant UI component libraries',
    ],
    architectureHighlights: [
      {
        title: 'Component-Driven Architecture',
        description: 'Atomic, decoupled UI components backed by unified design tokens and strict prop interfaces.',
      },
      {
        title: 'State & Cache Management',
        description: 'Optimistic client updates, stale-while-revalidate caching, and resilient network fallbacks.',
      },
      {
        title: 'Security-First Frontend',
        description: 'Content Security Policy (CSP) headers, sanitized user inputs, and robust JWT session handling.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Node.js'],
    useCases: [
      'Enterprise internal platforms and administration consoles',
      'Customer-facing responsive web portals',
      'Interactive dashboards with real-time telemetry',
    ],
  },
  {
    id: 'saas-architecture',
    slug: 'saas-architecture',
    title: 'SaaS Platform & Multi-Tenant Systems',
    tagline: 'Scalable subscription platforms with role-based access control and automated workflows.',
    category: 'SaaS Architecture',
    iconName: 'Layers',
    overview:
      'Designing and deploying end-to-end multi-tenant web platforms, structured around role-based authorization hierarchies, automated billing calculators, and PDF reporting engines.',
    deliverables: [
      'Multi-tier Role-Based Access Control (Student, Staff, Admin, Super Admin)',
      'Automated billing and ledger calculation systems',
      'Dynamic PDF document and invoice generation engines',
      'Time-based cutoff logic and automated cron scheduling',
      'Comprehensive audit logging and exportable reporting (CSV/PDF)',
    ],
    architectureHighlights: [
      {
        title: 'Role Partitioning',
        description: 'Cryptographically verified JWT authorization tokens paired with granular middleware enforcement.',
      },
      {
        title: 'Automated Document Engines',
        description: 'Client-side and server-side PDF synthesis with dynamic table formatting and vector graphics.',
      },
      {
        title: 'Database Normalization',
        description: 'High-throughput document and relational schemas with indexing tailored for fast multi-tenant queries.',
      },
    ],
    techStack: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT', 'jsPDF', 'Docker'],
    useCases: [
      'Campus and hostel meal management systems',
      'Subscription portals with automated renewals and invoices',
      'Multi-organization operations dashboards',
    ],
  },
  {
    id: 'cloud-systems',
    slug: 'cloud-systems',
    title: 'Cloud Infrastructure & API Systems',
    tagline: 'Reliable backend services, RESTful APIs, and containerized deployment workflows.',
    category: 'Cloud & Systems',
    iconName: 'Server',
    overview:
      'Robust backend APIs, microservices, and static CDN deployment setups engineered for uptime, reproducible builds, and seamless deployment automation.',
    deliverables: [
      'RESTful and microservice API design with strict schema validation',
      'Docker containerization and multi-stage production builds',
      'Static asset CDN caching and edge distribution',
      'SSL/TLS encryption and automated certificate management',
      'Structured error handling and API telemetry logging',
    ],
    architectureHighlights: [
      {
        title: 'Modular API Services',
        description: 'Layered controllers, services, and repository layers for clean separation of concerns.',
      },
      {
        title: 'Containerized Environments',
        description: 'Identical local development and production runtime configurations via Docker.',
      },
      {
        title: 'Edge Optimization',
        description: 'Global static asset distribution minimizing TTFB and latency worldwide.',
      },
    ],
    techStack: ['Node.js', 'Docker', 'Nginx', 'Express', 'REST APIs', 'Git CI/CD'],
    useCases: [
      'Microservice backend integration layers',
      'Third-party payment and messaging webhook handlers',
      'Containerized cloud hosting setups',
    ],
  },
  {
    id: 'accessible-iot',
    slug: 'accessible-iot',
    title: 'Accessible Tech & IoT Automation',
    tagline: 'Inclusive assistive web tools and network hardware integrations.',
    category: 'Accessible & IoT',
    iconName: 'Cpu',
    overview:
      'Pioneering software that bridges hardware and accessibility—from WiFi presence detection engines to voice-controlled audio learning tools for visually impaired individuals.',
    deliverables: [
      'Voice command recognition and hands-free speech synthesis navigation',
      'PDF text extraction and auditory lesson synthesis',
      'WiFi network probe request capture and presence tracking algorithms',
      'High-contrast, screen-reader optimized semantic interfaces',
      'Digital signal processing and audio noise filtration utilities',
    ],
    architectureHighlights: [
      {
        title: 'Web Speech & Audio APIs',
        description: 'Native browser audio synthesis and continuous voice recognition pipelines.',
      },
      {
        title: 'Hardware Probe Integration',
        description: 'Network-level device presence polling without requiring manual roll-call check-ins.',
      },
      {
        title: 'Accessible Semantic DOM',
        description: 'Strict ARIA labeling, focus traps, and keyboard navigation primitives.',
      },
    ],
    techStack: ['Web Speech API', 'PDF.js', 'Python', 'Networking Protocols', 'Web Audio DSP'],
    useCases: [
      'Educational platforms for visually impaired students',
      'Campus automated WiFi attendance tracking',
      'Voice-operated assistive web dashboards',
    ],
  },
];
