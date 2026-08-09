import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface TestimonialItem {
  id: string;
  name: string;
  company: string;
  rating: number;
  feedbacks: {
    en: string;
    es: string;
    de: string;
  };
  image: string;
}

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 't1',
      name: "Campus Hostel Administration",
      company: "Hostel Meal Operations Team",
      rating: 5,
      feedbacks: {
        en: "The automated Hostel Meal Management System built by Shakti streamlined our daily meal counts and eliminated paper records completely. The automated cutoff logic and instant PDF monthly billing reports saved us countless administrative hours.",
        es: "El Sistema de Gestión de Comidas para Residencias desarrollado por Shakti optimizó los recuentos diarios y eliminó el uso de papel. La lógica de corte automático y los informes de facturación en PDF nos ahorraron cientos de horas.",
        de: "Das von Shakti entwickelte Hostel-Meal-Management-System hat unsere tägliche Essensverwaltung optimiert und Papierlisten überflüssig gemacht. Die automatische Schaltlogik und die monatlichen PDF-Berichte sparen enorm viel Zeit."
      },
      image: "/favicon.svg"
    },
    {
      id: 't2',
      name: "Accessibility & Assistive Learning Review",
      company: "Educational Tech Evaluation",
      rating: 5,
      feedbacks: {
        en: "The Smart Audio Tutor for blind students is an extraordinary assistive innovation. Combining PDF document parsing with speech synthesis and voice-commanded quizzes makes education accessible without friction.",
        es: "El Tutor de Audio Inteligente para estudiantes invidentes es una innovación asistencial extraordinaria. La combinación de extracción de texto de PDFs con síntesis de voz y cuestionarios por comandos facilita el aprendizaje accesible.",
        de: "Der smarte Audio-Tutor für sehbehinderte Lernende ist eine bemerkenswerte Innovation. Die Kombination aus PDF-Verarbeitung, Sprachausgabe und Sprachsteuerung macht Bildung barrierefrei zugänglich."
      },
      image: "/favicon.svg"
    },
    {
      id: 't3',
      name: "Competitive Esports Community",
      company: "Tournament & Gaming Arena Organizers",
      rating: 5,
      feedbacks: {
        en: "Shakti brings phenomenal energy both on the microphone as an esports caster and as a developer building custom bracket systems. High responsiveness, zero lag, and striking visual themes.",
        es: "Shakti aporta una energía fenomenal tanto como comentarista de esports como desarrollador construyendo sistemas de torneos. Gran capacidad de respuesta, cero lag y temas visuales impresionantes.",
        de: "Shakti bringt enorme Begeisterung sowohl als E-Sports-Caster als auch als Entwickler von Turnierplattformen mit. Hohe Zuverlässigkeit, blitzschnelle Ladezeiten und starke Visuals."
      },
      image: "/favicon.svg"
    }
  ];

  // Autoplay timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="w-full py-20 bg-slate-50/50 dark:bg-brand-dark/20 border-t border-b border-slate-200/40 dark:border-slate-850/40 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-12 relative">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
            Impact & Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client & Deployment Reviews
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/25 dark:border-slate-800/80 shadow-xl relative overflow-hidden min-h-[300px] flex flex-col justify-between">
            {/* Top quote icon */}
            <div className="absolute top-6 right-6 text-brand-accent-blue/10 dark:text-brand-accent-blue/5 pointer-events-none">
              <Quote className="w-24 h-24 rotate-180" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Feedback text */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-light leading-relaxed mb-8 relative z-10 italic">
              "{testimonials[activeIndex].feedbacks[language as 'en' | 'es' | 'de'] || testimonials[activeIndex].feedbacks.en}"
            </p>

            {/* Author details */}
            <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-slate-200/40 dark:border-slate-800/40">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-12 h-12 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
              />
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                  {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx 
                      ? 'w-8 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple' 
                      : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                className="p-2.5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-200 hover:bg-white/80 dark:hover:bg-slate-800 transition-all shadow-sm"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2.5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-200 hover:bg-white/80 dark:hover:bg-slate-800 transition-all shadow-sm"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Testimonials;
