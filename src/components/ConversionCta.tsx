import React from 'react';
import { ArrowRight, Phone, CalendarCheck2, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/fertilityData.ts';

interface ConversionCtaProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const ConversionCta: React.FC<ConversionCtaProps> = ({
  onOpenBooking,
  onOpenContact
}) => {
  return (
    <section className="py-20 lg:py-24 bg-[#0E3B43] text-white relative overflow-hidden">
      {/* Subtle organic light reflections */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1A5B67]/50 blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#4A7C59]/30 blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Kicker */}
        <div className="text-xs font-semibold uppercase tracking-widest text-[#E8D8B8] mb-4">
          Compassionate Guidance · Evidence-Based Medicine
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 [text-wrap:balance]">
          Take the First Step Towards Understanding Your Fertility.
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Speak with our fertility specialists to discuss your concerns, understand your options, and plan your next steps with confidence.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wide text-[#0E3B43] bg-white rounded-xl hover:bg-[#FAF8F5] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book a Fertility Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={`tel:${CLINIC_INFO.phoneDirect}`}
            className="w-full sm:w-auto px-7 py-4 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#E8D8B8]" />
            <span>Talk to Our Care Team ({CLINIC_INFO.phone})</span>
          </a>
        </div>

        {/* Reassurance text */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-white/70">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#4A7C59]" />
            <span>No Obligation or Pressure</span>
          </span>
          <span aria-hidden="true" className="text-white/30 hidden sm:inline">·</span>
          <span>In-Person & Telehealth Options</span>
          <span aria-hidden="true" className="text-white/30 hidden sm:inline">·</span>
          <span>100% Confidential Patient Care</span>
        </div>

      </div>
    </section>
  );
};
