import React, { useState } from 'react';
import './ProfileImageBanner.css';

function ProfileImageBanner() {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div 
      className={`profile-container ${showDescription ? 'show-description' : ''}`}
      onClick={handleToggleDescription}
    >
      <div className="profile-image-wrapper">
        <img
          src={require('../images/quique.png')}
          alt="Profile"
          className="profile-image"
        />
        <div className="fade-bottom"></div>
      </div>
      <div className="profile-description">
        <h3>Enrique Robles</h3>
        <p>
          Welcome to my site! <br />
          I am Enrique Robles, I am a person with great curiosity in technology and space communications.
          With a solid background in Telecommunications Engineering and Computer Engineering, my passion is to learn more every day about new devices and techniques to advance as a society.
          Explore more about me and discover how I try to push technology together towards new frontiers.
        </p>
      </div>
    </div>
  );
}

export default ProfileImageBanner;
