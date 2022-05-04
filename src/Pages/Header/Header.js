import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'; 
import logo from '../../images/logo-dark.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar-container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" bg-slate-700 sticky="top">
                <Container>
                    <Navbar.Brand to="home"> 
                        <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='text-black' id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="item">Item</Nav.Link> 
                        </Nav>
                        <Nav>
                        <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;