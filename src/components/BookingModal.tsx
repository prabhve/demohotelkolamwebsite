import React, { useState } from 'react';
import { ROOMS, ADDONS, HOTEL_INFO } from '../data/hotelData';
import { Calendar, Users, Check, Sparkles, MessageCircle, Printer, X, ShieldCheck, Tag, BedDouble, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId = 'classic-deluxe',
}) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [selectedRoomId, setSelectedRoomId] = useState(initialRoomId);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['breakfast-buffet']);
  
  // Guest Info
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [arrivalTime, setArrivalTime] = useState('14:00');

  // Promo code
  const [promoCode, setPromoCode] = useState('KOLAM15');
  const [appliedPromo, setAppliedPromo] = useState<string | null>('KOLAM15');
  const [promoError, setPromoError] = useState('');

  // Booking confirmed state
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRefNumber, setBookingRefNumber] = useState('');

  if (!isOpen) return null;

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const currentRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];

  // Pricing calculations
  const roomBaseTariff = currentRoom.discountPrice * nights * roomsCount;
  
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS.find(a => a.id === addonId);
    if (!addon) return sum;
    let cost = addon.price;
    if (addon.perPerson) cost *= adults;
    if (addon.perNight) cost *= nights;
    return sum + cost;
  }, 0);

  const subTotal = roomBaseTariff + addonsTotal;
  
  // 15% discount for promo KOLAM15
  const discountAmount = appliedPromo === 'KOLAM15' ? Math.round(roomBaseTariff * 0.15) : 0;
  const taxableAmount = Math.max(0, subTotal - discountAmount);
  const gst = Math.round(taxableAmount * 0.12);
  const finalTotal = taxableAmount + gst;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'KOLAM15') {
      setAppliedPromo('KOLAM15');
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'DEHRADUN10') {
      setAppliedPromo('DEHRADUN10');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try KOLAM15 for 15% discount.');
    }
  };

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'KLM-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRefNumber(ref);
    setBookingConfirmed(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Reservation Request - Hotel Kolam Dehradun*
Ref: ${bookingRefNumber}
Guest: ${guestName} (${guestPhone})
Room: ${currentRoom.name} (${roomsCount} Room(s))
Dates: ${checkIn} to ${checkOut} (${nights} Night(s))
Guests: ${adults} Adults, ${children} Children
Est. Arrival: ${arrivalTime}
Addons: ${selectedAddons.join(', ') || 'None'}
Special Requests: ${specialRequests || 'None'}
Total Estimated: ₹${finalTotal} (Includes GST)

Please confirm my booking voucher. Thank you!`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-7 shadow-2xl border border-slate-200"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 font-display">
              {bookingConfirmed ? 'Reservation Confirmed & Ready' : 'Direct Booking at Hotel Kolam'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Prince Chowk, Paltan Bazaar, Dehradun · Best Rate Guarantee
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {bookingConfirmed ? (
          /* Confirmation State */
          <div className="py-5 sm:py-6 space-y-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                <Check className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 font-display">
                Thank You, {guestName}!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                Your direct booking voucher at <strong>Hotel Kolam Dehradun</strong> has been generated successfully. No upfront payment required; pay during check-in.
              </p>
              <div className="inline-block px-3.5 py-1.5 bg-white rounded-lg border border-emerald-300 text-xs font-mono font-bold text-emerald-900">
                Booking ID: {bookingRefNumber}
              </div>
            </div>

            {/* Voucher Summary */}
            <div className="border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3.5 bg-slate-50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 pb-2.5 gap-1">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Property Details</span>
                <span className="text-xs text-slate-500">Plot 36 Raja Road, Prince Chowk, Dehradun</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Check-In</span>
                  <span className="font-bold text-slate-900">{checkIn} (12 PM)</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Check-Out</span>
                  <span className="font-bold text-slate-900">{checkOut} (11 AM)</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Room Type</span>
                  <span className="font-bold text-slate-900">{currentRoom.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Total Payable</span>
                  <span className="font-bold text-emerald-700 text-sm sm:text-base">₹{finalTotal}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to Hotel WhatsApp Desk</span>
              </a>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Print Voucher</span>
              </button>

              <button
                onClick={onClose}
                className="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Active Booking Flow */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-4 sm:pt-6">
            
            {/* Left Col: Step Form */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* 1. Room Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  1. Select Room Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ROOMS.map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`text-left p-3 rounded-xl border transition-all ${
                        selectedRoomId === room.id
                          ? 'border-amber-700 bg-amber-50/50 ring-1 ring-amber-700'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs sm:text-sm font-bold text-slate-900">{room.name}</span>
                        <span className="text-xs font-bold text-amber-800">₹{room.discountPrice}</span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">{room.size} · {room.occupancy}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-amber-600 focus:border-amber-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-amber-600 focus:border-amber-600"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Adults</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full px-2.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Adults</option>
                    <option value={4}>4 Adults</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Children</label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-2.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg"
                  >
                    <option value={0}>0 Kids</option>
                    <option value={1}>1 Kid</option>
                    <option value={2}>2 Kids</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Rooms</label>
                  <select
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(Number(e.target.value))}
                    className="w-full px-2.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg"
                  >
                    <option value={1}>1 Room</option>
                    <option value={2}>2 Rooms</option>
                    <option value={3}>3 Rooms</option>
                  </select>
                </div>
              </div>

              {/* 3. Add-ons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  2. Optional Add-ons
                </label>
                <div className="space-y-1.5">
                  {ADDONS.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`cursor-pointer p-2.5 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                          isChecked
                            ? 'bg-emerald-50/60 border-emerald-300'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-3.5 h-3.5 text-emerald-600 rounded border-slate-300"
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-900">{addon.name}</p>
                            <p className="text-[10px] text-slate-500">{addon.description}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-slate-900 shrink-0">
                          +₹{addon.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Guest Details */}
              <div className="pt-2 border-t border-slate-200 space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. Primary Guest Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-amber-600 focus:border-amber-600 outline-none"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Phone / WhatsApp *"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-amber-600 focus:border-amber-600 outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="email"
                    placeholder="Email Address (optional)"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Estimated Arrival (e.g. 2:00 PM)"
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg"
                  />
                </div>
                <textarea
                  placeholder="Special requests (e.g., quiet floor, pet details, cab pickup)..."
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg"
                />
              </div>

            </div>

            {/* Right Col: Price Breakdown */}
            <div className="lg:col-span-5 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
              
              <div className="space-y-3.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 border-b border-slate-200 pb-2.5 font-display">
                  Reservation Summary
                </h3>

                {/* Selected Room Snapshot */}
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 space-y-0.5 text-xs">
                  <p className="text-amber-800 font-semibold">{currentRoom.name}</p>
                  <p className="text-slate-500">{nights} Night(s) · {roomsCount} Room(s)</p>
                  <p className="text-slate-500">{checkIn} to {checkOut}</p>
                </div>

                {/* Promo Code Box */}
                <form onSubmit={handleApplyPromo} className="space-y-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="Coupon Code"
                      className="flex-1 px-3 py-1.5 text-xs uppercase font-mono font-bold border border-slate-300 rounded-lg bg-white"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-semibold text-slate-800 bg-slate-200 hover:bg-slate-300 rounded-lg"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="text-[11px] text-emerald-700 font-medium">
                      ✓ Coupon {appliedPromo} applied (15% Direct Discount)
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] text-red-600 font-medium">{promoError}</p>
                  )}
                </form>

                {/* Itemized Math */}
                <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
                  <div className="flex justify-between">
                    <span>Base Room Tariff</span>
                    <span className="font-semibold text-slate-900">₹{roomBaseTariff}</span>
                  </div>

                  {addonsTotal > 0 && (
                    <div className="flex justify-between">
                      <span>Add-ons Total</span>
                      <span className="font-semibold text-slate-900">+₹{addonsTotal}</span>
                    </div>
                  )}

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-medium">
                      <span>Direct 15% OFF</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>GST (12%)</span>
                    <span>+₹{gst}</span>
                  </div>

                  <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-300">
                    <span>Total Payable</span>
                    <span className="text-base text-amber-900">₹{finalTotal}</span>
                  </div>
                </div>

                <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/60 text-[11px] text-amber-950 space-y-0.5">
                  <p className="font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    Zero Risk Guarantee:
                  </p>
                  <p>• Pay securely during check-in via UPI, Cards, or Cash.</p>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 sm:pt-6">
                <button
                  type="button"
                  disabled={!guestName || !guestPhone}
                  onClick={handleConfirmReservation}
                  className={`w-full py-3 px-4 text-xs sm:text-sm font-bold text-white rounded-xl shadow-md transition-all ${
                    !guestName || !guestPhone
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-amber-700 hover:bg-amber-800'
                  }`}
                >
                  Confirm Instant Booking (₹{finalTotal})
                </button>
                {(!guestName || !guestPhone) && (
                  <p className="text-[10px] text-slate-400 text-center mt-1">
                    Please enter guest name & phone number to proceed
                  </p>
                )}
              </div>

            </div>

          </div>
        )}

      </motion.div>
    </div>
  );
};
