import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Navigation, Train, Plane, Bus, ExternalLink, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const InteractiveMap: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-14 sm:py-20 md:py-24 bg-[#FAF8F5]">
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
            Location & Transit
          </p>
          <h2 className="text-2.5xl sm:text-3.5xl font-bold tracking-tight text-slate-900 font-display">
            Prime Central Dehradun Address
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600">
            Located just off Prince Chowk on Raja Road, minutes away from trains, central markets, and government offices.
          </p>
        </motion.div>

        {/* Map & Transit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Transit Guide & Exact Address Card */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6 flex flex-col justify-between"
          >
            
            {/* Address Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-amber-900/10 shadow-xs space-y-3.5 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Hotel Kolam Dehradun
                  </h3>
                  <p className="text-xs text-slate-500">
                    Townhouse 1346 Hotel Kolam
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 leading-relaxed border border-slate-200">
                {HOTEL_INFO.address}
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>

            {/* Transit Hub Distances */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-amber-900/10 shadow-xs space-y-3 sm:space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Transit Proximity
              </h4>

              <div className="space-y-2.5 text-xs">
                
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5]">
                  <div className="flex items-center gap-2.5">
                    <Train className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Dehradun Railway Station</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-500">Auto / E-rickshaw point</span>
                    </div>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0">0.6 km (3m)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5]">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Paltan Bazaar & Clock Tower</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-500">Shopping & Bakeries</span>
                    </div>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0">0.8 km (10m walk)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5]">
                  <div className="flex items-center gap-2.5">
                    <Bus className="w-4 h-4 text-blue-700 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block">ISBT Bus Terminal</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-500">Interstate buses</span>
                    </div>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0">5.5 km (15m)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5]">
                  <div className="flex items-center gap-2.5">
                    <Plane className="w-4 h-4 text-indigo-700 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Jolly Grant Airport (DED)</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-500">Direct highway link</span>
                    </div>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0">26 km (45m)</span>
                </div>

              </div>
            </div>

          </motion.div>

          {/* Right Column: Embedded Map Canvas */}
          <motion.div 
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 bg-white rounded-2xl border border-amber-900/10 shadow-xs overflow-hidden flex flex-col"
          >
            {/* Map Header */}
            <div className="p-3 sm:p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono font-medium">GPS: 30.317028° N, 78.036461° E</span>
              </div>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Map */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[380px] w-full bg-slate-100">
              <iframe
                title="Hotel Kolam Dehradun Map Location"
                src="https://maps.google.com/maps?q=30.3170283,78.0364608&z=17&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Footer */}
            <div className="p-3 bg-amber-50/70 border-t border-amber-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs text-slate-600">
              <span>Landmark: Near Prince Chowk Flyover & Raja Road</span>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="font-semibold text-amber-900 hover:underline"
              >
                Directions Desk: {HOTEL_INFO.phone}
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
