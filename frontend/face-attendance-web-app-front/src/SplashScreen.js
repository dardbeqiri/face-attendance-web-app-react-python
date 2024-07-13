import React from 'react';
import './SplashScreen.css';
import logo from './logo.png'; // Ensure this path is correct

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="splash-logo" />
      <center><p>Welcome to Check-in & Check out System.</p></center>
      <center><small>Touch the screen to continue</small></center>
    </div>
  );
};

export default SplashScreen;
