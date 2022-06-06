import React from 'react';
import Banner from '../Banner/Banner';  
import Items from '../Items/Items';
import Review from './Review';
import WelcomePage from './WelcomePage';

const Home = () => {
    return (
        <div>   
            <Banner></Banner>   
            <WelcomePage></WelcomePage>
            <Items></Items>
            <Review></Review> 
        </div>
    );
};

export default Home;