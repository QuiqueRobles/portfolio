import React from 'react';
import './SignalAnimation.css';
import antennaImage from '../images/antennab.png';  // Ensure the correct path to your antenna PNG

function SignalAnimation() {
  return (
    <div className="antenna-container">
      <img src={antennaImage} alt="Antenna" className="antenna" />
      <div className="signal"></div>
      <div className="signal"></div>
      <div className="signal"></div>
    </div>
  );
}

export default SignalAnimation;
