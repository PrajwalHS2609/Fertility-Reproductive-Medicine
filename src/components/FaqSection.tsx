import React, { useState } from 'react';
import { FAQS } from '../data/fertilityData.ts';
import { ChevronDown, Search, HelpCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/fertilityData.ts';

export const FaqSection: React.FC = () => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Questions (12)' },
    { id: 'General', label: 'General & Overview' },
    { id: 'Procedures', label: 'Treatments & Lab' },
    { id: 'Evaluation', label: 'Testing & Diagnostics' },
    { id: 'Logistics', label: 'Appointments & Logistics' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F4EFEA] border-t border-[#E8E2D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            Clinical FAQs
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-light">
            Answers to common clinical, procedural, and scheduling questions. Prepared to provide transparent information without substituting for personal medical advice.
          </p>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fertility questions (e.g., egg freezing, timeline, IUI, semen analysis)..."
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white border border-[#E8E2D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3B43] shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0E3B43] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-[#FAF8F5] border border-[#E8E2D9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E8E2D9] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span className="font-serif text-base sm:text-lg font-bold text-[#0E3B43]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0E3B43]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-[#F2EDE7] bg-[#FAF8F5]/40 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#E8E2D9] text-xs text-slate-500">
              No matching questions found. Try searching another keyword or reach out directly to our patient coordinators.
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-xs font-semibold text-[#0E3B43]">Have an unanswered question?</div>
            <p className="text-xs text-slate-500 mt-0.5">Our patient coordinators are happy to assist with any procedural details.</p>
          </div>
          <a
            href={`tel:${CLINIC_INFO.phoneDirect}`}
            className="px-4 py-2 text-xs font-semibold text-[#0E3B43] bg-[#F4EFEA] hover:bg-[#EAE2D7] rounded-lg transition-colors flex items-center gap-2 shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#4A7C59]" />
            <span>Call Coordinator</span>
          </a>
        </div>

      </div>
    </section>
  );
};
