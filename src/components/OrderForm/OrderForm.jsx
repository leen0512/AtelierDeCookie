import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const OrderForm = ({ selectedBox, boxSlots, handleOrderSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    giftMessage: '',
    payment: 'bit'
  });
  const [loading, setLoading] = useState(false);
  const boxPrice = selectedBox === 4 ? 70 : 120;

  const SERVICE_ID = 'service_eol27dq';
  const TEMPLATE_ID = 'template_twfnxcs';
  const PUBLIC_KEY = 'td-59ErGTQS5Ye5m7';

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const cookieList = boxSlots.map((slot, index) => `
      <div style="padding: 8px 0; border-bottom: 1px solid #FDF8F3; display: flex; justify-content: space-between;">
        <span style="color: #8B4513; font-weight: 600;">Slot ${index + 1}:</span> 
        <span style="color: #555;">${slot ? slot.name : 'Empty'}</span>
      </div>`).join('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      address: formData.address,
      delivery_date: formData.date,
      items: cookieList,
      total_price: `₪${boxPrice}`,
      payment_method: formData.payment,
      message: formData.giftMessage || 'No message'
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('Admin notification sent!');
      await emailjs.send(SERVICE_ID, 'template_7dy6gxb', templateParams, PUBLIC_KEY);
      console.log('Customer confirmation sent!');
      handleOrderSubmit(formData);
    } catch (error) {
      console.error(error);
      alert('Error placing order. Please check your internet and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container mt-12">
      <h3 className="text-3xl font-serif text-primary text-center mb-8">
        Delivery Details
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="form-input"
          />
        </div>
        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              className="form-input"
            />
          </div>
        </div>
        {/* Address */}
        <div className="form-group">
          <label className="form-label">Delivery Address *</label>
          <textarea
            value={formData.address}
            required
            rows={3}
            onChange={e => setFormData({ ...formData, address: e.target.value })}
            className="form-textarea"
          ></textarea>
        </div>
        {/* Date */}
        <div className="form-group">
          <label className="form-label">Preferred Delivery Date *</label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={e => setFormData({ ...formData, date: e.target.value })}
            className="form-input"
          />
        </div>
        {/* Gift Message */}
        <div className="form-group">
          <label className="form-label">Gift Message (Optional)</label>
          <textarea
            value={formData.giftMessage}
            rows={3}
            placeholder="Add a personal touch..."
            onChange={e => setFormData({ ...formData, giftMessage: e.target.value })}
            className="form-textarea"
          ></textarea>
        </div>
        {/* Payment */}
        <div className="form-group">
          <label className="form-label">Payment Method *</label>
          <div className="form-radio-group">
            <label className="form-radio-label">
              <input
                type="radio"
                value="bit"
                checked={formData.payment === 'bit'}
                onChange={e => setFormData({ ...formData, payment: e.target.value })}
              />
              Bit
            </label>
            <label className="form-radio-label">
              <input
                type="radio"
                value="cash"
                checked={formData.payment === 'cash'}
                onChange={e => setFormData({ ...formData, payment: e.target.value })}
              />
              Cash on Delivery
            </label>
          </div>
        </div>
        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? 'Sending Order...' : `Place Order - ₪${boxPrice}`}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
