export interface FAQItem {
  id: string;
  questions: {
    en: string;
    es: string;
    de: string;
  };
  answers: {
    en: string;
    es: string;
    de: string;
  };
}

export const faqData: FAQItem[] = [
  {
    id: 'f1',
    questions: {
      en: "How long does a standard web development project take?",
      es: "¿Cuánto tiempo toma un proyecto de desarrollo web estándar?",
      de: "Wie lange dauert ein typisches Webentwicklungsprojekt?"
    },
    answers: {
      en: "A standard corporate website takes about 3-5 weeks. High-performance web applications, complex SaaS platforms, or headless Shopify configurations typically take 6-12 weeks from strategy alignments to launch.",
      es: "Un sitio web corporativo estándar toma de 3 a 5 semanas. Las aplicaciones de alto rendimiento, plataformas SaaS complejas o configuraciones de Shopify headless suelen tomar de 6 a 12 semanas desde la estrategia hasta el lanzamiento.",
      de: "Ein typisches Firmenportal dauert 3-5 Wochen. Leistungsstarke Web-Apps, SaaS-Plattformen oder Headless-E-Commerce-Lösungen benötigen in der Regel 6-12 Wochen von der Konzeption bis zum Launch."
    }
  },
  {
    id: 'f2',
    questions: {
      en: "Do I get full ownership of the source code upon completion?",
      es: "¿Obtengo la propiedad total del código fuente al finalizar?",
      de: "Erhalte ich nach Abschluss das volle Eigentum am Quellcode?"
    },
    answers: {
      en: "Yes, absolutely! Once final payments are cleared, complete ownership of the source repositories, Figma design assets, databases, and deployment pipelines is transferred entirely to your team.",
      es: "¡Sí, por supuesto! Una vez liquidado el pago final, la propiedad total de los repositorios de código, diseños de Figma, bases de datos y tuberías de despliegue se transfiere por completo a tu equipo.",
      de: "Ja, absolut! Nach der Abschlusszahlung geht das vollständige Eigentum am Quellcode, den Figma-Design-Assets, den Datenbanken und den Deployment-Pipelines zu 100% auf Ihr Unternehmen über."
    }
  },
  {
    id: 'f3',
    questions: {
      en: "Do you offer post-launch maintenance and support?",
      es: "¿Ofrecen mantenimiento y soporte después del lanzamiento?",
      de: "Bieten Sie Wartung und Support nach dem Launch an?"
    },
    answers: {
      en: "Yes. We offer continuous maintenance packages covering core system packages security updates, backups, CDN optimization, and feature enhancements. These are outlined in our Website Maintenance service.",
      es: "Sí. Ofrecemos paquetes de mantenimiento continuo que cubren actualizaciones de seguridad, copias de seguridad de bases de datos, optimización de CDN y adición de características. Esto se detalla en el servicio de Mantenimiento.",
      de: "Ja. Wir bieten fortlaufende Wartungsverträge an, die Sicherheits-Updates für Systempakete, Backups, CDN-Optimierungen und neue Features umfassen. Details finden Sie in unserem Wartungs-Service."
    }
  },
  {
    id: 'f4',
    questions: {
      en: "Can I upgrade my plan or scale features as my business grows?",
      es: "¿Puedo actualizar mi plan o escalar características a medida que mi negocio crezca?",
      de: "Kann ich mein Paket upgraden oder Funktionen erweitern, wenn mein Geschäft wächst?"
    },
    answers: {
      en: "Certainly. Our architectures are engineered modularly. We build systems that make scaling easy—allowing you to start with our Starter package and integrate SaaS portals, databases, or API routes at any time.",
      es: "Sin duda. Nuestras arquitecturas están diseñadas de forma modular. Creamos sistemas que facilitan el escalamiento, permitiéndote empezar con un plan Starter e integrar bases de datos o APIs en el futuro.",
      de: "Selbstverständlich. Unsere Architekturen sind modular aufgebaut. Wir entwickeln Systeme, die mitwachsen – Sie können mit dem Starter-Paket beginnen und später SaaS-Portale oder APIs nachrüsten."
    }
  }
];
