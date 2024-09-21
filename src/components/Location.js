import React from 'react';
import './Location.css';

const Location = () => {
    
  const madridIcon = require('../images/madrid.png');
  const milanIcon = require('../images/milano.png');

  return (
    <div className="location-section">
      <h2 className="location-header">Based in:</h2>
      <div className="location-container">
        <div className="city-container" id="madrid">
          <img
            src={madridIcon}
            alt="Cibeles - Madrid"
            className="city-icon"
          />
          <div className="city-name">Madrid</div>
        </div>
        <div className="city-container" id="milan">
          <img
            src={milanIcon}
            alt="Duomo di Milano"
            className="city-icon"
          />
          <div className="city-name">Milano</div>
        </div>
      </div>
    </div>
  );
};

export default Location;
