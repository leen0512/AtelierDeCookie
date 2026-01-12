import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order/Order";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Track current page
  const [selectedBox, setSelectedBox] = useState(null); // For Order page
  const [boxSlots, setBoxSlots] = useState([]);

  // Start an order: set box size and go to order page
  const startOrder = (boxSize) => {
    setSelectedBox(boxSize);
    setBoxSlots(Array(boxSize).fill(null));
    setCurrentPage("order");
  };

  // Submit order
  const handleOrderSubmit = (formData) => {
    console.log("Order submitted:", formData);
    alert("Order submitted! Check console for data.");
    // You could navigate to a thank-you page here
  };

  // Select a cookie for a slot
  const selectCookieForSlot = (slotIndex, cookie) => {
    const newSlots = [...boxSlots];
    newSlots[slotIndex] = cookie;
    setBoxSlots(newSlots);
  };

  // Remove cookie from slot
  const removeFromSlot = (slotIndex) => {
    const newSlots = [...boxSlots];
    newSlots[slotIndex] = null;
    setBoxSlots(newSlots);
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <Home startOrder={startOrder} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "menu" && <Menu startOrder={startOrder} />}
      {currentPage === "order" && (
        <Order
          selectedBox={selectedBox}
          boxSlots={boxSlots}
          selectCookieForSlot={selectCookieForSlot}
          removeFromSlot={removeFromSlot}
          handleOrderSubmit={handleOrderSubmit}
        />
      )}
    </>
  );
};

export default App;
