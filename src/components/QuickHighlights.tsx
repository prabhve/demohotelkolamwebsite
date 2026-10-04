import React from 'react';
import { Train, Zap, Utensils, Wifi, Car, Dog } from 'lucide-react';
import { motion } from 'motion/react';

export const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Train,
      title: "600m from Railway Station",
      desc: "Barely 3 mins auto ride from Dehradun Station and walking distance to Paltan Bazaar & Clock Tower."
    },
    {
      icon: Zap,
      title: "100% Power & Geyser Backup",
      desc: "Round-the-clock power backup and instant high-pressure hot water geysers in all en-suite bathrooms."
    },
    {
      icon: Wifi,
      title: "50 Mbps Fiber Wi-Fi",
      desc: "Fast optical broadband connectivity across all floors and work desks for seamless remote work & streaming."
    },
    {
      icon: Utensils,
      title: "The Kolam Diner",
      desc: "In-house kitchen serving fresh Pahadi Garhwali specialties, North Indian tandoor, and 24/7 room service."
    },
    {
      icon: Car,
      title: "Free On-Site Parking",
      desc: "Secure private parking for guest four-wheelers and bikes with 24/7 CCTV surveillance & night guard."
    },
    {
      icon: Dog,
      title: "Pet-Friendly Hospitality",
      desc: "We warmly welcome family pets (dogs & cats) with advance notice and zero excessive surcharge fees."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-2"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
            Why Guests Choose Hotel Kolam
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Thoughtful Hospitality & Prime Central Convenience
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-5 rounded-xl bg-[#FAF8F5] border border-amber-900/10 hover:border-amber-700/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-3 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
