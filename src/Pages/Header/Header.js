import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo-dark.png'
import './Header.css'

const Header = () => {
    return (
        <div className='navbar-container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" bg-slate-700 sticky="top">
                <Container>
                    <Navbar.Brand to="#home"> 
                        <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='text-black' id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className='decoration-0' to="#home">Home</CustomLink>
                            <CustomLink to="#items">Items</CustomLink> 
                        </Nav>
                        <Nav>
                            <CustomLink to="#deets">Login</CustomLink>
                            <CustomLink eventKey={2} to="#memes">
                                Dank memes
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;