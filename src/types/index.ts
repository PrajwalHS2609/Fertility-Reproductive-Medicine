export type PageView =
  | 'home'
  | 'about'
  | 'treatments'
  | 'doctors'
  | 'facilities'
  | 'support'
  | 'resources'
  | 'contact';

export interface Treatment {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: 'core' | 'advanced-lab' | 'preservation' | 'evaluation';
  overview: string;
  indications: string[];
  clinicalSteps: string[];
  typicalTimeline: string;
  considerations: string;
  badge?: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  experienceYears: number;
  specialization: string;
  bio: string;
  memberships: string[];
  clinicalFocus: string[];
  education: string[];
  image: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  clinicalDetails: string[];
  patientTips: string;
}

export interface Facility {
  id: string;
  name: string;
  headline: string;
  description: string;
  specifications: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  initials: string;
  patientName: string;
  treatment: string;
  quote: string;
  story: string;
  verifiedYear: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  reviewedBy: string;
  content: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Procedures' | 'Evaluation' | 'Logistics';
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  consultationType: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: string;
  patientStatus: 'new' | 'existing';
  attendanceType: 'individual' | 'couple';
  notes: string;
  agreedToPrivacy: boolean;
}
