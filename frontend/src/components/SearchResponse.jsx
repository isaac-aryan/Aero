import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

function SearchResponse({ searchText, apiResponse }) {
  const [displayText, setDisplayText] = useState('');
  const [displayMarkdown, setDisplayMarkdown] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const markdownRef = useRef(null);
  const [typingComplete, setTypingComplete] = useState(false);

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
    }, 50); // Faster typing speed

    return () => clearInterval(typingInterval);
  }, [searchText]);

  // Typing effect for markdown content
  useEffect(() => {
    if (!apiResponse) return;
    
    // Reset when apiResponse changes
    setDisplayMarkdown('');
    setTypingComplete(false);
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < apiResponse.length) {
        setDisplayMarkdown(apiResponse.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 10); // Speed of typing for markdown

    return () => clearInterval(typingInterval);
  }, [apiResponse]);

  return (
    <div className={`
      w-full max-w-6xl mt-4 pb-8 p-6 
      border border-gray-700 bg-gray-900 text-gray-100
      overflow-hidden
      ${isVisible ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
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
      <div className="markdown-container relative mb-2">
        {/* Hidden full markdown for proper rendering */}
        <div className="sr-only">
          <ReactMarkdown>{apiResponse}</ReactMarkdown>
        </div>
        
        {/* Visible typing effect */}
        <div ref={markdownRef} className="markdown-typing pb-2">
          <ReactMarkdown>{displayMarkdown}</ReactMarkdown>
         
        </div>
      </div>
    </div>
  );
}

export default SearchResponse;