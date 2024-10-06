import React, { useEffect } from 'react';
import AOS from 'aos';
import { FaSatelliteDish } from 'react-icons/fa';
import 'aos/dist/aos.css';
import './Timeline.css';

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const events = [
    {
      year: "2024-2026",
      title: "Telecommunications Engineering Master of Science",
      description: "Pursuing a Master's degree focused on signal processing, telecommunications systems and space communications at Politecnico di Milano.",
      icon: "🎓",
    },
    {
      year: "2023-2024",
      title: "CubeSat TMTC Member at PoliSpace",
      description: "Involved in the Telemetry and Telecommand (TMTC) subsystem development for CubeSat missions, ensuring communication reliability for satellite systems.",
      icon: "🛰️",
    },
    {
      year: "2023",
      title: "Cryptography and Cybersecurity Engineer at GMV",
      description: "Worked on cryptographic models and cybersecurity solutions for space communication systems, contributing to secure data transmission.",
      icon: "🔐",
    },
    {
      year: "2019-2023",
      title: "Telecommunications Engineering",
      description: "Top graduated with a Bachelor's in Telecommunications Engineering at Universidad CEU San Pablo, specializing in telecommunications systems.",
      icon: <FaSatelliteDish/>,
    },
    {
      year: "2019-2024",
      title: "Computer Science Engineering",
      description: "Graduated with a Bachelor's in Computer Science Engineering, doing a one-year stay abroad at Politecnico di Milano.",
      icon: "💻",
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Enrique Robles - Professional & Academic Journey</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div
            key={index}
            className="timeline-item"
            data-aos="fade-up"
          >
            <div className="timeline-icon">{event.icon}</div>
            <div className="timeline-content">
              <div className="timeline-line"></div>
              <div className="year">{event.year}</div>
              <h3 className="title">{event.title}</h3>
              <p className="description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
