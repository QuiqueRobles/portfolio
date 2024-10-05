"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, ExternalLink, Code, Globe, Rocket } from 'lucide-react'
import './WebSitesProject.css'

const webProjects = [
  {
    name: "GREMA (under maintenance)",
    description: "Flask application developed in Python and using Bootstrap for the Greek Association of Madrid. Currently in the phase of selling to the association.",
    technologies: ["Flask", "Python", "Bootstrap"],
    url: "https://grema.org",
    image: require("../images/grema.png"),
    icon: <Globe className="er-project-icon" />
  },
  {
    name: "Estudio Jurídico PRL",
    description: "Application developed for my father, based on inheritances and partitions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://estudiojuridicoprl.es",
    image: require("../images/estudiojuridicoprl.png"),
    icon: <Code className="er-project-icon" />
  },
  {
    name: "Enrique Robles Portfolio",
    description: "Personal portfolio website showcasing my projects and skills.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    url: "https://enriquerobles.es",
    image: require("../images/portfolio_landing_page.png"),
    icon: <ExternalLink className="er-project-icon" />
  }
]

export default function WebSitesProject() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="er-web-sites-project">
      <div className="er-hero">
        <h1 className="er-title">Web Development Projects</h1>
        <p className="er-subtitle">Developing at the speed of light</p>
        <Rocket className="er-hero-icon" size={48} />
      </div>

      <div className="er-projects-grid">
        {webProjects.map((project, index) => (
          <div 
            key={project.name}
            className="er-project-card"
            onClick={() => setActiveProject(project)}
          >
            <div className="er-project-image-container">
              <img src={project.image} alt={project.name} className="er-project-image" />
              {project.icon}
            </div>
            <h2 className="er-project-name">{project.name}</h2>
            <p className="er-project-description">{project.description}</p>
            <div className="er-project-technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="er-technology-tag">{tech}</span>
              ))}
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="er-project-link">
              Launch Project <Rocket className="er-inline-icon" size={16} />
            </a>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="er-project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              className="er-project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="er-modal-close" onClick={() => setActiveProject(null)}>×</button>
              <img src={activeProject.image} alt={activeProject.name} className="er-modal-image" />
              <h2 className="er-modal-title">{activeProject.name}</h2>
              <p className="er-modal-description">{activeProject.description}</p>
              <div className="er-modal-technologies">
                {activeProject.technologies.map(tech => (
                  <span key={tech} className="er-technology-tag">{tech}</span>
                ))}
              </div>
              <a href={activeProject.url} target="_blank" rel="noopener noreferrer" className="er-modal-link">
                Launch Project <Rocket className="er-inline-icon" size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}