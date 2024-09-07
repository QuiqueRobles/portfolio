import React from 'react';
import './ProfileImageBanner.css';

function ProfileImageBanner() {
  return (
    <div className="profile-container">
      <div className="profile-image-wrapper">
        <img
          src={require('../images/quique.png')}
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="profile-description">
        <h3>Enrique Robles</h3>
        <p>
          ¡Bienvenido! <br></br>
          Soy Enrique Robles, desarrollador Full-Stack con un profundo interés en la fusión de la tecnología y las comunicaciones espaciales.
          Con una sólida formación en Ingeniería de Telecomunicaciones e Ingeniería Informática, mi pasión es crear soluciones innovadoras que conecten el mundo con el espacio.
          Explora más sobre mí y descubre cómo podemos impulsar juntos la tecnología hacia nuevas fronteras.
        </p>
      </div>
    </div>
  );
}

export default ProfileImageBanner;
