import React, { useEffect } from 'react';
import './Hero.css';
import HeroBannerText from './HeroBannerText';  
import HeroBannerTextSmall from './HeroBannerTextSmall';
import { FaSatelliteDish, FaCode, FaRocket } from 'react-icons/fa';  // Example icons from react-icons
import ProfileImageBanner from './ProfileImageBanner';
import SignalAnimation from './SignalAnimation';


function Hero() {
  
  
  

  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="content">
        <SignalAnimation/>
        <HeroBannerText text="Quique Robles"/> 
        
        <br></br>
        <HeroBannerTextSmall texts={["Telecommunications Engineer", "Computer Science Engineer", "Passionate about technology and space", "Student of Politecnico di Milano - Master of Science"]} />

        <div className="hero-text">
          <p className="tagline">Explore more about me and this amazing webpage</p>
          <div className="highlights">
            <div className="highlight">
              <FaSatelliteDish size={40} />
              <p>Telecommunications Enthusiast</p>
            </div>
            <div className="highlight">
              <FaCode size={40} />
              <p>Coder</p>
            </div>
            <div className="highlight">
              <FaRocket size={40} />
              <p>Space Enthusiast</p>
            </div>
          </div>
          <a href="#contact" className="cta-button">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
