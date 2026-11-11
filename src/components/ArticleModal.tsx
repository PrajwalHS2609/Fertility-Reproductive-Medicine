import React from 'react';
import { ResourceArticle } from '../types/index.ts';
import { X, Clock, Calendar, ShieldCheck, Share2, Printer } from 'lucide-react';

interface ArticleModalProps {
  article: ResourceArticle | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookConsultation
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#FAF8F5] border border-[#E8E2D9] rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl max-h-[92vh] overflow-y-auto"
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

        {/* Metadata Line */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <span className="font-semibold text-[#4A7C59]">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.readTime}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedDate}</span>
        </div>

        {/* Article Title */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E3B43] tracking-tight leading-snug mb-4">
          {article.title}
        </h2>

        {/* Clinical Reviewer Banner */}
        <div className="bg-[#FAF4EB] p-3.5 rounded-xl border border-[#EFE2D0] mb-8 flex items-center justify-between text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Medically reviewed by: <strong>{article.reviewedBy}</strong></span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Aura Clinical Editorial Board</span>
        </div>

        {/* Article Body Content */}
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light mb-8">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Published for patient education and informational guidance only.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Back to Resources
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-xl transition-all"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
