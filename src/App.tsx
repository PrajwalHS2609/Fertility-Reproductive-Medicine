/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageView, Treatment, Doctor, ResourceArticle } from './types/index.ts';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { WelcomeSection } from './components/WelcomeSection.tsx';
import { TreatmentsSection } from './components/TreatmentsSection.tsx';
import { TreatmentModal } from './components/TreatmentModal.tsx';
import { TreatmentCompareModal } from './components/TreatmentCompareModal.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { DoctorsSection } from './components/DoctorsSection.tsx';
import { DoctorModal } from './components/DoctorModal.tsx';
import { TreatmentJourney } from './components/TreatmentJourney.tsx';
import { LabFacilitiesSection } from './components/LabFacilitiesSection.tsx';
import { DualCareSection } from './components/DualCareSection.tsx';
import { PatientSupportSection } from './components/PatientSupportSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ResourcesSection } from './components/ResourcesSection.tsx';
import { ArticleModal } from './components/ArticleModal.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ConversionCta } from './components/ConversionCta.tsx';
import { BookingContactSection } from './components/BookingContactSection.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileQuickBar } from './components/MobileQuickBar.tsx';
import { TREATMENTS, DOCTORS, FACILITIES } from './data/fertilityData.ts';
import { ArrowLeft, ArrowRight, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingDoctorPref, setBookingDoctorPref] = useState<string>('');
  const [bookingTreatmentPref, setBookingTreatmentPref] = useState<string>('');

  const handleOpenBooking = (doctorName = '', treatmentName = '') => {
    setBookingDoctorPref(doctorName);
    setBookingTreatmentPref(treatmentName);
    setIsBookingModalOpen(true);
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 selection:bg-[#E2D4C3] selection:text-[#0E3B43]">
      
      {/* 3-Zone Top Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* HOMEPAGE VIEW: Full 15 Cohesive Sections */}
        {currentPage === 'home' && (
          <>
            {/* Section 1: Hero */}
            <Hero
              onOpenBooking={() => handleOpenBooking()}
              onExploreTreatments={() => {
                const el = document.getElementById('treatments');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Section 2: Welcome to Our IVF Centre */}
            <WelcomeSection
              onLearnMore={() => handleNavigate('about')}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Section 3: Our Fertility Treatments */}
            <TreatmentsSection
              onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
              onOpenCompare={() => setIsCompareOpen(true)}
            />

            {/* Section 4: Why Choose Our IVF Centre? */}
            <WhyChooseUs />

            {/* Section 5: Meet Our Fertility Specialists */}
            <DoctorsSection
              onSelectDoctor={(doctor) => setSelectedDoctor(doctor)}
              onBookWithDoctor={(doctorName) => handleOpenBooking(doctorName)}
            />

            {/* Section 6: Your IVF Treatment Journey */}
            <TreatmentJourney
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Section 7: Advanced IVF Laboratory & Facilities */}
            <LabFacilitiesSection />

            {/* Section 8: Fertility Care for Men and Women */}
            <DualCareSection
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Section 9: Patient Support & Counselling */}
            <PatientSupportSection
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Section 10: Patient Testimonials & Experiences */}
            <TestimonialsSection />

            {/* Section 11: Educational Resources */}
            <ResourcesSection
              onSelectArticle={(article) => setSelectedArticle(article)}
            />

            {/* Section 12: Frequently Asked Questions */}
            <FaqSection />

            {/* Section 13: Strong Conversion CTA */}
            <ConversionCta
              onOpenBooking={() => handleOpenBooking()}
              onOpenContact={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Section 14: Appointment Booking & Contact */}
            <BookingContactSection
              initialDoctor={bookingDoctorPref}
              initialTreatment={bookingTreatmentPref}
            />
          </>
        )}

        {/* DEDICATED PAGE: ABOUT OUR CENTRE */}
        {currentPage === 'about' && (
          <div className="py-14 sm:py-20 animate-fadeIn">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <button
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#0E3B43] mb-8 hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>

              <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
                Our Heritage & Mission
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] mb-6">
                About Aura Fertility & Reproductive Medicine
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-12">
                Founded by academic reproductive endocrinologists and embryology lab leaders, Aura Fertility was built to redefine fertility healthcare. We integrate sub-micron embryological technology with unhurried, physician-guided patient care.
              </p>

              {/* Clinic Recovery Photo */}
              <div className="rounded-3xl overflow-hidden aspect-16/9 border border-[#E8E2D9] mb-12 shadow-md">
                <img
                  src="/src/assets/images/clinic_recovery_interior_1794392486180.jpg"
                  alt="Aura Fertility Centre interiors"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-light mb-12">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#0E3B43] mb-3">
                    Our Medical Philosophy
                  </h2>
                  <p>
                    We hold that fertility care must be transparent, evidence-based, and pressure-free. We do not apply standardized "cookie-cutter" stimulation cycles or push patients prematurely into invasive interventions when gentle first-line treatments remain viable.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#0E3B43] mb-3">
                    Uncompromising Laboratory Rigor
                  </h2>
                  <p>
                    Every egg retrieval, ICSI micromanipulation, and blastocyst culture occurs inside our on-site ISO Class 5 cleanroom laboratory. With continuous 24/7 environmental telemetry, zero-VOC materials, and time-lapse morphokinetic incubators, our embryologists cultivate embryos in an environment engineered to mimic natural biological conditions.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#0E3B43] mb-3">
                    Patient Dignity & Discretion
                  </h2>
                  <p>
                    We recognize that reproductive care is deeply personal. Our centre features private consultation corridors, individual patient recovery suites, and strict HIPAA-compliant data security, providing complete dignity and peace of mind for every individual and couple.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#0E3B43] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-1">Begin with a Diagnostic Conversation</h3>
                  <p className="text-xs sm:text-sm text-white/80">Schedule an initial 60-minute consultation with a reproductive specialist.</p>
                </div>
                <button
                  onClick={() => handleOpenBooking()}
                  className="px-6 py-3 text-xs font-semibold text-[#0E3B43] bg-white rounded-xl hover:bg-[#FAF8F5] transition-all shrink-0 cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>

            </div>
          </div>
        )}

        {/* DEDICATED PAGE: TREATMENTS DEEP DIVE */}
        {currentPage === 'treatments' && (
          <div className="py-14 sm:py-20 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <button
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#0E3B43] mb-8 hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>

              <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
                Clinical Offerings Directory
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] mb-4">
                Advanced Fertility Treatments & Technologies
              </h1>
              <p className="text-base text-slate-600 max-w-3xl leading-relaxed font-light mb-10">
                Explore our comprehensive spectrum of reproductive care—from gentle ovulation induction to ICSI, blastocyst vitrification, and fertility preservation.
              </p>

              <TreatmentsSection
                onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
                onOpenCompare={() => setIsCompareOpen(true)}
              />

              <div className="mt-14">
                <DualCareSection onOpenBooking={() => handleOpenBooking()} />
              </div>

            </div>
          </div>
        )}

        {/* DEDICATED PAGE: DOCTORS & SPECIALISTS */}
        {currentPage === 'doctors' && (
          <div className="py-14 sm:py-20 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <button
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#0E3B43] mb-8 hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>

              <DoctorsSection
                onSelectDoctor={(doctor) => setSelectedDoctor(doctor)}
                onBookWithDoctor={(doctorName) => handleOpenBooking(doctorName)}
              />

              <div className="mt-14">
                <WhyChooseUs />
              </div>

            </div>
          </div>
        )}

        {/* DEDICATED PAGE: LABORATORY & FACILITIES */}
        {currentPage === 'facilities' && (
          <div className="py-14 sm:py-20 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <button
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#0E3B43] mb-8 hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>

              <LabFacilitiesSection />

              <div className="mt-14 max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E2D9]">
                <h2 className="font-serif text-2xl font-bold text-[#0E3B43] mb-4">
                  Laboratory Quality Assurance Protocols
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  <p>
                    The Aura Embryology Laboratory maintains strict compliance with the College of American Pathologists (CAP), the Clinical Laboratory Improvement Amendments (CLIA), and the Society for Assisted Reproductive Technology (SART).
                  </p>
                  <p>
                    Our air-handling units provide an extraordinary 30 air exchanges per hour with military-grade filtration that traps particulate matter down to 0.1 microns and volatile organic compounds (VOCs). Dual failover generators and cryogenic emergency liquid nitrogen backups safeguard all stored embryos, eggs, and sperm 365 days a year.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* DEDICATED PAGE: PATIENT SUPPORT */}
        {currentPage === 'support' && (
          <div className="py-14 sm:py-20 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <button
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#0E3B43] mb-8 hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>

              <PatientSupportSection onOpenBooking={() => handleOpenBooking()} />

              <div className="mt-14">
                <TestimonialsSection />
              </div>

            </div>
          </div>
        )}

        {/* DEDICATED PAGE: EDUCATIONAL RESOURCES */}
        {currentPage === 'resources' && (
          <div className="py-14 sm:py-20 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <button
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#0E3B43] mb-8 hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>

              <ResourcesSection onSelectArticle={(article) => setSelectedArticle(article)} />

              <div className="mt-14">
                <FaqSection />
              </div>

            </div>
          </div>
        )}

        {/* DEDICATED PAGE: CONTACT & BOOKING */}
        {currentPage === 'contact' && (
          <div className="py-14 sm:py-20 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <button
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#0E3B43] mb-8 hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>

              <BookingContactSection
                initialDoctor={bookingDoctorPref}
                initialTreatment={bookingTreatmentPref}
              />

              <div className="mt-14">
                <FaqSection />
              </div>

            </div>
          </div>
        )}
      </main>

      {/* Section 15: Professional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Sticky Quick Bar (Under 15% Mobile Viewport Height) */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking()} />

      {/* Modals */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookConsultation={(treatmentName) => handleOpenBooking('', treatmentName)}
      />

      <TreatmentCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onBookConsultation={() => handleOpenBooking()}
      />

      <DoctorModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBookWithDoctor={(doctorName) => handleOpenBooking(doctorName)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookConsultation={() => handleOpenBooking()}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialDoctor={bookingDoctorPref}
        initialTreatment={bookingTreatmentPref}
      />

    </div>
  );
}
