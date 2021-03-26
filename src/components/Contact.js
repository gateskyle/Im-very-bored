import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

function submitAlert(e) {
    e.preventDefault();
    alert('You submitted information for me to stea- i mean look over! (Note: The saving of info does not work yet)')
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

            <section className="row no-gutters">
                <section className="col">
                    <article className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </input>
                    </article>
                </section>
            </section>

            <section className="row no-gutters">
                <section className="col">
                    <article className="form-group">
                        <label for="formGroupExampleInput2">First and Last Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="First Name Last Name">
                        </input>
                    </article>
                </section>
            </section>

            <section className="row no-gutters">
                <section className="col">
                    <section className="form-group">
                        <article className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </article>
                    </section>
                </section>
            </section>

            <section className="row">
                <section className="col">
                    <button className="float-right btn btn-primary" type="button" onClick={submitAlert}>Submit</button>
                </section>
            </section>

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
                            <a href="./resume.html">Resume</a>
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