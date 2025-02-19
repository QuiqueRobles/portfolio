// JournalEntry.js
import React, { useEffect, useRef } from 'react';

const JournalEntry = ({ date, text, image }) => {
  const entryRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(entryRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="journal-entry" ref={entryRef}>
      <div className="entry-date">{date}</div>
      <div className="entry-content">
        <div className="entry-text">{text}</div>
        {image && <img src={image} alt="Momento especial" className="entry-image" />}
      </div>
    </div>
  );
};

export default JournalEntry;