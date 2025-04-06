// components/CampaignSlogan.jsx
import React, { useEffect, useState } from 'react';

const CampaignSlogan = () => {
  const [typedText, setTypedText] = useState('');
  const sloganParts = {
    colored: "aero",
    white: ": learn at the speed of thought."
  };
  const fullText = sloganParts.colored + sloganParts.white;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="w-full mb-4 pt-10 text-center">
      <h1 className="text-5xl md:text-4xl font-light tracking-tight">
        {typedText.length > 0 && (
          <>
            <span className="bg-gradient-to-r from-sky-300 to-indigo-400 bg-clip-text text-transparent">
              {sloganParts.colored}
            </span>
            <span className="text-white italic">
              {typedText.slice(sloganParts.colored.length)}
            </span>
          </>
        )}
        {typedText.length === fullText.length && (
          <span className="ml-1 text-white animate-pulse italic">|</span>
        )}
      </h1>
      <div className="mt-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/3 mx-auto"></div>
      </div>
    </div>
  );
};

export default CampaignSlogan;