import React from 'react';

const Hero = ({ startOrder }) => (
  <div className="relative bg-gradient-to-br from-[#F5E6D3] via-[#F0DCC4] to-[#E8D4BA] py-24">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 text-6xl animate-pulse">🍪</div>
      <div className="absolute top-40 right-20 text-5xl animate-pulse delay-100">🎀</div>
      <div className="absolute bottom-20 left-1/4 text-4xl animate-pulse delay-200">💝</div>
    </div>
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-6xl font-serif text-[#8B4513] mb-6">Handcrafted with Love</h2>
      <p className="text-xl text-[#A0522D] mb-8 max-w-2xl mx-auto">Premium artisan cookies, baked fresh daily. Each bite is a moment of pure elegance.</p>
      <div className="flex justify-center gap-4">
        <button onClick={() => startOrder(4)} className="bg-[#8B4513] text-white px-8 py-4 rounded-full hover:bg-[#6F3609] transition transform hover:scale-105 shadow-lg font-medium">
          Order Box of 4 - ₪70
        </button>
        <button onClick={() => startOrder(8)} className="bg-[#A0522D] text-white px-8 py-4 rounded-full hover:bg-[#8B3A1F] transition transform hover:scale-105 shadow-lg font-medium">
          Order Box of 8 - ₪120
        </button>
      </div>
    </div>
  </div>
);

export default Hero;