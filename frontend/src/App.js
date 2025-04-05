import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aero from './pages/AeroPage';
import Social from './pages/SocialPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aero" element={<Aero />} />
        <Route path="/" element={<Social />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
