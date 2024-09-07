import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faJava,
  faGitAlt,
  faNodeJs,
  faDocker,
  faAws,
  faLinux,
  faVuejs,faStripe,
} from '@fortawesome/free-brands-svg-icons';
import './TechIcons.css';

function TechIcons() {
  return (
    <div className="tech-icons-container">
      <div className="tech-icons">
        <div className="icon"><FontAwesomeIcon icon={faHtml5} size="4x" title="HTML5" /></div>
        <div className="icon"><FontAwesomeIcon icon={faCss3Alt} size="4x" title="CSS3" /></div>
        <div className="icon"><FontAwesomeIcon icon={faJs} size="4x" title="JavaScript" /></div>
        <div className="icon"><FontAwesomeIcon icon={faReact} size="4x" title="React" /></div>
        <div className="icon"><FontAwesomeIcon icon={faPython} size="4x" title="Python" /></div>
        <div className="icon"><FontAwesomeIcon icon={faJava} size="4x" title="Java" /></div>
        <div className="icon"><FontAwesomeIcon icon={faGitAlt} size="4x" title="Git" /></div>
        <div className="icon"><FontAwesomeIcon icon={faNodeJs} size="4x" title="Node.js" /></div>
        <div className="icon"><FontAwesomeIcon icon={faDocker} size="4x" title="Docker" /></div>
        <div className="icon"><FontAwesomeIcon icon={faAws} size="4x" title="AWS" /></div>
        <div className="icon"><FontAwesomeIcon icon={faLinux} size="4x" title="Linux" /></div>
        <div className="icon"><FontAwesomeIcon icon={faVuejs} size="4x" title="Vue.js" /></div>
        <div className="icon"><FontAwesomeIcon icon={faStripe} size="4x" title="Stripe" /></div>
        {/* Usar imágenes personalizadas para Next.js, VS Code, Hydra, Cisco, C
        <div className="icon"><img src="/images/nextjs.png" alt="Next.js" title="Next.js" /></div>
        <div className="icon"><img src="/images/vscode.png" alt="VS Code" title="VS Code" /></div>
        <div className="icon"><img src="/images/hydra.png" alt="Hydra" title="Hydra" /></div>
        <div className="icon"><img src="/images/cisco.png" alt="Cisco" title="Cisco" /></div>
        <div className="icon"><img src="/images/c.png" alt="C" title="C" /></div> */}
      </div>
    </div>
  );
}

export default TechIcons;
