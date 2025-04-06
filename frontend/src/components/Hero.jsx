import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { GoogleGenAI } from "@google/genai";
 
function Hero({ onSearchTriggered, searchTextFS }) {
    const [apiResponse, setResponse] = useState('');

    const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GOOGLE_API_KEY });
    
    async function main( { input } ) {
      console.log('Asking about:', input);
      const query = `If the following input is a question about learning a skill or activity 
      then please explain how to learn that skill in a series of manageable steps and only give me the steps. Otherwise, if the input is not in
      that format, ask to rephrase as a how to question: ${input}`;
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
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