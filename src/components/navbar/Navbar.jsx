import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/images/logoo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Eduardo - Desenvolvedor Backend" className="navbar__logo" />
      {/*<div className="navbar__logo">Eduardo</div>*/}

      {/* Ícone do Menu Hambúrguer */}
      <div className={`navbar__toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links da Navbar */}
      <ul className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="#header" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#introduction" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
