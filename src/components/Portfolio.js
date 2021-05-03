import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import EntertainmentPic from '../img/entertainment.png'
import QuizPic from '../img/quizgame.png'
import DnDPic from '../img/dnd.png'
import EmployeeTrackerPic from '../img/employeetracker.png'
import EmployeeWebsitePic from '../img/employeewebsitegenerator.gif'
import READMEGeneratorPic from '../img/readmegen.png'
import GoogleAPIPic from '../img/google-api.png'
import MoodRingPic from '../img/moodCapture.png'

function PortfolioPage() {
  const location = useLocation();
    return (
    <>
        <section className="container">
            <h1 className="font-weight-bold">Portfolio</h1>
            <hr/>
            <section className="row"> 

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>Entertainment Lists</a>
                <Link to={"/portfolio/enterainment-list"} className={location.pathname === "/portfolio/enterainment-list" ? "nav-link active" : "nav-link"}><img src={EntertainmentPic} alt="Entertainment List Project" className="img-thumbnail my-3"></img></Link>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>Quiz Game</a>
                <Link to={"/portfolio/quiz-game"} className={location.pathname === "/portfolio/quiz-game" ? "nav-link active" : "nav-link"}><img src={QuizPic} alt="Quiz Game Project" className="img-thumbnail my-3"></img></Link>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>DnD Helper</a>
                <Link to={"/portfolio/dnd-helper"} className={location.pathname === "/portfolio/dnd-helper" ? "nav-link active" : "nav-link"}><img src={DnDPic}alt="Project 2" className="img-thumbnail my-3"></img></Link>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>Employee Tracker</a>
                <Link to={"/portfolio/employee-tracker"} className={location.pathname === "/portfolio/employee-tracker" ? "nav-link active" : "nav-link"}><img src={EmployeeTrackerPic}alt="Employee Tracker" className="img-thumbnail my-3"></img></Link>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>Employee Generator</a>
                <Link to={"/portfolio/employee-generator"} className={location.pathname === "/portfolio/employee-generator" ? "nav-link active" : "nav-link"}><img src={EmployeeWebsitePic}alt="Employee Generator" className="img-thumbnail my-3"></img></Link>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>README Generator</a>
                <Link to={"/portfolio/readme-generator"} className={location.pathname === "/portfolio/readme-generator" ? "nav-link active" : "nav-link"}><img src={READMEGeneratorPic} alt="Readme Generator" className="img-thumbnail my-3"></img></Link>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>Google Books API</a>
                <Link to={"/portfolio/google-api"} className={location.pathname === "/portfolio/google-api" ? "nav-link active" : "nav-link"}><img src={GoogleAPIPic} alt="Google Books API" className="img-thumbnail my-3"></img></Link>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>Mood Ring</a>
                <Link to={"/portfolio/mood-ring"} className={location.pathname === "/portfolio/mood-ring" ? "nav-link active" : "nav-link"}><img src={MoodRingPic} alt="Mood Ring" className="img-thumbnail my-3"></img></Link>
              </section>

            </section>

        </section>
    </>
    )
}

export default PortfolioPage;