import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
import ProfilePicture from '../img/profilepicture.jpg'

function HomePage() {
  return (
    <>
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
                            <a className="nav-link" href="index.html"><h3>About Me</h3></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio.html"><h3>Portfolio</h3></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html"><h3>Contact</h3></a>
                        </li>
                    </ul>
                </section>
        </nav>

        <section className="container">

            <section className="row">
                <section className="col-sm">
                    <h1 className="font-weight-bold">About Me</h1>
                    <hr/>
                </section>
            </section>

            <section className="row no-gutters">
                <article className="col-sm-5">
                    <img src={ProfilePicture} alt="Kyle Gates" className="img-fluid"></img>
                </article>

                <article className="col-sm">
                    <p>Hi there, my name is Kyle Gates. I am 22 years old and currently attending the University of Oregon's coding bootcamp. I graduated from Cor Deo Christian Academy in 2017, and also have attended PCC.
                    One reason i am taking the University of Oregon's coding bootcamp is that I love computers, and have always had a keen interest in coding, which is what I was taking at PCC.
                    I also took two summers inbetween terms at PCC to work at Fred Meyers as a Gas Attendent, were I was promoted to work the cash register at the fuel station.</p>
                    
                </article>
            </section>

            <section className="row no-gutters">
                <article className="col-md">
                    <p>Some of my hobbies are video games and skeet shooting. I have been playing videos games since I was young, and was also a reason I am so interested in coding. My hobby of Skeet Shooting developed when
                    I was in high school, were I joined a small league in order to get some electives, and continued to do some more skeet shooting afterwards.<br></br>                    
                    Some interests of mine are History, specifcally World War II, and military equipment. My interest of history, especially WW2, develop from highschool, were my histroy teachers were very talented and explained history
                    very well, which made listening about it very intriguing. My interest in military equipment was due to the fact that in times of war, military technology advanced rapidly, which greatly benefitted civllian life after wars.</p>
                </article>

            </section>

            <section className="row no-gutters">
                <article className="col-sm">
                    <h1>Goals:</h1>
                    <ul>
                        <li>
                            <p>To learn as much as i can from this bootcamp.</p>
                        </li>
                        <li>
                            <p>To continue to learn code after the bootcamp.</p>
                        </li>
                        <li>
                            <p>To either get a job in or start a company that specializes in coding.</p>
                        </li>
                    </ul>
                </article>
            </section>
                
        </section>
         
        <footer className="footer">

            <section className="footercontainer">

                <span className="text-muted">
                    Kyle Gates © 2020
                </span>

            </section>

        </footer>
    </>
  );
}

export default HomePage;
