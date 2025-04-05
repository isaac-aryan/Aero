// App.jsx - Main component
import React from 'react';
import Header from '../components/SocialHeader';
import ProfileCard from '../components/SocialProfileCard';
import TrendingSkills from '../components/SocialTrendingSkills';

function Social() {
  // Sample data for profile cards
  const profiles = [
    {
      id: 1,
      name: 'John',
      activity: 'learning how to skate',
      status: '"I did this today"'
    },
    {
      id: 2,
      name: 'Mary',
      activity: 'learning how to cook',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/30 to-teal-900/20">
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-gray-900/90 rounded-3xl p-8 shadow-xl border border-gray-800">
          {/* Header with search bar */}
          <Header />
          
          {/* Main content grid */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            {/* Left and middle columns for profile cards */}
            <div className="col-span-2 space-y-6">
              {profiles.map(profile => (
                <ProfileCard 
                  key={profile.id}
                  name={profile.name}
                  activity={profile.activity}
                  status={profile.status}
                />
              ))}
            </div>
            
            {/* Right column for trending skills */}
            <div className="col-span-1">
              <TrendingSkills skills={trendingSkills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;