import React, { useEffect, useState } from 'react';
import { Shield, Settings, Check, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const CookieConsent: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true, // Always required
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem('primedev_cookie_consent');
    if (!consent) {
      // Small delay before showing banner for premium experience
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('primedev_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const consentData = {
      functional: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('primedev_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      functional: true, // Force required
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('primedev_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 animate-float">
      <div className="glass-card border border-white/20 p-6 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accent-blue/10 rounded-full blur-xl" />
        
        {!showSettings ? (
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-accent-blue/10 rounded-2xl text-brand-accent-blue border border-brand-accent-blue/20">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {t('cookie.title')}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {t('cookie.text')}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={handleAcceptAll}
                className="flex-1 btn-primary py-2.5 text-xs font-semibold whitespace-nowrap"
              >
                {t('cookie.accept')}
              </button>
              <button
                onClick={handleDeclineAll}
                className="btn-secondary py-2.5 px-4 text-xs font-semibold"
              >
                {t('cookie.decline')}
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="btn-secondary p-2.5"
                title="Cookie Settings"
              >
                <Settings className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-3">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-brand-accent-blue" />
                {t('cookie.settingsTitle')}
              </h4>
              <button 
                onClick={() => setShowSettings(false)}
                className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 py-1">
              {/* Functional */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/40 dark:border-slate-800/40">
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    {t('cookie.functional')}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    Required for site operation
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-accent-blue/10 flex items-center justify-center text-brand-accent-blue border border-brand-accent-blue/20">
                  <Check className="w-4 h-4" />
                </div>
              </div>

              {/* Analytics */}
              <div 
                className="flex items-center justify-between p-2 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/40 dark:border-slate-800/40 cursor-pointer"
                onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
              >
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    {t('cookie.analytics')}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    Helps us audit performance
                  </span>
                </div>
                <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 relative ${
                  preferences.analytics ? 'bg-brand-accent-blue' : 'bg-slate-300 dark:bg-slate-800'
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                    preferences.analytics ? 'translate-x-4' : 'translate-x-0'
                  }`} />
                </div>
              </div>

              {/* Marketing */}
              <div 
                className="flex items-center justify-between p-2 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/40 dark:border-slate-800/40 cursor-pointer"
                onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
              >
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    {t('cookie.marketing')}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    Used for customized advertisements
                  </span>
                </div>
                <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 relative ${
                  preferences.marketing ? 'bg-brand-accent-blue' : 'bg-slate-300 dark:bg-slate-800'
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                    preferences.marketing ? 'translate-x-4' : 'translate-x-0'
                  }`} />
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowSettings(false)}
                className="w-1/3 btn-secondary py-2 text-xs font-semibold"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="w-2/3 btn-primary py-2 text-xs font-semibold"
              >
                {t('cookie.save')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CookieConsent;
