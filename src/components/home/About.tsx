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
      year: "2020",
      title: "The Genesis",
      titles: { en: "The Genesis", es: "La Génesis", de: "Die Gründung" },
      desc: "PrimeDev was founded in Silicon Valley by Elena Rostova and Marcus Vance with a core team of 3 developers, focused on fast local SME website builders.",
      descs: { 
        en: "PrimeDev was founded in Silicon Valley by Elena Rostova and Marcus Vance with a core team of 3 developers, focused on fast local SME website builders.",
        es: "PrimeDev fue fundada en Silicon Valley por Elena Rostova y Marcus Vance con un equipo de 3 desarrolladores, enfocados en constructores web locales rápidos.",
        de: "PrimeDev wurde im Silicon Valley von Elena Rostova und Marcus Vance mit einem Kernteam von 3 Entwicklern gegründet, fokussiert auf schnelle lokale Webportale."
      }
    },
    {
      year: "2022",
      title: "Going Global",
      titles: { en: "Going Global", es: "Expansión Global", de: "Globale Expansion" },
      desc: "Scaled to 8 core specialists. Completed 80+ web projects, integrated custom backend APIs, and established remote engineering partnerships in Europe.",
      descs: {
        en: "Scaled to 8 core specialists. Completed 80+ web projects, integrated custom backend APIs, and established remote engineering partnerships in Europe.",
        es: "Crecimos a 8 especialistas centrales. Completamos más de 80 proyectos web, integramos APIs a medida y establecimos alianzas remotas en Europa.",
        de: "Ausbau auf 8 Kernspezialisten. Über 80 Webprojekte abgeschlossen, Integration maßgeschneiderter Backend-APIs und Remote-Partnerschaften in Europa."
      }
    },
    {
      year: "2024",
      title: "SaaS & AI Integration",
      titles: { en: "SaaS & AI Integration", es: "Integración SaaS e IA", de: "SaaS- & KI-Integration" },
      desc: "Pioneered custom SaaS dash templates and introduced LLM integrations. Reached 150+ happy clients. Added dedicated UI/UX designers and cloud engineers.",
      descs: {
        en: "Pioneered custom SaaS dash templates and introduced LLM integrations. Reached 150+ happy clients. Added dedicated UI/UX designers and cloud engineers.",
        es: "Pioneros en plantillas de paneles SaaS e integraciones de modelos LLM. Alcanzamos más de 150 clientes felices. Añadimos diseñadores dedicados.",
        de: "Einführung maßgeschneiderter SaaS-Dashboard-Templates und LLM-Integrationen. Über 150 zufriedene Kunden. Ausbau um UI/UX-Designer und Cloud-Engineers."
      }
    },
    {
      year: "2026",
      title: "Enterprise Solutions",
      titles: { en: "Enterprise Solutions", es: "Soluciones Corporativas", de: "Enterprise-Systeme" },
      desc: "Delivering multi-tenant frameworks, headless Shopify channels, and highly accessible interfaces for multi-national brands. Top rated web agency.",
      descs: {
        en: "Delivering multi-tenant frameworks, headless Shopify channels, and highly accessible interfaces for multi-national brands. Top rated web agency.",
        es: "Entregando frameworks multi-inquilino, canales Shopify headless e interfaces accesibles para marcas globales. Calificados como agencia top.",
        de: "Entwicklung von Multi-Tenant-Frameworks, Headless-Shopify-Systemen und barrierefreien Interfaces für globale Marken. Top-bewertete Agentur."
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
              {t('about.missionText')}
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
              {t('about.visionText')}
            </p>
          </div>

          {/* Core Values */}
          <div className="glass-card glass-card-hover p-6 rounded-3xl space-y-3 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-brand-accent-cyan/5 rounded-full blur-lg" />
            <div className="w-10 h-10 rounded-2xl bg-brand-accent-cyan/10 border border-brand-accent-cyan/20 flex items-center justify-center text-brand-accent-cyan">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              {t('about.valuesTitle')}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-accent-cyan" />
                <span>{t('about.values.innovation')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-accent-cyan" />
                <span>{t('about.values.excellence')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-accent-cyan" />
                <span>{t('about.values.integrity')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-accent-cyan" />
                <span>{t('about.values.accessibility')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Clients Choose Us Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center pt-6">
          {/* Visual card */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-accent-blue/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-accent-purple/10 rounded-full blur-3xl" />
            
            <div className="glass-card border border-white/20 p-8 rounded-3xl relative z-10 space-y-6">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t('about.whyChooseUs')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                We believe that modern code isn't just about syntax; it is about architecture. PrimeDev bridges modern aesthetics with robust enterprise microservices, delivering optimized digital tools for fast-scaling startups and corporations alike.
              </p>
            </div>
          </div>

          {/* Reasons List */}
          <div className="w-full lg:w-1/2 space-y-6">
            {(t('about.reasons') as { title: string; desc: string }[]).map((reason, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                    {reason.title}
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-light">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth timeline */}
        <div className="pt-8">
          <div className="text-center mb-10">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t('about.timelineTitle')}
            </h4>
          </div>

          <div className="space-y-6">
            {/* Year Selector buttons */}
            <div className="flex justify-center items-center gap-1 sm:gap-3 border-b border-slate-200 dark:border-slate-800 pb-2 max-w-lg mx-auto">
              {timelineEvents.map((evt, idx) => (
                <button
                  key={evt.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={`py-2.5 px-4 font-bold text-sm sm:text-base border-b-2 transition-all duration-300 -mb-2.5 flex items-center gap-1 ${
                    activeMilestone === idx
                      ? 'border-brand-accent-blue text-brand-accent-blue dark:text-white'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  {evt.year}
                </button>
              ))}
            </div>

            {/* Selected Milestone content box */}
            <div className="max-w-2xl mx-auto p-6 rounded-3xl glass-card border border-white/20 shadow-xl relative overflow-hidden transition-all duration-500 animate-fade-in">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-gradient-to-br from-brand-accent-blue/10 to-brand-accent-purple/10 rounded-full blur-xl" />
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="space-y-2">
                  <span className="px-2.5 py-0.5 text-[9px] font-black uppercase rounded-full bg-brand-accent-purple/10 text-brand-accent-purple border border-brand-accent-purple/20">
                    Milestone Year: {timelineEvents[activeMilestone].year}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {timelineEvents[activeMilestone].titles[language]}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {timelineEvents[activeMilestone].descs[language]}
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-brand-accent-blue shrink-0 hidden sm:block self-center" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default About;
