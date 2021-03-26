import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

function ProjectTwoPage() {
    return (
        <>
        <section class="container">

            <section class="row">
                <section class="col-sm">
                    <h1 class="font-weight-bold">Project: Dungeons And Dragons Helper</h1>
                    <hr/>
                </section>
            </section>

            <section class="row no-gutters">
                <article class="col">
                    <img src="../img/dnd.png" alt="The Homepage of the website" class="img-fluid"></img>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-md">
                    <p>A group project in which the team created a website were the user can create a character for the game Dungeons and Dragons. Languages and npms used are: HTML, CSS, Google CSS API, JS, Express npm, MySQL2, and Sequelize</p>
                </article>

            </section>

            <section class="row no-gutters">
                <article class="col-sm">
                    <h1>Links:</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/Tapwater808/DungeonsAndDragonsHelper">Repository</a>
                        </li>
                        <li>
                            <a href="https://aqueous-fortress-78837.herokuapp.com/">Webpage</a>
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

export default ProjectTwoPage;