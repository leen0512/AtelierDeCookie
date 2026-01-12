import React from 'react';
import { Check } from 'lucide-react';

const ThankYou = ({ setCurrentPage, setOrderSubmitted, setSelectedBox, setBoxSlots }) => (
  <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] via-[#F0DCC4] to-[#E8D4BA] flex items-center justify-center py-12 px-6">
    <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-12 h-12 text-green-600" />
      </div>
      <h2 className="text-5xl font-serif text-[#8B4513] mb-4">Thank You!</h2>
      <p className="text-xl text-[#A0522D] mb-8">Your order has been received</p>
      
      <div className="bg-[#FDF8F3] rounded-2xl p-6 mb-8">
        <p className="text-[#8B4513] mb-4">We've sent your order details to:</p>
        <p className="text-2xl font-serif text-[#8B4513]">leen051206@gmail.com</p>
      </div>

      <p className="text-[#A0522D] mb-8">
        You'll receive a confirmation email shortly. We're excited to bake your cookies fresh and deliver them with love on your chosen date!
      </p>

      <div className="flex justify-center gap-4">
        <button onClick={() => { setCurrentPage('home'); setOrderSubmitted(false); }} className="bg-[#8B4513] text-white px-8 py-3 rounded-full hover:bg-[#6F3609] transition">
          Back to Home
        </button>
        <button onClick={() => { setSelectedBox(null); setBoxSlots([]); setCurrentPage('menu'); setOrderSubmitted(false); }} className="bg-[#A0522D] text-white px-8 py-3 rounded-full hover:bg-[#8B3A1F] transition">
          Order Again
        </button>
      </div>

      <div className="mt-8 text-6xl animate-bounce">🍪🎀💝</div>
    </div>
  </div>
);

export default ThankYou;