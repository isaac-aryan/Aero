import React from 'react';
 
function ActionButton({ text, query, className, onClick }) {
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