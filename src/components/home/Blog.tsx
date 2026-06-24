import React, { useState } from 'react';
import { Search, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { blogData } from '../../data/blog';

type BlogCategory = 'all' | 'coding' | 'design' | 'cloud' | 'business';

export const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Map categories to labels
  const getCategoryLabel = (cat: BlogCategory) => {
    switch (cat) {
      case 'all': return 'All Posts';
      case 'coding': return 'Software Engineering';
      case 'design': return 'UI/UX Design';
      case 'cloud': return 'Cloud & DevOps';
      case 'business': return 'SaaS Strategy';
    }
  };

  const filteredArticles = blogData.filter((art) => {
    const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      art.titles[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpts[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Find featured post if category is all and search is empty
  const featuredPost = activeCategory === 'all' && searchQuery.trim() === ''
    ? blogData.find(art => art.isFeatured)
    : null;

  // Filter out featured post from grid lists
  const gridArticles = featuredPost
    ? filteredArticles.filter(art => art.id !== featuredPost.id)
    : filteredArticles;

  return (
    <section id="blog" className="w-full py-20 bg-slate-50/50 dark:bg-brand-dark/20 border-t border-b border-slate-200/40 dark:border-slate-850/40 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 text-[10px] font-extrabold rounded-full bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20 uppercase tracking-widest">
            {t('nav.blog')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Latest Insights
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple mx-auto rounded-full mt-2" />
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white/40 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 p-4 rounded-3xl backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 order-2 md:order-1">
            {(['all', 'coding', 'design', 'cloud', 'business'] as BlogCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-brand-accent-blue border-brand-accent-blue text-white shadow-sm'
                    : 'bg-transparent border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72 order-1 md:order-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl py-2 pl-9 pr-4 text-xs outline-none focus:ring-1 focus:ring-brand-accent-blue transition-all"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Featured Post Card (Horizontal) */}
        {featuredPost && (
          <div 
            onClick={() => alert(`Navigating to ${featuredPost.titles.en}`)}
            className="glass-card rounded-3xl overflow-hidden border border-slate-200/40 dark:border-slate-800/60 shadow-lg cursor-pointer hover:shadow-xl dark:hover:shadow-brand-accent-blue/5 hover:-translate-y-0.5 transition-all duration-300 flex flex-col lg:flex-row items-stretch group"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto relative overflow-hidden shrink-0 min-h-[250px]">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.titles[language]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-xl bg-brand-accent-blue text-white text-[9px] font-black uppercase tracking-wider shadow-sm">
                Featured
              </div>
            </div>
            
            {/* Body */}
            <div className="p-8 lg:w-1/2 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[9px] font-black uppercase text-brand-accent-blue tracking-widest block">
                  {getCategoryLabel(featuredPost.category)}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {featuredPost.titles[language]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {featuredPost.excerpts[language]}
                </p>
              </div>

              {/* Author & Read Time footer */}
              <div className="flex justify-between items-center border-t border-slate-200/50 dark:border-slate-800/50 pt-4">
                <div className="flex items-center gap-2">
                  <img 
                    src={featuredPost.author.image} 
                    alt={featuredPost.author.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-slate-900 dark:text-white block">{featuredPost.author.name}</span>
                    <span className="text-[8px] text-slate-400 block">{featuredPost.author.role}</span>
                  </div>
                </div>
                
                <span className="text-[9px] text-slate-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTimes[language]}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Grid List */}
        {gridArticles.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-850 rounded-3xl text-slate-400">
            <p className="text-xs font-semibold">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {gridArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => alert(`Navigating to ${art.titles.en}`)}
                className="glass-card rounded-3xl overflow-hidden border border-slate-200/40 dark:border-slate-800/60 shadow-lg cursor-pointer hover:shadow-xl dark:hover:shadow-brand-accent-blue/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0">
                  <img 
                    src={art.image} 
                    alt={art.titles[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider border border-white/10">
                    {art.category}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[8px] font-black uppercase text-brand-accent-blue tracking-widest block">
                      {getCategoryLabel(art.category)}
                    </span>
                    <h4 className="font-extrabold text-sm text-slate-900 dark:text-white leading-snug group-hover:text-brand-accent-blue transition-colors">
                      {art.titles[language]}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-light line-clamp-2">
                      {art.excerpts[language]}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center border-t border-slate-200/50 dark:border-slate-800/50 pt-3">
                    <div className="flex items-center gap-1.5">
                      <img 
                        src={art.author.image} 
                        alt={art.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-[9px] font-bold text-slate-900 dark:text-white">{art.author.name}</span>
                    </div>
                    
                    <span className="text-[8px] text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTimes[language]}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
export default Blog;
