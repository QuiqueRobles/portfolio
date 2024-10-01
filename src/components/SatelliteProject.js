import React, { useState, useEffect } from 'react';
import './SatelliteProject.css';

export default function SatelliteProject() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollPosition / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const antenaFabricada = require('../images/antena_fabricada.png');
  const msalluvia = require('../images/MSAlluvia.jpg');
  const antenna_schematic = require('../images/antenna_schematic.png');

  return (  
    <div className="satellite-project">
      <div className="satellite-project__scroll-progress">
        <div className="satellite-project__scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <main className="satellite-project__main">
        <section className="satellite-project__hero">
          <div className="satellite-project__container satellite-project__hero-content">
            <h1 className="satellite-project__title">Satellite Project: Receiving Images Directly from Space</h1>
            <p className="satellite-project__subtitle">Designing and building antennas to capture meteorological data from NOAA satellites.</p>
            <div className="satellite-project__button-container">
              <a href="https://www.youtube.com/watch?v=G_gZaqCSSUs&t=562s" target="_blank" rel="noopener noreferrer" className="satellite-project__button satellite-project__button--youtube">
                Watch on YouTube
              </a>
              <a href="https://www.linkedin.com/posts/enrique-robles-uriel_c%C3%B3mo-puedes-recibir-im%C3%A1genes-desde-el-espacio-activity-7067069676006088704-uRD3?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="satellite-project__button">
                Read on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="satellite-project__about">
          <div className="satellite-project__container">
            <div className="satellite-project__about-image">
              <img src={antenaFabricada} alt="Final Antenna" className="satellite-project__image" />
            </div>
            <div className="satellite-project__about-content">
              <h2 className="satellite-project__section-title">About the Project</h2>
              <p className="satellite-project__text">
                This project represents a culmination of extensive theoretical study and hands-on experimentation in the field of satellite communication. Our primary objective was to design, simulate, and construct antennas capable of receiving and decoding signals from NOAA weather satellites.
              </p>
              <p></p>
              <p className="satellite-project__text">
                We focused on two distinct antenna types: the V-Dipole and Turnstile antennas. These were chosen for their effectiveness in capturing the specific frequencies used by NOAA satellites. Using CST Studio software, we conducted detailed 3D modeling and electromagnetic simulations to optimize our designs before moving to the construction phase.
              </p>
              <p></p> 
              <p className="satellite-project__text">
                The antennas were crafted using readily available materials such as PVC pipes and aluminum rods, demonstrating that advanced technology can be accessible and replicable. Our success in receiving clear images from space validates the effectiveness of our approach and opens up exciting possibilities for further research and applications in meteorology, climate studies, and amateur radio.
              </p>
            </div>
          </div>
        </section>

        <section className="satellite-project__technical">
          <div className="satellite-project__container satellite-project__technical-content">
            <h2 className="satellite-project__section-title">Technical Breakdown</h2>
            <div className="satellite-project__accordion">
              {[
                {
                  title: 'NOAA Satellites Overview',
                  content: "NOAA (National Oceanic and Atmospheric Administration) operates a series of polar-orbiting satellites crucial for global weather monitoring. These satellites, including NOAA-15, NOAA-18, and NOAA-19, orbit at an altitude of approximately 870 km. They continuously capture and transmit data using the Automatic Picture Transmission (APT) system, which operates on frequencies around 137 MHz. This project specifically focuses on receiving APT signals from NOAA-19, launched in 2009 and still actively providing valuable meteorological data."
                },
                {
                  title: 'Antenna Design Process',
                  content: "Our antenna design process began with theoretical calculations to determine the optimal dimensions for receiving 137 MHz signals. We then used CST Studio for 3D modeling and electromagnetic simulations. This software allowed us to fine-tune our designs, considering factors such as gain, directivity, and radiation patterns. We developed two types of antennas: a V-Dipole and a Turnstile (quadrifilar helix). The V-Dipole was chosen for its simplicity and effectiveness, while the Turnstile offers better circular polarization reception, ideal for satellite signals. Both antennas were constructed using PVC pipes for the frame and aluminum rods for the active elements, ensuring a balance between performance and cost-effectiveness."
                },
                {
                  title: 'Image Reception Process',
                  content: "The image reception process involves several steps and technologies. First, we use Orbitron software to predict satellite passes over our location. When a NOAA satellite is in range, our antenna captures the APT signals, which are then fed into a Software Defined Radio (SDR) device. The SDR converts the radio signals into a digital format that can be processed by a computer. We use specialized software called WXtoImg to decode these digital signals in real-time. WXtoImg not only converts the signals into visible images but also applies various enhancements, such as color composites and map overlays. This process allows us to receive and visualize up-to-date weather imagery directly from the satellite, including cloud cover, temperature data, and other meteorological information."
                }
              ].map((item, index) => (
                <div key={index} className="satellite-project__accordion-item">
                  <button className="satellite-project__accordion-button" onClick={() => toggleAccordion(index)}>
                    {item.title}
                    <span>{activeIndex === index ? '▲' : '▼'}</span>
                  </button>
                  <div className={`satellite-project__accordion-content ${activeIndex === index ? 'active' : ''}`}>
                    <p className="satellite-project__text">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="satellite-project__timeline">
          <div className="satellite-project__container">
            <h2 className="satellite-project__section-title">Project Timeline</h2>
            <div className="satellite-project__timeline-container">
              <div className="satellite-project__timeline-item">
                <h3 className="satellite-project__timeline-title">Research Phase</h3>
                <p className="satellite-project__text">Conducted extensive research on satellite communication principles, NOAA satellite specifications, and antenna theory. Studied existing projects and academic papers to inform our approach.</p>
              </div>
              <div className="satellite-project__timeline-item">
                <h3 className="satellite-project__timeline-title">Design Phase</h3>
                <p className="satellite-project__text">Created detailed 3D models and simulations of V-Dipole and Turnstile antennas using CST Studio. Optimized designs based on simulation results, considering factors such as gain, directivity, and radiation patterns.</p>
              </div>
              <div className="satellite-project__timeline-item">
                <h3 className="satellite-project__timeline-title">Construction Phase</h3>
                <p className="satellite-project__text">Built V-Dipole and Turnstile antennas using PVC pipes and aluminum rods. Conducted initial tests to ensure proper assembly and basic functionality.</p>
              </div>
              <div className="satellite-project__timeline-item">
                <h3 className="satellite-project__timeline-title">Testing Phase</h3>
                <p className="satellite-project__text">Set up the complete reception system, including SDR and decoding software. Conducted field tests during multiple satellite passes, fine-tuning the setup for optimal reception. Analyzed and compared the performance of both antenna designs.</p>
              </div>
              <div className="satellite-project__timeline-item">
                <h3 className="satellite-project__timeline-title">Analysis and Documentation</h3>
                <p className="satellite-project__text">Compiled and analyzed the results from our tests. Documented the entire process, including challenges faced and solutions implemented. Prepared presentations and reports to share our findings with the academic community.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="satellite-project__equipment">
          <div className="satellite-project__container satellite-project__equipment-content">
            <h2 className="satellite-project__section-title">Equipment Used</h2>
            <ul className="satellite-project__equipment-list">
              <li className="satellite-project__equipment-item">
                <h3 className="satellite-project__equipment-title">Software Defined Radio (SDR)</h3>
                <p className="satellite-project__text">We used the RTL-SDR Blog V3 dongle, a cost-effective SDR solution capable of tuning into frequencies between 500 kHz to 1.75 GHz. This device was crucial for receiving and digitizing the satellite signals.</p>
              </li>
              <li className="satellite-project__equipment-item">
                <h3 className="satellite-project__equipment-title">Orbitron</h3>
                <p className="satellite-project__text">This satellite tracking software was essential for predicting NOAA satellite passes. It provided real-time updates on satellite positions, allowing us to prepare for signal reception at the right time.</p>
              </li>
              <li className="satellite-project__equipment-item">
                <h3 className="satellite-project__equipment-title">WXtoImg</h3>
                <p className="satellite-project__text">A specialized software for decoding APT signals into visible images. WXtoImg not only converted the signals but also provided various image enhancement options, allowing for detailed analysis of the received weather data.</p>
              </li>
              <li className="satellite-project__equipment-item">
                <h3 className="satellite-project__equipment-title">CST Studio</h3>
                <p className="satellite-project__text">This powerful 3D electromagnetic simulation software was used for designing and optimizing our antennas. It allowed us to predict antenna performance and make necessary adjustments before physical construction.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="satellite-project__results">
          <div className="satellite-project__container">
            <h2 className="satellite-project__section-title">Results and Future Prospects</h2>
            <p className="satellite-project__text">
              The project successfully received and decoded images from NOAA weather satellites, demonstrating the effectiveness of custom-built antennas. 
              Future plans include optimizing antenna designs and expanding the project to receive data from other types of satellites.
            </p>
            <div className="satellite-project__image-gallery">
              <img src={msalluvia} alt="Decoded Satellite Image" className="satellite-project__gallery-image" />
              <img src={antenna_schematic} alt="Antenna Schematic" className="satellite-project__gallery-image" />
            </div>
          </div>
        </section>
        

        <section className="satellite-project__applications">
          <div className="satellite-project__container satellite-project__applications-content">
            <h2 className="satellite-project__section-title">Real-world Applications</h2>
            <div className="satellite-project__applications-grid">
              <div className="satellite-project__application-item">
                <h3 className="satellite-project__application-title">Weather Forecasting</h3>
                <p className="satellite-project__text">Our system can provide real-time, high-resolution imagery for local weather predictions, complementing existing forecasting methods. This is particularly valuable for areas with limited access to conventional weather data.</p>
              </div>
              <div className="satellite-project__application-item">
                <h3 className="satellite-project__application-title">Disaster Monitoring</h3>
                <p className="satellite-project__text">The ability to receive up-to-date satellite imagery can be crucial for early detection and tracking of natural disasters such as hurricanes, wildfires, and severe storms, aiding in disaster preparedness and response efforts.</p>
              </div>
              <div className="satellite-project__application-item">
                <h3 className="satellite-project__application-title">Agricultural Planning</h3>
                <p className="satellite-project__text">Farmers and agricultural researchers can use this technology to monitor crop conditions, soil moisture levels, and local climate patterns, optimizing irrigation and planting schedules.</p>
              </div>
              <div className="satellite-project__application-item">
                <h3 className="satellite-project__application-title">Environmental Studies</h3>
                <p className="satellite-project__text">The system can contribute to long-term environmental monitoring, helping researchers study climate change effects, track changes in vegetation cover, and analyze global weather patterns over time.</p>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <footer className="satellite-project__footer">
        <div className="satellite-project__container">
          <h3 className="satellite-project__footer-title">Interested in satellite communication or building your own weather station?</h3>
          <div className="satellite-project__button-container">
            <a href="/projects" className="satellite-project__button">Explore More Projects</a>
            <a href="/contact" className="satellite-project__button">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}