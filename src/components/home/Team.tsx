import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { teamData } from '../../data/team';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

export const Team: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="team" className="w-full py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-emerald/10 text-brand-accent-emerald border border-brand-accent-emerald/20 uppercase tracking-widest">
            {t('nav.team')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('careers.badge')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-emerald to-brand-accent-blue mx-auto rounded-full mt-2" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
          {teamData.map((member) => (
            <div 
              key={member.id}
              className="glass-card overflow-hidden rounded-3xl border border-slate-200/40 dark:border-slate-800/60 shadow-lg relative aspect-[3/4] group cursor-pointer transition-all duration-300"
            >
              {/* Profile Photo */}
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Default Footer Name/Position (always visible at bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent text-white z-10 transition-opacity duration-300 group-hover:opacity-0">
                <h4 className="font-extrabold text-sm tracking-tight">{member.name}</h4>
                <p className="text-[10px] text-slate-300 font-medium mt-0.5">{member.positions[language]}</p>
              </div>

              {/* Hover Overlay: Bio, Skills & Socials (slides up on hover) */}
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md p-5 flex flex-col justify-between text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                
                {/* Header */}
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-wider text-brand-accent-emerald flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {member.positions[language]}
                  </span>
                  <h4 className="text-sm font-extrabold">{member.name}</h4>
                  <p className="text-[10px] text-slate-400 font-light leading-relaxed pt-1.5 border-t border-slate-800/80">
                    {member.bios[language]}
                  </p>
                </div>

                {/* Skills Progress bars */}
                <div className="space-y-2 py-3 border-t border-b border-slate-800/80">
                  {member.skills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-[9px] font-bold text-slate-300">
                        <span>{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                        {/* Slide width on hover */}
                        <div 
                          className="bg-brand-accent-emerald h-full transition-all duration-500 delay-100 origin-left"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Socials Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-widest text-slate-500 font-extrabold">Connect</span>
                  <div className="flex items-center gap-2">
                    <a 
                      href={member.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-brand-accent-emerald hover:text-white transition-all text-slate-400"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    {member.socials.github && (
                      <a 
                        href={member.socials.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-brand-accent-emerald hover:text-white transition-all text-slate-400"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a 
                        href={member.socials.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-brand-accent-emerald hover:text-white transition-all text-slate-400"
                      >
                        <TwitterIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Team;
