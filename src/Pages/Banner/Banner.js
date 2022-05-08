import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/Banner/1.jpg';
import banner2 from '../../images/Banner/2.jpg';

 import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>

                <Carousel.Caption>
                        <h1>The wind is <br /> not even close to us </h1>
                        <p>The best car dealer Website</p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src= {banner1}
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>

                <Carousel.Caption>
                <h1>We have everything  <br /> Your car needs! </h1>
                        <p>The best car dealer Website</p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src= {banner2}
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                 
            </Carousel>
        </div>
    );
};

export default Banner;