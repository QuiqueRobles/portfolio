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
      <h2>About Me</h2>
      <ProfileImageBanner/>
      <br></br><br></br><br></br>
      <p>I am passionate about technology and telecommunications, with a penchant for developing innovative solutions...</p>
       <TechIcons />
      <Timeline/>
      <Location/>
      <LanguageSkills/>
      
    </div>
  );
}

export default About;
