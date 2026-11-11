import React, { useState } from 'react';
import { FACILITIES } from '../data/fertilityData.ts';
import { Microscope, ShieldCheck, Cpu, Wind, Sparkles, Check } from 'lucide-react';

export const LabFacilitiesSection: React.FC = () => {
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState<number>(0);
  const activeFacility = FACILITIES[selectedFacilityIndex];

  return (
    <section id="laboratory" className="py-20 lg:py-28 bg-[#F4EFEA] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            Technological Infrastructure
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Modern Facilities Supporting Advanced Fertility Treatment.
          </h2>
          <p className="text-base text-slate-600 mt-3 font-light">
            In reproductive medicine, laboratory precision directly influences embryological development. Our on-site cleanrooms operate with sub-micron air filtration and uninterrupted telemetry.
          </p>
        </div>

        {/* Facility Selector Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-8 border-b border-[#E2DAD0] scrollbar-none">
          {FACILITIES.map((facility, idx) => (
            <button
              key={facility.id}
              onClick={() => setSelectedFacilityIndex(idx)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                selectedFacilityIndex === idx
                  ? 'bg-[#0E3B43] text-white shadow-xs'
                  : 'bg-white/80 text-slate-700 hover:bg-white border border-[#E8E2D9]'
              }`}
            >
              {facility.name}
            </button>
          ))}
        </div>

        {/* Active Facility Spotlight Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D9] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Facility Visual Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 border border-[#E8E2D9] shadow-sm">
              <img
                src={activeFacility.image}
                alt={activeFacility.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs text-[#E8D8B8] font-medium uppercase tracking-wider">
                  Verified Facility Standards
                </div>
                <div className="font-serif text-lg font-bold">
                  {activeFacility.name}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications & Description */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs font-semibold text-[#4A7C59] uppercase tracking-wider mb-2">
              Clinical Capability
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E3B43] mb-3">
              {activeFacility.headline}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-light">
              {activeFacility.description}
            </p>

            <div className="space-y-3 mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0E3B43]">
                Facility Specifications:
              </div>
              {activeFacility.specifications.map((spec, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#F2EDE7] flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4A7C59]" />
                <span>CAP & CLIA Accredited Laboratory</span>
              </span>
              <span>24/7 Redundant Telemetry</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
