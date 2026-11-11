import React from 'react';
import { Treatment } from '../types/index.ts';
import { X, CheckCircle2, Clock, Calendar, HelpCircle, ArrowRight } from 'lucide-react';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookConsultation: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookConsultation
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#FAF8F5] border border-[#E8E2D9] rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-[#EAE2D7] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A7C59] mb-1">
            Clinical Service Profile · {treatment.category.toUpperCase()}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E3B43] tracking-tight">
            {treatment.name}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-light">
            {treatment.tagline}
          </p>
        </div>

        {/* Overview Box */}
        <div className="bg-white p-5 rounded-2xl border border-[#E8E2D9] mb-6">
          <h3 className="text-xs font-bold text-[#0E3B43] uppercase tracking-wider mb-2">
            Clinical Overview
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            {treatment.overview}
          </p>
        </div>

        {/* 2-Column Indications & Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Indications */}
          <div className="bg-[#F6F4F0] p-5 rounded-2xl border border-[#E8E2D9]">
            <h4 className="text-xs font-bold text-[#0E3B43] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#4A7C59]" />
              <span>Who May Benefit</span>
            </h4>
            <ul className="space-y-2.5">
              {treatment.indications.map((ind, i) => (
                <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                  <span className="text-[#4A7C59] font-bold mt-0.5">•</span>
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Protocol Steps */}
          <div className="bg-white p-5 rounded-2xl border border-[#E8E2D9]">
            <h4 className="text-xs font-bold text-[#0E3B43] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0E3B43]" />
              <span>Key Clinical Milestones</span>
            </h4>
            <ul className="space-y-2.5">
              {treatment.clinicalSteps.map((step, i) => (
                <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                  <span className="text-xs font-semibold text-[#0E3B43] mt-0.5">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Timeline & Important Considerations */}
        <div className="bg-[#FAF4EB] p-4 rounded-xl border border-[#EFE2D0] mb-6 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0E3B43]">
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>Typical Timeline:</span>
            <span className="font-normal text-slate-700">{treatment.typicalTimeline}</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-slate-600">
            <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <span>{treatment.considerations}</span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8E2D9]">
          <div className="text-xs text-slate-500">
            Medically reviewed by Aura Board Certified Reproductive Specialists.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onBookConsultation(treatment.name);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>Consult on {treatment.shortName}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
