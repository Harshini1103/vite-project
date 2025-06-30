import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact <span className="highlight">Us</span></h1>
        <p>We’d love to hear from you! Please fill out the form below and we’ll get back to you soon 🌼</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>📍 123 Flower Street, Bloom City, India</p>
          <p>📧 hello@flowershop.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
