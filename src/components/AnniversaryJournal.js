import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JournalEntry from './JournalEntry';
import './AnniversaryJournal.css';

const AnniversaryJournal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const correctPassword = "nuestraClaveSecreta"; // Cambia esta contraseña

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') navigate('/');
    };

    const authCheck = () => {
      const enteredPassword = prompt('Ingresa la contraseña del amor:');
      if (enteredPassword === correctPassword) {
        setIsAuthenticated(true);
      } else {
        navigate('/');
      }
    };

    if (!isAuthenticated) {
      authCheck();
    }

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [navigate, isAuthenticated]);

  if (!isAuthenticated) return null;

  return (
    <div className="journal-container">
      <header className="journal-header">
        <h1>Nuestro Primer Año Juntos</h1>
        <div className="heart-animation">💖</div>
      </header>
      
      <div className="timeline">
        <JournalEntry 
          date="01 de Enero, 2023"
          text="El día que nuestros caminos se encontraron..."
          image="/images/nuestro-inicio.jpg"
        />
      </div>
      
      <div className="end-message">
        <h2>Y esto es solo el principio...</h2>
      </div>
    </div>
  );
};

export default AnniversaryJournal;