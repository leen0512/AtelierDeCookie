import React from 'react';
import { Star } from 'lucide-react';

const CookieCard = ({ cookie, onSelect, isSelected }) => (
  <div 
    onClick={() => onSelect && onSelect(cookie)}
    className={`bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl cursor-pointer ${isSelected ? 'ring-4 ring-[#8B4513]' : ''}`}
  >
    <div className="h-48 bg-gradient-to-br from-[#F0DCC4] to-[#E8D4BA] flex items-center justify-center text-7xl">
      {cookie.image}
    </div>
    <div className="p-6">
      <h4 className="text-xl font-serif text-[#8B4513] mb-2">{cookie.name}</h4>
      <p className="text-sm text-[#A0522D] mb-4">{cookie.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-[#8B4513]">₪{cookie.price}</span>
        {cookie.category === 'new' && (
          <span className="bg-[#FFB6C1] text-white text-xs px-3 py-1 rounded-full">NEW</span>
        )}
        {cookie.category === 'bestseller' && (
          <span className="bg-[#FFD700] text-white text-xs px-3 py-1 rounded-full flex items-center">
            <Star className="w-3 h-3 mr-1 fill-white" /> BEST
          </span>
        )}
      </div>
    </div>
  </div>
);

export default CookieCard;