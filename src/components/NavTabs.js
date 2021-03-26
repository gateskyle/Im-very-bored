import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <section className="navbar-brand">
                <h1 className="header">Kyle Gates</h1>
            </section>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <section className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <h3>About Me</h3>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        <h3>Portfolio</h3>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        <h3>Contact</h3>
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default NavBar;