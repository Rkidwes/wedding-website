
import { BridalPartyMember, FAQItem, Accommodation } from './types';

export const WEDDING_DATE = new Date('2026-07-18T14:00:00');
export const COUPLE_NAMES = {
  bride: 'Varvara',
  groom: 'Wesley',
  full: 'Varvara & Wesley'
};

export const VENUE_DETAILS = {
  name: 'Lillibrooke Manor',
  address: 'Ockwells Road, Cox Green, Maidenhead SL6 3AD',
  directions: 'From Highway 29, take the Oakville Cross Rd exit and follow the signs for Somerset Estates. Parking is available at the main gate.',
};

export const BRIDAL_PARTY: BridalPartyMember[] = [
  { id: '1', name: 'Sofia Mayr', role: 'Maid of Honour', image: './images/party/sofia.jpg', description: 'Best friend since kindergarten.', position: 'bottom left' },
  { id: '2', name: 'Veronika Panchenko', role: 'Bridesmaid', image: './images/party/veronika.jpg', description: 'Julian\'s brother and life-long rival.' },
  { id: '3', name: 'Richard Cridford', role: 'Best Man', image: './images/party/rich.jpg', description: 'College roommate and travel buddy.', position: 'top' },
  { id: '4', name: 'Joe Pateman', role: 'Best Man', image: './images/party/joe.jpg', description: 'Absolute bloody legend.', position: 'top' },
  // { id: '5', name: 'Ava Mitchell', role: 'Bridesmaid', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400&h=500', description: 'Cousin and fashion advisor.' },
  // { id: '6', name: 'Noah Brooks', role: 'Groomsman', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400&h=500', description: 'Adventure partner in climbing.' },
];

export const FAQS: FAQItem[] = [
  { question: 'What is the dress code?', answer: 'The dress code is Black Tie Optional. We want you to feel your best!' },
  { question: 'Are children invited?', answer: 'While we love your little ones, our wedding will be an adults-only event.' },
  { question: 'Is there parking available?', answer: 'Yes, Somerset Estates has ample complimentary parking for all guests.' },
  { question: 'What time should I arrive?', answer: 'The ceremony will begin promptly at 2:00 PM. Please arrive 20-30 minutes early.' },
  { question: 'Do you have a registry?', answer: 'Your presence is enough, but if you wish to give, we have a honeymoon fund link on our RSVP page.' },
  { question: 'Leaving cars?', answer: 'Your presence is enough, but if you wish to give, we have a honeymoon fund link on our RSVP page.' },
  { question: 'Non-car directions', answer: 'Your presence is enough, but if you wish to give, we have a honeymoon fund link on our RSVP page.' },
];

export const PRIMARY_ACCOMMODATION = {
  name: 'Hampton by Hilton, High Wycombe',
  type: 'Luxury Hotel',
  distance: '10.4 miles away',
  website: 'https://www.hilton.com/en/hotels/hycomhx-hampton-high-wycombe/?arrivalDate=2026-07-18&departureDate=2026-07-19&numRooms=1&numAdults=1&numChildren=0&room1ChildAges=&room1AdultAges=&displayCurrency=GBP',
  description: 'A modern, large hotel with colourful comfortable rooms and free breakfast. We have reserved a limited number of rooms at a special rate for our guests.',
  discountCode: 'VARVARAWESLEY2026',
  qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://vance-wedding-rsvp.example'
};

export const ALTERNATIVE_ACCOMMODATIONS: Accommodation[] = [
  { name: 'Travelodge', type: 'Bed & Breakfast', distance: '2.3 miles away', website: 'https://www.travelodge.co.uk/hotels/494/Maidenhead-Central-hotel', description: 'Like the Premier Inn, parking is chargeable here' },
  { name: 'Premier Inn', type: 'Resort', distance: '2.6 miles away', website: 'https://www.premierinn.com/gb/en/hotels/england/berkshire/maidenhead/maidenhead-town-centre.html', description: "There is no on-site parking, but chargeable parking at the Sainsbury's next door." },
  { name: 'Taplow House<br /> Hotel and Spa', type: 'Hotel', distance: '4 miles away', website: 'https://www.taplowhouse.com/', description: 'A highly rated spa hotel, luxury and just 13 minutes drive away.' },
];

export const GALLERY_IMAGES = [
  './images/gallery/switzerland-2024.JPG',
  './images/gallery/menorca-2023.jpeg',
  './images/gallery/edinburgh-2023.JPG',
  './images/gallery/new-york-2023.jpg',
  './images/gallery/majorca-2024.jpeg',
  './images/gallery/liverpool-2025.jpg',
  './images/gallery/lisbon-2024.jpg',
  './images/gallery/menorca-2023_2.jpeg',
  './images/gallery/lillibrooke-2023.jpg',
  './images/gallery/edinburgh-2025.jpg',
];
