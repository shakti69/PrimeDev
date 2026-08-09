export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Full-Stack SaaS' | 'Web Systems' | 'Assistive & Audio Tech' | 'Digital Platforms';
  status: 'In Development' | 'Completed' | 'Beta Testing';
  timeframe: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  architectureSpecs: {
    title: string;
    detail: string;
  }[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS_LIST: ProjectDetail[] = [
  {
    id: 'hostel-meal-management',
    slug: 'hostel-meal-management',
    title: 'Hostel Meal Management System',
    tagline: 'Role-based campus catering management platform with automated billing and dynamic invoice synthesis.',
    category: 'Full-Stack SaaS',
    status: 'In Development',
    timeframe: '2026',
    challenge:
      'Campus dining and hostel meal management frequently suffers from manual tally errors, delayed meal cancellations, and cumbersome billing reconciliation for hundreds of students.',
    solution:
      'Engineered an enterprise full-stack platform with 4 distinct role tiers (Student, Staff, Admin, Developer). Incorporates OTP authentication, dynamic meal cutoff logic, real-time daily counter controls, automated monthly fee calculations, and instant jsPDF invoice exports.',
    keyFeatures: [
      '4-Tier Role-Based Access Control (Student, Staff, Admin, Developer)',
      'Time-restricted meal toggle cancellation logic with countdown safeguards',
      'Automated monthly billing engine calculating per-meal rates and balances',
      'Instant client-side PDF invoice generation with jsPDF',
      'Staff counter panel with fast attendance marking and CSV export',
      'JWT session management with bcrypt credential security',
    ],
    architectureSpecs: [
      {
        title: 'Frontend Architecture',
        detail: 'React with strict TypeScript, Tailwind CSS design tokens, and modular state hooks.',
      },
      {
        title: 'Backend & Database',
        detail: 'Node.js & Express REST API with MongoDB aggregation pipelines for rapid monthly billing sums.',
      },
      {
        title: 'Security & Auth',
        detail: 'Stateless JWT tokens, hashed passwords via bcrypt, and strict route-level middleware guards.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'jsPDF', 'Tailwind CSS'],
    liveUrl: '#/contact',
    githubUrl: 'https://github.com/shakti69/hostel-meal-management-system',
  },
  {
    id: 'smart-wifi-attendance',
    slug: 'smart-wifi-attendance',
    title: 'Smart WiFi Attendance System',
    tagline: 'Automated campus presence detection engine utilizing wireless network probe request analysis.',
    category: 'Web Systems',
    status: 'Beta Testing',
    timeframe: '2026',
    challenge:
      'Manual roll calls waste valuable lecture time, are vulnerable to proxy attendance, and generate excessive paperwork.',
    solution:
      'Built a network-integrated attendance framework that monitors student device presence across campus access points, registering timestamps automatically and generating anomaly-detected attendance summaries.',
    keyFeatures: [
      'Zero-touch automated presence registration via network probe requests',
      'Classroom and lecture hall geo-zoning based on wireless access point association',
      'Instructor analytics dashboard with real-time room occupancy graphs',
      'Anomaly detection flagging unusual presence shifts or duplicate device IDs',
      'Automated monthly attendance percentage reports and parent notification triggers',
    ],
    architectureSpecs: [
      {
        title: 'Network Ingestion',
        detail: 'Lightweight listener logging probe request signals from campus router logs.',
      },
      {
        title: 'Processing Layer',
        detail: 'Node.js background service deduplicating MAC identifiers and mapping student profiles.',
      },
      {
        title: 'Reporting Dashboard',
        detail: 'Responsive administration dashboard displaying real-time occupancy and attendance metrics.',
      },
    ],
    techStack: ['Networking Protocols', 'WiFi Hardware', 'JavaScript', 'Node.js', 'REST API', 'PostgreSQL'],
    liveUrl: '#/contact',
    githubUrl: 'https://github.com/shakti69',
  },
  {
    id: 'smart-audio-tutor',
    slug: 'smart-audio-tutor',
    title: 'Smart Audio Tutor for Blind Students',
    tagline: 'Accessible voice-operated e-learning system featuring PDF text extraction and interactive auditory quizzes.',
    category: 'Assistive & Audio Tech',
    status: 'Completed',
    timeframe: '2026',
    challenge:
      'Digital educational materials are predominantly visual, creating significant hurdles for visually impaired students who need hands-free, auditory-first learning workflows.',
    solution:
      'Developed a fully accessible web application that extracts text from textbook PDFs, synthesizes chapters into narrated audio lessons, accepts continuous hands-free voice commands, and conducts interactive verbal quizzes.',
    keyFeatures: [
      'Hands-free voice command navigation using the Web Speech API',
      'PDF chapter text extraction and structured synthesis using PDF.js',
      'Customizable text-to-speech engine with pitch and speed controls',
      'Interactive voice quiz engine providing instant verbal explanations',
      'High-contrast, screen-reader optimized layout adhering to WCAG 2.1 AAA',
    ],
    architectureSpecs: [
      {
        title: 'Voice Pipeline',
        detail: 'Continuous speech recognition loop with natural language intent mapping for navigation commands.',
      },
      {
        title: 'Document Parser',
        detail: 'Client-side PDF.js worker parsing chapters, headings, and paragraphs into audio blocks.',
      },
      {
        title: 'Accessibility DOM',
        detail: 'Screen-reader live regions, full keyboard focus trap controls, and ARIA attributes.',
      },
    ],
    techStack: ['HTML5', 'JavaScript', 'Web Speech API', 'PDF.js', 'Node.js', 'WCAG AAA'],
    liveUrl: '#/contact',
    githubUrl: 'https://github.com/shakti69',
  },
  {
    id: 'strikz-esports-hub',
    slug: 'strikz-esports-hub',
    title: 'Strikz Esports Arena & Hub',
    tagline: 'Tournament management system with team registration, live bracket generation, and media streaming.',
    category: 'Digital Platforms',
    status: 'Completed',
    timeframe: '2026',
    challenge:
      'Organizing competitive gaming tournaments involves complex multi-round brackets, schedule clashes, and disjointed communication channels.',
    solution:
      'Architected a centralized gaming tournament platform enabling team registrations, automated bracket progression, live match results broadcasting, and integrated media links.',
    keyFeatures: [
      'Dynamic single and double elimination tournament bracket visualizers',
      'Team roster registration with captain verification workflows',
      'Real-time match schedule alerts and automated round progression',
      'Interactive cyberpunk aesthetic design with optimized render performance',
      'Livestream embed modules with live match ticker updates',
    ],
    architectureSpecs: [
      {
        title: 'Bracket Engine',
        detail: 'Custom bracket state machine updating match seeds upon score confirmations.',
      },
      {
        title: 'UI Performance',
        detail: 'Hardware-accelerated CSS animations and responsive grid structures.',
      },
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'REST APIs'],
    liveUrl: '#/contact',
    githubUrl: 'https://github.com/shakti69',
  },
  {
    id: 'anc-dsp-filter',
    slug: 'anc-dsp-filter',
    title: 'Active Noise Cancellation DSP Filter',
    tagline: 'Real-time acoustic signal processing and frequency filtration software.',
    category: 'Assistive & Audio Tech',
    status: 'Completed',
    timeframe: '2026',
    challenge:
      'Background acoustic interference degrades microphone recordings in noisy classroom and office environments.',
    solution:
      'Implemented real-time digital signal processing (DSP) filters in Python, capturing microphone feeds, analyzing FFT spectral distributions, and dynamically filtering ambient noise frequencies.',
    keyFeatures: [
      'Fast Fourier Transform (FFT) real-time spectral frequency analysis',
      'Adaptive noise floor estimation and frequency subtraction',
      'Low latency audio buffer processing',
      'Configurable band-pass and notch filtering parameters',
    ],
    architectureSpecs: [
      {
        title: 'DSP Pipeline',
        detail: 'NumPy vectorized mathematical transformations on real-time PyAudio buffer streams.',
      },
      {
        title: 'Latency Optimization',
        detail: 'Sub-30ms roundtrip audio processing buffer configurations.',
      },
    ],
    techStack: ['Python', 'NumPy', 'PyAudio', 'DSP Algorithms', 'Spectral Analysis'],
    liveUrl: '#/contact',
    githubUrl: 'https://github.com/shakti69',
  },
];
