import React from 'react';
import { X, Check, HelpCircle, ArrowRight } from 'lucide-react';

interface TreatmentCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const TreatmentCompareModal: React.FC<TreatmentCompareModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#FAF8F5] border border-[#E8E2D9] rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto"
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

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A7C59] mb-1">
            Clinical Decision Guide
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E3B43] tracking-tight">
            Comparing Fertility Pathways: IUI vs. IVF vs. ICSI
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-light">
            Understand the biological mechanisms, invasiveness, timeframes, and primary clinical indications to discuss with your specialist.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-[#E8E2D9] rounded-2xl bg-white mb-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#F5EFE8] border-b border-[#E8E2D9]">
                <th className="p-4 font-semibold text-[#0E3B43] w-1/4">Key Clinical Parameter</th>
                <th className="p-4 font-semibold text-[#4A7C59] w-1/4">IUI (Intrauterine Insemination)</th>
                <th className="p-4 font-semibold text-[#0E3B43] w-1/4">IVF (In Vitro Fertilization)</th>
                <th className="p-4 font-semibold text-[#C5A059] w-1/4">ICSI (Specialized Micromanipulation)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E2D9] text-slate-700">
              <tr>
                <td className="p-4 font-medium bg-[#FAF8F5]">Where Fertilization Occurs</td>
                <td className="p-4">Internally, inside the woman's fallopian tube</td>
                <td className="p-4">Externally, inside an embryology cleanroom dish</td>
                <td className="p-4">Externally, single sperm micro-injected into egg</td>
              </tr>
              <tr>
                <td className="p-4 font-medium bg-[#FAF8F5]">Invasiveness & Sedation</td>
                <td className="p-4">Non-invasive, no anesthesia or sedation required</td>
                <td className="p-4">Mild sedation outpatient egg retrieval (20 min)</td>
                <td className="p-4">Same retrieval procedure as standard IVF</td>
              </tr>
              <tr>
                <td className="p-4 font-medium bg-[#FAF8F5]">Ovarian Stimulation</td>
                <td className="p-4">Natural cycle or mild oral medication (1–2 follicles)</td>
                <td className="p-4">Injectable gonadotropins (cohort of multiple follicles)</td>
                <td className="p-4">Injectable gonadotropins (identical to IVF protocol)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium bg-[#FAF8F5]">Tubal Health Requirement</td>
                <td className="p-4">Mandatory at least one open, confirmed fallopian tube</td>
                <td className="p-4">Bypasses tubes completely; suitable for blocked tubes</td>
                <td className="p-4">Bypasses tubes completely</td>
              </tr>
              <tr>
                <td className="p-4 font-medium bg-[#FAF8F5]">Primary Indications</td>
                <td className="p-4">Mild male factor, donor sperm, unexplained in under-35</td>
                <td className="p-4">Tubal blockages, endometriosis, age factor, prior IUI</td>
                <td className="p-4">Severe sperm count/motility deficits, surgical sperm</td>
              </tr>
              <tr>
                <td className="p-4 font-medium bg-[#FAF8F5]">Cycle Duration</td>
                <td className="p-4">Approx. 2 weeks (timed with ovulation)</td>
                <td className="p-4">Approx. 4 to 6 weeks from stimulation to test</td>
                <td className="p-4">Approx. 4 to 6 weeks (integrated within IVF)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium bg-[#FAF8F5]">Genetic Screening (PGT)</td>
                <td className="p-4 text-slate-400">Not possible (fertilization is internal)</td>
                <td className="p-4">Eligible for blastocyst trophectoderm biopsy</td>
                <td className="p-4">Highly recommended pairing with PGT-A/M</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Disclaimer Note */}
        <div className="bg-[#FAF4EB] p-4 rounded-xl border border-[#EFE2D0] mb-6 flex items-start gap-2.5 text-xs text-slate-700">
          <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <span>
            <strong>Clinical Responsibility Notice:</strong> Treatment selection must be grounded strictly in personal medical evaluations including antral follicle counts, anti-Müllerian hormone (AMH), tubal patency tests, and comprehensive semen analysis. No single treatment is universally superior.
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8E2D9]">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close Guide
          </button>
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-xl transition-all flex items-center gap-2"
          >
            <span>Discuss Options with a Doctor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
