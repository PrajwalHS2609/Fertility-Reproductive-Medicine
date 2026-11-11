import React from 'react';
import { TESTIMONIALS } from '../data/fertilityData.ts';
import { Quote, ShieldCheck, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F4EFEA] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            Patient Voices
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Stories of Care, Trust, and Support.
          </h2>
          <p className="text-base text-slate-600 mt-3 font-light">
            Reflections from individuals and couples who entrusted their care to our clinical team. Shared with permission and privacy considerations.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D9] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 pb-4 border-b border-[#F2EDE7] mb-4">
                  <span className="font-semibold text-[#0E3B43]">{item.treatment}</span>
                  <span>{item.verifiedYear}</span>
                </div>

                <Quote className="w-8 h-8 text-[#C5A059]/40 mb-3" />

                <blockquote className="font-serif text-lg sm:text-xl font-bold text-[#0E3B43] leading-snug mb-3">
                  "{item.quote}"
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-6">
                  {item.story}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2EDE7] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center font-serif text-xs font-bold text-[#0E3B43]">
                    {item.initials.split(' ')[0]}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0E3B43]">{item.patientName}</div>
                    <div className="text-[11px] text-slate-400">Consent Verified Patient Feedback</div>
                  </div>
                </div>

                <Heart className="w-4 h-4 text-[#B87D7D]" />
              </div>
            </div>
          ))}
        </div>

        {/* Medical Integrity & Privacy Notice */}
        <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] max-w-3xl mx-auto text-center text-xs text-slate-500 leading-relaxed">
          <strong>Medical Transparency Disclaimer:</strong> Patient experiences reflect individual care reflections and should never be interpreted as guarantees of clinical outcome. Reproductive success depends upon distinct biological factors including age, ovarian reserve, genetic considerations, and individualized medical history.
        </div>

      </div>
    </section>
  );
};
