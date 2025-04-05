import React from 'react';
import ActionButton from './ActionButton';
 
function Hero() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl mb-2">
          <span className="text-gray-200">experience </span>
          <span className="text-indigo-400">aero.</span>
        </h1>
      </div>
     
      <ActionButton
        text="Launch"
        className="w-full max-w-4xl mb-16 py-6 bg-transparent border-2 border-gray-400 text-white text-3xl rounded-2xl hover:bg-gray-800 transition-all"
      />
    </div>
  );
}
 
export default Hero;