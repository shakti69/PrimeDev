import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { servicesData, getIconComponent } from '../../data/services';

type CategoryFilter = 'all' | 'development' | 'design' | 'optimization' | 'cloud';

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filterTags: { id: CategoryFilter; labelKey: string }[] = [
    { id: 'all', labelKey: 'services.all' },
    { id: 'development', labelKey: 'services.categories.development' },
    { id: 'design', labelKey: 'services.categories.design' },
    { id: 'optimization', labelKey: 'services.categories.optimization' },
    { id: 'cloud', labelKey: 'services.categories.cloud' }
  ];

  const filteredServices = servicesData.filter(serv => {
    if (activeFilter === 'all') return true;
    return serv.category === activeFilter;
  });

  const handleServiceSelect = (serviceName: string) => {
    // Custom event to auto-select this service inside the contact form dropdown
    const event = new CustomEvent('select-service', { detail: serviceName });
    window.dispatchEvent(event);

    // Scroll to contact form
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="w-full py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-purple/10 text-brand-accent-purple border border-brand-accent-purple/20 uppercase tracking-widest">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('services.title')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-purple to-brand-accent-cyan mx-auto rounded-full mt-2" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-2xl mx-auto">
          {filterTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setActiveFilter(tag.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
                activeFilter === tag.id
                  ? 'bg-gradient-to-r from-brand-accent-purple to-brand-accent-blue border-brand-accent-blue text-white shadow-md'
                  : 'bg-white/30 dark:bg-slate-900/20 border-slate-200/40 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-350 hover:bg-white/50'
              }`}
            >
              {t(tag.labelKey)}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredServices.map((serv) => {
            const Icon = getIconComponent(serv.iconName);
            return (
              <div 
                key={serv.id}
                className="glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 min-h-[220px]"
              >
                {/* Visual accent background glow */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-accent-purple/5 rounded-full blur-xl transition-all group-hover:scale-125" />
                
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-brand-accent-purple/10 to-brand-accent-blue/10 border border-brand-accent-blue/10 dark:border-slate-800/50 flex items-center justify-center text-brand-accent-purple group-hover:text-brand-accent-blue transition-colors">
                    <Icon className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {serv.titles[language]}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      {serv.descriptions[language]}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 flex justify-end">
                  <button 
                    onClick={() => handleServiceSelect(serv.titles.en)}
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-brand-accent-purple group-hover:translate-x-0.5 transition-all"
                  >
                    Select Service
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-accent-purple" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Services;
