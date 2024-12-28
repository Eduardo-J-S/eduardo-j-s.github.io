import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logoo.png';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__text">
          <h1>Olá, sou Eduardo</h1>
          <p className="header__tagline">Desenvolvedor Fullstack</p>
        </div>
        <img src={logo} alt="Eduardo Logo" className="header__logo" />
      </div>
    </header>
  );
};

export default Header;
