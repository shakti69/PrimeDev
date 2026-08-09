import React, { useState } from 'react';
import { Icons, BrandLogo } from '../ui/Icons';
import { Badge } from '../ui/Badge';
import { useRouter, type PageId } from '../../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 600);
  };

  const navLinks: { label: string; page: PageId; param?: string }[] = [
    { label: 'Home Overview', page: 'home' },
    { label: 'About & Ethos', page: 'about' },
    { label: 'Engineering Services', page: 'services' },
    { label: 'Selected Work / Case Studies', page: 'work' },
    { label: 'Discovery & Inquiries', page: 'contact' },
  ];

  const serviceLinks: { label: string; param: string }[] = [
    { label: 'Full-Stack Web Engineering', param: 'web-engineering' },
    { label: 'SaaS Platform Architecture', param: 'saas-architecture' },
    { label: 'Cloud Systems & REST APIs', param: 'cloud-systems' },
    { label: 'Accessible Tech & IoT', param: 'accessible-iot' },
  ];

  return (
    <footer className="w-full relative bg-obsidian-950 border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-obsidian-400 font-sans">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-0 right-1/4 w-96 h-96 bg-brand-600/10" />
      <div className="ambient-glow bottom-0 left-1/4 w-96 h-96 bg-brand-800/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none"
            >
              <BrandLogo size={32} />
              <span className="font-bold text-lg text-obsidian-100 tracking-tight">
                Prime<span className="text-brand-400">Dev</span>
              </span>
            </button>
            <p className="text-sm text-obsidian-400 max-w-sm leading-relaxed">
              Modern digital engineering foundation built with precision design tokens, responsive architecture, and refined 2026 aesthetics.
            </p>

            {/* System Status Indicator */}
            <div className="pt-2">
              <Badge variant="success" size="md" dot pulse>
                All Systems Operational
              </Badge>
            </div>

            {/* Social link pills */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/shakti69"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-obsidian-900 border border-white/[0.08] hover:border-brand-500/40 hover:text-white transition-colors"
                aria-label="GitHub repository"
              >
                <Icons.Github className="w-4 h-4" />
              </a>
              <button
                onClick={() => navigate('contact')}
                className="p-2 rounded-xl bg-obsidian-900 border border-white/[0.08] hover:border-brand-500/40 hover:text-white transition-colors"
                aria-label="Contact engineering"
              >
                <Icons.Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Nav Column 1: Core Navigation */}
          <div>
            <h4 className="text-xs font-bold text-obsidian-200 uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.page, link.param)}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-all text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Column 2: Engineering Specs */}
          <div>
            <h4 className="text-xs font-bold text-obsidian-200 uppercase tracking-wider mb-4 font-mono">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs">
              {serviceLinks.map((serv) => (
                <li key={serv.label}>
                  <button
                    onClick={() => navigate('service-detail', serv.param)}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-all text-left"
                  >
                    {serv.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-obsidian-200 uppercase tracking-wider mb-4 font-mono">
              Updates
            </h4>
            <p className="text-xs text-obsidian-400">
              Receive notifications for architectural releases and component updates.
            </p>

            {isSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
                <Icons.Check className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Subscription confirmed</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineer@company.com"
                    required
                    className="w-full px-3.5 py-2 rounded-xl bg-obsidian-900 border border-white/[0.08] text-xs text-white placeholder-obsidian-500 focus:outline-none focus:border-brand-500/50 pr-10"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    aria-label="Subscribe"
                    className="absolute right-1 p-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition-colors disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin block" />
                    ) : (
                      <Icons.Send className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & legal bar */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-obsidian-500">
          <div>
            © {new Date().getFullYear()} PrimeDev — Founded by Shakti Prasad Hota. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-obsidian-400">Dhenkanal, Odisha, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
