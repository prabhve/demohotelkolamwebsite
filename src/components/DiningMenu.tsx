import React, { useState } from 'react';
import { MENU_ITEMS, HOTEL_INFO } from '../data/hotelData';
import { Utensils, Coffee, Sparkles, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const DiningMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pahadi' | 'breakfast' | 'main_course' | 'snacks' | 'beverages'>('pahadi');
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [orderSent, setOrderSent] = useState(false);

  const categories = [
    { id: 'pahadi', label: 'Garhwali Pahadi Specials' },
    { id: 'breakfast', label: 'Morning Breakfast' },
    { id: 'main_course', label: 'Curries & Mains' },
    { id: 'snacks', label: 'Snacks & Momos' },
    { id: 'beverages', label: 'Chai & Beverages' },
    { id: 'all', label: 'Full Menu' }
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find(m => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const totalItemCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const handleSendToWhatsAppOrder = () => {
    const orderLines = Object.entries(cart).map(([id, qty]) => {
      const item = MENU_ITEMS.find(m => m.id === id);
      return `• ${item?.name} x ${qty} = ₹${(item?.price || 0) * qty}`;
    });

    const msg = `*Room Service Food Order - Hotel Kolam*\n\n${orderLines.join('\n')}\n\n*Total Estimate: ₹${cartTotal}*\n(Please send room number with your order)`;
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setOrderSent(true);
  };

  return (
    <section id="dining" className="py-14 sm:py-20 md:py-24 bg-[#FAF8F5]">
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
              The Kolam Diner & Room Service
            </p>
            <h2 className="text-2.5xl sm:text-3.5xl lg:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Authentic Flavors of Dehradun & the Hills
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600">
              Prepared fresh in our kitchen using locally sourced ingredients, fragrant Dehradun basmati rice, and mountain herbs.
            </p>
          </div>

          {/* Dietary note */}
          <div className="flex items-center gap-3 text-xs font-medium text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 self-start md:self-auto">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block" />
              Pure Veg Items
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
              Non-Veg Curries
            </span>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const count = cart[item.id] || 0;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl p-4 sm:p-5 border border-amber-900/10 hover:border-amber-700/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-3.5 h-3.5 rounded-xs flex items-center justify-center border ${
                            item.veg ? 'border-emerald-600' : 'border-red-600'
                          }`}>
                            <span className={`w-2 h-2 rounded-full ${item.veg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                          </span>
                          
                          <h3 className="text-sm sm:text-base font-bold text-slate-900">
                            {item.name}
                          </h3>

                          {item.isChefSpecial && (
                            <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">
                              Special
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed pt-0.5">
                          {item.description}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-sm sm:text-base font-bold text-slate-900">₹{item.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Room Order */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] text-slate-400">Available 24/7 in-room</span>

                    {count === 0 ? (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="px-3 py-1.5 text-xs font-semibold text-amber-800 hover:text-white bg-amber-50 hover:bg-amber-700 border border-amber-200 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Tray</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-lg px-2 py-1">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-amber-900 p-0.5 hover:bg-amber-200 rounded"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-amber-950 px-1">{count}</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="text-amber-900 p-0.5 hover:bg-amber-200 rounded"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Floating In-Room Order Bar */}
        <AnimatePresence>
          {totalItemCount > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="mt-6 sm:mt-8 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
                  {totalItemCount}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold">In-Room Dining Tray ({totalItemCount} Items)</p>
                  <p className="text-xs text-slate-400">Estimated Total: <strong className="text-amber-400">₹{cartTotal}</strong></p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setCart({})}
                  className="px-3 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
                <button
                  onClick={handleSendToWhatsAppOrder}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold bg-amber-600 hover:bg-amber-500 text-white rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
