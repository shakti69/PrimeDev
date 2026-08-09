import React, { useState } from 'react';
import { Target, Compass, Award, Shield, Check, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface TimelineEvent {
  year: string;
  title: string;
  titles: { en: string; es: string; de: string };
  desc: string;
  descs: { en: string; es: string; de: string };
}

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeMilestone, setActiveMilestone] = useState(3); // Default to 2026

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2023",
      title: "Foundations in Tech & CS",
      titles: { en: "Foundations in Tech & CS", es: "Bases en Tecnología y Ciencias de la Computación", de: "Grundlagen in Informatik & Tech" },
      desc: "Began deep immersion into computer science fundamentals, data structures, network security, and Linux administration at Dhenkanal Autonomous College.",
      descs: { 
        en: "Began deep immersion into computer science fundamentals, data structures, network security, and Linux administration at Dhenkanal Autonomous College.",
        es: "Inicio de inmersión profunda en fundamentos de ciencias de la computación, estructuras de datos, seguridad de redes y administración de Linux.",
        de: "Vertiefung in Informatik-Grundlagen, Datenstrukturen, Netzwerksicherheit und Linux-Systemadministration am Dhenkanal Autonomous College."
      }
    },
    {
      year: "2024",
      title: "Full-Stack & Hardware Systems",
      titles: { en: "Full-Stack & Hardware Systems", es: "Sistemas Full-Stack y Hardware", de: "Full-Stack- & Hardwaresysteme" },
      desc: "Engineered automated campus systems including the WiFi-based Smart Attendance tracking solution and Python DSP Active Noise Cancellation filters.",
      descs: {
        en: "Engineered automated campus systems including the WiFi-based Smart Attendance tracking solution and Python DSP Active Noise Cancellation filters.",
        es: "Desarrollo de sistemas automatizados que incluyen la solución de asistencia inteligente por WiFi y filtros de cancelación activa de ruido en Python.",
        de: "Entwicklung automatisierter Campussysteme einschließlich des WiFi-Anwesenheitssystems und Python-basierter Rauschunterdrückungsfilter."
      }
    },
    {
      year: "2025",
      title: "Enterprise Web Platforms & Assistive Tech",
      titles: { en: "Enterprise Web Platforms & Assistive Tech", es: "Plataformas Web Empresariales y Tecnología Asistencial", de: "Webplattformen & Assistive Technologien" },
      desc: "Built the comprehensive 4-role Hostel Meal Management platform with automated PDF billing and the Smart Audio Tutor for visually impaired students.",
      descs: {
        en: "Built the comprehensive 4-role Hostel Meal Management platform with automated PDF billing and the Smart Audio Tutor for visually impaired students.",
        es: "Creación de la plataforma de gestión de comidas de residencia con 4 roles y facturación PDF, junto con el tutor de audio inteligente para estudiantes invidentes.",
        de: "Entwicklung des 4-Rollen-Hostel-Meal-Management-Systems mit automatisierter PDF-Rechnungserstellung und des Audio-Tutors für sehbehinderte Lernende."
      }
    },
    {
      year: "2026",
      title: "PrimeDev Agency & Cyber Solutions",
      titles: { en: "PrimeDev Agency & Cyber Solutions", es: "Agencia PrimeDev y Soluciones Cibernéticas", de: "PrimeDev Agentur & Cybersicherheitslösungen" },
      desc: "Consolidated all full-stack engineering, esports tournament infrastructure, cybersecurity audits, and digital solutions under the PrimeDev banner.",
      descs: {
        en: "Consolidated all full-stack engineering, esports tournament infrastructure, cybersecurity audits, and digital solutions under the PrimeDev banner.",
        es: "Consolidación de ingeniería full-stack, infraestructura de torneos de esports, auditorías de ciberseguridad y soluciones digitales en PrimeDev.",
        de: "Bündelung von Full-Stack-Engineering, E-Sports-Turnierinfrastruktur, Cybersicherheits-Audits und digitalen Weblösungen unter der Marke PrimeDev."
      }
    }
  ];

  return (
    <section id="about" className="w-full py-20 bg-slate-50/50 dark:bg-brand-dark/20 border-t border-b border-slate-200/40 dark:border-slate-850/40 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
            {t('about.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('about.title')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="glass-card glass-card-hover p-6 rounded-3xl space-y-3 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-brand-accent-blue/5 rounded-full blur-lg" />
            <div className="w-10 h-10 rounded-2xl bg-brand-accent-blue/10 border border-brand-accent-blue/20 flex items-center justify-center text-brand-accent-blue">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              {t('about.missionTitle')}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              To engineer secure, high-performance, and accessible web solutions that solve real-world operational challenges for institutions, businesses, and communities.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card glass-card-hover p-6 rounded-3xl space-y-3 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-brand-accent-purple/5 rounded-full blur-lg" />
            <div className="w-10 h-10 rounded-2xl bg-brand-accent-purple/10 border border-brand-accent-purple/20 flex items-center justify-center text-brand-accent-purple">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              {t('about.visionTitle')}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              To bridge the intersection of robust cybersecurity, modern full-stack development, and creative digital media into world-class digital experiences.
            </p>
          </div>

          {/* Core Values */}
          <div className="glass-card glass-card-hover p-6 rounded-3xl space-y-3 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-brand-accent-cyan/5 rounded-full blur-lg" />
            <div className="w-10 h-10 rounded-2xl bg-brand-accent-cyan/10 border border-brand-accent-cyan/20 flex items-center justify-center text-brand-accent-cyan">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              {t('about.valuesTitle')}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 font-light">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-accent-cyan" /> Security & Code Hardening
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-accent-cyan" /> Accessibility & Universal Design
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-accent-cyan" /> Performance & Zero Bloat
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-accent-cyan" /> Creative Energy & Impact
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us & Key Features */}
        <div className="glass-card p-8 rounded-3xl border border-white/20 dark:border-slate-800/80 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-black uppercase text-brand-accent-blue tracking-widest block">
                Technical Highlights
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Why Choose PrimeDev?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                We bring a unique fusion of practical full-stack expertise (MERN / Next.js / TypeScript), deep cybersecurity awareness, and creative storytelling through video production and esports broadcasting.
              </p>
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent-blue hover:text-brand-accent-cyan transition-colors"
                >
                  <span>Start A Project With Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                  <Award className="w-4 h-4 text-brand-accent-blue" />
                  <span>Full-Stack Mastery</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  End-to-end architectures utilizing React, Node.js, Express, MongoDB, and Tailwind CSS.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                  <Shield className="w-4 h-4 text-brand-accent-purple" />
                  <span>Security-First Mindset</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  Role-based access control, OTP email verification, and rigorous penetration testing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                  <Compass className="w-4 h-4 text-brand-accent-cyan" />
                  <span>Assistive & Accessible UI</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  Proven experience with Speech synthesis, voice command recognition, and WCAG standards.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                  <Calendar className="w-4 h-4 text-brand-accent-emerald" />
                  <span>Real Deployed Systems</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  Practical software deployed for campus meal management, smart attendance, and esports.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Growth Timeline Component */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {t('about.timelineTitle')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
              Explore key milestones and our continuous evolution in web technologies
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {timelineEvents.map((event, idx) => (
              <button
                key={event.year}
                onClick={() => setActiveMilestone(idx)}
                className={`py-3 px-4 rounded-2xl text-xs font-bold transition-all duration-300 flex flex-col items-center gap-1 border ${
                  activeMilestone === idx
                    ? 'bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple text-white shadow-lg border-transparent scale-105'
                    : 'bg-white/30 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 border-slate-200/40 dark:border-slate-800/40 hover:bg-white/50'
                }`}
              >
                <span className="text-xs uppercase tracking-wider">{event.year}</span>
                <span className="text-[10px] opacity-80 truncate max-w-full">
                  {event.titles[language as 'en' | 'es' | 'de'] || event.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto border border-white/20 dark:border-slate-800/80 shadow-md animate-fade-in relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20">
                {timelineEvents[activeMilestone].year}
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                {timelineEvents[activeMilestone].titles[language as 'en' | 'es' | 'de'] || timelineEvents[activeMilestone].title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {timelineEvents[activeMilestone].descs[language as 'en' | 'es' | 'de'] || timelineEvents[activeMilestone].desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
export default About;
