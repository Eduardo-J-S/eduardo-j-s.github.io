import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__text">
          <h1>
            Olá, sou <span className="header__highlight">Eduardo</span>
          </h1>
          <p className="header__tagline">Desenvolvedor Backend</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
