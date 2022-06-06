import React, { useState } from 'react'; 
import { Carousel } from 'react-bootstrap';
import person1 from '../../images/review/1.jpg';
import person2 from '../../images/review/2.jpg';
import person3 from '../../images/review/3.jpg';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { IconContext } from "react-icons";
import './Review.css'


const Review = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div id='reviews' className="review-container">
            <Carousel activeIndex={index} onSelect={handleSelect} className='py-5'>
                <Carousel.Item className='text-center'>

                    <img
                        className="inline-block w-10 text-center rounded-full"
                        src={person1}
                        alt=""
                    />

                    <IconContext.Provider value={{ color: "orange", className: "inline-block text-xl font-bold my-2" }}>
                        <div>
                            <FaStar /><FaStar /><FaStar /><FaStar /> <FaStar />
                        </div>
                    </IconContext.Provider>
                    <h3>Gabriel John</h3>
                    <p>We are happy to purchase tools Easy communication super fast delivery, awesome respons</p>

                </Carousel.Item>
                <Carousel.Item className='text-center'>
                    <img
                        className="inline-block  w-10 text-center rounded-full"
                        src={person2}
                        alt=""
                    />
                    <IconContext.Provider value={{ color: "orange", className: "inline-block text-xl font-bold my-2" }}>
                        <div>
                            <FaStar /><FaStar /><FaStar /><FaStar /> <FaStar />
                        </div>
                    </IconContext.Provider>
                    <h3>B. Adams</h3>
                    <p>Easy communication super fast delivery, awesome respons</p>

                </Carousel.Item>
                <Carousel.Item className='text-center'>
                    <img
                        className="inline-block  w-10 text-center rounded-full"
                        src={person3}
                        alt=""
                    />
                    <IconContext.Provider value={{ color: "orange", className: "inline-block text-xl font-bold my-2" }}>
                        <div>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                        </div>
                    </IconContext.Provider>
                    <h3>Johnson gary</h3>
                    <p>Great services super fast delivery, awesome respons</p>

                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Review;