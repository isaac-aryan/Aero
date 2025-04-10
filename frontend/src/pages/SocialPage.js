import React, { useState } from 'react';
import Header from '../components/SocialHeader';
import ProfileCard from '../components/SocialProfileCard';
import TrendingSkills from '../components/SocialTrendingSkills';
import CampaignSlogan from '../components/Campaign';
import AchievementPost from '../components/MakePost';
import duckImg from '../assets/norris.png';
import maryImg from '../assets/mary.png';
import johnImg from '../assets/john.png';
import crisImg from '../assets/cristiano.png';
import liamImg from '../assets/liam.png';
import UserProfilePill from '../components/UserProfilePill';

function Social() {
  // Simple state to track the posted data
  const [postedData, setPostedData] = useState(null);

  const handleNewPost = (data) => {
    // Only update state if there's actual content
    if (data.learningText.trim()) {
      setPostedData(data);
    }
  };

  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: 'Dwayne',
      pfp: johnImg,
      activity: 'Learning how to crochet!',
      query: "How to crochet?",
      status: '"My fingers are too big for this, but atleast I know how to make a heart pillow now!"'
    },
    {
      id: 2,
      name: 'Oprah',
      pfp: maryImg,
      activity: 'Learning how to use Git!',
      query: "How to get started with Git and GitHub?",
      status: '"Can I try doing git push --force?"'
    },
    {
      id: 3,
      name: 'Cristiano',
      pfp: crisImg,
      activity: 'Learning how to do keepy-ups!',
      query: "How to do keepy-ups with a soccer ball?",
      status: '"Muchas gracias aficion, esto es para vosotros! SIUUU!"'
    },
    {
      id: 4,
      name: 'Liam',
      pfp: liamImg,
      activity: 'Learning how to drive!',
      query: "How to drive a car for the first time?",
      status: '"Today I learned that ABC stands for accelerator, brake and clutch!"'
    }
  ];

  // Trending skills data
  const trendingSkills = [
    "How to learn Python",
    "How to write a good CV",
    "How to do woodworking",
    "How to play the piano",
    "How to salsa",
    "How to tie a tie",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">

      <CampaignSlogan />
                  
        {/* Add the UserProfilePill with proper centering */}
        <div className="flex justify-center my-4">
            <UserProfilePill 
            userName="Duck Norris"
            profileImageUrl={duckImg} 
            onLogout={() => console.log("Logging out")}
            />
        </div>
      
      <div className="w-full mx-auto pt-8 pr-8 pl-8 pb-1 h-screen">
        <div className="bg-black/60 rounded-3xl p-8 flex flex-col h-[calc(100%-4rem)] shadow-xl border border-gray-800">
          {/* Header with search bar */}
          <Header />
          
          {/* Main content grid with divider */}
          <div className="flex mt-6 flex-grow overflow-hidden">
            {/* Left column for posts and profile cards */}
            <div className="flex-grow space-y-6 pt-2 pb-2 pl-2 pr-6 overflow-y-auto">
              {/* Post creation box */}
              <AchievementPost onPost={handleNewPost} />
              
              {/* BRUTE FORCE: Render Duck Norris post if exists */}
              {postedData && postedData.postedFlag && postedData.learningText && (
                <ProfileCard
                  key="duck-norris-post"
                  name="Duck Norris"
                  pfp={duckImg}
                  activity={`Learning ${postedData.learningText}!`}
                  query="How to fly?"
                  status={`"${postedData.thoughtsText}"`}
                />
              )}
              
              {/* Original profile cards */}
              {profiles.map(profile => (
                <ProfileCard
                  key={`profile-${profile.id}`}
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