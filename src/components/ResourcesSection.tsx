import React, { useState } from 'react';
import { ARTICLES } from '../data/fertilityData.ts';
import { ResourceArticle } from '../types/index.ts';
import { BookOpen, Clock, ChevronRight, ShieldCheck } from 'lucide-react';

interface ResourcesSectionProps {
  onSelectArticle: (article: ResourceArticle) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  onSelectArticle
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Articles (6)' },
    { id: 'Treatment Guides', label: 'Treatment Guides' },
    { id: 'Comparative Analysis', label: 'Comparative Analysis' },
    { id: 'Fertility Preservation', label: 'Preservation' },
    { id: 'Male Reproductive Health', label: 'Male Health' },
  ];

  const filteredArticles = selectedFilter === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedFilter);

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            Educational Center
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Understand Fertility. Make Informed Decisions.
          </h2>
          <p className="text-base text-slate-600 mt-3 font-light">
            Evidence-based educational guides authored and medically reviewed by our clinical faculty to help you navigate options with scientific clarity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E8E2D9]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-[#0E3B43] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-[#F2EDE7] border border-[#E8E2D9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-2xl p-6 border border-[#E8E2D9] hover:border-[#C5A059] transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="text-[#4A7C59] font-medium text-[11px] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0E3B43] mb-3 group-hover:text-[#4A7C59] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2EDE7]">
                <div className="text-[11px] text-slate-500 mb-2 truncate">
                  Reviewed by: {article.reviewedBy.split(',')[0]}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0E3B43] group-hover:text-[#4A7C59] flex items-center gap-1">
                    <span>Read Guide</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-[#0E3B43] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
