// components/TrendingSkills.jsx
import React from 'react';

function TrendingSkills({ skills }) {
  return (
    <div className="bg-gray-900/80 rounded-2xl p-6">
      <h2 className="text-indigo-400 text-4xl font-medium mb-6">Trending Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-700/70 hover:bg-gray-700 px-4 py-3 text-gray-300 text-xl cursor-pointer transition">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingSkills;