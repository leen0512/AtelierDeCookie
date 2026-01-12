import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Order from './pages/Order';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxSlots, setBoxSlots] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const startOrder = (size) => {
    setSelectedBox(size);
    setBoxSlots(Array(size).fill(null));
    setCurrentPage('order');
  };

  const selectCookieForSlot = (slotIndex, cookie) => {
    const newSlots = [...boxSlots];
    newSlots[slotIndex] = cookie;
    setBoxSlots(newSlots);
  };

  const removeFromSlot = (slotIndex) =>{const newSlots = [...boxSlots];
newSlots[slotIndex] = null;
setBoxSlots(newSlots);
};
const handleOrderSubmit = (formData) => {
console.log('Order submitted:', { ...formData, cookies: boxSlots, boxSize: selectedBox });
setOrderSubmitted(true);
setCurrentPage('thankyou');
};
return (
<div className="min-h-screen bg-[#FDF8F3]">
<Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
  {currentPage === 'home' && (
    <Home startOrder={startOrder} setCurrentPage={setCurrentPage} />
  )}
  
  {currentPage === 'menu' && (
    <Menu startOrder={startOrder} />
  )}
  
  {currentPage === 'order' && (
    <Order 
      selectedBox={selectedBox}
      boxSlots={boxSlots}
      selectCookieForSlot={selectCookieForSlot}
      removeFromSlot={removeFromSlot}
      handleOrderSubmit={handleOrderSubmit}
    />
  )}
  
  {currentPage === 'contact' && (
    <Contact startOrder={startOrder} />
  )}
  
  {currentPage === 'thankyou' && (
    <ThankYou 
      setCurrentPage={setCurrentPage}
      setOrderSubmitted={setOrderSubmitted}
      setSelectedBox={setSelectedBox}
      setBoxSlots={setBoxSlots}
    />
  )}
  
  <Footer />
</div>
);
};
export default App;
