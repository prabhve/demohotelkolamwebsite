import React, { useState } from 'react';
import { SIGHTSEEING_SPOTS, HOTEL_INFO } from '../data/hotelData';
import { Navigation, Clock, Car, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LocalGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'heritage' | 'nature' | 'spiritual' | 'shopping' | 'hillstation'>('all');
  const [cabModalOpen, setCabModalOpen] = useState(false);
  const [selectedSpotForCab, setSelectedSpotForCab] = useState<string>('Mussoorie');

  const filteredSpots = selectedCategory === 'all'
    ? SIGHTSEEING_SPOTS
    : SIGHTSEEING_SPOTS.filter(s => s.category === selectedCategory);

  const handleBookCab = (spotName: string) => {
    setSelectedSpotForCab(spotName);
    setCabModalOpen(true);
  };

  const sendCabInquiryToWhatsApp = () => {
    const msg = `*Sightseeing Cab Inquiry - Hotel Kolam Desk*\n\nDestination: ${selectedSpotForCab}\nPickup: Hotel Kolam Lobby (Prince Chowk)\n\nPlease provide cab options and estimated fair tariff.`;
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setCabModalOpen(false);
  };

  return (
    <section id="sightseeing" className="py-14 sm:py-20 md:py-24 bg-white border-y border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12"
        >
          <div className="space-y-2 max-w-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Explore Dehradun & Uttarakhand
            </p>
            <h2 className="text-2.5xl sm:text-3.5xl lg:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Doorstep Access to Iconic Attractions
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600">
              Located at Prince Chowk in Central Dehradun, Hotel Kolam puts you within swift driving distance of waterfalls, colonial landmarks, and hill stations.
            </p>
          </div>

          {/* Travel Desk Callout */}
          <div className="flex items-center gap-3 p-3.5 sm:p-4 bg-amber-50 rounded-2xl border border-amber-200 self-start md:self-auto">
            <Car className="w-6 h-6 sm:w-8 sm:h-8 text-amber-800 shrink-0" />
            <div>
              <p className="text-xs font-bold text-amber-950">Hotel Kolam Travel Desk</p>
              <p className="text-[11px] text-amber-800">Direct cabs for Mussoorie, FRI & Airport</p>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8">
          {[
            { id: 'all', label: 'All Destinations' },
            { id: 'shopping', label: 'Paltan Bazaar' },
            { id: 'heritage', label: 'Heritage & FRI' },
            { id: 'nature', label: 'Waterfalls & Springs' },
            { id: 'hillstation', label: 'Mussoorie Trip' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === tab.id ? 'bg-amber-800 text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sightseeing Cards Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSpots.map((spot) => (
              <motion.div
                key={spot.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-amber-900/10 hover:border-amber-700/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Distance & Duration */}
                  <div className="flex items-center justify-between text-xs text-amber-800 font-semibold border-b border-amber-900/10 pb-2">
                    <span className="flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5" />
                      {spot.distance} from Hotel Kolam
                    </span>
                    <span className="text-slate-500 font-normal">
                      {spot.duration}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {spot.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {spot.description}
                  </p>

                  {/* Highlight */}
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                    <p className="font-semibold text-slate-800">{spot.highlight}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Tip: {spot.travelTip}</p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-3.5 mt-3.5 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] text-slate-500">Best: {spot.bestTime}</span>
                  <button
                    onClick={() => handleBookCab(spot.name)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900"
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>Arrange Cab</span>
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Cab Request Modal */}
      <AnimatePresence>
        {cabModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-md w-full p-5 sm:p-6 space-y-4 shadow-2xl border border-slate-200"
            >
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Book Sightseeing Taxi
                </h3>
                <button
                  onClick={() => setCabModalOpen(false)}
                  className="text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Request a comfortable verified tourist cab to <strong>{selectedSpotForCab}</strong> departing directly from Hotel Kolam entrance lobby.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Vehicle Type</span>
                  <span className="font-semibold text-slate-800">Sedan (Dzire) / SUV (Innova)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Driver</span>
                  <span className="font-semibold text-slate-800">Local Mountain-Certified Driver</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pickup Location</span>
                  <span className="font-semibold text-slate-800">Hotel Kolam (Prince Chowk)</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={sendCabInquiryToWhatsApp}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
                >
                  Inquire via WhatsApp Desk
                </button>
                <button
                  onClick={() => setCabModalOpen(false)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
