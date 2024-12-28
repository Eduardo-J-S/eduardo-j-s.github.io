import React from 'react';
import './Sobre.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* Texto de introdução */}
        <div className="about__content">
          <h2>Welcome! I'm Eduardo</h2>
          <p>
            I'm a professional web developer with a passion for creating visually 
            stunning and highly functional websites. Combining creativity with 
            technical expertise, I bring your ideas to life, delivering digital 
            solutions that excel in both design and performance.
          </p>
        </div>

        {/* Métricas */}
        <div className="about__metrics">
          <div className="metric">
            <h3>10+</h3>
            <p>Projects Done</p>
          </div>
          <div className="metric">
            <h3>3+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
