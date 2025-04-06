// App.jsx - Main component
import React from 'react';
import Header from '../components/SocialHeader';
import ProfileCard from '../components/SocialProfileCard';
import TrendingSkills from '../components/SocialTrendingSkills';

import maryImg from '../assets/mary.png';
import johnImg from '../assets/john.png';

function Social() {
  // Sample data for profile cards
  const profiles = [
    {
      id: 1,
      name: 'John',
        pfp: johnImg,
      activity: 'learning how to skate',
      query: "how to skate",
      status: '"I did this today"'
    },
    {
      id: 2,
      name: 'Mary',
        pfp: maryImg,
      activity: 'learning how to cook',
        query: "how to cook",
      status: '"Good day\'s work"'
    },
    {
        id: 3,
        name: 'Dan',
          pfp: johnImg,
        activity: 'learning how to give head',
        query: "how to give head",
        status: '"I did this today"'
      },
      {
        id: 4,
        name: 'Mary',
          pfp: maryImg,
        activity: 'learning how to catch a predator',
        query: "how to catch a predator",
        status: '"Good day\'s work"'
      }
  ];

  // Sample data for trending skills
  const trendingSkills = [
    "How to do Python programming",
    "How to do digital marketing",
    "How to do woodworking"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">
        <div className="w-full mx-auto pt-8 pr-8 pl-8 pb-1 h-screen">
            <div className="bg-black/60 rounded-3xl p-8 flex flex-col h-[calc(100%-4rem)] shadow-xl border border-gray-800">
            {/* Header with search bar */}
            <Header />
            {/* Main content grid with divider */}
            <div className="flex mt-6 flex-grow overflow-hidden">
                {/* Left and middle columns for profile cards */}
                <div className="flex-grow space-y-6 pt-2 pb-2 pl-2 pr-6 overflow-y-auto">
                {profiles.map(profile => (
                    <ProfileCard
                    key={profile.id}
                    name={profile.name}
                    pfp={profile.pfp}
                    activity={profile.activity}
                    query={profile.query}
                    status={profile.status}
                    />
                ))}
                </div>
                {/* Vertical divider */}
                <div className="w-px bg-slate-300 self-stretch mx-3"></div>
                {/* Right column for trending skills */}
                <div className="w-1/3">
                <TrendingSkills skills={trendingSkills} />
                </div>
            </div>
            </div>
        </div>
        </div>
  );
}

export default Social;