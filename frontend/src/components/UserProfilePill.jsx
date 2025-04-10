import React from 'react';

const UserProfilePill = ({ userName, profileImageUrl, onLogout }) => {
  return (
    <div className="flex items-center bg-slate-800 rounded-full py-2 px-3 pr-5 shadow-md max-w-md hover:border-lime-400/30 hover:shadow-lg hover:shadow-lime-400/10">
      {/* User Profile Image */}
      <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-slate-600">
        <img 
          src={profileImageUrl} 
          className="h-full w-full rounded-full bg-gradient-to-br from-lime-300 to-lime-500 p-0.5 flex-shrink-0 object-cover"
        />
      </div>
      
      {/* User Info and Logout Button */}
      <div className="ml-3 flex flex-col justify-center">
        {/* User Name */}
        <span className="text-white text-lg font-medium truncate">{userName}</span>
        
        {/* Logout Button */}
        <button 
          onClick={onLogout} 
          className="text-xs text-slate-300 hover:text-white transition-colors bg-transparent px-0 py-0 text-left"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfilePill;