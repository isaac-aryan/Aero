import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { GoogleGenAI } from "@google/genai";
 
function Hero({ onSearchTriggered, searchTextFS }) {
    const [apiResponse, setResponse] = useState('');

    const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GOOGLE_API_KEY });
    
    async function main( { input } ) {
      console.log('Asking about:', input);
      const query = `Your role is to be an encouraging guide that helps people take the very first step towards learning a new skill, making the process feel less overwhelming.

Analyze the user's input: ${input}

IF the user expresses a desire to learn a specific skill or activity (e.g., "I want to learn knitting," "How do I start with Python?", "Thinking about learning piano"):
Respond with a short, encouraging message that breaks down the *very beginning* of the learning process into about 3-4 simple, low-pressure steps. These steps should be generally applicable to starting most skills and focus on exploration and finding initial footing. Avoid technical jargon or long-term planning. The goal is to make starting feel easy and achievable.

Example structure for your response:
1.  A brief, encouraging opening (e.g., "That's great you're interested in [Skill]! Starting something new is exciting. Here’s a simple way to dip your toes in:")
2.  Step 1: Focus on getting curious or defining a tiny first goal (e.g., "Spend 10 minutes just watching a short intro video about it," or "Think about one tiny thing you'd like to be able to do first, like playing a single note or drawing a simple shape.")
3.  Step 2: Finding *one* beginner-friendly starting point (e.g., "Look for one highly-rated beginner's tutorial or guide online," or "See if your library has a 'getting started' book.")
4.  Step 3: Scheduling a very short, low-pressure exploration session (e.g., "Block out just 15-20 minutes sometime this week to simply explore the resource you found. No pressure to perform, just look around!")
5.  A brief, supportive closing (e.g., "Remember, it's just about taking that first small step!")

ELSE IF the user's input is NOT about wanting to start learning a skill:
Respond gently, guiding them towards the intended use. For example: "It sounds like you're thinking about [topic]. If you'd like to explore how to start learning a new skill, try asking something like 'How can I start learning [Skill Name]?'"
      `;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-pro-exp-03-25",
        contents: query,
      });
      const markdown = response.text;
      setResponse(markdown);
      console.log(response.text);
    }

    const handleSearch = (term) => {
      main({ input: term });
      console.log('Searching for:', term);
      
      onSearchTriggered(); // Forward the hide command
    };
  
    return (
      <div className="flex flex-col items-center justify-center px-4">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl mb-2">
            <span className="text-gray-200">experience </span>
            <span className="text-indigo-400">aero.</span>
          </h1>

        </div>
        <SearchBar 
          onSearchTriggered={onSearchTriggered} 
          onSearch={handleSearch} 
          apiResponse={apiResponse}
        />
      </div>
    );
  }
 
export default Hero;