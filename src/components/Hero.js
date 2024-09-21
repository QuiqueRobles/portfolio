import React, { useEffect } from 'react';
import './Hero.css';
import HeroBannerText from './HeroBannerText';  
import HeroBannerTextSmall from './HeroBannerTextSmall';
import { FaSatelliteDish, FaCode, FaRocket } from 'react-icons/fa';  // Example icons from react-icons
import ProfileImageBanner from './ProfileImageBanner';
import SignalAnimation from './SignalAnimation';


function Hero() {
  useEffect(() => {
    const handleMouseClick = (e) => {
      const wave = document.createElement('div');
      wave.className = 'wave';
      wave.style.left = `${e.pageX - 10}px`;
      wave.style.top = `${e.pageY - 10}px`;
      document.body.appendChild(wave);

      setTimeout(() => {
        wave.remove();
      }, 600);
    };

    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);
  
  

  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="content">
        <SignalAnimation/>
        <HeroBannerText text="Quique Robles"/> 
        
        <br></br>
        <HeroBannerTextSmall texts={["Ingeniero de Telecomunicaciones", "Ingeniero Informático", "Desarrollador Full-Stack"]} />

        <div className="hero-text">
          <p className="tagline">Innovating at the intersection of Technology and Space</p>
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
