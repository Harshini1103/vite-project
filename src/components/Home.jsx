import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="home-overlay">
        <h1>Welcome to <span className="highlight">FlowerShop</span></h1>
        <p>Fresh blossoms delivered with love to your doorstep 💐</p>
        <a href="/gallery" className="hero-btn">Shop Flowers</a>
      </div>
    </div>
  );
};

export default Home;
