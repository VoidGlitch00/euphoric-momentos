import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold fs-2 fst-italic" as={Link} to="/home">Euphoric Momentos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="fw-bold" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/features">Features</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/about">About</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link className="fw-bold" as={Link} to="/login">Login</Nav.Link>
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