import React, { useState, useEffect } from 'react';
import SearchResponse from './SearchResponse';

const SearchBar = ({ onSearch, onSearchTriggered, apiResponse, searchTextFS, placeholder = "" }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isResultVisible, setIsResultVisible] = useState(false);

  // Get the current URL
  const url = new URL(window.location.href);
  const searchTerm = url.searchParams.get('search') || '';

  useEffect(() => {
    if (searchTerm) {
      setInputValue(searchTerm);
      performSearch(searchTerm);
    }
  }, [searchTerm]);

  const performSearch = (term) => {
    setSearchText(term);
    setIsResultVisible(true);
    onSearchTriggered(); // Hide BottomNav
    onSearch(term); // Original search handler
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(inputValue);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <form onSubmit={handleSubmit} className="w-full max-w-6xl px-4">
        <div className="relative w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            className="w-full py-6 pl-8 pr-36 text-gray-100 text-3xl bg-gray-900 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-300"
          />
          <button 
            type="submit"
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-transparent px-4 py-2 text-gray-300 hover:text-white flex items-center text-xl"
          >
            Launch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
      
      {isResultVisible && <SearchResponse searchText={searchText} apiResponse={apiResponse} />}
    </div>
  );
};

export default SearchBar;