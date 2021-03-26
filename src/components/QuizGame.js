import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import QuizPic from '../img/quizgame.png'

function QuizGamePage() {
    return (
        <>
        <section class="container">

            <section class="row">
                <section class="col-sm">
                    <h1 class="font-weight-bold">Project: Quiz Game</h1>
                    <hr/>
                </section>
            </section>

            <section class="row no-gutters">
                <article class="col">
                    <img src={QuizPic} alt="The Quiz Game webpage" class="img-fluid"></img>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-md">
                    <p>Quiz Game is a multi-question webpage in which the player must answer coding related questions quickly and correctly to get the highest possible score. It was built using HTML, CSS, and JavaScript and includes two HTML and JavaScript pages; one for displaying the game and one for display the high scores.</p>
                </article>

            </section>

            <section class="row no-gutters">
                <article class="col-sm">
                    <h1>Links:</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/Al0haRussia/Quiz-Game-With-High-Score">Repository</a>
                        </li>
                        <li>
                            <a href="https://gateskyle.github.io/Quiz-Game-With-High-Score/">Webpage</a>
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

export default QuizGamePage;