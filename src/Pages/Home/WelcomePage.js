import React from 'react';
import WelcomeImg from '../../images/welcome.jpg' 
import './WelcomePage.css'

const WelcomePage = () => {
    return (
        <div>
            <div className="container welcome-container">
                <div className="row">
                    <div className="col-md-5 left-side">
                        <img src={WelcomeImg} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h2>Welcome to <span className='orange'>Car dealer</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem quod enim et odio, ullam quaerat molestiae perferendis tenetur laborum repudiandae corporis numquam aliquid sint cumque voluptates itaque ad? Laudantium?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem quod enim et odio, ullam quaerat molestiae perferendis tenetur laborum repudiandae corporis numquam aliquid sint cumque voluptates itaque ad? Laudantium?</p> 
                    <button className='btn btn-secondary mt-4'>View More Info</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default WelcomePage;