import React from 'react';
import CookieCard from '../components/CookieCard';
import { cookiesData } from '../data/cookies';

const Menu = ({ startOrder }) => (
  <div className="min-h-screen bg-[#FDF8F3] py-12">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-serif text-[#8B4513] text-center mb-4">Our Cookie Collection</h2>
      <p className="text-center text-[#A0522D] mb-12">Handcrafted with premium ingredients</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cookiesData.map(cookie => (
          <CookieCard key={cookie.id} cookie={cookie} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-3xl font-serif text-[#8B4513] mb-6">Ready to Order?</h3>
        <div className="flex justify-center gap-4">
          <button onClick={() => startOrder(4)} className="bg-[#8B4513] text-white px-8 py-4 rounded-full hover:bg-[#6F3609] transition shadow-lg">
            Box of 4 - ₪70
          </button>
          <button onClick={() => startOrder(8)} className="bg-[#A0522D] text-white px-8 py-4 rounded-full hover:bg-[#8B3A1F] transition shadow-lg">
            Box of 8 - ₪120
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;