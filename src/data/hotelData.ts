import { Room, BookingAddon, MenuItem, SightseeingSpot, Review, FaqItem } from '../types/hotel';

export const HOTEL_INFO = {
  name: "Hotel Kolam",
  subname: "Townhouse Hotel Kolam",
  city: "Dehradun",
  state: "Uttarakhand",
  pinCode: "248001",
  address: "Plot No. 36, Raja Road, Near Prince Chowk & Paltan Bazaar, Dehradun, Uttarakhand 248001",
  landmark: "Near Prince Chowk & Dehradun Railway Station (0.6 km)",
  coordinates: {
    lat: 30.3170283,
    lng: 78.0364608,
  },
  phone: "+91 124 458 8630",
  altPhone: "+91 94120 54321",
  whatsapp: "919412054321",
  email: "reservations@hotelkolamdehradun.com",
  checkInTime: "12:00 PM",
  checkOutTime: "11:00 AM",
  rating: 4.2,
  totalReviews: 384,
  googleMapsUrl: "https://www.google.com/maps/place/Hotel+Kolam/@30.3170283,78.0364608,17z",
};

export const ROOMS: Room[] = [
  {
    id: "classic-deluxe",
    name: "Classic Deluxe Room",
    category: "deluxe",
    tagline: "Spacious comfort with premium bedding and quiet ambient lighting",
    rackPrice: 2499,
    discountPrice: 1899,
    size: "260 sq.ft",
    occupancy: "2 Adults + 1 Child",
    bedType: "1 King Size Bed",
    view: "City & Courtyard View",
    image: "deluxe_room",
    gallery: ["deluxe_main", "deluxe_bath", "deluxe_desk"],
    features: [
      "Individually Controlled AC & Heater",
      "High-Speed Fiber Wi-Fi (50 Mbps)",
      "43-inch HD Smart TV with OTT",
      "Ergonomic Work Desk & Chair",
      "24/7 Hot Water Geyser & Rain Shower",
      "Daily Housekeeping & Mineral Water",
      "Tea & Coffee Electric Kettle Set"
    ],
    description: "Our Classic Deluxe Room offers a relaxing haven in the center of Dehradun. Designed with clean modern lines, warm wooden accents, premium mattress, and blackout curtains for restorative rest after travel or meetings.",
    bathAmenities: ["Herbal Toiletries", "Fresh Bath Towels", "Wall-mounted Hairdryer", "Dental & Shaving Kit on request"],
    popular: true
  },
  {
    id: "executive-balcony",
    name: "Executive Balcony Room",
    category: "balcony",
    tagline: "Private sit-out balcony with morning sunshine and Doon valley breeze",
    rackPrice: 3499,
    discountPrice: 2699,
    size: "320 sq.ft",
    occupancy: "2 Adults + 1 Child",
    bedType: "1 Super King Bed",
    view: "Private Balcony & Cityscape",
    image: "balcony_room",
    gallery: ["balcony_main", "balcony_view", "balcony_lounge"],
    features: [
      "Private Step-Out Balcony with Coffee Chairs",
      "Split Air Conditioner & Instant Heating",
      "High-Speed Wi-Fi & Workstation",
      "50-inch 4K Smart TV",
      "Mini Refrigerator & Snack Basket",
      "Complimentary Tea/Coffee Maker with Green Teas",
      "Spacious Wardrobe with Digital Safe"
    ],
    description: "Enjoy morning tea with panoramic vistas of Dehradun from your private balcony. Fitted with a king plush bed, elegant armchairs, and premium bath fixtures for travelers seeking extra space and fresh air.",
    bathAmenities: ["Luxury Body Wash & Shampoo", "Plush Bathrobes", "Slippers", "Large Vanity Mirror"],
    popular: true
  },
  {
    id: "himalayan-superior",
    name: "Himalayan Superior View Room",
    category: "superior",
    tagline: "Upper-floor room with panoramic foothill views towards Mussoorie",
    rackPrice: 4199,
    discountPrice: 3199,
    size: "360 sq.ft",
    occupancy: "2 Adults + 2 Children",
    bedType: "1 Royal King Bed",
    view: "Panoramic Himalayan Foothills",
    image: "superior_room",
    gallery: ["superior_main", "superior_view", "superior_bath"],
    features: [
      "Top-Floor Scenic Foothill & Valley View",
      "Custom Pillow Menu & Dual Duvets",
      "Dedicated High-Speed Fiber Router",
      "Cozy Sofa Lounge & Reading Corner",
      "Complimentary Welcome Drink on Arrival",
      "Express 24/7 In-Room Dining Service",
      "Soundproof Double-Glazed Windows"
    ],
    description: "Positioned on our topmost floors, the Himalayan Superior View Room gives you uninterrupted glimpses of the Shivalik range and crisp morning air. Perfect for couples, leisure travelers, and executives.",
    bathAmenities: ["Premium Ayurvedic Toiletries", "Rainfall Shower Panel", "Fluffy Bath Mats", "Magnifying Mirror"]
  },
  {
    id: "royal-family-suite",
    name: "Royal Family Suite",
    category: "suite",
    tagline: "Interconnected multi-bed suite tailored for family holidays and groups",
    rackPrice: 5499,
    discountPrice: 4199,
    size: "480 sq.ft",
    occupancy: "4 Adults + 2 Children",
    bedType: "2 Queen Size Beds + Sofa Bed",
    view: "Dual-Aspect City & Foothill View",
    image: "family_suite",
    gallery: ["suite_main", "suite_living", "suite_bath"],
    features: [
      "2 Separate Sleeping Zones & Living Lounge",
      "2 Smart TVs with Kids Channels & Streaming",
      "Dining Table for 4 Persons",
      "Large Mini Bar & Electric Kettle Set",
      "Spacious Double Wardrobe & Luggage Benches",
      "Child-Safe Balcony Locks & Nightlights",
      "Pet Bedding & Bowls Available on Request"
    ],
    description: "Our expansive Family Suite accommodates entire families in supreme comfort. Features two queen beds, a separate sitting lounge, large bathroom with rainfall shower, and plenty of space for luggage.",
    bathAmenities: ["Family Care Kit", "Dual Sinks & Large Counter", "Hot Water 24 Hours", "Hairdryer & Shaving Station"]
  }
];

export const ADDONS: BookingAddon[] = [
  {
    id: "breakfast-buffet",
    name: "Daily Himalayan Breakfast Buffet",
    price: 199,
    perPerson: true,
    perNight: true,
    description: "Freshly made hot parathas, poha, eggs, seasonal fruits, tea & filter coffee at The Kolam Diner",
    iconName: "Utensils"
  },
  {
    id: "station-pickup",
    name: "Dehradun Railway Station Pickup / Drop",
    price: 350,
    description: "Private cab meet & greet at Railway Station (just 3 mins away) with luggage assist",
    iconName: "Car"
  },
  {
    id: "airport-transfer",
    name: "Jolly Grant Airport (DED) Pickup / Drop",
    price: 1199,
    description: "Comfortable air-conditioned sedan cab directly from Dehradun Airport to hotel lobby",
    iconName: "Plane"
  },
  {
    id: "early-checkin",
    name: "Guaranteed Early Check-in (from 9:00 AM)",
    price: 450,
    description: "Subject to room prep; guaranteed room ready before standard 12:00 PM time",
    iconName: "Clock"
  },
  {
    id: "extra-bed",
    name: "Extra Rollaway Bed & Fresh Linens",
    price: 599,
    perNight: true,
    description: "Comfortable rollaway single mattress with pillows and warm blanket",
    iconName: "Bed"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Garhwali Aloo Ke Gutke & Mandua Roti",
    category: "pahadi",
    price: 240,
    veg: true,
    isChefSpecial: true,
    description: "Crispy Pahadi baby potatoes tossed in local Jakhiya spice seeds, served with fresh ragi rotis & mint chutney."
  },
  {
    id: "m2",
    name: "Pahadi Kumaoni Dal & Basmati Rice",
    category: "pahadi",
    price: 220,
    veg: true,
    isChefSpecial: true,
    description: "Slow-simmered traditional hill lentils with aromatic tempering of ghee, coriander seeds & mountain garlic."
  },
  {
    id: "m3",
    name: "Paneer Butter Masala (Kolam Signature)",
    category: "main_course",
    price: 290,
    veg: true,
    isChefSpecial: true,
    description: "Tender cottage cheese cubes simmered in a silky tomato, cashew, and makhana gravy with kasuri methi."
  },
  {
    id: "m4",
    name: "Dhabha Style Chicken Curry",
    category: "main_course",
    price: 360,
    veg: false,
    description: "Homestyle bone-in chicken braised with roasted whole spices, onions, and slow caramelized gravy."
  },
  {
    id: "m5",
    name: "Dal Makhani 24-Hour Dum",
    category: "main_course",
    price: 260,
    veg: true,
    description: "Black lentils slow-cooked overnight on charcoal embers with fresh churned white butter & cream."
  },
  {
    id: "m6",
    name: "Stuffed Amritsari Aloo Paratha Combo",
    category: "breakfast",
    price: 180,
    veg: true,
    isChefSpecial: true,
    description: "2 Golden tawa parathas stuffed with spiced potatoes, served with homemade white butter, curd & pickle."
  },
  {
    id: "m7",
    name: "Dehradun Masala Poha with Peanuts",
    category: "breakfast",
    price: 140,
    veg: true,
    description: "Light flattened rice tempered with mustard, curry leaves, crunchy peanuts, and fresh lemon wedge."
  },
  {
    id: "m8",
    name: "Special Masala Omelette with Butter Toast",
    category: "breakfast",
    price: 160,
    veg: false,
    description: "2-Egg fluffy omelette loaded with chopped onions, tomatoes, green chillies, served with 2 butter toasts."
  },
  {
    id: "m9",
    name: "Crispy Honey Chilli Potatoes",
    category: "snacks",
    price: 210,
    veg: true,
    description: "Crisp potato fingers glazed in a sweet & spicy garlic chilli reduction with toasted sesame."
  },
  {
    id: "m10",
    name: "Steamed Vegetable / Paneer Momos (8 Pcs)",
    category: "snacks",
    price: 170,
    veg: true,
    description: "Doon valley favorite steamed dumplings served with fiery red chutney and creamy mayo dip."
  },
  {
    id: "m11",
    name: "Clay Oven Tandoori Roti & Garlic Naan",
    category: "breads_rice",
    price: 70,
    veg: true,
    description: "Freshly baked in our clay tandoor, brushed with desi ghee or minced garlic and butter."
  },
  {
    id: "m12",
    name: "Steamed Dehraduni Long-Grain Basmati Rice",
    category: "breads_rice",
    price: 150,
    veg: true,
    description: "World-renowned aromatic long-grain Dehradun basmati rice, naturally fragrant and fluffy."
  },
  {
    id: "m13",
    name: "Kulhad Ginger Masala Chai",
    category: "beverages",
    price: 60,
    veg: true,
    isChefSpecial: true,
    description: "Brewed fresh with crushed ginger, cardamom, clove, and full-cream milk in traditional earthen clay pot."
  },
  {
    id: "m14",
    name: "South Indian Filter Coffee",
    category: "beverages",
    price: 80,
    veg: true,
    description: "Frothy, rich chicory blend coffee served piping hot in steel dabarah & tumbler."
  }
];

export const SIGHTSEEING_SPOTS: SightseeingSpot[] = [
  {
    id: "paltan-bazaar",
    name: "Paltan Bazaar & Clock Tower (Ghanta Ghar)",
    distance: "0.8 km",
    duration: "10 mins walk / 3 mins auto",
    bestTime: "4:00 PM – 9:00 PM",
    category: "shopping",
    description: "Dehradun's most vibrant heritage shopping street for authentic Basmati rice, woolen shawls, local street snacks, brass items, and the iconic 6-faced 1953 Clock Tower.",
    highlight: "Famous for Doon stick sweets, local Bakeries & street food",
    travelTip: "Just a short walk from Hotel Kolam. Perfect for evening strolls and picking up souvenirs."
  },
  {
    id: "fri",
    name: "Forest Research Institute (FRI)",
    distance: "4.5 km",
    duration: "12 mins drive",
    bestTime: "9:30 AM – 5:00 PM",
    category: "heritage",
    description: "A monumental Greco-Roman colonial architectural masterpiece sprawling across 450 hectares with 6 forestry museums, lush botanical gardens, and cinematic tree-lined avenues.",
    highlight: "Stunning colonial architecture & heritage museum",
    travelTip: "Carry government ID for entry tickets. Great spot for heritage photography."
  },
  {
    id: "robbers-cave",
    name: "Robber's Cave (Guchhupani)",
    distance: "8.2 km",
    duration: "20 mins drive",
    bestTime: "8:00 AM – 5:30 PM",
    category: "nature",
    description: "A thrilling 600-meter natural limestone gorge where ice-cold underground streams flow between narrow 10-meter high rock walls, ending in a cascading waterfall.",
    highlight: "Walk through cold ankle-deep crystal mountain stream",
    travelTip: "Rent water slippers at the cave entrance (₹30) and pack a towel."
  },
  {
    id: "sahastradhara",
    name: "Sahastradhara (Thousandfold Sulphur Springs)",
    distance: "12.0 km",
    duration: "25 mins drive",
    bestTime: "9:00 AM – 6:00 PM",
    category: "nature",
    description: "Famous natural sulfur springs, cascading stepped waterfalls, and limestone caves known for therapeutic mineral baths and ropeway cable car rides with valley views.",
    highlight: "Sulfur mineral baths & hill cable car ropeway",
    travelTip: "Hotel Kolam desk can arrange a half-day roundtrip taxi with waiting."
  },
  {
    id: "mussoorie",
    name: "Mussoorie 'Queen of Hills' & Mall Road",
    distance: "32.0 km",
    duration: "60 mins scenic hill drive",
    bestTime: "Full Day / Weekend Excursion",
    category: "hillstation",
    description: "The world-famous British colonial hill resort perched at 6,580 ft elevation with panoramic views of the snowcapped Himalayas, Kempty Falls, Gun Hill, and Mall Road cafes.",
    highlight: "Breathtaking Himalayan panorama & colonial promenade",
    travelTip: "We arrange reliable hill-experienced tourist cabs from Hotel Kolam lobby at fixed government-approved rates."
  },
  {
    id: "tapkeshwar",
    name: "Tapkeshwar Mahadev Cave Temple",
    distance: "6.5 km",
    duration: "18 mins drive",
    bestTime: "6:00 AM – 7:00 PM",
    category: "spiritual",
    description: "An ancient subterranean cave shrine dedicated to Lord Shiva, nestled by the Asan river where natural mineral water continuously drips (tap-tap) on the Shivling.",
    highlight: "Serene holy river cave inside deep forest",
    travelTip: "Peaceful morning visit. Located in Garhi Cantt area."
  },
  {
    id: "mindrolling",
    name: "Mindrolling Monastery & Great Stupa",
    distance: "7.2 km",
    duration: "18 mins drive",
    bestTime: "9:00 AM – 6:00 PM",
    category: "spiritual",
    description: "One of India's largest Tibetan Buddhist centers featuring a 185-foot Great Stupa, gilded Tibetan shrines, peaceful manicured gardens, and a Tibetan handicraft market.",
    highlight: "185-ft Buddhist Stupa & calming monastery gardens",
    travelTip: "Check out the Tibetan bakery near the gate for authentic steamed tingmo."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Rohan Verma",
    city: "New Delhi",
    rating: 5,
    date: "2 weeks ago",
    travelerType: "Solo",
    comment: "Excellent location near Prince Chowk and Railway Station! I arrived on the Vande Bharat train late evening, and the hotel was barely 3 minutes away. The room was spotless, AC was crisp, and the staff helped me arrange an early cab to Mussoorie. High-speed Wi-Fi worked great for my zoom calls.",
    roomStayed: "Executive Balcony Room",
    verified: true
  },
  {
    id: "r2",
    author: "Priya & Amit Sharma",
    city: "Chandigarh",
    rating: 5,
    date: "1 month ago",
    travelerType: "Couple",
    comment: "Stayed here for 2 nights during our weekend trip to Dehradun. The balcony room gives lovely fresh morning breeze. The in-house diner serves hot Pahadi Aloo ke Gutke and ginger tea that felt so soothing. Very clean bathroom with instant 24/7 hot water. 10/10 value for money.",
    roomStayed: "Executive Balcony Room",
    verified: true
  },
  {
    id: "r3",
    author: "Col. Suresh Negi (Retd.)",
    city: "Dehradun / Rishikesh",
    rating: 4.5,
    date: "3 weeks ago",
    travelerType: "Family",
    comment: "Booked 2 rooms for my family attending a wedding near Rajpur Road. Very cooperative reception staff, smooth check-in, and good parking space. Paltan bazaar is within walking distance so the ladies enjoyed shopping without cab hassles.",
    roomStayed: "Royal Family Suite",
    verified: true
  },
  {
    id: "r4",
    author: "Ananya Mukherjee",
    city: "Kolkata",
    rating: 5,
    date: "Last month",
    travelerType: "Business",
    comment: "Super convenient if you have work in central Dehradun or need fast access to the railway station. Rooms are well-appointed with study desks, multiple power sockets, and zero street noise inside. Food was fresh and served promptly.",
    roomStayed: "Classic Deluxe Room",
    verified: true
  },
  {
    id: "r5",
    author: "Vikramjit Singh",
    city: "Ludhiana",
    rating: 4.5,
    date: "2 months ago",
    travelerType: "Family",
    comment: "We stayed in the Royal Family Suite with kids and our pet Golden Retriever. Really appreciated the pet-friendly attitude of the management with no unnecessary hassles. Clean linens and great breakfast.",
    roomStayed: "Royal Family Suite",
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What are the standard Check-in and Check-out timings at Hotel Kolam?",
    answer: "Standard check-in is from 12:00 PM (Noon) and standard check-out is until 11:00 AM. Early check-in (from 9:00 AM) or late check-out is available upon request subject to room availability, or can be guaranteed directly during booking.",
    category: "checkin"
  },
  {
    question: "How close is Hotel Kolam to Dehradun Railway Station & Bus Stand?",
    answer: "Hotel Kolam is located at Plot 36 Raja Road near Prince Chowk, just 600 meters (a 3-minute auto ride or 8-minute walk) from Dehradun Railway Station. ISBT Dehradun is approximately 5.5 km (15 mins drive).",
    category: "location"
  },
  {
    question: "Is there free parking available for cars & two-wheelers?",
    answer: "Yes, we offer complimentary on-premise and designated secure parking for hotel guests. Driver rest arrangements and water facilities are also available.",
    category: "amenities"
  },
  {
    question: "Does the hotel provide in-house dining and room service?",
    answer: "Yes! 'The Kolam Diner' serves fresh, authentic North Indian, local Garhwali Pahadi specialties, Chinese snacks, and morning breakfast spreads. 24-hour room service is also available for all guest rooms.",
    category: "dining"
  },
  {
    question: "Is Hotel Kolam pet-friendly?",
    answer: "Yes, we welcome pets (dogs & cats) with advance notification without charging exorbitant pet fees. Please ensure pets are accompanied in common areas.",
    category: "amenities"
  },
  {
    question: "Can the hotel help with taxi bookings to Mussoorie, Rishikesh & Airport?",
    answer: "Yes! Our 24-hour Travel Desk organizes verified private cabs for Jolly Grant Airport (DED), local Dehradun sightseeing (FRI, Robber's Cave, Sahastradhara), and full-day Mussoorie or Char Dham trips at standard fixed rates.",
    category: "location"
  }
];

export const AMENITY_CATEGORIES = [
  {
    title: "Essential Comforts",
    items: [
      { name: "24/7 Power Backup & Inverter", desc: "Uninterrupted lighting, AC, and high-speed Wi-Fi throughout your stay" },
      { name: "24-Hour Hot Water Geysers", desc: "Instant high-pressure hot water in all private en-suite bathrooms" },
      { name: "Split Air Conditioning & Heating", desc: "Individual remote-controlled climate settings for summer & winter" },
      { name: "Elevator / Lift to All Floors", desc: "Smooth accessibility for senior citizens, families, and heavy luggage" }
    ]
  },
  {
    title: "Dining & Hospitality",
    items: [
      { name: "In-House Multi-Cuisine Diner", desc: "Fresh Garhwali Pahadi specials, North Indian, and continental breakfast" },
      { name: "24/7 In-Room Dining Service", desc: "Piping hot meals and beverages delivered right to your bedside" },
      { name: "Daily Complimentary Mineral Water", desc: "Sealed bottled water refreshed daily during housekeeping" },
      { name: "Electric Tea/Coffee Kettle in Rooms", desc: "Assorted tea bags, coffee sachets, and sugar replenished daily" }
    ]
  },
  {
    title: "Work & Connectivity",
    items: [
      { name: "High-Speed Optical Fiber Wi-Fi", desc: "50+ Mbps speed across all rooms and common lobby areas" },
      { name: "Ergonomic Work Desks", desc: "Comfortable desk setup with universal charging sockets for remote work" },
      { name: "43-50\" HD Smart LED TVs", desc: "Access to YouTube, OTT apps, news, and regional entertainment channels" }
    ]
  },
  {
    title: "Services & Local Travel",
    items: [
      { name: "24-Hour Front Desk & Concierge", desc: "Assistance with luggage, wake-up calls, doctor-on-call, and directions" },
      { name: "Free On-Premise Secure Parking", desc: "Safe parking for cars and bikes with night security guard" },
      { name: "Mussoorie & Sightseeing Cab Desk", desc: "Reliable hill-experienced drivers and fixed tariff tour packages" },
      { name: "Pet-Friendly Welcoming Stays", desc: "Pets stay happily with their owners at no hidden extra surcharges" }
    ]
  }
];
