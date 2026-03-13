import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleSphere from './components/ParticleSphere';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const scrollContainer = useRef(null);

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas 
          camera={{ position: [0, 0, 3] }} 
          eventSource={scrollContainer}
          eventPrefix="client"
          style={{ pointerEvents: 'none' }}
        >
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ParticleSphere />
          </Suspense>
          {/* Removed OrbitControls as it intercepts touch events and we want native scrolling */}
        </Canvas>
      </div>

      {/* HTML Foreground Overlay */}
      <div 
        ref={scrollContainer}
        className="absolute inset-0 overflow-y-auto overflow-x-hidden z-10 scroll-smooth pointer-events-auto touch-pan-y"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}

export default App;
