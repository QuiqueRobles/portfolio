import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { FaSatelliteDish, FaLock, FaCode } from 'react-icons/fa';

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="project-icon">
            <FaSatelliteDish />
          </div>
          <h3>Meteorological Satellite Antennas</h3>
          <p>
            This final telecommunications engineering project focuses on the study, design and manufacture of antennas for the reception of images from meteorological satellites. Two antennas were developed: a V-dipole and a Turnstile, using the commercial software CST Studio. The project includes the manufacture of the antennas, the reception of signals using an SDR, and the decoding of images transmitted by NOAA satellites.
          </p>
          <Link to="/satellite-project">
          <button >View Project</button>
          </Link>
    
        </div>

        <div className="project-card">
          <div className="project-icon">
            <FaLock />
          </div>
          <h3>Cryptographic Module for GMV</h3>
          <p>
            During my internship at GMV, I participated in the development of a cryptographic module for ESA's Galileo project, implementing post-quantum cryptography algorithms. The module ensures the integrity and confidentiality of communications on European satellites.
          </p>
          <Link to="/gmv-project">
          <button >View Project</button>
          </Link>
        </div>

        <div className="project-card">
          <div className="project-icon">
            <FaCode />
          </div>
          <h3>Full-stack Developer in several projects and technologies</h3>
          <p>
            I have developed web pages and web applications, working for the Greek Association of Madrid GREMA (grema.org) and for Estudios Juridicos PRL (estudiojuridicoprl.es). I have also participated in several university web development projects.
          </p>
          <Link to="/satellite-project">
          <button >Ver Proyecto</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
