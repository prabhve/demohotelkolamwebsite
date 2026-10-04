import React, { useState } from 'react';
import { Room } from '../types/hotel';
import { ROOMS } from '../data/hotelData';
import { RoomVisualCard } from './VisualIllustrations';
import { Check, Users, Maximize2, Sparkles, Tv, Wind, Coffee, Eye, ArrowRight, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RoomExplorerProps {
  onSelectRoomForBooking: (roomId: string) => void;
}

export const RoomExplorer: React.FC<RoomExplorerProps> = ({ onSelectRoomForBooking }) => {
  const [filter, setFilter] = useState<'all' | 'deluxe' | 'balcony' | 'superior' | 'suite'>('all');
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  const filteredRooms = filter === 'all' 
    ? ROOMS 
    : ROOMS.filter(r => r.category === filter);

  return (
    <section id="rooms" className="py-14 sm:py-20 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Segmented Filter Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12"
        >
          <div className="space-y-2 max-w-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Accommodations & Suites
            </p>
            <h2 className="text-2.5xl sm:text-3.5xl lg:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Curated Comfort for Every Traveler
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600">
              Clean, spacious air-conditioned rooms with high-speed fiber Wi-Fi, premium cotton linens, en-suite bathrooms, and quiet soundproofing.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs overflow-x-auto max-w-full pb-1 sm:pb-1">
            {[
              { id: 'all', label: `All (${ROOMS.length})` },
              { id: 'deluxe', label: 'Deluxe' },
              { id: 'balcony', label: 'Balcony' },
              { id: 'superior', label: 'Himalayan' },
              { id: 'suite', label: 'Suites' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Rooms Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room) => (
              <motion.div
                key={room.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl overflow-hidden border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Card Image */}
                  <div className="p-3 bg-slate-900/5">
                    <RoomVisualCard type={room.image} title={room.name} />
                  </div>

                  {/* Content Details */}
                  <div className="p-5 sm:p-6 space-y-4">
                    
                    {/* Title & Metadata */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                        <span>{room.size}</span>
                        <span aria-hidden="true">·</span>
                        <span>{room.bedType}</span>
                        <span aria-hidden="true">·</span>
                        <span>{room.occupancy}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                        {room.name}
                      </h3>
                      <p className="text-xs text-amber-800 font-medium">
                        {room.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {room.description}
                    </p>

                    {/* Key Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      {room.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Bottom Card Action & Price */}
                <div className="p-5 sm:p-6 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between gap-3">
                  
                  {/* Price Display */}
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-slate-900">
                        ₹{room.discountPrice}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ₹{room.rackPrice}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-emerald-700 font-medium">
                      15% Direct Discount applied
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalRoom(room)}
                      className="p-2 sm:p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
                      title="View Room Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onSelectRoomForBooking(room.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs hover:shadow transition-all"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Room Details Modal */}
      <AnimatePresence>
        {activeModalRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 space-y-5 shadow-2xl border border-slate-200"
            >
              
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-0.5">
                    <span>{activeModalRoom.size}</span>
                    <span>·</span>
                    <span>{activeModalRoom.view}</span>
                    <span>·</span>
                    <span>{activeModalRoom.occupancy}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    {activeModalRoom.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalRoom(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Room Visual Preview */}
              <RoomVisualCard type={activeModalRoom.image} title={activeModalRoom.name} />

              {/* Full Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Room Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeModalRoom.description}
                </p>
              </div>

              {/* Complete Inclusions List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-slate-50 p-4 rounded-xl">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Room Features & Tech
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalRoom.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Bath & Personal Care
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalRoom.bathAmenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* House Policies for Room */}
              <div className="text-[11px] sm:text-xs text-slate-500 space-y-1 bg-amber-50/60 p-3 rounded-lg border border-amber-200/50">
                <p className="font-semibold text-amber-900">Hotel Kolam House Policies:</p>
                <p>• Standard Check-in 12:00 PM | Standard Check-out 11:00 AM</p>
                <p>• Daily housekeeping included · 100% Non-smoking indoor rooms</p>
                <p>• Pets welcome with advance notification · Government ID required at registration</p>
              </div>

              {/* Modal Bottom CTA */}
              <div className="pt-2 flex items-center justify-between gap-4 border-t border-slate-200">
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">₹{activeModalRoom.discountPrice}</span>
                  <span className="text-xs text-slate-500 ml-1">/ night</span>
                </div>
                <button
                  onClick={() => {
                    const id = activeModalRoom.id;
                    setActiveModalRoom(null);
                    onSelectRoomForBooking(id);
                  }}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow-xs transition-all"
                >
                  Proceed to Book Room
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
