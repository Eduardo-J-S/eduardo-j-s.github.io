import React from 'react';
import './Card.scss';

const Card = ({ title, description, image, githubLink }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="card__link"
      >
        Ver no GitHub
      </a>
    </div>
  );
};

export default Card;
