import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Custom Count Up Hook for statistics animation
const useCountUp = (target: number, duration: number = 2000, trigger: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
};

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Monitor mouse movements for shifting gradient background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Monitor intersection to trigger stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const countProjects = useCountUp(280, 2000, isIntersecting);
  const countClients = useCountUp(150, 2000, isIntersecting);
  const countYears = useCountUp(8, 2000, isIntersecting);
  const countTeam = useCountUp(12, 2000, isIntersecting);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden radial-bg"
      style={{
        // Set CSS variables for index.css radial-bg selector
        ['--mouse-x' as any]: `${mousePos.x}%`,
        ['--mouse-y' as any]: `${mousePos.y}%`
      } as React.CSSProperties}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-20 dark:opacity-15 transition-opacity duration-1000"
      >
        <source src="/bg-hero.mp4" type="video/mp4" />
      </video>

      {/* Abstract geometric mesh overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-80" />
      
      {/* Glow elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-accent-blue/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-accent-purple/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10 flex-1 flex flex-col justify-center items-center">
        {/* Futuristic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md shadow-md animate-float">
          <Sparkles className="w-4 h-4 text-brand-accent-cyan text-glow-cyan animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
            {t('hero.badge')}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-sans text-slate-900 dark:text-white max-w-4xl">
          {t('hero.title').split(' ').map((word: string, idx: number) => {
            const isGradient = idx >= 3 && idx <= 5; // Highlight "Future of the Web"
            return (
              <span key={idx}>
                {isGradient ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-blue via-brand-accent-cyan to-brand-accent-purple">
                    {word}{' '}
                  </span>
                ) : (
                  <span>{word} </span>
                )}
              </span>
            );
          })}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto font-sans font-light">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary flex items-center gap-2 group font-bold"
          >
            {t('hero.ctaPrimary')}
            <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="btn-secondary font-bold text-slate-800 dark:text-slate-200"
          >
            {t('hero.ctaSecondary')}
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-secondary font-bold text-slate-800 dark:text-slate-200 border-brand-accent-blue/30 hover:border-brand-accent-blue/60"
          >
            {t('hero.ctaTertiary')}
          </button>
        </div>
      </div>

      {/* Statistics Counter */}
      <div className="w-full max-w-5xl mx-auto px-6 pt-16 shrink-0 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/30 dark:bg-slate-900/20 border border-slate-200/40 dark:border-slate-850/40 backdrop-blur-md shadow-lg">
          {/* Projects Completed */}
          <div className="text-center space-y-1">
            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-blue to-brand-accent-cyan block">
              {countProjects}+
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t('hero.stats.projects')}
            </span>
          </div>

          {/* Happy Clients */}
          <div className="text-center space-y-1 border-l border-slate-200/50 dark:border-slate-800/50">
            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-cyan to-brand-accent-emerald block">
              {countClients}+
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t('hero.stats.clients')}
            </span>
          </div>

          {/* Years of Experience */}
          <div className="text-center space-y-1 border-l border-slate-200/50 dark:border-slate-800/50">
            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-emerald to-brand-accent-purple block">
              {countYears}+
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t('hero.stats.experience')}
            </span>
          </div>

          {/* Team Members */}
          <div className="text-center space-y-1 border-l border-slate-200/50 dark:border-slate-800/50">
            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-purple to-brand-accent-blue block">
              {countTeam}+
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t('hero.stats.team')}
            </span>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-4 flex items-center justify-center p-2 rounded-full bg-white/20 dark:bg-slate-900/20 border border-slate-200/20 dark:border-slate-800/20 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors animate-bounce"
        title="Scroll Down"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  );
};
export default Hero;
