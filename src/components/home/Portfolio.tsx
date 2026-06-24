import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolio';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

type PortfolioFilter = 'all' | 'saas' | 'ecommerce' | 'web-apps' | 'custom';

export const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('all');

  // Hardcode translated labels for simplicity and aesthetics
  const getFilterLabel = (id: PortfolioFilter) => {
    switch (id) {
      case 'all': return t('portfolio.all');
      case 'saas': return 'SaaS Platforms';
      case 'ecommerce': return 'E-Commerce';
      case 'web-apps': return 'Web Apps';
      case 'custom': return 'Custom Solutions';
    }
  };

  const filteredProjects = portfolioData.filter(proj => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  const handleDemoClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    if (url === '#portal') {
      // Dispatch custom event to trigger portal open in header
      const event = new CustomEvent('open-portal');
      window.dispatchEvent(event);
    } else {
      // Scroll to contact form
      const element = document.getElementById(url.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="portfolio" className="w-full py-20 bg-slate-50/50 dark:bg-brand-dark/20 border-t border-b border-slate-200/40 dark:border-slate-850/40 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
            {t('portfolio.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('portfolio.title')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-2xl mx-auto">
          {(['all', 'saas', 'ecommerce', 'web-apps', 'custom'] as PortfolioFilter[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple border-brand-accent-blue text-white shadow-md'
                  : 'bg-white/30 dark:bg-slate-900/20 border-slate-200/40 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-350 hover:bg-white/50'
              }`}
            >
              {getFilterLabel(filter)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="glass-card overflow-hidden rounded-3xl border border-slate-200/40 dark:border-slate-800/60 shadow-lg hover:shadow-xl dark:hover:shadow-brand-accent-blue/5 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image & Overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0">
                <img 
                  src={proj.image} 
                  alt={proj.titles[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 dark:opacity-80" />
                {/* Accent Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider border border-white/10">
                  <Sparkles className="w-3 h-3 text-brand-accent-cyan" />
                  {proj.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {proj.titles[language]}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {proj.descriptions[language]}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2.5 py-1 text-[9px] font-bold rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={(e) => handleDemoClick(e, proj.liveUrl)}
                    className="flex-1 btn-primary py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('portfolio.liveDemo')}
                  </button>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <GithubIcon className="w-4 h-4" />
                    {t('portfolio.viewCode')}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Portfolio;
