import React from 'react';
import Navbar from './components/navbar/Navbar'
import Header from './containers/header/Header';
import About from './containers/about/About';
import Skills from './containers/skills/Skills';
import Contact from './containers/contact/Contact';
import Projects from './containers/projects/Projects';
import Sobre from './components/sobre/Sobre'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      {/* <Sobre /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
