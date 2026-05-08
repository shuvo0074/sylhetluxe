/** @typedef {{ id: string; name: string; location: string; type: 'Hotel' | 'Resort'; rating: number; guestCapacity: number; hasFamilyRooms: boolean; price: number; image: string; description: string; amenities: string[] }} Hotel */

export const LUXURY_MIN_PRICE_BDT = 14000

/** @type {string[]} */
export const FEATURED_HOTEL_IDS = [
  'grand-sultan',
  'rose-view',
  'dusai',
  'nazimgarh',
  'nirvana-inn',
  'noorjahan-grand',
  'palace-luxury',
]

/** @type {Hotel[]} */
export const hotels = [
  {
    id: 'grand-sultan',
    name: 'Grand Sultan Tea Resort & Golf',
    location: 'Srimangal Road, Zakiganj · Sylhet',
    type: 'Resort',
    rating: 4.8,
    guestCapacity: 6,
    hasFamilyRooms: true,
    price: 28900,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    description:
      'Sprawling tea-country estate with an 18-hole course, lagoon-style pools, and butler-attended villas overlooking manicured valleys.',
    amenities: ['Golf course', 'Spa', 'Infinity pool', 'Fine dining'],
  },
  {
    id: 'rose-view',
    name: 'Hotel Rose View',
    location: 'Shahjalal Upashahar · Sylhet',
    type: 'Hotel',
    rating: 4.6,
    guestCapacity: 4,
    hasFamilyRooms: true,
    price: 11200,
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
    description:
      'City-centre landmark with skyline panoramas, executive floors, and refined Bengali fusion at the rooftop lounge.',
    amenities: ['Rooftop dining', 'Gym', 'Business centre', 'Valet'],
  },
  {
    id: 'dusai',
    name: 'Dusai Resort & Spa',
    location: 'Moulvi Bazar · Hills near Sylhet',
    type: 'Resort',
    rating: 4.7,
    guestCapacity: 5,
    hasFamilyRooms: true,
    price: 22500,
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    description:
      'Hilltop sanctuary of private chalets, Ayurvedic spa rituals, and misty dawn views over rolling tea estates.',
    amenities: ['Spa', 'Nature trails', 'Kids club', 'Lake deck'],
  },
  {
    id: 'nazimgarh',
    name: 'Nazimgarh Wilderness Resort',
    location: 'Lalakhal approach · Sylhet region',
    type: 'Resort',
    rating: 4.5,
    guestCapacity: 4,
    hasFamilyRooms: true,
    price: 18900,
    image:
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Adventure-luxe escape with river excursions, curated tea tastings, and candlelit decks above the forest canopy.',
    amenities: ['Boat trips', 'Tea lounge', 'Wild deck', 'Bonfire nights'],
  },
  {
    id: 'nirvana-inn',
    name: 'Nirvana Inn',
    location: 'Mirabazar · Sylhet',
    type: 'Hotel',
    rating: 4.4,
    guestCapacity: 3,
    hasFamilyRooms: true,
    price: 7800,
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop',
    description:
      'Boutique comfort near commercial hubs, with warm service, spa suites, and artisanal breakfast spreads.',
    amenities: ['Spa', 'Concierge', 'Airport shuttle', 'Café'],
  },
  {
    id: 'noorjahan-grand',
    name: 'Hotel Noorjahan Grand',
    location: 'Kazirbazar · Sylhet',
    type: 'Hotel',
    rating: 4.3,
    guestCapacity: 4,
    hasFamilyRooms: true,
    price: 9200,
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop',
    description:
      'Heritage-inspired interiors with crystal-ballroom events, high-tea service, and family-friendly floor plans.',
    amenities: ['Ballroom', 'High tea', 'Airport pickup', 'Wi‑Fi'],
  },
  {
    id: 'palace-luxury',
    name: 'The Palace Luxury Resort',
    location: 'Bahubal · Sylhet outskirts',
    type: 'Resort',
    rating: 4.9,
    guestCapacity: 8,
    hasFamilyRooms: true,
    price: 31200,
    image:
      'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Palatial suites, private plunge pools, and curated estate drives through Bangladesh’s most photogenic tea gardens.',
    amenities: ['Private pools', 'Helipad', 'Chef’s table', 'Wine cellar'],
  },
  {
    id: 'star-pacific',
    name: 'Hotel Star Pacific',
    location: 'Dargah Gate · Sylhet',
    type: 'Hotel',
    rating: 4.2,
    guestCapacity: 3,
    hasFamilyRooms: false,
    price: 6500,
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop',
    description:
      'Elevated essentials for city breaks—soundproof rooms, rain showers, and quick access to spiritual landmarks.',
    amenities: ['Soundproof rooms', 'Rain showers', 'Laundry', '24h desk'],
  },
  {
    id: 'holy-gate',
    name: 'Hotel Holy Gate',
    location: 'Zindabazar · Sylhet',
    type: 'Hotel',
    rating: 4.1,
    guestCapacity: 2,
    hasFamilyRooms: false,
    price: 5200,
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
    description:
      'Walkable to bazaars and cafés—bright rooms, ergonomic workspaces, and house-made pastries each morning.',
    amenities: ['Work desks', 'Room service', 'Parking', 'Café'],
  },
  {
    id: 'garden-city',
    name: 'Garden City Hotel & Residence',
    location: 'Amberkhana · Sylhet',
    type: 'Hotel',
    rating: 4,
    guestCapacity: 5,
    hasFamilyRooms: true,
    price: 8800,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop',
    description:
      'Extended-stay residences with kitchens, leafy courtyards, and concierge-led tea-garden day trips.',
    amenities: ['Kitchenettes', 'Garden', 'Laundry', 'Day trips'],
  },
  {
    id: 'metro-international',
    name: 'Hotel Metro International',
    location: 'Subidbazar · Sylhet',
    type: 'Hotel',
    rating: 4,
    guestCapacity: 2,
    hasFamilyRooms: false,
    price: 4800,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
    description:
      'Smart, efficient rooms for quick turnarounds—express breakfast, meeting pods, and reliable high-speed internet.',
    amenities: ['Meeting pods', 'Express breakfast', 'Wi‑Fi', 'Parking'],
  },
  {
    id: 'la-vinci',
    name: 'La Vinci Hotel',
    location: 'Kumarpara · Sylhet',
    type: 'Hotel',
    rating: 4.3,
    guestCapacity: 4,
    hasFamilyRooms: true,
    price: 10200,
    image:
      'https://images.unsplash.com/photo-1596436889106-b35f625f60ac?q=80&w=2070&auto=format&fit=crop',
    description:
      'Art-forward interiors, sculptural lighting, and a jazz lobby bar favoured by creatives and diplomats.',
    amenities: ['Lobby bar', 'Art tours', 'Gym', 'Room service'],
  },
  {
    id: 'briti',
    name: 'Briti Hotel Sylhet',
    location: 'Darshan Deuri · Sylhet',
    type: 'Hotel',
    rating: 3.9,
    guestCapacity: 3,
    hasFamilyRooms: false,
    price: 4200,
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop',
    description:
      'Great value gateway to Ratargul and Lalakhal—friendly staff, hearty buffets, and packed picnic hampers.',
    amenities: ['Buffet', 'Tour desk', 'Laundry', 'Parking'],
  },
  {
    id: 'monamel',
    name: 'Monamel Hotel & Resorts',
    location: 'Tea Museum Road · Srimangal',
    type: 'Resort',
    rating: 4.5,
    guestCapacity: 4,
    hasFamilyRooms: true,
    price: 15400,
    image:
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Eco-luxe cottages stitched into tea terraces—guided plucking at dawn and slow dining under star lanterns.',
    amenities: ['Tea tours', 'Cycling', 'Spa cottage', 'Stargazing'],
  },
]

export function getFeaturedHotels() {
  return FEATURED_HOTEL_IDS.map((id) => hotels.find((h) => h.id === id)).filter(
    (h) => h != null,
  )
}
