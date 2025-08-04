'use client';

import Image from 'next/image';
import {
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiMysql,
  SiLaravel,
  SiPhp,
} from 'react-icons/si';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'tech' | 'tools'>('tech');

  return (
    <motion.div
      className="bg-black text-white rounded-2xl shadow-xl p-6 w-full flex-1"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
        About
      </h2>

<p className="text-gray-300 leading-relaxed">
  Hello, I&apos;m Nul, a five-semester Information Technology student at Universitas Brawijaya.
  With hands-on experience in frontend development, I specialize in designing and 
  building modern, responsive, and user-friendly web and mobile interfaces 
  using technologies like Laravel, and Next.js.
  <br /><br />
  Beyond coding, I&apos;m also passionate about UI/UX design
  and graphic design, ensuring that every product I work on not only 
  functions well but also delivers a smooth and engaging user experience.
  <br /><br />
  Feel free to explore my portfolio to see some of the projects I&apos;ve
  worked on and how I can bring your ideas to life!
</p>

      {/* Skills Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === 'tech'
                ? 'bg-blue-600 text-white'
                : 'border border-blue-600 text-blue-600'
            }`}
          >
            Tech Stack
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === 'tools'
                ? 'bg-blue-600 text-white'
                : 'border border-blue-600 text-blue-600'
            }`}
          >
            Tools
          </button>
        </div>

        {/* Content with motion fade-in */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {activeTab === 'tech' && (
            <>
              {/* Skill Items for Tech */}
              <Skill icon={<FaHtml5 className="text-orange-500 w-10 h-10" />} name="HTML" level="Advanced" />
              <Skill icon={<FaCss3Alt className="text-blue-500 w-10 h-10" />} name="CSS" level="Advanced" />
              <Skill icon={<SiTailwindcss className="text-cyan-400 w-10 h-10" />} name="Tailwind" level="Advanced" />
              <Skill icon={<SiJavascript className="text-yellow-400 w-10 h-10" />} name="JavaScript" level="Intermediate" />
              <Skill icon={<SiNextdotjs className="text-white w-10 h-10" />} name="Next.js" level="Intermediate" />
              <Skill icon={<SiMysql className="text-blue-600 w-10 h-10" />} name="MySQL" level="Advanced" />
              <Skill icon={<SiLaravel className="text-red-500 w-10 h-10" />} name="Laravel" level="Intermediate" />
              <Skill icon={<SiPhp className="text-blue-500 w-10 h-10" />} name="PHP" level="Intermediate" />
            </>
          )}

          {activeTab === 'tools' && (
<>
  <Skill
    icon={
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
        width={40}
        height={40}
      />
    }
    name="Figma"
    level="Intermediate"
  />
  <Skill
    icon={
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        alt="VS Code"
        width={40}
        height={40}
      />
    }
    name="VS Code"
    level="Advanced"
  />
  <Skill
    icon={
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
        alt="Postman"
        width={40}
        height={40}
      />
    }
    name="Postman"
    level="Intermediate"
  />
  <Skill
    icon={
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg"
        alt="Arduino IDE"
        width={40}
        height={40}
      />
    }
    name="Arduino IDE"
    level="Intermediate"
  />
  <Skill
    icon={
      <Image
        src="/canva.png"
        alt="Canva"
        width={40}
        height={40}
      />
    }
    name="Canva"
    level="Advanced"
  />
  <Skill
    icon={
      <Image
        src="/capcut.jpg"
        alt="CapCut"
        width={40}
        height={40}
      />
    }
    name="CapCut"
    level="Advanced"
  />
</>

          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Skill Card Reusable Component
const Skill = ({ icon, name, level }: { icon: React.ReactNode; name: string; level: string }) => (
  <div className="group flex flex-col items-center text-center bg-[#1f1f1f] p-4 rounded-xl hover:bg-[#2b2b2b] transition duration-300">
    <div className="mb-2">{icon}</div>
    <span className="font-semibold text-white">{name}</span>
    <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300">
      {level}
    </span>
  </div>
);
