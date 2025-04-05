import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BottomNav from './components/BottomNav';

function App() {
  const [showBottomNav, setShowBottomNav] = useState(true);

  const handleSearchTriggered = () => {
    setShowBottomNav(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black flex flex-col relative">
      <Navbar />
      <Hero onSearchTriggered={handleSearchTriggered} />
      {showBottomNav && <BottomNav />}
    </div>
  );
}
 
export default App;
