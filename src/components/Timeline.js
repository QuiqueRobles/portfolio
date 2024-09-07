import React from 'react';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSatellite, faShieldAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';

function Timeline() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Enrique Robles - Professional & Academic Journey</h2>
      <div className="timeline">
        <br></br>
        <div className="timeline-item">
          <div className="timeline-date">2024-2026</div>
          <div className="timeline-content">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} /> Telecommunications Engineering Master of Science
            </h3>
            <p>Currently pursuing a Master's degree in Telecommunications Engineering at Politecnico di Milano.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2023</div>
          <div className="timeline-content">
            <h3>
              <FontAwesomeIcon icon={faSatellite} /> CubeSat TMTC Member at PoliSpace
            </h3>
            <p>Working as a CubeSat Telemetry and Telecommand (TMTC) Team Member and Software Engineer.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2023</div>
          <div className="timeline-content">
            <h3>
              <FontAwesomeIcon icon={faShieldAlt} /> Cryptography and Cybersecurity Engineer at GMV
            </h3>
            <p>Developed a cryptographic module for post-quantum cryptographic algorithms for the ESA Galileo project during an internship.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2019-2024</div>
          <div className="timeline-content">
            <h3>
              <FontAwesomeIcon icon={faUniversity} /> Computer Science Engineering
            </h3>
            <p>Completing a dual degree in Computer Science Engineering at Politecnico di Milano and Universidad San Pablo CEU, Madrid.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2019-2023</div>
          <div className="timeline-content">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} /> Telecommunications Engineering
            </h3>
            <p>Completed a Bachelor's degree in Telecommunications Engineering at Universidad San Pablo CEU, Madrid, graduating with a top grade of 7.938/10.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
