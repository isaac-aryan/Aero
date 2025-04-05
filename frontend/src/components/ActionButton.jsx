import React from 'react';
 
function ActionButton({ text, className, onClick }) {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
 
export default ActionButton;