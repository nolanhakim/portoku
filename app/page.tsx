'use client';

import { useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import AboutSection from '@/components/AboutSection';
import PortofolioSection from '@/components/PortofolioSection';
import ResumeSection from '@/components/ResumeSection';
import Sidebar from '@/components/SideBar';

export default function Home() {
  const [activeTab, setActiveTab] = useState('About');

  const renderSection = () => {
    switch (activeTab) {
      case 'About':
        return <AboutSection />;
      case 'Portfolio':
        return <PortofolioSection />;
      case 'Resume':
        return <ResumeSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row p-6 gap-6">
      <ProfileCard />
      <div className="flex-1">{renderSection()}</div>

      <div className="pt-6 md:pt-0">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </main>
  );
}
