import React, { useState } from 'react';
import { TREATMENTS } from '../data/fertilityData.ts';
import { Treatment } from '../types/index.ts';
import { ArrowRight, Sparkles, Scale, Check, ChevronRight } from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenCompare: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onOpenCompare
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Services (10)' },
    { id: 'core', label: 'Core Programs (IVF & IUI)' },
    { id: 'advanced-lab', label: 'Advanced Embryology & ICSI' },
    { id: 'preservation', label: 'Egg & Embryo Freezing' },
    { id: 'evaluation', label: 'Diagnostic Evaluations' },
  ];

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#F4EFEA] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
              Advanced Clinical Offerings
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
              Comprehensive Fertility Treatments Designed Around You.
            </h2>
            <p className="text-base text-slate-600 mt-3 font-light">
              From gentle first-line ovulatory support to cutting-edge blastocyst culture and vitrification, every treatment is grounded in medical integrity and personalized care.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCompare}
              className="px-4 py-2.5 text-xs font-semibold text-[#0E3B43] bg-white border border-[#DDD5CA] rounded-xl hover:bg-[#FAF8F5] transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Scale className="w-4 h-4 text-[#C5A059]" />
              <span>Compare IVF vs. IUI vs. ICSI</span>
            </button>
          </div>
        </div>

        {/* Interactive Segmented Filter Control */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E2DAD0]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#0E3B43] text-white shadow-xs'
                  : 'bg-white/70 text-slate-700 hover:bg-white hover:text-[#0E3B43] border border-[#E8E2D9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Varied Editorial Layout: Featured Marquee Card for IVF + Asymmetric Grid for others */}
        <div className="space-y-6">
          
          {/* Featured Marquee Service Card (When 'all' or 'core' active) */}
          {(activeCategory === 'all' || activeCategory === 'core') && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D9] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#0E3B43]">Flagship Treatment</span>
                  <span aria-hidden="true">·</span>
                  <span>Individualized Stimulation Protocols</span>
                  <span aria-hidden="true">·</span>
                  <span>4–6 Week Timeline</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E3B43] mb-3">
                  In Vitro Fertilization (IVF)
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-light">
                  Aura's hallmark IVF program combines gentle, precision-dosed ovarian stimulation with continuous time-lapse morphokinetic monitoring. Designed to optimize follicle yield while minimizing medication side effects and preventing hyperstimulation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Mild-dose gonadotropin tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Private outpatient retrieval suites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>ISO Class 5 cleanroom blastocyst culture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Optional PGT-A genetic screening</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onSelectTreatment(TREATMENTS[0])}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Full Clinical Pathway & Indications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-slate-500">Board certified REI oversight</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8E2D9]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0E3B43] mb-3">
                  Key Diagnostic Indications
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {TREATMENTS[0].indications.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C5A059] font-bold">•</span>
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Differentiated Editorial Grid for remaining treatments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments
              .filter(t => activeCategory !== 'all' || t.id !== 'ivf')
              .map((treatment) => (
                <div
                  key={treatment.id}
                  className="bg-white rounded-2xl p-6 border border-[#E8E2D9] hover:border-[#C5A059] transition-all hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    {/* Header line without pill badge */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="text-[#4A7C59] font-medium uppercase tracking-wider text-[11px]">
                        {treatment.category.replace('-', ' ')}
                      </span>
                      <span>{treatment.typicalTimeline.split(' ')[0]} {treatment.typicalTimeline.split(' ')[1]}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0E3B43] mb-2 group-hover:text-[#4A7C59] transition-colors">
                      {treatment.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 font-light">
                      {treatment.overview}
                    </p>

                    <div className="pt-3 border-t border-[#F2EDE7] mb-4">
                      <div className="text-[11px] font-semibold text-slate-700 mb-1.5">
                        Clinical Focus:
                      </div>
                      <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                        {treatment.indications.slice(0, 2).join(' · ')}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => onSelectTreatment(treatment)}
                      className="text-xs font-semibold text-[#0E3B43] group-hover:text-[#4A7C59] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Explore Treatment</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-[11px] text-slate-400">
                      {treatment.shortName}
                    </span>
                  </div>
                </div>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
};
