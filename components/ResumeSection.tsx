'use client';

import { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResumeSection() {
  const education = [
    {
      date: 'Agustus 2023 - Present',
      title: 'Brawijaya University',
      subtitle: 'Information Technology',
    },
    {
      date: 'Jul 2020 - May 2023',
      title: 'SMKN 1 SUKOHARJO',
      subtitle: 'Computer Network Engineering',
    },
  ];

  const experience = [
    {
      date: 'Agustus 2025 - Now',
      title: 'CV GLOBAL SOLUSINDO',
      subtitle: 'Frontend Developer',
    },
    {
      date: 'Februari 2025 - Now',
      title: 'Kedai Cahaya Gemilang',
      subtitle: 'Kitchen Crew',
    },
    {
      date: 'Maret 2024',
      title: 'Kedai Bebek Bakar Dan Cumi Bakar',
      subtitle: 'Crew Outlets',
    },
    {
      date: 'Agustus 2022 - November 2022',
      title: 'Sainstek Media Pabrik Pc Software',
      subtitle: 'Helper',
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleExperience = showAll ? experience : experience.slice(0, 2);

  return (
    <section className="bg-black text-white rounded-2xl py-16 px-6 md:px-20" id="resume">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10"
      >
        Resume
        <span className="block w-24 h-1 bg-blue-600 mt-2"></span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold flex items-center gap-2 mb-6"
          >
            <GraduationCap className="w-6 h-6 text-blue-500" />
            Education
          </motion.h3>

          <div className="flex flex-col gap-5">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-xl p-4 transition hover:border-blue-500"
              >
                <p className="text-sm text-gray-400">{item.date}</p>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-300">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold flex items-center gap-2 mb-6"
          >
            <Briefcase className="w-6 h-6 text-blue-500" />
            Experience
          </motion.h3>

          <div className="flex flex-col gap-5">
            {visibleExperience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-xl p-4 transition hover:border-blue-500"
              >
                <p className="text-sm text-gray-400">{item.date}</p>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-300">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* See More / See Less Button */}
          {experience.length > 2 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium text-white"
              >
                {showAll ? 'See Less' : 'See More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
