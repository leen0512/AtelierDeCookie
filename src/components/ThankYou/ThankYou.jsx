import React from 'react';

const ThankYou = ({ email }) => (
  <div className="thank-you-container">
    <div className="thank-you-card">
      <div className="thank-you-icon">✅</div>
      <h2 className="thank-you-title">Thank You!</h2>
      <p className="thank-you-message">Your order has been received.</p>
      <div className="email-display">
        <p>Confirmation sent to:</p>
        <p>{email}</p>
      </div>
    </div>
  </div>
);

export default ThankYou;
