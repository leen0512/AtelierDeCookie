import React from 'react';
import { Star } from 'lucide-react';
import CookieCard from './CookieCard';
import { cookiesData } from '../data/cookies';

const FeaturedCookies = ({ setCurrentPage }) => {
  const bestsellers = cookiesData.filter(c => c.category === 'bestseller').slice(0, 3);
  const newArrivals = cookiesData.filter(c => c.category === 'new').slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Bestsellers */}
      <div className="mb-16">
        <div className="flex items-center justify-center mb-8">
          <Star className="text-[#FFD700] fill-[#FFD700] mr-2" />
          <h3 className="text-4xl font-serif text-[#8B4513]">Bestsellers</h3>
          <Star className="text-[#FFD700] fill-[#FFD700] ml-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestsellers.map(cookie => (
            <CookieCard key={cookie.id} cookie={cookie} />
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div>
        <div className="flex items-center justify-center mb-8">
          <span className="text-3xl mr-2">✨</span>
          <h3 className="text-4xl font-serif text-[#8B4513]">New Arrivals</h3>
          <span className="text-3xl ml-2">✨</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newArrivals.map(cookie => (
            <CookieCard key={cookie.id} cookie={cookie} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <button onClick={() => setCurrentPage('menu')} className="text-[#8B4513] font-medium hover:underline">
          View Full Menu →
        </button>
      </div>
    </div>
  );
};

export default FeaturedCookies;