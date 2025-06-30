import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About <span className="highlight">FlowerShop</span></h1>
        <p>
          At <strong>FlowerShop</strong>, we believe flowers have the magical power to bring joy, express love, and create memories.
          We’ve been delivering smiles through flowers since <strong>2010</strong>, and each bouquet we craft tells a story of care and beauty.
        </p>
        <p>
          Whether it's for a birthday, wedding, celebration, or just because — we offer a wide range of fresh flowers handpicked by passionate florists.
          Our commitment is to quality, freshness, and customer happiness 💐.
        </p>
        <p>
          Thank you for supporting local floristry. Let's spread beauty, one bloom at a time!
        </p>
        <h3 className="signature">— The FlowerShop Team 🌸</h3>
      </div>
    </div>
  );
};

export default About;
