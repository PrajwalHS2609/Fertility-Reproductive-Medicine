import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/fertilityData.ts';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenBooking
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md border-t border-[#E8E2D9] px-4 py-2.5 shadow-lg">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phoneDirect}`}
          className="flex-1 py-2 text-[11px] font-semibold text-slate-700 bg-white border border-[#E8E2D9] rounded-lg flex items-center justify-center gap-1.5 active:bg-[#F2EDE7]"
        >
          <Phone className="w-3.5 h-3.5 text-[#4A7C59]" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Aura%20Fertility,%20I%20would%20like%20to%20inquire%20about%20a%20consultation`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 text-[11px] font-semibold text-slate-700 bg-white border border-[#E8E2D9] rounded-lg flex items-center justify-center gap-1.5 active:bg-[#F2EDE7]"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#4A7C59]" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1.5 py-2 text-[11px] font-semibold text-white bg-[#0E3B43] rounded-lg flex items-center justify-center gap-1.5 active:bg-[#09282E]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
