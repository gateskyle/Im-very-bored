import React from "react";
import { Link, useLocation } from "react-router-dom";
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function submitAlert(e) {
    e.preventDefault();

    const emailValue = document.getElementById('email').value;
    const messageValue = document.getElementById('message').value;
    const personNameValue = document.getElementById('personName').value;

    const emailData = {
        service_id: "service_hwjcz8w",
        template_id: "template_qtcdkpn",
        user_id: "user_viGFYpYQLNH6XXHT2hsns",
        template_params: {
            email: emailValue,
            message: messageValue,
            personName: personNameValue
        }
    };

    if (emailValue !== "" & messageValue !== "" & personNameValue !== "") {
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(emailData),
            contentType: 'application/json'
        }).done(function() {
            document.getElementById("errorMessage").innerHTML = '<div class="alert alert-success" role="alert"> <strong>You have successfully sent your information. Thank you!</strong> </div>'
        }).fail(function(error) {
            document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger" role="alert"> <strong>You have encountered an error, please ensure no fields were blank or use a different method for contact</strong> </div>'
        });
    } else {
        document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger" role="alert"> <strong>You have encountered an error, please ensure no fields were blank or use a different method for contact</strong> </div>'
    }   
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
                    <section className="errorMessage" id="errorMessage" style={{ marginTop: 5}} />
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