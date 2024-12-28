import React from 'react';
import './Contact.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactWhatsapp from 'react-whatsapp';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <div className="contact__info">
                    <h2>Entre em contato para colaborações</h2>
                    <p>
                        Fale comigo hoje mesmo para discutir as necessidades do seu projeto e começar a colaborar em algo incrível!
                    </p>
                    <div className="contact__social">
                        <a href="https://github.com/Eduardo-J-S" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo--j-s/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <ReactWhatsapp number="+55 81988692798" className="contact__whatsapp" message="Olá, estou interessado em contratar seus serviços. Vamos conversar?">
                                <i className="fab fa-whatsapp"></i>
                        </ReactWhatsapp>
                    </div>

                </div>

                {/* Formulário */}
                <form className="contact__form" method='POST' action="https://getform.io/f/bmddwpja">
                    <div className="contact__form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" autoComplete='name' id="name" name="name" placeholder="Seu nome" required />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Seu email" required />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Sua mensagem" rows="5" required />
                    </div>
                    <button type="submit" className="contact__button">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
