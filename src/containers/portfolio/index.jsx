import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiComputerFill } from "react-icons/ri";
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import ImageSix from '../../images/image6.jpg';
import ImageSeven from '../../images/image7.jpg';
import './styles.scss';
//#ffdd40
const portfolioData = [
    {
        id: 3,
        name: "Aprender Mais",
        link: 'https://github.com/Eduardo-J-S/AprenderMais-BackEnd',
        image: ImageOne
    },
    {
        id: 3,
        name: "Chatbot",
        link: 'https://github.com/Eduardo-J-S/chatbot-sd',
        image: ImageTwo
    },
    {
        id: 3,
        name: "Spring and Node study",
        link: 'https://github.com/Eduardo-J-S/node-spring-exploration',
        image: ImageThree
    },
    {
        id: 2,
        name: "Web development",
        link: 'https://github.com/Eduardo-J-S/DSWI',
        image: ImageFour
    },
    {
        id: 2,
        name: "Alcohol or Gasolinen",
        link: 'https://github.com/Eduardo-J-S/alcohol-or-gasoline',
        image: ImageFive
    },
    {
        id: 2,
        name: "Screen Login",
        link: 'https://github.com/Eduardo-J-S/screen-login-react-native',
        image: ImageSix
    },
    {
        id: 2,
        name: "Portfolio",
        link: 'https://github.com/Eduardo-J-S/eduardo-j-s.github.io',
        image: ImageSeven
    },
]

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Front End'
    },
    {
        filterId: 3,
        label: 'Back End'
    },
]

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleVisit(link) {
        window.open(link, '_blank');
    }

    function handlerHover(index) {
        setHoveredValue(index)
    }

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    const filteredItems = filteredValue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredValue)

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<RiComputerFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item => (
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>{item.label}</li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handlerHover(index)}
                                onMouseLeave={() => handlerHover(null)}>
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <img src={item.image} alt={item.name} />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button onClick={() => handleVisit(item.link)}>Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
export default Portfolio;