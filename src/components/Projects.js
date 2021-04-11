import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import EntertainmentPic from '../img/entertainment.png'
import DnDPic from '../img/dnd.png'
import QuizPic from '../img/quizgame.png'
import EmployeeTrackerPic from '../img/employeetracker.png'
import EmployeeWebsitePic from '../img/employeewebsitegenerator.gif'
import READMEGeneratorPic from '../img/readmegen.png'
    
export function EList() {
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
                    <img src={EntertainmentPic} alt="The Entertainment List webpage" class="img-fluid"></img>
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
        </>
    )
}

export function DndHelper() {
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
                    <img src={DnDPic} alt="The Homepage of the website" class="img-fluid"></img>
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
        </>
    )
}

export function QuizGame() {
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
        </>
    )
}

export function EmployeeTracker() {
    return (
        <>
        <section class="container">

            <section class="row">
                <section class="col-sm">
                    <h1 class="font-weight-bold">Employee Tracker Program</h1>
                    <hr/>
                </section>
            </section>

            <section class="row no-gutters">
                <article class="col">
                    <img src={EmployeeTrackerPic} alt="Employee Tracker Program" class="img-fluid"></img>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-md">
                    <p>The Employee tracker allows you to view, add, and update deparments, roles, and employees. Language used to make this is JavaScript</p>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-sm">
                    <h1>Links:</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/gateskyle/Employee-Tracker-Program">Repository</a>
                        </li>
                        <li>
                            <a>No Webpage, prgoram is used locally</a>
                        </li>
                    </ul>
                </article>
            </section>
        </section>
        </>
    )
}

export function EmployeeGenerator() {
    return (
        <>
        <section class="container">

            <section class="row">
                <section class="col-sm">
                    <h1 class="font-weight-bold">Employee Website Generator</h1>
                    <hr/>
                </section>
            </section>

            <section class="row no-gutters">
                <article class="col">
                    <img src={EmployeeWebsitePic} alt="Employee Website Generator" class="img-fluid"></img>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-md">
                    <p>This program will generate a website with a list of employees based off of what you input for the questions prompted in the terminal. Languages used to make this are HTML and Javascript</p>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-sm">
                    <h1>Links:</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/gateskyle/Team-Member-Profile-Generator">Repository</a>
                        </li>
                        <li>
                            <a>No Webpage, prgoram is used locally</a>
                        </li>
                    </ul>
                </article>
            </section>
        </section>
        </>
    )
}

export function READMEGenerator() {
    return (
        <>
        <section class="container">

            <section class="row">
                <section class="col-sm">
                    <h1 class="font-weight-bold">README Generator</h1>
                    <hr/>
                </section>
            </section>

            <section class="row no-gutters">
                <article class="col">
                <img src={READMEGeneratorPic} alt="README Generator" class="img-fluid"></img>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-md">
                    <p>This program is a generator for the README file that allows you to quickly and efficently build a README file with certain guidlines which include: project title, description, installation instructions, usage information, a license, GitHub username, email address, and a interactive Table of Contents. Language used to make the program is Javascript. </p>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-sm">
                    <h1>Links:</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/gateskyle/ReadME-Generator">Repository</a>
                        </li>
                        <li>
                            <a>No Webpage, prgoram is used locally</a>
                        </li>
                    </ul>
                </article>
            </section>
        </section>
        </>
    )
}