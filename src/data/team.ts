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
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
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
    name: 'Shakti Prasad Hota',
    positions: {
      en: "Founder & Lead Full-Stack / Cybersecurity Specialist",
      es: "Fundador y Especialista Líder en Full-Stack / Ciberseguridad",
      de: "Gründer & Leitender Full-Stack- / Cybersicherheits-Spezialist"
    },
    skills: [
      { name: "Full-Stack (React / Node.js)", percentage: 95 },
      { name: "Cybersecurity & Kali Linux", percentage: 92 },
      { name: "Networking & System Architecture", percentage: 94 },
      { name: "UI/UX & Creative Media", percentage: 90 }
    ],
    socials: {
      github: "https://github.com/shakti69",
      instagram: "https://www.instagram.com/shakti_gamer69",
      youtube: "https://youtube.com/@shakti_bajarangi"
    },
    bios: {
      en: "Passionate computer science engineer and cybersecurity explorer dedicated to building secure, high-performance web applications, accessible digital tools, and scalable software solutions.",
      es: "Ingeniero apasionado de ciencias de la computación y explorador de ciberseguridad dedicado a construir aplicaciones web seguras, de alto rendimiento y herramientas digitales accesibles.",
      de: "Leidenschaftlicher Informatiker und Cybersicherheits-Experte, spezialisiert auf sichere, hochperformante Webanwendungen, barrierefreie Tools und skalierbare Softwarelösungen."
    },
    image: "/images/profile.png"
  },
  {
    id: 't2',
    name: 'PrimeDev Engineering Core',
    positions: {
      en: "Full-Stack Development & API Architects",
      es: "Desarrollo Full-Stack y Arquitectura de APIs",
      de: "Full-Stack-Entwicklung & API-Architektur"
    },
    skills: [
      { name: "React / Vite / TypeScript", percentage: 96 },
      { name: "Express / Node.js / MongoDB", percentage: 94 },
      { name: "REST APIs & Auth (JWT/OTP)", percentage: 95 },
      { name: "Tailwind CSS & Motion", percentage: 92 }
    ],
    socials: {
      github: "https://github.com/shakti69"
    },
    bios: {
      en: "Our core engineering group specializing in clean modular code, responsive interfaces, role-based database operations, and high-speed API microservices.",
      es: "Nuestro equipo central de ingeniería especializado en código limpio y modular, interfaces responsivas, bases de datos con roles y microservicios API.",
      de: "Unser Kernentwickler-Team für sauberen modularen Code, responsive Benutzeroberflächen, rollenbasierte Datenbanksysteme und performante APIs."
    },
    image: "/favicon.svg"
  },
  {
    id: 't3',
    name: 'PrimeDev Media & Creative Lab',
    positions: {
      en: "Creative Direction, UI/UX & E-Sports Production",
      es: "Dirección Creativa, UI/UX y Producción de E-Sports",
      de: "Kreativdirektion, UI/UX & E-Sports-Produktion"
    },
    skills: [
      { name: "UI/UX & Visual Layouts", percentage: 95 },
      { name: "Video Production & Editing", percentage: 92 },
      { name: "E-Sports Casting & Hosting", percentage: 94 },
      { name: "Creative Scriptwriting", percentage: 88 }
    ],
    socials: {
      youtube: "https://youtube.com/@shakti_bajarangi",
      instagram: "https://www.instagram.com/shakti_gamer69"
    },
    bios: {
      en: "Delivering energetic media presentations, gaming event broadcasting, video storytelling, and accessible user experiences that captivate audiences.",
      es: "Ofreciendo presentaciones de medios enérgicas, transmisiones de eventos de gaming, edición de video y experiencias de usuario atractivas.",
      de: "Verantwortlich für mitreißende Medienpräsentationen, E-Sports-Broadcasting, Storytelling und barrierefreie UI/UX-Konzepte."
    },
    image: "/favicon.svg"
  }
];
