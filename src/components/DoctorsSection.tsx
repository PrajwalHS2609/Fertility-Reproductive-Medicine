import React from 'react';
import { DOCTORS } from '../data/fertilityData.ts';
import { Doctor } from '../types/index.ts';
import { ArrowRight, ChevronRight, Stethoscope } from 'lucide-react';

interface DoctorsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onSelectDoctor,
  onBookWithDoctor
}) => {
  return (
    <section id="specialists" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            Clinical Leadership
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Experienced Specialists Who Understand Your Journey.
          </h2>
          <p className="text-base text-slate-600 mt-3 font-light">
            Our multi-disciplinary team brings together board-certified reproductive endocrinologists, certified high-complexity embryologists, and male fertility urologists dedicated to clinical clarity and compassionate care.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl p-5 border border-[#E8E2D9] hover:border-[#C5A059] transition-all hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Portrait */}
                <div className="relative rounded-2xl overflow-hidden aspect-4/5 mb-5 border border-[#E8E2D9] bg-[#F4EFEA]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[11px] font-medium text-[#E8D8B8]">
                      {doctor.experienceYears} Years Experience
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-xs font-semibold text-[#4A7C59] mb-1">
                  {doctor.specialization}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0E3B43] mb-1 group-hover:text-[#4A7C59] transition-colors">
                  {doctor.name}
                </h3>
                <div className="text-xs text-[#C5A059] font-medium mb-3">
                  {doctor.qualifications}
                </div>

                {/* Focus Areas */}
                <div className="space-y-1 pt-3 border-t border-[#F2EDE7] mb-4">
                  <div className="text-[11px] font-semibold text-slate-700">
                    Key Clinical Focus:
                  </div>
                  {doctor.clinicalFocus.slice(0, 2).map((focus, idx) => (
                    <div key={idx} className="text-xs text-slate-500 flex items-start gap-1.5 leading-snug">
                      <span className="text-[#4A7C59] mt-0.5">•</span>
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-3 border-t border-[#F2EDE7] flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectDoctor(doctor)}
                  className="text-xs font-semibold text-[#0E3B43] hover:text-[#4A7C59] transition-colors cursor-pointer flex items-center gap-0.5"
                >
                  <span>Credentials</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onBookWithDoctor(doctor.name)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-lg transition-all cursor-pointer"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Physician Oversight Statement */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4EFEA] border border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EAE2D7] flex items-center justify-center text-[#0E3B43] shrink-0">
              <Stethoscope className="w-4 h-4" />
            </div>
            <span>
              All patient monitoring, diagnostic reviews, and surgical retrievals are strictly conducted by licensed reproductive specialists, not unsupervised assistants.
            </span>
          </div>
          <span className="shrink-0 font-semibold text-[#0E3B43]">
            SART & ASRM Clinical Practice Standards
          </span>
        </div>

      </div>
    </section>
  );
};
