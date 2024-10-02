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
          ¡Bienvenido! <br />
          Soy Enrique Robles, soy una persona con gran curiosidad en la tecnología y las comunicaciones espaciales.
          Con una sólida formación en Ingeniería de Telecomunicaciones e Ingeniería Informática, mi pasión es conocer cada día más sobre nuevos dispositivos y técnicas para avanzar como sociedad.
          Explora más sobre mí y descubre cómo intento impulsar juntos la tecnología hacia nuevas fronteras.
        </p>
      </div>
    </div>
  );
}

export default ProfileImageBanner;
