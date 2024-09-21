import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Loader from './components/Loader'; 
import Footer from './components/Footer';
import SatelliteProject from './components/SatelliteProject'
import './App.css';

function App() {
  
  

  useEffect(() => {
  function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 4;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 2000);
  }

  setInterval(createStar, 100);
}, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/satellite-project" element={<SatelliteProject />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
