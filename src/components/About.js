import React from 'react';
import './About.css';
import ProfileImageBanner from './ProfileImageBanner';
import TechIcons from './TechIcons';
import Timeline from './Timeline';
import LanguageSkills from './LanguageSkills';
import Location from './Location';


function About() {
  return (
    <div className="about">
      <h2>Sobre Mí</h2>
      <ProfileImageBanner/>
      <br></br><br></br><br></br>
      <p>Soy un apasionado de la tecnología y las telecomunicaciones, con una inclinación hacia el desarrollo de soluciones innovadoras...</p>
       <TechIcons />
      <Timeline/>
      <Location/>
      <LanguageSkills/>
      
    </div>
  );
}

export default About;
