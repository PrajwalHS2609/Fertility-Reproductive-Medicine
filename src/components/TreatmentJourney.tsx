import React, { useState } from 'react';
import { JOURNEY_STEPS } from '../data/fertilityData.ts';
import { Clock, CheckCircle2, AlertCircle, ArrowRight, Lightbulb } from 'lucide-react';

interface TreatmentJourneyProps {
  onOpenBooking: () => void;
}

export const TreatmentJourney: React.FC<TreatmentJourneyProps> = ({
  onOpenBooking
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = JOURNEY_STEPS[activeStepIndex];

  return (
    <section id="journey" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            The Treatment Roadmap
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Guidance and Care at Every Step.
          </h2>
          <p className="text-base text-slate-600 mt-3 font-light">
            While every fertility protocol is customized to the individual or couple, understanding the six core stages of care provides clarity, reduces stress, and fosters confidence.
          </p>
        </div>

        {/* Desktop Horizontal Step Navigation Timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-10 pb-6 border-b border-[#E8E2D9]">
          {JOURNEY_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`text-left p-4 rounded-2xl transition-all cursor-pointer relative ${
                activeStepIndex === idx
                  ? 'bg-white border border-[#0E3B43] shadow-sm ring-1 ring-[#0E3B43]'
                  : 'bg-white/60 hover:bg-white border border-[#E8E2D9]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-serif text-lg font-bold ${
                  activeStepIndex === idx ? 'text-[#0E3B43]' : 'text-slate-400'
                }`}>
                  {step.number}
                </span>
                <span className="text-[10px] font-medium text-slate-500">
                  {step.duration.split(' ')[0]} {step.duration.split(' ')[1]}
                </span>
              </div>
              <div className={`text-xs font-semibold line-clamp-2 ${
                activeStepIndex === idx ? 'text-[#0E3B43]' : 'text-slate-700'
              }`}>
                {step.title.split('&')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Step Pills */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 mb-6 -mx-4 px-4 scrollbar-none">
          {JOURNEY_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-medium transition-all shrink-0 ${
                activeStepIndex === idx
                  ? 'bg-[#0E3B43] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-[#E8E2D9]'
              }`}
            >
              Step {step.number}: {step.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Step Detailed Showcase Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D9] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Overview & Timing */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-serif text-2xl font-bold text-[#C5A059] leading-none">
                  Stage {activeStep.number}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Duration: {activeStep.duration}</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E3B43] mb-4">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-light">
                {activeStep.description}
              </p>

              {/* Patient Preparation Tip */}
              <div className="bg-[#FAF4EB] p-4 rounded-2xl border border-[#EFE2D0]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0E3B43] mb-1">
                  <Lightbulb className="w-4 h-4 text-[#C5A059]" />
                  <span>Care Team Advice for this Stage:</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {activeStep.patientTips}
                </p>
              </div>
            </div>

            {/* Right Column: Key Clinical Milestones */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E8E2D9]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0E3B43] mb-4">
                What Occurs During This Milestone
              </div>

              <div className="space-y-4">
                {activeStep.clinicalDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E2D9] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Step {activeStepIndex + 1} of {JOURNEY_STEPS.length}
                </span>

                <div className="flex items-center gap-2">
                  {activeStepIndex > 0 && (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                      className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-[#DDD5CA] rounded-lg bg-white"
                    >
                      Previous Step
                    </button>
                  )}
                  {activeStepIndex < JOURNEY_STEPS.length - 1 ? (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                      className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-lg flex items-center gap-1.5"
                    >
                      <span>Next: Step 0{activeStepIndex + 2}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenBooking}
                      className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-lg"
                    >
                      Schedule Step 1 Consultation
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Medical disclaimer on variation */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Clinical protocols, timelines, and monitoring intervals vary dynamically based on individualized patient responses and biological markers.
          </span>
        </div>

      </div>
    </section>
  );
};
