import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Aero from './pages/AeroPage';
import Social from './pages/SocialPage';

function App() {
  const location = useLocation(); // Get current route location

  return (
    <AnimatePresence mode='popLayout'> {/* Changed to popLayout for coordinated motion */}
      <Routes location={location} key={location.pathname}>
        <Route path="/aero" element={
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Aero />
          </motion.div>
        }/>
        <Route path="/" element={
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }} // Current page slides partially left
            exit={{ x: '-100%' }} // Fully exits left when leaving
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Social />
          </motion.div>
        }/>
      </Routes>
    </AnimatePresence>
  );
}

// Wrap App with BrowserRouter
export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}