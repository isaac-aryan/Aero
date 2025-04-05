// components/ProfileCard.jsx
import React from 'react';

function ProfileCard({ name, activity, status }) {
  return (
    <div className="bg-gray-800/80 rounded-2xl p-6">
      <div className="flex items-start">
        <div className="w-16 h-16 rounded-full bg-lime-300/90 flex items-center justify-center">
          {/* This would be an avatar image in a real app */}
        </div>
        <div className="ml-6">
          <h2 className="text-lime-300 text-4xl font-medium">{name}</h2>
          <p className="text-gray-300 text-xl mt-1">{activity}</p>
          <p className="text-gray-400 text-2xl mt-6">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;