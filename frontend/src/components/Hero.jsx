import React from 'react';
import SearchBar from './SearchBar';
 
function Hero() {

  const handleSearch = (term) => {
    console.log('Searching for:', term);
    // Add your search logic here
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl mb-2">
          <span className="text-gray-200">experience </span>
          <span className="text-indigo-400">aero.</span>
        </h1>
      </div>
     
      
  
    </div>
  );
}
 
export default Hero;