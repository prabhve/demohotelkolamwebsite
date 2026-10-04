import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  onOpenBooking: (roomId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ['rooms', 'amenities', 'dining', 'sightseeing', 'location', 'reviews'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 180) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#rooms', label: 'Rooms & Suites', id: 'rooms' },
    { href: '#amenities', label: 'Amenities', id: 'amenities' },
    { href: '#dining', label: 'The Kolam Diner', id: 'dining' },
    { href: '#sightseeing', label: 'Explore Dehradun', id: 'sightseeing' },
    { href: '#location', label: 'Location & Map', id: 'location' },
    { href: '#reviews', label: 'Reviews', id: 'reviews' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
      scrolled 
        ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-amber-900/10' 
        : 'bg-[#FAF8F5] border-b border-amber-900/5'
    }`}>
      
      {/* Top Banner: Responsive Micro-Offer Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Mobile Short Version */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 w-full text-[11px] font-medium text-amber-200 text-center">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span>Code <strong className="text-white underline font-bold tracking-wider">KOLAM15</strong> for 15% OFF</span>
          </div>

          {/* Desktop & Tablet Full Version */}
          <div className="hidden sm:flex items-center gap-2 truncate">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">
              Direct Booking Offer: Save 15% with promo code <strong className="text-amber-300 font-mono underline font-bold">KOLAM15</strong> · Instant Confirmation
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400 shrink-0 font-medium">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              600m from Station
            </span>
            <span>·</span>
            <a href={`tel:${HOTEL_INFO.phone}`} className="text-slate-300 hover:text-white transition-colors">
              {HOTEL_INFO.phone}
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 gap-2 sm:gap-4">
          
          {/* Zone 1: Brand Wordmark (Well-proportioned for small screens) */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 shrink-0 min-w-0 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-800 text-amber-100 flex items-center justify-center font-display font-bold text-sm sm:text-base group-hover:bg-amber-700 transition-colors shrink-0 shadow-xs">
              K
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 font-display group-hover:text-amber-800 transition-colors leading-tight truncate">
                Hotel Kolam
              </span>
              <span className="hidden sm:block text-[9px] md:text-[10px] tracking-wider uppercase text-amber-800 font-semibold truncate -mt-0.5">
                Prince Chowk · Dehradun
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-slate-900 whitespace-nowrap ${
                    isActive ? 'text-amber-800 font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-700 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action Points */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* WhatsApp Desk (Tablet & Desktop) */}
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent("Hello Hotel Kolam Dehradun! I would like to inquire about room booking.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Phone Call (Desktop only) */}
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300/80 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Call</span>
            </a>

            {/* Primary Action: Book Direct */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 active:scale-95 rounded-lg shadow-2xs hover:shadow transition-all whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">Book Direct</span>
              <span className="xs:hidden sm:hidden">Book</span>
            </button>

            {/* Mobile / Tablet Hamburger Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0 flex items-center justify-center focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden border-t border-amber-900/10 bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-xl space-y-4"
          >
            <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === link.id 
                      ? 'bg-amber-100/70 text-amber-900 font-semibold' 
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg active:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call Reception</span>
                </a>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent("Hello Hotel Kolam Dehradun! I would like to check room availability.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg active:bg-emerald-100"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="p-2.5 bg-amber-50/70 rounded-lg border border-amber-200/50 text-[11px] text-amber-950 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span className="truncate">Plot 36, Raja Road, Near Prince Chowk, Dehradun</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
