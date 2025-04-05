import React, { useEffect, useState } from 'react';

function SearchResponse({ searchText }) {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Trigger slide-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect for searchText
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < searchText.length) {
        setDisplayText(searchText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Faster typing speed (adjust as needed)

    return () => clearInterval(typingInterval);
  }, [searchText]);

  return (
    <div className={`
      w-full max-w-6xl mt-4 p-6 
      border border-gray-700 rounded-2xl bg-gray-900 text-gray-100
      overflow-hidden
      ${isVisible ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      transition-all duration-700 ease-out
    `}>
      <h3 className="font-medium text-xl mb-2">Search Results</h3>
      <p>
        You searched for: 
        <span className="font-bold ml-1">
          {displayText}
          <span className="animate-pulse">|</span> {/* Blinking cursor */}
        </span>
      </p>
    </div>
  );
}

export default SearchResponse;