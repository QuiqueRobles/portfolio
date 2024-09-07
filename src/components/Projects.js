import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-grid">
        <div className="project-card">Proyecto 1</div>
        <div className="project-card">Proyecto 2</div>
        <div className="project-card">Proyecto 3</div>
        {/* Añadir más proyectos */}
      </div>
    </div>
  );
}

export default Projects;
