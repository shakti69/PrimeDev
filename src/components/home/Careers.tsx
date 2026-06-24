import React, { useState } from 'react';
import { MapPin, DollarSign, Calendar, Upload, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import db from '../../utils/db';

interface JobPosition {
  id: string;
  titles: { en: string; es: string; de: string };
  department: string;
  location: string;
  salary: string;
  requirements: string[];
}

export const Careers: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const jobs: JobPosition[] = [
    {
      id: 'j1',
      titles: {
        en: "Lead React & Next.js Engineer",
        es: "Ingeniero Principal de React y Next.js",
        de: "Lead React- & Next.js Entwickler"
      },
      department: "Engineering",
      location: "Remote / Silicon Valley",
      salary: "$120,000 - $150,000 / yr",
      requirements: [
        "4+ Years of professional React/TypeScript engineering",
        "Expert knowledge of Next.js 14+ App Router & Server Components",
        "Strong CSS/Tailwind skills with core performance metrics budgeting",
        "Experience building high-frequency REST & GraphQL APIs"
      ]
    },
    {
      id: 'j2',
      titles: {
        en: "Senior UI/UX Designer",
        es: "Diseñador UI/UX Senior",
        de: "Senior UI/UX Designer"
      },
      department: "Product Design",
      location: "Hybrid / Silicon Valley",
      salary: "$100,000 - $130,000 / yr",
      requirements: [
        "3+ Years designing web apps, dashboards & SaaS products",
        "Advanced Figma prototyping, wireframing & design system management",
        "Strong understanding of modern accessibility standards (WCAG)",
        "Portfolio demonstrating sleek typography & motion designs"
      ]
    },
    {
      id: 'j3',
      titles: {
        en: "Backend microservices Developer",
        es: "Desarrollador de Microservicios Backend",
        de: "Backend-Entwickler (Microservices)"
      },
      department: "Engineering",
      location: "Remote",
      salary: "$90,000 - $120,000 / yr",
      requirements: [
        "3+ Years engineering Node.js microservices (Express/NestJS)",
        "Experience mapping schema structures in MongoDB & PostgreSQL",
        "Familiarity with Docker container orchestration & AWS ECS pipelines",
        "Understanding of token authorization protocols (JWT, Google Login)"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }));
      }
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
    if (!resume) newErrors.resume = 'Please upload your resume';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !selectedJob) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Post to LocalStorage DB
      db.addApplication({
        name: formData.name,
        email: formData.email,
        position: selectedJob.titles.en,
        message: formData.message,
        resumeName: resume ? resume.name : 'UnknownResume.pdf'
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setFormData({ name: '', email: '', message: '' });
    setResume(null);
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="careers" className="w-full py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-purple/10 text-brand-accent-purple border border-brand-accent-purple/20 uppercase tracking-widest">
            {t('nav.careers')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('careers.title')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-purple to-brand-accent-cyan mx-auto rounded-full mt-2" />
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 items-stretch">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="glass-card border border-slate-200/50 dark:border-slate-800/60 p-6 rounded-3xl flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 text-[8px] font-black uppercase tracking-wider rounded-md bg-brand-accent-purple/10 text-brand-accent-purple border border-brand-accent-purple/20">
                    {job.department}
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white pt-1">
                    {job.titles[language]}
                  </h4>
                </div>

                {/* Details list */}
                <div className="space-y-1.5 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent-blue" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-brand-accent-purple" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-accent-cyan" />
                    <span>Full-time / Permanent</span>
                  </div>
                </div>

                {/* Requirements checkmarks */}
                <div className="space-y-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-450 block">Requirements</span>
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-[10px] text-slate-400 dark:text-slate-350 leading-relaxed font-light flex items-start gap-1">
                        <span className="w-1.5 h-1.5 bg-brand-accent-purple rounded-full shrink-0 mt-1.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full btn-secondary py-2.5 rounded-xl text-xs font-bold text-slate-900 dark:text-white border-brand-accent-purple/25 hover:border-brand-accent-purple/60"
                >
                  {t('careers.applyNow')}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Apply Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
            onClick={handleCloseModal}
          />
          {/* Modal */}
          <div className="relative w-full max-w-lg rounded-3xl glass-card border border-white/20 p-6 shadow-2xl z-10 overflow-hidden animate-float-quick">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-4 mb-4">
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                  {t('careers.applyModal.title')}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Position: **{selectedJob.titles[language]}**
                </p>
              </div>
              <button 
                onClick={handleCloseModal}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-6 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-200 dark:border-emerald-900/60 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h5 className="font-bold text-slate-950 dark:text-white text-sm">
                  Application Uploaded!
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                  {t('careers.applyModal.success')}
                </p>
                <button 
                  onClick={handleCloseModal}
                  className="btn-primary px-8 mt-2"
                >
                  Close Job Portal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApply} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Marcus Vance"
                    className={`w-full bg-white/50 dark:bg-slate-950/40 border rounded-xl py-2.5 px-3.5 text-xs outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-850'
                    }`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="marcus@company.com"
                    className={`w-full bg-white/50 dark:bg-slate-950/40 border rounded-xl py-2.5 px-3.5 text-xs outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all ${
                      errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-850'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Cover letter Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    Message / Cover Letter (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us why you are a great fit..."
                    className="w-full bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 px-3.5 text-xs outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all"
                  />
                </div>

                {/* Resume Upload Drop Zone Mockup */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                    {t('careers.applyModal.resume')}
                  </label>
                  <div className={`relative border border-dashed rounded-2xl p-6 text-center transition-all ${
                    errors.resume ? 'border-red-500 bg-red-50/10' : 'border-slate-300 dark:border-slate-800 hover:border-brand-accent-blue hover:bg-slate-100/10'
                  }`}>
                    <input
                      type="file"
                      accept=".pdf,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2 pointer-events-none" />
                    {resume ? (
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          {resume.name}
                        </span>
                        <span className="text-[9px] text-slate-400 block">
                          {(resume.size / 1024 / 1024).toFixed(2)} MB • PDF Document
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-350 block">
                          {t('careers.applyModal.resumeHint')}
                        </span>
                        <span className="text-[9px] text-slate-400 block">PDF or DOCX max 5MB</span>
                      </div>
                    )}
                  </div>
                  {errors.resume && <p className="text-[10px] text-red-500 mt-1">{errors.resume}</p>}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="w-1/3 btn-secondary py-3 text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-2/3 btn-primary py-3 flex items-center justify-center font-bold"
                  >
                    {isSubmitting ? 'Uploading...' : t('careers.applyModal.submit')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default Careers;
