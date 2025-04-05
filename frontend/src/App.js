import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ActionButton from './components/ActionButton';
import BottomNav from './components/BottomNav';
import JoinMissionButton from './components/MissionButton';
 
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black flex flex-col relative">
      <Navbar />
      <JoinMissionButton />
      <Hero />
      <BottomNav />
    </div>
  );
}
 
export default App;
