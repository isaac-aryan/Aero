// components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/aero?search=${encodeURIComponent(searchText.trim())}`);
    }
    else{
      navigate(`/aero`);
    }
    
  };

  return (
    <div className="flex items-center justify-between">
      <div className="text-lime-300 text-6xl font-bold">aero</div>
      <div className="flex-1 mx-6">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-gray-800 text-gray-200 rounded-xl px-4 py-3 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600"
          />
          <button 
            type="submit"
            className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-gray-400 hover:text-lime-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;