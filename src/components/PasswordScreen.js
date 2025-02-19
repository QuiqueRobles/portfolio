// src/components/PasswordScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './AnniversaryJournal.css';

const PasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate('/b&q/diary');
    } catch (error) {
      setError('Contraseña incorrecta, mi amor ❤️');
      console.error('Error de autenticación:', error.message);
    }
  };

  return (
    <div className="password-container">
      <div className="love-message">
        <h2>Para ver nuestro diario especial...</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
            className="password-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Escribe nuestra palabra mágica"
            className="password-input"
          />
          <button type="submit" className="love-button">
            Desbloquear Recuerdos
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="hearts-falling">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="heart">❤️</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordScreen;