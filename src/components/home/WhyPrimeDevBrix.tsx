import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhyPrimeDevBrix: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open 01 matching screenshot

  const principles = [
    {
      num: '01',
      title: 'Built Like Bricks',
      desc: 'Solid, reliable, and scalable — our designs are made to grow with your brand, not just today but for years to come.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5819]">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Strategic & Creative',
      desc: 'We blend design thinking with business goals so every pixel has a purpose. Looks great, works even better.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5819]">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="3"/>
          <line x1="12" y1="2" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="22"/>
          <line x1="2" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="22" y2="12"/>
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Collaborative Approach',
      desc: 'Your vision matters. We involve you at every stage so the final outcome feels like your brand, elevated.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5819]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Quick Turnarounds',
      desc: 'We respect your time. Expect smart timelines and quality work without endless delays.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5819]">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Container Box (1:1 with Screenshot 4) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#1E1D1D] rounded-[28px] sm:rounded-[40px] p-6 sm:p-14 lg:p-18 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#FF5819]/10 blur-[120px] rounded-full pointer-events-none" />
          
          {/* Eyebrow & Title */}
          <div className="space-y-3 sm:space-y-4 max-w-3xl mb-10 sm:mb-16 relative z-10">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#FF5819] uppercase font-mono">
              WHY PRIMEDEV?
            </span>
            <h2
              style={{
                fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
                letterSpacing: '-0.025em',
              }}
              className="text-2xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.25] text-white"
            >
              We believe great design isn&apos;t just about looking good &mdash; it&apos;s about creating work that delivers real results.
            </h2>
          </div>

          {/* 4 Principle Interactive Accordion Rows (1:1 with Screenshot 4) */}
          <div className="space-y-0 divide-y divide-white/10 border-t border-b border-white/10 relative z-10">
            {principles.map((p, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={p.num} className="transition-colors">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-5 sm:py-7 flex items-center justify-between text-left gap-4 hover:text-[#FF5819] transition-colors cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-6">
                      <span className="text-xs sm:text-sm font-mono text-white/40 group-hover:text-[#FF5819] transition-colors">
                        {p.num}
                      </span>
                      
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF5819]/20 group-hover:border-[#FF5819]/40 transition-colors">
                        {p.icon}
                      </div>

                      <h3 className="text-base sm:text-xl font-bold tracking-tight text-white group-hover:text-[#FF5819] transition-colors duration-200">
                        {p.title}
                      </h3>
                    </div>

                    {/* Right Toggle Icon + / x */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 group-hover:text-white shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#FF5819]' : 'rotate-0'}`}
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable Description Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pt-1 text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed pl-12 sm:pl-16 max-w-3xl">
                          {p.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
