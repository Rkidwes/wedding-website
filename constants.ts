
import { BridalPartyMember, FAQItem, Accommodation } from './types';

export const WEDDING_DATE = new Date('2026-07-18T14:00:00');
export const COUPLE_NAMES = {
  bride: 'Varvara',
  groom: 'Wesley',
  full: 'Varvara & Wesley'
};

export const VENUE_DETAILS = {
  name: 'Lillibrooke Manor',
  address: 'Ockwells Road, Cox Green, Maidenhead SL6 3LP',
  directions: 'From Highway 29, take the Oakville Cross Rd exit and follow the signs for Somerset Estates. Parking is available at the main gate.',
};

export const BRIDAL_PARTY: BridalPartyMember[] = [
  { id: '1', name: 'Sophia Bennett', role: 'Maid of Honor', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400&h=500', description: 'Best friend since kindergarten.' },
  { id: '2', name: 'James Carter', role: 'Best Man', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400&h=500', description: 'Julian\'s brother and life-long rival.' },
  { id: '3', name: 'Isabella Ross', role: 'Bridesmaid', image: 'https://images.unsplash.com/photo-1525203135335-74d292fb8d5c?auto=format&fit=crop&q=80&w=400&h=500', description: 'College roommate and travel buddy.' },
  { id: '4', name: 'Liam Hughes', role: 'Groomsman', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500', description: 'High school bandmate.' },
  { id: '5', name: 'Ava Mitchell', role: 'Bridesmaid', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400&h=500', description: 'Cousin and fashion advisor.' },
  { id: '6', name: 'Noah Brooks', role: 'Groomsman', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400&h=500', description: 'Adventure partner in climbing.' },
];

export const FAQS: FAQItem[] = [
  { question: 'What is the dress code?', answer: 'The dress code is Black Tie Optional. We want you to feel your best!' },
  { question: 'Are children invited?', answer: 'While we love your little ones, our wedding will be an adults-only event.' },
  { question: 'Is there parking available?', answer: 'Yes, Somerset Estates has ample complimentary parking for all guests.' },
  { question: 'What time should I arrive?', answer: 'The ceremony will begin promptly at 2:00 PM. Please arrive 20-30 minutes early.' },
  { question: 'Do you have a registry?', answer: 'Your presence is enough, but if you wish to give, we have a honeymoon fund link on our RSVP page.' },
];

export const PRIMARY_ACCOMMODATION = {
  name: 'Napa Valley Inn',
  type: 'Luxury Hotel',
  distance: '2 miles away',
  website: '#',
  description: 'A cozy boutique hotel with stunning views. We have reserved a limited number of rooms at a special rate for our guests.',
  discountCode: 'VANCE2025',
  qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://vance-wedding-rsvp.example'
};

export const ALTERNATIVE_ACCOMMODATIONS: Accommodation[] = [
  { name: 'The Vineyard Suites', type: 'Resort', distance: '0.5 miles away', website: '#', description: 'Modern suites within walking distance of the venue.' },
  { name: 'Heritage Lodge', type: 'Bed & Breakfast', distance: '5 miles away', website: '#', description: 'Historic charm with award-winning breakfast.' },
  { name: 'St. Helena Boutique', type: 'Hotel', distance: '3.5 miles away', website: '#', description: 'Elegant rooms in the heart of downtown St. Helena.' },
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1522673607200-164848371c6f?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1465495910483-0d6749fe9ec5?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1519225495810-7517c3365a1b?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1510076857177-74700760beaa?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1519654743301-493390f701e6?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1544124499-198122949430?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800&h=800',
  // 'https://images.unsplash.com/photo-1482933220746-6058896013a7?auto=format&fit=crop&q=80&w=800&h=800',
  'https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?auto=format&fit=crop&q=80&w=800&h=800'
];
