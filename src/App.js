import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/Contact";
import PortfolioPage from './components/Portfolio';
import { ProjectPages } from './components/Projects'
import ResumePage from './components/Resume'
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

import EntertainmentPic from './img/entertainment.png'
import DnDPic from './img/dnd.png'
import QuizPic from './img/quizgame.png'
import EmployeeTrackerPic from './img/employeetracker.png'
import EmployeeWebsitePic from './img/employeewebsitegenerator.gif'
import READMEGeneratorPic from './img/readmegen.png'
import GoogleAPIPic from './img/google-api.png'

function App() {
  return (
    <>
      <HashRouter>
        <NavTabs />
        <Route exact path={'/'} component={AboutMe} />
        <Route exact path={'/portfolio'} component={PortfolioPage} />
        
        <Route exact path={'/portfolio/enterainment-list'} render={(props) =>   <ProjectPages {...props} 
        title={`Entertainment Lists`} 
        pic={EntertainmentPic} 
        desc={`A group project in which the team created a website to access a database to receive and display information about books, movies, and video games using three different APIs. The languages used were HTML, CSS, JavaScript, and JQuery.`}
        repo={`https://github.com/kurtp23/entertainment-lists`}
        webpage={`https://kurtp23.github.io/entertainment-lists/`}
        webtitle={`Webpage`}
        />}/>

        <Route exact path={'/portfolio/dnd-helper'} render={(props) => <ProjectPages {...props} 
        title={`Dungeons And Dragons Helper`} 
        pic={DnDPic} 
        desc={`A group project in which the team created a website were the user can create a character for the game Dungeons and Dragons. Languages and npms used are: HTML, CSS, Google CSS API, JS, Express npm, MySQL2, and Sequelize`}
        repo={`https://github.com/Tapwater808/DungeonsAndDragonsHelper`}
        webpage={`https://aqueous-fortress-78837.herokuapp.com/`}
        webtitle={`Webpage`}
        />}/>
        
        <Route exact path={'/portfolio/quiz-game'} render={(props) => <ProjectPages {...props} 
        title={`Quiz Game`} 
        pic={QuizPic} 
        desc={`Quiz Game is a multi-question webpage in which the player must answer coding related questions quickly and correctly to get the highest possible score. It was built using HTML, CSS, and JavaScript and includes two HTML and JavaScript pages; one for displaying the game and one for display the high scores.`}
        repo={`https://github.com/Al0haRussia/Quiz-Game-With-High-Score`}
        webpage={`https://gateskyle.github.io/Quiz-Game-With-High-Score/`}
        webtitle={`Webpage`}
        />}/>

        <Route exact path={'/portfolio/employee-tracker'} render={(props) => <ProjectPages {...props} 
        title={`Employee Tracker Program`} 
        pic={EmployeeTrackerPic} 
        desc={`The Employee tracker allows you to view, add, and update deparments, roles, and employees. Language used to make this is JavaScript`}
        repo={`https://github.com/gateskyle/Employee-Tracker-Program`}
        webpage={``}
        webtitle={`No Webpage, program is used locally`}
        />}/>

        <Route exact path={'/portfolio/employee-generator'} render={(props) => <ProjectPages {...props} 
        title={`Employee Website Generator`} 
        pic={EmployeeWebsitePic} 
        desc={`This program will generate a website with a list of employees based off of what you input for the questions prompted in the terminal. Languages used to make this are HTML and Javascript`}
        repo={`https://github.com/gateskyle/Team-Member-Profile-Generator`}
        webpage={``}
        webtitle={`No Webpage, program is used locally`}
        />}/>

        <Route exact path={'/portfolio/readme-generator'} render={(props) => <ProjectPages {...props} 
        title={`README Generator`} 
        pic={READMEGeneratorPic} 
        desc={`This program is a generator for the README file that allows you to quickly and efficently build a README file with certain guidlines which include: project title, description, installation instructions, usage information, a license, GitHub username, email address, and a interactive Table of Contents. Language used to make the program is Javascript.`}
        repo={`https://github.com/gateskyle/ReadME-Generator`}
        webpage={``}
        webtitle={`No Webpage, program is used locally`}
        />}/>

        <Route exact path={'/portfolio/google-api'} render={(props) => <ProjectPages {...props} 
        title={`Google Books API`} 
        pic={GoogleAPIPic} 
        desc={`This webpage is designed to search for books using the Google Books API. You can save a book to a database, and view the saved book or delete it from the database. Languages used include React, Javascript, Express, Axios, Mongoose, and MongoDB`}
        repo={`https://github.com/gateskyle/Google-Books-Search`}
        webpage={`https://lit-escarpment-65571.herokuapp.com`}
        webtitle={`Webpage`}
        />}/>

        <Route exact path={'/contact'} component={ContactPage} />
        <Route exact path={'/contact/resume'} component={ResumePage} />
        <Footer />
        </HashRouter>
    </>
  )
}

export default App;
