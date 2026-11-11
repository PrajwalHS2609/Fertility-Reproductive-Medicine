import React, { useState } from 'react';
import { PageView } from '../types/index.ts';
import { CLINIC_INFO } from '../data/fertilityData.ts';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageView; href: string }[] = [
    { label: 'Treatments', page: 'treatments', href: '#treatments' },
    { label: 'Specialists', page: 'doctors', href: '#specialists' },
    { label: 'The Journey', page: 'home', href: '#journey' },
    { label: 'Laboratory', page: 'facilities', href: '#laboratory' },
    { label: 'Resources', page: 'resources', href: '#resources' },
    { label: 'Contact', page: 'contact', href: '#contact' },
  ];

  const handleLinkClick = (page: PageView, href: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    // If navigating on home page, scroll to section
    if (page === 'home' || currentPage === 'home') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9] transition-all">
      {/* Strict Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 single-line links) - Zone 3 (1 primary CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single-element Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('home', '#hero')}
            className="group text-left flex items-center gap-2.5 whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            <div className="w-9 h-9 rounded-full bg-[#0E3B43] flex items-center justify-center text-white font-serif text-lg font-semibold tracking-wider shadow-xs">
              A
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#0E3B43] block leading-none">
                Aura Fertility
              </span>
              <span className="text-[11px] font-sans font-medium text-slate-500 tracking-wider uppercase block mt-0.5">
                Reproductive Medicine
              </span>
            </div>
          </button>

          {/* Zone 2: Single-line clean text links with subtle hover underlines */}
          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.page, link.href)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  currentPage === link.page
                    ? 'text-[#0E3B43] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0E3B43]'
                    : 'hover:text-[#0E3B43]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneDirect}`}
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-[#0E3B43] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#4A7C59]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#0E3B43] rounded-lg hover:bg-[#09282E] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap shrink-0"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0E3B43] rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0E3B43] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E2D9] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.page, link.href)}
                className="text-left py-2 px-3 text-base font-medium text-slate-800 hover:bg-[#F2ECE4] rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8E2D9] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#0E3B43] rounded-lg hover:bg-[#09282E]"
            >
              Book a Fertility Consultation
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneDirect}`}
              className="w-full py-2 text-center text-xs font-medium text-slate-700 hover:text-[#0E3B43] flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#4A7C59]" />
              Call Clinic: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
