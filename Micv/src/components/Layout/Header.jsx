import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from "../Layout/Header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Header () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" text="white">
      <Container>
        <Navbar.Brand href="#home"><img
              src="/diseñosinborde.png"
              width="100px"
              height="40px"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/inicio" >Inicio</Nav.Link>
            <Nav.Link href="/sobremi">Sobre mi</Nav.Link>
            <Nav.Link href="/portafolio">Portafolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;