import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

function submitAlert(e) {
    e.preventDefault();
    alert(`You submitted information for me to stea- i mean look over! Note: Does not save information you typed (You entered: 
        Email: ${document.getElementById('email').value} 
        Name: ${document.getElementById('personName').value} 
        Message: ${document.getElementById('message').value}
    `)
}

function ContactPage() {
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

            <section className="row no-gutters">
                <section className="col">
                    <article className="form-group">
                        <label for="personName">First and Last Name</label>
                        <input type="text" className="form-control" id="personName" placeholder="First Name Last Name">
                        </input>
                    </article>
                </section>
            </section>

            <section className="row no-gutters">
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
                    <button className="float-right btn btn-primary" id="submit" type="submit" onClick={submitAlert}>Submit</button>
                </section>
            </section>
            </form>

            <section className="row">
                <section className="col">Links To Other Media:
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/kyle-gates-62a131184/">Linkedin</a>
                        </li>
                        <li>
                            <a href="https://github.com/Al0haRussia">Github</a>
                        </li>
                        <li>
                            <a href="/contact/resume">Resume</a>
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

        <footer className="footer">

            <section className="footercontainer">

                <span className="text-muted">
                    Kyle Gates © 2020
                </span>

            </section>
        </footer>
    </>
    )
}

export default ContactPage;