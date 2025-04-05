import React from 'react';
import SearchBar from './SearchBar';
 
function Hero({ onSearchTriggered }) {
    const handleSearch = (term) => {
      console.log('Searching for:', term);
      onSearchTriggered(); // Forward the hide command
    };
  
    return (
      <div className="flex flex-col items-center justify-center px-4">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl mb-2">
            <span className="text-gray-200">experience </span>
            <span className="text-indigo-400">aero.</span>
          </h1>
        </div>
        <SearchBar 
          onSearchTriggered={onSearchTriggered} 
          onSearch={handleSearch} 
        />
      </div>
    );
  }
 
export default Hero;