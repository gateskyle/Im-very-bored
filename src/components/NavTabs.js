import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {

    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Navbar.Brand><h1>Kyle Gates</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#/"><h3>About Me</h3></Nav.Link>
                    <Nav.Link href="#portfolio"><h3>Portfolio</h3></Nav.Link>
                    <Nav.Link href="#contact"><h3>Contact</h3></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;