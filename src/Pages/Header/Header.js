import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo-dark.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth'; 

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div className='navbar-container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" bg-slate-700 sticky="top">
                <Container>
                    <Navbar.Brand to="home">
                        <h2><span className='text-orange'>Car</span> Dealer</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='text-black' id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="myBlog">My Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                 <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                                 <Nav.Link as={Link} to="/manageInventories">Manage Items</Nav.Link>
                                 <Nav.Link as={Link} to="/myItem">My items</Nav.Link> 
                                </>
                            }
                          {
                              user ? <button className='signOutbtn' onClick={handleSignOut}>Sign Out</button>
                              :   <Nav.Link as={Link} to="login">Login</Nav.Link>
                          }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;