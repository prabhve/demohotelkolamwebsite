import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, MessageCircle, Send, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*General Inquiry - Hotel Kolam Dehradun*\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-white border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-5 sm:space-y-6"
          >
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
                24/7 Front Desk & Reservations
              </p>
              <h2 className="text-2.5xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
                Get in Touch with Hotel Kolam
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need early check-in confirmation, group booking tariffs, or Mussoorie hill tour advice, our reception team is available around the clock.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-amber-900/10 hover:border-amber-700/30 transition-all text-slate-800 group"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Direct Telephone</span>
                  <span className="font-bold text-slate-900">{HOTEL_INFO.phone} / {HOTEL_INFO.altPhone}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent("Hello Hotel Kolam Dehradun! I would like to inquire about room booking.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-amber-900/10 hover:border-amber-700/30 transition-all text-slate-800 group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Instant WhatsApp Concierge</span>
                  <span className="font-bold text-slate-900">+91 {HOTEL_INFO.whatsapp}</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-amber-900/10 text-slate-800">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Property Address</span>
                  <span className="font-semibold text-slate-900">{HOTEL_INFO.address}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Query Form */}
          <motion.div 
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 bg-[#FAF8F5] p-5 sm:p-8 rounded-2xl border border-amber-900/10"
          >
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 font-display">
              Send Direct Message or Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-5 sm:mb-6">
              Our front office team replies in under 15 minutes.
            </p>

            {sent ? (
              <div className="p-6 sm:p-8 text-center space-y-3 bg-white rounded-xl border border-emerald-200 text-emerald-800">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-700">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold">Message Dispatched!</h4>
                <p className="text-xs text-slate-600">We have received your query on WhatsApp and will assist you immediately.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Verma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-amber-600 focus:border-amber-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-amber-600 focus:border-amber-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry / Travel Query *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us your dates, group size, or questions regarding cabs, parking, or check-in..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-amber-600 focus:border-amber-600 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 text-xs sm:text-sm font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Hotel Kolam</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
