import React from 'react';
import { Star } from 'lucide-react';
import CookieCard from '../CookieCard/CookieCard';
import { cookiesData } from '../../data/cookies';

const FeaturedCookies = ({ setCurrentPage }) => {
  const bestsellers = cookiesData.filter(c => c.category === 'bestseller').slice(0, 3);
  const newArrivals = cookiesData.filter(c => c.category === 'new').slice(0, 3);

  return (
    <section className="section">
      {/* Bestsellers */}
      <div className="section-header">
        <h3 className="section-title flex items-center gap-2">
          <Star className="text-gold fill-gold" /> Bestsellers <Star className="text-gold fill-gold" />
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bestsellers.map(cookie => (
          <CookieCard key={cookie.id} cookie={cookie} />
        ))}
      </div>

      {/* New Arrivals */}
      <div className="section-header mt-12">
        <h3 className="section-title flex items-center gap-2">
          ✨ New Arrivals ✨
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newArrivals.map(cookie => (
          <CookieCard key={cookie.id} cookie={cookie} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => setCurrentPage('menu')}
          className="btn btn-outline"
        >
          View Full Menu →
        </button>
      </div>
    </section>
  );
};

export default FeaturedCookies;
