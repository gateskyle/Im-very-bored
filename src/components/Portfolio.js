import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import EntertainmentPic from '../img/entertainment.png'
import QuizPic from '../img/quizgame.png'
import DnDPic from '../img/dnd.png'

function PortfolioPage() {
    return (
    <>
        <section className="container">
            <h1 className="font-weight-bold">Portfolio</h1>
            <hr/>
            <section className="row"> 

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>Entertainment Lists</a>
                <a href="./portfolio-htmls/project-1.html" data-slide-to="0"><img src={EntertainmentPic} alt="Entertainment List Project" className="img-thumbnail my-3"></img></a>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>Quiz Game</a>
                <a href="./portfolio-htmls/quiz-game.html" data-slide-to="1"><img src={QuizPic} alt="Quiz Game Project" className="img-thumbnail my-3"></img></a>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a>DnD Helper</a>
                <a href="./portfolio-htmls/project-2.html" data-slide-to="2"><img src={DnDPic}alt="Project 2" className="img-thumbnail my-3"></img></a>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="3"><img src="https://dummyimage.com/160x120/000000/fff.png&text=Photo+4" alt="dummy" className="img-thumbnail my-3"></img></a>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="4"><img src="https://dummyimage.com/160x120/000000/fff.png&text=Photo+5" alt="dummy" className="img-thumbnail my-3"></img></a>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="5"><img src="https://dummyimage.com/160x120/000000/fff.png&text=Photo+6" alt="dummy" className="img-thumbnail my-3"></img></a>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="6"><img src="https://dummyimage.com/160x120/000000/fff.png&text=Photo+7" alt="dummy" className="img-thumbnail my-3"></img></a>
              </section>

              <section className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="7"><img src="https://dummyimage.com/160x120/000000/fff.png&text=Photo+8" alt="dummy" className="img-thumbnail my-3"></img></a>
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

export default PortfolioPage;