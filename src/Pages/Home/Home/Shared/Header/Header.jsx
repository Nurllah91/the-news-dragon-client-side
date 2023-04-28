import React from 'react';
import logo from '../../../../../assets/logo.png'
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-fast-marquee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Container>
            <div className='text-center mb-2'>
                <img src={logo} alt="" />
                <p className='text-secondary'><span>Journalism Without Fear or Favour</span></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light mb-3 p-3'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={80}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>

            </div>

            <Navbar className='mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                 <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;