import React from 'react';
import { Star } from 'lucide-react';

const CookieCard = ({ cookie, onSelect, isSelected }) => (
  <div
    onClick={() => onSelect && onSelect(cookie)}
    className={`cookie-card ${isSelected ? 'selected' : ''}`}
  >
    <div className="cookie-card-image">{cookie.image}</div>
    <div className="cookie-card-content">
      <h4 className="cookie-card-title">{cookie.name}</h4>
      <p className="cookie-card-description">{cookie.description}</p>
      <div className="cookie-card-footer">
        <span className="cookie-card-price">₪{cookie.price}</span>
        {cookie.category === 'new' && (
          <span className="cookie-badge badge-new">NEW</span>
        )}
        {cookie.category === 'bestseller' && (
          <span className="cookie-badge badge-bestseller flex items-center gap-1">
            <Star className="w-3 h-3 fill-white" /> BEST
          </span>
        )}
      </div>
    </div>
  </div>
);

export default CookieCard;
