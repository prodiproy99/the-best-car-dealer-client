import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (

        <div className='footer-container'>
            <p className='text-center'><small>Copyright &copy; {year} . All Rights Reserved.</small></p>
        </div>

    );
};

export default Footer;