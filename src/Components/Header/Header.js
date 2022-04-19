import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold fs-2 fst-italic" as={Link} to="/home">Euphoric Momentos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="fw-bold" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/checkout">CheckOut</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/about">About</Nav.Link>
                        </Nav>

                        <Nav>
                            {
                                user? 
                                <Nav.Link className="fw-bold" onClick={handleSignOut}>Sign Out</Nav.Link> : <Nav.Link className="fw-bold" as={Link} to="/login">Login</Nav.Link>
                            }
                            
                            <Nav.Link className="fw-bold" as={Link} to="/register" style={{
                                backgroundColor: "#5DA3FA",
                                borderRadius: "30px"
                            }}>
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;