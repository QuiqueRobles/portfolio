import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { FaSatelliteDish, FaLock, FaCode } from 'react-icons/fa';

function Projects() {
  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="project-icon">
            <FaSatelliteDish />
          </div>
          <h3>Antenas para Satélites Meteorológicos</h3>
          <p>
            Este proyecto final de ingeniería en telecomunicaciones se centra en el estudio, diseño y fabricación de antenas para la recepción de imágenes de satélites meteorológicos. Se desarrollaron dos antenas: un V-dipolo y una Turnstile, utilizando el software comercial CST Studio. El proyecto incluye la fabricación de las antenas, la recepción de señales mediante un SDR, y la decodificación de imágenes transmitidas por satélites NOAA.
          </p>
          <Link to="/satellite-project">
          <button >Ver Proyecto</button>
          </Link>
    
        </div>

        <div className="project-card">
          <div className="project-icon">
            <FaLock />
          </div>
          <h3>Módulo Criptográfico para GMV</h3>
          <p>
            Durante mi pasantía en GMV, participé en el desarrollo de un módulo criptográfico para el proyecto Galileo de la ESA, implementando algoritmos de criptografía post-cuántica. El módulo asegura la integridad y confidencialidad de las comunicaciones en satélites europeos.
          </p>
          <Link to="/gmv-project">
          <button >Ver Proyecto</button>
          </Link>
        </div>

        <div className="project-card">
          <div className="project-icon">
            <FaCode />
          </div>
          <h3>Desarrollador Full-stack para distintos proyectos y tecnologías</h3>
          <p>
            He desarrollado páginas y aplicaciones web, trabajando para la Asociación de Griegos de Madrid GREMA (grema.org) y para Estudios Juridicos PRL (estudiojuridicoprl.es). Además he participado en diversos proyectos universitarios de desarrollo web.
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
