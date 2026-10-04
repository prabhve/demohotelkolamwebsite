import React from 'react';

export const HotelHeroArtwork: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-amber-900 via-stone-800 to-slate-900 ${className}`}>
      {/* Mountain Silhouettes in background */}
      <svg className="absolute inset-0 w-full h-full object-cover opacity-35" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* Distant Himalayas */}
        <path d="M-50 420 L250 180 L480 320 L750 140 L980 290 L1250 160 L1250 600 L-50 600 Z" fill="#F8FAFC" fillOpacity="0.12" />
        <path d="M100 450 L380 240 L590 380 L880 200 L1100 350 L1280 230 L1280 600 L100 600 Z" fill="#F1F5F9" fillOpacity="0.18" />
        {/* Foothills and Pine tree ridge */}
        <path d="M-50 500 L200 380 L450 460 L800 340 L1050 430 L1250 360 L1250 600 L-50 600 Z" fill="#064E3B" fillOpacity="0.5" />
      </svg>

      {/* Sun glow & warm ambience */}
      <div className="absolute top-8 right-1/4 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Architectural Hotel Facade & Balcony Rendering */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-4xl h-full flex items-end justify-between gap-6 pb-4">
          
          {/* Main Hotel Architecture Element */}
          <div className="relative z-10 w-full bg-slate-950/70 backdrop-blur-md border border-amber-500/30 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">Central Dehradun · Prince Chowk</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span>0.6 km from Railway Station</span>
                <span className="text-amber-400">·</span>
                <span>Paltan Bazaar Area</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-amber-400 text-xs font-medium">Guest Rating</p>
                <p className="text-2xl font-bold text-white tracking-tight mt-0.5">4.2 <span className="text-sm font-normal text-slate-300">/ 5</span></p>
                <p className="text-[11px] text-slate-400 mt-1">380+ Verified Reviews</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-emerald-400 text-xs font-medium">Direct Booking Perks</p>
                <p className="text-2xl font-bold text-white tracking-tight mt-0.5">15% OFF</p>
                <p className="text-[11px] text-slate-400 mt-1">Promo Code: KOLAM15</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sky-400 text-xs font-medium">Check-In / Out</p>
                <p className="text-xl font-bold text-white tracking-tight mt-0.5">12 PM <span className="text-sm font-normal text-slate-300">/ 11 AM</span></p>
                <p className="text-[11px] text-slate-400 mt-1">24/7 Front Desk</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-amber-300 text-xs font-medium">Connectivity</p>
                <p className="text-xl font-bold text-white tracking-tight mt-0.5">50 Mbps</p>
                <p className="text-[11px] text-slate-400 mt-1">High-Speed Optical Fiber</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const RoomVisualCard: React.FC<{ type: string; title: string }> = ({ type, title }) => {
  // Rich customized architectural interior graphic matching each room type
  const isBalcony = type === 'balcony_room' || type === 'balcony';
  const isSuite = type === 'family_suite' || type === 'suite';
  const isSuperior = type === 'superior_room' || type === 'superior';

  return (
    <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-xl bg-gradient-to-br from-amber-950 via-stone-900 to-slate-900 flex items-center justify-center p-4">
      {/* Ambient background gradients */}
      <div className={`absolute -top-10 -right-10 w-44 h-44 rounded-full blur-2xl opacity-40 ${
        isBalcony ? 'bg-emerald-500' : isSuite ? 'bg-indigo-500' : isSuperior ? 'bg-amber-400' : 'bg-amber-600'
      }`} />
      
      <svg className="w-full h-full max-h-48" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wall Accent Panel */}
        <rect x="20" y="20" width="360" height="200" rx="12" fill="#1E293B" fillOpacity="0.7" stroke="#475569" strokeWidth="1" />
        
        {/* Window with Hill/Sky View */}
        <rect x="230" y="40" width="130" height="100" rx="8" fill="#0F172A" stroke="#E2E8F0" strokeWidth="1.5" strokeOpacity="0.4" />
        {/* Mountain view inside window */}
        <path d="M232 120 L270 80 L300 105 L330 65 L358 110 L358 138 L232 138 Z" fill={isBalcony || isSuperior ? '#065F46' : '#334155'} fillOpacity="0.6" />
        {/* Sun in window */}
        <circle cx="330" cy="65" r="8" fill="#F59E0B" fillOpacity="0.8" />
        <line x1="295" y1="40" x2="295" y2="140" stroke="#CBD5E1" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="230" y1="90" x2="360" y2="90" stroke="#CBD5E1" strokeWidth="1.5" strokeOpacity="0.5" />

        {/* Headboard Wooden Slats */}
        <rect x="45" y="65" width="165" height="75" rx="6" fill="#78350F" fillOpacity="0.85" stroke="#92400E" strokeWidth="1" />
        <line x1="85" y1="65" x2="85" y2="140" stroke="#92400E" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="125" y1="65" x2="125" y2="140" stroke="#92400E" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="165" y1="65" x2="165" y2="140" stroke="#92400E" strokeWidth="1" strokeOpacity="0.6" />

        {/* Bed Base & Crisp White Linens */}
        <rect x="40" y="130" width="175" height="65" rx="6" fill="#F8FAFC" />
        {/* Pillows */}
        <rect x="55" y="110" width="50" height="25" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
        <rect x="115" y="110" width="50" height="25" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
        {/* Throw Runner Pillows / Accent */}
        <rect x="68" y="118" width="24" height="15" rx="3" fill="#D97706" />
        <rect x="128" y="118" width="24" height="15" rx="3" fill="#D97706" />
        {/* Duvet & Runner Fold */}
        <path d="M40 160 H215 V195 H40 Z" fill="#E2E8F0" />
        <rect x="40" y="165" width="175" height="12" fill={isBalcony ? '#059669' : '#B45309'} fillOpacity="0.8" />

        {/* Nightstand Table Lamp */}
        <rect x="25" y="135" width="15" height="40" rx="2" fill="#64748B" />
        <circle cx="32" cy="115" r="10" fill="#FEF08A" fillOpacity="0.9" />
        <path d="M26 122 L32 105 L38 122 Z" fill="#D97706" />

        {/* Lounge Chair or Balcony Railing */}
        {isBalcony ? (
          <g>
            <rect x="240" y="150" width="110" height="45" rx="4" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
            <line x1="260" y1="150" x2="260" y2="195" stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="285" y1="150" x2="285" y2="195" stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="310" y1="150" x2="310" y2="195" stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" />
            <text x="255" y="178" fill="#A7F3D0" fontSize="10" fontWeight="600" letterSpacing="1">PRIVATE BALCONY</text>
          </g>
        ) : isSuite ? (
          <g>
            {/* Second Bed or Living Sofa */}
            <rect x="240" y="150" width="115" height="45" rx="6" fill="#312E81" stroke="#6366F1" strokeWidth="1" />
            <rect x="250" y="142" width="40" height="16" rx="3" fill="#EEF2FF" />
            <rect x="300" y="142" width="40" height="16" rx="3" fill="#EEF2FF" />
            <text x="252" y="178" fill="#C7D2FE" fontSize="10" fontWeight="600" letterSpacing="1">FAMILY SUITE 480 SQ.FT</text>
          </g>
        ) : (
          <g>
            {/* Work Desk and Chair */}
            <rect x="245" y="155" width="80" height="6" rx="2" fill="#D97706" />
            <rect x="255" y="161" width="6" height="30" fill="#94A3B8" />
            <rect x="310" y="161" width="6" height="30" fill="#94A3B8" />
            <rect x="275" y="140" width="22" height="15" rx="2" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
            <text x="250" y="185" fill="#94A3B8" fontSize="9" fontWeight="500">WORK DESK & TV</text>
          </g>
        )}
      </svg>

      {/* Title tag on image */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 bg-slate-900/80 backdrop-blur-md rounded-lg border border-white/10 text-xs">
        <span className="text-white font-medium truncate">{title}</span>
        <span className="text-amber-400 font-semibold shrink-0">Hotel Kolam Verified</span>
      </div>
    </div>
  );
};
