import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = ({ startOrder }) => (
  <div className="min-h-screen bg-[#FDF8F3] py-12">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-5xl font-serif text-[#8B4513] text-center mb-12">Get in Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-serif text-[#8B4513] mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="text-[#8B4513] mt-1 mr-4" />
              <div>
                <p className="font-medium text-[#8B4513]">Email</p>
                <a href="mailto:leen051206@gmail.com" className="text-[#A0522D] hover:underline">leen051206@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-[#8B4513] mt-1 mr-4" />
              <div>
                <p className="font-medium text-[#8B4513]">Phone</p>
                <p className="text-[#A0522D]">Available via email</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="text-[#8B4513] mt-1 mr-4" />
              <div>
                <p className="font-medium text-[#8B4513]">Location</p>
                <p className="text-[#A0522D]">Delivering fresh cookies with love</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#E8D4BA]">
            <h4 className="text-lg font-serif text-[#8B4513] mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center hover:bg-[#E8D4BA] transition">
                <Instagram className="text-[#8B4513]" />
              </button>
              <button className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center hover:bg-[#E8D4BA] transition">
                <Facebook className="text-[#8B4513]" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BA] rounded-2xl shadow-lg p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-6">🎀</div>
            <h3 className="text-3xl font-serif text-[#8B4513] mb-4">Sweet Elegance</h3>
            <p className="text-[#A0522D] mb-6">Where every cookie tells a story of craftsmanship and love</p>
            <button onClick={() => startOrder(4)} className="bg-[#8B4513] text-white px-8 py-3 rounded-full hover:bg-[#6F3609] transition">
              Start Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;