import React, { useState, useEffect } from 'react';
import { Mail, Phone, Building2, HelpCircle, DollarSign, Send, CheckCircle2, AlertCircle, User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import db from '../../utils/db';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Listen to select-service custom event from Services.tsx
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setFormData(prev => ({ ...prev, service: customEvent.detail }));
      }
    };
    window.addEventListener('select-service', handleServiceSelect);
    return () => window.removeEventListener('select-service', handleServiceSelect);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Post to LocalStorage simulator
      db.addContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 1200);
  };

  const budgetRanges = [
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000+"
  ];

  const services = [
    "Website Development",
    "E-Commerce Development",
    "Web Application Development",
    "UI/UX Product Design",
    "SEO Optimization",
    "Website Maintenance",
    "SaaS Development",
    "Custom Software Solutions",
    "Cloud Solutions"
  ];

  return (
    <section id="contact" className="w-full py-20 font-sans relative">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
            {t('nav.contact')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('contact.title')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* Contact Form Wrapper */}
        <div className="glass-card border border-white/20 p-8 rounded-3xl shadow-xl relative overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-200 dark:border-emerald-900/60 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-950 dark:text-white">
                {t('contact.form.successTitle')}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed font-light">
                {t('contact.form.successDesc')}
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="btn-primary py-2 px-6 mt-4 rounded-xl text-xs font-bold shadow-sm"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-accent-blue" />
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name..."
                    className={`w-full bg-white/50 dark:bg-slate-950/40 border rounded-xl py-3 px-4 text-xs outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-500 flex items-center mt-1">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-accent-blue" />
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`w-full bg-white/50 dark:bg-slate-950/40 border rounded-xl py-3 px-4 text-xs outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                      errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-500 flex items-center mt-1">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-accent-purple" />
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={`w-full bg-white/50 dark:bg-slate-950/40 border rounded-xl py-3 px-4 text-xs outline-none focus:ring-2 focus:ring-brand-accent-purple transition-all ${
                      errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-red-500 flex items-center mt-1">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-brand-accent-purple" />
                    {t('contact.form.company')} (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company or Organization (Optional)"
                    className="w-full bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-xs outline-none focus:ring-2 focus:ring-brand-accent-purple transition-all"
                  />
                </div>

                {/* Required Service */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-brand-accent-cyan" />
                    {t('contact.form.service')}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full bg-white/50 dark:bg-slate-950/40 border rounded-xl py-3 px-4 text-xs outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                      errors.service ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <option value="" disabled className="dark:bg-slate-900">
                      {t('contact.form.selectService')}
                    </option>
                    {services.map((serv) => (
                      <option key={serv} value={serv} className="dark:bg-slate-900">
                        {serv}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-[10px] text-red-500 flex items-center mt-1">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.service}
                    </p>
                  )}
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-brand-accent-cyan" />
                    {t('contact.form.budget')}
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={`w-full bg-white/50 dark:bg-slate-950/40 border rounded-xl py-3 px-4 text-xs outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                      errors.budget ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <option value="" disabled className="dark:bg-slate-900">
                      {t('contact.form.selectBudget')}
                    </option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget} className="dark:bg-slate-900">
                        {budget}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-[10px] text-red-500 flex items-center mt-1">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.budget}
                    </p>
                  )}
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Outline details of your software needs..."
                  className={`w-full bg-white/50 dark:bg-slate-950/40 border rounded-xl py-3 px-4 text-xs outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                    errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                  }`}
                />
                {errors.message && (
                  <p className="text-[10px] text-red-500 flex items-center mt-1">
                    <AlertCircle className="w-3 h-3 mr-1" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3.5 font-bold flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t('contact.form.submitting')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.form.submit')}
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
export default Contact;
