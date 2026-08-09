import React from 'react';
import { MapPin, Clock, Mail } from 'lucide-react';

export const Location: React.FC = () => {

  return (
    <section id="location" className="w-full py-20 bg-slate-50/50 dark:bg-brand-dark/20 border-t border-b border-slate-200/40 dark:border-slate-850/40 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
            Base of Operations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Location & Channels
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* Map & details container */}
        <div className="flex flex-col lg:flex-row gap-8 pt-4 items-stretch">
          
          {/* Side Info Cards */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between gap-4">
            
            {/* Address Card */}
            <div className="glass-card border border-white/20 p-6 rounded-3xl shadow-md flex gap-4 items-start relative overflow-hidden flex-1">
              <div className="w-10 h-10 rounded-2xl bg-brand-accent-blue/10 border border-brand-accent-blue/20 flex items-center justify-center text-brand-accent-blue shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-black uppercase text-slate-400 block tracking-widest">
                  Current Base Location
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Dhenkanal, Odisha
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  Dhenkanal, Odisha, India — Available for remote and global collaborations.
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-card border border-white/20 p-6 rounded-3xl shadow-md flex gap-4 items-start relative overflow-hidden flex-1">
              <div className="w-10 h-10 rounded-2xl bg-brand-accent-purple/10 border border-brand-accent-purple/20 flex items-center justify-center text-brand-accent-purple shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-black uppercase text-slate-400 block tracking-widest">
                  Operating Schedule
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Monday - Saturday
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  9:00 AM - 6:00 PM IST <br />
                  <span className="text-[10px] text-slate-400 font-medium">Asynchronous comms 24/7</span>
                </p>
              </div>
            </div>

            {/* Support Card */}
            <div className="glass-card border border-white/20 p-6 rounded-3xl shadow-md flex gap-4 items-start relative overflow-hidden flex-1">
              <div className="w-10 h-10 rounded-2xl bg-brand-accent-cyan/10 border border-brand-accent-cyan/20 flex items-center justify-center text-brand-accent-cyan shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <span className="text-[9px] font-black uppercase text-slate-400 block tracking-widest">
                  Direct Comms
                </span>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-accent-blue" />
                  <a href="mailto:shaktiprasadhota07@gmail.com" className="font-light hover:text-brand-accent-blue transition-colors truncate">
                    shaktiprasadhota07@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[10px] text-brand-accent-purple">GitHub:</span>
                  <a href="https://github.com/shakti69" target="_blank" rel="noopener noreferrer" className="font-light hover:text-brand-accent-purple transition-colors truncate">
                    github.com/shakti69
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Map Embed pointing to Dhenkanal, Odisha, India */}
          <div className="w-full lg:w-2/3 h-[380px] rounded-3xl overflow-hidden glass-card border border-white/25 dark:border-slate-800/80 shadow-lg relative p-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59779.67389146114!2d85.5606497!3d20.6558455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a191f6305a3ca45%3A0x6b87640db7f90c37!2sDhenkanal%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full rounded-2xl border-0 shadow-sm opacity-90 transition-all duration-300 dark:invert-[0.9] dark:hue-rotate-[180deg]"
              allowFullScreen={false} 
              loading="lazy" 
              title="PrimeDev HQ Map Location - Dhenkanal Odisha India"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
export default Location;
