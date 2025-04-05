import React from 'react';
import ActionButton from './ActionButton';
 
function BottomNav() {
  return (
    <div className="px-4 pb-8 grid grid-cols-4 gap-4">
      <ActionButton
        text={
          <div className="text-center">
            <div>Help me</div>
            <div>count</div>
            <div>cards</div>
          </div>
        }
        className="bg-lime-300 text-black text-2xl font-bold py-6 rounded-3xl"
      />
      <div className="bg-gray-900 rounded-3xl"></div>
      <div className="bg-gray-900 rounded-3xl"></div>
      <ActionButton
        text=""
        className="bg-indigo-500 rounded-3xl"
      />
    </div>
  );
}
 
export default BottomNav;