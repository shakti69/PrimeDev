export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: 'In Development' | 'Completed' | 'Beta Testing';
  timeframe: string;
  imageUrl?: string;
  client?: string;
  tag?: string;
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
    id: 'strikz-esports',
    slug: 'strikz-esports',
    client: 'Strikz Esports',
    tag: 'Esports / Gaming / Web Development',
    title: 'Strikz Esports Platform & Arena',
    tagline: 'From the heart of Odisha to the nation\'s biggest gaming stage with tournament registration, roster management, and live match ticker.',
    category: 'Digital Platforms',
    status: 'Completed',
    timeframe: '2026',
    imageUrl: '/images/strikz_banner.png',
    challenge:
      'Organizing competitive gaming tournaments involves complex multi-round brackets, schedule clashes, team registration logistics, and disjointed communication channels for competitive rosters.',
    solution:
      'Architected a centralized gaming tournament platform enabling team registrations, automated bracket progression, live match results broadcasting, countdown timers, and integrated media feeds with high-contrast cyberpunk aesthetics.',
    keyFeatures: [
      'Pro Esports Arena with dynamic live tournament countdown ticker',
      'Team roster registration with captain verification workflows',
      'Single & double elimination live tournament bracket progression',
      'High-performance gaming UI with hardware-accelerated animations',
      'Integrated match schedules, awards showcase, and official sponsor portals',
      'Real-time match scoring broadcast feed and media streaming modules',
    ],
    architectureSpecs: [
      {
        title: 'Frontend Experience',
        detail: 'React & TypeScript with modern CSS glow animations and ultra-responsive layout.',
      },
      {
        title: 'Tournament Logic',
        detail: 'Dynamic bracket state machine and automated seed calculations on match completions.',
      },
      {
        title: 'Broadcast Integration',
        detail: 'Live match ticker widgets and embeddable tournament result feeds.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST API', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'primenet',
    slug: 'primenet',
    client: 'PrimeNet',
    tag: 'Networking / Internet / Infrastructure',
    title: 'PrimeNet - Campus Fiber Broadband',
    tagline: 'Ultra-fast, reliable hostel broadband with seamless device MAC address auto-connection, zero captive portal logins, and dedicated on-campus server room support.',
    category: 'Web Systems & Networking',
    status: 'Completed',
    timeframe: '2026',
    imageUrl: '/images/primenet_banner.png',
    challenge:
      'Campus and hostel internet networks frequently suffer from repetitive captive portal authentication timeouts, network throttling, inconsistent bandwidth distribution, and lack of real-time server room telemetry.',
    solution:
      'Designed PrimeNet: a high-throughput gigabit network architecture featuring MAC-based seamless device authentication, QoS traffic shaping, low-latency gaming and streaming lanes, and a unified telemetry dashboard.',
    keyFeatures: [
      'Zero captive portal authentication via automated device MAC address binding',
      'Gigabit fiber backbone routing with sub-5ms local server latency',
      'Real-time bandwidth diagnostics, ping telemetry, and packet loss monitors',
      'Role-based admin portal for bandwidth allocation and client management',
      'Dedicated hostel server room monitoring and automated failover triggers',
    ],
    architectureSpecs: [
      {
        title: 'Network Protocol Layer',
        detail: 'DHCP MAC-binding combined with RADIUS session validation for zero-login connectivity.',
      },
      {
        title: 'Telemetry Engine',
        detail: 'Real-time WebSocket latency metrics and automated throughput throttling prevention.',
      },
      {
        title: 'Administration Portal',
        detail: 'Responsive management dashboard displaying active client nodes, speeds, and uptime stats.',
      },
    ],
    techStack: ['Networking Protocols', 'Fiber Infrastructure', 'React', 'Node.js', 'WebSockets', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'pointx',
    slug: 'pointx',
    client: 'PointX',
    tag: 'Esports / Tournament OS / Web App',
    title: 'PointX Tournament OS & Management Platform',
    tagline: 'Online esports management platform featuring instant Free Fire official scoring (12-9-8-7), multi-tiebreaker hierarchy, points tables, and OBS broadcast overlays.',
    category: 'Full-Stack SaaS',
    status: 'Completed',
    timeframe: '2026',
    imageUrl: '/images/pointx_banner.png',
    challenge:
      'Manual point calculation in battle royale esports tournaments is prone to human error, slow tiebreaker resolution, and delayed generation of social media standings posters.',
    solution:
      'Engineered PointX: a tournament operating system with automated multi-tier tiebreakers, live score inputs, 4K Instagram poster generation, and professional OBS overlay integration for live broadcast streams.',
    keyFeatures: [
      'Official Free Fire & Battle Royale point calculation engine (12-9-8-7 format)',
      'Automated multi-tier tiebreaker resolution (Kills > Placement > Last Match Finish)',
      'Ultra HD 4K Instagram Standings Posters, Match Summaries & Story Flyers export',
      'Live OBS Studio browser source overlays with real-time score updates',
      'Tournament lifecycle management: Registration, Brackets, Live Scoring, Archival',
      'Team & Player statistics tracking across multi-day championship series',
    ],
    architectureSpecs: [
      {
        title: 'Scoring Engine',
        detail: 'Algorithmic point matrix calculator with instant tiebreaker resolution.',
      },
      {
        title: 'Graphic Synthesis',
        detail: 'Client-side HTML Canvas renderer generating 4K tournament summary posters.',
      },
      {
        title: 'Broadcast API',
        detail: 'Low-latency streaming endpoints providing real-time data to OBS browser sources.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'HTML5 Canvas', 'Tailwind CSS', 'OBS WebSockets'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'darkedge-ai',
    slug: 'darkedge-ai',
    client: 'DarkEdge AI',
    tag: 'Android App / Offline AI / Productivity',
    title: 'DarkEdge AI - Private Offline AI Assistant',
    tagline: 'An on-device Android AI assistant designed to run AI models locally, providing 100% private, intelligent assistance without requiring internet connectivity.',
    category: 'Android App & AI Systems',
    status: 'Completed',
    timeframe: '2026',
    imageUrl: '/images/darkedge_banner.png',
    challenge:
      'Cloud-based AI assistants require continuous internet access, introduce latency, and expose sensitive personal queries and notes to third-party servers.',
    solution:
      'Built DarkEdge AI for Android: an optimized local inference framework that runs quantized AI models directly on mobile hardware with zero cloud telemetry, instant voice/text input, and persistent local storage.',
    keyFeatures: [
      '100% Local On-Device AI Inference with zero internet or cloud dependency',
      'Complete data privacy — all conversations and chats remain encrypted on-device',
      'Ultra-fast instant response generation without cloud server queuing latency',
      'Sleek dark obsidian user interface optimized for AMOLED battery efficiency',
      'Voice-to-text dictation and contextual conversational memory',
      'Developer & student productivity mode with code synthesis and explanation',
    ],
    architectureSpecs: [
      {
        title: 'Mobile On-Device Engine',
        detail: 'Optimized quantized LLM runtime utilizing Android hardware acceleration.',
      },
      {
        title: 'Local Persistence',
        detail: 'Encrypted SQLite local database managing chat threads and user context.',
      },
      {
        title: 'UI Performance',
        detail: 'Native Android responsive design with dark mode AMOLED token optimizations.',
      },
    ],
    techStack: ['Android', 'Kotlin', 'On-Device LLM Runtime', 'SQLite Encryption', 'Material 3'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'primedev',
    slug: 'primedev',
    client: 'PrimeDev',
    tag: 'Web Development / Digital Solutions',
    title: 'PrimeDev Studio & Full-Stack Digital Agency',
    tagline: 'Bespoke design systems, high-performance web architecture, SaaS platforms, and software engineering crafted without compromise.',
    category: 'Digital Platforms',
    status: 'Completed',
    timeframe: '2026',
    imageUrl: '/images/primedev_banner.png',
    challenge:
      'Modern businesses often struggle with generic template websites that fail to convert, lack architectural performance, and do not convey true craft and credibility.',
    solution:
      'Created PrimeDev: a signature design and software engineering studio combining strategic brand identity, custom interactive component design, lightning-fast web performance, and scalable cloud architectures.',
    keyFeatures: [
      'Architectural visual brand identity with custom typography and kinetic interactions',
      'Component-driven UI/UX design systems built for enterprise scalability',
      'Full-stack web application development with sub-second page loads and SEO optimization',
      'Transparent pricing packages: Project-Based Packages & Unlimited Design Subscriptions',
      'Interactive project showcases with real-time case study explorers and booking pipelines',
    ],
    architectureSpecs: [
      {
        title: 'Frontend Engineering',
        detail: 'React 19, strict TypeScript, Tailwind CSS, and Framer Motion micro-interactions.',
      },
      {
        title: 'Performance & SEO',
        detail: 'Static asset optimization, zero-flash pre-hydration, and strict WCAG compliance.',
      },
      {
        title: 'Scalability',
        detail: 'Modular component architecture ready for high-traffic enterprise deployment.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Node.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shakti69/PrimeDev',
  },
  {
    id: 'premium-portfolio',
    slug: 'premium-portfolio',
    client: 'Premium Portfolio',
    tag: 'Portfolio / Web Design / UI/UX',
    title: 'Shakti Prasad Hota - Personal Portfolio',
    tagline: 'A premium personal portfolio website showcasing software engineering projects, design systems, technical articles, and achievements with editorial precision.',
    category: 'Web Systems',
    status: 'Completed',
    timeframe: '2026',
    imageUrl: '/images/portfolio_banner.png',
    challenge:
      'Standard portfolio templates often feel cluttered and fail to present complex engineering achievements and design craft in an engaging, polished editorial format.',
    solution:
      'Designed an editorial developer portfolio with minimalist Swiss typography, dynamic abstract visuals, interactive project explorers, and seamless navigation.',
    keyFeatures: [
      'Minimalist dark aesthetic with organic fluid gradient artworks',
      'Interactive project showcase and in-depth engineering case studies',
      'Smooth micro-interactions and hardware-accelerated transitions',
      'Responsive editorial layout optimized across mobile, tablet, and ultra-wide screens',
      'Integrated contact and direct project inquiry channels',
    ],
    architectureSpecs: [
      {
        title: 'Design System',
        detail: 'Custom typography hierarchy, fluid grid tokens, and editorial spacing.',
      },
      {
        title: 'Interaction Model',
        detail: 'Hardware-accelerated CSS transforms and smooth scroll physics.',
      },
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shakti69',
  },
  {
    id: 'openwrt-router-os',
    slug: 'openwrt-router-os',
    client: 'OpenWrt Router OS Design',
    tag: 'Networking / Router OS / Linux',
    title: 'Prabina OpenWrt Router OS & Dashboard',
    tagline: 'A customized router operating-system project based on OpenWrt, focused on router management, network configuration, Wi-Fi 6 Gigabit telemetry, and performance optimization.',
    category: 'Web Systems & Embedded Linux',
    status: 'Completed',
    timeframe: '2026',
    imageUrl: '/images/openwrt_router_banner.png',
    challenge:
      'Default router firmware interfaces are frequently slow, unintuitive for users, and lack streamlined access to advanced networking features like AdGuard DNS, multi-WAN, and Tor/VPN routing.',
    solution:
      'Built Prabina Router OS on OpenWrt: a modern, user-friendly router interface featuring real-time client monitoring, one-click AdGuard, VPN, and Tor toggles, multi-WAN load balancing, and Wi-Fi 6 AX6000 telemetry.',
    keyFeatures: [
      'Prabina Modern Web Interface: clean, responsive control center for OpenWrt',
      'PrimeNet AX6000 5G Wi-Fi 6 Gigabit Router optimization and telemetry',
      'One-click security modules: AdGuard DNS blocker, IPv6, VPN, and Tor routing',
      'Internet source switching: Ethernet WAN, Wi-Fi Repeater, USB Tethering, Cellular',
      'Real-time connected client list with WLAN/LAN breakdown and traffic shaping',
      'Low-overhead Linux daemon communicating directly with ubus and UCI configuration',
    ],
    architectureSpecs: [
      {
        title: 'Kernel & OS Layer',
        detail: 'OpenWrt Linux kernel with customized UCI configuration scripts and ubus hooks.',
      },
      {
        title: 'Web Control GUI',
        detail: 'Lightweight, hardware-responsive frontend communicating via LuCI / REST endpoints.',
      },
      {
        title: 'Security Subsystems',
        detail: 'Integrated iptables / nftables firewall rules with AdGuard and WireGuard VPN tunnels.',
      },
    ],
    techStack: ['OpenWrt', 'Linux Kernel', 'LuCI', 'Shell Scripting', 'JavaScript', 'Tailwind CSS', 'Networking'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'hostel-management',
    slug: 'hostel-management',
    client: 'Mahima Chatrabas',
    tag: 'Mobile App / Management / SaaS',
    title: 'Mahima Chatrabas - Hostel Meal Management Portal',
    tagline: 'A signature hostel meal system for attendance, food preference, daily planning, room management, and automated student billing at Dhenkanal College.',
    category: 'Full-Stack SaaS',
    status: 'Completed',
    timeframe: '2026',
    imageUrl: '/images/hostel_banner.png',
    challenge:
      'Managing hostel dining for hundreds of students at Dhenkanal College involves manual meal registers, attendance inaccuracies, meal wastage, and tedious month-end billing disputes.',
    solution:
      'Engineered Mahima Chatrabas Hostel Meal Management Portal: an end-to-end platform with role-based access for students, mess representatives, and admins. Features real-time meal cutoffs, daily attendance, automated per-meal calculations, and instant invoices.',
    keyFeatures: [
      'Role-based portals: Student, Mess Representative, Hostel Admin, and Accountant',
      'Daily meal toggle with automated time-locked cutoff safeguards to prevent food wastage',
      'Instant student attendance check-in and diet preference selection (Veg / Non-Veg)',
      'Automated monthly mess fee and balance calculator with live transparency',
      'Client-side instant PDF invoice generator and Excel/CSV summary exports',
      'Facility, hostel rules, and student complaint registration directory',
    ],
    architectureSpecs: [
      {
        title: 'Frontend Application',
        detail: 'Modern React & TypeScript portal with rich dark/light dining themes.',
      },
      {
        title: 'Backend & Calculation Logic',
        detail: 'Node.js REST API with MongoDB aggregation pipelines computing monthly balances in milliseconds.',
      },
      {
        title: 'Security & Verification',
        detail: 'JWT authentication with role guards and tamper-proof attendance logging.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'jsPDF', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shakti69/hostel-meal-management-system',
  },
];
