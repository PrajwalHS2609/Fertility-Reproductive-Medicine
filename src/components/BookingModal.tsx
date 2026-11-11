import React from 'react';
import { BookingContactSection } from './BookingContactSection.tsx';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialDoctor,
  initialTreatment
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#FAF8F5] border border-[#E8E2D9] rounded-3xl max-w-4xl w-full p-4 sm:p-8 shadow-2xl max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-[#EAE2D7] transition-colors z-20"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <BookingContactSection 
          initialDoctor={initialDoctor}
          initialTreatment={initialTreatment}
        />
      </div>
    </div>
  );
};
