import React , { useState, useEffect}from "react"
import "./HeroIcons.css"
import { FaSatelliteDish, FaCode, FaRocket } from 'react-icons/fa';

function HeroIcons(){
    const highlights = [
            { icon: FaSatelliteDish, text: "Telecommunications" },
            { icon: FaCode, text: "Computer Science" },
            { icon: FaRocket, text: "Space Enthusiast" }
        ];
    const [activeHighlight, setActiveHighlight] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
        setIsVisible(true);
        }, 500);

    return () => clearTimeout(visibilityTimeout);
  }, []);
    

    return(
<div className="highlights-container">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className={`highlight ${activeHighlight === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveHighlight(index)}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <highlight.icon size={40} className="highlight-icon" />
                <p>{highlight.text}</p>
              </div>
            ))}
</div>
    )
}
export default HeroIcons;