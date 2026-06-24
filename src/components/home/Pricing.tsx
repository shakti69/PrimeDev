import React, { useState } from 'react';
import { Check, X, Sparkles, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BookAppointmentModal } from '../shared/BookAppointmentModal';

interface PlanFeature {
  name: string;
  starter: string | boolean;
  business: string | boolean;
  enterprise: string | boolean;
}

export const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showCompare, setShowCompare] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: "Starter Package",
      badge: "Fast Launch",
      priceMonthly: 2999,
      priceYearly: 2399,
      desc: "Perfect for high-impact landing pages, single page applications, and small corporate portfolios.",
      features: [
        "Up to 5 Pages responsive layout",
        "Vanilla CSS / Tailwind styling",
        "On-page basic SEO schema setup",
        "Framer Motion transitions",
        "1 month post-launch support",
        "Weekly status checks"
      ],
      cta: "Book Starter Package",
      serviceVal: "Website Development"
    },
    {
      id: 'business',
      name: "Business Package",
      badge: "Best Value",
      priceMonthly: 5999,
      priceYearly: 4799,
      isPopular: true,
      desc: "Tailored for growing SaaS brands, complex e-commerce, custom dashboards, and CMS-backed web apps.",
      features: [
        "Up to 15 Pages custom views",
        "Headless CMS (Sanity/Strapi)",
        "Advanced SEO speed optimizations",
        "Custom APIs & MongoDB databases",
        "3 months maintenance support",
        "Dedicated UI/UX design wireframes"
      ],
      cta: "Book Business Package",
      serviceVal: "SaaS Development"
    },
    {
      id: 'enterprise',
      name: "Enterprise Package",
      badge: "Custom Architecture",
      priceMonthly: 12999,
      priceYearly: 9999,
      desc: "For multi-national systems, massive multi-tenant portals, custom architectures, and high-frequency APIs.",
      features: [
        "Unlimited custom pages",
        "Multi-tenant data architectures",
        "Full AWS cloud infrastructure setup",
        "Docker container orchestrations",
        "24/7 SLA maintenance contract",
        "Continuous DevOps integrations"
      ],
      cta: "Contact for Enterprise",
      serviceVal: "Custom Software Solutions"
    }
  ];

  const comparisonFeatures: PlanFeature[] = [
    { name: "Responsive Pages", starter: "Up to 5", business: "Up to 15", enterprise: "Unlimited" },
    { name: "Tailwind CSS Styling", starter: true, business: true, enterprise: true },
    { name: "Framer Motion Animations", starter: "Basic", business: "Advanced", enterprise: "Bespoke" },
    { name: "CMS Integrations", starter: false, business: "Headless (Sanity/Strapi)", enterprise: "Custom CMS" },
    { name: "Database & Backend API", starter: false, business: "MongoDB / Node.js", enterprise: "Microservices / JWT / GraphQL" },
    { name: "SEO Schemas & Speed Audits", starter: "Basic", business: "Advanced (Lighthouse 95+)", enterprise: "Full Enterprise Audit" },
    { name: "AWS Cloud Deployments", starter: false, business: "Basic Vercel / Netlify", enterprise: "AWS ECS / Docker / CDN" },
    { name: "Maintenance & SLA Support", starter: "1 Month", business: "3 Months", enterprise: "24/7 Dedicated SLA Support" },
    { name: "Consultation calls", starter: "Weekly", business: "Bi-weekly", enterprise: "Direct Slack channel / Daily" }
  ];

  const handleBookPlan = (serviceVal: string) => {
    setSelectedService(serviceVal);
    setIsBookingOpen(true);
  };

  const renderVal = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500/50 mx-auto" />
      );
    }
    return <span className="font-semibold text-xs text-slate-700 dark:text-slate-300">{val}</span>;
  };

  return (
    <section id="pricing" className="w-full py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
            {t('pricing.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('pricing.title')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* Monthly/Yearly Toggle switch */}
        <div className="flex justify-center items-center gap-3">
          <span className={`text-xs font-bold transition-colors ${billingCycle === 'monthly' ? 'text-slate-950 dark:text-white' : 'text-slate-400'}`}>
            {t('pricing.monthly')}
          </span>
          <button
            onClick={() => setBillingCycle(c => c === 'monthly' ? 'yearly' : 'monthly')}
            className="w-12 h-7 rounded-full p-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple transition-all duration-300 relative"
            title="Toggle billing cycle"
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
              billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </button>
          <span className={`text-xs font-bold transition-colors flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-slate-950 dark:text-white' : 'text-slate-400'}`}>
            {t('pricing.yearly')}
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            return (
              <div 
                key={plan.id}
                className={`glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  plan.isPopular 
                    ? 'border-brand-accent-purple border-2 shadow-xl shadow-brand-accent-purple/5 lg:scale-105 z-10' 
                    : 'border-slate-200/50 dark:border-slate-800/60 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Popular Badge banner */}
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-accent-purple text-white text-[9px] font-black uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3 h-3 text-glow-purple" />
                    {t('pricing.mostPopular')}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Badge */}
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                      {plan.badge}
                    </span>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {plan.name}
                    </h4>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {plan.desc}
                  </p>

                  {/* Bullet features list */}
                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feat, index) => (
                      <li key={index} className="flex gap-2.5 items-start text-xs text-slate-600 dark:text-slate-350">
                        <Check className="w-4.5 h-4.5 text-brand-accent-blue shrink-0 mt-0.5" />
                        <span className="font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action button */}
                <div className="pt-8">
                  <button
                    onClick={() => handleBookPlan(plan.serviceVal)}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold shadow-md transition-all ${
                      plan.isPopular
                        ? 'btn-primary'
                        : 'btn-secondary text-slate-900 dark:text-white border-brand-accent-blue/20'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Detailed Plan Comparison trigger button */}
        <div className="text-center pt-8">
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="btn-secondary py-3 px-6 text-xs font-bold inline-flex items-center gap-1.5 border-slate-300 dark:border-slate-800"
          >
            <HelpCircle className="w-4.5 h-4.5 text-brand-accent-blue" />
            {showCompare ? "Hide Feature Comparison" : t('pricing.comparisonTitle')}
          </button>
        </div>

        {/* Collapsible Comparison Table */}
        {showCompare && (
          <div className="glass-card border border-white/20 p-6 rounded-3xl shadow-xl overflow-hidden mt-6 animate-fade-in">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-brand-accent-blue pl-2.5">
              {t('pricing.comparisonTitle')}
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-center text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-850 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4 text-left w-1/3">{t('pricing.tableHeaders.feature')}</th>
                    <th className="py-3 px-4">{t('pricing.tableHeaders.starter')}</th>
                    <th className="py-3 px-4">{t('pricing.tableHeaders.business')}</th>
                    <th className="py-3 px-4">{t('pricing.tableHeaders.enterprise')}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feat, idx) => (
                    <tr key={idx} className="border-b border-slate-200/50 dark:border-slate-850/50 hover:bg-slate-150/20 dark:hover:bg-slate-900/10">
                      <td className="py-4 px-4 text-left font-bold text-slate-800 dark:text-slate-200">{feat.name}</td>
                      <td className="py-4 px-4">{renderVal(feat.starter)}</td>
                      <td className="py-4 px-4">{renderVal(feat.business)}</td>
                      <td className="py-4 px-4">{renderVal(feat.enterprise)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* Book call modal */}
      <BookAppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </section>
  );
};
export default Pricing;
