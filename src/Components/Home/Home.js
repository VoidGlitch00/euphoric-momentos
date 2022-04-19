import React from 'react';
import { Carousel } from 'react-bootstrap';
import NewsLetter from '../NewsLetter/NewsLetter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#EBF5FB" }}>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fS1nGY5/IMG-3127.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Twilight</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pvDBV9V/IMG-3872.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>B&W</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/vqbTJpK/IMG-3889.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Mirrored</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;