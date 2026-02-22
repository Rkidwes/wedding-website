
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
  { id: '1', name: 'Sofia Mayr', role: 'Maid of Honour', image: '/images/party/sofia.jpg', description: 'Best friend since kindergarten.', position: 'bottom left' },
  { id: '2', name: 'Inna Kyrylenkoo', role: 'Bridesmaid', image: '/images/party/inna.jpg', description: 'Julian\'s brother and life-long rival.' },
  { id: '3', name: 'Richard Cridford', role: 'Best Man', image: '/images/party/rich.jpg', description: 'College roommate and travel buddy.', position: 'top' },
  { id: '4', name: 'Joe Pateman', role: 'Best Man', image: '/images/party/joe.jpg', description: 'Absolute bloody legend.', position: 'top' },
];

export const FAQS: FAQItem[] = [
  { question: 'What time should I arrive?', answer: '<p>The ceremony will begin promptly at 2:00 PM so please arrive 20-30 minutes early.</p>' },
  { question: 'Is there a dress code?', answer: "<p>As with any wedding, we'd encourage you to dress up — but please keep comfort in mind. We're expecting a hot, sunny day and want you to feel relaxed, confident, and looking your most fabulous.</p> <p>The only firm request is no white dresses (those are reserved for the bride, obvs). And while there's no strict colour palette, we'd gently suggest avoiding very dark tones like red and black — it's a summer celebration, and lighter, brighter colours will suit the vibe (and the sunshine!) a little better.</p>" },
  { question: 'Are children invited?', answer: "<p>While we love your little ones, we would like our wedding to be an adults-only event where possible - and let's be honest, we're sure many of you would relish the opportunity to let your hair down. However, if you have a particularly young one, or a difficulty in making other arrangements please give one of us a call and we'll do our best to accommodate.</p>" },
  { question: "I'm coming by car, is that OK?", answer: '<p>Yes, there is ample parking available on site, though if you are drinking please do take a taxi. If you do arrive by car but decide to drink you can always leave your car in the car park and pick it up the following day between 8am and 10am.</p>' },
  { question: 'Non-car directions', answer: '<p>The closest train station is Maidenhead at a short two miles away. Regular tains take approximately 20 minutes from London Paddington whilst the new Elizabeth Line also runs directly to Maidenhead.</p>' },
  { question: 'Do you have a gift registry?', answer: "<p>We don't have a gift list, as we are lucky enough to already have everything we need at home. Simply having you there with us to celebrate and be a part of the best day of our lives means the world. However, if giving a gift is on your mind, a monetary contribution that we will use towards our honeymoon would be hugely appreciated and we will think of you all as we enjoy a floating breakfast in our private pool!</p><p>There will be a post box at the reception for any cards and/or contributions.</p>" },
  { question: 'What time will the event finish?', answer: '<p>Carriages at midnight</p>' },
  { question: 'Is there anything else that I should know?', answer: '<p>We expect the wedding to have both indoor and outdoor elements and have multiple contingencies in place should the weather not be as we hope.</p> <p>Although there is no formal cloakroom there is ample space for coats and belongings.</p>' },
  { question: "I've got another question", answer: "<p>If you think of anything else that you need to know, please don't hesitate to give one of us a call.</p>" },
];

export const PRIMARY_ACCOMMODATION = {
  name: 'Hampton by Hilton, High Wycombe',
  type: 'Luxury Hotel',
  distance: '10.4 miles away',
  website: 'https://www.hilton.com/en/hotels/hycomhx-hampton-high-wycombe/?arrivalDate=2026-07-18&departureDate=2026-07-19&numRooms=1&numAdults=1&numChildren=0&room1ChildAges=&room1AdultAges=&displayCurrency=GBP',
  description: 'A modern, large hotel with colourful comfortable rooms and free breakfast. We have reserved a limited number of rooms at a special rate for our guests.',
  discountCode: 'CHH91U',
  qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://vance-wedding-rsvp.example'
};

export const ALTERNATIVE_ACCOMMODATIONS: Accommodation[] = [
  { name: 'Travelodge', type: 'Bed & Breakfast', distance: '2.3 miles away', website: 'https://www.travelodge.co.uk/hotels/494/Maidenhead-Central-hotel', description: 'Like the Premier Inn, parking is chargeable here' },
  { name: 'Premier Inn', type: 'Resort', distance: '2.6 miles away', website: 'https://www.premierinn.com/gb/en/hotels/england/berkshire/maidenhead/maidenhead-town-centre.html', description: "There is no on-site parking, but chargeable parking at the Sainsbury's next door." },
  { name: 'Taplow House<br /> Hotel and Spa', type: 'Hotel', distance: '4 miles away', website: 'https://www.taplowhouse.com/', description: 'A highly rated spa hotel, luxury and just 13 minutes drive away.' },
];

export const GALLERY_IMAGES = [
  '/images/gallery/switzerland-2024.JPG',
  '/images/gallery/menorca-2023.jpeg',
  '/images/gallery/edinburgh-2023.JPG',
  '/images/gallery/new-york-2023.jpg',
  '/images/gallery/majorca-2024.jpeg',
  '/images/gallery/liverpool-2025.jpg',
  '/images/gallery/lisbon-2024.jpg',
  '/images/gallery/menorca-2023_2.jpeg',
  '/images/gallery/lillibrooke-2023.jpg',
  '/images/gallery/edinburgh-2025.jpg',
];
