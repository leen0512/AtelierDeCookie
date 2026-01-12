import React from "react";

const Hero = ({ startOrder }) => (
  <section className="hero">
    <div className="hero-decorations">
      <span className="hero-decoration">🍪</span>
      <span className="hero-decoration">🎀</span>
      <span className="hero-decoration">🌸</span>
    </div>
    <div className="hero-content">
      <h2>Delicious Cookies Made with Love</h2>
      <p>
        Choose your favorites, customize your box, and enjoy handcrafted
        sweetness at home.
      </p>
      <div className="hero-buttons">
        <button className="btn btn-primary" onClick={() => startOrder(4)}>
          Shop Now
        </button>
        <button className="btn btn-secondary" onClick={() => startOrder(8)}>
          Customize Box
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
