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
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <section className="navbar-brand">
        //         <h1 className="header">Kyle Gates</h1>
        //     </section>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        //     <section className="collapse navbar-collapse" id="collapsibleNavbar">
        //         <ul className="navbar-nav ml-auto">
        //             <li className="nav-item">
        //                 <Link to={'/'} className={location.pathname === '/' ? "nav-link active" : "nav-link"}>
        //                 <h3>About Me</h3>
        //                 </Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to={"/portfolio"} className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
        //                 <h3>Portfolio</h3>
        //                 </Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to={"/portfolio"} className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
        //                 <h3>Contact</h3>
        //                 </Link>
        //             </li>
        //         </ul>
        //     </section>
        // </nav>
    )
}

export default NavBar;