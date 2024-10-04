import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Likes from './Likes.js';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer-container">
      
      <div className="footer-wave">
        <svg viewBox="0 0 120 28" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#39ff14", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#28cc0e", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* First wave */}
          <path d="M0 30 V15 Q30 5 60 15 T120 15 V30z" fill="url(#grad)">
            <animate
              repeatCount="indefinite"
              attributeName="d"
              dur="6s"
              values="
                M0 30 V15 Q30 5 60 15 T120 15 V30z;
                M0 30 V13 Q30 8 60 13 T120 13 V30z;
                M0 30 V18 Q30 10 60 18 T120 18 V30z;
                M0 30 V15 Q30 5 60 15 T120 15 V30z
              "
            />
          </path>
          {/* Second wave */}
          <path d="M0 30 V17 Q30 7 60 17 T120 17 V30z" fill="url(#grad)" opacity="0.5">
            <animate
              repeatCount="indefinite"
              attributeName="d"
              dur="8s"
              values="
                M0 30 V17 Q30 7 60 17 T120 17 V30z;
                M0 30 V15 Q30 10 60 15 T120 15 V30z;
                M0 30 V20 Q30 12 60 20 T120 20 V30z;
                M0 30 V17 Q30 7 60 17 T120 17 V30z
              "
            />
          </path>
          {/* Third wave */}
          <path d="M0 30 V19 Q30 9 60 19 T120 19 V30z" fill="url(#grad)" opacity="0.3">
            <animate
              repeatCount="indefinite"
              attributeName="d"
              dur="10s"
              values="
                M0 30 V19 Q30 9 60 19 T120 19 V30z;
                M0 30 V17 Q30 12 60 17 T120 17 V30z;
                M0 30 V22 Q30 14 60 22 T120 22 V30z;
                M0 30 V19 Q30 9 60 19 T120 19 V30z
              "
            />
          </path>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-about">
          <h3>Extra Info</h3>
          <p>Passionate about technology and engineering, I thrive in environments where innovation meets impact.</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
            <li><Link to="/projects" onClick={scrollToTop}>Projects</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            <li><Link to="/resume" onClick={scrollToTop}>Resume</Link></li>
          </ul>
        </div>
        <Likes/>
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/enrique-robles-uriel/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/QuiqueRobles" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/quique_robles/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Enrique Robles. All rights reserved.</p>
      </div>
      <a href="#top" className="scroll-to-top">⬆</a>
      
    </footer>
  );
}

export default Footer;
