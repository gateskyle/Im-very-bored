import React from "react";
import { Link, useLocation } from "react-router-dom";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
init("user_viGFYpYQLNH6XXHT2hsns");

function submitAlert(e) {
    e.preventDefault();
    emailjs.send("service_t39ak2g", "template_qtcdkpn", {
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        personName: document.getElementById('personName').value,
    }).then(function(mail) {
        if (mail.text === "OK") {
            alert("You have successfully sent the information")
        } else {
            alert("You have encountered an error, pelse use a different method for contact")
        }
    });
}

function ContactPage() {
    const location = useLocation();
    return (
        <>
        <section className="container">
            <section className="row">
                <section className="col">
                    <h1 className="font-weight-bold">Contact</h1>
                    <hr/>
                </section>
            </section>

            <form action="/submit" method="post">
            <section className="row no-gutters">
                <section className="col">
                    <article className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com">
                        </input>
                    </article>
                </section>
            </section>

            <section className="row no-gutters" style={{ marginTop: 5}}>
                <section className="col">
                    <article className="form-group">
                        <label for="personName">First and Last Name</label>
                        <input type="text" className="form-control" id="personName" placeholder="First Name Last Name">
                        </input>
                    </article>
                </section>
            </section>

            <section className="row no-gutters" style={{ marginTop: 5}}>
                <section className="col">
                    <section className="form-group">
                        <article className="form-group">
                            <label for="message">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </article>
                    </section>
                </section>
            </section>

            <section className="row">
                <section className="col">
                    <button className="float-right btn btn-primary" id="submit" type="submit" style={{ marginTop: 5}} onClick={submitAlert}>Submit</button>
                    <section className="errorMessage" id="errorMessage" style={{ marginTop: 5}}>
                        
                    </section>
                </section>
            </section>
            </form>

            <section className="row" style={{ marginTop: 5}}>
                <section className="col">Links To Other Media:
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/kyle-gates-62a131184/">Linkedin</a>
                        </li>
                        <li>
                            <a href="https://github.com/gateskyle">Github</a>
                        </li>
                        <li>
                            <Link to={"/contact/resume"} className={location.pathname === "/contact/resume"}>
                            Resume
                            </Link>
                        </li>
                    </ul>
                </section>
            
                <section className="col">Contact Information:
                    <ul>
                        <li>
                            <a href="tel:5037025800">Phone Number: (503)702-5800</a>
                        </li>
                        <li>
                            <a href = "mailto: gates.kyle@hotmail.com">Send Email</a>
                        </li>
                    </ul>
                </section>
            </section>

        </section>
    </>
    )
}

export default ContactPage;