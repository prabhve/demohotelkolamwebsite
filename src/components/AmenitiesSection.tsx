import React, { useState } from 'react';
import { AMENITY_CATEGORIES } from '../data/hotelData';
import { Zap, Wifi, Utensils, Shield, Dog, Clock, Car, Award, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const AmenitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="amenities" className="py-14 sm:py-20 md:py-24 bg-white border-y border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
            Hotel Services & Facilities
          </p>
          <h2 className="text-2.5xl sm:text-3.5xl font-bold tracking-tight text-slate-900 font-display">
            Thoughtful Comforts for Hill-City Travelers
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600">
            Engineered for corporate travelers, vacationing families, and transit guests passing through Dehradun.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-start sm:justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            {AMENITY_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === idx
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {AMENITY_CATEGORIES[selectedCategory].items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-amber-900/10 hover:border-amber-700/30 transition-all flex items-start gap-3.5 sm:gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-amber-800" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Highlights Footer Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 sm:mt-12 max-w-4xl mx-auto bg-gradient-to-r from-stone-900 via-slate-900 to-amber-950 rounded-2xl p-5 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl"
        >
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">24-Hour Front Desk Support</p>
            <p className="text-base sm:text-lg font-bold">Have custom travel or group accommodation needs?</p>
            <p className="text-xs text-slate-300">We assist with Char Dham yatra stopovers, wedding guest blocks, and corporate bookings.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 w-full sm:w-auto text-center px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
          >
            Contact Desk
          </a>
        </motion.div>

      </div>
    </section>
  );
};
