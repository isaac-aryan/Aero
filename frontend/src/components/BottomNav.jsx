import React from 'react';
import ActionButton from './ActionButton';

function BottomNav() {
  return (
    <div className="px-4 mt-8 grid grid-cols-4 gap-4">
      {[
        { 
          title: "count cards", 
          query: "How to count cards in blackjack?",
          borderColor: "border-purple-400" 
        },
        { 
          title: "cook pesto pasta", 
          query: "How to make simple pesto pasta?",
          borderColor: "border-lime-300" 
        },
        { 
          title: "learn Portuguese", 
          query: "How to learn Portuguese?",
          borderColor: "border-purple-400" 
        },
        { 
          title: "center a div", 
          query: "How to center a div in HTML/CSS?",
          borderColor: "border-lime-300" 
        }
      ].map((item, index) => (
        <ActionButton
          key={index}
          text={
            <div className="text-center px-2">
              <div className="font-medium text-gray-300">How to...</div>
              <div className="italic text-white text-[1.1rem] leading-tight mt-1">{item.title}</div>
            </div>
          }
          query={item.query}
          className={`
            bg-gray-900/70 backdrop-blur-sm
            rounded-2xl border
            ${item.borderColor}
            hover:shadow-lg transition-all duration-300
            ${index % 2 === 0 ? 
              'hover:shadow-purple-400/30' : 
              'hover:shadow-lime-300/30'}
            py-5 h-full
          `}
        />
      ))}
    </div>
  );
}

export default BottomNav;