import React from 'react';
import { ArrowRight, ShieldCheck, Microscope, HeartHandshake, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExploreTreatments
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8E2D9]">
      {/* Background subtle organic gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#EAE2D7]/60 via-[#E4F0F0]/40 to-transparent blur-3xl -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#F9F0F0]/50 via-transparent to-transparent blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Split Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Copy & Core Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-6">
            
            {/* Clean unboxed kicker with dot separator (NO PILLS) */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#4A7C59] tracking-wide mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-[#4A7C59]" />
              <span>Center for Advanced Reproductive Medicine</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600">San Francisco Medical District</span>
            </div>

            {/* Headline with balanced wrapping */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E3B43] leading-[1.12] mb-6 [text-wrap:balance]">
              Your Journey to Parenthood Deserves Expert Care.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-light">
              Personalized fertility care, advanced reproductive treatments, and compassionate guidance at every step of your journey.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 text-sm font-semibold tracking-wide text-white bg-[#0E3B43] rounded-xl hover:bg-[#09282E] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Book a Fertility Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreTreatments}
                className="px-6 py-4 text-sm font-medium text-[#0E3B43] bg-[#F4EFEA] hover:bg-[#EDE5DC] border border-[#DDD5CA] rounded-xl transition-all flex items-center justify-center cursor-pointer"
              >
                Explore Our Treatments
              </button>
            </div>

            {/* Trust statement: unboxed text with typographic separators */}
            <div className="pt-6 border-t border-[#EAE2D7] flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-slate-600">
              <span className="text-[#0E3B43] font-semibold">Expert Fertility Care</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span className="text-[#0E3B43] font-semibold">Advanced Treatment Options</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span className="text-[#0E3B43] font-semibold">Personalized Patient Support</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] rounded-3xl overflow-hidden shadow-xl border border-[#E8E2D9] relative group">
              <img
                src="/src/assets/images/hero_fertility_consultation_1794392485347.jpg"
                alt="Fertility specialist physician consulting attentively with a couple in a sunlit modern clinical office"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />
              
              {/* Subtle bottom gradient scrim for visual groundedness */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none" />

              {/* Dignified floating card overlay at bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="font-semibold text-[#0E3B43]">Dr. Evelyn Vance & Care Team</span>
                  <span>Board Certified REI</span>
                </div>
                <p className="text-xs text-slate-700 leading-snug">
                  Unrushed 60-minute diagnostic evaluations focused on clinical clarity, gentle guidance, and patient dignity.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Clinical KPI / Trust Strip below Hero Split (Section Math §5.13) */}
        <div className="mt-14 pt-10 border-t border-[#E8E2D9] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] flex items-center justify-center shrink-0 text-[#4A7C59]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0E3B43]">SART & CAP Accredited</div>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Adhering to verified national clinical safety and laboratory benchmarks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#E4F0F0] flex items-center justify-center shrink-0 text-[#0E3B43]">
              <Microscope className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0E3B43]">ISO Class 5 Cleanroom Lab</div>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Closed-system time-lapse incubation and precision micromanipulation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F9F4EB] flex items-center justify-center shrink-0 text-[#C5A059]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0E3B43]">Tailored Stimulation</div>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Zero one-size-fits-all protocols; individualized to AMH and physiology.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F6EBEB] flex items-center justify-center shrink-0 text-[#B87D7D]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0E3B43]">Dedicated Nurse Navigator</div>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Direct phone and message contact with your primary clinical coordinator.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
