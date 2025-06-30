import React from 'react';
import './Signin.css';

const Signin = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Sign In</h1>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="auth-note">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Signin;
