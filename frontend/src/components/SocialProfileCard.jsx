// components/ProfileCard.jsx
import React from 'react';
import ActionButton from './ActionButton';

function ProfileCard({ name, pfp, activity, status, query }) {
  return (
    <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 transition-all hover:border-lime-400/30 hover:shadow-lg hover:shadow-lime-400/10">


      <div className="flex items-start gap-5">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lime-300 to-lime-500 p-0.5 flex-shrink-0">
          <img 
            src={pfp} 
            alt={`${name}'s profile`} 
            className="rounded-full w-full h-full object-cover border-2 border-gray-900/80" 
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <h2 className="text-indigo-300/90 text-2xl font-semibold tracking-tight">{name}</h2>
            <ActionButton 
              text="Aero It!" 
              query={query} 
              className="bg-lime-400/40 hover:bg-lime-300/90 text-gray-900 font-medium px-4 py-2 font-bold text-sm rounded-none transition-all duration-200 border-2 border-lime-400/50 hover:border-lime-300/70"
            />
          </div>
          
          <p className="text-gray-400/80 text-sm font-light mt-1 tracking-wide">{activity}</p>
          
          {status && (
            <p className="text-gray-300/90 italic text-lg mt-4 leading-relaxed ">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;