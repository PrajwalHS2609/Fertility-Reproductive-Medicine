import React from 'react';
import { Doctor } from '../types/index.ts';
import { X, Award, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  doctor,
  onClose,
  onBookWithDoctor
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#FAF8F5] border border-[#E8E2D9] rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto"
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

        {/* Modal Top Profile Split */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#E8E2D9]">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border border-[#E8E2D9] shadow-sm">
            <img
              src={doctor.image}
              alt={doctor.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#4A7C59] mb-1">
              {doctor.specialization}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E3B43]">
              {doctor.name}
            </h2>
            <div className="text-xs sm:text-sm font-medium text-[#C5A059] mt-0.5">
              {doctor.qualifications}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {doctor.title} · {doctor.experienceYears} Years Clinical Practice
            </p>
          </div>
        </div>

        {/* Biography */}
        <div className="my-6">
          <h3 className="text-xs font-bold text-[#0E3B43] uppercase tracking-wider mb-2">
            Clinical Biography
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
            {doctor.bio}
          </p>
        </div>

        {/* 2-Column: Clinical Focus & Education */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          
          {/* Clinical Focus */}
          <div className="bg-white p-5 rounded-2xl border border-[#E8E2D9]">
            <h4 className="text-xs font-bold text-[#0E3B43] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#4A7C59]" />
              <span>Areas of Clinical Focus</span>
            </h4>
            <ul className="space-y-2">
              {doctor.clinicalFocus.map((focus, i) => (
                <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                  <span className="text-[#4A7C59] font-bold">•</span>
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education & Fellowships */}
          <div className="bg-white p-5 rounded-2xl border border-[#E8E2D9]">
            <h4 className="text-xs font-bold text-[#0E3B43] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#0E3B43]" />
              <span>Medical Training & Fellowships</span>
            </h4>
            <ul className="space-y-2">
              {doctor.education.map((edu, i) => (
                <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                  <span className="text-[#C5A059] font-bold">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Professional Memberships */}
        <div className="bg-[#FAF4EB] p-4 rounded-xl border border-[#EFE2D0] mb-6">
          <div className="text-xs font-bold text-[#0E3B43] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#C5A059]" />
            <span>Professional Societies & Certifications</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
            {doctor.memberships.map((mem, i) => (
              <span key={i} className="after:content-['·'] after:ml-4 last:after:content-none text-slate-700">
                {mem}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D9]">
          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
          >
            Close Profile
          </button>
          <button
            onClick={() => {
              onClose();
              onBookWithDoctor(doctor.name);
            }}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-xl transition-all flex items-center gap-2"
          >
            <span>Book with {doctor.name.split(' ')[1]}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
