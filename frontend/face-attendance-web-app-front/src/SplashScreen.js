import React from 'react';
import './SplashScreen.css';
import logo from './logo.png'; // Ensure this path is correct

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
