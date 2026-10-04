/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickHighlights } from './components/QuickHighlights';
import { RoomExplorer } from './components/RoomExplorer';
import { AmenitiesSection } from './components/AmenitiesSection';
import { DiningMenu } from './components/DiningMenu';
import { LocalGuide } from './components/LocalGuide';
import { InteractiveMap } from './components/InteractiveMap';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string>('classic-deluxe');

  const handleOpenBooking = (roomId?: string) => {
    if (roomId) {
      setSelectedRoomForBooking(roomId);
    }
    setBookingModalOpen(true);
  };

  const handleSearchFromHero = (params: { checkIn: string; checkOut: string; guests: number; roomId: string }) => {
    setSelectedRoomForBooking(params.roomId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-amber-100 selection:text-amber-900 flex flex-col justify-between">
      
      {/* Top Bar Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero with Direct Booking Strip */}
        <Hero
          onSearch={handleSearchFromHero}
          onOpenBooking={handleOpenBooking}
        />

        {/* Quick Trust Highlights */}
        <QuickHighlights />

        {/* Room & Suite Explorer */}
        <RoomExplorer onSelectRoomForBooking={handleOpenBooking} />

        {/* Hotel Amenities & Facilities */}
        <AmenitiesSection />

        {/* The Kolam Diner & In-Room Dining Menu */}
        <DiningMenu />

        {/* Sightseeing & Tour Guide (Dehradun & Mussoorie) */}
        <LocalGuide />

        {/* Interactive Google Map & Transit Distance */}
        <InteractiveMap />

        {/* Guest Reviews & Ratings Breakdown */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Direct Contact & Reception Desk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Direct Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoomId={selectedRoomForBooking}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

    </div>
  );
}
