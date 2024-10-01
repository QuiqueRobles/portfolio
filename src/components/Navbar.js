import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]);


  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          QRU <i className="fas fa-rocket"></i>
        </Link>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="navbar-link" onClick={toggleMobileMenu}>.Main()</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about" className="navbar-link" onClick={toggleMobileMenu}>.AboutMe()</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/projects' ? 'active' : ''}`}>
            <Link to="/projects" className="navbar-link" onClick={toggleMobileMenu}>.Projects()</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact" className="navbar-link" onClick={toggleMobileMenu}>.Contact()</Link>
          </li>
        </ul>
        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
