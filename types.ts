
export interface BridalPartyMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Accommodation {
  name: string;
  type: string;
  distance: string;
  website: string;
  description: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
