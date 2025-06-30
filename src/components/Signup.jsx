import React from 'react';
import './Signup.css'; // Use this for custom styling

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Create Account</h1>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="signup-note">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
