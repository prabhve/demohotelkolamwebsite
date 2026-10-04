import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold font-display text-white">
              Hotel Kolam
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Townhouse 1346 Hotel Kolam · Plot 36, Raja Road, Near Prince Chowk, Central Dehradun, Uttarakhand 248001.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>4.2★ Rated Boutique Stay in Dehradun</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#rooms" className="hover:text-white transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Amenities & Backup</a></li>
              <li><a href="#dining" className="hover:text-white transition-colors">The Kolam Diner</a></li>
              <li><a href="#sightseeing" className="hover:text-white transition-colors">Explore Dehradun & Mussoorie</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location, Map & Directions</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Guest Reviews</a></li>
            </ul>
          </div>

          {/* Local Attractions Proximity */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Key Distances
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Dehradun Railway Station: 0.6 km</li>
              <li>• Paltan Bazaar & Clock Tower: 0.8 km</li>
              <li>• Forest Research Institute (FRI): 4.5 km</li>
              <li>• Robber's Cave (Guchhupani): 8.2 km</li>
              <li>• Sahastradhara Springs: 12 km</li>
              <li>• Mussoorie Mall Road: 32 km</li>
              <li>• Jolly Grant Airport: 26 km</li>
            </ul>
          </div>

          {/* Contact & Booking Privileges */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Reservations
            </h4>
            <p className="text-xs text-slate-300">
              Direct Phone: <a href={`tel:${HOTEL_INFO.phone}`} className="text-white hover:underline">{HOTEL_INFO.phone}</a>
            </p>
            <p className="text-xs text-slate-300">
              WhatsApp Desk: <a href={`https://wa.me/${HOTEL_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+91 {HOTEL_INFO.whatsapp}</a>
            </p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 space-y-1 mt-2">
              <span className="text-amber-300 font-bold block">Direct Promo: KOLAM15</span>
              <span>Enjoy 15% instant savings with zero booking fees on direct reservations.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hotel Kolam Dehradun. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Plot 36, Raja Road, Prince Chowk, Dehradun</span>
            <span>·</span>
            <span>Check-in 12:00 PM / Check-out 11:00 AM</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
