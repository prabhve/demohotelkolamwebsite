import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, ShieldCheck, Wifi, Coffee, Sparkles, ArrowRight, BedDouble } from 'lucide-react';
import { motion } from 'motion/react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { HotelHeroArtwork } from './VisualIllustrations';

interface HeroProps {
  onSearch: (params: { checkIn: string; checkOut: string; guests: number; roomId: string }) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenBooking }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState('classic-deluxe');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ checkIn, checkOut, guests, roomId: selectedRoom });
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Value Proposition + Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            
            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1 text-amber-800 font-semibold bg-amber-50 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-md">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                4.2 Rating (380+ Reviews)
              </span>
              <span className="hidden sm:inline text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                Prince Chowk, Central Dehradun
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3.5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 font-display leading-[1.12] text-balance">
              Serene comfort in the heart of <span className="text-amber-800">Dehradun</span>.
            </h1>

            {/* Concrete Editorial Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
              Located 600m from Dehradun Railway Station and Paltan Bazaar. Air-conditioned rooms with 24/7 power backup, high-speed fiber Wi-Fi, in-house Garhwali dining, and direct cab assistance for Mussoorie & Rishikesh.
            </p>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 border-t border-slate-200">
              <div className="p-2 sm:p-0 rounded-lg bg-white sm:bg-transparent border sm:border-0 border-slate-100">
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Starting from</p>
                <p className="text-base sm:text-xl font-bold text-slate-900 mt-0.5">₹1,899<span className="text-[10px] sm:text-xs font-normal text-slate-500">/nt</span></p>
              </div>
              <div className="p-2 sm:p-0 rounded-lg bg-white sm:bg-transparent border sm:border-0 border-slate-100">
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">To Rly Station</p>
                <p className="text-base sm:text-xl font-bold text-emerald-800 mt-0.5">0.6 km <span className="text-[10px] sm:text-xs font-normal text-slate-500">(3m)</span></p>
              </div>
              <div className="p-2 sm:p-0 rounded-lg bg-white sm:bg-transparent border sm:border-0 border-slate-100">
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Direct Booking</p>
                <p className="text-base sm:text-xl font-bold text-amber-800 mt-0.5">15% OFF</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 active:scale-98 rounded-xl shadow-md transition-all"
              >
                <span>Reserve Your Stay</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#rooms"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs"
              >
                <span>Explore Room Tiers</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Visual Architectural Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-900/15 h-[300px] sm:h-[380px] lg:h-[440px]">
              <HotelHeroArtwork className="w-full h-full" />
            </div>
          </motion.div>

        </div>

        {/* Quick Reservation Strip with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-amber-900/10"
        >
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-end">
            
            {/* Check-In */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Check-In Date
              </label>
              <div className="relative flex items-center">
                <Calendar className="absolute left-3 w-4 h-4 text-amber-700 pointer-events-none" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-none"
                  required
                />
              </div>
            </div>

            {/* Check-Out */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Check-Out Date
              </label>
              <div className="relative flex items-center">
                <Calendar className="absolute left-3 w-4 h-4 text-amber-700 pointer-events-none" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-none"
                  required
                />
              </div>
            </div>

            {/* Guests */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Guests & Rooms
              </label>
              <div className="relative flex items-center">
                <Users className="absolute left-3 w-4 h-4 text-amber-700 pointer-events-none" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-none"
                >
                  <option value={1}>1 Guest (Single Room)</option>
                  <option value={2}>2 Guests (1 Room)</option>
                  <option value={3}>3 Guests (1 Room + Extra Bed)</option>
                  <option value={4}>4 Guests (Family Suite)</option>
                  <option value={6}>6 Guests (Large Group)</option>
                </select>
              </div>
            </div>

            {/* Room Preference */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Room Category
              </label>
              <div className="relative flex items-center">
                <BedDouble className="absolute left-3 w-4 h-4 text-amber-700 pointer-events-none" />
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-none"
                >
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} · ₹{room.discountPrice}/nt
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search / Direct Booking Trigger */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 h-[42px]"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>

          {/* Micro Perks Strip */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500">
            <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Free Cancellation up to 24h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Free 50 Mbps Fiber Wi-Fi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Complimentary Morning Tea/Coffee</span>
            </div>
            <div className="text-amber-800 font-semibold">
              <span>Pay at Hotel (Cash / UPI / Cards)</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
