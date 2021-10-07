import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            
            <Navbar bg="gradient-primary" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Armando González</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#personal-info">Personal Information</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#courses">courses</Nav.Link>
                            <Nav.Link href="#cv">CV</Nav.Link>
                            <Nav.Link href="#social-media">Social Media</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Header;
