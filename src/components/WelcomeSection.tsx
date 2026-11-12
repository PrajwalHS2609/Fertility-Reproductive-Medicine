import React from 'react';
import { ArrowRight, CheckCircle2, Lock, Sparkles, UserCheck } from 'lucide-react';
import { CLINIC_IMAGES } from '../assets/images.ts';

interface WelcomeSectionProps {
  onLearnMore: () => void;
  onOpenBooking: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  onLearnMore,
  onOpenBooking
}) => {
  return (
    <section id="welcome" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Clinic Recovery Lounge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E8E2D9] aspect-4/3 lg:aspect-3/4 relative">
                <img
                  src={CLINIC_IMAGES.clinic}
                  alt="Aura Fertility serene private consultation and recovery lounge with natural oak textures and soft botanical outlook"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B43]/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-widest text-[#E8D8B8] font-medium mb-1">
                    Healing Environment
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                    Designed for Serenity, Privacy & Dignity
                  </h3>
                  <p className="text-xs text-white/90 mt-1">
                    Acoustically insulated private suites eliminating the clinical stress of conventional hospitals.
                  </p>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl border border-[#E8E2D9] shadow-md max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EAF2EC] flex items-center justify-center text-[#4A7C59]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0E3B43]">100% Confidential</div>
                    <p className="text-[11px] text-slate-500">Private corridors & discrete scheduling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introductory Content & Medical Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            {/* Section Tag */}
            <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-3">
              About Aura Fertility & Reproductive Medicine
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Expert Fertility Care with a Personal Touch.
            </h2>

            {/* Intro Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-light">
              Founded on the belief that reproductive medicine must be both scientifically rigorous and deeply compassionate, Aura Fertility brings together world-class reproductive endocrinologists, senior embryologists, and dedicated patient advocates in a peaceful, supportive clinical environment.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              We reject high-pressure quotas and standardized templates. Every diagnostic finding is thoroughly explained, and every treatment plan is tailored to your unique physiology, values, and emotional readiness.
            </p>

            {/* Key Clinical Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0E3B43]">Physician-Led Care</div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your assigned physician conducts your consultations, scans, and procedures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0E3B43]">Advanced Cleanroom Lab</div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    ISO Class 5 embryology laboratory with time-lapse morphokinetic monitoring.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0E3B43]">Transparent Clinical Guidance</div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Clear scientific explanations of odds, timelines, and options without false promises.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0E3B43]">Integrated Emotional Support</div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Licensed reproductive therapists and continuous nurse navigator availability.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8E2D9]">
              <button
                onClick={onLearnMore}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#0E3B43] bg-[#EAE2D7] hover:bg-[#DDD2C4] rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Discover Our Centre</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-xl transition-all cursor-pointer"
              >
                Schedule Initial Visit
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
