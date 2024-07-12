import React, { useState, useEffect } from 'react';
import MasterComponent from './MasterComponent';
import './App.css';
import SplashScreen from './SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(false);
  let timeout;

  const resetTimer = () => {
    clearTimeout(timeout);
    setShowSplash(false);
    timeout = setTimeout(() => {
      setShowSplash(true);
    }, 15000); // 15 seconds
  };

  useEffect(() => {
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('mousedown', resetTimer);
    window.addEventListener('touchstart', resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('mousedown', resetTimer);
      window.removeEventListener('touchstart', resetTimer);
    };
  }, []);

  return (
    <div className="app">
      {showSplash && <SplashScreen />}
      <MasterComponent />
    </div>
  );
};

export default App;
