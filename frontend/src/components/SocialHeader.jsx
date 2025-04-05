// components/Header.jsx
import React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-lime-300 text-6xl font-bold">aero</div>
      <div className="flex-1 mx-6">
        <div className="relative">
          <input
            type="text"
            placeholder=""
            className="w-full py-6 px-8 text-gray-100 text-3xl bg-gray-900 rounded-2xl border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-300"
          />
          <button className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-transparent px-4 py-2 text-gray-300 hover:text-white flex items-center text-xl">
            Launch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;