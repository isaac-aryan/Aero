import React from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const handleLogo = (e) => {
      navigate(`/`);
    
  };
  return (
    <nav className="p-8">
      <button className="text-lime-300 text-7xl font-bold" onClick={handleLogo}>aero</button>
    </nav>
  );
}
 
export default Navbar;