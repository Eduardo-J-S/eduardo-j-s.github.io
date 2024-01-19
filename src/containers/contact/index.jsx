import React, { useRef, useState } from 'react';
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from '@emailjs/browser';
import './styles.scss';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setIsSending(true);

        emailjs.sendForm('service_f8pu7yp', 'template_5tbw0wr', form.current, 'UCI-c216id2n1QQ_g')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
                // Limpar os campos após o envio bem-sucedido
                setFormData({
                    name: '',
                    email: '',
                    description: ''
                });
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const handleInputChange = (e) => {
        // Atualizar o estado com os valores dos campos de entrada
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
  
    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(-200px)'
                    }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>

                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(200px)'
                    }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                    <form ref={form} onSubmit={sendEmail} className="contact__content__form">
                        <div  className="contact__content__form__controlswrapper">
                            <div>
                                <input required type="text" className="inputName" name="name" value={formData.name}
                                    onChange={handleInputChange}/>
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input required type="text" className="inputEmail" name="email" value={formData.email}
                                    onChange={handleInputChange}/>
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div>
                                <textarea rows="5" required type="text" className="inputDescription" name="description" value={formData.description}
                                    onChange={handleInputChange}/>
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>
                        </div>
                        <button type='submit' value="Send" disabled={isSending}> 
                            {isSending ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </Animate>
            </div>
        </section>
    )
}
export default Contact;