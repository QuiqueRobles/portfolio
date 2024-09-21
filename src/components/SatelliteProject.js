import React, { useState } from 'react';
import './SatelliteProject.css';


function SatelliteProject() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="satellite-project">
            {/* Hero Section */}
            <section className="hero-project">
                <div className="hero-content">
                    <h1>Satellite Project: Receiving Images Directly from Space</h1>
                    <p>Designing and building antennas to capture meteorological data from NOAA satellites.</p>
                    <div className="cta-buttons">
                        <a href="https://www.youtube.com/watch?v=G_gZaqCSSUs&t=562s" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Watch on YouTube</a>
                        <a href="https://www.linkedin.com/posts/enrique-robles-uriel-4068b6224_c%C3%B3mo-puedes-recibir-im%C3%A1genes-desde-el-espacio-activity-7067069676006088704-h4PN?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Read the Full Story on LinkedIn</a>
                    </div>
                </div>
            </section>

            {/* About the Project Section */}
            <section className="about-project">
                <div className="about-content">
                    <div className="left">
                        <img src={require('../images/antena_fabricada.png')} alt="Final Antenna" />
                    </div>
                    <div className="right">
                        <h2>About the Project</h2>
                        <p>
                            This project is the culmination of deep theoretical study and practical experimentation. It includes the design 
                            and simulation of antennas using CST Studio software and the construction of two distinct types: the V-Dipole 
                            and Turnstile antennas. These were crafted using common materials like PVC and aluminum and were tested for 
                            their effectiveness in capturing satellite signals from NOAA.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Breakdown Section */}
            <section className="technical-breakdown">
                <h2>Technical Breakdown</h2>
                <div className="accordion">
                    {['NOAA Satellites Overview', 'Antenna Design Process', 'Image Reception Process'].map((title, index) => (
                        <div className="accordion-item" key={index}>
                            <button
                                className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {title}
                            </button>
                            <div className={`accordion-body ${activeIndex === index ? 'open' : ''}`}>
                                <p>
                                    {index === 0 && "NOAA satellites orbit the Earth in polar orbits and are critical in capturing weather data from across the globe. The project focuses on receiving APT signals from NOAA-19, which orbits at an altitude of around 870 km."}
                                    {index === 1 && "The antennas were modeled in 3D using CST Studio and fabricated using simple materials like PVC and aluminum rods. Each type was tested for its ability to capture NOAA satellite signals, using SDR technology and software such as Orbitron and WXtoImg for satellite tracking and image decoding."}
                                    {index === 2 && "Using the fabricated antennas and SDR software, the team was able to decode images transmitted by NOAA satellites. These images provide real-time weather data that can be analyzed for scientific purposes."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Multimedia Section */}
            <section className="multimedia">
                <h2>See the Project in Action</h2>
                <div className="video-wrapper">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/G_gZaqCSSUs?t=562s" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="linkedin-post">
                    <a href="https://www.linkedin.com/posts/enrique-robles-uriel-4068b6224_c%C3%B3mo-puedes-recibir-im%C3%A1genes-desde-el-espacio-activity-7067069676006088704-h4PN?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                        <div className="linkedin-preview">
                            <img src={require('../images/linkedin_thumbnail.png')} alt="LinkedIn Post" />
                            <p>Curious about how the project came to life? Read more on LinkedIn to see the development process and insights behind the project.</p>
                        </div>
                    </a>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="conclusion">
                <h2>Results and Future Prospects</h2>
                <p>
                    The project successfully received and decoded images from NOAA weather satellites, demonstrating the effectiveness of custom-built antennas. 
                    Future plans include optimizing antenna designs and expanding the project to receive data from other types of satellites.
                </p>
                <div className="conclusion-images">
                    <img src="path/to/satellite-image.jpg" alt="Satellite Image" />
                    <img src="path/to/antenna-schematic.jpg" alt="Antenna Schematic" />
                </div>
            </section>

            {/* Call to Action Footer */}
            <footer className="cta-footer">
                <h3>Want to learn more about telecommunications engineering or how to receive satellite data on your own?</h3>
                <div className="cta-buttons">
                    <a href="/projects" className="btn btn-primary">Explore More Projects</a>
                    <a href="/contact" className="btn btn-secondary">Contact Us</a>
                </div>
            </footer>
        </div>
    );
}

export default SatelliteProject;
