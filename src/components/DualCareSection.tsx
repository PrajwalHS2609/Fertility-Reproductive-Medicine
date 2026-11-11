import React from 'react';
import { Heart, Activity, Check, ShieldCheck, ArrowRight } from 'lucide-react';

interface DualCareSectionProps {
  onOpenBooking: () => void;
}

export const DualCareSection: React.FC<DualCareSectionProps> = ({
  onOpenBooking
}) => {
  const femaleCarePoints = [
    { title: 'Ovulation & Menstrual Cycles', desc: 'Investigating irregular, painful, or absent cycles to optimize endocrine balance.' },
    { title: 'PCOS & Metabolic Health', desc: 'Targeted protocols addressing insulin dynamics and folliculogenesis.' },
    { title: 'Endometriosis & Pelvic Factors', desc: 'Specialized fertility-preserving protocols for ovarian and peritoneal endometriosis.' },
    { title: 'Ovarian Reserve (AMH & AFC)', desc: 'Objective biological reserve assessments establishing realistic stimulation targets.' },
    { title: 'Uterine Architecture & Lining', desc: '3D saline-infusion sonography to ensure an optimal endometrial environment.' },
    { title: 'Age-Related Reproductive Planning', desc: 'Evidence-based guidance on preserving oocyte potential at every life stage.' },
  ];

  const maleCarePoints = [
    { title: 'Comprehensive Semen Diagnostics', desc: 'WHO 6th Edition automated semen analysis of count, progressive motility, and morphology.' },
    { title: 'Sperm DNA Fragmentation (DFI)', desc: 'Advanced epigenetic testing to detect structural DNA integrity and oxidative damage.' },
    { title: 'Reproductive Endocrine Profiling', desc: 'Evaluating testosterone, LH, FSH, and prolactin to identify reversible hormonal blocks.' },
    { title: 'Clinical Varicocele Management', desc: 'Consultation on physical factors and microsurgical repair when indicated.' },
    { title: 'Surgical Retrieval Options', desc: 'Micro-TESE and PESA surgical protocols performed in tandem with embryology.' },
    { title: 'Nutraceutical & Lifestyle Protocols', desc: 'Targeted antioxidant strategies to support the 90-day spermatogenic cycle.' },
  ];

  return (
    <section id="dual-care" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            Inclusive Diagnostics
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Fertility Care Begins with Understanding Both Partners.
          </h2>
          <p className="text-base text-slate-600 mt-3 font-light">
            Conception is a collaborative biological journey. We provide respectful, comprehensive evaluation for men, women, and couples without placing disproportionate burden or blame on either partner.
          </p>
        </div>

        {/* Balanced Two-Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Female Fertility Care Panel */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F2EDE7] mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#B87D7D]">
                    Female Reproductive Health
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0E3B43] mt-0.5">
                    Female Fertility Care
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F6EBEB] flex items-center justify-center text-[#B87D7D]">
                  <Heart className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {femaleCarePoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#B87D7D] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0E3B43]">{item.title}</div>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2EDE7] flex items-center justify-between">
              <span className="text-xs text-slate-500">Board-certified REI clinicians</span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold text-[#0E3B43] hover:text-[#B87D7D] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Book Female Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Male Fertility Care Panel */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F2EDE7] mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#4A7C59]">
                    Andrology & Male Health
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0E3B43] mt-0.5">
                    Male Fertility Care
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EAF2EC] flex items-center justify-center text-[#4A7C59]">
                  <Activity className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {maleCarePoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0E3B43]">{item.title}</div>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2EDE7] flex items-center justify-between">
              <span className="text-xs text-slate-500">On-site CASA Andrology Lab</span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold text-[#0E3B43] hover:text-[#4A7C59] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Book Male Semen Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
