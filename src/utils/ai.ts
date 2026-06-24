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
    keywords: ['hello', 'hi', 'hey', 'greetings', 'hola', 'hallo', 'moin'],
    responses: {
      en: "Hello! I am PrimeDev's AI Assistant. How can I help you today? I can answer questions about our services, pricing, portfolio, or guide you on booking a consultation call.",
      es: "¡Hola! Soy el asistente de Inteligencia Artificial de PrimeDev. ¿Cómo puedo ayudarte hoy? Puedo responder preguntas sobre nuestros servicios, precios, portafolio o guiarte para programar una llamada de consulta.",
      de: "Hallo! Ich bin der KI-Assistent von PrimeDev. Wie kann ich Ihnen heute helfen? Ich kann Fragen zu unseren Leistungen, Preisen und unserem Portfolio beantworten oder Sie bei der Buchung eines Beratungstermins unterstützen."
    }
  },
  services: {
    keywords: ['service', 'services', 'offer', 'do you do', 'develop', 'design', 'saas', 'commerce', 'app', 'servicios', 'leistungs', 'angebot'],
    responses: {
      en: "PrimeDev offers professional digital solutions including:\n\n• Custom Web Application Development (React, Next.js, Node.js)\n• E-Commerce Development (Shopify, Custom storefronts)\n• SaaS Platform Engineering\n• UI/UX Product Design\n• Cloud Infrastructure & AWS Operations\n• SEO Audits & Speed Optimizations\n• Custom Software & API Integration\n\nWould you like details on any specific service?",
      es: "PrimeDev ofrece soluciones digitales profesionales que incluyen:\n\n• Desarrollo de Aplicaciones Web a Medida (React, Next.js, Node.js)\n• Comercio Electrónico (Tiendas personalizadas, Shopify)\n• Ingeniería de Plataformas SaaS\n• Diseño de Producto UI/UX\n• Infraestructura en la Nube y Operaciones AWS\n• Auditorías SEO y Optimización de Velocidad\n• Software a Medida e Integraciones API\n\n¿Te gustaría recibir detalles sobre algún servicio específico?",
      de: "PrimeDev bietet professionelle digitale Lösungen, darunter:\n\n• Maßgeschneiderte Webanwendungsentwicklung (React, Next.js, Node.js)\n• E-Commerce-Entwicklung (Shopify, Custom-Shops)\n• SaaS-Plattforms\n• UI/UX Produkt-Design\n• Cloud-Infrastruktur & AWS-Services\n• SEO-Audits & Performance-Optimierungen\n• API-Integrationen & Individualsoftware\n\nMöchten Sie Details zu einem bestimmten Service erfahren?"
    }
  },
  pricing: {
    keywords: ['price', 'pricing', 'cost', 'costs', 'package', 'packages', 'subscription', 'cheap', 'budget', 'precios', 'cuanto cuesta', 'preise', 'kosten'],
    responses: {
      en: "We offer three flexible pricing structures:\n\n• **Starter ($2,999)**: Best for single page websites, landing pages, and small business portfolios. Includes responsive design and SEO.\n• **Business ($5,999)**: Best for growing companies. Includes full multi-page apps, CMS integration, custom animations, and database support.\n• **Enterprise (Custom)**: Custom architectures for SaaS portals, complex e-commerce, cloud integrations, and dedicated SLA maintenance support.\n\nAll pricing can be toggled to monthly or yearly options in our Pricing Section. You can also review the features comparison table!",
      es: "Ofrecemos tres estructuras de precios flexibles:\n\n• **Starter ($2,999)**: Ideal para sitios web de una sola página, landing pages y portafolios de pequeñas empresas. Incluye diseño responsivo y SEO.\n• **Business ($5,999)**: Ideal para empresas en crecimiento. Incluye aplicaciones completas de varias páginas, CMS, animaciones personalizadas y base de datos.\n• **Enterprise (Personalizado)**: Arquitecturas a medida para SaaS, e-commerce complejos, integraciones en la nube y soporte de mantenimiento SLA dedicado.\n\nTodos los precios pueden alternarse en nuestra sección de precios. ¡También puedes revisar la tabla comparativa de características!",
      de: "Wir bieten drei flexible Preismodelle an:\n\n• **Starter ($2.999)**: Perfekt für One-Page-Websites, Landingpages und Portfolios kleiner Unternehmen. Inklusive responsivem Design und SEO.\n• **Business ($5.999)**: Ideal für wachsende Unternehmen. Enthält mehrseitige Apps, CMS-Integration, benutzerdefinierte Animationen und Datenbanken.\n• **Enterprise (Individuell)**: Maßgeschneiderte Lösungen für SaaS-Plattformen, komplexen E-Commerce, Cloud-Systeme und SLA-Wartungssupport.\n\nAlle Preise können in unserem Preisbereich auf monatliche oder jährliche Zahlung umgestellt werden. Sie können dort auch die Vergleichstabelle einsehen!"
    }
  },
  portfolio: {
    keywords: ['portfolio', 'projects', 'work', 'done', 'experience', 'examples', 'show', 'case study', 'proyectos', 'trabajos', 'projekten', 'referenzen'],
    responses: {
      en: "We've built several premium platforms. Some highlights:\n\n1. **Aether SaaS Dashboard**: Real-time cloud monitoring platform using React & Tailwind. (68% overall progress in client portal tracker!)\n2. **Veloce E-Commerce**: Headless Shopify store featuring a 3D product customizer.\n3. **Apex Mobile App**: Companion iOS & Android application for sports coaching.\n4. **Novus AI Writer**: SaaS copywriting suite utilizing OpenAI integrations.\n\nYou can click the 'Portfolio' navigation link to filter them and view live demo layouts!",
      es: "Hemos desarrollado varias plataformas premium. Algunos puntos destacados:\n\n1. **Dashboard SaaS Aether**: Plataforma de monitoreo en la nube en tiempo real (¡con 68% de progreso en el portal de clientes!).\n2. **Comercio Electrónico Veloce**: Tienda Shopify headless con personalizador de productos 3D.\n3. **Aplicación Móvil Apex**: App para iOS y Android de entrenamiento deportivo.\n4. **Novus AI Writer**: Suite SaaS de redacción con integraciones de OpenAI.\n\n¡Puedes hacer clic en 'Portafolio' en la navegación para filtrarlos y ver demostraciones en vivo!",
      de: "Wir haben verschiedene Premium-Plattformen entwickelt. Einige Highlights:\n\n1. **Aether SaaS Dashboard**: Cloud-Monitoring-Plattform in Echtzeit (aktuell bei 68% Fortschritt im Kundenportal!).\n2. **Veloce E-Commerce**: Headless Shopify Store mit 3D-Produktkonfigurator.\n3. **Apex Mobile App**: Companion-App für iOS & Android im Bereich Sport-Coaching.\n4. **Novus AI Writer**: SaaS-Copywriting-Tool mit OpenAI-Integrationen.\n\nKlicken Sie auf den Link 'Portfolio' im Navigationsmenü, um die Projekte zu filtern und Demos anzusehen!"
    }
  },
  booking: {
    keywords: ['book', 'booking', 'call', 'consultation', 'appointment', 'meet', 'schedule', 'meeting', 'reserva', 'cita', 'buchen', 'termin', 'gespräch'],
    responses: {
      en: "Booking a call is easy! Click the 'Book Consultation' button on any pricing card or click 'Client Portal' -> 'Book New Appointment'. An interactive calendar will let you pick a date and select a time slot that matches your schedule.",
      es: "¡Reservar una llamada es fácil! Haz clic en el botón 'Reservar Consulta' en cualquier tarjeta de precios o ve a 'Portal de Cliente' -> 'Reservar Nueva Cita'. Un calendario interactivo te permitirá elegir un día y una franja horaria que se adapte a tu agenda.",
      de: "Einen Termin zu buchen ist ganz einfach! Klicken Sie auf einer der Preiskarten auf 'Beratung buchen' oder gehen Sie im 'Kundenportal' auf 'Neuen Termin buchen'. Über einen interaktiven Kalender können Sie ein Datum und ein freies Zeitfenster auswählen."
    }
  },
  location: {
    keywords: ['location', 'address', 'where are you', 'office', 'hours', 'city', 'state', 'country', 'dirección', 'dónde están', 'oficina', 'adresse', 'wo sind sie', 'büro'],
    responses: {
      en: "PrimeDev's global headquarters is located at:\n\n**100 Innovation Way, Suite 400, Silicon Valley, CA, USA.**\n\nOur doors are open Monday through Friday, 9:00 AM - 6:00 PM EST. We also have an interactive map at the bottom of the landing page!",
      es: "La sede central de PrimeDev está ubicada en:\n\n**100 Innovation Way, Suite 400, Silicon Valley, CA, EE. UU.**\n\nNuestras oficinas están abiertas de lunes a viernes, de 9:00 AM a 6:00 PM EST. ¡También puedes ver un mapa interactivo en la parte inferior de la página!",
      de: "Der Hauptsitz von PrimeDev befindet sich unter folgender Adresse:\n\n**100 Innovation Way, Suite 400, Silicon Valley, CA, USA.**\n\nUnser Büro ist von Montag bis Freitag, 9:00 Uhr - 18:00 Uhr EST geöffnet. Am Ende der Landingpage finden Sie auch eine interaktive Karte!"
    }
  },
  team: {
    keywords: ['founder', 'team', 'member', 'developer', 'designer', 'who works', 'staff', 'ceo', 'fundador', 'equipo', 'mitglieder', 'mitarbeiter'],
    responses: {
      en: "PrimeDev is composed of 5 core experts:\n\n• **Elena Rostova** (Founder & CEO): Master strategist.\n• **Marcus Vance** (Lead Fullstack Developer): Senior system architect.\n• **Suki Chen** (Lead UI/UX Designer): Visual design expert.\n• **David Miller** (Backend Developer): Database and security engineer.\n• **Sarah Jenkins** (Marketing Specialist): Growth hacker.\n\nHover over their cards in the Team Section to see their active skill bars!",
      es: "PrimeDev está integrado por 5 expertos principales:\n\n• **Elena Rostova** (Fundadora y CEO): Estratega comercial.\n• **Marcus Vance** (Desarrollador Fullstack Principal): Arquitecto de sistemas.\n• **Suki Chen** (Diseñadora UI/UX Principal): Experta en interfaces.\n• **David Miller** (Desarrollador Backend): Base de datos y seguridad.\n• **Sarah Jenkins** (Especialista en Marketing): Crecimiento digital.\n\n¡Pasa el cursor sobre sus tarjetas en la Sección de Equipo para ver sus barras de habilidades!",
      de: "PrimeDev besteht aus 5 Kernexperten:\n\n• **Elena Rostova** (Gründerin & CEO): Strategische Leiterin.\n• **Marcus Vance** (Lead Fullstack Entwickler): Systemarchitekt.\n• **Suki Chen** (Lead UI/UX Designerin): Visual-Design-Expertin.\n• **David Miller** (Backend-Entwickler): Datenbankspezialist.\n• **Sarah Jenkins** (Marketing-Spezialistin): Growth Hackerin.\n\nFahren Sie im Team-Bereich über die Karten, um deren Skill-Bars anzuzeigen!"
    }
  }
};

export const generateAIResponse = (prompt: string, language: 'en' | 'es' | 'de'): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lowerPrompt = prompt.toLowerCase();
      
      // Match keywords in prompt
      for (const key in knowledgeBase) {
        const keywords = knowledgeBase[key].keywords;
        const matches = keywords.some(keyword => lowerPrompt.includes(keyword));
        if (matches) {
          resolve(knowledgeBase[key].responses[language]);
          return;
        }
      }

      // Default fallback responses
      const fallbacks = {
        en: "I'm not sure I fully understand that question. Could you try asking about our services, projects, pricing packages, location, or how to schedule an appointment?",
        es: "No estoy seguro de entender completamente la pregunta. ¿Podrías intentar preguntar sobre nuestros servicios, proyectos, paquetes de precios, ubicación o cómo programar una cita?",
        de: "Ich bin mir nicht sicher, ob ich die Frage richtig verstanden habe. Könnten Sie stattdessen nach unseren Leistungen, Projekten, Preisen, unserem Standort oder der Buchung eines Termins fragen?"
      };
      
      resolve(fallbacks[language]);
    }, 850); // Simulate network latency and processing time
  });
};
export default generateAIResponse;
