import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Play, Pause } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const SatelliteTracker = () => {
  const mountRef = useRef(null);
  const [satelliteInfo, setSatelliteInfo] = useState({
    altitude: 0,
    velocity: 0,
    position: { lat: 0, lon: 0 },
  });

  useEffect(() => {
    const width = 300;
    const height = 300;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Earth
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/assets/3d/texture_earth.jpg'),
      bumpMap: new THREE.TextureLoader().load('/assets/3d/texture_earth_bump.jpg'),
      bumpScale: 0.05,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // Satellite
    const satelliteGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0x27CC0C });
    const satelliteMesh = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    scene.add(satelliteMesh);

    // Orbit
    const orbitCurve = new THREE.EllipseCurve(
      0, 0,
      2, 1.2,
      0, 2 * Math.PI,
      false,
      0
    );
    const orbitPoints = orbitCurve.getPoints(100);
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x27CC0C, transparent: true, opacity: 0.5 });
    const orbitMesh = new THREE.Line(orbitGeometry, orbitMaterial);
    orbitMesh.rotation.x = Math.PI / 2;
    scene.add(orbitMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 4;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate Earth
      earthMesh.rotation.y += 0.002;

      // Move satellite
      const time = Date.now() * 0.001;
      const position = orbitCurve.getPoint((time % 10) / 10);
      satelliteMesh.position.set(position.x, 0, position.y);
      satelliteMesh.position.y = Math.sin(time * 0.5) * 0.3;

      // Update satellite info
      const altitude = 600 + Math.sin(time * 0.5) * 200;
      const velocity = 7.5 + Math.sin(time * 0.1) * 0.5;
      const lat = (Math.sin(time) * 75).toFixed(2);
      const lon = (Math.cos(time) * 180).toFixed(2);
      setSatelliteInfo({
        altitude: altitude.toFixed(2),
        velocity: velocity.toFixed(2),
        position: { lat, lon },
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div ref={mountRef} className="w-[300px] h-[300px] mb-4"></div>
      <div className="text-center">
        <p className="text-sm mb-1">Altitude: {satelliteInfo.altitude} km</p>
        <p className="text-sm mb-1">Velocity: {satelliteInfo.velocity} km/s</p>
        <p className="text-sm">Position: {satelliteInfo.position.lat}°N, {satelliteInfo.position.lon}°E</p>
      </div>
    </div>
  );
};

export default function SatelliteProject() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollPosition / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0d17] to-[#1a1f35] text-gray-100 overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-50">
        <div
          className="h-full bg-[#27CC0C] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <main className="relative">
        <section className="relative z-10 py-20 px-4 overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
              Satellite Project: Receiving Images Directly from Space
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
              Designing and building antennas to capture meteorological data from NOAA satellites.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-400">
              <a
                href="https://www.youtube.com/watch?v=G_gZaqCSSUs&t=562s"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:shadow-[0_0_15px_rgba(39,204,12,0.5)]"
              >
                Watch on YouTube
              </a>
              <a
                href="https://www.linkedin.com/posts/enrique-robles-uriel-4068b6224_c%C3%B3mo-puedes-recibir-im%C3%A1genes-desde-el-espacio-activity-7067069676006088704-h4PN"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#27CC0C] hover:bg-[#1f9909] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#27CC0C] focus:ring-opacity-50 hover:shadow-[0_0_15px_rgba(39,204,12,0.5)]"
              >
                Read on LinkedIn
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiIgdmlld0JveD0iMCAwIDUyIDUyIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-10 animate-fade-in"></div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-left">
              <Image
                src="/antena_fabricada.png"
                alt="Final Antenna"
                width={500}
                height={300}
                className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(39,204,12,0.5)]"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4">About the Project</h2>
              <p className="text-lg">
                This project is the culmination of deep theoretical study and practical experimentation. It includes the design 
                and simulation of antennas using CST Studio software and the construction of two distinct types: the V-Dipole 
                and Turnstile antennas. These were crafted using common materials like PVC and aluminum and were tested for 
                their effectiveness in capturing satellite signals from NOAA.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f35] to-[#2a3042] -z-10 animate-gradient"></div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Technical Breakdown</h2>
            <div className="space-y-4">
              {['NOAA Satellites Overview', 'Antenna Design Process', 'Image Reception Process'].map((title, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-[#27CC0C] animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <button
                    className={`w-full p-4 text-left text-lg font-semibold flex justify-between items-center ${
                      activeIndex === index ? 'bg-gray-700' : 'bg-gray-800'
                    } transition-colors duration-300 ease-in-out`}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`accordion-content-${index}`}
                  >
                    {title}
                    {activeIndex === index ? <ChevronUp className="animate-bounce" /> : <ChevronDown />}
                  </button>
                  <div
                    id={`accordion-content-${index}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 bg-gray-800">
                      <p className="text-gray-300">
                        {index === 0 && "NOAA satellites orbit the Earth in polar orbits and are critical in capturing weather data from across the globe. The project focuses on receiving APT signals from NOAA-19, which orbits at an altitude of around 870 km."}
                        {index === 1 && "The antennas were modeled in 3D using CST Studio and fabricated using simple materials like PVC and aluminum rods. Each type was tested for its ability to capture NOAA satellite signals, using SDR technology and software such as Orbitron and WXtoImg for satellite tracking and image decoding."}
                        {index === 2 && "Using the fabricated antennas and SDR software, the team was able to decode images transmitted by NOAA satellites. These images provide real-time weather data that can be analyzed for scientific purposes."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiIgdmlld0JveD0iMCAwIDUyIDUyIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTUwIDIxSDJ2MzBoNDh6TTUwIDFIMnYyMGg0OHoiLz48L3N2Zz4=')] opacity-5 -z-10 animate-fade-in"></div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">See the Project in Action</h2>
            <div className="aspect-w-16 aspect-h-9 mb-8 relative animate-fade-in-up animation-delay-200">
              <iframe 
                src="https://www.youtube.com/embed/G_gZaqCSSUs?t=562s"
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
              <button
                className="absolute bottom-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:shadow-[0_0_15px_rgba(39,204,12,0.5)]"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
              >
                {isVideoPlaying ? <Pause /> : <Play />}
              </button>
            </div>
            <a 
              href="https://www.linkedin.com/posts/enrique-robles-uriel-4068b6224_c%C3%B3mo-puedes-recibir-im%C3%A1genes-desde-el-espacio-activity-7067069676006088704-h4PN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#27CC0C] hover:bg-[#1f9909] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#27CC0C] focus:ring-opacity-50 animate-fade-in-up animation-delay-400 hover:shadow-[0_0_15px_rgba(39,204,12,0.5)]"
            >
              Read More on LinkedIn
            </a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a3042] to-[#3a4052] -z-10 animate-gradient"></div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Live Satellite Tracker</h2>
            <div className="flex flex-col items-center animate-fade-in-up animation-delay-200">
              <SatelliteTracker />
              <p className="text-center mt-4 max-w-2xl">
                This interactive model shows a simplified representation of a NOAA satellite in an eccentric orbit around Earth. 
                You can interact with the model by clicking and dragging to rotate the view, or use the scroll wheel to zoom in and out. 
                The satellite's position, altitude, and velocity are approximations and update in real-time.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiIgdmlld0JveD0iMCAwIDUyIDUyIj48Y2lyY2xlIGN4PSIyNiIgY3k9IjI2IiByPSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-5 -z-10 animate-fade-in"></div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Results and Future Prospects</h2>
            <p className="text-lg mb-8 text-center animate-fade-in-up animation-delay-200">
              The project successfully received and decoded images from NOAA weather satellites, demonstrating the effectiveness of custom-built antennas. 
              Future plans include optimizing antenna designs and expanding the project to receive data from other types of satellites.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-fade-in-left">
                <Image
                  src="/satellite-image.jpg"
                  alt="Satellite Image"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(39,204,12,0.5)]"
                />
              </div>
              <div className="animate-fade-in-right">
                <Image
                  src="/antenna-schematic.jpg"
                  alt="Antenna Schematic"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(39,204,12,0.5)]"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#3a4052] to-[#141924] -z-10 animate-gradient"></div>
        </section>
      </main>

      <footer className="relative z-10 bg-[#141924] text-center py-16">
        <h3 className="text-2xl font-bold mb-8 animate-fade-in-up">Want to learn more about telecommunications engineering or how to receive satellite data on your own?</h3>
        <div className="space-x-4 animate-fade-in-up animation-delay-200">
          <Link href="/projects" className="bg-[#27CC0C] hover:bg-[#1f9909] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#27CC0C] focus:ring-opacity-50 hover:shadow-[0_0_15px_rgba(39,204,12,0.5)]">
            Explore More Projects
          </Link>
          <Link href="/contact" className="bg-[#27CC0C] hover:bg-[#1f9909] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#27CC0C] focus:ring-opacity-50 hover:shadow-[0_0_15px_rgba(39,204,12,0.5)]">
            Contact Us
          </Link>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiIgdmlld0JveD0iMCAwIDUyIDUyIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI2IDJMMiAyNmwyNCAyNCAyNC0yNHoiLz48L3N2Zz4=')] opacity-5 -z-10 animate-fade-in"></div>
      </footer>
    </div>
  );
}
