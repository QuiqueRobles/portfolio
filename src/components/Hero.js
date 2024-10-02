import React, { useEffect } from 'react';
import './Hero.css';
import HeroBannerText from './HeroBannerText';  
import HeroBannerTextSmall from './HeroBannerTextSmall';
import { FaSatelliteDish, FaCode, FaRocket } from 'react-icons/fa';  // Example icons from react-icons
import HeroOrbit from './HeroOrbit';
import SignalAnimation from './SignalAnimation';
import HeroIcons from './HeroIcons';

function Hero() {
  
  
  

  return (
    <div>
    <div className="hero">
      <div className="overlay"></div>
      <div className="content">
        <SignalAnimation/>
        <HeroBannerText text="Quique Robles"/> 
        
        <br></br>
        <HeroBannerTextSmall texts={["Telecommunications Engineer", "Computer Science Engineer", "Passionate about technology and space", "Student of Politecnico di Milano - Master of Science"]} />
        <br></br><br></br><br></br>
        <div className="hero-text">
          <HeroIcons/>
          <HeroOrbit/>
          <a href="#contact" className="cta-button">Contact Me</a>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
