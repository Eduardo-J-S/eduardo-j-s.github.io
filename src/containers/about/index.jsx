import React from "react";
import { FaUserPen } from "react-icons/fa6";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss'
import { DiAndroid, DiApple } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa'

const personalDetails = [
    {
        label: "Name",
        value: "Eduardo José da Silva"
    },
    {
        label: "Age",
        value: "26"
    },
    {
        label: "Address",
        value: "Brazil, Olinda-PE"
    },
    {
        label: "Email",
        value: "ejsilva159@gmail.com"
    },
    {
        label: "Contact No",
        value: "+55 (81) 98869-2798"
    },
];

const jobSumary = 'A programming and development enthusiast, eager to craft innovative digital solutions. My passion for coding and problem-solving drives me to seek opportunities for growth and learning.'
const jobSumaryTwo = 'Passionate Developer with a Flair for Technology and Creative Solutions'
const jobSumaryThree = 'While I may not have professional experience yet, I am consistently honing my skills in languages such as Java, JavaScript, Python, and tools like React Native, React, and Spring Boot. I am a student in the Analysis and Systems Development program at IFPE - Campus Paulista and am committed to expanding my knowledge in fullstack development.'

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<FaUserPen size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3>Fullstack Developer</h3>
                        <p>{jobSumary}</p>
                        <h4>{jobSumaryTwo}</h4>
                        <p>{jobSumaryThree}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}
export default About;