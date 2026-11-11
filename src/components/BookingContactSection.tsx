import React, { useState } from 'react';
import { CLINIC_INFO, DOCTORS } from '../data/fertilityData.ts';
import { AppointmentFormData } from '../types/index.ts';
import { 
  Calendar, Clock, MapPin, Phone, Mail, MessageSquare, 
  CheckCircle2, ShieldCheck, ArrowRight, UserCheck, AlertCircle 
} from 'lucide-react';

interface BookingContactSectionProps {
  initialDoctor?: string;
  initialTreatment?: string;
}

export const BookingContactSection: React.FC<BookingContactSectionProps> = ({
  initialDoctor = '',
  initialTreatment = ''
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    consultationType: initialTreatment ? `Consultation for ${initialTreatment}` : 'Initial Comprehensive Fertility Consultation (60 min)',
    preferredDoctor: initialDoctor || 'First Available Board-Certified Specialist',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM – 11:30 AM)',
    patientStatus: 'new',
    attendanceType: 'individual',
    notes: '',
    agreedToPrivacy: true
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  const consultationTypes = [
    'Initial Comprehensive Fertility Consultation (60 min)',
    'Second Opinion & Protocol Evaluation',
    'Egg Freezing / Fertility Preservation Discovery',
    'Male Fertility & Andrology Diagnostic Review',
    'PCOS & Ovulatory Health Consultation',
    'Telehealth / Virtual Video Consultation'
  ];

  const timeSlots = [
    'Morning (8:00 AM – 11:30 AM)',
    'Midday (11:30 AM – 2:30 PM)',
    'Afternoon (2:30 PM – 5:30 PM)',
    'Saturday Morning Monitoring Slot'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Please enter a valid telephone number so our coordinator can contact you.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.preferredDate) {
      setErrorMsg('Please select your preferred consultation date.');
      return;
    }
    if (!formData.agreedToPrivacy) {
      setErrorMsg('Please confirm your acknowledgement of our clinical privacy notice.');
      return;
    }

    setErrorMsg('');
    const randomCode = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomCode);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      consultationType: 'Initial Comprehensive Fertility Consultation (60 min)',
      preferredDoctor: 'First Available Board-Certified Specialist',
      preferredDate: '',
      preferredTime: 'Morning (8:00 AM – 11:30 AM)',
      patientStatus: 'new',
      attendanceType: 'individual',
      notes: '',
      agreedToPrivacy: true
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#4A7C59] tracking-wider uppercase mb-2">
            Patient Scheduling & Inquiries
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B43] tracking-tight leading-tight [text-wrap:balance]">
            Book a Fertility Consultation or Speak with Our Team.
          </h2>
          <p className="text-base text-slate-600 mt-3 font-light">
            Schedule an unhurried consultation with our reproductive endocrinologists. Our dedicated patient coordinators will review your preferences and confirm your appointment within 24 business hours.
          </p>
        </div>

        {/* 2-Column Split: Booking Form on Left + Clinic Contact & Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Booking Form Card (Column Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D9] shadow-sm">
            {submitted ? (
              <div className="text-center py-8 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#EAF2EC] text-[#4A7C59] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#4A7C59] mb-1">
                  Consultation Request Received
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E3B43] mb-2">
                  Thank You, {formData.fullName.split(' ')[0]}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Your consultation request has been securely logged with our patient coordinator team under confirmation code <strong className="text-[#0E3B43] font-mono">{bookingRef}</strong>.
                </p>

                {/* Booking Summary Box */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E2D9] max-w-lg mx-auto text-left text-xs text-slate-700 space-y-2 mb-6">
                  <div className="flex justify-between border-b border-[#E8E2D9] pb-2">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-semibold text-[#0E3B43] text-right">{formData.consultationType}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E2D9] pb-2">
                    <span className="text-slate-500">Preferred Date:</span>
                    <span className="font-semibold text-[#0E3B43]">{formData.preferredDate} ({formData.preferredTime.split(' ')[0]})</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E2D9] pb-2">
                    <span className="text-slate-500">Specialist:</span>
                    <span className="font-semibold text-[#0E3B43]">{formData.preferredDoctor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Confirmation Contact:</span>
                    <span className="font-semibold text-[#0E3B43]">{formData.phone}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                  Our coordinator will call you to confirm health documentation details, insurance options, and clinical visit instructions.
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={resetForm}
                    className="px-5 py-2.5 text-xs font-medium text-[#0E3B43] bg-[#F4EFEA] hover:bg-[#EAE2D7] rounded-xl transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Aura%20Fertility,%20I%20just%20submitted%20consultation%20request%20${bookingRef}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#4A7C59] hover:bg-[#3D6649] rounded-xl transition-all flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct Sync</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0E3B43] mb-1">
                    Request an Appointment
                  </h3>
                  <p className="text-xs text-slate-500 font-light">
                    All submitted information is handled with clinical confidentiality in accordance with healthcare privacy standards.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Patient Status & Attendance Type Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Patient Status
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, patientStatus: 'new' })}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          formData.patientStatus === 'new'
                            ? 'bg-[#0E3B43] text-white border-[#0E3B43]'
                            : 'bg-[#FAF8F5] text-slate-700 border-[#E8E2D9]'
                        }`}
                      >
                        New Patient
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, patientStatus: 'existing' })}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          formData.patientStatus === 'existing'
                            ? 'bg-[#0E3B43] text-white border-[#0E3B43]'
                            : 'bg-[#FAF8F5] text-slate-700 border-[#E8E2D9]'
                        }`}
                      >
                        Existing Patient
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Consultation Attendance
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attendanceType: 'individual' })}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          formData.attendanceType === 'individual'
                            ? 'bg-[#0E3B43] text-white border-[#0E3B43]'
                            : 'bg-[#FAF8F5] text-slate-700 border-[#E8E2D9]'
                        }`}
                      >
                        Individual
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attendanceType: 'couple' })}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          formData.attendanceType === 'couple'
                            ? 'bg-[#0E3B43] text-white border-[#0E3B43]'
                            : 'bg-[#FAF8F5] text-slate-700 border-[#E8E2D9]'
                        }`}
                      >
                        Couple
                      </button>
                    </div>
                  </div>
                </div>

                {/* Name, Phone, Email Inputs */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3B43]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3B43]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3B43]"
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation Type & Doctor Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Consultation Service
                    </label>
                    <select
                      value={formData.consultationType}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3B43] text-slate-800"
                    >
                      {consultationTypes.map((type, i) => (
                        <option key={i} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Specialist
                    </label>
                    <select
                      value={formData.preferredDoctor}
                      onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3B43] text-slate-800"
                    >
                      <option value="First Available Board-Certified Specialist">First Available Specialist</option>
                      {DOCTORS.map((doc) => (
                        <option key={doc.id} value={doc.name}>{doc.name} ({doc.specialization.split(' ')[0]})</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Consultation Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3B43]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Time of Day
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3B43] text-slate-800"
                    >
                      {timeSlots.map((slot, i) => (
                        <option key={i} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Additional Context / Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly share any timeline preferences or specific queries. (Please do not submit sensitive medical records through this form)."
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3B43]"
                  />
                </div>

                {/* Privacy Agreement Checkbox */}
                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="privacyAgreement"
                    checked={formData.agreedToPrivacy}
                    onChange={(e) => setFormData({ ...formData, agreedToPrivacy: e.target.checked })}
                    className="mt-0.5 rounded border-[#DDD5CA] text-[#0E3B43] focus:ring-[#0E3B43]"
                  />
                  <label htmlFor="privacyAgreement" className="text-xs text-slate-600 leading-snug cursor-pointer">
                    I understand this inquiry initiates an appointment request and that my personal details are safeguarded in accordance with strict healthcare privacy standards.
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-semibold tracking-wide text-white bg-[#0E3B43] hover:bg-[#09282E] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Confirm Consultation Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    A patient coordinator will call or email to finalize your time slot.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Clinic Information, Hours & Location (Column Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D9] shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#0E3B43] mb-4">
                Clinic Location & Inquiries
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#0E3B43]">{CLINIC_INFO.name}</div>
                    <div className="text-slate-600 mt-0.5">{CLINIC_INFO.address.line1}</div>
                    <div className="text-slate-600">{CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}</div>
                    <div className="text-xs text-[#4A7C59] mt-0.5">{CLINIC_INFO.address.region}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#F2EDE7]">
                  <Phone className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <div>
                    <span className="text-slate-500">Appointments: </span>
                    <a href={`tel:${CLINIC_INFO.phoneDirect}`} className="font-semibold text-[#0E3B43] hover:underline">
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <div>
                    <span className="text-slate-500">Clinical Inquiries: </span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="font-semibold text-[#0E3B43] hover:underline">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <MessageSquare className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <div>
                    <span className="text-slate-500">Direct WhatsApp: </span>
                    <a 
                      href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Aura%20Fertility`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-[#4A7C59] hover:underline"
                    >
                      Connect on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="mt-6 pt-6 border-t border-[#F2EDE7]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0E3B43] mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Clinical Hours of Operation</span>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  {CLINIC_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="font-medium text-slate-700">{h.days}:</span>
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Map / Transit Directions Box */}
            <div className="bg-[#FAF4EB] rounded-3xl p-6 border border-[#EFE2D0]">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0E3B43]">
                  Transit & Parking Access
                </div>
                <span className="text-[11px] text-[#4A7C59] font-medium">Validated Patient Parking</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                Located immediately adjacent to UCSF Medical Center at Mission Bay. Direct Muni T-Third line stop at Mission Bay Blvd. Private underground patient parking with discrete elevator access directly to our 5th floor private reception.
              </p>
              <div className="h-32 rounded-xl bg-slate-200 overflow-hidden relative border border-[#E2DAD0] flex items-center justify-center text-slate-500">
                <div className="text-center p-3">
                  <MapPin className="w-6 h-6 text-[#0E3B43] mx-auto mb-1" />
                  <div className="text-xs font-semibold text-[#0E3B43]">450 Reproductive Science Blvd</div>
                  <div className="text-[10px] text-slate-500">Mission Bay · San Francisco, CA</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
