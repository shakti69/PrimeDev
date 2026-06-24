import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { faqData } from '../../data/faq';

export const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first FAQ

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="w-full py-20 bg-slate-50/50 dark:bg-brand-dark/20 border-t border-b border-slate-200/40 dark:border-slate-850/40 font-sans">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
            {t('nav.faq')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('faq.title')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 pt-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id}
                className="glass-card rounded-2xl border border-slate-200/40 dark:border-slate-850/50 shadow-sm overflow-hidden"
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 dark:text-white"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-accent-blue shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold leading-relaxed">{faq.questions[language]}</span>
                  </div>
                  
                  {/* Chevron rotation indicator */}
                  <ChevronDown className={`w-4.5 h-4.5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-brand-accent-blue' : 'rotate-0'
                  }`} />
                </button>

                {/* Body Content with Framer Motion height slide */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pl-13 border-t border-slate-100/50 dark:border-slate-850/50 pt-3">
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                          {faq.answers[language]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default FAQ;
