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
      name: "Liam Neeson",
      company: "Founder, Veloce Retail",
      rating: 5,
      feedbacks: {
        en: "PrimeDev completely re-engineered our headless e-commerce storefront. Page load budgets dropped from 4s to 450ms, and checkout conversions went up by 32%! Incredible architecture.",
        es: "PrimeDev rediseñó por completo nuestra tienda de comercio electrónico headless. Los tiempos de carga bajaron de 4s a 450ms y las ventas subieron un 32%. Arquitectura increíble.",
        de: "PrimeDev hat unseren Headless-Shop komplett neu entwickelt. Die Ladezeit sank von 4 Sek. auf 450 ms und die Conversion Rate stieg um 32%! Unglaubliche Architektur."
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 't2',
      name: "Aria Thorne",
      company: "Product VP, Novus AI",
      rating: 5,
      feedbacks: {
        en: "The team at PrimeDev is top-tier. Their Lead UI/UX Designer Suki transformed our complex copywriting dashboard wireframes into a seamless, modern, glassmorphic masterpiece.",
        es: "El equipo de PrimeDev es de primer nivel. Su diseñadora UI/UX, Suki, transformó nuestros complejos wireframes de redacción en una obra maestra moderna y fluida.",
        de: "Das Team von PrimeDev ist erstklassig. Die Lead-Designerin Suki verwandelte unsere komplexen Dashboard-Wireframes in ein nahtloses, modernes Meisterwerk."
      },
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 't3',
      name: "Sophia Martinez",
      company: "COO, Apex Coaching",
      rating: 5,
      feedbacks: {
        en: "We hired PrimeDev for custom microservice and database API integrations. Their agile framework kept us in loop weekly. Complete code ownership handovers went smoothly.",
        es: "Contratamos a PrimeDev para integraciones de microservicios y bases de datos. Su marco ágil nos mantuvo informados semanalmente. La entrega del código fue perfecta.",
        de: "Wir haben PrimeDev für maßgeschneiderte Microservice- und Datenbank-API-Integrationen beauftragt. Ihre agilen Prozesse boten volle wöchentliche Transparenz."
      },
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
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
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Testimonials
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* Carousel Slider */}
        <div className="relative glass-card border border-white/20 p-8 sm:p-12 rounded-3xl shadow-xl overflow-hidden min-h-[250px] flex flex-col justify-center animate-fade-in">
          {/* Quote mark accents */}
          <Quote className="absolute top-6 left-6 w-12 h-12 text-brand-accent-blue/10 pointer-events-none" />
          
          <div className="space-y-6 text-center">
            {/* Rating Stars */}
            <div className="flex justify-center items-center gap-1">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400 text-glow-purple" />
              ))}
            </div>

            {/* Review feedback text */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 italic leading-relaxed font-light max-w-2xl mx-auto">
              "{testimonials[activeIndex].feedbacks[language]}"
            </p>

            {/* User details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-800"
              />
              <div className="text-center sm:text-left">
                <span className="font-extrabold text-slate-900 dark:text-white text-xs block">
                  {testimonials[activeIndex].name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  {testimonials[activeIndex].company}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Controllers */}
        <div className="flex justify-center items-center gap-4 pt-2">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 shadow-sm transition-all active:scale-95"
            title="Previous Review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {/* Slide Indicators dot lists */}
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-brand-accent-blue w-6' : 'bg-slate-300 dark:bg-slate-800'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-3 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 shadow-sm transition-all active:scale-95"
            title="Next Review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
export default Testimonials;
