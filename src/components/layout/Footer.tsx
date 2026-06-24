import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import db from '../../utils/db';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      const added = db.addSubscriber(email);
      setIsSubmitting(false);
      
      if (added) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError('This email is already subscribed!');
      }
    }, 1000);
  };

  const quickLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'blog', label: t('nav.blog') },
    { id: 'careers', label: t('nav.careers') }
  ];

  const services = [
    "Website Development",
    "E-Commerce Development",
    "Web Application Development",
    "UI/UX Product Design",
    "Cloud Solutions"
  ];

  const handleNavClick = (id: string) => {
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
    <footer className="w-full relative bg-slate-900 text-slate-400 border-t border-slate-800/80 pt-16 pb-8 overflow-hidden font-sans">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Column 1: Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.jpg" 
              alt="PrimeDev Logo" 
              className="w-8 h-8 object-cover object-top rounded-lg shadow-md border border-slate-800" 
            />
            <span className="text-lg font-bold tracking-tight text-white">
              Prime<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-blue to-brand-accent-cyan">Dev</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed">
            {t('footer.desc')}
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a href="https://github.com/primedev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-800 hover:bg-brand-accent-blue hover:text-white transition-all duration-300" title="GitHub">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/company/primedev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-800 hover:bg-brand-accent-blue hover:text-white transition-all duration-300" title="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/primedev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-800 hover:bg-brand-accent-blue hover:text-white transition-all duration-300" title="Twitter/X">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/primedev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-800 hover:bg-brand-accent-blue hover:text-white transition-all duration-300" title="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-accent-blue pl-2.5">
            {t('footer.links')}
          </h4>
          <ul className="space-y-2.5 text-xs">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="hover:text-brand-accent-blue hover:translate-x-1 transition-all duration-300 text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-accent-purple pl-2.5">
            {t('footer.services')}
          </h4>
          <ul className="space-y-2.5 text-xs">
            {services.map((serv, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-brand-accent-purple hover:translate-x-1 transition-all duration-300 text-left"
                >
                  {serv}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-brand-accent-cyan pl-2.5">
            {t('footer.newsletter')}
          </h4>
          <p className="text-xs leading-relaxed">
            {t('footer.newsletterDesc')}
          </p>

          {isSubscribed ? (
            <div className="p-3 bg-emerald-950/40 border border-emerald-900 rounded-xl text-xs text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
              <span>{t('footer.success')}</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder={t('footer.placeholder')}
                  className="bg-slate-800 border border-slate-700/80 rounded-xl py-2 px-3 text-xs text-white outline-none focus:ring-1 focus:ring-brand-accent-blue flex-1 min-w-0"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="p-2 rounded-xl bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple text-white shadow-md hover:opacity-95 transition-opacity shrink-0 flex items-center justify-center min-w-10"
                >
                  {isSubmitting ? (
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              {error && <p className="text-[10px] text-red-500">{error}</p>}
            </form>
          )}

          {/* Contact Details Small */}
          <div className="pt-2 space-y-2 text-[10px] border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-accent-blue shrink-0" />
              <span>100 Innovation Way, Silicon Valley, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-brand-accent-purple shrink-0" />
              <span>+1 (555) 0199</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand-accent-cyan shrink-0" />
              <span>hello@primedev.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800/80 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-medium">
        <span>© {new Date().getFullYear()} PrimeDev Inc. {t('footer.copyright')}</span>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-slate-400">Terms of Service</a>
          <a href="#cookies" className="hover:text-slate-400">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
