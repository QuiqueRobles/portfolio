import React, { useEffect } from 'react';
import './Hero.css';
import HeroBannerText from './HeroBannerText';  
import HeroBannerTextSmall from './HeroBannerTextSmall';
import { FaSatelliteDish, FaCode, FaRocket } from 'react-icons/fa';  // Example icons from react-icons
import HeroOrbit from './HeroOrbit';
import SignalAnimation from './SignalAnimation';
import HeroIcons from './HeroIcons';
import { Link } from 'react-router-dom';

function Hero() {

  
  

  return (
    <div>
    <div className="hero">
      <div className="overlay"></div>
      <div className="content">
        <SignalAnimation/>
        <HeroBannerText text="Quique Robles"/> 
        
        <br></br>
        <HeroBannerTextSmall texts={["Telecommunications Engineer", "Computer Science Engineer", "Passionate about technology and space", "MSc Student at Politecnico di Milano"]} />
        <br></br><br></br><br></br>
        <div className="hero-text">
          <HeroIcons/>
          <HeroOrbit/>
          <Link to='/contact'><a href="#Contact" className="cta-button">Contact Me</a></Link>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
