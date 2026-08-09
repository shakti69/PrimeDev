import React, { useState } from 'react';
import { Upload, X, CheckCircle2 } from 'lucide-react';
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
        en: "Full-Stack Web Engineer (React / Node.js)",
        es: "Ingeniero Web Full-Stack (React / Node.js)",
        de: "Full-Stack Webentwickler (React / Node.js)"
      },
      department: "Engineering",
      location: "Remote / Odisha",
      salary: "Competitive / Project-based",
      requirements: [
        "Strong proficiency in React, TypeScript, and modern Tailwind CSS",
        "Experience building Node.js, Express, and MongoDB backend APIs",
        "Understanding of JWT authentication and secure session handling",
        "Commitment to clean architecture and responsive mobile layouts"
      ]
    },
    {
      id: 'j2',
      titles: {
        en: "UI/UX & Creative Media Designer",
        es: "Diseñador UI/UX y Medios Creativos",
        de: "UI/UX- & Creative-Media-Designer"
      },
      department: "Creative Lab",
      location: "Remote / Hybrid",
      salary: "Competitive / Project-based",
      requirements: [
        "Proficiency in Figma prototyping, wireframing & design system management",
        "Eye for modern typography, micro-interactions, and dark mode aesthetics",
        "Knowledge of accessibility (WCAG) guidelines and user journey mapping",
        "Optional: Video editing and motion graphics experience"
      ]
    },
    {
      id: 'j3',
      titles: {
        en: "Cybersecurity & QA Audit Specialist",
        es: "Especialista en Auditoría de Ciberseguridad y QA",
        de: "Cybersicherheits- & QA-Spezialist"
      },
      department: "Security & QA",
      location: "Remote",
      salary: "Competitive / Project-based",
      requirements: [
        "Experience conducting vulnerability assessments and network testing",
        "Hands-on familiarity with Linux environments and OWASP Top 10 guidelines",
        "Ability to audit API endpoints for security loopholes and validation errors",
        "Strong attention to detail and rigorous testing mindset"
      ]
    }
  ];

  const handleOpenModal = (job: JobPosition) => {
    setSelectedJob(job);
    setFormData({ name: '', email: '', message: '' });
    setResume(null);
    setErrors({});
    setIsSuccess(false);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
      if (errors.resume) {
        setErrors((prev) => ({ ...prev, resume: '' }));
      }
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Email is invalid';
    }
    if (!resume) errs.resume = 'Resume is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !selectedJob) return;

    setIsSubmitting(true);

    setTimeout(() => {
      db.addApplication({
        name: formData.name,
        email: formData.email,
        position: selectedJob.titles.en,
        message: formData.message,
        resumeName: resume ? resume.name : 'resume.pdf'
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        handleCloseModal();
      }, 2500);
    }, 1200);
  };

  return (
    <section id="careers" className="w-full py-20 bg-slate-50/50 dark:bg-brand-dark/20 border-t border-b border-slate-200/40 dark:border-slate-850/40 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
            {t('careers.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('careers.title')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* Job Openings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between border border-white/20 dark:border-slate-800/80 shadow-md relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20">
                    {job.department}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {job.location}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  {job.titles[language as 'en' | 'es' | 'de'] || job.titles.en}
                </h3>

                <div className="space-y-2 pt-2 border-t border-slate-200/40 dark:border-slate-800/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-400 font-light">
                    {job.requirements.slice(0, 2).map((req, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-brand-accent-blue font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => handleOpenModal(job)}
                  className="w-full py-2.5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-gradient-to-r hover:from-brand-accent-blue hover:to-brand-accent-purple hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Apply / Collaborate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal application form */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="glass-card w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-slate-800 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Application Received!</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for applying to collaborate on {selectedJob.titles.en}. We will review your profile and reach out via email.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-brand-accent-blue uppercase tracking-wider">
                    {selectedJob.department}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Apply: {selectedJob.titles[language as 'en' | 'es' | 'de'] || selectedJob.titles.en}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name..."
                      className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl py-2.5 px-4 text-xs text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-brand-accent-blue"
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl py-2.5 px-4 text-xs text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-brand-accent-blue"
                    />
                    {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Resume / Portfolio Link / File *
                    </label>
                    <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center hover:border-brand-accent-blue transition-colors relative cursor-pointer">
                      <input 
                        type="file" 
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        accept=".pdf,.doc,.docx"
                      />
                      <div className="flex flex-col items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Upload className="w-5 h-5 text-brand-accent-blue" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {resume ? resume.name : "Click to upload CV / Resume (PDF/DOCX)"}
                        </span>
                        <span className="text-[10px] text-slate-400">Maximum file size 10MB</span>
                      </div>
                    </div>
                    {errors.resume && <p className="text-[10px] text-red-500 mt-1">{errors.resume}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Cover Note / Relevant Projects
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your experience and relevant GitHub repos or portfolio links..."
                      className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl py-2.5 px-4 text-xs text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-brand-accent-blue"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple text-white text-xs font-bold shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <span>Submit Application</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default Careers;
