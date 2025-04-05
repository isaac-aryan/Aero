import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Launch" }) => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-6xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full py-6 px-8 text-gray-100 text-3xl bg-gray-900 rounded-2xl border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-300"
        />
        <button 
          type="submit"
          className="text-xl absolute right-6 top-1/2 transform -translate-y-1/2 bg-transparent px-4 py-2 text-gray-300 hover:text-white"
        >
            Launch
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>

        </button>
      </div>
    </form>
  );
};

export default SearchBar;