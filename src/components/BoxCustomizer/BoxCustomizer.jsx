import React from "react";

const BoxCustomizer = ({ boxSlots, selectSlot, selectedSlotIndex }) => (
  <div className="box-visualizer">
    <div className="text-center mb-6">
      <h3 className="text-3xl font-serif text-[#8B4513]">Customize Your Box</h3>
    </div>

    <div className="grid grid-cols-4 gap-4 perspective">
      {boxSlots.map((slot, i) => (
        <div
          key={i}
          onClick={() => selectSlot(i)}
          className={`flex items-center justify-center h-20 rounded-xl border-2 transition-transform duration-300 cursor-pointer
            ${slot ? "bg-[#FDF8F3] border-[#8B4513]" : "bg-[#fff3e0] border-dashed border-[#A0522D]"}
            ${selectedSlotIndex === i ? "ring-4 ring-[#A0522D]" : ""}
            hover:rotate-x-3 hover:rotate-y-3 hover:shadow-lg`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {slot ? (
            <div className="text-center">
              <div className="text-3xl">{slot.emoji}</div>
              <div className="text-sm text-[#8B4513] font-semibold">{slot.name}</div>
            </div>
          ) : (
            <div className="text-4xl text-[#A0522D] font-bold">+</div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default BoxCustomizer;
