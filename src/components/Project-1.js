import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

function ProjectOnePage() {
    return (
        <>
        <section class="container">

                <section class="row">
                    <section class="col-sm">
                        <h1 class="font-weight-bold">Project: Entertainment Lists</h1>
                        <hr/>
                </section>
            </section>

            <section class="row no-gutters">
                <article class="col">
                    <img src="../img/entertainment.png" alt="The Entertainment List webpage" class="img-fluid"></img>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-md">
                    <p>A group project in which the team created a website to access a database to receive and display information about books, movies, and video games using three different APIs. The languages used were HTML, CSS, JavaScript, and JQuery.</p>
                </article>

            </section>

            <section class="row no-gutters">
                <article class="col-sm">
                    <h1>Links:</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/Al0haRussia/entertainment-lists">Repository</a>
                        </li>
                        <li>
                            <a href="https://kurtp23.github.io/entertainment-lists/">Webpage</a>
                        </li>
                    </ul>
                </article>
            </section>
    
        </section>

        <footer class="footer">

            <section class="footercontainer">

                <span class="text-muted">
                    Kyle Gates © 2020
                </span>

            </section>

        </footer>
        </>
    )
}

export default ProjectOnePage;