import React, { useState } from 'react';
import { X, Calendar as CalIcon, Clock, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import db from '../../utils/db';
import confetti from 'canvas-confetti';

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Generate next 14 business days starting today (excluding Sundays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let current = new Date(today);
    
    // Add 1 day to current so bookings start from tomorrow
    current.setDate(current.getDate() + 1);

    while (dates.length < 10) {
      // 0 = Sunday
      if (current.getDay() !== 0) {
        dates.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const timeSlots = [
    "09:00 - 10:00",
    "10:30 - 11:30",
    "13:00 - 14:00",
    "14:30 - 15:30",
    "16:00 - 17:00"
  ];

  const services = [
    "Website Development",
    "E-Commerce Development",
    "Web Application Development",
    "UI/UX Design",
    "SaaS Development",
    "Custom Software Solutions",
    "Cloud Solutions",
    "Consultation"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedService) newErrors.service = 'Please select a service';
    if (!selectedDate) newErrors.date = 'Please select a date';
    if (!selectedTimeSlot) newErrors.timeSlot = 'Please select a time slot';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      // Add to simulated DB
      db.addAppointment({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: selectedService,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        message: formData.message
      });

      setIsSubmitting(false);
      setStep(3);

      // Trigger Confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981']
      });
    }, 1000);
  };

  const resetState = () => {
    setStep(1);
    setSelectedService(initialService);
    setSelectedDate('');
    setSelectedTimeSlot('');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    onClose();
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(language === 'de' ? 'de-DE' : language === 'es' ? 'es-ES' : 'en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
        onClick={resetState}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl glass-card border border-white/20 shadow-2xl z-10 animate-float-quick">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 p-6">
          <div>
            <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white">
              {step === 3 ? t('contact.form.successTitle') : t('pricing.bookConsultation')}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {step === 1 && "Select service, date & time"}
              {step === 2 && "Enter your contact details"}
              {step === 3 && "We are looking forward to our meeting"}
            </p>
          </div>
          <button 
            onClick={resetState}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Container */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6">
              {/* Service Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  {t('contact.form.service')}
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    setErrors(prev => ({ ...prev, service: '' }));
                  }}
                  className={`w-full bg-white/50 dark:bg-slate-950/50 border rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-accent-blue outline-none transition-all duration-300 ${
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
                  <p className="text-xs text-red-500 flex items-center mt-1">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.service}
                  </p>
                )}
              </div>

              {/* Date Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center">
                  <CalIcon className="w-4 h-4 mr-1 text-brand-accent-blue" />
                  Select Consultation Date
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto p-1">
                  {availableDates.map((date) => {
                    const dateVal = date.toISOString().split('T')[0];
                    const isSelected = selectedDate === dateVal;
                    return (
                      <button
                        key={dateVal}
                        type="button"
                        onClick={() => {
                          setSelectedDate(dateVal);
                          setErrors(prev => ({ ...prev, date: '' }));
                        }}
                        className={`py-3 px-4 text-sm rounded-xl border text-left font-medium transition-all duration-300 flex items-center justify-between ${
                          isSelected
                            ? 'bg-gradient-to-r from-brand-accent-blue/20 to-brand-accent-purple/20 border-brand-accent-blue text-brand-accent-blue dark:text-white'
                            : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span>{formatDate(dateVal)}</span>
                        {isSelected && <Check className="w-4 h-4 text-brand-accent-blue" />}
                      </button>
                    );
                  })}
                </div>
                {errors.date && (
                  <p className="text-xs text-red-500 flex items-center mt-1">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.date}
                  </p>
                )}
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-brand-accent-purple" />
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => {
                          setSelectedTimeSlot(slot);
                          setErrors(prev => ({ ...prev, timeSlot: '' }));
                        }}
                        className={`py-2 px-1 text-xs rounded-xl border text-center font-medium transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-r from-brand-accent-purple/20 to-brand-accent-blue/20 border-brand-accent-purple text-brand-accent-purple dark:text-white'
                            : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {slot.split(' ')[0]} {/* Show start time only to save space */}
                      </button>
                    );
                  })}
                </div>
                {errors.timeSlot && (
                  <p className="text-xs text-red-500 flex items-center mt-1">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.timeSlot}
                  </p>
                )}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="w-full btn-primary py-3.5 font-bold"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className={`w-full bg-white/50 dark:bg-slate-950/50 border rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                    errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  className={`w-full bg-white/50 dark:bg-slate-950/50 border rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                    errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 012-3456"
                  className={`w-full bg-white/50 dark:bg-slate-950/50 border rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                    errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  {t('contact.form.message')} ({t('cookie.manage')} - Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Tell us briefly about your goals..."
                  className="w-full bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 btn-secondary py-3"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 btn-primary py-3 flex items-center justify-center font-bold"
                >
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-200 dark:border-emerald-900/60 animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-950 dark:text-white">
                Booking Confirmed!
              </h4>
              <div className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
                We've reserved your slot for **{selectedService}** on **{formatDate(selectedDate)}** at **{selectedTimeSlot}**. 
                An invite link has been dispatched to **{formData.email}**.
              </div>
              <button
                type="button"
                onClick={resetState}
                className="btn-primary px-8 mt-2"
              >
                Close Portal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
