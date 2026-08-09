import React, { useEffect, useState } from 'react';
import { 
  Lock, Mail, Key, Download, Calendar, Plus, LogOut 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BookAppointmentModal } from '../shared/BookAppointmentModal';
import db, { type ClientProject, type Appointment } from '../../utils/db';

export const ClientDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [project, setProject] = useState<ClientProject | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'tracker' | 'billing' | 'meetings'>('tracker');
  const [activeEmail, setActiveEmail] = useState(() => {
    return sessionStorage.getItem('primedev_client_email') || 'client@primedev.com';
  });

  // Check login state on load
  useEffect(() => {
    const logged = sessionStorage.getItem('primedev_client_logged');
    const savedEmail = sessionStorage.getItem('primedev_client_email');
    if (logged === 'true' && savedEmail) {
      setIsLoggedIn(true);
      setActiveEmail(savedEmail);
      loadDashboardData(savedEmail);
    }
  }, []);

  const loadDashboardData = (clientEmail: string) => {
    setProject(db.getClientProject(clientEmail));
    // Filter appointments to show only meetings booked by this client
    const clientApps = db.getAppointments().filter(app => app.email === clientEmail);
    setAppointments(clientApps);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validEmails = ['client@primedev.com', 'campus@primedev.com'];
    if (validEmails.includes(email) && password === 'password123') {
      setIsLoggedIn(true);
      setError('');
      setActiveEmail(email);
      sessionStorage.setItem('primedev_client_logged', 'true');
      sessionStorage.setItem('primedev_client_email', email);
      loadDashboardData(email);
    } else {
      setError('Invalid email or password. Demo Hint: client@primedev.com or campus@primedev.com (Password: password123)');
    }
  };

  const handleGoogleLogin = () => {
    // Simulate google login
    setIsLoggedIn(true);
    setError('');
    setActiveEmail('client@primedev.com');
    sessionStorage.setItem('primedev_client_logged', 'true');
    sessionStorage.setItem('primedev_client_email', 'client@primedev.com');
    loadDashboardData('client@primedev.com');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('primedev_client_logged');
    sessionStorage.removeItem('primedev_client_email');
  };

  const handleBookingSuccess = () => {
    setIsBookingOpen(false);
    loadDashboardData(activeEmail);
  };

  // Styled helper for invoice badges
  const getStatusBadge = (status: 'paid' | 'pending' | 'overdue') => {
    switch (status) {
      case 'paid':
        return <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-900/60 uppercase">Paid</span>;
      case 'pending':
        return <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-600 border border-amber-200 dark:border-amber-900/60 uppercase">Pending</span>;
      case 'overdue':
        return <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 border border-red-200 dark:border-red-900/60 uppercase">Overdue</span>;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="w-full max-w-md mx-auto py-16 px-4">
        <div className="glass-card border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-accent-blue/15 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-accent-purple/15 rounded-full blur-2xl animate-pulse-slow" />
          
          <div className="text-center mb-6 relative">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple rounded-2xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg shadow-brand-accent-purple/20">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('dashboard.portalTitle')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
              {t('dashboard.loginSubtitle')}
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3.5 bg-red-100/70 dark:bg-red-950/30 border border-red-200/50 dark:border-red-900/50 rounded-xl text-xs text-red-600 dark:text-red-400 text-center font-medium leading-relaxed">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 relative">
            {/* Email field */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                {t('dashboard.email')}
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@primedev.com"
                  className="w-full bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all"
                  required
                />
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                {t('dashboard.password')}
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand-accent-blue transition-all"
                  required
                />
                <Key className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3.5 font-bold text-sm tracking-wide mt-2"
            >
              {t('dashboard.signIn')}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-slate-200 dark:border-slate-800" />
            <span className="flex-shrink mx-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">Or</span>
            <div className="flex-grow border-t border-slate-200 dark:border-slate-800" />
          </div>

          {/* Google login mock */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full btn-secondary py-3 flex items-center justify-center gap-2 text-xs font-semibold"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.03-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            {t('dashboard.googleSignIn')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-6 px-4">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-3xl mb-6 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple flex items-center justify-center text-white font-bold text-lg">
            {project?.name ? project.name.charAt(0).toUpperCase() : 'P'}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t('dashboard.welcome')}, Client Partner
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Project: **{project?.name || 'Active Platform'}** • Status: {project?.status || 'Active'}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-red-200 dark:border-red-950/60 hover:bg-red-500/10 text-red-600 dark:text-red-400 transition-colors self-end md:self-auto"
        >
          <LogOut className="w-4 h-4" />
          {t('dashboard.logout')}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 gap-2">
        <button
          onClick={() => setActiveTab('tracker')}
          className={`py-3 px-4 text-xs font-bold transition-all border-b-2 -mb-0.5 ${
            activeTab === 'tracker' 
              ? 'border-brand-accent-blue text-brand-accent-blue dark:text-white' 
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700'
          }`}
        >
          {t('dashboard.projectTracker')}
        </button>
        <button
          onClick={() => setActiveTab('billing')}
          className={`py-3 px-4 text-xs font-bold transition-all border-b-2 -mb-0.5 ${
            activeTab === 'billing' 
              ? 'border-brand-accent-blue text-brand-accent-blue dark:text-white' 
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700'
          }`}
        >
          {t('dashboard.invoices')}
        </button>
        <button
          onClick={() => setActiveTab('meetings')}
          className={`py-3 px-4 text-xs font-bold transition-all border-b-2 -mb-0.5 ${
            activeTab === 'meetings' 
              ? 'border-brand-accent-blue text-brand-accent-blue dark:text-white' 
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700'
          }`}
        >
          {t('dashboard.appointments')}
        </button>
      </div>

      {/* Tab Contents */}
      {project && (
        <div className="glass-card border border-white/20 p-6 rounded-3xl shadow-xl min-h-[300px]">
          {activeTab === 'tracker' && (
            <div className="space-y-6">
              {/* Overall Progress Banner */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {project.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Timeline: **{project.startDate}** to **{project.targetLaunch}**
                  </p>
                </div>
                <div className="w-full sm:w-1/3 flex items-center gap-3">
                  <div className="flex-1 bg-slate-200 dark:bg-slate-850 h-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple h-full transition-all duration-1000"
                      style={{ width: `${project.overallProgress}%` }}
                    />
                  </div>
                  <span className="font-extrabold text-sm text-brand-accent-purple shrink-0">
                    {project.overallProgress}%
                  </span>
                </div>
              </div>

              {/* Gantt Timeline Checklist */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                  Gantt Milestone Tracking
                </h4>
                <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-6 py-2">
                  {project.milestones.map((ms, index) => {
                    const isCompleted = ms.status === 'completed';
                    const isInProgress = ms.status === 'in-progress';
                    return (
                      <div key={ms.id} className="relative pl-6">
                        {/* Dot indicator */}
                        <div className={`absolute -left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                          isCompleted 
                            ? 'bg-brand-accent-blue border-brand-accent-blue timeline-dot'
                            : isInProgress
                            ? 'bg-amber-500 border-amber-500'
                            : 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700'
                        }`} />
                        
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div>
                            <span className={`text-xs font-bold block ${
                              isCompleted ? 'text-slate-900 dark:text-white' : 'text-slate-500'
                            }`}>
                              Phase {index + 1}: {ms.title}
                            </span>
                            <span className="text-[10px] text-slate-400 block mt-0.5">
                              Est. Delivery: {ms.date} • {ms.description}
                            </span>
                          </div>
                          
                          {/* Percentage Badge */}
                          <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${
                            isCompleted
                              ? 'bg-brand-accent-blue/10 border-brand-accent-blue/35 text-brand-accent-blue'
                              : isInProgress
                              ? 'bg-amber-500/10 border-amber-500/35 text-amber-500'
                              : 'bg-slate-100 dark:bg-slate-950/20 border-slate-200 dark:border-slate-800 text-slate-400'
                          }`}>
                            {ms.percentage}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Invoices & Payment Schedule
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold uppercase">
                      <th className="py-3 px-4">Invoice ID</th>
                      <th className="py-3 px-4">Description</th>
                      <th className="py-3 px-4">{t('dashboard.amount')}</th>
                      <th className="py-3 px-4">Due Date</th>
                      <th className="py-3 px-4">{t('dashboard.status')}</th>
                      <th className="py-3 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.invoices.map((inv) => (
                      <tr key={inv.id} className="border-b border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-950/10">
                        <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">{inv.id}</td>
                        <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400">{inv.description}</td>
                        <td className="py-3.5 px-4 font-bold">{inv.amount}</td>
                        <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400">{inv.dueDate}</td>
                        <td className="py-3.5 px-4">{getStatusBadge(inv.status)}</td>
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => alert(`Downloading ${inv.id}.pdf`)}
                            className="inline-flex items-center gap-1 hover:text-brand-accent-blue font-semibold"
                          >
                            <Download className="w-3.5 h-3.5" />
                            {t('dashboard.downloadInvoice')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'meetings' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Scheduled Consultations
                </h4>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-primary py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  {t('dashboard.bookBtn')}
                </button>
              </div>

              {appointments.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400">
                  <Calendar className="w-10 h-10 mx-auto mb-2 opacity-50" />
                  <p className="text-xs font-medium">No scheduled calls found.</p>
                </div>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  {appointments.map((appt) => (
                    <div 
                      key={appt.id}
                      className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-slate-800/50 flex items-start justify-between"
                    >
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          {appt.service}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1">
                          Date: **{appt.date}** • Time: **{appt.timeSlot}**
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-1">
                          Created on: {appt.createdAt}
                        </span>
                      </div>
                      
                      {appt.status === 'confirmed' ? (
                        <span className="px-2 py-0.5 text-[8px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-900/60 uppercase">Confirmed</span>
                      ) : (
                        <span className="px-2 py-0.5 text-[8px] font-bold rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-600 border border-amber-200 dark:border-amber-900/60 uppercase">Pending</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Book Call Modal Integration */}
      <BookAppointmentModal
        isOpen={isBookingOpen}
        onClose={handleBookingSuccess}
        initialService="SaaS Development"
      />
    </div>
  );
};
export default ClientDashboard;
