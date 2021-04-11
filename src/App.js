import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/Contact";
import PortfolioPage from './components/Portfolio';
import { EList, DndHelper, QuizGame, EmployeeTracker, EmployeeGenerator, READMEGenerator } from './components/Projects'
import ResumePage from './components/Resume'
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <NavTabs />
        <Route exact path={'/'} component={AboutMe} />
        <Route exact path={'/portfolio'} component={PortfolioPage} />
        <Route exact path={'/portfolio/enterainment-list'} component={EList} />
        <Route exact path={'/portfolio/dnd-helper'} component={DndHelper} />
        <Route exact path={'/portfolio/quiz-game'} component={QuizGame} />
        <Route exact path={'/portfolio/employee-tracker'} component={EmployeeTracker} />
        <Route exact path={'/portfolio/employee-generator'} component={EmployeeGenerator} />
        <Route exact path={'/portfolio/readme-generator'} component={READMEGenerator} />
        <Route exact path={'/contact'} component={ContactPage} />
        <Route exact path={'/contact/resume'} component={ResumePage} />
        <Footer />
        </HashRouter>
    </>
  )
}

export default App;
