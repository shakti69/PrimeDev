import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '../context/RouterContext';
import { PrimeDevLogoMark } from '../components/common/PrimeDevLogoMark';

export const BookCallPage: React.FC = () => {
  const { navigate } = useRouter();

  // Form states
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [timeline, setTimeline] = useState('');
  const [source, setSource] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    'Unlimited Design Subscription',
    'Web Design',
    'App Design',
    'Branding & Logo',
    'No-code development (Framer/Shopify)',
    'Packaging Design',
  ];

  const budgetRanges = [
    'Under $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
  ];

  const timelineOptions = [
    'Immediately',
    'Within a month',
    'Not sure yet',
  ];

  const sourceOptions = [
    'Instagram',
    'LinkedIn',
    'Referral',
    'X',
    'Other',
  ];

  const toggleService = (srv: string) => {
    if (services.includes(srv)) {
      setServices(services.filter((s) => s !== srv));
    } else {
      setServices([...services, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate inquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  };

  return (
    <div className="min-h-screen bg-white text-[#1E1E1E] selection:bg-[#FF5819] selection:text-white pb-32">
      
      {/* Top Floating Back to Home Bar */}
      <div className="fixed top-6 left-6 sm:left-10 z-50">
        <button
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-black/12 text-xs sm:text-sm font-semibold text-[#1E1E1E] shadow-md hover:bg-black hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to Home</span>
        </button>
      </div>

      {/* Top Curated Showcase Collage Strip (Expanded Scale) */}
      <div className="relative w-full h-56 sm:h-72 md:h-84 lg:h-96 overflow-hidden bg-[#141212] border-b border-black/[0.05]">
        {/* Tilted Showcase Cards Carousel Strip */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 sm:gap-8 opacity-90 scale-105 select-none pointer-events-none -rotate-2 -translate-y-4">
          <div className="w-64 h-48 sm:w-80 sm:h-60 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 p-5 shadow-2xl shrink-0 flex flex-col justify-between">
            <div className="flex gap-2"><span className="w-2.5 h-2.5 rounded-full bg-white/30" /><span className="w-2.5 h-2.5 rounded-full bg-white/30" /></div>
            <div className="text-white/90 font-mono text-xs sm:text-sm text-center uppercase tracking-widest font-semibold">SaaS Dashboard UI</div>
            <div className="h-2 w-1/2 bg-[#FF5819] rounded-full" />
          </div>

          <div className="w-64 h-48 sm:w-80 sm:h-60 rounded-2xl bg-gradient-to-br from-stone-900 to-black border border-white/10 p-5 shadow-2xl shrink-0 flex flex-col justify-between">
            <div className="flex gap-2"><span className="w-2.5 h-2.5 rounded-full bg-white/30" /><span className="w-2.5 h-2.5 rounded-full bg-white/30" /></div>
            <div className="text-white/90 font-mono text-xs sm:text-sm text-center uppercase tracking-widest font-semibold">Brand Identity &amp; Style</div>
            <div className="h-2 w-2/3 bg-[#FF5819] rounded-full" />
          </div>

          <div className="w-64 h-48 sm:w-80 sm:h-60 rounded-2xl bg-gradient-to-br from-[#2D1B11] to-[#170E08] border border-[#FF5819]/40 p-5 shadow-2xl shrink-0 flex flex-col justify-between">
            <div className="flex gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#FF5819]" /><span className="w-2.5 h-2.5 rounded-full bg-white/30" /></div>
            <div className="text-white font-mono text-xs sm:text-sm text-center uppercase tracking-widest font-semibold">Mobile Commerce App</div>
            <div className="h-2 w-3/4 bg-[#FF5819] rounded-full" />
          </div>

          <div className="w-64 h-48 sm:w-80 sm:h-60 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 p-5 shadow-2xl shrink-0 flex flex-col justify-between">
            <div className="flex gap-2"><span className="w-2.5 h-2.5 rounded-full bg-white/30" /><span className="w-2.5 h-2.5 rounded-full bg-white/30" /></div>
            <div className="text-white/90 font-mono text-xs sm:text-sm text-center uppercase tracking-widest font-semibold">Web Architecture</div>
            <div className="h-2 w-1/3 bg-[#FF5819] rounded-full" />
          </div>
        </div>

        {/* Ambient Top Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* Main Form Container (Expanded Large Scale) */}
      <div className="max-w-[780px] sm:max-w-[840px] lg:max-w-[880px] mx-auto px-4 sm:px-8 relative z-10 -mt-12 sm:-mt-16">
        
        {/* Centered Orange Monogram Avatar */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FF5819] text-white flex items-center justify-center shadow-2xl shadow-[#FF5819]/40 mx-auto border-4 border-white animate-icon-pulse-glow">
          <PrimeDevLogoMark size={40} color="white" />
        </div>

        {/* Header Titles */}
        <div className="text-left mt-9 sm:mt-12 space-y-4">
          <h1
            style={{
              fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
              letterSpacing: '-0.035em',
            }}
            className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1E1E1E] leading-tight"
          >
            Let&apos;s work together &ndash; PrimeDev
          </h1>

          <p className="text-sm sm:text-base lg:text-[1.05rem] text-[#666666] leading-relaxed font-normal pt-1">
            We&apos;d love to learn more about your project! <br />
            Please take a moment to share a few details below &mdash; this helps us understand your goals and craft the right creative approach. We&apos;ll get back to you within 12 hours of your submission.
          </p>
        </div>

        {/* Success Confirmation Modal / Screen */}
        <AnimatePresence>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-12 p-10 sm:p-14 rounded-[36px] bg-[#F4F4F6] border border-black/[0.04] text-center space-y-7 shadow-md"
            >
              <div className="w-20 h-20 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto shadow-sm">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-[#1E1E1E]">Inquiry Received!</h2>
                <p className="text-base text-[#666666] max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1E1E1E]">{name || 'there'}</span>. We have received your project details and will get back to you at <span className="font-semibold text-[#1E1E1E]">{email}</span> within 12 hours.
                </p>
              </div>

              {/* Direct Booking / WhatsApp Options */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@primedev.in"
                  style={{ backgroundColor: '#FF5819' }}
                  className="btn-sheen w-full sm:w-auto px-9 h-[52px] rounded-full text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <span>Email Direct</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <button
                  onClick={() => navigate('home')}
                  className="w-full sm:w-auto px-9 h-[52px] rounded-full bg-white border border-black/12 text-sm font-semibold text-[#1E1E1E] hover:bg-black hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                >
                  Return to Home
                </button>
              </div>
            </motion.div>
          ) : (
            /* Interactive Inquiry Form (Large Spacious Layout) */
            <form onSubmit={handleSubmit} className="mt-10 sm:mt-12 space-y-8 sm:space-y-9 text-left">
              
              {/* 1. Your name * */}
              <div className="space-y-2.5">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  Your name <span className="text-[#FF5819]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-white border border-black/[0.12] focus:border-[#FF5819] focus:ring-4 focus:ring-[#FF5819]/15 text-base text-[#1E1E1E] outline-none transition-all shadow-xs"
                />
              </div>

              {/* 2. Business Name * */}
              <div className="space-y-2.5">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  Business Name <span className="text-[#FF5819]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder=""
                  className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-white border border-black/[0.12] focus:border-[#FF5819] focus:ring-4 focus:ring-[#FF5819]/15 text-base text-[#1E1E1E] outline-none transition-all shadow-xs"
                />
              </div>

              {/* 3. Your website (if have) */}
              <div className="space-y-2.5">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  Your website (if have)
                </label>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder=""
                  className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-white border border-black/[0.12] focus:border-[#FF5819] focus:ring-4 focus:ring-[#FF5819]/15 text-base text-[#1E1E1E] outline-none transition-all shadow-xs"
                />
              </div>

              {/* 4. What would you like PrimeDev to help you with? * */}
              <div className="space-y-3">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  What would you like PrimeDev to help you with? <span className="text-[#FF5819]">*</span>
                </label>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {availableServices.map((srv) => {
                    const isSelected = services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border transition-all duration-200 cursor-pointer select-none ${
                          isSelected
                            ? 'bg-[#FF5819] border-[#FF5819] text-white shadow-md shadow-[#FF5819]/30 scale-102 font-semibold'
                            : 'bg-white border-black/[0.12] text-[#444444] hover:border-black/35 hover:bg-[#F8F8F9]'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. What's your estimated budget range? * */}
              <div className="space-y-3">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  What&apos;s your estimated budget range? <span className="text-[#FF5819]">*</span>
                </label>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {budgetRanges.map((b) => {
                    const isSelected = budget === b;
                    return (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border transition-all duration-200 cursor-pointer select-none ${
                          isSelected
                            ? 'bg-[#FF5819] border-[#FF5819] text-white shadow-md shadow-[#FF5819]/30 scale-102 font-semibold'
                            : 'bg-white border-black/[0.12] text-[#444444] hover:border-black/35 hover:bg-[#F8F8F9]'
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 6. Tell us a bit about your business or project * */}
              <div className="space-y-2.5">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  Tell us a bit about your business or project <span className="text-[#FF5819]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder=""
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-black/[0.12] focus:border-[#FF5819] focus:ring-4 focus:ring-[#FF5819]/15 text-base text-[#1E1E1E] outline-none transition-all resize-y shadow-xs"
                />
              </div>

              {/* 7. How soon are you planning to start? * */}
              <div className="space-y-3">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  How soon are you planning to start? <span className="text-[#FF5819]">*</span>
                </label>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {timelineOptions.map((t) => {
                    const isSelected = timeline === t;
                    return (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border transition-all duration-200 cursor-pointer select-none ${
                          isSelected
                            ? 'bg-[#FF5819] border-[#FF5819] text-white shadow-md shadow-[#FF5819]/30 scale-102 font-semibold'
                            : 'bg-white border-black/[0.12] text-[#444444] hover:border-black/35 hover:bg-[#F8F8F9]'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 8. How did you hear about us? */}
              <div className="space-y-3">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  How did you hear about us?
                </label>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {sourceOptions.map((s) => {
                    const isSelected = source === s;
                    return (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setSource(s)}
                        className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border transition-all duration-200 cursor-pointer select-none ${
                          isSelected
                            ? 'bg-[#FF5819] border-[#FF5819] text-white shadow-md shadow-[#FF5819]/30 scale-102 font-semibold'
                            : 'bg-white border-black/[0.12] text-[#444444] hover:border-black/35 hover:bg-[#F8F8F9]'
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 9. My Email * */}
              <div className="space-y-2.5">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  My Email <span className="text-[#FF5819]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-white border border-black/[0.12] focus:border-[#FF5819] focus:ring-4 focus:ring-[#FF5819]/15 text-base text-[#1E1E1E] outline-none transition-all shadow-xs"
                />
              </div>

              {/* 10. Mobile Number * */}
              <div className="space-y-2.5">
                <label className="block text-sm sm:text-base font-bold text-[#1E1E1E]">
                  Mobile Number <span className="text-[#FF5819]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder=""
                  className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-white border border-black/[0.12] focus:border-[#FF5819] focus:ring-4 focus:ring-[#FF5819]/15 text-base text-[#1E1E1E] outline-none transition-all shadow-xs"
                />
              </div>

              {/* Bottom Disclaimer */}
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed pt-2">
                Once you hit &ldquo;Send Inquiry,&rdquo; you&apos;ll have the option to book a quick discovery call with us. (No pressure &mdash; you can skip it if you&apos;re not ready yet!)
              </p>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: '#FF5819',
                    boxShadow: '2px 2px 12px rgba(36,36,36,0.12), inset 4px 4px 6px rgba(255,255,255,0.25)',
                  }}
                  className="btn-sheen inline-flex items-center justify-center gap-2.5 px-10 h-[54px] sm:h-[58px] rounded-[40px] text-white font-semibold text-base sm:text-lg hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-6px_rgba(255,88,25,0.55)] active:translate-y-0 active:scale-[0.97] transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
};
