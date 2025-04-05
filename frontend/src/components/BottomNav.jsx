import React from 'react';
import ActionButton from './ActionButton';
 
function BottomNav() {
  return (
    <div className="px-4 mt-8 grid grid-cols-4 gap-4">
      <ActionButton
        text={
          <div className="text-center">
            <div>Help me</div>
            <div>count</div>
            <div>cards</div>
          </div>
        }
        className="bg-lime-300/80 text-black text-lg font-medium py-6 rounded-3xl"
      />
      <div className="bg-gray-900/80 rounded-3xl"></div>
      <div className="bg-gray-900/80 rounded-3xl"></div>
      <ActionButton
        text=""
        className="bg-indigo-500/80 rounded-3xl"
      />
    </div>
  );
}
 
export default BottomNav;