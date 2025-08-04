"use client";


import { useEffect, useState } from 'react';
import { FaDiscord, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaDownload } from 'react-icons/fa';

export default function AboutSection() {
  const titles = ['Front End Developer', 'UI/UX Designer', 'Graphic Designer'];
  const [currentTitle, setCurrentTitle] = useState('');
  const [fullTitleIndex, setFullTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullTitle = titles[fullTitleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentTitle(fullTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentTitle(fullTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === fullTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000); // jeda sebelum hapus
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setFullTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, fullTitleIndex]);

  return (
    <section className="bg-black text-white p-6 rounded-none sm:rounded-2xl w-full sm:max-w-md sm:mx-auto min-h-[600px] shadow-lg">
        {/* Profile Image */}
<div className="flex justify-center mb-4">
  <img
    src="/profil.jpg"
    alt="Profile"
    className="w-24 h-24 rounded-full border-4 border-gray-700 object-cover"
  />
</div>

      <h1 className="text-3xl font-bold text-center">Catraliya Nolan Hakim</h1>

      {/* Typing effect */}
      <p className="text-center bg-gray-800 px-4 py-1 rounded-lg mt-2 mx-auto w-fit transition-all duration-500 min-h-[32px]">
        {currentTitle}
        <span className="animate-pulse">|</span>
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://discordapp.com/users/712771834898153524" className="bg-gray-800 p-3 rounded-lg hover:bg-indigo-600"><FaDiscord size={20} /></a>
        <a href="https://www.instagram.com/catranolanhkm/" className="bg-gray-800 p-3 rounded-lg hover:bg-pink-500"><FaInstagram size={20} /></a>
        <a href="https://www.linkedin.com/in/catraliya-nolan-hakim-782aaa33b/" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600"><FaLinkedin size={20} /></a>
        <a href="https://github.com/nolanhakim" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-600"><FaGithub size={20} /></a>
      </div>

      {/* Info Section */}
      <div className="bg-gray-900 p-4 mt-6 rounded-2xl space-y-4">
        <div className="flex items-center gap-4 border-b border-gray-700 pb-2">
          <FaPhone size={20} className="text-purple-400" />
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="font-semibold">+62 895 4228 54189</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b border-gray-700 pb-2">
          <FaEnvelope size={20} className="text-green-400" />
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="font-semibold">nolanhakimm10@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b border-gray-700 pb-2">
          <FaMapMarkerAlt size={20} className="text-pink-400" />
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="font-semibold">Kota Malang, Indonesia</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaBirthdayCake size={20} className="text-purple-400" />
          <div>
            <p className="text-sm text-gray-400">Age</p>
            <p className="font-semibold">20 Years Old</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6 text-center">
        <a
          href="/portofolio/cv.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg inline-flex items-center gap-2"
        >
          <FaDownload />
          Download CV
        </a>
      </div>
    </section>
  );
}
