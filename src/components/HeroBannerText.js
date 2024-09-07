import React, { useEffect, useState } from 'react';
import './HeroBannerText.css';

const HeroBannerText = ({ text = "" }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // Índice para controlar el carácter actual
  const [isCompleted, setIsCompleted] = useState(false); // Para detectar si el nombre ya está completo

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1); // Incrementa el índice después de añadir el carácter

        if (currentIndex + 1 === text.length) {
          setIsCompleted(true); // Marca cuando el texto esté completo
          clearInterval(typingInterval); // Detiene el intervalo cuando termina de escribir
        }
      }, 100); // Velocidad de tipeo ajustable

      return () => clearInterval(typingInterval);
    }
  }, [currentIndex, text]);

  return (
    <div className="hero-banner-text">
      <span className="glowing">{displayedText}</span>
      <span className={`cursor ${isCompleted ? 'blink' : ''}`}></span> {/* Cursor parpadea una vez el texto esté completo */}
    </div>
  );
};

export default HeroBannerText;
