import React from 'react';
import { HeartHandshake, PhoneCall, ShieldCheck, Clock, FileText, UserCheck } from 'lucide-react';

interface PatientSupportSectionProps {
  onOpenBooking: () => void;
}

export const PatientSupportSection: React.FC<PatientSupportSectionProps> = ({
  onOpenBooking
}) => {
  const supportPillars = [
    {
      icon: UserCheck,
      title: 'Dedicated Nurse Coordinator',
      desc: 'From day one, you are assigned a primary nurse who knows your protocol intimately, manages your medication tracking, and answers clinical questions directly.'
    },
    {
      icon: HeartHandshake,
      title: 'Reproductive Mental Health Counseling',
      desc: 'Fertility treatment involves profound emotional milestones. Our licensed reproductive psychologists provide private counseling for individuals and couples.'
    },
    {
      icon: Clock,
      title: 'On-Call Evening & Weekend Nurse Line',
      desc: 'Have an urgent injection query at 9 PM on a Saturday? Our clinical triage team is on call to provide immediate clarification whenever needed.'
    },
    {
      icon: FileText,
      title: 'Financial Clarity & Advocacy',
      desc: 'A dedicated financial counselor breaks down diagnostic and laboratory costs in advance with zero surprise bills, assisting with insurance verification and financing programs.'
    },
    {
      icon: ShieldCheck,
      title: 'Strict Patient Privacy & Discrete Scheduling',
      desc: 'Our private check-ins, separate recovery rooms, and encrypted records ensure complete dignity and discretion for public figures and private individuals alike.'
    },
    {
      icon: PhoneCall,
      title: 'Hands-On Medication Teaching',
      desc: 'Receive in-person, one-on-one demonstrations with your nurse coordinator until you feel 100% confident self-administering any prescribed medication.'
    }
  ];

  return (
    <section id="support" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            Patient-Centred Philosophy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Because Your Fertility Journey Is Personal.
          </h2>
          <p className="text-base text-slate-600 mt-3 font-light">
            We understand that fertility care is not merely a sequence of clinical procedures—it is an intensely personal life chapter that calls for emotional warmth, psychological safety, and continuous reassurance.
          </p>
        </div>

        {/* 6-Card Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {supportPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E8E2D9] hover:border-[#4A7C59] transition-all flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#4A7C59] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0E3B43] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Warm Support Banner */}
        <div className="bg-[#FAF4EB] rounded-3xl p-8 sm:p-10 border border-[#EFE2D0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0E3B43] mb-2">
              Speak with Our Patient Care Team Today
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you have questions about scheduling, emotional counseling, or what your first appointment involves, our coordinators are here to listen without pressure.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-xl transition-all shadow-xs shrink-0 cursor-pointer"
          >
            Connect with a Patient Coordinator
          </button>
        </div>

      </div>
    </section>
  );
};
