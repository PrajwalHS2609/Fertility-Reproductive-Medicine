import React from 'react';
import { Microscope, Award, Stethoscope, Lock, Users, Activity, Heart, CalendarCheck2 } from 'lucide-react';
import { CLINIC_IMAGES } from '../assets/images.ts';

export const WhyChooseUs: React.FC = () => {
  const strengths = [
    {
      icon: Stethoscope,
      title: 'Board Certified Reproductive Specialists',
      desc: 'All medical decisions, consultations, ultrasound scans, and egg retrievals are personally guided by certified Reproductive Endocrinology & Infertility (REI) physicians.'
    },
    {
      icon: Microscope,
      title: 'High-Complexity Embryology Cleanroom',
      desc: 'Our on-site laboratory holds CAP accreditation and CLIA certification with multi-chamber time-lapse incubators and precision sub-micron micromanipulation.'
    },
    {
      icon: Activity,
      title: 'Individualized Protocol Engineering',
      desc: 'We reject batch-scheduling and standardized medication charts. Every stimulation protocol is calibrated to your anti-Müllerian hormone and antral count.'
    },
    {
      icon: Lock,
      title: 'Dignity, Discretion & Privacy',
      desc: 'Private corridors, dedicated recovery suites, and secure, encrypted health records ensure your fertility journey remains entirely confidential.'
    },
    {
      icon: Users,
      title: 'Dedicated Nurse Navigator',
      desc: 'You are paired with a designated fertility nurse coordinator who manages your daily calendar, medications, and questions with direct accessibility.'
    },
    {
      icon: Heart,
      title: 'Transparent, Pressure-Free Guidance',
      desc: 'We provide honest, evidence-based assessments without fabricated success promises or pressure toward expensive, unnecessary interventions.'
    }
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            The Aura Difference
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Advanced Fertility Care. Compassionate Support. Personalized Attention.
          </h2>
          <p className="text-base text-slate-600 mt-3 font-light">
            Reproductive healthcare is among the most sensitive decisions of your life. Here is how our clinical philosophy and technological infrastructure support you.
          </p>
        </div>

        {/* Asymmetric Composition: Specialist Spotlight + 6-Grid Clinical Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Specialist Editorial Card with Portrait */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 mb-6 border border-[#E8E2D9]">
                <img
                  src={CLINIC_IMAGES.doctor}
                  alt="Dr. Evelyn Vance, Medical Director & Chief Reproductive Endocrinologist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-serif text-lg font-bold">
                    Dr. Evelyn Vance, MD, FACOG
                  </div>
                  <div className="text-xs text-[#E8D8B8]">
                    Medical Director · 18 Years REI Experience
                  </div>
                </div>
              </div>

              <blockquote className="italic text-xs sm:text-sm text-slate-700 leading-relaxed font-light mb-4">
                "Our guiding principle is simple: treat every patient with the scientific precision we would demand for ourselves and the human warmth we would offer our own family."
              </blockquote>
            </div>

            <div className="pt-4 border-t border-[#F2EDE7] flex items-center justify-between text-xs text-slate-500">
              <span>Johns Hopkins & Harvard Trained</span>
              <span className="font-medium text-[#0E3B43]">Physician-Led Clinic</span>
            </div>
          </div>

          {/* Right Column: 6 Structured Clinical Strengths */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {strengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E8E2D9] hover:border-[#4A7C59] transition-all flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#0E3B43] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0E3B43] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
