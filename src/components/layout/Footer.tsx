import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import db from '../../utils/db';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
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
    { id: 'team', label: t('nav.team') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'blog', label: t('nav.blog') },
    { id: 'careers', label: t('nav.careers') }
  ];

  const services = [
    "Full-Stack Web Development",
    "Hostel & Campus Management Systems",
    "Smart IoT & WiFi Attendance",
    "Accessible & Assistive Web Tools",
    "Cybersecurity & Code Audits"
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
              src="/favicon.svg" 
              alt="PrimeDev Logo" 
              className="w-8 h-8 rounded-lg shadow-md" 
            />
            <span className="text-lg font-bold tracking-tight text-white">
              Prime<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-blue to-brand-accent-cyan">Dev</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed">
            Engineering robust full-stack web applications, campus automation systems, accessible software, and cybersecurity solutions. Founded by Shakti Prasad Hota.
          </p>
          {/* Official Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://github.com/shakti69" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-xl bg-slate-800 hover:bg-brand-accent-blue hover:text-white transition-all duration-300" 
              title="GitHub - shakti69"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com/@shakti_bajarangi?si=8yWsdrIuK3BTiRo_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-xl bg-slate-800 hover:bg-red-600 hover:text-white transition-all duration-300" 
              title="YouTube - @shakti_bajarangi"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/shakti_gamer69?igsh=MW9mbmNoeGFiNmNnaA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-xl bg-slate-800 hover:bg-pink-600 hover:text-white transition-all duration-300" 
              title="Instagram - @shakti_gamer69"
            >
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

        {/* Column 4: Newsletter & Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-brand-accent-cyan pl-2.5">
            {t('footer.newsletter')}
          </h4>
          <p className="text-xs leading-relaxed">
            Subscribe for occasional updates on web architectures, project releases, and cybersecurity notes.
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

          {/* Contact Details */}
          <div className="pt-2 space-y-2 text-[10px] border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-accent-blue shrink-0" />
              <span>Dhenkanal, Odisha, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand-accent-cyan shrink-0" />
              <a href="mailto:shaktiprasadhota07@gmail.com" className="hover:text-white">
                shaktiprasadhota07@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800/80 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-medium">
        <span>© {new Date().getFullYear()} PrimeDev — Shakti Prasad Hota. All rights reserved.</span>
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
