import React from 'react';
import BoxCustomizer from '../components/BoxCustomizer';
import OrderForm from '../components/OrderForm';

const Order = ({ selectedBox, boxSlots, selectCookieForSlot, removeFromSlot, handleOrderSubmit }) => {
  const allSlotsFilled = boxSlots.every(slot => slot !== null);

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-[#8B4513] text-center mb-12">Customize Your Box</h2>

        <BoxCustomizer 
          selectedBox={selectedBox}
          boxSlots={boxSlots}
          selectCookieForSlot={selectCookieForSlot}
          removeFromSlot={removeFromSlot}
        />

        {allSlotsFilled && (
          <OrderForm 
            selectedBox={selectedBox}
            boxSlots={boxSlots}
            handleOrderSubmit={handleOrderSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Order;