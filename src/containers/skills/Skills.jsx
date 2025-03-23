import React from 'react';
import './Skills.scss';
import { FaJs, FaReact, FaNode, FaDatabase, FaGitAlt, FaJava, FaAndroid, FaPython, FaDocker, FaAws, FaCloud, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiCss3, SiSpring, SiKotlin, SiDjango, SiPostgresql, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', description: 'Interaction', icon: <FaJs /> },
    { name: 'Node.js', description: 'Web Server', icon: <FaNode /> },
    { name: 'TypeScript', description: 'Type Safety', icon: <SiTypescript /> },
    { name: 'Git', description: 'Version Control', icon: <FaGitAlt /> },
    { name: 'Docker', description: 'Containerization', icon: <FaDocker /> },
    { name: 'SQL/NoSQL', description: 'Database', icon: <FaDatabase /> },
    { name: 'REST APIs', description: 'Web Services', icon: <FaCloud /> },
    { name: 'Java', description: 'Back-End Development', icon: <FaJava /> },
    { name: 'Spring Boot', description: 'Java Framework', icon: <SiSpring /> },
    { name: 'React/React Native', description: 'Frontend Framework | Cross-Platform Framework', icon: <FaReact /> },
    { name: 'Django', description: 'Python Framework', icon: <SiDjango /> },
    { name: 'Python', description: 'Back-End Development', icon: <FaPython /> },
    { name: 'CSS/SCSS', description: 'User Interface', icon: <SiCss3 /> },
    { name: 'HTML', description: 'Markup Language', icon: <FaHtml5 /> },
    { name: 'Kotlin', description: 'Modern Programming Language', icon: <SiKotlin /> },
    { name: 'Android', description: 'Mobile App Development', icon: <FaAndroid /> },
    { name: 'PostgreSQL', description: 'Relational Database', icon: <SiPostgresql /> },
    { name: 'MongoDB', description: 'NoSQL Database', icon: <SiMongodb /> },
    { name: 'AWS', description: 'Cloud Services', icon: <FaAws /> },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title">Ferramentas Essenciais que Uso</h2>
        <p className="skills__subtitle">
        Descubra as poderosas ferramentas e tecnologias que utilizo para criar sites e aplicativos excepcionais e de alto desempenho.
        </p>
        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div key={index} className="skills__card">
              <div className="skills__icon">{skill.icon}</div>
              <h3 className="skills__name">{skill.name}</h3>
              <p className="skills__description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
