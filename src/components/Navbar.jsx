import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => (
  <nav className="bg-[#F5E6D3] shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full flex items-center justify-center">
            <span className="text-2xl">🎀</span>
          </div>
          <div>
            <h1 className="text-2xl font-serif text-[#8B4513]">Sweet Elegance</h1>
            <p className="text-xs text-[#A0522D]">Artisan Cookie Boutique</p>
          </div>
        </div>
        <div className="flex space-x-8">
          <button onClick={() => setCurrentPage('home')} className={`font-medium transition ${currentPage === 'home' ? 'text-[#8B4513]' : 'text-[#A0522D] hover:text-[#8B4513]'}`}>Home</button>
          <button onClick={() => setCurrentPage('menu')} className={`font-medium transition ${currentPage === 'menu' ? 'text-[#8B4513]' : 'text-[#A0522D] hover:text-[#8B4513]'}`}>Menu</button>
          <button onClick={() => setCurrentPage('contact')} className={`font-medium transition ${currentPage === 'contact' ? 'text-[#8B4513]' : 'text-[#A0522D] hover:text-[#8B4513]'}`}>Contact</button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;