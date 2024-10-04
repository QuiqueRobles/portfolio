import React, { useState, useEffect } from 'react';

export default function Likes() {
  const [visits, setVisits] = useState(0);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // Retrieve stored values from localStorage
    const storedVisits = localStorage.getItem('pageVisits');
    const storedLikes = localStorage.getItem('pageLikes');
    const storedHasLiked = localStorage.getItem('hasLiked');

    // Initialize or update visit count
    const updatedVisits = storedVisits ? parseInt(storedVisits) + 1 : 1;
    setVisits(updatedVisits);
    localStorage.setItem('pageVisits', updatedVisits.toString());

    // Set likes from localStorage or default to 0
    setLikes(storedLikes ? parseInt(storedLikes) : 0);

    // Set hasLiked state
    setHasLiked(storedHasLiked === 'true');
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const updatedLikes = likes + 1;
      setLikes(updatedLikes);
      setHasLiked(true);
      localStorage.setItem('pageLikes', updatedLikes.toString());
      localStorage.setItem('hasLiked', 'true');
    }
  };

  return (
    <div className="visit-like-counter">
      <div className="counter-box visits">
        <span className="counter-icon">👁️</span>
        <p className="counter-text">Visits: {visits}</p>
      </div>
      <div className="counter-box likes">
        <span className="counter-icon">❤️</span>
        <p className="counter-text">Likes: {likes}</p>
        <button 
          onClick={handleLike} 
          className={`like-button ${hasLiked ? 'liked' : ''}`}
          disabled={hasLiked}
        >
          {hasLiked ? 'Liked!' : 'Like'}
        </button>
      </div>
      <style jsx>{`
        .visit-like-counter {
          background-color: #1a1a2e;
          color: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 300px;
          margin: 20px auto;
          font-family: Arial, sans-serif;
        }
        .counter-box {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          padding: 10px;
          background-color: #252542;
          border-radius: 8px;
        }
        .counter-icon {
          font-size: 24px;
          margin-right: 10px;
        }
        .counter-text {
          font-size: 18px;
          margin: 0;
        }
        .like-button {
          background-color: #3b3a5a;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          margin-left: 10px;
        }
        .like-button:hover:not(:disabled) {
          background-color: #565482;
          transform: translateY(-2px);
        }
        .like-button.liked {
          background-color: #4CAF50;
          cursor: default;
        }
        .like-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}