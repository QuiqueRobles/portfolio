import React, { useEffect, useState } from 'react';
import './HeroBannerTextSmall.css';

const HeroBannerTextSmall = ({ texts = [] }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50); // Velocidad de tipeo

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      if (!isDeleting) {
        // Escribiendo el texto
        setDisplayedText((prev) => currentText.substring(0, prev.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pausa antes de empezar a borrar
        }
      } else {
        // Borrando el texto
        setDisplayedText((prev) => currentText.substring(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Pasar al siguiente texto
        }
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, texts, currentTextIndex, typingSpeed]);

  return (
    <div className="hero-banner-text-small">
      <span className="glowing-small">{displayedText}</span>
      <span className="cursor-small"></span>
    </div>
  );
};

export default HeroBannerTextSmall;
