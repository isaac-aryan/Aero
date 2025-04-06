import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ActionButton({ text, query, className, onClick }) {
  const navigate = useNavigate();

  const handleAero = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/aero?search=${encodeURIComponent(query.trim())}`);
    }
    else{
      navigate(`/aero`);
    }
    
  };

  return (
    <button
      className={className}
      onClick={handleAero}
    >
      {text}
    </button>
  );
}
 
export default ActionButton;