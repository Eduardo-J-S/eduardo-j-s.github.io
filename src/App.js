import '@tsparticles/react';
import '@tsparticles/slim';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from '@tsparticles/slim';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import particles from './utils.js/particles';

function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const renderParticlesJsInHome = location.pathname === "/";

  let particlesObj = null;

  if (init) {
    particlesObj = renderParticlesJsInHome ? <Particles id="particles" options={particles} /> : '';
  }



  return (
    <div className="App">
      {/* particles js */}
      {particlesObj}
      {/* navbar */}
      <Navbar />
      {/* main page content*/}
      <div className='App__main-page-content'>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/resume" element={<Resume />} />
          <Route index path="/skills" element={<Skills />} />
          <Route index path="/portfolio" element={<Portfolio />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
