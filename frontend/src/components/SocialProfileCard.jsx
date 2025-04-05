// components/ProfileCard.jsx
import React from 'react';
import ActionButton from './ActionButton';

function ProfileCard({ name, pfp, activity, status, query }) {
  return (
    <div className="bg-gray-900/80 outline outline-slate-300 rounded-2xl p-6">
      <div className="flex items-start">
        <div className="w-16 h-16 rounded-full bg-lime-300/90 flex items-center justify-center">
          {/* This would be an avatar image in a real app */}
            <img src={pfp} alt={`${name}'s profile`} className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="ml-6">
          <h2 className="text-indigo-400 text-4xl font-medium">{name}</h2>
          <p className="text-gray-300 text-xl mt-1">{activity}</p>
            <ActionButton text="Ask aero" query={query} className="bg-lime-300/80 text-black px-1 text-sm rounded-md"/>
          <p className="text-gray-400 text-2xl mt-6">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;