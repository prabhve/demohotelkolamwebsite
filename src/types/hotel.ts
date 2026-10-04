export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'balcony' | 'suite' | 'superior';
  tagline: string;
  rackPrice: number;
  discountPrice: number;
  size: string; // e.g., "280 sq.ft"
  occupancy: string; // e.g., "2 Adults, 1 Child"
  bedType: string; // e.g., "1 King Bed"
  view: string;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  bathAmenities: string[];
  popular?: boolean;
}

export interface BookingAddon {
  id: string;
  name: string;
  price: number;
  perPerson?: boolean;
  perNight?: boolean;
  description: string;
  iconName: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'breakfast' | 'pahadi' | 'main_course' | 'breads_rice' | 'snacks' | 'beverages';
  price: number;
  veg: boolean;
  isChefSpecial?: boolean;
  description: string;
}

export interface SightseeingSpot {
  id: string;
  name: string;
  distance: string;
  duration: string;
  bestTime: string;
  category: 'heritage' | 'nature' | 'spiritual' | 'shopping' | 'hillstation';
  description: string;
  highlight: string;
  travelTip: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  travelerType: 'Solo' | 'Family' | 'Couple' | 'Business';
  comment: string;
  roomStayed: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'checkin' | 'dining' | 'location' | 'amenities';
}

export interface BookingState {
  roomId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomsCount: number;
  selectedAddons: string[];
  promoCode: string;
  discountPercent: number;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  specialRequests: string;
  arrivalTime: string;
}
