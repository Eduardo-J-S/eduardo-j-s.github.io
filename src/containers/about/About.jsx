import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="about" id="introduction">
      <div className="about__container">
        {/* <h2 className="about__title">Sobre Mim</h2> */}
        <div className="about__grid">
          <h2>Bem-vindo!</h2>
          <p className="about__grid__description">
          Sou um desenvolvedor fullstack com paixão por criar soluções modernas e funcionais.
          Combinando criatividade com conhecimento técnico, dou vida às suas ideias, entregando 
          soluções digitais que se destacam tanto em design quanto em desempenho. Minha experiência 
          abrange desde o desenvolvimento backend até a criação de interfaces intuitivas, garantindo 
          uma abordagem completa para a construção de sistemas robustos.
          </p>
          <div className="about__grid__projects">
            <div className='metric'>
              <h3>15<span>+</span></h3>
              <p>Projetos finalizados</p>
            </div>
            <div className='metric'>
              <h3>3<span>+</span></h3>
              <p>Anos de experiência</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
