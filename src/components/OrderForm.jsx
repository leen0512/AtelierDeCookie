import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Make sure to run 'npm install @emailjs/browser'

const OrderForm = ({ selectedBox, boxSlots, handleOrderSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    giftMessage: "",
    payment: "bit",
  });
  const [loading, setLoading] = useState(false);

  const boxPrice = selectedBox === 4 ? 70 : 120;

  const SERVICE_ID = "service_eol27dq";
  const TEMPLATE_ID = "template_twfnxcs";
  const PUBLIC_KEY = "td-59ErGTQS5Ye5m7";

 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const cookieList = boxSlots
      .map((slot, index) => `
        <div style="padding: 8px 0; border-bottom: 1px solid #FDF8F3; display: flex; justify-content: space-between;">
          <span style="color: #8B4513; font-weight: 600;">Slot ${index + 1}:</span> 
          <span style="color: #555;">${slot ? slot.name : 'Empty'}</span>
        </div>`)
      .join('');

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
      // 1. Send the notification to YOU (Admin)
      await emailjs.send(SERVICE_ID, 'template_twfnxcs', templateParams, PUBLIC_KEY);
      console.log('Admin notification sent!');
      
      // 2. Send the confirmation to the CUSTOMER (Auto-Reply)
      // Replace 'template_your_new_id' with the actual ID from your new template
      await emailjs.send(SERVICE_ID, 'template_7dy6gxb', templateParams, PUBLIC_KEY);
      console.log('Customer confirmation sent!');
      
      handleOrderSubmit(formData);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Error placing order. Please check your internet and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto mt-10">
      <h3 className="text-3xl font-serif text-[#8B4513] text-center mb-8">
        Delivery Details
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[#8B4513] font-medium mb-2">
            Full Name *
          </label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-[#E8D4BA] focus:border-[#8B4513] focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#8B4513] font-medium mb-2">
              Email *
            </label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border-2 border-[#E8D4BA] focus:border-[#8B4513] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[#8B4513] font-medium mb-2">
              Phone *
            </label>
            <input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border-2 border-[#E8D4BA] focus:border-[#8B4513] focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#8B4513] font-medium mb-2">
            Delivery Address *
          </label>
          <textarea
            required
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            rows="3"
            className="w-full px-4 py-3 rounded-lg border-2 border-[#E8D4BA] focus:border-[#8B4513] focus:outline-none"
          ></textarea>
        </div>
        <div>
          <label className="block text-[#8B4513] font-medium mb-2">
            Preferred Delivery Date *
          </label>
          <input
            required
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-[#E8D4BA] focus:border-[#8B4513] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-[#8B4513] font-medium mb-2">
            Gift Message (Optional)
          </label>
          <textarea
            value={formData.giftMessage}
            onChange={(e) =>
              setFormData({ ...formData, giftMessage: e.target.value })
            }
            rows="3"
            placeholder="Add a personal touch..."
            className="w-full px-4 py-3 rounded-lg border-2 border-[#E8D4BA] focus:border-[#8B4513] focus:outline-none"
          ></textarea>
        </div>
        <div>
          <label className="block text-[#8B4513] font-medium mb-2">
            Payment Method *
          </label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="bit"
                checked={formData.payment === "bit"}
                onChange={(e) =>
                  setFormData({ ...formData, payment: e.target.value })
                }
                className="mr-2"
              />
              <span className="text-[#8B4513]">Bit</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={formData.payment === "cash"}
                onChange={(e) =>
                  setFormData({ ...formData, payment: e.target.value })
                }
                className="mr-2"
              />
              <span className="text-[#8B4513]">Cash on Delivery</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-[#8B4513] text-white py-4 rounded-full transition transform hover:scale-105 shadow-lg text-lg font-medium ${
            loading ? "opacity-50" : "hover:bg-[#6F3609]"
          }`}
        >
          {loading ? "Sending Order..." : `Place Order - ₪${boxPrice}`}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
