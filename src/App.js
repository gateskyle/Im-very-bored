import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/Contact";
import PortfolioPage from './components/Portfolio';
import ProjectOnePage from './components/Project-1';
import ProjectTwoPage from './components/Project-2';
import QuizGamePage from './components/QuizGame';
import ResumePage from './components/Resume'
import NavTabs from './components/NavTabs';

function App() {
  return (
    <>
      <HashRouter>
        <NavTabs />
        <Route exact path={'/'} component={AboutMe} />
        <Route exact path={'/portfolio'} component={PortfolioPage} />
        <Route exact path={'/portfolio/enterainment-list'} component={ProjectOnePage} />
        <Route exact path={'/portfolio/dnd-helper'} component={ProjectTwoPage} />
        <Route exact path={'/portfolio/quiz-game'} component={QuizGamePage} />
        <Route exact path={'/contact'} component={ContactPage} />
        <Route exact path={'/contact/resume'} component={ResumePage} />
        </HashRouter>
    </>
  )
}

export default App;
