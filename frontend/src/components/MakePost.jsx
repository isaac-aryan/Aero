// components/AchievementPost.jsx
import React, { useState } from 'react';
import duckImg from '../assets/norris.png';

function AchievementPost({ query = "How to get into University of Bath?", onPost }) {

  const [learningText, setLearningText] = useState('');
  const [thoughtsText, setThoughtsText] = useState('');

  const handleSubmit = () => {
    if (!learningText.trim()) return;
    
    // Send raw data to parent
    onPost?.({
      learningText,
      thoughtsText,
      postedFlag: true
    });
    
    setLearningText('');
    setThoughtsText('');
  };

  return (
    <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 mb-6">
      <div className="flex items-start gap-5">

        {/* Profile Picture */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lime-300 to-lime-500 p-0.5 flex-shrink-0">
          <img 
            src={duckImg}
            alt="Duck Norris profile" 
            className="rounded-full w-full h-full object-cover border-2 border-gray-900/80" 
          />
        </div>

        <div className="flex-1 space-y-4">
          {/* Name and Post Button */}
          <div className="flex items-center justify-between">
            <h2 className="text-indigo-300/90 text-2xl font-semibold tracking-tight">Duck Norris (You)</h2>
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={!learningText.trim()}
              className={`bg-lime-400/90 hover:bg-lime-300 text-gray-900 font-bold px-6 py-2 text-sm rounded-none transition-all duration-200 border-2 ${
'border-lime-400/50 hover:border-lime-300/70'
              }`}
            >
              {"Take Off!"}
            </button>
          </div>

          {/* Learning Input */}
          <div className="relative mt-4">
            <input
              type="text"
              value={learningText}
              onChange={(e) => setLearningText(e.target.value)}
              placeholder="What are you learning?"
              className="w-full bg-gray-800/50 border-b border-gray-600/50 focus:border-lime-400/70 pb-2 text-gray-200 focus:outline-none text-lg placeholder-gray-500 transition-colors"
            />
            <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-lime-400/70 to-transparent w-full transform scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100"></div>
          </div>

          {/* Thoughts Textarea */}
          <div className="relative mt-6">
            <textarea
              value={thoughtsText}
              onChange={(e) => setThoughtsText(e.target.value)}
              placeholder="Thoughts gathered on the mission..."
              className="w-full bg-gray-800/50 border-b border-gray-600/50 focus:border-lime-400/70 pb-2 text-gray-200 focus:outline-none text-lg placeholder-gray-500 resize-none transition-colors min-h-[60px]"
              rows="2"
            />
            <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-lime-400/70 to-transparent w-full transform scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AchievementPost;