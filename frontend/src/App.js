
 
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
//import ActionButton from './components/ActionButton';
import BottomNav from './components/BottomNav';
import JoinMissionButton from './components/MissionButton';
import SearchBar from './components/SearchBar';

function App() {
  const [showBottomNav, setShowBottomNav] = useState(true);

  const handleSearch = () => {
    setShowBottomNav(false); // Hide BottomNav when search occurs
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black flex flex-col relative">
      <Navbar />
      <JoinMissionButton />
      <Hero />
      <SearchBar onSearch={handleSearch} /> {/* Pass callback */}
      {showBottomNav && <BottomNav />} {/* Conditionally render */}
    </div>
  );
}
 
export default App;
