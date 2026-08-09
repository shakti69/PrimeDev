// AI Chat Assistant Knowledge Engine Simulation

interface KnowledgeBase {
  [key: string]: {
    keywords: string[];
    responses: {
      en: string;
      es: string;
      de: string;
    };
  };
}

const knowledgeBase: KnowledgeBase = {
  greeting: {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'hola', 'hallo', 'moin', 'namaste'],
    responses: {
      en: "Hello! I am PrimeDev's AI Assistant. How can I help you today? I can provide information about our full-stack web development services, real projects (such as our Hostel Meal Management System & Smart Audio Tutor), cybersecurity expertise, pricing, or guide you in booking a consultation.",
      es: "¡Hola! Soy el asistente de Inteligencia Artificial de PrimeDev. ¿Cómo puedo ayudarte hoy? Puedo darte información sobre nuestros servicios de desarrollo web full-stack, proyectos reales (como nuestro Sistema de Gestión de Comidas y Tutor de Audio), experiencia en ciberseguridad o agendar una consulta.",
      de: "Hallo! Ich bin der KI-Assistent von PrimeDev. Wie kann ich Ihnen helfen? Ich kann Fragen zu unseren Full-Stack-Entwicklungsdiensten, realen Projekten (wie dem Hostel-Meal-Management-System und dem Audio-Tutor für Sehbehinderte), Cybersicherheit oder Terminbuchungen beantworten."
    }
  },
  services: {
    keywords: ['service', 'services', 'offer', 'do you do', 'develop', 'design', 'saas', 'commerce', 'app', 'servicios', 'leistungs', 'angebot', 'cybersecurity'],
    responses: {
      en: "PrimeDev, founded by Shakti Prasad Hota, delivers modern digital solutions including:\n\n• Full-Stack Web Applications (React, Next.js, Node.js, Express, MongoDB)\n• Custom Management Systems (Role-based access, automated billing, PDF generation)\n• Cybersecurity Assessments & Secure Code Audits\n• Accessible Web Design & Assistive Tech (Speech APIs, PDF.js, high-contrast UI)\n• E-Sports Platforms & Creative Media (Live tournament systems, video editing)\n• Responsive Frontend Engineering (Tailwind CSS, TypeScript, Framer Motion)\n\nWhich area would you like to discuss?",
      es: "PrimeDev, fundada por Shakti Prasad Hota, ofrece soluciones digitales modernas que incluyen:\n\n• Aplicaciones Web Full-Stack (React, Next.js, Node.js, Express, MongoDB)\n• Sistemas de Gestión a Medida (Control de acceso por roles, facturación automática)\n• Auditorías de Ciberseguridad y Código Seguro\n• Diseño Web Accesible y Tecnología Asistencial (Speech API, PDF.js)\n• Plataformas de E-Sports y Medios Creativos\n• Ingeniería Frontend Responsiva (Tailwind CSS, TypeScript)\n\n¿Qué área te gustaría consultar?",
      de: "PrimeDev, gegründet von Shakti Prasad Hota, bietet moderne digitale Lösungen:\n\n• Full-Stack-Webanwendungen (React, Next.js, Node.js, Express, MongoDB)\n• Maßgeschneiderte Managementsysteme (Rollenbasierte Zugriffsrechte, PDF-Rechnungsstellung)\n• Cybersicherheits-Audits und sichere Architekturen\n• Barrierefreie Webentwicklung (Web Speech API, Screenreader-Optimierung)\n• E-Sports-Plattformen und kreative Medienproduktion\n• Responsive Frontend-Entwicklung (Tailwind CSS, TypeScript)\n\nZu welchem Bereich wünschen Sie nähere Informationen?"
    }
  },
  pricing: {
    keywords: ['price', 'pricing', 'cost', 'costs', 'package', 'packages', 'subscription', 'budget', 'precios', 'cuanto cuesta', 'preise', 'kosten'],
    responses: {
      en: "We offer transparent, value-driven pricing structures:\n\n• **Starter ($999 - $1,999)**: Best for portfolio websites, landing pages, and responsive business showcases.\n• **Business ($2,999 - $4,999)**: Best for dynamic web applications, role-based dashboards, database integrations, and custom APIs.\n• **Enterprise (Custom Quotation)**: Large-scale SaaS platforms, comprehensive management systems, advanced security hardening, and dedicated ongoing maintenance.\n\nYou can explore our pricing section to compare features or book a free discovery consultation!",
      es: "Ofrecemos estructuras de precios transparentes y orientadas al valor:\n\n• **Starter ($999 - $1,999)**: Ideal para sitios web de portafolio, páginas de aterrizaje y presencia digital.\n• **Business ($2,999 - $4,999)**: Ideal para aplicaciones web dinámicas, paneles con roles e integraciones de bases de datos.\n• **Enterprise (Presupuesto personalizado)**: Plataformas SaaS de gran escala y sistemas de gestión integrales con seguridad avanzada.\n\n¡Puedes explorar la sección de precios o agendar una consulta gratuita!",
      de: "Wir bieten transparente, wertorientierte Preismodelle:\n\n• **Starter ($999 - $1.999)**: Ideal für Portfolio-Websites, Landingpages und responsive Unternehmensauftritte.\n• **Business ($2.999 - $4.999)**: Ideal für dynamische Web-Apps, rollenbasierte Dashboards und Datenbankintegrationen.\n• **Enterprise (Individuelles Angebot)**: Skalierbare SaaS-Plattformen, umfassende Managementsysteme und Sicherheitsaudits.\n\nIn unserem Preisbereich können Sie alle Funktionen vergleichen oder ein Beratungsgespräch buchen!"
    }
  },
  portfolio: {
    keywords: ['portfolio', 'projects', 'work', 'done', 'experience', 'examples', 'show', 'case study', 'proyectos', 'trabajos', 'projekten', 'referenzen', 'hostel', 'attendance', 'blind', 'strikz'],
    responses: {
      en: "Here are some of our flagship completed projects:\n\n1. **Hostel Meal Management System**: Full-stack MERN platform with 4 user roles, OTP login, meal cutoff timers, and automated jsPDF billing.\n2. **Smart WiFi Attendance System**: Automated attendance tracking using campus network presence detection.\n3. **Smart Audio Tutor for Blind Students**: Accessible learning platform with text-to-speech lessons and voice-interactive quizzes.\n4. **Strikz Esports Hub**: Competitive tournament portal with dynamic brackets and live streaming hubs.\n5. **Bajarangi Digital Agency**: High-performance cyber-aesthetic web agency portal built with Next.js.\n6. **ANC DSP Noise Filter**: Real-time Python audio signal processing.\n\nCheck out the Portfolio section for live demos and GitHub repositories!",
      es: "Estos son algunos de nuestros principales proyectos realizados:\n\n1. **Sistema de Gestión de Comidas de Residencia**: Plataforma full-stack MERN con 4 roles, inicio de sesión OTP y facturación automática con jsPDF.\n2. **Sistema de Asistencia por WiFi**: Registro automatizado de asistencia escolar.\n3. **Tutor de Audio para Estudiantes Invidentes**: Plataforma accesible con lecciones habladas y cuestionarios por voz.\n4. **Strikz Esports**: Portal de torneos y gestión de partidas.\n5. **Agencia Digital Bajarangi**: Portal web de alta velocidad con Next.js.\n6. **Filtro ANC DSP**: Procesamiento de audio en tiempo real con Python.\n\n¡Explora la sección de Portafolio para ver detalles y enlaces a GitHub!",
      de: "Hier sind einige unserer wichtigsten realisierten Projekte:\n\n1. **Hostel Meal Management System**: Full-Stack-MERN-Anwendung mit 4 Benutzerrollen, OTP-Login und automatischer PDF-Rechnungsstellung.\n2. **Smartes WiFi-Anwesenheitssystem**: Automatische Präsenzerfassung über Netzwerkkennungen.\n3. **Audio-Tutor für Sehbehinderte**: Barrierefreie Lernplattform mit Text-to-Speech und Sprachsteuerung.\n4. **Strikz Esports**: Plattform für E-Sports-Turniere und Match-Verwaltung.\n5. **Bajarangi Digital Agentur**: Performante Webpräsenz mit Next.js.\n6. **ANC DSP Rauschfilter**: Audiosignalverarbeitung in Echtzeit mit Python.\n\nBesuchen Sie den Portfolio-Bereich für Demos und GitHub-Links!"
    }
  },
  founder: {
    keywords: ['founder', 'who are you', 'shakti', 'hota', 'who built', 'team', 'author', 'developer', 'quien', 'wer'],
    responses: {
      en: "PrimeDev was founded and is led by **Shakti Prasad Hota**, a Computer Science engineer, full-stack developer, and cybersecurity specialist based in Odisha, India. Shakti specializes in secure web architectures, accessible interfaces, and digital solutions.",
      es: "PrimeDev fue fundada y está dirigida por **Shakti Prasad Hota**, ingeniero en Ciencias de la Computación, desarrollador full-stack y especialista en ciberseguridad con sede en Odisha, India.",
      de: "PrimeDev wurde gegründet und wird geleitet von **Shakti Prasad Hota**, einem Informatiker, Full-Stack-Entwickler und Cybersicherheits-Spezialisten aus Odisha, Indien."
    }
  },
  booking: {
    keywords: ['book', 'booking', 'call', 'consultation', 'appointment', 'meet', 'schedule', 'meeting', 'reserva', 'cita', 'buchen', 'termin', 'gespräch'],
    responses: {
      en: "Booking a consultation is easy! Click the 'Book Consultation' button on any pricing tier or open the booking modal. You can choose any convenient date and available time slot.",
      es: "¡Reservar una consulta es muy sencillo! Haz clic en el botón 'Reservar Consulta' en los planes de precios. Podrás seleccionar la fecha y el horario que mejor te convenga.",
      de: "Einen Termin zu vereinbaren ist ganz unkompliziert! Klicken Sie einfach auf 'Beratung buchen', um das Buchungsfenster zu öffnen und ein freies Zeitfenster auszuwählen."
    }
  },
  location: {
    keywords: ['location', 'address', 'where are you', 'office', 'hours', 'city', 'state', 'country', 'dirección', 'dónde están', 'oficina', 'adresse', 'wo sind sie', 'büro', 'india', 'odisha'],
    responses: {
      en: "PrimeDev is based in **Dhenkanal, Odisha, India**.\n\n• Email: **shaktiprasadhota07@gmail.com**\n• GitHub: **https://github.com/shakti69**\n• Hours: Monday - Friday, 9:00 AM - 6:00 PM IST.",
      es: "PrimeDev tiene su sede en **Dhenkanal, Odisha, India**.\n\n• Correo: **shaktiprasadhota07@gmail.com**\n• GitHub: **https://github.com/shakti69**\n• Horario: Lunes a Viernes, 9:00 AM - 6:00 PM IST.",
      de: "Der Hauptsitz von PrimeDev befindet sich in **Dhenkanal, Odisha, Indien**.\n\n• E-Mail: **shaktiprasadhota07@gmail.com**\n• GitHub: **https://github.com/shakti69**\n• Bürozeiten: Montag bis Freitag, 9:00 - 18:00 Uhr IST."
    }
  }
};

export const getAIResponse = (query: string, language: 'en' | 'es' | 'de' = 'en'): string => {
  const cleanQuery = query.toLowerCase().trim();

  // Search keyword matches
  for (const key of Object.keys(knowledgeBase)) {
    const item = knowledgeBase[key];
    const hasMatch = item.keywords.some((k) => cleanQuery.includes(k));
    if (hasMatch) {
      return item.responses[language] || item.responses.en;
    }
  }

  // Fallback response
  const fallbacks = {
    en: "Thank you for reaching out! I can assist you with details about our web applications, hostel management system, attendance tools, audio learning platform, cybersecurity consulting, pricing, or booking a consultation. You can also contact Shakti directly at shaktiprasadhota07@gmail.com.",
    es: "¡Gracias por contactarnos! Puedo ayudarte con detalles sobre nuestras aplicaciones web, proyectos realizados, consultoría en ciberseguridad, presupuestos o agendar una consulta. También puedes escribir directamente a shaktiprasadhota07@gmail.com.",
    de: "Vielen Dank für Ihre Nachricht! Ich helfe Ihnen gerne mit Details zu unseren Webanwendungen, realisierten Projekten, Cybersicherheit, Preisen oder der Terminbuchung weiter. Sie können Shakti auch direkt unter shaktiprasadhota07@gmail.com erreichen."
  };

  return fallbacks[language] || fallbacks.en;
};

export const generateAIResponse = async (query: string, language: 'en' | 'es' | 'de' = 'en'): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return getAIResponse(query, language);
};

export default { getAIResponse, generateAIResponse };
