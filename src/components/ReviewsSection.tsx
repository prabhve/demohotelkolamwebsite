import React, { useState } from 'react';
import { REVIEWS } from '../data/hotelData';
import { Review } from '../types/hotel';
import { Star, Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [filterType, setFilterType] = useState<string>('all');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  // Form states
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTravelerType, setNewTravelerType] = useState<'Solo' | 'Family' | 'Couple' | 'Business'>('Couple');
  const [newRoomStayed, setNewRoomStayed] = useState('Classic Deluxe Room');
  const [newComment, setNewComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const filteredReviews = filterType === 'all'
    ? reviewsList
    : reviewsList.filter(r => r.travelerType.toLowerCase() === filterType.toLowerCase());

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const newRev: Review = {
      id: 'rev-' + Date.now(),
      author: newAuthor,
      city: newCity || 'India',
      rating: newRating,
      date: 'Just now',
      travelerType: newTravelerType,
      comment: newComment,
      roomStayed: newRoomStayed,
      verified: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setReviewModalOpen(false);
      setNewAuthor('');
      setNewCity('');
      setNewComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-14 sm:py-20 md:py-24 bg-white border-y border-amber-900/10">
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
              Verified Guest Experiences
            </p>
            <h2 className="text-2.5xl sm:text-3.5xl lg:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Real Reviews from Real Travelers
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600">
              Aggregated from genuine guest stays across Goibibo, MakeMyTrip, Agoda, and Google Maps.
            </p>
          </div>

          <button
            onClick={() => setReviewModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-xl transition-colors shrink-0 self-start md:self-auto"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Write a Guest Review</span>
          </button>
        </motion.div>

        {/* Aggregate Ratings Breakdown */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-amber-900/10 items-center"
        >
          
          <div className="md:col-span-4 text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display">4.2</span>
              <span className="text-base sm:text-lg text-slate-400">/ 5</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-amber-500 text-amber-500' : 'fill-amber-500/30 text-amber-500/30'}`} />
              ))}
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Based on 380+ verified guest reviews
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-slate-500 block">Location</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">4.8 / 5</span>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full w-[96%]" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-500 block">Staff & Service</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">4.7 / 5</span>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full w-[94%]" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-500 block">Cleanliness</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">4.6 / 5</span>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full w-[92%]" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-500 block">Value for Money</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">4.5 / 5</span>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full w-[90%]" />
              </div>
            </div>
          </div>

        </motion.div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8">
          {['all', 'Solo', 'Couple', 'Family', 'Business'].map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filterType.toLowerCase() === t.toLowerCase()
                  ? 'bg-amber-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              {t === 'all' ? 'All Reviews' : `${t} Stays`}
            </button>
          ))}
        </div>

        {/* Reviews Cards List with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-amber-900/10 flex flex-col justify-between"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Author line & rating */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{rev.author}</h3>
                      <p className="text-[11px] text-slate-500">{rev.city} · {rev.travelerType} Stay</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-3.5 h-3.5 ${
                            idx < rev.rating ? 'fill-amber-500 text-amber-500' : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-amber-900/10 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="text-amber-800 font-medium truncate">{rev.roomStayed}</span>
                  <span>{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {reviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-md w-full p-5 sm:p-6 space-y-4 shadow-2xl border border-slate-200"
            >
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Share Your Stay Experience
                </h3>
                <button
                  onClick={() => setReviewModalOpen(false)}
                  className="text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              {submittedMessage ? (
                <div className="p-6 text-center space-y-2 text-emerald-800">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-700">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-base">Thank you for your review!</p>
                  <p className="text-xs text-slate-500">Your feedback helps fellow travelers in Dehradun.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">City / Origin</label>
                      <input
                        type="text"
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        placeholder="e.g. Mumbai"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Rating</label>
                      <select
                        value={newRating}
                        onChange={(e) => setNewRating(Number(e.target.value))}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                      >
                        <option value={5}>5 - Outstanding</option>
                        <option value={4.5}>4.5 - Very Good</option>
                        <option value={4}>4 - Good</option>
                        <option value={3}>3 - Average</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Traveler Type</label>
                      <select
                        value={newTravelerType}
                        onChange={(e) => setNewTravelerType(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                      >
                        <option value="Solo">Solo Traveler</option>
                        <option value="Couple">Couple</option>
                        <option value="Family">Family</option>
                        <option value="Business">Business</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Room Category</label>
                      <select
                        value={newRoomStayed}
                        onChange={(e) => setNewRoomStayed(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                      >
                        <option value="Classic Deluxe Room">Classic Deluxe</option>
                        <option value="Executive Balcony Room">Executive Balcony</option>
                        <option value="Himalayan Superior View">Himalayan View</option>
                        <option value="Royal Family Suite">Royal Family Suite</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Review *</label>
                    <textarea
                      required
                      rows={3}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Tell us about the room cleanliness, breakfast, staff service, or location..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-2.5 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-xl"
                    >
                      Submit Review
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewModalOpen(false)}
                      className="px-4 py-2.5 text-xs text-slate-600 hover:bg-slate-100 rounded-xl"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
