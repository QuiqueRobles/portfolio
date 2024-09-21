import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate the globe
    const globe = globeEl.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 1.5;
  }, []);

  return (
<div style={{ width: '100%', height: '500px', margin: '0 auto', backgroundColor: '#1e1b2e' }}>
  <Globe
    ref={globeEl}
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" 
    backgroundImageUrl={null}
  />
</div>

  );
};

export default GlobeComponent;
