'use client';

import { useState } from 'react';
import { FaUser, FaBriefcase, FaFileAlt, FaEnvelope, FaBars } from 'react-icons/fa';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'About', icon: <FaUser />, id: 'About' },
    { label: 'Portfolio', icon: <FaBriefcase />, id: 'Portfolio' },
    { label: 'Resume', icon: <FaFileAlt />, id: 'Resume' },
  ];

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:flex bg-black rounded-3xl p-4 flex-col gap-4 w-20 sm:w-24 items-center">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-4 rounded-xl w-full transition duration-300 ${
              activeTab === item.id
                ? 'bg-blue-600 text-white'
                : 'bg-[#2b2b2b] text-gray-300 hover:bg-[#3b3b3b]'
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            <span className="text-xs font-semibold">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Hamburger (mobile) */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed top-20 right-6 bg-black p-4 rounded-3xl flex flex-col gap-3 w-40 z-40 shadow-xl md:hidden">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition duration-300 ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#2b2b2b] text-gray-300 hover:bg-[#3b3b3b]'
              }`}
            >
              <div className="text-lg">{item.icon}</div>
              <span className="text-sm font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
