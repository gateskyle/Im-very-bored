import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <Router>
      <div>
        <NavTabs />
        <Route exact path='Portfolio-In-React/' component={AboutMe} />
        <Route exact path='Portfolio-In-React/portfolio' component={PortfolioPage} />
        <Route exact path='Portfolio-In-React/portfolio/enterainment-list' component={ProjectOnePage} />
        <Route exact path='Portfolio-In-React/portfolio/dnd-helper' component={ProjectTwoPage} />
        <Route exact path='Portfolio-In-React/portfolio/quiz-game' component={QuizGamePage} />
        <Route exact path='Portfolio-In-React/contact' component={ContactPage} />
        <Route exact path='Portfolio-In-React/contact/resume' component={ResumePage} />
      </div>
    </Router>
  )
}

export default App;
