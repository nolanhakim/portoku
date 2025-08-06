'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description?: string;
  tech?: string;
  client?: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Website Top Up',
    category: 'Web',
    image: '/portofolio/topup.png',
    description:
      'Top Up Website is a digital platform for purchasing game items and diamonds for popular games like Mobile Legends and Genshin Impact.',
    tech: 'Laravel, Tailwind CSS',
    client: '-',
    link: 'https://github.com/nolanhakim/topup',
  },
  {
    title: 'Website Vokasi',
    category: 'Web',
    image: '/portofolio/vokasi.png',
    description:
      'Faculty of Vocational Studies Website is an official platform that provides information about academic programs, campus activities, and student services',
    tech: 'Laravel, Tailwind CSS',
    client: '-',
    link: 'https://github.com/nolanhakim/landingpage_vokasiub',
  },
  {
    title: 'Kedai Cahaya Gemilang',
    category: 'Web',
    image: '/portofolio/cg.png',
    description:
      'Digital platform that showcases menu. The website makes it easy for customers to explore available food and drink options',
    tech: 'Html, CSS',
    client: 'kedai cahaya gemilang',
    link: 'https://kedaicahayagemilang.vercel.app/',
  },
  {
    title: 'JUMEAUSCENT',
    category: 'Web',
    image: '/portofolio/jumeau.png',
    description:
      'JUMEAUSCENT is a Bali-based perfume brand website that offers a curated collection of handcrafted fragrances inspired by the island natural beauty and cultural richness',
    tech: 'Html, CSS',
    client: 'jumeauscent',
    link: 'https://www.jumeauscent.com/',
  },
  {
    title: 'Redesign BCA MOBILE',
    category: 'UI/UX Design',
    image: '/portofolio/bca.png',
    tech: 'Figma',
    client: '-',
    link: 'https://www.figma.com/proto/YDgQIhwAa0ykReML8QJvwR/Prototype-UI-UX?node-id=1-77&starting-point-node-id=1%3A707&t=eSfZKoXpF0nJT2Cr-1',
  },
  {
    title: 'Redesign WEB BCA',
    category: 'UI/UX Design',
    image: '/portofolio/bca2.png',
    tech: 'Figma',
    client: '-',
    link: 'https://www.figma.com/design/aK2NMSFbI9ogKJB5O23inr/REDESIGN?t=BT4MwTgTZpS5XpsD-1',
  },
  {
    title: 'Redesign Ilufa186',
    category: 'UI/UX Design',
    image: '/portofolio/ilufa.png',
    tech: 'Figma',
    client: '-',
    link: 'https://www.figma.com/design/aK2NMSFbI9ogKJB5O23inr/REDESIGN?t=BT4MwTgTZpS5XpsD-1',
  },
  {
    title: 'Design Aplikasi Top Up',
    category: 'UI/UX Design',
    image: '/portofolio/boost.png',
    tech: 'Figma',
    client: '-',
    link: 'https://www.figma.com/proto/Xna4fXGElM2ElVFtRVLf4y?node-id=0-1&t=BT4MwTgTZpS5XpsD-6',
  },
  {
    title: 'Poster Joki Wuthering',
    category: 'Design',
    image: '/portofolio/design2.png',
    tech: 'Canva',
    client: 'Anonim',
  },
  {
    title: 'Poster Joki MLBB',
    category: 'Design',
    image: '/portofolio/design3.png',
    tech: 'Canva',
    client: 'Anonim',
  },
  {
    title: 'Poster Top Up MLBB',
    category: 'Design',
    image: '/portofolio/design4.png',
    tech: 'Canva',
    client: '-',
  },
  {
    title: 'Poster Top Up GENSHIN',
    category: 'Design',
    image: '/portofolio/design5.png',
    tech: 'Figma',
    client: 'Anonim',
  },
  {
    title: 'Banner Top Up',
    category: 'Design',
    image: '/portofolio/design6.png',
    tech: 'Canva',
    client: 'Anonim',
  },
  {
    title: 'Poster Grow A garden',
    category: 'Design',
    image: '/portofolio/design8.png',
    tech: 'Canva',
    client: 'Anonim',
  },
  {
    title: 'Event Bravoc 2025',
    category: 'Design',
    image: '/portofolio/design9.2.png',
    tech: 'Figma, Canva',
    client: 'Bravoc',
  },
  {
    title: 'Poster Karakter',
    category: 'Design',
    image: '/portofolio/design10.2.png',
    tech: 'Canva',
    client: '-',
  },
  {
    title: 'Poster Olivia',
    category: 'Design',
    image: '/portofolio/design11.2.png',
    tech: 'Canva',
    client: '-',
  },
  {
    title: 'Poster Olivia2',
    category: 'Design',
    image: '/portofolio/design12.png',
    tech: 'Canva',
    client: '-',
  },
    {
    title: 'Poster Olivia3',
    category: 'Design',
    image: '/portofolio/design13.png',
    tech: 'Canva',
    client: '-',
  },
];

const categories = ['All', 'Web', 'UI/UX Design', 'Design'];

export default function PortofolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 4);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

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
                setShowAll(false);
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
                onClick={() => openModal(item)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: index * 0.05 }}
                className="cursor-pointer group bg-[#111] rounded-xl overflow-hidden border border-gray-800 shadow-md hover:shadow-xl hover:border-blue-600 transition duration-300"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={192}
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

        {isModalOpen && selectedItem && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#111] text-white p-6 rounded-xl max-w-md w-full relative shadow-lg">
              <button
                onClick={closeModal}
                className="absolute top-2 right-3 text-white text-4xl hover:text-red-500"
              >
                &times;
              </button>

              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={500}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-2xl font-bold mb-1">{selectedItem.title}</h3>
              <p className="text-blue-400 text-sm mb-3">
                {selectedItem.category}
              </p>

              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <strong>Project:</strong> {selectedItem.category}
                </p>
                <p>
                  <strong>Client:</strong> {selectedItem.client || '-'}
                </p>
                <p>
                  <strong>Tech Stack:</strong> {selectedItem.tech || '-'}
                </p>
                {selectedItem.description && (
                  <p className="mt-2 text-gray-400">
                    {selectedItem.description}
                  </p>
                )}
              </div>

              <div className="mt-4 text-right">
                {selectedItem.link ? (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold"
                  >
                    Visit site
                  </a>
                ) : (
                  <span className="text-gray-400 italic">
                    No site available
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
