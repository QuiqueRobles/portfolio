// src/components/JournalScreen.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import JournalEntry from './JournalEntry';
import './AnniversaryJournal.css';

const JournalScreen = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      // Verifica autenticación
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/b&q');
        return;
      }

      // Obtiene las entradas desde la base de datos
      const { data: journalEntries, error } = await supabase
        .from('journal_entries') // Nombre de la tabla
        .select('*')
        .order('id', { ascending: true }); // Ordenar por ID o fecha

      if (error) {
        console.error('Error cargando entradas:', error);
        return;
      }

      setEntries(journalEntries);
      setLoading(false);
    };

    fetchEntries();
  }, [navigate]);

  if (loading) {
    return <div>Cargando...</div>; // Puedes añadir un spinner aquí
  }

  return (
    <div className="journal-container">
      <header className="journal-header">
        <h1>Nuestro Primer Año Juntos</h1>
        <div className="heart-animation">💖</div>
      </header>

      <div className="timeline">
        {entries.map((entry) => (
          <JournalEntry 
            key={entry.id}
            date={entry.date}
            text={entry.text}
            image={entry.image} // Usamos directamente la URL de la columna `image`
          />
        ))}
      </div>
      
      <div className="end-message">
        <h2>Y esto es solo el principio...</h2>
      </div>
    </div>
  );
};

export default JournalScreen;