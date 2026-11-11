import React from 'react';
import { PageView } from '../types/index.ts';
import { CLINIC_INFO, TREATMENTS } from '../data/fertilityData.ts';
import { ShieldCheck, Phone, Mail, MapPin, Lock, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <footer className="bg-[#09282E] text-slate-300 pt-16 pb-12 border-t border-[#13434C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#144752]">
          
          {/* Col 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0E3B43] font-serif text-lg font-bold">
                A
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  Aura Fertility
                </span>
                <span className="text-[10px] font-sans font-medium text-slate-400 tracking-wider uppercase block mt-0.5">
                  Center for Reproductive Medicine
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              A modern, patient-focused fertility and IVF centre dedicated to evidence-based reproductive healthcare, advanced embryology cleanrooms, and compassionate guidance at every milestone.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{CLINIC_INFO.address.line1}, {CLINIC_INFO.address.city}, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{CLINIC_INFO.phone} · Mon–Fri 7am–6pm</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-semibold text-[#0E3B43] bg-[#E8D8B8] hover:bg-white rounded-lg transition-colors cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Col 3: Treatments Directory */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Treatments
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {TREATMENTS.slice(0, 6).map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onNavigate('treatments')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t.shortName} ({t.name.split('(')[0].trim()})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Centre & Care
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Our IVF Centre
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-white transition-colors">
                  Our Specialists & Faculty
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('facilities')} className="hover:text-white transition-colors">
                  Embryology Cleanroom Lab
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('support')} className="hover:text-white transition-colors">
                  Patient Support & Guidance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">
                  Educational Guides & Articles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Location, Hours & Parking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Accreditations & Standards */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Clinical Accreditations
            </div>
            <ul className="space-y-2 text-[11px] text-slate-400">
              {CLINIC_INFO.accreditations.map((acc, i) => (
                <li key={i} className="flex items-start gap-1.5 leading-snug">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <span>{acc}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-[#C5A059]" />
                <span>HIPAA Encrypted Patient Records</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical Responsibility Disclaimer */}
        <div className="py-6 border-b border-[#144752] text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website is for general educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Fertility treatments and outcomes vary substantially based on individualized biological factors including patient age, ovarian reserve, reproductive history, and specific diagnostic findings. Always seek the advice of a qualified physician or reproductive endocrinologist regarding any medical condition or treatment plan.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Aura Fertility & Reproductive Medicine. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Aura Fertility strictly adheres to HIPAA privacy guidelines. Patient medical records are never disclosed without written consent."); }} className="hover:text-white transition-colors">
              Patient Privacy Policy
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of service for informational website usage and telehealth scheduling."); }} className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Non-Discrimination Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
