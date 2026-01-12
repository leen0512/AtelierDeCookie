import React from "react";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: "Home", page: "home" },
    { name: "Menu", page: "menu" },
    { name: "Order", page: "order" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">🍪</div>
          <div className="logo-text">
            <h1>Sweet Elegance</h1>
            <p>Handcrafted Cookies</p>
          </div>
        </div>
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={currentPage === item.page ? "active" : ""}
              onClick={() => setCurrentPage(item.page)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
