import React from 'react';
import { cookiesData } from '../data/cookies';

const BoxCustomizer = ({ selectedBox, boxSlots, selectCookieForSlot, removeFromSlot }) => {
  const boxPrice = selectedBox === 4 ? 70 : 120;

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-serif text-[#8B4513] mb-2">Your Elegant Box of {selectedBox}</h3>
        <p className="text-[#A0522D]">Select a cookie for each slot below</p>
      </div>

      <div className={`grid ${selectedBox === 4 ? 'grid-cols-2' : 'grid-cols-4'} gap-4 max-w-4xl mx-auto mb-8`}>
        {boxSlots.map((slot, index) => (
          <div key={index} className="relative">
            <div className={`aspect-square rounded-2xl border-4 ${slot ? 'border-[#8B4513] bg-white' : 'border-dashed border-[#D4A574] bg-[#FDF8F3]'} flex items-center justify-center transition hover:shadow-lg`}>
              {slot ? (
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">{slot.image}</div>
                  <p className="text-xs font-medium text-[#8B4513]">{slot.name}</p>
                  <button onClick={() => removeFromSlot(index)} className="mt-2 text-red-500 text-xs hover:underline">Remove</button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl text-[#D4A574] mb-2">🍪</div>
                  <p className="text-xs text-[#A0522D]">Slot {index + 1}</p>
                </div>
              )}
            </div>
            {slot && <div className="absolute -top-2 -right-2 bg-[#8B4513] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">{index + 1}</div>}
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-2xl font-serif text-[#8B4513] mb-2">Total: ₪{boxPrice}</p>
        <p className="text-sm text-[#A0522D]">{boxSlots.filter(s => s).length} of {selectedBox} cookies selected</p>
      </div>

      {/* Cookie Selection */}
      <div className="mt-12">
        <h3 className="text-3xl font-serif text-[#8B4513] text-center mb-8">Choose Your Flavors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cookiesData.map(cookie => {
            const nextEmptySlot = boxSlots.findIndex(s => s === null);
            return (
              <div
                key={cookie.id}
                onClick={() => nextEmptySlot !== -1 && selectCookieForSlot(nextEmptySlot, cookie)}
                className={`bg-white rounded-xl shadow-md p-4 text-center transition transform hover:scale-105 hover:shadow-xl ${nextEmptySlot === -1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="text-4xl mb-2">{cookie.image}</div>
                <p className="text-xs font-medium text-[#8B4513]">{cookie.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoxCustomizer;