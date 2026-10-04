import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MessageCircle, Calendar, Phone } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Desktop Floating Action Buttons (bottom right) */}
      <div className="hidden sm:flex fixed bottom-5 right-5 z-40 items-center gap-3 no-print">
        {/* WhatsApp Quick Chat */}
        <a
          href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent("Hello Hotel Kolam! I am interested in booking a room in Dehradun.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 border-2 border-white"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Concierge"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Book Room Floating CTA */}
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 px-5 py-3 bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 border-2 border-white"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Direct (15% OFF)</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Bar (Stays strictly under 15% viewport height cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-amber-900/15 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl no-print">
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-slate-800 bg-white border border-slate-300 rounded-lg active:bg-slate-100"
        >
          <Phone className="w-3.5 h-3.5 text-amber-700" />
          <span>Call Desk</span>
        </a>

        <a
          href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent("Hello Hotel Kolam! I want to check room booking availability.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg flex items-center justify-center active:bg-emerald-100"
          title="WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-700" />
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1.5 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs active:bg-amber-900"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book (15% OFF)</span>
        </button>
      </div>
    </>
  );
};
