'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  { title: 'Website Top Up', category: 'Web', image: '/portofolio/topup.png' },
  { title: 'Website Vokasi', category: 'Web', image: '/portofolio/vokasi.png' },
  { title: 'Kedai Cahaya Gemilang', category: 'Web', image: '/portofolio/cg.png' },
  { title: 'JUMEAUSCENT', category: 'Web', image: '/portofolio/jumeau.png' },
  { title: 'Redesign BCA MOBILE', category: 'UI/UX Design', image: '/portofolio/bcamobile.png' },
  { title: 'Redesign WEB BCA', category: 'UI/UX Design', image: '/portfolio/movie-ui.png' },
  { title: 'Redesign Ilufa186', category: 'UI/UX Design', image: '/portfolio/movie-ui.png' },
  { title: 'Design Aplikasi Top Up', category: 'UI/UX Design', image: '/portfolio/movie-ui.png' },
  { title: 'Poster Joki Wuthering', category: 'Design', image: '/portfolio/movie-ui.png' },
  { title: 'Poster Joki MLBB', category: 'Design', image: '/portfolio/movie-ui.png' },
  { title: 'Poster Top Up MLBB', category: 'Design', image: '/portfolio/movie-ui.png' },
  { title: 'Poster Top Up GENSHIN', category: 'Design', image: '/portfolio/movie-ui.png' },
  { title: 'Banner Top Up', category: 'Design', image: '/portfolio/movie-ui.png' },
  { title: 'Poster Grow A garden', category: 'Design', image: '/portfolio/movie-ui.png' },
  { title: 'Event Bravoc 2025', category: 'Design', image: '/portfolio/movie-ui.png' },
];

const categories = ['All', 'Web', 'UI/UX Design', 'Design'];

export default function PortofolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 4);

  return (
    <div className="bg-black text-white rounded-2xl shadow-xl p-6 w-full flex-1">
      <section className="text-white mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Portofolio
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-6 mb-8 border-b border-gray-700 pb-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // reset when category changes
              }}
              className={`font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimatePresence>
            {itemsToShow.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-[#111] rounded-xl overflow-hidden border border-gray-800 shadow-md hover:shadow-xl hover:border-blue-600 transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-blue-500 transition duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium text-white"
            >
              {showAll ? 'See Less' : 'See More'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
