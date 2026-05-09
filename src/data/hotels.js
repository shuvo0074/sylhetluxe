/**
 * Curated Sylhet‑division luxury inventory for the homepage only.
 *
 * Nights show typical “from” BDT racks before taxes/service (++, VAT) where
 * properties publish them — cross‑check Booking.com / brand sites before go‑live.
 * Display locations avoid spelling out Sreemangal per product direction; geography
 * still reflects Sylhet outbound / metropolitan / hillside corridors where these
 * assets actually sit.
 *
 * Photos live in /public/hotels/: sourced from each brand site (Grand Sultan,
 * Paragon, Balishira, NOVEM, Grand Sylhet, Tea Villa CDN, Lemon Garden, Nazimgarh),
 * Booking.com CDN (Rangauti), Trip.com CDN (DuSai), Hello Sylhet (Regent Park listing),
 * and bd-info (Palace)—replace when you ship approved media.
 */

/** @typedef {{ id: string; name: string; location: string; type: 'Hotel' | 'Resort'; rating: number; guestCapacity: number; hasFamilyRooms: boolean; price: number; image: string; description: string; amenities: string[] }} Hotel */

export const LUXURY_MIN_PRICE_BDT = 14000

/** @type {string[]} */
export const FEATURED_HOTEL_IDS = [
  'grand-sylhet',
  'palace-luxury',
  'dusai',
  'nazimgarh',
  'grand-sultan-tea',
  'tea-villa-luxury',
  'paragon-resort',
]

/** @type {Hotel[]} */
export const hotels = [
  {
    id: 'grand-sultan-tea',
    name: 'Grand Sultan Tea Resort & Golf',
    location: 'Dhaka–Sylhet Hwy · Zakiganj / tea-belt corridor',
    type: 'Resort',
    rating: 4.85,
    guestCapacity: 6,
    hasFamilyRooms: true,
    price: 14900,
    image: '/hotels/grand-sultan-tea.jpg',
    description:
      'Flagship resort with lagoon pools, multiplex cinema & a full golf academy on a vast tea-country estate.',
    amenities: ['9-hole golf', 'Cinema', 'Spa & jacuzzi wing', '5 restaurants'],
  },
  {
    id: 'paragon-resort',
    name: 'Paragon Hotel & Resort',
    location: 'Hillside plantation belt · Sylhet excursions hub',
    type: 'Resort',
    rating: 4.75,
    guestCapacity: 5,
    hasFamilyRooms: true,
    price: 7200,
    image: '/hotels/paragon-resort.jpg',
    description:
      'Pool-forward retreat with skyline tea views, banquet suites, barbecue lawn and all-day multicuisine.',
    amenities: ["Kids’ pool", 'Spa & gym', 'Banquet lawns', '24h room svc'],
  },
  {
    id: 'balisira-resort',
    name: 'Balisira Resort',
    location: 'Forest stream edge · plantation gateway',
    type: 'Resort',
    rating: 4.65,
    guestCapacity: 4,
    hasFamilyRooms: true,
    price: 6700,
    image: '/hotels/balisira-resort.jpg',
    description:
      'Cottages & plunge-pool villas with Lawachora-adjacent forest trails, alfresco buffet and lagoon pool.',
    amenities: ['Private pool villas', 'Outdoor pool', 'Buffet dining', 'Play zone'],
  },
  {
    id: 'novem-ecoresort',
    name: 'NOVEM Eco Resort',
    location: 'Bishamoni · Sylhet excursion circuit',
    type: 'Resort',
    rating: 4.7,
    guestCapacity: 5,
    hasFamilyRooms: true,
    price: 6650,
    image: '/hotels/novem-ecoresort.webp',
    description:
      'Design-led bamboo & clay lodges with saline pool, nature trails and carbon-light operating ethos.',
    amenities: ['Eco build', 'Pool & lifeguard', 'Bicycle hire', 'Family villas'],
  },
  {
    id: 'grand-sylhet',
    name: 'Grand Sylhet Hotel & Resort',
    location: 'Airport Rd · metropolitan Sylhet',
    type: 'Hotel',
    rating: 4.9,
    guestCapacity: 4,
    hasFamilyRooms: true,
    price: 6323,
    image: '/hotels/grand-sylhet.jpg',
    description:
      '235-room city flagship minutes from MAG Osmani with spa decks, ballroom stack and lagoon pool lounge.',
    amenities: ['Lagoon pool', 'Spa & gym', 'Airport shuttle', 'Ballrooms'],
  },
  {
    id: 'tea-villa-luxury',
    name: 'Tea Villa Luxury Resort',
    location: 'Villa enclave · tea ridge corridor',
    type: 'Resort',
    rating: 4.55,
    guestCapacity: 4,
    hasFamilyRooms: true,
    price: 6000,
    image: '/hotels/tea-villa-luxury.jpg',
    description:
      'Low-rise teak suites framing manicured lawns; Sunday–Thu weekday racks include breakfast duo.',
    amenities: ['Pool club', 'Villa-only buy-outs', 'Butler-lite service', 'EV bay'],
  },
  {
    id: 'lemon-garden',
    name: 'Lemon Garden Resort',
    location: 'Lawachora forest edge · hillside circuit',
    type: 'Resort',
    rating: 4.6,
    guestCapacity: 5,
    hasFamilyRooms: true,
    price: 9400,
    image: '/hotels/lemon-garden.jpg',
    description:
      'Wooden couple suites plus royal block with rain showers—ideal for rainforest safari mornings.',
    amenities: ['Wooden suites', 'Family blocks', 'Spa nook', 'All-day dine'],
  },
  {
    id: 'regent-park',
    name: 'Regent Park Resort',
    location: 'Silam West Para · Sylhet outskirts',
    type: 'Resort',
    rating: 4.52,
    guestCapacity: 4,
    hasFamilyRooms: true,
    price: 8500,
    image: '/hotels/regent-park.jpg',
    description:
      'Eco-activity lawns and pond decks ~7km from core Sylhet grid—meetings plus nature rides.',
    amenities: ['Eco park', 'Pond villas', 'ATV circuits', 'Event tents'],
  },
  {
    id: 'rangauti',
    name: 'Rangauti Resort',
    location: 'Manu riverside · Kulaura arterial',
    type: 'Resort',
    rating: 4.43,
    guestCapacity: 3,
    hasFamilyRooms: true,
    price: 6500,
    image: '/hotels/rangauti-resort.jpg',
    description:
      'Stacked teak bungalows over Manu riffles with wetland haor charters and sunrise fishing decks.',
    amenities: ['Overwater lounges', 'Boat charters', 'Sauna', 'Riverside pool'],
  },
  {
    id: 'nazimgarh',
    name: 'Nazimgarh Resorts',
    location: 'Lalakhal approach · northeastern escarpments',
    type: 'Resort',
    rating: 4.78,
    guestCapacity: 5,
    hasFamilyRooms: true,
    price: 15000,
    image: '/hotels/nazimgarh-resorts.jpg',
    description:
      'Wilderness lodges + tree-top panorama suites perched above turquoise Lalakhal canyoning routes.',
    amenities: ['Tree-top suites', 'Jetty concierge', 'Adventure hub', 'Spa grove'],
  },
  {
    id: 'dusai',
    name: 'DuSai Resort & Spa',
    location: 'Hill crest · northeastern Sylhet division',
    type: 'Resort',
    rating: 4.92,
    guestCapacity: 6,
    hasFamilyRooms: true,
    price: 16000,
    image: '/hotels/dusai-resort.jpg',
    description:
      'Château-inspired villas cascading over rain forest ridges—signature spa circuit & lake pontoon dinners.',
    amenities: ['Villa inventory', 'Indoor aqua spa', 'Private pontoon', 'Heli apron'],
  },
  {
    id: 'palace-luxury',
    name: 'The Palace Luxury Resort',
    location: 'Bahubal greens · Habiganj lake belt',
    type: 'Resort',
    rating: 4.88,
    guestCapacity: 8,
    hasFamilyRooms: true,
    price: 16999,
    image: '/hotels/palace-luxury.jpg',
    description:
      'Twin tower stacks + hillside villas edging tea-blue lakes — Ramadan and weekend premiums apply.',
    amenities: ['Twin towers', 'Villa courtyards', 'Half-board', 'Boat picnics'],
  },
]

export function getFeaturedHotels() {
  return FEATURED_HOTEL_IDS.map((id) => hotels.find((h) => h.id === id)).filter(
    (h) => h != null,
  )
}
