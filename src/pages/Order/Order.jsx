import React, { useState } from "react";
import BoxCustomizer from "../../components/BoxCustomizer/BoxCustomizer";
import OrderForm from "../../components/OrderForm/OrderForm";
import CookieCard from "../../components/CookieCard/CookieCard";
import { cookiesData } from "../../data/cookies";

const Order = ({
  selectedBox,
  boxSlots,
  selectCookieForSlot,
  removeFromSlot,
  handleOrderSubmit,
}) => {
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);

  const allSlotsFilled = boxSlots.every((slot) => slot !== null);

  const handleSelectSlot = (index) => {
    setSelectedSlotIndex(index);
  };

  const handleSelectCookie = (cookie) => {
    if (selectedSlotIndex !== null) {
      selectCookieForSlot(selectedSlotIndex, cookie);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-[#8B4513] text-center mb-12">
          Customize Your Box
        </h2>

        {/* Box */}
        <BoxCustomizer
          boxSlots={boxSlots}
          selectSlot={handleSelectSlot}
          selectedSlotIndex={selectedSlotIndex}
        />

        {/* Cookie Menu */}
        {selectedSlotIndex !== null && (
          <div className="cookie-menu mt-12">
            <h3 className="text-3xl font-serif text-[#8B4513] mb-6 text-center">
              Choose a Flavor for Slot {selectedSlotIndex + 1}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cookiesData.map((cookie) => (
                <CookieCard
                  key={cookie.id}
                  cookie={cookie}
                  isSelected={
                    boxSlots[selectedSlotIndex]?.name === cookie.name
                  }
                  onSelect={handleSelectCookie}
                />
              ))}
            </div>
          </div>
        )}

        {/* Order Form */}
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
