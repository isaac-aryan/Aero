import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ActionButton from './components/ActionButton';
import BottomNav from './components/BottomNav';
import JoinMissionButton from './components/MissionButton';
 
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 flex flex-col relative">
      <Navbar />
      <JoinMissionButton />
      <Hero />
      <BottomNav />
    </div>
  );
}
 
export default App;
